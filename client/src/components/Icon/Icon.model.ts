import { MaterialSymbol } from "material-symbols";
import { HtmlHTMLAttributes } from "react";

export type TIconProps = {
  name: MaterialSymbol;
  size?: number;
  isClickable?: boolean;
  color?: string;
  isOutlined?: boolean;
} & HtmlHTMLAttributes<HTMLSpanElement>;
