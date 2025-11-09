import { Group, Stack, Text } from "@mantine/core";
import { WikiModal } from "../Modal";
import Icon from "../Icon/Icon";
import useGlobalState from "../../hooks/useGlobalState";
import { REMOVE_ERROR } from "../../store/ui/ui.events";
import type { ErrorModalProps } from "./Error.model";
import getFormattedText from "../../helper/getFormattedText";

export const ErrorModal = (props: ErrorModalProps) => {
  const { state, dispatch } = useGlobalState();
  const handleClick = () => {
    if (props.isLocal) {
      props.handleClose?.();
      return;
    }
    dispatch({ type: REMOVE_ERROR });
  };
  const { error } = state.ui;
  const isOpened = props.isLocal ? props.isOpened : Boolean(error);
  const message = props.isLocal ? props.message : error?.message;
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
      opened={isOpened!}
      w={"600px"}
      maw={"80vw"}
      closeProps={{ label: "Chiudi" }}
    >
      <Stack>
        <Text fw={"bolder"}> {error?.status}</Text>
        {typeof message === "string" ? (
          <Text
            dangerouslySetInnerHTML={{ __html: getFormattedText(message) }}
          />
        ) : (
          message?.map((msg, i) => (
            <Text
              key={`error${i}${msg}`}
              dangerouslySetInnerHTML={{ __html: getFormattedText(msg) }}
            />
          ))
        )}
        {error?.details && (
          <details>
            <summary>
              <Text component="span">dettagli</Text>
            </summary>
            <Text component="span">{error?.details}</Text>
          </details>
        )}
      </Stack>
    </WikiModal>
  );
};
