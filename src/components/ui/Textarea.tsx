import "./Textarea.css";

import { useEffect, useRef } from "preact/hooks";

import type { JSX } from "preact";

interface Props extends JSX.HTMLAttributes<HTMLTextAreaElement> {
  value: string;
  minHeight?: string;
  placeholder?: string;
}

export default function ({
  value,
  minHeight = "1lh",
  placeholder,
  ...props
}: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      console.log(textarea.scrollHeight);
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  return (
    <textarea
      className="textarea"
      ref={textareaRef}
      style={{
        minHeight,
      }}
      placeholder={placeholder}
      value={value}
      {...props}
    />
  );
}

// Example usage:
