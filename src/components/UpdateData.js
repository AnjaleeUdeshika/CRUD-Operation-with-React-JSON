import React from 'react'

const UpadateData = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
    }) => {
    return(
        <tr>
        <td className="table-primary">
          <input
            type="text"
            required="required"
            placeholder="Enter Country Name..."
            name="countryName"
            value={editFormData.countryName}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className="table-secondary">
          <input
            type="text"
            required="required"
            placeholder="Enter Currency..."
            name="currency"
            value={editFormData.currency}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className="table-success">
          <input
            type="text"
            required="required"
            placeholder="Enter Population..."
            name="population"
            value={editFormData.population}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className="table-danger">
          <input
            type="text"
            required="required"
            placeholder="Upload Country Flag..."
            name="flag"
            value={editFormData.flag}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className="table-info">
          <input
            type="text"
            required="required"
            placeholder="Paste Flag URL..."
            name="flagUrl"
            value={editFormData.flagUrl}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className="table-warning">
          <input
            type="text"
            required="required"
            placeholder="Enter GDP value"
            name="GDP"
            value={editFormData.GDP}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td><button type="submit" className="btn btn-warning">Save</button></td>
        <td>
            <button type="button" className="btn btn-danger" onClick={handleCancelClick}>
                Cancel
            </button>
        </td>
      </tr>

    );
};
export default UpadateData