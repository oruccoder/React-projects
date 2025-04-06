import { useState } from "react"
import Courses from "./components/Courses"

function getRandomCourse(){
  const courseArray=['Angular', 'Bootstrap', 'Java', 'Csharp']

  return courseArray[Math.floor(Math.random()*courseArray.length)]
} 

const Course = ({title, description}) => {

  const[courses, setCourses] = useState([])

  const handelClick = () => {
    setCourses([...courses, getRandomCourse()])
  }
  return (
    <div>
        <h1>{title}</h1>
        <span>{description}</span>

        <button onClick={handelClick}>Change image</button>

        {
          courses.map((course,index) => (
            <Courses coursName={course} key={index} />
          ))
        }

    </div>
  )
}

export default Course