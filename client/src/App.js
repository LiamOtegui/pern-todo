import './App.css';
import InputTodo from './components/inputTodo';
import ListTodo from './components/ListTodo';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <div className="App">
      <div className=''>
        <InputTodo />
        <ListTodo />
        <EditTodo />
      </div>
    </div>
  );
}

export default App;
