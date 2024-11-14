"use client";
import { useEffect, useState } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { CloudUpload } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export const FileInput = ({
  label,
  name,
  onChange,
  fileTypes = [],
  maxSize = Infinity,
  uploadLabel = "Click to Upload File",
}) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (imagePreview) {
      window.URL.revokeObjectURL(imagePreview);
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (fileTypes.length && !fileTypes.includes(file.type)) {
      return setError(
        `Invalid file type. File must be of type: ${fileTypes.join(" or ")}`
      );
    }

    if (file.size > maxSize) {
      return setError(
        `File size exceeds the maximum allowed size of ${maxSize / 1024} KB`
      );
    }

    if (imagePreview) window.URL.revokeObjectURL(imagePreview);
    setImagePreview(
      file.type.startsWith("image/")
        ? window.URL.createObjectURL(file)
        : file.name
    );
    onChange?.(file);
  };

  return (
    <div className="img-upload relative">
      <label htmlFor={name}>
        <span className="text-sm">{label}</span>
        <VisuallyHidden.Root>
          <input
            type="file"
            name={name}
            id={name}
            accept={fileTypes.join(",")}
            onChange={handleFileChange}
            className="appearance-none"
          />
        </VisuallyHidden.Root>
        <div className="h-20 mt-2 rounded-lg flex flex-col justify-center items-center border border-input">
          {imagePreview?.includes("://") ? (
            <img
              src={imagePreview}
              alt="Your uploaded image should appear here"
              className="h-full"
            />
          ) : imagePreview ? (
            <p className="text-center">{imagePreview}</p>
          ) : (
            <>
              <CloudUpload size={32} />
              {uploadLabel}
            </>
          )}
        </div>
      </label>
      <div className="error text-red-500 text-xs">{error}</div>
    </div>
  );
};

export const TypeInput = ({
  type = "text",
  label,
  name,
  onChange,
  value,
  className,
  placeholder,
  ...props
}) => {
  return (
    <div className="relative flex flex-col gap-2">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder ?? label}
        onChange={(e) => onChange?.(e.target.value)}
        value={value}
        className={`input ${className}`}
        {...props}
      />
    </div>
  );
};

export const SelectInput = ({
  label,
  name,
  onChange,
  value,
  options = [],
  placeholder,
}) => {
  return (
    <div className="relative flex flex-col gap-2">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <Select id={name} name={name} onChange={onChange} value={value}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => {
            const { label, value } =
              typeof option == "string"
                ? {
                    label: option,
                    value: option
                      .split(" ")
                      .map((s, i) =>
                        i > 0
                          ? s[0].toUpperCase() + s.slice(1).toLowerCase()
                          : s.toLowerCase()
                      ),
                  }
                : option;

            return (
              <SelectItem key={label + value} value={value}>
                {label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export const AllInput = ({ inputs, formData, setFormData }) => {
  return (
    <>
      {inputs.map((input) => {
        let InputElement = TypeInput;
        if (input.type == "file") InputElement = FileInput;
        if (input.type == "select") InputElement = SelectInput;
        return (
          <InputElement
            {...input}
            key={input.name + input.label}
            onChange={(value) =>
              setFormData((fd) => ({ ...fd, [input.name]: value }))
            }
            value={formData[input.name]}
          />
        );
      })}
    </>
  );
};
