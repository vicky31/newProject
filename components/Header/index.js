import React, {Component} from 'react';
import {
  AsyncStorage,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Text, View} from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {heading} = this.props;
    return (
      <View style={[HeaderStyles.wrapper, {backgroundColor: '#287FCA'}]}>
        <SafeAreaView>
          <Text style={HeaderStyles.heading}>{heading}</Text>
        </SafeAreaView>
      </View>
    );
  }
}

export default Header;

const HeaderStyles = StyleSheet.create({
  wrapper: {
    padding: 15,
    backgroundColor: '#287FCA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
