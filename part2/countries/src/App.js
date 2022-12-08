import { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = (props) => {
  // console.log('props.countriesToShow', props.countriesToShow)
  
  if (props.countriesToShow.length > 10) {
    return (
      <TooMany />
    )
  }
  if (props.countriesToShow.length > 1) {
    
    // setDisplayCountries(props.countriesToShow)
    return (
      <ul>
        {props.countriesToShow.map(country =>
          <TwoToTen country={country}
            key={props.countriesToShow.indexOf(country)}
            countriesToShow={props.countriesToShow} />)}

      </ul>
    )
  }
  if (props.countriesToShow.length === 1) {
    return (
      <OneCountry country={props.countriesToShow} />
    )
  }
}

const TooMany = () => {
  return (
    <div> Too many</div>
  )
}

const TwoToTen = (props) => {
  const [showOne, setShowOne] = useState(false)

  const handleShow = (event) => {
    console.log('props.country', props.country)
    setShowOne(!showOne)
  }
  return (
    <li>
      {props.country.name.common} <button onClick={handleShow}>show</button>
      {showOne && <OneCountry country={[props.country]} />}
    </li>
  )
}

const OneCountry = (country) => {
  // console.log('oneCountry', country.country[0].name.common)
  // console.log('oneCountry', country)
  const heroCountry = country.country[0]
  console.log('heroCountry', heroCountry)
  // console.log('heroCountry', heroCountry.flags.png)
  const flag = heroCountry.flags.png
  return (
    <>

      <h1>{heroCountry.name.common}</h1>
      captial: {heroCountry.capital}
      <br />
      area: {heroCountry.area}
      <p />
      <h2>languages:</h2>
      <ul>
        {Object.values(heroCountry.languages).map(language =>
          <li key={language}>{language} </li>
        )}
      </ul>

      <img src={flag} alt="country flag" />
    </>
  )
}


function App() {
  const [findCountries, setFindCountries] = useState('')
  const [countries, setCountries] = useState([])



  const handleFilterField = event => {
    setFindCountries(event.target.value)
  }

  useEffect(() => {
    // console.log("effect")
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        // console.log('promise fulfilled')
        setCountries(response.data)
        // console.log('response.data', response.data)
      })
  }, [])

  const countriesToShow = countries.filter(country =>
    country.name.common.toUpperCase()
      .includes(findCountries.trim().toUpperCase()))


  return (
    <>
      <form>
        find countries
        <p />
        <input value={findCountries}
          onChange={handleFilterField}>

        </input>
      </form>
      <p />
      <Countries countriesToShow={countriesToShow}
      />
    </>
  );
}

export default App;