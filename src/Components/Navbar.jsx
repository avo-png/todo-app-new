import { Link } from "react-router-dom";

export function Navbar() {
	return (
		<>
			<div className="container--navbar">
				<div className="sidebar">
					<div className="nav-menu">
						{/* <Link to="/">
							<h2>Add Task</h2>
						</Link>
						<img
							src="https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png"
							alt="search"
						/>
						<p>Search</p>
						<img
							src="https://static-00.iconduck.com/assets.00/inbox-icon-2048x1777-jv8xqpte.png"
							alt="inbox"
						/>
						<p>Inbox</p>
						<img
							src="https://cdn-icons-png.freepik.com/256/9737/9737147.png?semt=ais_hybrid"
							alt="today"
						/>
						<Link to="/TodayPage">
							<p>Today</p>
						</Link>
						<img
							src="https://static.vecteezy.com/system/resources/previews/010/851/447/original/calendar-flat-icon-png.png"
							alt="calendar"
						/>
						<Link to="/ProjectPage">
							<p>Upcoming</p>
						</Link>
						<img
							src="https://images.vexels.com/content/199989/preview/label-tag-icon-7d14d0.png"
							alt="labels"
						/>
						<p>Filters & Labels</p> */}
						<div className="grouped-projects">
							<Link to="/TodayPage">
								<h2>My Projects</h2>
							</Link>
							<Link to="/FitnessPage">
								<h3># Fitness</h3>
							</Link>
							<Link to="/GroceriesPage">
								<h3># Groceries</h3>
							</Link>
							<Link to="/AppointmentPage">
								<h3># Appointments</h3>
							</Link>
							{/* <p># Fitness</p>
							<p># Groceries</p>
							<p># Appointments</p> */}
						</div>
						<div className="team">
							<h2>Team</h2>
							<p>New Brand</p>
							<p>Website Update</p>
							<p>Product Roadmap</p>
							<p>Meeting Agenda</p>
						</div>
					</div>
				</div>
				{/* <div className="main-notes">
					<NewTodoForm onSubmit={addTodo} />
					<h1 className="header">Todo List</h1>
					<TodoList
						todos={todos}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				</div> */}
			</div>
		</>
	);
}
