import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./style.css";
import { TodoList } from "./TodoList";

export default function App() {
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem("ITEMS");
		if (localValue == null) return [];

		return JSON.parse(localValue);
	});

	useEffect(() => {
		localStorage.setItem("ITEMS", JSON.stringify(todos));
	}, [todos]);

	function addTodo(title) {
		setTodos((currentTodos) => {
			return [
				...currentTodos,
				{ id: crypto.randomUUID(), title, completed: false },
			];
		});
	}

	function toggleTodo(id, completed) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed };
				}

				return todo;
			});
		});
	}

	function deleteTodo(id) {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => todo.id !== id);
		});
	}

	return (
		<>
			<div className="container">
				<div className="sidebar">
					<div className="nav-menu">
						<h1>Add Task</h1>
						<p>Search</p>
						<p>Inbox</p>
						<p>Today</p>
						<p>Upcoming</p>
						<p>Filters & Labels</p>
					</div>
					<div className="grouped-projects">
						<h2>My Projects</h2>
						<p>Fitness</p>
						<p>Groceries</p>
						<p>Appointments</p>
					</div>
					<div className="team">
						<h3>Team</h3>
						<p>New Brand</p>
						<p>Website Update</p>
						<p>Product Roadmap</p>
						<p>Meeting Agenda</p>
					</div>
				</div>
				<div className="main-notes">
					<NewTodoForm onSubmit={addTodo} />
					<h1 className="header">Todo List</h1>
					<TodoList
						todos={todos}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				</div>
			</div>
		</>
	);
}
