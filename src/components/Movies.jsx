import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieServices';
import { getGenres } from '../services/fakeGenresServives';
import ListGroup from './common/ListGroup';
import Pagination from './common/Pagination';
import { Paginate } from '../utils/Paginate';
import MoviesTable from './MoviesTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SreachBox from './common/SearchBox';

class Movies extends Component {
    state = ({
            movies: [],
            genres: [],
            currentPage:1,
            pageSize: 4,
            searchQuery: '',
            selectedGenre: null,
            sortColumn: {path:'title', order: 'asc'} 
        });
    
    componentDidMount() {
        const genres = [ { _id: '', name: 'All Genre'}, ...getGenres()]
        this.setState({movies: getMovies(), genres})
    }

    handleRemoveRow = movie => {
        const movies = this.state.movies.filter(i => i._id !== movie._id)
        this.setState({ movies })
    };

    handleLiked = movie => {
        // console.log('Liked Clicked', movie)
        const movies = [...this.state.movies]
        const index  = movies.indexOf(movie)
        movies[index] = {...movies[index]}
        movies[index].liked = !movies[index].liked  
        this.setState({movies})  
    }

    handlePagination = page => {
        this.setState({currentPage: page})             
    }

    handleGenreSelect = genre => {
        // console.log(genre)
        this.setState({selectedGenre: genre, searchQuery:'', currentPage: 1})
    }

    // handleSearchQuery = query => {
    //     this.setState({ searchQuery: query, selectedGenre: null, currentPage:1 })
    // }

    handleSort = sortColumn => {
        this.setState({sortColumn})
    }

    getPageData = () => {

        const { pageSize, currentPage, selectedGenre, searchQuery, sortColumn, movies: allMovies} = this.state
        let filtered = allMovies
        if(searchQuery)
            filtered= allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        else if (selectedGenre && selectedGenre._id) 
            filtered= allMovies.filter(m => m.genre._id === selectedGenre._id)    

        // const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

        const sorted = _.sortBy(filtered, [sortColumn.path], [sortColumn.order])

        const movies = Paginate(sorted, currentPage, pageSize);

        return {totalCount: filtered.length, data: movies};
    }

    render() {
        // Object Dis-structuring
        const { length: count } = this.state.movies
        const { pageSize, currentPage, sortColumn} = this.state
        
        if (count === 0) return <p> No movies in the Database</p>

        const {totalCount, data: movies } = this.getPageData();
        return (
            <div className='row'>
                <div className='col-3'>
                    <ListGroup 
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}/>
                </div>
                <div className='col'>
                    <Link to='/movies/new'
                        className='btn btn-primary'
                        style={{ marginBottom: 20}}> New Movie
                    </Link>
                    <p> There is {totalCount} movies in the table </p>
                    {/* <SreachBox value={searchQuery} onChange={this.handleSearchQuery} /> */}
                    <MoviesTable 
                        movies={movies} 
                        sortColumn={sortColumn}
                        onLike={this.handleLiked} 
                        onDelete={this.handleRemoveRow}
                        onSort={this.handleSort} 
                    />
                    <Pagination 
                        itemsCount={totalCount} 
                        pageSize={pageSize} 
                        currentPage={currentPage}
                        onPageChange={this.handlePagination}/>
                </div>              
            </div>
        );
    }
}

export default Movies;
