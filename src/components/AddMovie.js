//Packages
import React from 'react';
//Component
class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: this.props.movieList,
            movieName: this.props.movieName,
            movieCategory: this.props.movieCategory,
            rate: this.props.rate,
            abbreviation: this.props.abbreviation
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeRating = this.handleChangeRating.bind(this);
    }

    handleChangeName(e) {
        this.setState({movieName: e.target.value});
    }
    handleChangeCategory(e) {
        this.setState({movieCategory: e.target.value});
    }
    handleChangeRating(e) {
        this.setState({rate: e.target.value});
    }
    handleSubmit(e) {
       e.preventDefault();
       let bool = this.props.searchMovie(this.state.movieName)
       console.log(bool);
       if (bool) {
            //create new movie object based off user input
            const newMovie = {
            movieName: this.state.movieName,
            movieCategory: this.state.movieCategory,
            rate: this.state.rate,
            abbreviation: this.state.movieName.match(/\b([A-Z])/g).join('')
            }
            //send over newMovie to parent component
            this.props.handleAdd(newMovie);
            //reset form
            this.setState({
                movieName: '',
                movieCategory: '',
                rate: '',
                abbreviation: ''
            })
       } else {
           this.setState({
               movieName: '',
               movieCategory: '',
               rate: '',
               abbreviation: ''
           })
       }
        
    }
    render() {
        return(
            <div className="container">
                <form className="addMovieForm" onSubmit={this.handleSubmit}>
                    <div className="formRow">
                        <label htmlFor="movieName" className="sfPro formLabel col-md-2" id="formLabel1">Name</label>
                        <input type="text" className="form-control col-md-6" id="movieName" name="movieName" value={this.state.movieName} onChange={this.handleChangeName} placeholder="Name of the movie"/>        
                    </div>
                    <div className="formRow">
                        <label htmlFor="movieCategory" className="sfPro formLabel col-md-2" id="formLabel2">Category</label>
                        <select className="form-select col-md-6" value={this.state.movieCategory} onChange={this.handleChangeCategory} name="movieCategory" id="formDropdown" aria-label="Movie Category Dropdown">
                            <option defaultValue className="sfPro">Select a category</option>
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
                        <label htmlFor="rate" className="sfPro formLabel col-md-2" id="formLabel3">Rating</label>
                        <div className="rate">
                            <input type="radio" id="star5" name="rate" value="5" checked={this.state.rate === "5"} onChange={this.handleChangeRating}/>
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4" checked={this.state.rate === "4"} onChange={this.handleChangeRating}/>
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" checked={this.state.rate === "3"} onChange={this.handleChangeRating}/>
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" checked={this.state.rate === "2"} onChange={this.handleChangeRating}/>
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" checked={this.state.rate === "1"} onChange={this.handleChangeRating}/>
                            <label htmlFor="star1" title="text">1 star</label>
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