import { Group, Stack, Text } from "@mantine/core";
import { WikiModal } from "../Modal";
import Icon from "../Icon/Icon";
import type { ErrorModalProps } from "./Error.model";
import getFormattedText from "../../helper/getFormattedText";

export const ErrorModal = (props: ErrorModalProps) => {
  const handleClick = () => {
    if (props.isLocal) {
      props.handleClose?.();
      return;
    }
    //close error modal
  };
  return (
    <WikiModal
      zIndex={10000}
      title={
        <Group gap={"xs"} component={"span"}>
          <Icon name="warning" />
          <Text component="span" fw={"bold"}>
            {"Attenzione"}
          </Text>
        </Group>
      }
      centered
      onClose={handleClick}
      opened={false}
      w={"600px"}
      maw={"80vw"}
      closeProps={{ label: "Chiudi" }}
    >
      <Stack>
        {["error"]?.map((msg, i) => (
          <Text
            key={`error${i}${msg}`}
            dangerouslySetInnerHTML={{ __html: getFormattedText(msg) }}
          />
        ))}
      </Stack>
    </WikiModal>
  );
};
