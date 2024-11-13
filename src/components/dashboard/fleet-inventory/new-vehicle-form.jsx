"use client";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DialogDescription } from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { FileInput } from "../form-elements";
import { Plus } from "lucide-react";
import SuccessDialog from "../success-dialog";

const typeInputs = [
  { label: "Vehicle ID", name: "vehicleID", placeholder: "Enter Vehicle ID" },
  {
    label: "Vehicle Plate Number",
    name: "vehiclePlateNumber",
    placeholder: "Enter Vehicle Plate Number",
  },
  {
    label: "Vehicle Make/Model",
    name: "vehicleMakeModel",
    placeholder: "Enter Vehicle Make/Model",
  },
  {
    label: "Vehicle Engine Number",
    name: "vehicleEngineNumber",
    placeholder: "Enter Vehicle Engine Number",
  },
  {
    label: "Select Date of Procurement",
    name: "procurementDate",
    type: "date",
  },
  { label: "Select Date of Delivery", name: "deliveryDate", type: "date" },
  {
    label: "Procurement Source",
    name: "procurementSource",
    placeholder: "Enter Procurement Source",
  },
  { label: "Assigned To", name: "assignedTo", placeholder: "Assigned To" },
  { label: "Select Date of Assignment", name: "assignmentDate", type: "date" },
  {
    label: "Responsible Officer",
    name: "responsibleOfficer",
    placeholder: "Responsible Officer",
  },
];

const vehicleStatuses = [
  "Active",
  "Under Maintenance",
  "Pending Maintenance",
  "Awaiting Parts",
  "Out of Service",
  "Scheduled for Service",
  "Overdue for Service",
  "Retired",
  "Awaiting Disposal",
  "Allocated",
  "Pending Delivery",
  "Under Inspection",
  "Damaged",
  "Reserved",
  "Accident Reported",
  "Sold/Disposed",
];

const NewVehicleForm = ({ value, onValueChange }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  return (
    <form className="flex flex-col gap-4">
      <FileInput
        label="Upload Vehicle Image"
        name="vehicleImage"
        onChange={(file) =>
          setFormData((fd) => ({ ...fd, vehicleImage: file }))
        }
        fileTypes={["image/png", "image/jpg", "image/jpeg"]}
      />
      <FileInput
        label="Upload of procurement documents, such as invoices, approval letters, and delivery receipts.(Organize Them in one File)"
        name="procurementDocument"
        onChange={(file) =>
          setFormData((fd) => ({ ...fd, procurementDocument: file }))
        }
        fileTypes={["application/pdf"]}
      />
      {typeInputs.map((props) => (
        <div key={props.label} className="relative flex flex-col gap-2">
          <label htmlFor={props.name} className="text-sm">
            {props.label}
          </label>
          <Input
            type={props.type ?? "text"}
            id={props.name}
            onChange={(e) =>
              setFormData({ ...formData, [props.name]: e.target.value })
            }
            value={formData[props.name] ?? ""}
            className=""
          />
        </div>
      ))}
      <label htmlFor="vehicleStatus">Vehicle Status</label>
      <Select id="vehicleStatus" name="vehicleStatus">
        <SelectTrigger>
          <SelectValue placeholder="Select Vehicle Status" />
        </SelectTrigger>
        <SelectContent>
          {vehicleStatuses.map((status) => (
            <SelectItem key={status} value={status}>
              {status}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <SuccessDialog
        title="Vehicle Successfully added to Fleet inventory"
        description={
          <>
            {" "}
            Fleet Inventory of Vehicle{" "}
            <strong>[Vehicle ID: {formData.vehicleID}]</strong> have been saved
            and updated
          </>
        }
      >
        <Button onClick={() => setFormData({})}>Add Vehicle</Button>
      </SuccessDialog>
    </form>
  );
};

export default NewVehicleForm;
