import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li className= 'App-link'>{value}</li>
  );
}

const myTasks = [1, 2, 3, 4, 5];

const taskListRead = (taskListWrite) =>{
  let taskOrder = [];
  for (let index = 0; index < taskListWrite.length; index++) {
   task(taskListWrite[index]);
  }
  
}



function App() {
  return (
    <div className="App">
      {myTasks.map(task(index))}
    </div>
  );
}

export default App;
