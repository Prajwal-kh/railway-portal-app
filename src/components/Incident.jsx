import React from "react";
import { Link } from "react-router-dom";

const Incident = (props) => {
  const {
    id,
    gender,
    animal,
    incidentType,
    incidentDescription,
    incidentDescriptionAmount,
    incidentDescriptionItems,
    incidentLocation,
    trainDetails,
    platformDetails,
    handleDelete,
    setIncidentId,
  } = props;

  return (
    <tr>
      <td>{id}</td>
      <td>{gender}</td>
      <td>{animal}</td>
      <td>{incidentType}</td>
      <td>{incidentDescription}</td>
      <td>{incidentDescriptionAmount}</td>
      <td>{incidentDescriptionItems}</td>
      <td>{incidentLocation}</td>
      <td>{trainDetails}</td>
      <td>{platformDetails}</td>
      <td>
        <Link
          to={`/tickets/edit/${id}`}
          className="edit-button"
          onClick={() => setIncidentId(id)}
        >
          Edit
        </Link>
        <button className="delete-button" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Incident;
