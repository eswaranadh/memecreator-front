import React, { Component } from 'react'
import Presentation from './Presentation'
import {View} from 'react-native'
import axios from "axios"
class Container extends Component {

   

    render() {
        return (
            <View>
                <Presentation 
                    {...this.props}
                   
                />
            </View>
        )
    }
}

export default Container