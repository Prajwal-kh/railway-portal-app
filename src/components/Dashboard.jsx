import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Railway Inquiry Portal</h2>
      <div className="buttons-container">
        <Link to={"/tickets"} className="view-button">
          View Incidents
        </Link>
        <Link to={"/tickets/new"} className="add-button">
          Add New Incident
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
