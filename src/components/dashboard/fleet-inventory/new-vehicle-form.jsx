"use client";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { CloudUpload, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";

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
  const [formImages, setFormImages] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    for (const image in formImages) {
      if (image) window.URL.revokeObjectURL(image);
    }
  }, [formImages]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
      return setErrors((previousError) => ({
        ...previousError,
        [e.target.name]: "Invalid image type. Image must be png, jpg or jpeg",
      }));
    }

    setFormImages((fi) => ({
      ...fi,
      [e.target.name]: window.URL.createObjectURL(file),
    }));
  };

  return (
    <form className="flex flex-col gap-4">
      <ImageInput
        label="Upload Vehicle Image"
        name="vehicleImage"
        onChange={handleImageChange}
        error={errors.vehicleImage}
        value={formImages.vehicleImage}
      />
      {typeInputs.map((props) => (
        <TypeInput
          key={props.label}
          {...props}
          onChange={(e) =>
            setFormData({ ...formData, [props.name]: e.target.value })
          }
          value={formData[props.name] ?? ""}
        />
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

      <Dialog>
        <DialogTrigger asChild>
          <Button onClick={() => setFormData({})}>Add Vehicle</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <Image
              src="/images/success.svg"
              width={167}
              height={135}
              alt="Operation successful image"
              className="block mx-auto"
            />

            <DialogTitle className="text-secondary text-xl text-center">
              Vehicle Successfully added to Fleet inventory
            </DialogTitle>
            <DialogDescription className="text-center">
              Fleet Inventory of Vehicle{" "}
              <strong>[Vehicle ID: {formData.vehicleID}]</strong> have been
              saved and updated
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>
                <Plus />
                Add Another Vehicle
              </Button>
            </DialogClose>
            <Button variant="outline">
              <Link href="/dashboard/fleet-inventory">Back to Inventory</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
};

const TypeInput = ({ label, type = "text", name, ...props }) => {
  return (
    <div className="relative flex flex-col gap-2">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <Input type={type} id={name} {...props} className="" />
    </div>
  );
};

const ImageInput = ({ label, name, value, onChange, error }) => {
  return (
    <div className="img-upload relative">
      <label htmlFor="vehicleImage">
        <span className={buttonVariants({ variant: "outline" })}>{label}</span>
        <VisuallyHidden.Root>
          <input
            type="file"
            name={name}
            id={name}
            accept="image/*"
            onChange={onChange}
            className="appearance-none"
          />
        </VisuallyHidden.Root>
        <div className="h-48 mt-2 rounded-lg flex flex-col justify-center items-center border border-input">
          {}
          {value ? (
            <img
              src={value}
              alt="Your uploaded image should appear here"
              className="h-full"
            />
          ) : (
            <>
              <CloudUpload size={32} />
              Click to upload image
            </>
          )}
        </div>
      </label>
      <div className="error text-red-500 text-xs">{error}</div>
    </div>
  );
};

export default NewVehicleForm;
