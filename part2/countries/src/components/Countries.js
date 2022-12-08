import { useState, useEffect } from 'react'

import Weather from './Weather'

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
    const heroCountry = country.country[0]
    // console.log('heroCountry', heroCountry)
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
            <p />
            <Weather capital={heroCountry.capital} />

        </>
    )
}



export default Countries