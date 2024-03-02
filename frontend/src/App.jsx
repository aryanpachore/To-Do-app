import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{CreateTodo} from './Components/CreateTodo'
import{Todo} from './Components/Todo'
function App() {
  const [count, setCount] = useState(0)


  fetch("http://localhost3000/todo")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
  })

  return (
    <div>
     <CreateTodo/>
     <Todo todos={[{
      title:"sdfc",
      description:"dasd",
      completed:false
     }]}></Todo>
    </div>
  )
}

export default App
