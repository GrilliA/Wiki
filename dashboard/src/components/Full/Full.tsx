import { Button, Container, Text } from "@mantine/core";
import styles from "./Full.module.css";
import { WikiModal } from "../Modal";
import Icon from "../Icon/Icon";
import { useRouter } from "../../hooks/useRouter";
import { forwardRef, type RefObject, useState, isValidElement } from "react";
import type { TFull, TDirection } from "./Full.model";

const Full = forwardRef((props: TFull, ref: RefObject<HTMLDivElement>) => {
  const { noNav } = props;
  const { back } = useRouter();
  const [isOpened, setIsOpened] = useState(false);
  const handleBackNavigation = () => {
    back();
  };
  const handleDefaultLeftAction = () => {
    if (props.isDirty) {
      setIsOpened(true);
      return;
    }
    handleBackNavigation();
  };
  const left = !isValidElement(props.left) ? (
    <Button
      type="button"
      size="compact-md"
      variant="transparent"
      leftSection={
        (props.left as TDirection)?.icon || <Icon name="chevron_left" />
      }
      disabled={(props.left as TDirection)?.disabled}
      form={(props.left as TDirection)?.form}
      onClick={(props.left as TDirection)?.onClick ?? handleDefaultLeftAction}
      p={0}
    >
      {(props.left as TDirection)?.text ?? "Back"}
    </Button>
  ) : (
    props.left
  );

  const right = !isValidElement(props.right) ? (
    <Button
      type="submit"
      variant="transparent"
      size="compact-md"
      leftSection={(props.right as TDirection)?.icon}
      disabled={(props.right as TDirection)?.disabled}
      form={(props.right as TDirection)?.form}
      onClick={(props.right as TDirection)?.onClick}
    >
      {(props.right as TDirection)?.text}
    </Button>
  ) : (
    props.right
  );

  return (
    <>
      <WikiModal
        size={"xl"}
        opened={isOpened}
        title={"Save changes"}
        centered
        onClose={() => setIsOpened(false)}
        confirmProps={{
          label: "Continue",
          onClick: handleBackNavigation,
        }}
        closeProps={{
          label: "Cancel",
        }}
      >
        Are you sure you want to leave without saving changes?
      </WikiModal>
      <div>
        <Container>
          <section className={styles.wrapper}>
            {noNav ? null : (
              <div className={styles.nav}>
                {left}
                <Text fw="bold" size="md">
                  {props.title}
                </Text>
                {right}
              </div>
            )}
            <div className={styles.full} ref={ref} id={props.id}>
              {props.children}
            </div>
          </section>
        </Container>
      </div>
    </>
  );
});

export default Full;
