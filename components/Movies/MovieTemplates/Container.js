import React, { Component } from 'react'
import Presentation from './Presentation'
import {View} from 'react-native'
import axios from "axios"
class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
          movieTemplates: [],
          isLoading: true
        };
    }
    
    componentDidMount = () => {
        const movieID = this.props.route.params.movieID
        axios.get(`/open/movies/tollywood/${movieID}`).then(info => {
            console.log(info.data)
            this.setState({
                movieTemplates: info.data,
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
                    movieTemplates={this.state.movieTemplates}
                    isLoading={this.state.isLoading}
                />
            </View>
        )
    }
}

export default Container