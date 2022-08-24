import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: product.imgURL}}
        resizeMode={'contain'}
      />
      <View style={styles.productInfoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.priceText}>{product.price}</Text>
        {!product.inStock && <Text style={styles.inStockText}>STOKTA YOK</Text>}
      </View>
    </View>
  );
};

export default ProductCard;
