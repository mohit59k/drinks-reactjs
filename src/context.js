import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true)
	const [searchTerm, setSearchTerm] = useState('a')
	const [cocktails, setCockTails] = useState([])
	const fetchData = async () => {
		try {
			const cocktailResp = await fetch(`${url}${searchTerm}`)
			const cocktailData = await cocktailResp.json()
			const { drinks } = cocktailData
			if (drinks) {
				const newCocktails = drinks.map((drink) => {
					const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
						drink
					return {
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
						alcholic: strAlcoholic,
						glass: strGlass,
					}
				})
				setCockTails(newCocktails)
			} else {
				setCockTails([])
			}
			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}
	useEffect(() => {
		fetchData()
	}, [searchTerm])
	return (
		<AppContext.Provider
			value={{
				loading,
				setSearchTerm,
				cocktails,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }
