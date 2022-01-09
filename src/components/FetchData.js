import React from 'react'

const FetchData = ({ item , handleEditClick, handleDeleteClick  }) => {
    return (
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
                <a className="App-link"
                    href={item.flagUrl}>
                    Click here for flag
                </a>
            </td>
            <td className="table-warning">
                {item.GDP}
            </td>
            <td class="table-info">
                <button 
                    type="button" 
                    class="btn btn-success" 
                    onClick={(event) => handleEditClick(event, item)}>
                        Update
                </button>
            </td>
            <td class="table-danger">
                <button 
                    type="button" 
                    class="btn btn-danger"
                    onClick={() => handleDeleteClick(item.id)}>
                        Delete
                </button>
            </td>
        </tr>
    );

};

export default FetchData