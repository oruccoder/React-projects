import React, { useState } from 'react'
import Course from './Course'
import {FaChevronLeft ,FaChevronRight } from 'react-icons/fa'

const Courses = ({courses}) => {
  const[index,setIndex] = useState(0)
  const{id,content,title,price} = courses[index]

  const checkIndex = (index) => {
    if(index < 0){
        return courses.length - 1;
    }
    if(index > courses.length -1){
      return 0;
    }
    return index
  }

  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index -1;
      return checkIndex(newIndex)
    })
  }

  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex)
    })
  }
  return (
    <div className='courseMainDiv'>
      <div className='myCourses'>
        Kurslarım
      </div>


      <div className='cartDiv'>
        <button className='previosButton' onClick={prevCourse}>
          <FaChevronLeft />
        </button>
      <div className='card'>
        <div className='cartTitlePrice'>
            <h1 className='cartTitle'>{title}</h1>
            <h4 className='cardPrice'>{price} Azn</h4>
        </div>
        <p>{content}</p>
    </div>
    <button className='previosButton' onClick={nextCourse}>
      <FaChevronRight />
    </button>
      </div>


      {/* <div className='cartDiv'>
        {
          courses.map((course) => (
            <Course key={course.id} {...course} removeOneCourse={removeOneCourse} />
          ))
        }
      </div> */}
    </div>
  )
}

export default Courses