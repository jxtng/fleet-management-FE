import { AllInput as GenericAllInput } from "@/components/ui/form-elements";
import { cn } from "@/lib/utils";

const classes = {
  // input: {
  //   inputClassName:
  //     "border-0 border-b outline-none border-[#115931] bg-gray-50 rounded-b-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none",
  // },
  // select: {
  //   triggerClassName:
  //     "focus:ring-0 focus:ring-offset-0 " +
  //     "border-0 border-b outline-none border-[#115931] bg-gray-50 rounded-b-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none",
  // },
  // file: {
  //   previewClassName: "border-b border-[#115931] bg-white/30",
  // },
};

const mergeClass = (cls, inputObject) => {
  const mergedClass = {};
  for (const c in cls) mergedClass[c] = cn(cls[c], inputObject[c]);
  return mergedClass;
};

const addClasses = (inputs) => {
  return inputs.map((input) => {
    if (classes[input.type])
      return { ...input, ...mergeClass(classes[input.type], input) };
    if (input.type == "flex") {
      return { ...input, items: addClasses(input.items) };
    }
    return { ...input, ...mergeClass(classes.input, input) };
  });
};

export const AllInput = ({ inputs = [], ...props }) => {
  return <GenericAllInput inputs={addClasses(inputs)} {...props} />;
};
