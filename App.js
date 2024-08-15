import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from "./screens/HomeScreen";
import RacketsScreen from "./screens/RacketsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import ItemScreen from "./screens/ItemScreen";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function RacketsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RacketsScreen" component={RacketsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ItemScreen" component={ItemScreen} />
    </Stack.Navigator>
  );
}

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
      <Tab.Screen name="Rackets" component={RacketsStack} />
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
