import React from 'react';
import axios from 'axios';
 class App extends React.Component
 {
   state = {
     isLoading: true,
     movies: [],
   }
   getMovies = async() =>
   {
     const{
       data:
       {
         data:{movies}
       },
     } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
     this.setState({movies, isLoading: false});
   }
   componentDidMount()
   {
    this.getMovies();
   }
    render()
    {
      const {isLoading, movies} = this.state;
    return ( 
        <div>
            {isLoading ? 'Loading': movies.map(
              (movie) => this.state
            )}
        </div> 
      );
    }
 }
export default App;