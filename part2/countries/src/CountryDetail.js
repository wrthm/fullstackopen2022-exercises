import Weather from "./Weather"

const CountryDetail = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>Capital {country.capital[0]}</div>
      <div>Area {country.area}</div>
      <div>Population {country.population.toLocaleString()}</div>
      <h3>Languages:</h3>
      <ul>
        {
          Object.keys(country.languages).map(
            language => <li key={language}>{country.languages[language]}</li>)
        }
      </ul>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      <Weather country={country} />
    </div>
  )
}

export default CountryDetail