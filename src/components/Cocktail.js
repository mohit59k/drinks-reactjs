import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, name, image, alcholic, galss }) => {
	console.log(image)
	return (
		<article className='cocktail'>
			<div className='img-container'>
				<img src={image} alt={name} />
			</div>
			<div className='cocktail-footer'>
				<h3>{name}</h3>
				<h4>{galss}</h4>
				<p>{alcholic}</p>
				<Link to={`/pages/${id}`} className='btn btn-primary btn-details'>
					Details
				</Link>
			</div>
		</article>
	)
}

export default Cocktail
