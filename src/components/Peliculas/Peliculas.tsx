import { IonItem } from '@ionic/react';
import React from 'react';
import moviesJason from './../../assets/movies.json';
 import './Peliculas.css';

export const Peliculas: React.FC=()=>{
  
    const peliculas=moviesJason.slice(0,5);    
    return(
< div className="container">
<button>
{peliculas.map (pelicula=>{
const imageUrl="https://image.tmdb.org/t/p/w300" + pelicula.poster_path;
return(
  <IonItem routerLink="/titulo-pelicula"    > 
  
<img  
  width={230}
  height={345}
  src={imageUrl} alt={pelicula.title} />  
  <li className="lista" key={pelicula.id}>
    
    <p>
    
    {pelicula.title}
    </p>
    </li>

</ IonItem>

);})}
</button>
</div>
);
}