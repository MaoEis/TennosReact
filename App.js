import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from "./screens/HomeScreen";

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home.</Text>
    </View>
  );
}

function Rackets() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Rackets.</Text>
    </View>
  );
}

function FavorPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorites.</Text>
    </View>
  );
}

// function HomeScreen ({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello, this is Tennos, and it's all about tennis rackets!</Text>
//       <Text style={styles.text}>More text...</Text>
//       <TextInput style={styles.textInput} placeholder="Text goes here..." />
//       <Image 
//         style={styles.image}
//         source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

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
      <Tab.Screen name="Rackets" component={Rackets} />
      <Tab.Screen name="Favorites" component={FavorPage} />
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
  text: {
    color: 'red'
  },
  textInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#5c5e5d',
    padding: 8
  },
  image: {
    width: 64,
    height: 64,
  }
});
