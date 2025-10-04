import { TListProps, TListSharedProps } from "./List.model";
import styles from "./List.module.css";
import ListProvider from "./ListProvider";

const GemmaList = (props: TListProps) => {
  const listProps: TListSharedProps = {
    isHoverable: props.isHoverable,
  };
  return (
    <ListProvider listProps={listProps}>
      <ul className={styles.list}>{props.children}</ul>
    </ListProvider>
  );
};

export default GemmaList;
