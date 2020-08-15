import React, { Component } from 'react'
import Presentation from './Presentation'
import {View} from 'react-native'
import axios from "axios"
import { DataContext } from '../../../context/reducer';
import { SET_MOVIES_LIST } from '../../../context/types';
import { Icon } from "react-native-elements"
class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
          movies: [],
          isLoading: true
        };
    }

    static contextType = DataContext
    
    componentDidMount = () => {
        const [state, dispatch] = this.context
        console.log("line 22"+state)
        if(true || !("movies_list" in  state)){
            axios.get(`/open/movies/tollywood`).then(info => {
                this.setState({
                    movies: info.data,
                    isLoading: false
                })
                dispatch({
                    type: SET_MOVIES_LIST,
                    payload: {
                        movies_list: info.data
                    }
                })
            }).catch(err => {
                console.error(err)
                this.setState({
                    isLoading: false
                })
            })
        }else{
            this.setState({
                movies: state.movies_list,
                isLoading: false
            })
        }
        
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