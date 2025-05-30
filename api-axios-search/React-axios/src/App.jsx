import axios from 'axios';
import './App.css'
import SearchHeader from './SearchHeader';
import { useState } from 'react';
import ImageList from './Components/ImageList';

function App() {

  const [images, setImages] = useState([])

  const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID f3GdF04yrpciqZdBwMZFcKGuSFKXnm0ek51qL0wPrWM',
      },
      params: {
        query: term,
      },
    });
    
    console.log(response.data.results);
    
    return response.data.results;
  };

  const handleClick = async(term) => {
    console.log(term);
    
  const result = await searchImages(term)
  setImages(result)
  }

  return (
    <>
      <div className='App'>
        <SearchHeader search={handleClick} />
        <ImageList imagesPlaceholder={images} />
        {/* {
        loading ? <p>Yüklənir...</p> : image.length ===0 ? <p>Heç Bir Məlumat Tapılmadı!</p> :<SearchList imageHandle={image} />
      } */}
      </div>
    </>
  )
}

export default App
