import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddNewIncident from "./components/AddNewIncident";
import ViewIncidents from "./components/ViewIncidents";
import EditIncidentDetails from "./components/EditIncidentDetails";

function App() {
  const [incidentId, setIncidentId] = useState("");
  const [incidentDetailsUpdate, setIncidentDetailsUpdate] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route
          path="/tickets"
          element={
            <ViewIncidents
              setIncidentId={setIncidentId}
              setIncidentDetailsUpdate={setIncidentDetailsUpdate}
            />
          }
        />
        <Route exact path="/tickets/new" element={<AddNewIncident />} />
        <Route
          exact
          path={`/tickets/edit/${incidentId}`}
          element={
            <EditIncidentDetails
              incidentDetails={incidentDetailsUpdate}
              setIncidentDetails={setIncidentDetailsUpdate}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
