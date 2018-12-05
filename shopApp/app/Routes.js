import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import AddMobile from './components/AddMobile';

const AppStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
    AddMobile: AddMobile
});

const AppContainer = createAppContainer(AppStack);

export default AppContainer;

// TODO Switch navigator
// const AuthStack = createStackNavigator({ Login: Login, Registration: Registration });

// export default createSwitchNavigator(
//     {
//         LoadingScreen: LoadingScreen,
//         Login: Login,
//         App: AppStack,
//         Auth: AuthStack,
//     },
//     {
//         initialRouteName: 'LoadingScreen',
//     }
// );