import React, {Component} from 'react';
import {AsyncStorage, FlatList, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {CardStyles} from './Styles';

class SongCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {image, title, subTitle, duration, navigateToDetails} = this.props;
    const durationInMin = millisToMinutesAndSeconds(duration);
    return (
      <TouchableOpacity
        style={CardStyles.container}
        onPress={navigateToDetails}>
        <View style={CardStyles.imageContainer}>
          <Image source={{uri: image}} style={CardStyles.imageStyles} />
        </View>
        <View style={CardStyles.textContainer}>
          <View style={CardStyles.titleContainer}>
            <Text style={[CardStyles.textStyle, CardStyles.titleStyle]}>
              {title}
            </Text>
          </View>
          <View style={CardStyles.extrasContainer}>
            <Text style={[CardStyles.textStyle, CardStyles.subTitle]}>
              {subTitle}
            </Text>
            <Text style={CardStyles.textStyle}>{durationInMin}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default SongCard;

export function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + 'm ' + (seconds > 0 ? seconds + 's' : '');
}
