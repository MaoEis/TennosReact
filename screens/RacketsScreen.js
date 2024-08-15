import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Platform, StyleSheet } from 'react-native';
import Product from '../components/Product'; // Assume this path is correct

const RacketsScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let url;
      if (Platform.OS == 'android') {
        url = 'http://10.0.2.2:63130/api/rackets/';
      } else {
        url = 'https://examen-v1.ddev.site/api/rackets/';
      }

      const response = await fetch(url);
      const json = await response.json();
      setProducts(json.items);
      console.log(json.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      {/* Placeholder for Filter component */}
      {/* <Filter onSortChange={handleSortChange} /> */}
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => {
          if (Platform.OS === 'android') {
            item.racketImg = item.racketImg.replace('examen-v1.ddev.site', '10.0.2.2:63130');
          }

          return (
            <Product
              id={item.id}
              title={item.title}
              racketImg={item.racketImg}
              price={item.price}
              onPress={() =>
                navigation.navigate('ItemScreen', { item 
                })
              }
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default RacketsScreen;
