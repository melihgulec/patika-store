import {StyleSheet} from 'react-native';
import Borders from '../../constants/Borders';
import BoxModel from '../../constants/BoxModel';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    borderWidth: Borders.borderWidth,
    borderRadius: Borders.borderRadius,
    backgroundColor: Colors.grey,
    borderColor: Colors.grey,
    paddingLeft: 12,
    marginTop: BoxModel.marginTop,
    marginBottom: BoxModel.marginBottom,
  },
});
