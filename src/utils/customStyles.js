/**
 * Created by f.putra on 4/16/17.
 */

import { Dimensions, Platform, PixelRatio, StyleSheet } from 'react-native';
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(size))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(size)) - 2
    }
}

const style = StyleSheet.create({
    mini: {
        fontSize: normalize(10),
    },
    small: {
        fontSize: normalize(13),
    },
    medium: {
        fontSize: normalize(15),
    },
    large: {
        fontSize: normalize(18),
    },
    xlarge: {
        fontSize: normalize(22),
    },
    xxlarge: {
        fontSize: normalize(24),
    },
    xxxlarge: {
        fontSize: normalize(26),
    },
    containerColumn : {
        flex : 1,
        flexDirection : 'column'
    },
    containerRow : {
        flex : 1,
        flexDirection : 'column'
    }
});

export default style;
