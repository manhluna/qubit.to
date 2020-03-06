import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'
import HomePage from './Containers/HomePage/Index'
import AdminPage from './Containers/AdminPage/Index'

function App() {
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/admin">Admin</Link>
					</li>
				</ul>
			</nav>

			<Switch>
				<Route path="/admin">
					<AdminPage />
				</Route>
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
		</Router>
	)
}

export default App