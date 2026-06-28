import { Textarea, Text } from "@mantine/core";
import type { TWikiTextareaProps } from "./WikiTextarea.model";
import styles from "./WikiTextarea.module.css";

export const WikiTextarea = (props: TWikiTextareaProps) => {
  const value = props.value as string;
  return (
    <div className={styles.root}>
      <Textarea {...props} maxLength={props.maxLength} />
      <Text fw={"bold"} size="xs" component="span">
        {value.length}/{props.maxLength}
      </Text>
    </div>
  );
};
