import React from "react";
import "./WikiItem.css";

import { Link } from 'react-router-dom';

function WikiItem({ wiki }) {
	return (
		<Link to={`/project/${wiki.id}`} className='wiki-item'>
			<img 
				className="wiki-item__screenshot"
				src={wiki.screenshot2}
				alt={wiki.title}
			/>
			<div className="wiki-item__title">{wiki.title}</div>
		</Link>
	);
}

export default WikiItem;