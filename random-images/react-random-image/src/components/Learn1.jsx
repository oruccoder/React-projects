import { useState } from "react"
import Courses from "./Courses"


function getRandomCourse(){
    const courseArray = ['Angular', 'Bootstrap', 'Java', 'Csharp']

   return courseArray[Math.floor(Math.random()*courseArray.length)]

}

const Learn1 = () => {

    const [courses, setCourses] = useState([])

    const handelClick = () => {
      setCourses([...courses, getRandomCourse()])
    }
    
  return (
    <div className="App">
        <button className="btn" onClick={handelClick}>Kurs Əlavə Et</button>

        <div className="courseList">
        {
          courses.map((course,index) => (
            <Courses coursName={course} key={index} />
          ))
        }
        </div>

        
    </div>
  )
}

export default Learn1