import './App.css';
import 'bulma/css/bulma.css'
import {Title} from './components/Title'
import SearhFroms from './components/SearchFroms'
import React, {Component} from 'react'
import MoviesList from './components/MoviesList'

class App extends Component {

  state ={ result: [], usedSearch:false }

  _handleResults = (result)=>{
    this.setState({result , usedSearch: true})    
  }
  _renderResult(){
    
    return  this.state.result.length === 0 
    ? <p>Peliculas no encontradas</p>
    : <MoviesList movies = {this.state.result}/>    
  }

  // _renderResult (){
  //   //const {Promise} = this.state.result
  //   //const {value} = Promise
  //   //console.log('El valor es:' , this.state.result)
  //   const {result} = this.state
  //   //console.log(result)
  //   return result.map( movie => {
  //                       return <Movie key= {movie.imdbID} 
  //                               title={movie.Title}
  //                               year = {movie.Year}
  //                               poster= {movie.Poster}
  //                               />
  //                     }      
  //                   )
  // }

  render(){
    return (
      <div className="App">
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
    );
  }
  
}


export default App;
