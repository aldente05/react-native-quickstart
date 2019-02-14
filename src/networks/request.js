/**
 * created by f.putra 29/10/2017
 *
 */
import axios from 'axios'

/**
 * Create an Axios Client with defaults
 *
 * base url untuk setiap request
 *
 * @type {string}
 */
const client = axios.create({
    /**
     * `baseURL` will be prepended to `url` unless `url` is absolute.
     * It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
     * to methods of that instance.
     */

    baseURL: "http://localhost:3200/",

    /**
     * `timeout` specifies the number of milliseconds before the request times out.
     * If the request takes longer than `timeout`, the request will be aborted.
     */
    // timeout: 1000,

    /**
     * `maxRedirects` defines the maximum number of redirects to follow in node.js.
     * If set to 0, no redirects will be followed.
     */

    // maxRedirects: 5, // default
});


/**
 * Request Wrapper dengan default success/error
 */
const request = function (options) {
    const onSuccess = function (response) {
        // console.debug('Request Successful!', response);
        return response.data;
    }

    const onError = function (error) {
        // console.error('Request Failed:', error.config);

        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            // console.error('Status:', error.response.status);
            // console.error('Data:', error.response.data);
            // console.error('Headers:', error.response.headers);

        } else {
            // Something else happened while setting up the request
            // triggered the error
            // console.error('Error Message:', error.message);
        }

        return Promise.reject(error.response || error.message);
    }

    return client(options)
        .then(onSuccess)
        .catch(onError);
}

export default request;
