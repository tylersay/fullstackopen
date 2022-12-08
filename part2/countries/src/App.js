import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'



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
