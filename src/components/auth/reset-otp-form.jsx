"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";

const ResetOTPForm = () => {
  const [value, setValue] = useState("");

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // OTP submit logic coming soon
  };

  return (
    <form
      onSubmit={handleOTPSubmit}
      className="flex flex-col self-stretch gap-4"
    >
      <label htmlFor="otp">Enter Reset Code</label>
      <OTPInput length={6} value={value} setValue={setValue} />

      <Button disabled={value.length < 6}>Submit</Button>
    </form>
  );
};

const OTPInput = ({ length, value, setValue, slotClassName }) => {
  const [selectionRange, setSelectionRange] = useState([]);
  // const [typing, setTyping] = useState(true);
  const inputRef = useRef(null);

  const pattern = "^[A-Za-z0-9]?$";

  useEffect(() => {
    if (selectionRange[0] + 1 == selectionRange[1]) {
      inputRef.current.selectionStart = selectionRange[1];
    }
  }, [selectionRange]);

  const handleRangeSelection = (range) => {
    let { start, end } = range;

    if (end == 0) end = 1;
    if (start != 0 && start == end) start -= 1;
    setSelectionRange([start, end]);
  };

  return (
    <div
      className="relative flex flex-row gap-2"
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      {[...Array(length)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "slot flex justify-center items-center w-12 h-12 text-center text-lg border border-gray-300 rounded-lg",
            value[i] && "border-green-300 bg-green-100",
            selectionRange[0] <= i &&
              selectionRange[1] >= i + 1 &&
              "border-transparent outline outline-2 outline-black",
            slotClassName
          )}
        >
          {value[i]}
        </div>
      ))}
      <input
        autoComplete="one-time-code"
        aria-label="otp-input"
        inputMode="numeric"
        maxLength={length}
        pattern="^\d+$"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="appearance-none bg-transparent text-transparent selection:bg-transparent selection:text-transparent absolute inset-0 caret-transparent focus:outline-none"
        ref={inputRef}
        onKeyUp={(e) => {
          handleRangeSelection({
            start: e.target.selectionStart,
            end: e.target.selectionStart,
          });
        }}
        onSelect={(e) => {
          handleRangeSelection({
            start: e.target.selectionStart,
            end: e.target.selectionStart,
          });
        }}
      />
    </div>
  );
};

export default ResetOTPForm;
