import React,{useState, useEffect} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Perso from '../component/perso';

const DetailVaisseau = () => {

    const location = useLocation();
    console.log(location)

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
        {console.log(query)}
        <div>name: {query.name}</div>
        <div>model: {query.model}</div>
        <div>manufacturer: {query.manufacturer}</div>
        <h1>Pilotes</h1>
        {query.pilots.map((item, index) => (
            <Perso url={item}/>
        ))}
       
      </div>
    )
        }

        return(
            <div>Aucun Detail</div>
        )
   
} 

export default DetailVaisseau  ;