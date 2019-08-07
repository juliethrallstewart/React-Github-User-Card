import React from 'react';
import User from './User.js';
import './App.css';

class App extends React.Component {
	constructor () {
		super();
		this.state = {
			user         : 'juliethrallstewart',
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

	handleUserChange = (e) => {
		this.setState({ user: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.fetchUser();
		this.fetchFollowers();
	};

	fetchUser = () => {
		fetch(`https://api.github.com/users/${this.state.user}`)
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
		fetch(`https://api.github.com/users/${this.state.user}/followers`)
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
			<div className="App">
				<h1>User Card</h1>
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleUserChange} />
					<button style={{ marginLeft: '10px' }}>Search</button>
				</form>
				<User user={this.state.user} followers={this.state.followers} error={this.state.errorMessage} />
			</div>
		);
	}
}

export default App;
