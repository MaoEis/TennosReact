import React,{ useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Product = ({ id, title, racketImg, price, onPress }) => {
  const [isFavorite, setIsFavorite] = useState(false); // set favs
  
  const formattedPrice = price?.amount 
    ? (price.amount / 100).toFixed(2) 
    : price; // make amount into xx.xx
  
  const handleFavoriteToggle = () => { setIsFavorite((prev) => !prev);};

  return (
    <View style={styles.productContainer}> 
      <TouchableOpacity onPress={onPress} style={styles.image}>
        <Image 
        source={{ uri: racketImg }} 
        style={[styles.racketImg, { width: 170, height: 170 }]}
        />
      </TouchableOpacity>
      
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>{title}</Text>
          <TouchableOpacity onPress={handleFavoriteToggle} style={styles.heartIcon}>
            <Icon
              name={isFavorite ? 'heart' : 'heart-o'}
              size={20}
              color={isFavorite ? '#D94A01' : 'gray'}
            />
          </TouchableOpacity>
        </View>

      <Text style={styles.productPrice}>
       {price?.currency ? `${formattedPrice} ${price.currency}` : formattedPrice}
      </Text>
      
      </View>
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
