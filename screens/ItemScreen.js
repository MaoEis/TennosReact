import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ItemScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  useEffect(() => {
    if (item?.title) {
      navigation.setOptions({ title: item.title });
    }
  }, [item?.title, navigation]);

  if (!item) {
    return <Text>Item data is missing!</Text>;
  }

  const formattedPrice = (item.price.amount / 100).toFixed(2);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.racketImg} source={{ uri: item.racketImg }} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>{formattedPrice} {item.price.currency}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   padding: 20,
  // },

  racketImg: {
    width: '100%',
    height: 350,
    marginBottom: 10,
    borderRadius: 8,
    resizeMethod: 'scale',
  },

  productTitle: {
    margin: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },

  productDescription: {
    fontSize: 16,
    color: '#666',
    margin: 20,
  },
  productPrice: {
    fontSize: 20,
    color: '#D94A01',
    marginTop: 10,
    margin: 20,
    fontWeight: 'bold',
  },
  productColor: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default ItemScreen;
