import CountryDetail from "./CountryDetail"
import CountryList from "./CountryList"

const Country = ({ countries, filter }) => {
  if (!filter.length) {
    return <div />
  }

  const filteredCountries = countries.filter(
    country => country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  let childComponent

  if (filteredCountries.length > 10) {
    childComponent = <div>Too many matches, try a more specific filter</div>
  }
  else if (filteredCountries.length === 1) {
    childComponent = <CountryDetail country={filteredCountries[0]} />
  }
  else {
    childComponent = <CountryList countries={filteredCountries} />
  }

  return (
    <div>
      {childComponent}
    </div>
  )
}

export default Country