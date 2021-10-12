import React, { useEffect} from 'react';
import axios from 'axios';
export const Prueba = () => {
    

    useEffect(()=>{
        const getUsers = async () =>{
            const res = await axios.post('http://localhost:3030/api/usuario/singin',{
                params: {
                    "user" : "piero",
                    "password" : "123456"
                  }
              });
            console.log(res);    
        };
        getUsers();
    });
    

    return (
        <div>
            <h1>Prueba</h1>
            <button>PRESIONA</button>
        </div>
    )

}
