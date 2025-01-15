import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const OTPInput = ({ length, value, setValue, pattern, slotClassName }) => {
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const inputRef = useRef(null);

  const patterns = {
    numeric: /^\d+$/,
    alpha: /^[a-z]+$/i,
    alphanumeric: /^[a-z0-9]+$/i,
  };
  const otpPattern = new RegExp(
    patterns[pattern] ?? pattern ?? patterns.alphanumeric
  );

  useEffect(() => {
    const { start, end } = selection;
    inputRef.current.selectionEnd = end;
    inputRef.current.selectionStart = start;
  }, [selection]);

  const onCaertPositionChange = () => {
    let { selectionStart: start, selectionEnd: end } = inputRef.current;

    let { start: prevStart } = selection;

    if (start == value.length) {
      end = value.length + 1;
    }

    if (start == end) {
      prevStart == start ? start-- : end++;
    }

    if (end < 1) end = 1;
    if (start < 0) start = 0;
    if (start > length - 1) start = length - 1;

    setSelection({ start, end });
  };

  let { start, end } = selection;

  return (
    <div
      className="relative flex flex-row gap-2"
      onClick={() => inputRef.current?.focus()}
      onFocus={() => inputRef.current?.focus()}
    >
      {[...Array(length)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "slot flex justify-center items-center w-12 h-12 text-center text-lg border border-gray-300 rounded-lg",
            value[i] && "border-green-300 bg-green-100",
            start <= i &&
              end >= i + 1 &&
              "border-transparent outline outline-2 outline-black",
            slotClassName
          )}
          onClick={() => {
            let start = value[i] ? i : value.length;
            setSelection({ start, end: start + 1 });
          }}
          onDoubleClick={() => setSelection({ start: 0, end: value.length })}
        >
          {value[i]}
        </div>
      ))}
      <input
        autoComplete="one-time-code"
        aria-label="otp-input"
        maxLength={length}
        spellCheck={false}
        pattern={otpPattern.source}
        value={value}
        onChange={(e) => {
          if (
            (e.target.value && !otpPattern.test(e.target.value)) ||
            e.target.value.length > length
          ) {
            return;
          }

          setValue(e.target.value);
          onCaertPositionChange();
        }}
        className="appearance-none bg-transparent text-transparent selection:bg-transparent selection:text-transparent absolute inset-0 caret-transparent focus:outline-none z-10 pointer-events-none"
        ref={inputRef}
        onClick={onCaertPositionChange}
        onKeyUp={onCaertPositionChange}
        onKeyDown={onCaertPositionChange}
        onSelect={onCaertPositionChange}
      />
    </div>
  );
};

export default OTPInput;
