import './App.css'
import Courses from './components/Courses';
import Learn1 from './components/Learn1';

function App() {

  const nameSurname = "Oruc Ramazanov";
  const telebeSay = 12456;
  const istrue = true;
  const type = "text"
  return (
    <>
      {/* <h1>Ad Soyad: {nameSurname}</h1>
      <p>Tələbə Sayı: {telebeSay}</p>
      <p>Dogrudur: {istrue}</p>

      <input type={type} />

      {istrue ? <p>Telebe Say</p> : <p>Kurs say</p>} */}

      {/* <Course title="Angular" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repellendus itaque et, sed unde necessitatibus dolores distinctio! Alias, autem accusantium?" />
      <Course title="React" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repellendus itaque et, sed unde necessitatibus dolores distinctio! Alias, autem accusantium?" />
      <Course title="Vue" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repellendus itaque et, sed unde necessitatibus dolores distinctio! Alias, autem accusantium?" />
      <Course title="Next" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repellendus itaque et, sed unde necessitatibus dolores distinctio! Alias, autem accusantium?" /> */}

      <Learn1 />

      
    </>
  )
}

export default App
