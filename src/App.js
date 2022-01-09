import React,{useState,useEffect,Fragment} from 'react';
import './App.css';
import { nanoid } from "nanoid";
import FetchData from './components/FetchData';
import UpadateData from './components/UpdateData';
//import data from './data.json';


function App() {

  {/*fetch data*/}
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
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
  },[]);


  {/*insert data*/}
  const [addFormData, setAddFormData] = useState({
    countryName: "",
    currency: "",
    population: "",
    flag: "",
    flagUrl: "",
    GDP: "",
    
  });

  const [editFormData, setEditFormData] = useState({
    countryName: "",
    currency: "",
    population: "",
    flag: "",
    flagUrl: "",
    GDP: "",
  });

  const [editItemId, setEditItemId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: nanoid(),
      countryName: addFormData.countryName,
      currency: addFormData.currency,
      population: addFormData.population,
      flag: addFormData.flag,
      flagUrl: addFormData.flagUrl,
      GDP: addFormData.GDP,
    };

    const newData = [...data, newItem];
    setData(newData);

  };

  
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedItem = {
      id: editItemId,
      countryName: editFormData.countryName,
      currency: editFormData.currency,
      population: editFormData.population,
      flag: editFormData.flag,
      flagUrl: editFormData.flagUrl,
      GDP: editFormData.GDP,
    };

    const newData = [...data];

    const index = data.findIndex((item) => item.id === editItemId);

    newData[index] = editedItem;

    setData(newData);
    setEditItemId(null);
  };

    const handleEditClick = (event , item) => {
      event.preventDefault();
      setEditItemId(item.id);

      const formValues = {
        countryName: item.countryName,
        currency: item.currency,
        population: item.population,
        flag: item.flag,
        flagUrl: item.flagUrl,
        GDP: item.GDP,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditItemId(null);
    };
  
    const handleDeleteClick = (itemId) => {
      const newData = [...data];
  
      const index = data.findIndex((item) => item.id === itemId);
  
      newData.splice(index, 1);
  
      setData(newData);
     
  };

  return (
    <div className="App">
      <h1>Country Details</h1>

      <form onSubmit={handleEditFormSubmit}>
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
                      GDP(Million))
                  </th>
                </tr>
            </thead>

            <tbody>
            { data.map((item)  => (
              <Fragment>
                { editItemId === item.id ? (
                  <UpadateData
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                  />
                 ) : (
                  <FetchData 
                    item={item}
                    handleEditClick = {handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                     />
                  )} 
              </Fragment>
            ))}
            </tbody>
        </table>
      </form>


      <h2>Add Country Details</h2>
      <form onSubmit={handleAddFormSubmit}>
        <table>
          <tr>
          <td className="table-primary">
              <input
                type="text"
                className="form-control"
                id="inputGroupFile1"
                name="countryName"
                required="required"
                placeholder="Enter Country Name..."
                onChange={handleAddFormChange}
              />
            </td>
            <td className="table-secondary">
              <input
                type="text"
                className="form-control"
                id="inputGroupFile2"
                name="currency"
                required="required"
                placeholder="Enter Currency..."
                onChange={handleAddFormChange}
              />
            </td>
            <td className="table-success">
              <input
                type="text"
                className="form-control"
                id="inputGroupFile3"
                name="population"
                required="required"
                placeholder="Enter Population..."
                onChange={handleAddFormChange}
              />
            </td>
            <td className="table-danger">
              <input 
                type="text"
                className="form-control" 
                id="inputGroupFile02"
                name="flag"
                required="required"
                placeholder="Paste Country Flag Url here..."
                onChange={handleAddFormChange}
                />
            </td>
            <td className="table-info">
              <input
                type="text"
                className="form-control"
                id="inputGroupFile4"
                name="flagUrl"
                required="required"
                placeholder="Paste Country Flag URL"
                onChange={handleAddFormChange}
              /> 
            </td>
            <td className="table-warning">
              <input
                type="text"
                className="form-control"
                id="inputGroupFile5"
                name="GDP"
                required="required"
                placeholder="Enter GDP value..."
                onChange={handleAddFormChange}
              />
              </td>
            <button type="submit" className="btn btn-info">Add</button>
          </tr>
        </table>
       </form>        
    </div> 
  );
};

export default App;