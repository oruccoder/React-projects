import React from 'react'

const ImageItem = ({imageItem}) => {
    console.log(imageItem);
    
  return (
    <div>
        <img className='imageListimg' src={imageItem.urls.regular} alt={imageItem.alt_description} />
    </div>
  )
}

export default ImageItem