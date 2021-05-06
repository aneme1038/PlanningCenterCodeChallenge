//Packages
import React from 'react';
//Component
class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: this.props.movieList
        }
        this.handleRating = this.handleRating.bind(this);
    }

    handleRating(rating){
        console.log(rating);
        if(rating === "1") {

        }
        else if(rating === "2"){

        }
        else if(rating === "3") {

        }
        else if(rating === "4") {

        }
        else if(rating === "5") {

        }
        else {
            alert("Error");
            console.log("Ran into error with rating");
        }
    }
    render() {
        return(
            <div className="container movieList">
                <div className="movies">
                {this.state.movieList.map(movie => {
                    return(
                        <div className="row movie">
                            <div className="movieCol1">
                                <div className="movieAbbr">
                                    <h5 className="sfPro text-white">{movie.movieName.match(/\b([A-Z])/g).join('')}</h5>
                                </div>
                                <div className="movieHeaders">
                                    <h4 className="sfPro">{movie.movieName}</h4>
                                    <h6 className="sfPro">{movie.movieCategory}</h6>
                                </div>
                            </div>
                            <div className="movieCol2">
                                {this.handleRating(movie.rate)}
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