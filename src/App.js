import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
      <h1>A List of Countries</h1>

      <table className="table">
            <thead>
                <tr>
                <th scope="col" data-field="countryName">
                Country Name
                </th>
                <th scope="col" data-field="currency">
                Currency
                </th>
                <th scope="col" data-field="population">
                Population
                </th>
                <th data-field="flag">
                Flag
                </th>
                <th data-field="flagUrl">
                Flag Url
                </th>
                <th data-field="GDP">
                GDP(%)
                </th>
                </tr>
            </thead>
            <tbody>
            {data && data.length>0 && data.map(item => 
              <tr key={item._id}>
                 <td className="table-primary">
                  {item.countryName}
                </td>
                <td className="table-secondary">
                  {item.currency}
                </td>
                <td className="table-success">
                  {item.population}
                </td>
                <td className="table-danger">
                  <img src={item.flag} className="flag" alt= {item.countryName}/>
                </td>
                <td className="table-info">
                  <a
                    className="App-link"
                    href={item.flagUrl}
                  >
                 {item.flagUrl}
                 </a>
                </td>
                <td className="table-warning">
                {item.GDP}
                </td>
              </tr>
               )
            }
              </tbody>
      </table>
               
    </div> 
  );
}

export default App;