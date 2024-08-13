import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Rackets</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Favourites</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();
  
  export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Rackets." component={Catalogus} />
          <Tab.Screen name="Favourites." component={FavPage} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

