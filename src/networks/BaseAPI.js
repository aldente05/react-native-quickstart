/**
 * created by f.putra 29/10/2017
 *
 * base api untuk request data dari API
 * semua function ditulis dengan benar dan jelas
 * contoh => getDataProfile = () => {}
 *
 */

import request from './request'
import {AsyncStorage} from 'react-native'

const DEVICE_TOKEN = 'DEVICE_TOKEN';
const ACCESS_TOKEN = 'access_token';

/**
 * simple request
 // request({
 //     method: 'get',
 //     url: '/path/'
 // }).then((resp) => {
 //     console.log(resp);
 // })
 */

getToken = async () => {
    return await AsyncStorage.getItem(ACCESS_TOKEN);
}

doRegister = (name, fullname, email, password) => {
    return request({
        url: `users/register`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            name: name,
            full_name: fullname,
            email: email,
            password: password
        }
    })
}

doLogin = async (username, password) => {
    return request({
        url: 'users/login',
        method: 'POST',
        auth: {
            username: username,
            password: password
        }
    })
}

getProduct = async () => {
    return request({
        url: 'product/',
        method: 'GET'
    })
}

getProductById = async (productId) => {
    return request({
        url: 'product/' + productId,
        method: 'GET'
    })
}

imageFetch = (path) => {
    return request({
        url : 'media/' + path,
        method : 'GET'
    })
}


const Service = {
    doRegister,
    doLogin,
    doUpdateProfile,
    getProduct,
    getProductById,
    imageFetch
    //, update, delete, etc. ...
}

export default Service;


/**
 * contoh untuk dipasang di UI
 */

// handleSubmit() {
//     const {subject, message} = this.state;
//
//     ProfileService.create({subject, message})
//         .then((response) => {
//             alert(`New Message with id ${response.id} created!`);
//         });
// }
