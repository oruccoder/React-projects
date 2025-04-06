import Angular from '../images/angular.png';
import Bootstrap from '../images/bootstrap.png'
import Java from '../images/Java.png'
import Csharp from '../images/csharp.jpeg'

const courseMap = {
  Angular: Angular,
  Bootstrap: Bootstrap,
  Java: Java,
  Csharp: Csharp
}

const Courses = ({coursName}) => {
  console.log(coursName);
  
  return (
    <div className='courseimg'>
        <div className='coursesimg'>
        <img src={courseMap[coursName]} alt="" />
        </div>
    </div>
  )
}

export default Courses