import React from 'react';
import User from './User.js';

import './App.css';

class App extends React.Component {
	constructor () {
		super();
		this.state = {
			user         : {},
			errorMessage : ''
		};
	}

	componentDidMount () {
		this.fetchUser();
	}

	// handleDoggoChange = e => {
	//   this.setState({ dogBreed: e.target.value });
	// };

	// handleSubmit = e => {
	//   e.preventDefault()
	//   this.fetchDoggos()
	// }

	fetchUser = () => {
		fetch(`https://api.github.com/users/juliethrallstewar`)
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

	render () {
		console.log('user state', this.state.user);
		return (
			<div>
				<h1>User Card</h1>
				<User user={this.state.user} error={this.state.errorMessage} />
			</div>
		);
	}
}

export default App;
