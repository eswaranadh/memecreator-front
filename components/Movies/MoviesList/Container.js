import React, { Component } from 'react'
import Presentation from './Presentation'
import {View} from 'react-native'
import axios from "axios"
class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
          movies: [],
          isLoading: true
        };
    }
    
    componentDidMount = () => {
        axios.get(`/open/movies/tollywood`).then(info => {
            console.log(info.data)
            this.setState({
                movies: info.data,
                isLoading: false
            })
        }).catch(err => {
            console.error(err)
            this.setState({
                isLoading: false
            })
        })
    }

    render() {
        return (
            <View>
                <Presentation 
                    {...this.props}
                    movies={this.state.movies}
                    isLoading={this.state.isLoading}
                />
            </View>
        )
    }
}

export default Container