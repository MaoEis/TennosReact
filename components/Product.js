import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Product = ({ id, title, racketImg, price, onPress }) => {
   const formattedPrice = price?.amount 
    ? (price.amount / 100).toFixed(2) 
    : price;

  return (
    <TouchableOpacity onPress={onPress} style={styles.productContainer}>
      <Image 
        source={{ uri: racketImg }} 
        style={[styles.racketImg, { width: 170, height: 170 }]}
        onError={(error) => console.error('Image load error:', error.nativeEvent)}
      />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{title}</Text>
        <Icon name="heart-o" size={20} color="gray" style={styles.heartIcon} />
      </View>
      <Text style={styles.productPrice}>
       {price?.currency ? `${formattedPrice} ${price.currency}` : formattedPrice}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    overflow: 'hidden',
    height: 285,
  },

  racketImg: {
    resizeMode: 'resize',


  },

  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginRight: 10,
  },

  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 110,
  },

  heartIcon: {
    alignSelf: 'flex-start'
  },

  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#D94A01',
    padding: 10,
  },
});

export default Product;
