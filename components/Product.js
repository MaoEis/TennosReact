import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Product = ({ id, title, productImage, price, onPress }) => {
   const formattedPrice = price?.amount 
    ? (price.amount / 100).toFixed(2) 
    : price;

  return (
    <TouchableOpacity onPress={onPress} style={styles.productContainer}>
      <Image 
        source={{ uri: productImage }} 
        style={[styles.productImage, { width: 100, height: 100 }]}
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
  },
  productImage: {
    resizeMode: 'cover',
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  heartIcon: {
    alignSelf: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#D94A01',
    padding: 10,
  },
});

export default Product;
