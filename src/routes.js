/**
 * Created by f.putra on 27/11/18.
 */
import {
    createAppContainer,
    createStackNavigator
} from 'react-navigation';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const navigationStack = createStackNavigator({
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
