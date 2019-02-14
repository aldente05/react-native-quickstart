/**
 * Created by f.putra on 27/11/18.
 */
import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'native-base'
import customStyles, {resolution} from './../../utils/customStyles'

class Home extends React.Component {

    static navigationOptions = {
        headerTitle: "QUICKSTART"
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    navigate(path){
        const {navigation} = this.props
        navigation.navigate(path)
    }

    render() {

        return (
            <View style={customStyles.containerColumn}>
                <Button onPress={() => this.navigate('Profile')} style={{alignSelf : 'center', margin : 20, width : resolution('width') / 3}}>
                    <Text>Profile</Text>
                </Button>
                <Button onPress={() => this.navigate('Login')} style={{alignSelf : 'flex-end', margin : 20, width : resolution('width') / 3}}>
                    <Text>Login</Text>
                </Button>
                <Button onPress={() => this.navigate('Register')} style={{alignSelf : 'flex-start', margin : 20, width : resolution('width') / 3}}>
                    <Text>Register</Text>
                </Button>
            </View>
        );
    }

}

export default Home;
