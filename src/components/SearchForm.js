import React from 'react'
import { useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext()
	const searchValue = React.useRef('')
	const handleSubmit = (e) => {
		e.preventDefault()
	}
	const handle = () => {
		setSearchTerm(searchValue.current.value)
	}
	useEffect(() => {
		searchValue.current.focus()
	}, [])
	return (
		<section className='section search'>
			<form className='search-form' onSubmit={handleSubmit}>
				<div className='form-control'>
					<label htmlFor='name'>seacrh your favourite drink</label>
					<input type='text' id='name' ref={searchValue} onChange={handle} />
				</div>
			</form>
		</section>
	)
}

export default SearchForm
