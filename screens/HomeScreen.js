import React from 'react';
import { StyleSheet, Image, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import WhyUsArticle from '../components/WhyUsArticle';

export default function HomeScreen() {
    const navigation = useNavigation();
    
    return (
        <ScrollView style={styles.contentContainer}>
            <ImageBackground 
            source={require('../assets/backgroundpic.png')}
            style={styles.imageBackground}
            >
            <Text 
            style={styles.header}>
                Make your slam your own jam. 
            </Text>
            </ImageBackground>

            <Text
            style={styles.titleH2}>
                Rackets.
            </Text>


            <Text
            style={styles.bodyText}>
            Whether you're a seasoned pro or just starting out, the right racket can make all the difference in your game. At  Tennso, we are passionate about tennis and dedicated to providing you with a curated selection of top-quality tennis rackets that cater to every playing style and skill level. From lightweight frames for speed and maneuverability to powerful rackets designed for control and precision, we have something for every type of player. Browse through our extensive collection, read user reviews, and take your game to the next level with the perfect tennis racket.</Text>

            <Image
            style={styles.tinyRacket}
            source={require('../assets/AlisonRed.png')}
            />

            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Rackets')}
            >
                <Text style={styles.buttonText}>See all.</Text>
            </TouchableOpacity>

            <Text
            style={styles.titleH2}>
                Why shop with us?
            </Text>
         
            <ScrollView
            horizontal
            contentContainerStyle={styles.whyus}
            >
        
                <WhyUsArticle /> 
          

            </ScrollView>
        </ScrollView>
  );
}

const styles = StyleSheet.create({ 

    contentContainer: {
        paddingBottom: 20, 
      },

    header: {
        color: '#D94A01',
        fontWeight: 'bold',
        fontSize: 32,
        alignSelf: 'left',
        textAlign: 'left',
        margin: 10,
        width: 250,

    },

    imageBackground: {
        width: '100%',
        height: 250, 
        justifyContent: 'center', 
      },

    titleH2: {
        color: '#0D0D12',
        fontWeight: 'bold',
        fontSize: 30,
        margin: 20,
        marginBottom: 10,
    },

    tinyRacket: {
        height: 300,
        width: 150,
        resizeMode: 'scale',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 10,
    },

    bodyText: {
        margin: 20,
        marginBottom: 40,
    },

    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#D94A01',
        justifyContent: 'center', 
        alignSelf: 'center',
        marginBottom: 40,
    }

});



