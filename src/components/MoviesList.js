import React , {Component} from 'react'
import PropTypes from 'prop-types'
import Movie from './Movie'

export default class MoviesList extends Component{
    static propTypes ={
        movies:PropTypes.array
    }
    render(){
        const {movies} = this.props
        //console.log(movies)
        return (
            <div className='MoviesList'>
                {
                    movies.map( movie => {
                        return(
                                <div className='MoviesList-item' key= {movie.imdbID} >
                                    <Movie 
                                            id={movie.imdbID}
                                            title={movie.Title}
                                            year = {movie.Year}
                                            poster= {movie.Poster}
                                    />
                                </div>
                        )}  
                    )                                    
                }
            </div>
        )
        
        
    }
}