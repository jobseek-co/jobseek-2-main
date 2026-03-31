import React from "react";
import { Outlet } from "react-router-dom";

// ── Inner layout (consumes StepContext) ──
function Dashboard() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
