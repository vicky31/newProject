import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../components/HomeScreen';
import Splash from '../components/splash';
import DetailsScreen from '../components/DetailsScreen';

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    DetailsScreen: DetailsScreen,
  },
  {
    headerMode: 'none',
  },
);

const SplashStack = createStackNavigator(
  {
    Splash: Splash,
  },
  {
    headerMode: 'none',
  },
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    Splash: SplashStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(AppSwitchNavigator);
