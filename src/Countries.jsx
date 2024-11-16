import { useEffect, useState } from 'react';
import Card from './Card';
//import axios from axios;

function Countries() {
    //const countries = [0,1,2,3,4,5,6];
    const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        let apiData = null
        fetch(API_ENDPOINT).then(res => res.json()).then(data => setCountries(data) ).catch(error => console.error("Error fetching data: ", error));
    }, [])
    return <>
    <div style={{display:"flex", flexWrap:"wrap", gap:"10px"}}>
        {
            countries.map(({abbr, flag, name})=><Card key={abbr} name= {name} flag={flag}/>)
        }
    </div>
    
 
    </>
}

export default Countries