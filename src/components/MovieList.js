//Packages
import React from 'react';
// import StarRating from 'react-star-rating';
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
        console.log(typeof rating);
        if(rating === "1") {
            return(
                <div>
                   	&#9733;	&#9734; &#9734; &#9734; &#9734;
                </div>      
            )
        }
        else if(rating === "2"){
            return(
                <div>
                   	&#9733;	&#9733; &#9734; &#9734; &#9734;
                </div>
            )
            
        }
        else if(rating === "3") {
            return(
                <div>
                   	&#9733;	&#9733; &#9733; &#9734; &#9734;
                </div>
            )
               
        }
        else if(rating === "4") {
            return(
                <div>
                   	&#9733;	&#9733; &#9733; &#9733; &#9734;
                </div>
            )
              
        }
        else if(rating === "5") {
            return(
                <div>
                   	&#9733;	&#9733; &#9733; &#9733; &#9733;
                </div>
            )
               
        }
        else {
            alert("Error");
            console.log("Ran into error with rating");
        }
    }
    render() {
        return(
            <div className="container movieList">
                <div>
                {this.props.movieList.map(movie => {
                    return(
                        <div className="row movie">
                            <div className="movieCol1">
                                <div className="movieAbbr">
                                    <h5 className="sfPro cr-abbr" key={movie.abbreviation}>{movie.abbreviation}</h5>
                                </div>
                                <div className="movieHeaders">
                                    <h4 className="sfPro" key={movie.movieName}>{movie.movieName}</h4>
                                    <h6 className="movieGenre" key={movie.movieCategory}>{movie.movieCategory}</h6>
                                </div>
                            </div>
                            <div className="movieCol2" key={movie.rate}>
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