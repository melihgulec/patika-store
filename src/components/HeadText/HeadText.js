import React from 'react';
import {Text} from 'react-native';
import styles from './HeadText.style';

const HeadText = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default HeadText;
