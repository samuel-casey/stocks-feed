import React, { useEffect } from 'react';

// [
// 	{
// 		symbol: 'AAPL',
// 		name: 'Apple Inc.',
// 		price: 120.96,
// 		changesPercentage: 0.07,
// 		change: 0.08,
// 		dayLow: 110.89,
// 		dayHigh: 123.7,
// 		yearHigh: 137.98,
// 		yearLow: 52.7675,
// 		marketCap: 2068718419968.0,
// 		priceAvg50: 112.15875,
// 		priceAvg200: 85.41895,
// 		volume: 332607163,
// 		avgVolume: 165778904,
// 		exchange: 'NASDAQ',
// 		open: 120.07,
// 		previousClose: 120.88,
// 		eps: 3.296,
// 		pe: 36.699028,
// 		earningsAnnouncement: '2020-07-30T16:30:00.000+0000',
// 		sharesOutstanding: 17102500165,
// 		timestamp: 1599435459,
// 	},
// ];

// API KEYS
// gmail: 403cc553dc9432172340509a416ece0b
// .edu: d6f9dd11e416adf1828b3011d3c4d76c

export const StockProfile = (props) => {
	const symbol = props.match.params.symbol;
	const FMP_QUOTE_API_URL = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=d6f9dd11e416adf1828b3011d3c4d76c`;

	useEffect(() => {
		console.log('effect - ', symbol);
		callAPI();
	}, []);

	const callAPI = async () => {
		const res = await fetch(FMP_QUOTE_API_URL);
		const data = await res.json();
		let newProfile = data[0];

		props.handleClick(newProfile);
	};

	return (
		// NEED A LINK HERE SO EACH PROFILE GETS ITS OWN PAGE
		<div className='stock-profile'>
			<h1>
				{symbol} ({props.profile.name})
			</h1>
			<h2>{props.profile.price}</h2>
			<h4>
				previous close: {props.profile.previousClose} | open:{' '}
				{props.profile.open}
			</h4>
			<p>24 hour change: {props.profile.changesPercentage}</p>
		</div>
	);
};
