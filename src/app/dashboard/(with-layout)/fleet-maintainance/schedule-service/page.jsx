import ScheduleServiceForm from "@/components/dashboard/forms/schedule-service-form";
import SubHeader from "@/components/dashboard/sub-header";
import React from "react";

const ScheduleService = () => {
  return (
    <>
      <SubHeader
        title="Schedule A New Service"
        description="Schedule a new service"
      />
      <ScheduleServiceForm />
    </>
  );
};

export default ScheduleService;
