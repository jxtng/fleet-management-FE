import NewMaintenanceBreakdownForm from "@/components/dashboard/forms/new-maintenance-breakdown-form";
import SubHeader from "@/components/dashboard/sub-header";
import React from "react";

const MaintenanceBreakdown = () => {
  return (
    <>
      <SubHeader
        title="Report Breakdown"
        description="Report a new breakdown"
      />
      <NewMaintenanceBreakdownForm />
    </>
  );
};

export default MaintenanceBreakdown;
