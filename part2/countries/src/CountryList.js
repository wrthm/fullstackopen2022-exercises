const CountryList = ({ countries }) => {
  return countries.map(country => <div key={country.cca2}>{country.name.common}</div>)
}

export default CountryList