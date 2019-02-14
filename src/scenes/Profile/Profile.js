/**
 * Created by f.putra on 11/12/18.
 */
import React from 'react';
import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';
import {CustomHeader} from './../../components/index'
import customStyles from './../../utils/customStyles'
import {Icon} from "native-base";

const {width, height} = Dimensions.get('window')

class Profile extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ImageBackground style={customStyles.containerColumn}
                             source={require('./../../assets/background.jpg')}>
                <CustomHeader
                    transparent={true}
                    leftContent={<Icon name={'arrow-back'} onPress={() => this.props.navigation.goBack()}/>}
                    bodyContent={<Text>Body</Text>}
                    rightContent={<Text>Right</Text>}/>

                <View style={[customStyles, {top: 20, justifyContent: 'center', alignItems: 'center'}]}>
                    <Image source={require('./../../assets/profile.gif')}
                           style={{width: width / 2, height: height / 4}}/>
                    <View style={[customStyles.containerColumn, {
                        padding: 10
                    }]}>
                        <Text style={[customStyles.small, {alignSelf: 'center'}]}>Jhon Doe</Text>
                        <Text style={[customStyles.small, {alignSelf: 'center'}]}>Sales</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }

}

export default Profile;
