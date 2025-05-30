import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Courses from './Courses'
import Loading from './Loading'

function App() {

  const removeOneCourse = (id) => {
    const deleteBtn = courses.filter((course) => course.id !==id);
    SetCourses(deleteBtn)
  }

  const[courses,SetCourses] = useState([])
  const[loading,setLoading] = useState(false)

  const fetchCourses = async() => {
    setLoading(true)
    try{
      const response = await axios.get('http://localhost:3000/courses')
    SetCourses(response.data)
    setLoading(false)
    }
    catch(error){
      setLoading(true)
    }
  }

  useEffect(() =>{
    fetchCourses();
  },[])
  return (
    <div>
      {loading ? (
        <Loading />
      ): (
        <>
        {courses.length === 0 ? (
          <div className='alldeletes'>
            <h2>Kursların Hamısını Sildin!</h2>
            <button className='cardDeleteBtn' onClick={fetchCourses}>Yenilə</button>
          </div>
        ) : <Courses courses={courses} removeOneCourse={removeOneCourse} />}
        </>
      )}
    </div>
  )
}

export default App
