/**
 * Created by f.putra on 4/16/17.
 */
import React from 'react';
import {ActivityIndicator, Dimensions, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {Button, Container, Content, Icon, Input, Item, Title} from 'native-base';
import service from '../../networks/BaseAPI'
import customStyles from '../../utils/customStyles';
import {onEmail} from '../../utils/helper';
import {CustomHeader, KeyboardSpacer} from '../../components/index';

export default class Register extends React.Component {

    static navigationOptions = {
        header : null
    };

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            referral: "",
            password_confirmation: "",
            error: "",
            device_token: '',
            invalidEmail: false,
            invalidPassword: false,
            passwordSuccess: false,
            loading: false,
            Emailsuccess: false,
            invalidPasswordConfirm: false,
            passwordSuccessConfirm: false,
            opacityCheckPassConfirm: 0,
            opacityAlertPassConfirm: 0,
            opacityCheckmark: 0,
            opacityCheckPass: 0,
            opacityAlertPass: 0,
            opacityAlert: 0
        }
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

    async onChangePasswordConfirm(password) {
        switch (password.length >= 8 && (this.state.password === password)) {
            case true:
                this.setState({
                    password_confirmation: password,
                    invalidPasswordConfirm: false,
                    passwordSuccessConfirm: true,
                    opacityAlertPassConfirm: 0,
                    opacityCheckPassConfirm: 1
                });
                break;
            case false:
                this.setState({
                    invalidPasswordConfirm: true,
                    passwordSuccessConfirm: false,
                    opacityAlertPassConfirm: 1,
                    opacityCheckPassConfirm: 0
                });
                break;
        }
    }

    async onRegisterPressed() {
        if (this.state.Emailsuccess === true && this.state.passwordSuccess === true && this.state.passwordSuccessConfirm === true) {
            this.setState({loading: true});
            let response = await service.doRegister(this.state.email, this.state.password, this.state.referral);
            console.log(response);
            if (response === "Your credential information is invalid. User is already registered") {
                this.setState({
                    errors: response,
                    loading: false
                });
                this.clearError()
            } else if (response => 200 && response <= 300) {
                this.setState({loading: false});
                this.redirect('provisioning_profile');
            } else {
                this.setState({
                    errors: response,
                    loading: false
                });
                this.clearError()
            }
        }
    }

    onPressback() {
        this.props.navigation.navigate('Login');
    }

    async onTermAndConditionPress() {

    }

    clearError() {
        setTimeout(() => {
            this.setState({
                errors: ''
            });
        }, 3000);
    }

    render() {
        const {Emailsuccess, invalidEmail, opacityCheckmark, opacityAlert, passwordSuccess, invalidPassword, opacityCheckPass, opacityAlertPass, loading, error, passwordSuccessConfirm, invalidPasswordConfirm, opacityCheckPassConfirm, opacityAlertPassConfirm} = this.state

        return (
            <Container>
                <CustomHeader
                    leftContent={
                        <Button transparent onPress={() => this.onPressback()}>
                            <Icon style={{color: "#000"}} name="ios-arrow-back"/>
                        </Button>
                    }
                    bodyContent={
                        <Title style={{color: "#000", width: '150%'}}>REGISTRATION</Title>
                    }
                />
                <Content keyboardShouldPersistTaps={'always'}>
                    <View style={styles.container}>
                        <Text>
                            Please Complete your details,
                        </Text>
                        <Text>
                            Let's Get Started!
                        </Text>
                        <Item success={Emailsuccess} error={invalidEmail}
                              style={{width: Dimensions.get('window').width / 1.3}}>
                            <Input
                                onChangeText={(text) => this.onEmailChange(text)}
                                keyboardType={'email-address'}
                                returnKeyType={'next'}
                                style={styles.input} placeholder="Email Address"/>
                            <Icon name='checkmark' style={{opacity: opacityCheckmark}}/>
                            <Icon name='alert' style={{opacity: opacityAlert}}/>
                        </Item>
                        <Item success={passwordSuccess} error={invalidPassword}
                              style={{width: Dimensions.get('window').width / 1.3}}>
                            <Input
                                onChangeText={(text) => this.onChangePassword(text)}
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry={true}/>
                            <Icon name='checkmark' style={{opacity: opacityCheckPass}}/>
                            <Icon name='alert' style={{opacity: opacityAlertPass}}/>
                        </Item>
                        <Item success={passwordSuccessConfirm} error={invalidPasswordConfirm}
                              style={{width: Dimensions.get('window').width / 1.3}}>
                            <Input
                                onChangeText={(text) => this.onChangePasswordConfirm(text)}
                                style={styles.input}
                                placeholder="Confirm Password"
                                returnKeyType={'send'}
                                secureTextEntry={true}/>
                            <Icon name='checkmark' style={{opacity: opacityCheckPassConfirm}}/>
                            <Icon name='alert' style={{opacity: opacityAlertPassConfirm}}/>
                        </Item>

                        <TextInput
                            onChangeText={(text) => this.setState({referral: text})}
                            style={customStyles.input} placeholder="Referral code (optional)">
                        </TextInput>

                        <Text style={customStyles.error}>{error}</Text>

                        {loading ? <ActivityIndicator size="large"/> :
                            <TouchableHighlight onPress={() => this.onRegisterPressed()} style={styles.buttonRegister}>
                                <Text style={styles.buttonTextRegister}>
                                    Register
                                </Text>
                            </TouchableHighlight>}

                        <Text
                            style={{justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
                            This Information will be used to make your profile more
                            professional and easy to found by Event Owner, so please enter your current information.
                        </Text>

                        <Text>
                            By Registering your agree to our
                        </Text>
                        <TouchableHighlight onPress={() => this.onTermAndConditionPress()}>
                            <View style={customStyles.containerInLine}>

                                <Text style={{color: 'blue'}}>
                                    Terms & Condition
                                </Text>
                                <Text>
                                    &nbsp;and&nbsp;
                                </Text>
                                <Text style={{color: 'blue'}}>
                                    Privacy and Policy
                                </Text>

                            </View>
                        </TouchableHighlight>
                    </View>
                </Content>
                {/*<KeyboardSpacer/>*/}
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
    buttonRegister: {
        height: 45,
        width: Dimensions.get('window').width / 2,
        marginRight: 2,
        borderRadius: 100,
        backgroundColor: '#cf2b5d',
        alignSelf: 'center',
        marginTop: 14,
        justifyContent: 'center',
        alignItems : 'center'
    },
    buttonTextRegister: {
        fontSize: 20,
        color: '#FFF'
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
