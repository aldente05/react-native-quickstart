/**
 * Created by f.putra on 27/11/18.
 */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'native-base'
import customStyles from './../../utils/customStyles'

class Home extends React.Component {

    static navigationOptions = {
        headerTitle: "Shoes"
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
            <View style={[customStyles.containerColumn, {alignItems: 'center'}]}>
                <TouchableOpacity onPress={() => this.navigate('Profile')}>
                    <Text>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigate('Login')}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigate('Register')}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

export default Home;
