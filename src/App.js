import './App.css';
import timerOne from "./timerThree.jpg"
import { ToDo } from './ToDo';

function App() {
	return (
		<div className='block_toDo'>
			<div className='container_toDo'>
				<h1>to-do-list</h1>
				<h2>enter your plans for today</h2>
				<ToDo/>
				<img src={timerOne} alt="Timer"/>
			</div>
		</div>
	);
	}

export default App;
