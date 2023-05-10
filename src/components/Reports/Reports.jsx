import React from "react";
import { Button } from "@mui/material";
import "./reports.css";
function Reports({ setOpenCreateModal }) {
  
  return (
    <div className="primary-cont">
      <div className="add-cont">
      <Button
        variant="contained"
        size="small"
        color="secondary"
        sx={{ width: "200px", height: "50px", top: "30px", marginLeft: "1rem" }}
        onClick={() => setOpenCreateModal(true)}
      >
        Add Items
      </Button>
     </div>
    </div>
  );
}

export default Reports;
