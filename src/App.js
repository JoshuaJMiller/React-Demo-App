import { useState } from "react"
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  // const name = 'Ricky'
  // const myBool = true

    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState(
    [
        {
        id: 1,
        text: 'Food Shopping',
        day: 'Feb 2 at 3:30pm',
        reminder: false,
        },
        {
            id: 2,
            text: 'Crush It',
            day: 'Feb 4 at 4:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Melt Brains',
            day: 'Feb 8 at 5:30pm',
            reminder: false,
        },
    ])


  const addTask = (task) =>
  {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) =>
  {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  const toggleReminder = (id) =>
  {
    console.log(id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    // JSX
    <div className="container">
      {/* <h1>
        Hello from React
      </h1>
      <h2>
        Hello {myBool ? name : 'no'}
      </h2> */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {
        tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} 
        onToggle={toggleReminder} />) : ('No Tasks To Show')
      }
    </div>
  );
}

export default App;
