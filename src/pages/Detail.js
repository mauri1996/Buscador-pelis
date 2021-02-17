import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {ButtonBackToHome} from '../components/ButtonBackToHome'

export default class Detail extends Component {
    // Cuando llega por props
    // static propTypes = {
    //     id: PropTypes.string
    // }

    // cuando ellga por url
    static propTypes = {

        match: PropTypes.shape({
            params:PropTypes.object,
            isExact:PropTypes.bool,
            path: PropTypes.string,
            url:PropTypes.string
        })
    }

    state = {movie :{}}

    componentDidMount(){
        //const {id} = this.props   Cuando era con props
        //console.log(this.props)
        const {movieId} = this.props.match.params
        this._fetchMovie({id:movieId })
    }

    _fetchMovie({id}){
        const apiKey = '495a9f44'        
        return fetch (`https://omdbapi.com/?i=${id}&apikey=${apiKey}`)
                .then(res => res.json())
                .then(movie =>{                                              
                  //console.log({movie})
                  this.setState({movie})
                  //this.props.onChangeResult(Search)
                })
    }

    _goBack(){
        window.history.back()
    }

    render(){
        const {Title, Poster, Actors, Metascore , Plot}=this.state.movie
        return(
            <div >
                <ButtonBackToHome />
                <h1>{Title}</h1>
                <img src={Poster} alt={Title}/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>

            </div>
        )
    }

}