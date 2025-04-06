import React from 'react'
import SearchHeader from './SearchHeader'
import axios from 'axios'

const AgainLearn = () => {

    const searchImages = async() => {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            headers: {
                Authorization: 'Client-ID f3GdF04yrpciqZdBwMZFcKGuSFKXnm0ek51qL0wPrWM',
            },
            params: {
                query:term
            }
        })

        console.log(response);
        
    }

    const handleClick = (term) => {
        console.log(term);
        searchImages(term)
    }
  return (
    <div>
        <SearchHeader search={handleClick} />
    </div>
  )
}

export default AgainLearn