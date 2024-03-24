import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddNewIncident = () => {
  const navigate = useNavigate();
  const [incidentDetails, setIncidentDetails] = useState({
    gender: "",
    animalDescription: "",
    incidentType: "",
    incidentDescription: "",
    incidentDescriptionItems: "",
    incidentDescriptionAmount: "",
    incidentLocation: "",
    trainDetails: "",
    platformDetails: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncidentDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/tickets/new", incidentDetails);
      navigate("/tickets");
    } catch (error) {
      console.error("Error while adding incident ticket:", error);
    }
  };
  return (
    <div className="form-input-container">
      <h2 className="field-header">Please provide the incident details</h2>
      <form action="_blank" onSubmit={handleSubmit}>
        <div className="type">
          <label htmlFor="incidentType" className="form-label">
            Enter incident type:{" "}
          </label>
          <select
            name="incidentType"
            id="incidentType"
            value={incidentDetails.incidentType}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">Select</option>
            <option value="Human Accident">Human Accident</option>
            <option value="Animal Accident">Animal Accident</option>
            <option value="Railway Track Derailment">
              Railway Track Derailment
            </option>
            <option value="Theft in Boogey">Theft in Boogey</option>
            <option value="Theft on Platform">Theft on Platform</option>
          </select>
        </div>
        {incidentDetails.incidentType === "Human Accident" && (
          <div className="gender">
            <label htmlFor="gender" className="form-label">
              Enter gender of a person:{" "}
            </label>
            <select
              name="gender"
              id="gender"
              value={incidentDetails.gender}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Select</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
          </div>
        )}
        {incidentDetails.incidentType === "Animal Accident" && (
          <div className="animal-details">
            <label htmlFor="animalDescription" className="form-label">
              Enter animal description:{" "}
            </label>
            <textarea
              name="animalDescription"
              id="animalDescription"
              value={incidentDetails.animalDescription}
              cols="30"
              rows="2"
              className="form-input animal-description"
              onChange={handleChange}
            ></textarea>
          </div>
        )}
        {(incidentDetails.incidentType === "Theft in Boogey" ||
          incidentDetails.incidentType === "Theft on Platform") && (
          <div className="theft-section">
            <label htmlFor="incidentDescription" className="form-label">
              Enter robbed amount/items:
            </label>
            <div className="amount-section">
              <input
                type="radio"
                name="incidentDescription"
                id="amount"
                value="amount"
                onChange={handleChange}
                required
              />
              <label htmlFor="amount">Amount</label>
            </div>
            <div className="items-section">
              <input
                type="radio"
                name="incidentDescription"
                id="items"
                value="items"
                onChange={handleChange}
                required
              />
              <label htmlFor="items">Items</label>
            </div>
          </div>
        )}

        {incidentDetails.incidentDescription ? (
          <div>
            <label
              htmlFor="incidentDescriptionDetails"
              className="form-label"
            >{`Enter ${incidentDetails.incidentDescription}: `}</label>
            {incidentDetails.incidentDescription === "amount" && (
              <input
                type="text"
                name="incidentDescriptionAmount"
                id="incidentDescriptionDetails"
                value={incidentDetails.incidentDescriptionAmount}
                onChange={handleChange}
                className="form-input"
              />
            )}
            {incidentDetails.incidentDescription === "items" && (
              <input
                type="text"
                name="incidentDescriptionItems"
                id="incidentDescriptionDetails"
                value={incidentDetails.incidentDescriptionItems}
                onChange={handleChange}
                className="form-input"
              />
            )}
          </div>
        ) : null}
        <div>
          <label htmlFor="incidentLocation" className="form-label">
            Enter incident location:
          </label>
          <select
            name="incidentLocation"
            id="incidentLocation"
            value={incidentDetails.incidentLocation}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">Select</option>
            <option value="Train">Train</option>
            <option value="Railway platform">Railway platform</option>
          </select>
        </div>
        {incidentDetails.incidentLocation ? (
          <div>
            <label
              htmlFor="incidentLocationDetails"
              className="form-label"
            >{`Enter ${incidentDetails.incidentLocation} name: `}</label>
            {incidentDetails.incidentLocation === "Train" && (
              <input
                type="text"
                name="trainDetails"
                id="incidentLocationDetails"
                value={incidentDetails.trainDetails}
                onChange={handleChange}
                className="form-input"
                required
              />
            )}
            {incidentDetails.incidentLocation === "Railway platform" && (
              <input
                type="text"
                name="platformDetails"
                id="incidentLocationDetails"
                value={incidentDetails.platformDetails}
                onChange={handleChange}
                className="form-input"
                required
              />
            )}
          </div>
        ) : null}
        <div className="register-button-div">
          <button type="submit" className="register-button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewIncident;
