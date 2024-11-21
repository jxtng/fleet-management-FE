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
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const FileInput = ({
  label,
  name,
  onChange,
  fileTypes = [],
  maxSize = Infinity,
  className,
  previewClassName,
  uploadLabel = "Click to Upload File",
}) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!selectedFile?.type?.startsWith("image")) {
      setImagePreview(null);
      return;
    }

    const imagePreviewURL = window.URL.createObjectURL(selectedFile);
    setImagePreview(imagePreviewURL);

    return () => window.URL.revokeObjectURL(imagePreviewURL);
  }, [selectedFile]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    let validationSuccess = true;

    if (fileTypes.length && !fileTypes.includes(file?.type)) {
      validationSuccess = false;
      setError(
        `Invalid file type. File must be of type: ${fileTypes.join(" or ")}`
      );
    }

    if (file.size > maxSize) {
      validationSuccess = false;
      setError(
        `File size exceeds the maximum allowed size of ${maxSize / 1024} KB`
      );
    }

    setSelectedFile(validationSuccess ? file : null);
    onChange?.(validationSuccess ? file : null);
  };

  return (
    <div className={cn("img-upload relative", className)}>
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
        <div
          className={cn(
            "input-area file-preview h-20 mt-2 rounded-lg text-sm flex flex-col justify-center items-center border border-input",
            previewClassName
          )}
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Your uploaded image should appear here"
              className="h-full"
            />
          ) : selectedFile ? (
            <p className="text-center">{selectedFile.name}</p>
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
  className,
  inputClassName,
  containerClassName,
  icon,
  ...props
}) => {
  return (
    <div className={cn("relative flex flex-col gap-2", className)}>
      <label htmlFor={name} className="text-sm">
        {label} {props.required && <span className="text-red-400">{"*"}</span>}
      </label>
      <div className={cn("relative", containerClassName)}>
        {icon && (
          <div className="icon text-muted-foreground absolute bottom-1/2 translate-y-1/2 ml-2 *:w-6">
            {icon}
          </div>
        )}
        <Input
          type={type}
          id={name}
          name={name}
          onChange={(e) => onChange?.(e.target.value)}
          className={cn("input-area", icon && "pl-9", inputClassName)}
          {...props}
        />
      </div>
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
  className,
  triggerClassName,
  icon,
}) => {
  return (
    <div className={cn("relative flex flex-col gap-2", className)}>
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <Select id={name} name={name} onValueChange={onChange} value={value}>
        <SelectTrigger className={cn("input-area", triggerClassName)}>
          <div className="value flex gap-2 items-end">
            {icon}
            <SelectValue placeholder={placeholder} />
          </div>
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
                      )
                      .join(""),
                  }
                : option;

            return (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export const TextareaInput = ({
  name,
  label,
  placeholder,
  onChange,
  className,
  inputClassName,
  ...props
}) => {
  return (
    <div className={cn("relative flex flex-col gap-2", className)}>
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <Textarea
        id={name}
        name={name}
        placeholder={placeholder ?? label}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn("input-area", inputClassName)}
        {...props}
      />
    </div>
  );
};

export const AllInput = ({ inputs, formData, setFormData, ...props }) => {
  return (
    <>
      {inputs.map((input, index) => {
        let InputElement = TypeInput;
        if (input.type == "file") InputElement = FileInput;
        if (input.type == "select") InputElement = SelectInput;
        if (input.type == "textarea") InputElement = TextareaInput;
        if (input.type == "flex") {
          return (
            <div key={"flex" + index} className="flex gap-4 *:basis-0 *:grow">
              <AllInput
                inputs={input.items}
                formData={formData}
                setFormData={setFormData}
                {...props}
              />
            </div>
          );
        }
        return (
          <InputElement
            key={input.name + input.label}
            onChange={(value) => {
              setFormData?.((fd) => ({ ...fd, [input.name]: value }));
            }}
            value={formData?.[input.name] ?? ""}
            {...props}
            {...input}
          />
        );
      })}
    </>
  );
};
