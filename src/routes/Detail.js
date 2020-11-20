import React from 'react';
import './Detail.css'

class Detail extends React.Component
{
   componentDidMount()
   {
       const {location, history} = this.props;
       

       if(location.state === undefined)
       {
           history.push('/');
       }
   }
   render()
   {
       const {location} = this.props;
       if(location.state)
       {
       return(
           <div className="movie">
           <div className="movie-data">
           <h3>{location.state.title}</h3>
           <img src={location.state.poster} className="image"/>
           <h4>{location.state.year}</h4>
           <h3>{location.state.genres}</h3>
           <h3>{location.state.summary}</h3>
           </div>
           </div>
        );
        
       }else{
           return null;
       }
   }
}
export default Detail;  