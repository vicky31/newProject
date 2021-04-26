import React, {Component} from 'react';
import {AsyncStorage, FlatList, Image} from 'react-native';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {Spinner} from '../../widgets/Spinner';
import Header from '../Header';
import SongCard from '../SongCard';
import {HomeStyles} from './Styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      isFetching: false,
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    this.onFetchData();
  }

  onFetchData = () => {
    this.setState({isFetching: true}, () => {
      fetch('https://itunes.apple.com/search?term=Michael+jackson')
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw 'Unable to fetch Data';
          }
        })
        .then(response => {
          this.saveDataToAsynStorage(response?.results);
        })
        .catch(err => {
          alert(err);
          this.getDataFromAsyncStorage();
        });
    });
  };

  saveDataToAsynStorage = response => {
    try {
      console.log(response, 'response');
      AsyncStorage.setItem('data', JSON.stringify(response));
    } catch (error) {
      alert('Data not saved');
    }
    this.setState({data: response, isFetching: false, loading: false});
  };

  getDataFromAsyncStorage = async () => {
    try {
      var response = await AsyncStorage.getItem('data');
      if (response !== null) {
        this.setState({
          data: JSON.parse(response),
          isFetching: false,
          loading: false,
        });
      }
    } catch (error) {
      // Error retrieving data
      alert('Data not saved');
    }
  };

  navigateToDetails = item => {
    const {navigation} = this.props;
    navigation?.navigate('DetailsScreen', {
      data: item,
    });
  };

  render() {
    const {data, isFetching, loading} = this.state;
    if (loading) {
      return <Spinner />;
    }
    return (
      <View style={HomeStyles.flexOne}>
        <Header heading={'SONGS'} />
        <SafeAreaView style={HomeStyles.flexOne}>
          <FlatList
            data={data}
            keyExtractor={item => item._id}
            renderItem={({item}) => {
              if (item.wrapperType !== 'track') {
                return undefined;
              }
              return (
                <SongCard
                  image={item?.artworkUrl100}
                  title={item?.trackName}
                  subTitle={item?.artistName}
                  duration={item?.trackTimeMillis}
                  navigateToDetails={() => this.navigateToDetails(item)}
                />
              );
            }}
            onRefresh={this.onFetchData}
            refreshing={isFetching}
            extraData={this.state}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default HomeScreen;
