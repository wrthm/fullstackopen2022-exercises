const Persons = ({ data, filter }) => (
  <div>
    {data.filter((person) => person.name.toLowerCase().startsWith(filter.toLowerCase())).map((person) => <div key={person.name}>{person.name} {person.number}</div>)}
  </div>
)

export default Persons