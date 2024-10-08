import { useEffect, useState } from "react";
import { NewTodoForm } from "../Components/NewTodoForm";
// // import "./style.css";
import { TodoList } from "../Components/TodoList";

export const GroceriesPage = () => {
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
			<h1>Groceries</h1>
			<div className="main-notes">
				<NewTodoForm onSubmit={addTodo} />
				<h1 className="header">Todo List</h1>
				<TodoList
					todos={todos}
					toggleTodo={toggleTodo}
					deleteTodo={deleteTodo}
				/>
			</div>
		</>
	);
};
