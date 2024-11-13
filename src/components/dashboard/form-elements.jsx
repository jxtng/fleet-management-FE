"use client";
import { useEffect, useState } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { CloudUpload } from "lucide-react";

export const FileInput = ({
  label,
  name,
  onChange,
  fileTypes = [],
  maxSize = Infinity,
}) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (imagePreview) {
      window.URL.revokeObjectURL(imagePreview);
    }
  }, []);

  const handleImageChange = (e) => {
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
            onChange={handleImageChange}
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
              Click to upload file
            </>
          )}
        </div>
      </label>
      <div className="error text-red-500 text-xs">{error}</div>
    </div>
  );
};
