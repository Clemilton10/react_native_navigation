import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Feed from '../screens/Feed';
import News from '../screens/News';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: true,
				tabBarActiveTintColor: 'black',
				tabBarInactiveTintColor: 'grey',
				tabBarActiveBackgroundColor: 'white',
				tabBarInactiveBackgroundColor: '#efefef',
				tabBarLabelStyle: {
					fontSize: 20
				},
				tabBarStyle: {
					borderTopWidth: 0,
					elevation: 0,
					borderColor: 'transparent',
					overflow: 'hidden'
					/*borderTopLeftRadius: 25,
					borderTopRightRadius: 25*/
				}
				/*style: {
					borderTopLeftRadius: 25,
					borderTopRightRadius: 25
				},*/
			}}
		>
			<Tab.Screen
				name="Feed"
				component={Feed}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Feather name="home" color={color} size={size} />
					),
					tabBarLabel: 'Início'
				}}
			/>
			<Tab.Screen
				name="News"
				component={News}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Feather name="plus" color={color} size={size} />
					),
					tabBarLabel: 'Novo'
				}}
			/>
		</Tab.Navigator>
	);
}
