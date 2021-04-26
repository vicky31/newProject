/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AsyncStorage,
  Dimensions,
  TextInput,
  Image,
  FlatList,
} from 'react-native';

import scaling from './config/normalize';
import AppSwitchNavigator from './navigation/AppSwitchNavigator';

const {widthScale, normalize} = scaling;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch('https://itunes.apple.com/search?term=Michael+jackson')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw 'Unable to fetch Data';
        }
      })
      .then(response => {
        this.saveDataToAsynStorage(response);
      })
      .catch(err => {
        alert(err);
        this.getDataFromAsyncStorage();
      });
  }

  saveDataToAsynStorage = response => {
    try {
      AsyncStorage.setItem('data', JSON.stringify(response));
    } catch (error) {
      alert('Data not saved');
    }
    this.setState({data: response, filteredData: response});
  };

  getDataFromAsyncStorage = async () => {
    try {
      var response = await AsyncStorage.getItem('data');
      if (response !== null) {
        this.setState({
          data: JSON.parse(response),
          filteredData: JSON.parse(response),
        });
      }
    } catch (error) {
      // Error retrieving data
      alert('Data not saved');
    }
  };

  changeState = index => {
    const {filteredData = {}} = this.state;
    const {categories = []} = filteredData;
    const item = categories[index] || {};
    if (item.expanded) {
      item.expanded = false;
    } else {
      item.expanded = true;
    }
    this.setState({filteredData: filteredData});
  };

  getItemsFilter = (items, value) => items.filter(item => item.includes(value));

  getSubCategoriesFilter = (subcategories, value) => {
    let updatedArray = subcategories.map(subCategory => {
      const {items = [], subCategoryname = '', servingSize} = subCategory;

      const subcategoriesArr = {
        items: this.getItemsFilter(items, value),
        subCategoryname: subCategoryname,
        servingSize: servingSize,
      };
      console.log(subcategoriesArr.items);
      if (subcategoriesArr.items && subcategoriesArr.items.length) {
        return subcategoriesArr;
      }
      return false;
    });

    return updatedArray.filter(elem => {
      return elem;
    });
  };

  changeText = value => {
    const {data = {}} = this.state;
    const {categories = []} = data;
    const filteredData = {
      categories: categories.map(element => {
        const {category = {}} = element;
        const {
          subcategories = [],
          categoryName = '',
          colorCode = '',
          imagePath = '',
          localImagePath = '',
          protip = '',
          quote = '',
          servingSize = '',
        } = category;

        return {
          category: {
            categoryName,
            colorCode,
            imagePath,
            localImagePath,
            protip,
            quote,
            servingSize,
            subcategories: this.getSubCategoriesFilter(subcategories, value),
          },
          expanded: true,
        };
      }),
    };
    this.setState({searchText: value, filteredData: filteredData});
  };

  render() {
    const {data = {}, searchText = '', filteredData = {}} = this.state;
    const {categories = {}} = filteredData;
    return (
      <>
        {/* <StatusBar barStyle="dark-content" /> */}
        {/* <SafeAreaView>
          <FlatList />
        </SafeAreaView> */}
        <View style={styles.container}>
          <AppSwitchNavigator />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#EDECF3',
    height: Dimensions.get('window').height,
  },
  input: {
    flex: 1,
    backgroundColor: '#EBF2F7',
    marginHorizontal: widthScale(12),
    marginBottom: widthScale(10),
    marginTop: widthScale(25),
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
  },
});

export default App;
