/**
 * Created by f.putra on 27/11/18.
 */
import {createAppContainer, createStackNavigator} from 'react-navigation';

const navigationStack = createStackNavigator({
        Login: {
            screen: require('./scenes/Credentials/Login').default
        },
        Register: {
            screen: require('./scenes/Credentials/Register').default
        },
        LandingPage: {
            screen: require('./scenes/Home/LandingPage').default
        },
        Profile: {
            screen: require('./scenes/Profile/Profile').default
        }
    },
    {
        initialRouteName: "LandingPage"
    }
)

export default createAppContainer(navigationStack);
