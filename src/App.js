import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { StockProfile } from './Components/StockProfile';
import { About } from './Pages/About';
import './App.css';

function App() {
	const [profile, setProfile] = useState({});

	const handleClick = (profile) => {
		console.log('handler -', profile);
		setProfile(profile);
	};

	return (
		<>
			<nav>
				<Link to='/'>
					<h1>StocksDash</h1>
				</Link>
				<div className='not-home'>
					<Link to='/dashboard'>
						<h3>Dashboard</h3>
					</Link>
					<Link to='/about'>
						<h3>About</h3>
					</Link>
				</div>
			</nav>
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/Dashboard/' component={Dashboard} />
					<Route
						path='/stockProfile/:symbol'
						render={(routerProps) => {
							return (
								<StockProfile
									{...routerProps}
									handleClick={handleClick}
									profile={profile}
								/>
							);
						}}
					/>
					<Route path='/About' component={About} />
				</Switch>
			</main>
		</>
	);
}

export default App;
