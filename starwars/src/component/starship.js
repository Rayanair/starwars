import React,{useState, useEffect} from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const Starship = (props) => {


    const [query, setQuery] = useState(null)
    useEffect(() => {
        async function fetchstarShip() {
          const response = await fetch(props.url);
          const data = await response.json();
          setQuery(data);
        }
       fetchstarShip();
      }, []);

    const navigate = useNavigate();

    
    if (query) {
        return(
            <div className="Perso"> 
            {console.log(query)}
            <p onClick={() => navigate('/DetailVaisseau',{
                    state:{
                        url: query.url,
                    }
          })}>{query.name}</p>
           
          </div>
        )
            }
    
            return(
                <div>Aucun vaiseau</div>
            )
   
} 

export default Starship;