import React, { useState, useEffect } from 'react';
import { View, Text, Platform, ScrollView, StyleSheet } from 'react-native';

const RacketsScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  const getProducts= async () => {
    try {
      let url;
      if (Platform.OS == "android") {
        //ddev describe om port number te weten te komen
        url = `http://10.0.2.2:63130/api/rackets/`;
      } else {
        url = "https://examen-v1.ddev.site/api/rackets/";
      }

      const response = await fetch(url, {
        method: "GET",
      });

      const json = await response.json();

      setProducts(json.items);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
}, []);



  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Rackets.</Text>
      {products.map((product, index) => (
        <View key={index} style={styles.productCard}>
          <Text style={styles.image}>{product.racketImg}</Text>
          <view>
          <Text style={styles.productTitle}>{product.title}</Text>
          <icon> Icon heart </icon>
          </view>
          <Text style={styles.price}>{product.price}</Text>

        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productCard: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    marginBottom: 10,
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default RacketsScreen;
