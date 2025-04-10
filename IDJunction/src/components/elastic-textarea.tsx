import React, {
  FC,
  HTMLProps,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { tripUnit } from "utils/dom";

export interface ElasticTextareaProps extends HTMLProps<HTMLTextAreaElement> {
  maxRows?: number;
}

export const ElasticTextarea: FC<ElasticTextareaProps> = ({
  onChange,
  maxRows,
  ...props
}) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (ref.current) {
      adjustHeight(ref.current);
    }
  }, []);
  const numberOfRows = useMemo(() => {
    if (height && ref.current) {
      const styles = window.getComputedStyle(ref.current);
      const lines = height / tripUnit(styles.lineHeight);
      return Math.ceil(lines);
    }
    return 1;
  }, [height]);
  const maxHeight = useMemo(() => {
    if (ref.current) {
      const styles = window.getComputedStyle(ref.current);
      return (maxRows ?? numberOfRows) * tripUnit(styles.lineHeight);
    }
    return 0;
  }, [numberOfRows, maxRows]);
  const adjustHeight = (el: HTMLTextAreaElement) => {
    el.style.height = "auto";
    el.style.minHeight = "40px"; // Thiết lập chiều cao tối thiểu
    if (maxHeight && maxHeight < el.scrollHeight) {
        el.style.height = `${maxHeight}px`; // Thiết lập chiều cao tối đa
    } else {
        el.style.height = "auto";
    }
    setHeight(el.scrollHeight);
  };

  return (
    <textarea
      {...props}
      className="w-full rounded-lg bg-[#fffdf2] text-black font-normal text-base p-2"
      style={{
        height: "40px",
        marginBottom: "10px",
        paddingTop: 0,
        paddingBottom: 0,
        maxHeight,
        resize: "none",
        border: "1px solid #387270",
        outline: "none",
        lineHeight: "none",
      }}
      ref={ref}
      onChange={(e) => {
        if (onChange) {
          onChange(e);
        }
        adjustHeight(e.currentTarget);
      }}
      rows={1}
    />
  );
};
