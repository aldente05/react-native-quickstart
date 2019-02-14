/**
 * Created by f.putra on 4/16/17.
 */
import React from 'react';
import {ActivityIndicator, Dimensions, LayoutAnimation, Platform, Text, TouchableHighlight, View} from 'react-native';
import {Button, Container, Content, Icon, Input, Item, Title} from 'native-base'
import {CustomHeader, KeyboardSpacer} from './../../components/index'
import {onEmail} from './../../utils/helper'

export default class Login extends React.Component {

    static navigationOptions = {
        header : null
    };

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            error: "",
            invalidEmail: false,
            invalidPassword: false,
            passwordSuccess: false,
            loading: false,
            Emailsuccess: false,
            opacityCheckmark: 0,
            opacityCheckPass: 0,
            opacityAlertPass: 0,
            opacityAlert: 0,
            disableEmail: false,
            disablePassword: false
        };
    }

    async onEmailChange(username) {
        switch (onEmail(username)) {
            case true:
                this.setState({
                    email: username,
                    invalidEmail: false,
                    Emailsuccess: true,
                    opacityAlert: 0,
                    opacityCheckmark: 1,
                });
                break;
            case false :
                this.setState({
                    invalidEmail: true,
                    Emailsuccess: false,
                    opacityAlert: 1,
                    opacityCheckmark: 0,
                });
                break;
        }
    }

    async onChangePassword(password) {
        switch (password.length >= 8) {
            case true:
                this.setState({
                    password: password,
                    invalidPassword: false,
                    passwordSuccess: true,
                    opacityAlertPass: 0,
                    opacityCheckPass: 1
                });
                break;
            case false:
                this.setState({
                    invalidPassword: true,
                    passwordSuccess: false,
                    opacityAlertPass: 1,
                    opacityCheckPass: 0
                });
                break;
        }
    }

    async onLoginPressed() {

        const {email, password, Emailsuccess, passwordSuccess} = this.state

        if (email === '' || password === '') {
            return;
        }
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

        this.setState({
            loading: true,
            disableEmail: true,
            disablePassword: true
        });
        if (Emailsuccess === true && passwordSuccess === true) {

        }
    }

    onPressback() {
        this.props.navigation.goBack()
    }

    forgotPassword() {

    }

    errorResponse(message) {
        console.log(message)
    }

    clearError() {
        setTimeout(() => {
            this.setState({
                error: "",
                loading: false
            });
        }, 5000);
    }

    render() {

        const {Emailsuccess, invalidEmail, opacityCheckmark, opacityAlert, passwordSuccess, invalidPassword, opacityCheckPass, opacityAlertPass, loading, error} = this.state
        return (
            <Container>
                <CustomHeader
                    leftContent={
                        <Button transparent onPress={() => this.onPressback()}>
                            <Icon style={{color: "#000"}} name="ios-arrow-back"/>
                        </Button>
                    }
                    bodyContent={
                        Platform.OS === 'ios' ?
                            <Title style={{color: "#000"}}>LOGIN</Title> :
                            <Title style={{color: "#000", left: Dimensions.get('window').width / 4.5}}>LOGIN</Title>
                    }
                />
                <Content keyboardShouldPersistTaps={'always'}>
                    <View style={styles.container}>
                        <Text style={styles.heading}>
                            Welcome
                        </Text>
                        <Item success={Emailsuccess} error={invalidEmail}
                              style={{width: Dimensions.get('window').width / 1.3}}>
                            <Input
                                onChangeText={(text) => this.onEmailChange(text)}
                                keyboardType={'email-address'}
                                returnKeyType={'next'}
                                style={styles.input} placeholder="Email"/>
                            <Icon name='checkmark' style={{opacity: opacityCheckmark}}/>
                            <Icon name='alert' style={{opacity: opacityAlert}}/>
                        </Item>
                        <Item success={passwordSuccess} error={invalidPassword}
                              style={{width: Dimensions.get('window').width / 1.3}}>
                            <Input
                                onChangeText={(text) => this.onChangePassword(text)}
                                style={styles.input}
                                placeholder="Password"
                                returnKeyType={'send'}
                                secureTextEntry={true}/>
                            <Icon name='checkmark' style={{opacity: opacityCheckPass}}/>
                            <Icon name='alert' style={{opacity: opacityAlertPass}}/>
                        </Item>

                        {loading ?
                            <View style={styles.containerLoading}>
                                <ActivityIndicator color='#cf2b5d' size="large"/>
                            </View> :
                            <TouchableHighlight onPress={() => this.onLoginPressed()} style={styles.buttonLogin}>
                                <Text style={styles.buttonTextLogin}>
                                    Login
                                </Text>
                            </TouchableHighlight>}

                        <TouchableHighlight style={{marginTop: 10}} onPress={() => this.forgotPassword()}>
                            <Text style={{color: '#304FFE'}}>
                                Forgot Password?
                            </Text>
                        </TouchableHighlight>
                        <Text style={styles.error}>
                            {error}
                        </Text>
                    </View>
                </Content>
                {/*<KeyboardSpacer dismiss={this.onLoginPressed()}/>*/}
            </Container>


        );
    }
}

const styles = {
    container: {
        flex: 1,
        height: Dimensions.get('window').height,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10,
        paddingTop: 80
    },
    input: {
        height: 50,
        width: Dimensions.get('window').width / 1.5,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        alignContent: 'center'
    },
    buttonLogin: {
        height: 45,
        width: Dimensions.get('window').width / 2,
        marginRight: 2,
        borderRadius: 100,
        backgroundColor: '#cf2b5d',
        alignSelf: 'center',
        marginTop: 14,
        justifyContent: 'center'
    },
    containerLoading: {
        height: 45,
        width: Dimensions.get('window').width / 2,
        marginRight: 2,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 14,
        justifyContent: 'center'
    },
    buttonTextLogin: {
        fontSize: 20,
        color: '#FFF',
        alignSelf: 'center'
    },
    heading: {
        fontSize: 20,
    },
    error: {
        color: 'red',
        paddingTop: 10
    },
    success: {
        color: 'green',
        paddingTop: 10
    },
    loader: {
        marginTop: 20
    }
};
