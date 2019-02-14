/**
 * Created by f.putra on 14/02/19.
 */
import React from "react";
import {Body, Header, Left, Right} from 'native-base'
import PropTypes from 'prop-types'

class CustomHeader extends React.Component<CustomHeader.props> {

    static propTypes = {
        transparent: PropTypes.bool,
        leftContent: PropTypes.object,
        rightContent: PropTypes.object,
        bodyContent: PropTypes.object
    };

    render() {
        const {leftContent, bodyContent, rightContent, transparent} = this.props

        return (
            <Header transparent={transparent === undefined ? false : transparent}>
                <Left>
                    {leftContent}
                </Left>

                <Body>
                {bodyContent}
                </Body>
                <Right>
                    {rightContent}
                </Right>
            </Header>
        )
    }
}

module.exports = CustomHeader
