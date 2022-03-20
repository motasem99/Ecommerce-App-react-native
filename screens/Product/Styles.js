import { ScaledSheet } from 'react-native-size-matters';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const imageDim = width;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: imageDim,
    height: imageDim,
  },
  iconTitleWrapper: {
    position: 'absolute',
    flexDirection: 'row',
  },
  backIcon: {
    fontSize: '32@s',
    color: '#fff',
    paddingStart: '20@s',
    paddingVertical: '10@s',
  },
  productTitle: {
    fontSize: '18@s',
    fontWeight: 'bold',
    color: '#fff',
  },
  titleWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  wrapper: {
    flex: 1,
    padding: '10@s',
  },
  descriptionText: {
    fontSize: '18@s',
    color: '#bbb',
    paddingVertical: '10@s',
  },
});

export default styles;
