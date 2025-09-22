import { forwardRef, Ref } from "react";
import { TIconProps } from "./Icon.model";

const Icon = forwardRef((props: TIconProps, ref: Ref<HTMLSpanElement>) => {
  const { name, isOutlined, className, ...rest } = props;
  const fill = isOutlined ? "0" : "1";
  return (
    <span
      ref={ref}
      style={{
        fontSize: props.size,
        cursor: props.isClickable ? "pointer" : "inherit",
        color: props.color,
        fill: props.color,
        fontVariationSettings: `'FILL' ${fill} , 'wght' 400, 'GRAD' 0, 'opsz' 48`,
      }}
      {...rest}
      className={`${className} material-symbols-outlined`}
    >
      {name}
    </span>
  );
});

export default Icon;
