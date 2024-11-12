import React,{useState, useEffect} from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const Perso = (props) => {


    const [query, setQuery] = useState(null)
    useEffect(() => {
        async function fetchPerso() {
          const response = await fetch(props.url);
          const data = await response.json();
          setQuery(data);
        }
       fetchPerso();
      }, []);

    const navigate = useNavigate();

    
    if (query) {
        return(
            <div className="Perso"> 
            {console.log(query)}
            <p onClick={() => navigate('/DetailPerso',{
                    state:{
                        url: query.url,
                    }
          })}>{query.name}</p>
           
          </div>
        )
            }
    
            return(
                <div>Aucun pilote</div>
            )
   
} 

export default Perso;