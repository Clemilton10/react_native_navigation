import React, { createContext, useState } from 'react';

export const FruitContext = React.createContext();

export const FruitProvider = ({ children }) => {
	const [fruits, setFruits] = useState([
		'uva',
		'banana',
		'laranja',
		'goiaba'
	]);

	const moveUp = (index) => {
		if (index > 0) {
			const newFruits = [...fruits];
			const temp = newFruits[index - 1];
			newFruits[index - 1] = newFruits[index];
			newFruits[index] = temp;
			setFruits(newFruits);
		}
	};

	const moveDown = (index) => {
		if (index < fruits.length - 1) {
			const newFruits = [...fruits];
			const temp = newFruits[index + 1];
			newFruits[index + 1] = newFruits[index];
			newFruits[index] = temp;
			setFruits(newFruits);
		}
	};

	return (
		<FruitContext.Provider value={{ fruits, moveUp, moveDown }}>
			{children}
		</FruitContext.Provider>
	);
};
