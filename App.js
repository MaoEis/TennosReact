import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import screen components
// import HomePage from "./screens/HomePage";
// import FavPage from "./screens/FavPage";
// import Catalogus from "./screens/Catalogus";
// import ItemPage from "./screens/ItemPage";
// import TabNav from "./components/TabNav";

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

function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, this is Tennos, and it's all about tennis rackets!</Text>
      <Text style={styles.text}>More text...</Text>
      <TextInput style={styles.textInput} placeholder="Text goes here..." />
      <Image 
        style={styles.image}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Rackets" component={Rackets} />
      <Tab.Screen name="Favorites" component={FavorPage} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs">
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }} // Hide header if not needed
        />
        <Stack.Screen
          name="Rackets"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: "#FFFCF5" },
            headerTintColor: "#0D0D12",
            headerTitleAlign: "left",
            animation: "none",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Rackets"
//           component={HomeScreen}
//           options={{
//             headerStyle: { backgroundColor: "#FFFCF5" },
//             headerTintColor: "#0D0D12",
//             headerTitleAlign: "left",
//             animation: "none",
//           }}
//         />
//       <Stack.Screen name="MainTabs" component={TabNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

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
