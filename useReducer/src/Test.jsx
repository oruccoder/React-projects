import { useState } from "react"

const Test = () => {
  const[name,setName] = useState('')
  const [submittedName, setSubmittedName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name)
    setName('')
  }
  return (
    <div className='test'>

        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={handleChange} />

          <p>{submittedName}</p>
        </form>

    </div>
  )
}

export default Test