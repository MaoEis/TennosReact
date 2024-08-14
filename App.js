import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from "./screens/HomeScreen";
import RacketsScreen from "./screens/RacketsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator
       screenOptions ={({route}) => ({
        tabBarIcon:  ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          
          } else if (route.name === 'Rackets') {
            iconName = focused ? 'trophy' : 'trophy';
          } else if (route.name === 'Favorites') { 
            iconName = focused ? 'heart' : 'heart';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: '#D94A01',
        tabBarInactiveTintColor: 'gray',

       })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Rackets" component={RacketsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
    </NavigationContainer>

    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
