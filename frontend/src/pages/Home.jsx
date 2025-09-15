import MovieCard from "../components/MovieCard"

function Home(){
    const movies = [
        {id: 1, title: "john wick", release_date: "2020"},
        {id: 2, title: "terminator", release_date: "1999"},
        {id: 3, title: "the matrix", release_date: "1998"},

    ]

    const handleSearch = () => {

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..."
                    className="search-input"
                />
                <button type="submit" className="search-btn">search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home; 