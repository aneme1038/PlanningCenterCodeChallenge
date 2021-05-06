//Packages
import React from 'react';
//Component
class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            movieName: '',
            movieCategory: '',
            rate: ''
        }
    }
    render() {
        return(
            <div className="container">
                <form className="addMovieForm" onSubmit={this.handleSubmit}>
                    <div className="formRow">
                        <label for="movieName" className="sfPro formLabel col-md-2" id="formLabel1">Name</label>
                        <input type="text" className="form-control col-md-6" id="movieName" name="movieName" value={this.state.movieName} onChange={this.handleChange} placeholder="Name of the movie"/>        
                    </div>
                    <div className="formRow">
                        <label for="movieCategory" className="sfPro formLabel col-md-2" id="formLabel2">Category</label>
                        <select className="form-select col-md-6" name="movieCategory" id="formDropdown" aria-label="Movie Category Dropdown">
                            <option selected className="sfPro">Select a category</option>
                            <option value="Drama">Drama</option>
                            <option value="Science Fiction">Science Fiction</option>
                            <option value="Historical Film">Historical Film</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Horror">Horror</option>
                            <option value="Musical">Musical</option>
                            <option value="Action">Action</option>
                            <option value="Romance">Romance</option>
                            <option value="Documentary">Documentary</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Fantasy">Fantasy</option>
                        </select>
                    </div>
                    <div className="formRow" id="ratingRow">
                        <label for="rate" className="sfPro formLabel col-md-2" id="formLabel3">Rating</label>
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
                    <div className="formRow">
                        <button className="btn btn-primary formSubmit" type="submit">Add Movie</button>
                    </div>
                </form>
            </div>
            
        )
    }
}

//Export
export default AddMovie;