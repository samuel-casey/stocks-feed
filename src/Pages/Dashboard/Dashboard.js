import React from 'react';
import './Dashboard.css';
import { portfolio } from '../../portfolio';
import { Link } from 'react-router-dom';

export const Dashboard = (props) => {
	let stockList = portfolio.map((item) => {
		return (
			<span className='stock-link' key={item}>
				<span>
					<Link to={'/stockProfile/' + item}>{item}</Link>
				</span>
				<hr></hr>
			</span>
		);
	});
	return (
		<div className='dashboard'>
			<h1>Watch list</h1>
			<div>{stockList}</div>
		</div>
	);
};
