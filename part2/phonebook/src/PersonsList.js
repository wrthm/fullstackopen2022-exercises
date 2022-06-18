const PersonsList = ({ data, filter, handleDeletePerson }) => (
  <div>
    {data.filter((person) =>
      person.name.toLowerCase().startsWith(filter.toLowerCase())).map(
        (person) => (
          <div key={person.id}>
            {person.name} {person.number} <button onClick={() => handleDeletePerson(person.id)}>Delete</button>
          </div>
        )
      )
    }
  </div>
)

export default PersonsList