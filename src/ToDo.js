import { Component } from "react";

export class ToDo extends Component{
	state={
		inputField:"",
		toDoList:[]
	}

	onChangeInput=(e)=>{
		this.setState({
			inputField:e.target.value
		})
	}

	btnAddEvent(input){
		if(input === ""){
			alert("Whrite what you want to do!")
		}
		else{
			let userInput = this.state.toDoList;
			userInput.push(input);
			this.setState({toDoList:userInput, inputField:""})
		}
	}

	btnDeleteEvent(){
		let userInput = this.state.toDoList;
		userInput = [];
		this.setState({toDoList:userInput})
		// this.state.toDoList = [];
		// this.setState({toDoList:[]})
	}

	crossedWord(e){
		let li = e.target;
		li.classList.toggle("crossedLi")
		// e.target.classList.toggle("crossedLi")
	}

	submitForm(e){
		e.preventDefault()
	}

	render(){
		return(
			<div>
				<form  className="toDo_flex" onSubmit={this.submitForm}>

					<div className="toDo_input">
						<input 
						type="text"
						placeholder="Write your plans here!"
						value={this.state.inputField}
						onChange={this.onChangeInput}
						/>
					</div>

					<div className="toDo_btn add">
						<button onClick={()=>this.btnAddEvent(this.state.inputField)}>Add</button>
					</div>

					<div className="toDo_btn delete">
						<button onClick={()=>this.btnDeleteEvent()}>Delete all events</button>
					</div>

					<ul className="toDo_list">
						{this.state.toDoList.map((item, index)=>(
							<li onClick={this.crossedWord} key={index}>
								{item}
							</li>
						))}
					</ul>
					

				</form>
			</div>
		)
	}
}