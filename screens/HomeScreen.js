import React from 'react';
import { StyleSheet, Text, ScrollView, ImageBackground } from 'react-native';

export default function HomeScreen() {
  return (
        <ScrollView style={styles.overview}>
        <ImageBackground 
        source={require('../assets/backgroundpic.png')}
        style={{width: '100%', height: '80%'}}
        >
            <Text 
            style={styles.header}>
                Make your slam your very own jam. 
            </Text>
            </ImageBackground>
            <Text
            style={styles.titleH2}>
                Rackets.
            </Text>
            <Text
            style={styles.bodyText}>
            Whether you're a seasoned pro or just starting out, the right racket can make all the difference in your game. At  Tennso, we are passionate about tennis and dedicated to providing you with a curated selection of top-quality tennis rackets that cater to every playing style and skill level. From lightweight frames for speed and maneuverability to powerful rackets designed for control and precision, we have something for every type of player. Browse through our extensive collection, read user reviews, and take your game to the next level with the perfect tennis racket.</Text>

{/* <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('Products')}
    >
    <Text style={styles.buttonText}>See all.</Text>
</TouchableOpacity> */}

            <Text
            style={styles.titleH2}>
                Why shop with us.
            </Text>
{/* 
<ScrollView
horizontal
contentContainerStyle={styles.whyus}
>
</ScrollView> */}
        </ScrollView>
  );
}

const styles = StyleSheet.create({ 

    overview: {
        flex: 1,
      },

    header: {
        color: '#D94A01',
        fontWeight: 'bold',
        fontSize: 32,
        alignSelf: 'center',
        textAlign: 'center',
        margin: 10,

    },

    imageBackground: {
        width: '100%',
        height: 300, 
        justifyContent: 'center', 
      },

    contentContainer: {
        padding: 20,
    },

    titleH2: {
        color: '#0D0D12',
        fontWeight: 'bold',
        fontSize: 30,
        margin: 20
    },

    bodyText: {
        margin: 40,
    },

    

});



