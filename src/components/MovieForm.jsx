import React from 'react';
import Joi from 'joi-browser';
import Form from './common/Form';
import { getGenres } from '../services/fakeGenresServives';
import { getMovies, saveMovie } from '../services/fakeMovieServices';


class MovieForm extends Form {    
    state = {
        data: {
            title: '',
            genreId: '',
            numberInStock: '',
            dailyRentalsRate: ''
        },
        genres: [],
        errors: {}
    };

    schema = { 
        _id: Joi.string(),
        title: Joi.string().required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().required().min(0).max(100).label('Stock'),
        dailyRentalsRate: Joi.number().required().min(0).max(10).label('Rate') 
    };

    componentDidMount() {
        const genres= getGenres();
        this.setState({ genres });

        const movieId = this.props.match.params.id;
        if(movieId === 'new') return;
        
        const movie = getMovies(movieId);
        if(!movie) return this.props.history.replace('/notFound');

        this.setState({ data: this.mapToViewModel(movie) });
    };

    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalsRate: movie.dailyRentalsRate 
        };
    }

    doSubmit = () => {
        saveMovie(this.state.data)
        
        this.props.history.push('/movies')
    };

    render() { 
        return( 
            <div>
                <h1 className="alert-heading">Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title' )}
                    {this.renderSelect('genreId', 'Genre', this.state.genres )} 
                    {this.renderInput('numberInStock', 'Stock' )}
                    {this.renderInput('dailyRentalsRate', 'Rate' )}                   
                    {this.renderButton('Save')}
                </form>           
            </div>      
        );
    }
}

export default MovieForm;
 
// export default MovieForm;   return (      
//     <div>
//         <h1>Movie Form {match.params.id}</h1> 
//         <button className='btn btn-primary' onClick={() => history.push('/movies')}>
//             Save
//         </button>
//     </div>
//     );
// }
 
// export default MovieForm;