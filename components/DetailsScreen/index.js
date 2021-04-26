import React, {Component} from 'react';
import {AsyncStorage, FlatList, Image, ScrollView} from 'react-native';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import Header from '../Header';
import {millisToMinutesAndSeconds} from '../SongCard';
import {DetailsStyle} from './Styles';

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const {state: {params: {data = {}} = {}} = {}} = this.props.navigation;
    console.log(data);
    this.setState({data});
  }

  render() {
    const {data = {}} = this.state;
    const {
      artworkUrl100,
      trackName,
      artistName,
      trackTimeMillis,
      releaseDate,
      trackPrice,
      country,
      primaryGenreName,
      collectionCensoredName,
    } = data;
    const durationInMin = millisToMinutesAndSeconds(trackTimeMillis);
    return (
      <View style={DetailsStyle.flexOne}>
        <Header heading={'DETAILS'} />
        <SafeAreaView style={DetailsStyle.flexOne}>
          <ScrollView>
            <View style={DetailsStyle.container}>
              <View style={DetailsStyle.imageContainer}>
                <Image
                  source={{uri: artworkUrl100}}
                  style={DetailsStyle.imageStyles}
                />
              </View>
              <View style={DetailsStyle.textContainer}>
                <View style={DetailsStyle.titleContainer}>
                  <Text
                    style={[DetailsStyle.textStyle, DetailsStyle.titleStyle]}>
                    {trackName}
                  </Text>
                </View>

                <Text style={[DetailsStyle.textStyle, DetailsStyle.subTitle]}>
                  {artistName}
                </Text>
                <Text style={DetailsStyle.textStyle}>{durationInMin}</Text>
              </View>
            </View>
            <View style={DetailsStyle.extrasContainer}>
              <View style={DetailsStyle.rowContainer}>
                <Text style={DetailsStyle.textStyle}>{'Release Date'}</Text>
                <Text style={DetailsStyle.textStyle}>
                  {new Date(releaseDate).toLocaleDateString()}
                </Text>
              </View>
              <View style={DetailsStyle.rowContainer}>
                <Text style={DetailsStyle.textStyle}>{'Price'}</Text>
                <Text style={DetailsStyle.textStyle}>
                  {trackPrice > 0 ? trackPrice : 0}
                </Text>
              </View>
              <View style={DetailsStyle.rowContainer}>
                <Text style={DetailsStyle.textStyle}>{'Country'}</Text>
                <Text style={DetailsStyle.textStyle}>{country}</Text>
              </View>
              <View style={DetailsStyle.rowContainer}>
                <Text style={DetailsStyle.textStyle}>{'Genre Name'}</Text>
                <Text style={DetailsStyle.textStyle}>{primaryGenreName}</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

export default DetailsScreen;
