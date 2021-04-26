import {StyleSheet} from 'react-native';

export const DetailsStyle = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    padding: 20,
    marginBottom: 30,
  },
  imageStyles: {
    flex: 1,
  },
  imageContainer: {
    width: 150,
    height: 150,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  titleContainer: {},
  extrasContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textStyle: {
    color: '#287FCA',
  },
  subTitle: {
    fontWeight: 'bold',
    marginRight: 30,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
