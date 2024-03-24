import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Incident from "./Incident";

const ViewIncidents = ({ setIncidentId, setIncidentDetailsUpdate }) => {
  const [incidentDetails, setIncidentDetails] = useState([]);
  const fetchIncidents = async () => {
    await axios
      .get("http://localhost:4000/tickets")
      .then((response) => setIncidentDetails(response.data))
      .catch((err) => console.log("error fetching data", err));
  };
  useEffect(() => {
    fetchIncidents();
  }, []);

  useEffect(() => {
    setIncidentDetailsUpdate(incidentDetails);
  }, [incidentDetails, setIncidentDetailsUpdate]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/tickets/${id}`);
      setIncidentDetails(
        incidentDetails.filter((incident) => incident._id === id)
      );
      fetchIncidents();
    } catch (err) {
      console.log("error while deleting incident ", err);
    }
  };
  return (
    <div className="view-incidents-container">
      <h2>Raised Incidents</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Incident ID</th>
            <th>Gender</th>
            <th>Animal Description</th>
            <th>Incident Type</th>
            <th>Incident Description</th>
            <th>Robbed Money</th>
            <th>Robbed Items</th>
            <th>Incident Location</th>
            <th>Train Details</th>
            <th>Platform Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {incidentDetails.map((incidentItem) => {
            return (
              <Incident
                key={incidentItem._id}
                id={incidentItem._id}
                handleDelete={handleDelete}
                setIncidentId={setIncidentId}
                gender={incidentItem.gender}
                animal={incidentItem.animalDescription}
                incidentType={incidentItem.incidentType}
                incidentDescription={incidentItem.incidentDescription}
                incidentDescriptionAmount={
                  incidentItem.incidentDescriptionAmount
                }
                incidentDescriptionItems={incidentItem.incidentDescriptionItems}
                incidentLocation={incidentItem.incidentLocation}
                trainDetails={incidentItem.trainDetails}
                platformDetails={incidentItem.platformDetails}
              />
            );
          })}
        </tbody>
      </table>
      <div className="buttons-container raised-incidents-footer">
        <Link to={"/"} className="view-button">
          Home
        </Link>
        <Link to={"/tickets/new"} className="add-button">
          New Incident
        </Link>
      </div>
    </div>
  );
};

export default ViewIncidents;
