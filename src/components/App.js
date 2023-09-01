
import React ,{useState} from "react";
import './../styles/App.css';

const App = () => {
 
  const[input,setInput]=useState('');
  const[tasks,setTasks]=useState([]);

  console.log('input: ',input);
  console.log('tasks: ',tasks);
  function add(){
    setTasks([...tasks,input]);
  }

  function deleteTask(task){
     setTasks(tasks.filter((t)=>{
          if(t!==task) return t;
     }))
  }


  return (
    <div style={{textAlign:'center'}}>
        {/* Do not remove the main div */}
        <p>To-Do List</p>
         <div>
          <input type='text'  value={input} onChange={(e)=>setInput(e.target.value)}/>
          <button onClick={add}>Add Todo</button>
         </div>
         <ul>
           {tasks.length>0 && tasks.map((task,index)=>{
            return <li style={{display:'flex',justifyContent:'space-between'}} key={index}>
             <span>{task}</span> 
             <button onClick={()=>deleteTask(task)}>Delete</button>
            </li>
           })}
         </ul>
    </div>
  )
}

export default App