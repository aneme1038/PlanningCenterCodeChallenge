//Packages
import React from 'react';
//Component
class AddMovie extends React.Component {
    render() {
        return(
            <div className="container">
                <form className="addMovieForm">
                    <div className="formRow">
                        <label for="movieName" className="sfPro formLabel col-md-2" id="formLabel1">Name</label>
                        <input type="text" className="form-control col-md-6" id="movieName" name="movieName" placeholder="Name of the movie"/>        
                    </div>
                    <div className="formRow">
                        <label for="movieCategory" className="sfPro formLabel col-md-2" id="formLabel2">Category</label>
                        <select className="form-select col-md-6" id="formDropdown" aria-label="Movie Category Dropdown">
                            <option selected className="sfPro">Select a category</option>
                            <option value="Drama">Drama</option>
                            <option value="Drama">Science Fiction</option>
                            <option value="Drama">Historical Film</option>
                            <option value="Drama">Comedy</option>
                            <option value="Drama">Horror</option>
                            <option value="Drama">Musical</option>
                            <option value="Drama">Action</option>
                            <option value="Drama">Romance</option>
                            <option value="Drama">Documentary</option>
                            <option value="Drama">Fiction</option>
                            <option value="Drama">Fantasy</option>
                        </select>
                    </div>
                    <div className="formRow">
                        <label for="movieRating" className="sfPro formLabel col-md-2" id="formLabel3">Rating</label>
                        <div className="rate">
                            <input type="radio" id="star5" name="rate" value="5" />
                            <label for="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4" />
                            <label for="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" />
                            <label for="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" />
                            <label for="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" />
                            <label for="star1" title="text">1 star</label>
                        </div>
                    </div>
                </form>
            </div>
            
        )
    }
}

//Export
export default AddMovie;