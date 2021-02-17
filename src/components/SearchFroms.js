/// PILAS CON LAS CERRADAS DEL INPUT // colocar un "/" al final 

/// EL NAVEGADOR TOMA X DEFECTO EL ULTIMO BOTTON COMO SUBMIT    
import React , {Component} from 'react'
//import getMovies from '../service/GetMovies' 


export default class SearhFroms extends Component{

    state = {
        inputMovie : '' 
    }

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value})
    }

    _handleSubmit = (e)=>{
        e.preventDefault() // evita que siga el proceso de envio
        //console.log(getMovies(this.state.inputMovie)) 
        const apiKey = '495a9f44'
        const {inputMovie} = this.state

        return fetch (`https://omdbapi.com/?s=${inputMovie}&apikey=${apiKey}`)
                .then(res => res.json())
                .then(response =>{                            
                  const {Search = []} = response  // usaa el valor por defect de un desestructuracion para undifedned
                  //console.log({Search})
                  this.props.onChangeResult(Search)
                })
                  
        //return this.props.onChangeResult(getMovies(this.state.inputMovie))      //No funciono  
    } 

    render (){
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Find a repository" 
                            onChange={this._handleChange}/>                     
                    </div>
                    <div className="control">
                        <button href={'#1'} className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        ); 
    }     
}

