// Before
// import { useEffect, useState } from "react";
// import { NewTodoForm } from "./Components/NewTodoForm";
// import "./style.css";
// import { TodoList } from "./Components/TodoList";

// export default function App() {
// 	const [todos, setTodos] = useState(() => {
// 		const localValue = localStorage.getItem("ITEMS");
// 		if (localValue == null) return [];

// 		return JSON.parse(localValue);
// 	});

// 	useEffect(() => {
// 		localStorage.setItem("ITEMS", JSON.stringify(todos));
// 	}, [todos]);

// 	function addTodo(title) {
// 		setTodos((currentTodos) => {
// 			return [
// 				...currentTodos,
// 				{ id: crypto.randomUUID(), title, completed: false },
// 			];
// 		});
// 	}

// 	function toggleTodo(id, completed) {
// 		setTodos((currentTodos) => {
// 			return currentTodos.map((todo) => {
// 				if (todo.id === id) {
// 					return { ...todo, completed };
// 				}

// 				return todo;
// 			});
// 		});
// 	}

// 	function deleteTodo(id) {
// 		setTodos((currentTodos) => {
// 			return currentTodos.filter((todo) => todo.id !== id);
// 		});
// 	}

// 	return (
// 		<>
// 			<div className="container">
// 				<div className="sidebar">
// 					<div className="nav-menu">
// 						<h2>Add Task</h2>
// 						<img
// 							src="https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png"
// 							alt="search"
// 						/>
// 						<p>Search</p>
// 						<img
// 							src="https://static-00.iconduck.com/assets.00/inbox-icon-2048x1777-jv8xqpte.png"
// 							alt="inbox"
// 						/>
// 						<p>Inbox</p>
// 						<img
// 							src="https://cdn-icons-png.freepik.com/256/9737/9737147.png?semt=ais_hybrid"
// 							alt="today"
// 						/>
// 						<p>Today</p>
// 						<img
// 							src="https://static.vecteezy.com/system/resources/previews/010/851/447/original/calendar-flat-icon-png.png"
// 							alt="calendar"
// 						/>
// 						<p>Upcoming</p>
// 						<img
// 							src="https://images.vexels.com/content/199989/preview/label-tag-icon-7d14d0.png"
// 							alt="labels"
// 						/>
// 						<p>Filters & Labels</p>
// 					</div>
// 					<div className="grouped-projects">
// 						<h2>My Projects</h2>
// 						<p># Fitness</p>
// 						<p># Groceries</p>
// 						<p># Appointments</p>
// 					</div>
// 					<div className="team">
// 						<h2>Team</h2>
// 						<p>New Brand</p>
// 						<p>Website Update</p>
// 						<p>Product Roadmap</p>
// 						<p>Meeting Agenda</p>
// 					</div>
// 				</div>
// 				<div className="main-notes">
// 					<NewTodoForm onSubmit={addTodo} />
// 					<h1 className="header">Todo List</h1>
// 					<TodoList
// 						todos={todos}
// 						toggleTodo={toggleTodo}
// 						deleteTodo={deleteTodo}
// 					/>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// After

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { GroceriesPage } from "./Pages/GroceriesPage";
import { TodayPage } from "./Pages/TodayPage";
import { FitnessPage } from "./Pages/FitnessPage";
import { AppointmentPage } from "./Pages/AppointmentPage";
import "./style.css";
import { Layout } from "./Layout";

export default function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route element={<Layout />}>
						<Route
							path="/"
							element={<HomePage />}
						/>
						<Route
							path="/TodayPage"
							element={<TodayPage />}
						/>
						<Route
							path="/GroceriesPage"
							element={<GroceriesPage />}
						/>
						<Route
							path="/FitnessPage"
							element={<FitnessPage />}
						/>
						<Route
							path="/AppointmentPage"
							element={<AppointmentPage />}
						/>
					</Route>
				</Routes>
			</Router>
		</>
	);
}
