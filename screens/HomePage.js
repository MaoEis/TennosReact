import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text 
            style={styles.titleH1}>
            Make your slam your very own jam. 
            </Text>
            <Text
            style={styles.titleH2}>
            Rackets.
            </Text>
            <Text
            style={styles.bodyText}>
            Whether you're a seasoned pro or just starting out, the right racket can make all the difference in your game. At  Tennso, we are passionate about tennis and dedicated to providing you with a curated selection of top-quality tennis rackets that cater to every playing style and skill level.

From lightweight frames for speed and maneuverability to powerful rackets designed for control and precision, we have something for every type of player. Browse through our extensive collection, read user reviews, and take your game to the next level with the perfect tennis racket.</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Products')}
                >
                <Text style={styles.buttonText}>See all.</Text>
            </TouchableOpacity>

            <Text
            style={styles.titleH2}>
            Why shop with us.</Text>

            <ScrollView
          horizontal
          contentContainerStyle={styles.whyus}
        >
            
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 22,
    },
});

export default HomeScreen;



