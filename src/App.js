import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import HeadText from './components/HeadText/HeadText';
import Colors from './constants/Colors';
import BoxModel from './constants/BoxModel';
import SearchBar from './components/SearchBar/SearchBar';
import ProductCard from './components/ProductCard/ProductCard';
import store_data from './data/store_data';
import {Texts} from './constants';

const App = () => {
  const listNumColumns = 2;

  const renderProduct = ({item, index}) => {
    return (
      <View
        style={{
          flex: 1,
          marginRight: index % 2 == 0 ? BoxModel.marginRight : 0,
          marginTop: index > 1 ? BoxModel.marginTop : 0,
        }}>
        <ProductCard key={item.id} product={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <HeadText text={Texts.appTitle} />
      <SearchBar />
      <FlatList
        keyExtractor={data => data.id}
        data={store_data}
        renderItem={renderProduct}
        numColumns={listNumColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: BoxModel.paddingHorizontal,
    paddingVertical: BoxModel.paddingVertical,
  },
});

export default App;
