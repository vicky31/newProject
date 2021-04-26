import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {splashStyles} from './Styles';
import {logo} from '../../assets';
class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation?.navigate('Home');
    }, 2000);
  }

  render() {
    return (
      <View style={splashStyles.container}>
        <Image
          source={logo}
          resizeMode={'contain'}
          style={splashStyles.image}
        />
      </View>
    );
  }
}

export default Splash;
