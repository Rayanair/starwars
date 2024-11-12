import React,{useState, useEffect} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Starship from '../component/starship';

const DetailPerso = () => {
    const location = useLocation();
    console.log(location.state.url)

    const [query, setQuery] = useState(null)

    useEffect(() => {
        async function fetchDetailPerso() {
          const response = await fetch(location.state.url);
          const data = await response.json();
          setQuery(data);
        }
        fetchDetailPerso();
      }, []);

    const navigate = useNavigate();
    
    if (query) {
    return(
        <div className="Perso"> 
        <h1>Info</h1>
        <div>name: {query.name}</div>
        <div>eyes color: {query.eye_color}</div>
        <div>birthday: {query.birth_year}</div>
        <div>gender: {query.gender}</div>
        <div>created: {query.created}</div>
        <div>edit: {query.edited}</div>
        <h1>Vaisseaux</h1>
        {query.starships.map((item, index) => (
            <div>
              <Starship url={item}/>
            </div>
        ))}
       
      </div>
    )
        }

        return(
            <div>Aucun Detail</div>
        )
} 

export default DetailPerso ;