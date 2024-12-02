import { z } from "zod";
import { axiosInstance } from "./axios";

export const createZodSchema = (formObjects) => {
  let schema = z.object({});

  formObjects.forEach(({ type, ...formObject }) => {
    if (type == "flex") {
      const { type, items, className, ...itemProps } = formObject;
      const flexSchema = createZodSchema(
        formObject.items.map((item) => ({ ...itemProps, ...item }))
      );
      schema = schema.merge(flexSchema);
      return;
    }

    let fieldSchema = validators[type]
      ? validators[type](formObject)
      : validators.text(formObject);
    fieldSchema = formObject.required ? fieldSchema : fieldSchema.optional();

    schema = schema.extend({ [formObject.name]: fieldSchema });
  });

  return schema;
};

export const createDefaultFormData = (formObjects) => {
  const formData = {};

  formObjects.forEach((field) => {
    formData[field.name] = field.default ?? "";
  });

  return formData;
};

export const createErrors = (zodError) => {
  const errors = {};
  zodError.issues.forEach((issue) => {
    errors[issue.path[0]] = issue.message;
  });

  return errors;
};

const validators = {
  text({ label, name, required }) {
    label = label ?? name;
    let schema = z.string({ required_error: `${label} is required` });

    if (required) schema = schema.min(1, { message: `${label} is required` });
    return schema;
  },
  number({ label, name, required }) {
    label = label ?? name;
    let schema = z.coerce.number({
      required_error: `${label} is required`,
      invalid_type_error: "You need to enter an amount/number",
    });

    if (required) schema = schema.min(1, { message: `${label} is required` });
    return schema;
  },

  select({ label, name, required, options }) {
    label = label ?? name;
    let validValues = Array.isArray(options)
      ? options.map((option) =>
          option
            .split(" ")
            .map((s, i) =>
              i > 0
                ? s[0].toUpperCase() + s.slice(1).toLowerCase()
                : s.toLowerCase()
            )
            .join("")
        )
      : options;
    let schema = z.enum(validValues, {
      required_error: `${label} is required`,
    });

    return schema;
  },

  date({ label, name }) {
    label = label ?? name;
    let schema = z.coerce.date({ required_error: `${label} is required` });

    return schema;
  },

  "datetime-local"({ label, name }) {
    return this.date({ label, name });
  },

  file({ label, name, required, fileTypes = [], maxSize = Infinity }) {
    return z
      .any()
      .refine((file) => file?.size <= maxSize, {
        message: `File size exceeds the maximum allowed size of ${
          maxSize / 1024
        } KB`,
      })
      .refine(
        (file) => (fileTypes.length ? fileTypes.includes(file?.type) : true),
        {
          message: `Invalid file type. File must be of type: ${fileTypes
            .map((type) => type.toUpperCase())
            .join(" or ")}`,
        }
      )
      .refine((file) => (required ? file : true), {
        message: `${label} is required`,
      });
  },
};

export const handleFormSubmitHelper = async ({
  formSchema,
  formData,
  endPoint,
  axiosConfig = {},
  setSubmitStatus,
  onFormError,
  onError,
  onSuccess,
  onSubmitStart,
  onSubmitEnd,
}) => {
  // Can be controlled using events and/or setSubmitStatus state function
  let formStatus = {};
  const validatedFormData = formSchema.safeParse(formData);

  if (!validatedFormData.success) {
    formStatus = {
      status: "form_error",
      error: createErrors(validatedFormData.error),
    };
    onFormError?.(formStatus);
    setSubmitStatus?.(formStatus);
    return formStatus;
  }

  formStatus = { status: "submitting", data: validatedFormData.data };
  onSubmitStart?.(formStatus);
  setSubmitStatus?.(formStatus);

  // formStatus = { status: "success", data: validatedFormData.data };
  // setSubmitStatus?.(formStatus);
  // return formStatus;
  try {
    const response = await axiosInstance.post(
      endPoint,
      validatedFormData.data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        ...axiosConfig,
      }
    );
    formStatus = { status: "success", data: response.data, response };
    onSuccess?.(formStatus);
    setSubmitStatus?.(formStatus);
  } catch (err) {
    formStatus = {
      status: "error",
      error:
        err.response?.data?.message ?? err.response?.data?.error ?? err.message,
      data: err?.response?.data,
      err,
    };
    setSubmitStatus?.(formStatus);
    onError?.(formStatus);
  }
  onSubmitEnd?.();
  return formStatus;
};
