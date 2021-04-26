import {StyleSheet} from 'react-native';

export const CardStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
  },
  imageStyles: {
    flex: 1,
  },
  imageContainer: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {},
  extrasContainer: {
    flexDirection: 'row',
  },
  textStyle: {
    color: '#287FCA',
  },
  subTitle: {
    fontWeight: 'bold',
    marginRight: 30,
  },
  titleStyle: {
      fontSize: 16,
      marginBottom: 7,
      lineHeight: 22,
    }
});
