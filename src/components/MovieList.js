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
                {this.props.movieList.map((movie, index) => {
                    return(
                        <div className="row movie" key={index}>
                            <div className="movieCol1">
                                <div className="movieAbbr">
                                    <h5 className="sfPro cr-abbr" key={movie.abbreviation}>{movie.abbreviation}</h5>
                                </div>
                            </div>
                            <div className="movieCol3">
                                <div className="movieHeaders">
                                    <h4 className="sfPro" key={movie.movieName}>{movie.movieName}</h4>
                                    <h6 className="movieGenre" key={movie.movieCategory}>{movie.movieCategory}</h6>
                                </div>
                            </div>
                            <div className="movieCol2" key={movie.rate}>
                                {this.handleRating(movie.rate)}
                            </div>
                            <div className="danger">
                                <button className="btn btn-sm editBtn" onClick={this.props.editMovie(movie)}>✎</button>
                                <button className="btn btn-sm deleteBtn" onClick={this.props.deleteMovie(movie)}>{/*Button icon borrowed from bootstrap icons*/}
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="16" 
                                        height="16" 
                                        fill="currentColor" 
                                        className="bi bi-trash" 
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

//Export
export default MovieList;