import React, { Component } from 'react'
import Presentation from './Presentation'
import {View} from 'react-native'
class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          dataSource:[]
         };
       }
       componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
           loading: false,
           dataSource: responseJson
          })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
        }

    render() {
        return (
            <View>
                <Presentation />
            </View>
        )
    }
}

export default Container