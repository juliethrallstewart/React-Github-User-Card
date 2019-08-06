import React from 'react';
import User from './User.js';

import './App.css';

class App extends React.Component {
	constructor () {
		super();
		this.state = {
			user         : {},
			followers    : [],
			errorMessage : ''
		};
	}

	componentDidMount () {
		this.fetchUser();
		this.fetchFollowers();
	}

	componentDidUpdate (prevProps, prevState) {
		if (prevState.followers !== this.state.followers) {
			console.log('followers changed on state');
		}
	}

	fetchUser = () => {
		fetch(`https://api.github.com/users/juliethrallstewart`)
			.then((response) => {
				// first promise resolution is used to format the data.
				return response.json();
			})
			.then((response) => {
				if (response.status === 404) this.setState({ user: {} });
				else this.setState({ user: response });
			})
			.catch((err) => {
				console.log(err);
				this.setState({ user: {} });
				this.setState({ errorMessage: 'no user of that type found' });
			});
	};

	fetchFollowers = () => {
		fetch('https://api.github.com/users/juliethrallstewart/followers')
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				this.setState({
					followers : response
				});
			})
			.catch((err) => {
				console.log('followers error', err);
			});
	};

	render () {
		console.log('user state', this.state.user);
		console.log('rendered followers', this.state.followers);
		return (
			<div>
				<h1>User Card</h1>
				<User user={this.state.user} followers={this.state.followers} error={this.state.errorMessage} />
			</div>
		);
	}
}

export default App;
