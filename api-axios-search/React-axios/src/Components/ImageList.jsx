import React from 'react'
import ImageItem from '../ImageItem'

const ImageList = ({imagesPlaceholder}) => {
  return (
    <div className='imageList'>
        {
            imagesPlaceholder.map((image, index) => (
                <ImageItem imageItem={image} key={index} />
            ))
        }
    </div>
  )
}

export default ImageList