//Packages
import React from 'react';
//Component
class MovieList extends React.Component {
    constructor() {
        super()
        this.state = {
            movieList: movieList
        }
    }
    render() {
        return(
            <div className="container movieList">
                <div className="movies">
                {this.state.movieList.map(movie, index => {
                    return(
                        <div className="row movie" key={index}>
                            <div className="movieCol1">
                                <div className="movieAbbr">
                                    <h5 className="sfPro text-white">{this.state.movie.name.match(/\b([A-Z])/g).join('')}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>    
            </div>
        )
    }
}

//Export
export default MovieList;