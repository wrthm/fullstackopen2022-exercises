const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ parts }) => {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0)

  return (
    <p>
      <b>
        total of exercises {total}
      </b>
    </p>
  )
}

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <div>
    {parts.map((part) => <Part key={part.id} part={part} />)}
  </div>

const Course = ({ course }) => {
  const { name, parts } = course

  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default Course