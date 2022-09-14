import React from "react";
import wikies from '../../wikies';

import './index.css';

class ProjectPage extends React.Component {
	state = {
		project: null,
		error: false
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		setTimeout(() => {
			const project = wikies.find(wiki => wiki.id === id);

			this.setState({
				project: project,
				error: !project
			});
		}, 1000);
	}

	render() {
		const { project, error } = this.state;

		if (error)
			return <div className="container">Что-то пошло не так...</div>

		if (!project) return <div className="container">Загрузка...</div>

		return (
			<div className="project">
				<div className="container">
					<img
						className="project__screenshot"
						src={project.screenshot}
						alt={project.title}
					/>

					<h1 className="project__title">{project.title}</h1>

					<p className="project__description">
						{project.description}
					</p>

				</div>
			</div>
			
		)
	}
}

export default ProjectPage;