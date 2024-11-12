import React,{useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

const Personnage = () => {

    const [query, setQuery] = useState(null)
    const [perso, setPerso] = useState(null)


    useEffect(() => {
        async function fetchperso() {
          const response = await fetch("https://swapi.dev/api/people");
          const data = await response.json();
          setQuery(data);
        }
        fetchperso();
      }, []);

    const navigate = useNavigate();
    
    if (query) {

        if(perso){

            return(
                <div className="Perso"> 
                <h1>Perso</h1>
                <input type='search' onChange={(e) => setPerso(e.target.value)}/>
            {query.results.filter(jedi => jedi.name.toLowerCase().includes(perso.toLowerCase())).map(filteredName => (
                <p onClick={() => navigate('DetailPerso',{
                    state:{
                        url: filteredName.url,
                    }
          })}>
                {filteredName.name}
                </p>
  ))}
              </div>
            )
        }else{
            return(
                <div className="Perso"> 
                <h1>Perso</h1>
                <input type='search' onChange={(e) => setPerso(e.target.value)}/>
                {query.results.map((item, index) => (
                    <div>
                        <p onClick={() => navigate('DetailPerso',{
                            state:{
                                url: item.url,
                            }
                  })}> {item.name}</p>
                    {console.log(item)}
                    </div>
                ))}
              </div>
            )
        }
    
        }

        return(
            <div>Aucun perso</div>
        )
   
} 

export default Personnage ;