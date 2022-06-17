const CountryList = ({ countries, setFilter }) => {
  return countries.map(country => (
    <div key={country.cca2}>
      {country.name.common} <button onClick={() => setFilter(country.name.common)}>Show</button>
    </div>
  ))
}

export default CountryList