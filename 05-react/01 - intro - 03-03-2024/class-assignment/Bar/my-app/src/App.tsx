import { ChangeEvent, FormEvent, useState } from 'react';
import "./dist/styles.css"
interface Human {
  id: string
  name: string,
  lastName: string
}

function App() {
  const [peopleList, setPeopleList] = useState<Human[]>([]);
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.className === "name") {
      setName(event.target.value)
    }
    else if (event.target.className === "lastName") {
      setLastName(event.target.value)
    }
  }

  function handleSubmit(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();

    const newHuman: Human = { id: crypto.randomUUID(), name: name, lastName: lastName }
    setPeopleList([...peopleList, newHuman])
  }

  return (
    <div className="App">
      <form>
        <label>
          Name:
          <input onChange={event => handleChange(event)} type="text" className='name' placeholder='Name' />
        </label>
        <label> Last Name:
          <input onChange={event => handleChange(event)} type="text" className='lastName' placeholder='Last Name' />
        </label>
        <button onClick={(event) => handleSubmit(event)} type='button'>Add</button>
      </form>
      <h1>People:</h1>
      <div >
        {peopleList.map((human) => {
          return (<div className='people' key={human.id}>
            <p>{human.name}</p>
            <p>{human.lastName}</p>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
