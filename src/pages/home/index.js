import React from "react";

import About from '../../components/About/About';
import WikiItem from '../../components/WikiItem/WikiItem';

import wikies from '../../wikies';

class HomePage extends React.Component {
	state = {
		closed: true
	};

	openForm() {
		this.setState({
			closed: false
		});
	}

	closeForm() {
		this.setState({
			closed: true
		});
	}

	render() {
		return (
			<div>
				<About title='Мини-Википедия по Вселенной Warhammer 40.000'>
					<p>
						Обзор основных противоборствующих сторон в мире бесконечной войны!
					</p>
				</About>
				
				<div className="race-card">
					<div className="container">
						{wikies.map(wiki => (
							<WikiItem key={wiki.id} wiki={wiki} />						
						))}
					</div>
				</div>
			</div>
		)
	}
}

export default HomePage;