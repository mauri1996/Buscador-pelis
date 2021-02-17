import './App.css';
import 'bulma/css/bulma.css'
import React, {Component} from 'react'
import Detail from './pages/Detail'
import Home from './pages/Home'
import {NotFound} from './pages/NotFound'  // usar {} cuando se usar export sin defult
import {Switch,Route} from 'react-router-dom' /// switch paa usar el compoennte y rpute enruta

class App extends Component {

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

    /// ya no es necesario esto por la libreria react-route-dom
    //const url =  new URL(document.location) // toma localizacion actual
    //const hasId = url.searchParams.has('id') // reviza si tiene el valor id

    // const Page = url.searchParams.has('id')
    // ?<Detail id= {url.searchParams.get('id')}/>
    // : <Home />
    
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/detail/:movieId' component={Detail}/>
          <Route component={NotFound}/>
          {
            //contorlador de path
          }
        </Switch>
        {//Page
        }
      </div>
    );
  }
  
}


export default App;
