import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
    {
    id: 5,
		name: 'galaxy s8',
		year: '2017',
		model:'Samsung galaxy s8',
		make: 'Samsung',
		media: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5930/5930400cv20d.jpg',
		price: ' 530 EUR'

	}, {
		id: 2,
		name: 'galaxy s7 edge',
		year: '2016',
		model:'Samsung galaxy s7',
		make: 'Samsung',
		media: 'https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s7-edge-usa1.jpg',
		price: ' 370 EUR'

	}, {
		id: 3,
		name: 'galaxy s6 edge',
		year: '2015',
		model:'Samsung galaxy s6',
		make: 'Samsung',
		media: 'https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s6-edge-3.jpg',
		price: ' 420 EUR'

	}, {
		id: 4,
		name: 'galaxy s5',
		year: '2014',
		model:'Samsung galaxy s5',
		make: 'Samsung',
		media: 'https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s5-g900f-4.jpg',
		price: ' 250 EUR'
	}, {
		id: 1,
	 name: 'galaxy s9',
	 year: '2018',
	 model:'Samsung galaxy s8',
	 make: 'Samsung',
	 media: 'https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s9-1.jpg',
	 price: ' 840 EUR'

    }
];


render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/cars" component={Car} data={data}/>
            {/* Parameter route*/}
            <Route path="/cars/:id" component={CarDetail} data={data}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);
