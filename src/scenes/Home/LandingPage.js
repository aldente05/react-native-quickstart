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

    render() {
        const {navigation} = this.props
        return (
            <View style={[customStyles.containerColumn, {alignItems: 'center'}]}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Text>Hello</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

export default Home;
