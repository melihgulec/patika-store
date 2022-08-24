import React from 'react';
import {TextInput} from 'react-native';
import styles from './SearchBar.style';
import Texts from '../../constants/Texts';

const SearchBar = ({placeholder = Texts.searchBarPlaceholder}) => {
  return <TextInput placeholder={placeholder} style={styles.container} />;
};

export default SearchBar;
