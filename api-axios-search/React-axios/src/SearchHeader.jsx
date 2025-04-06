import React, { useState } from 'react'

const SearchHeader = ({search}) => {
    const[value, setValue] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault();
        search(value);
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }
  return (
    <div className='searchDiv'>
        <form onSubmit={handleFormSubmit}>
            <label>Nə Axtarırsınız?</label>
            <input value={value} onChange={handleChange} />
        </form>
    </div>
  )
}

export default SearchHeader