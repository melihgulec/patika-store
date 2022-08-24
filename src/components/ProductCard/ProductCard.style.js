import {Dimensions, StyleSheet} from 'react-native';
import {Borders, TextSizes} from '../../constants';
import BoxModel from '../../constants/BoxModel';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: BoxModel.padding,
    backgroundColor: Colors.grey,
    borderRadius: Borders.borderRadius,
  },
  image: {
    height: 200,
    backgroundColor: 'red',
    borderRadius: Borders.borderRadius,
  },
  title: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: TextSizes.medium,
  },
  productInfoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: BoxModel.marginTop
  },
  inStockText: {
    color: Colors.red,
    fontWeight: 'bold',
  },
  priceText: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});
