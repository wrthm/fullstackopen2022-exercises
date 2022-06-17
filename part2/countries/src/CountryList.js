const CountryList = ({ countries, setFilter }) => {
  const showCountryCallback = country => () => setFilter(country)

  return countries.map(country => (
    <div key={country.cca2}>
      {country.name.common} <button onClick={showCountryCallback(country.name.common)}>Show</button>
    </div>
  ))
}

export default CountryList