import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './drawer.routes';
import { FruitProvider } from '../api/FruitContext';

export default function Routes() {
	return (
		<NavigationContainer>
			<FruitProvider>
				<DrawerRoutes />
			</FruitProvider>
		</NavigationContainer>
	);
}
