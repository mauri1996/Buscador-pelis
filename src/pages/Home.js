import React , {Component} from 'react'
import {Title} from '../components/Title'
import SearhFroms from '../components/SearchFroms'
import MoviesList from '../components/MoviesList'

export default class Home extends Component{
    state ={ result: [], usedSearch:false }

    _handleResults = (result)=>{
      this.setState({result , usedSearch: true})    
    }
    _renderResult(){    
      return  this.state.result.length === 0 
      ? <p>Peliculas no encontradas</p>
      : <MoviesList movies = {this.state.result}/>    
    }
    render(){
        return(
            <div>
                <Title>Buscador de peliculas</Title>  
                <div className='SearchForm-wrapper'>
                <SearhFroms onChangeResult= {this._handleResults}/>      
                </div>
                {
                this.state.usedSearch 
                ? this._renderResult()
                : <small>Use the form to search a movie</small>
                }
            </div>
        )
    }
}