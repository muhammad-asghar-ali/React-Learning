import * as genresAPI from './fakeGenresServives';

const  movies = [
    {
        _id: "1", 
        title: "Terminator", 
        genre: { _id: '1a', name:"Action"}, 
        numberInStock: 6, 
        dailyRentalRate: 2.5, 
        publishDate: "2018-01-03T19:04:28.809Z", 
        liked:''
    }, 
    {
        _id: "2", 
        title: "Die Hard", 
        genre: { _id: '1a', name:"Action"}, 
        numberInStock: 5, 
        dailyRentalRate: 2.5 
    }, 
    {
        _id: "3", 
        title: "Trip to Italy", 
        genre: { _id: '1b', name: "Comedy"}, 
        numberInStock: 7, 
        dailyRentalRate: 3.5 
    }, 
    {
        _id: "4", 
        title: "Troy", 
        genre: { _id: '1a', name:"Action"}, 
        numberInStock: 6, 
        dailyRentalRate: 2.5, 
        publishDate: "2018-01-03T19:04:28.809Z" 
    }, 
    {
        _id: "5", 
        title: "It", 
        genre:  { _id: '1c', name:"Thriller" },  
        numberInStock: 7, 
        dailyRentalRate: 4.9 
    },
    {
        _id: "6", 
        title: "Dune", 
        genre:  { _id: '1c', name:"Thriller" }, 
        numberInStock: 4, 
        dailyRentalRate: 3.5 
    }, 
    {
        _id: "7", 
        title: "Gone Girl", 
        genre:  { _id: '1c', name:"Thriller" }, 
        numberInStock: 7, 
        dailyRentalRate: 4.5 
    },
    {
        _id: "8", 
        title: "The Sixth Sense", 
        genre:  { _id: '1c', name:"Thriller" }, 
        numberInStock: 4, 
        dailyRentalRate: 3.5 
    },
    {
        _id: "9", 
        title: "Squad", 
        genre:  { _id: '1c', name:"Thriller" }, 
        numberInStock: 7, 
        dailyRentalRate: 4.5 
    }, 
    {
        _id: "10", 
        title: "Welcome", 
        genre: { _id: '1b', name: "Comedy"}, 
        numberInStock: 9, 
        dailyRentalRate: 2.5
    }    
]

export function getMovies() { return movies; }

export function getMovie(id) { return movies.find(m => m._id === id); } 

export function saveMovie(movie) {
    let movieInDb = movies.find(m => m._id === movie._id) || {};
    
    movieInDb.title = movie.title;
    movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);

    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRatedaily;

    if(!movieInDb._id){
        movieInDb._id = Date.now().toString();
        movies.push(movieInDb)   
    }  

    return movieInDb
}  

export function deleteMovie(id) {
    let movieInDb = movies.find(m => m._id === id);
    movies.splice(movies.indexOf(movieInDb), 1);
    return movieInDb;
  }
