import { Group, Stack, Text } from "@mantine/core";
import { WikiModal } from "../Modal";
import Icon from "../Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { clearApiErrors } from "@/state/modalSlice/apiErrorSlice/apiErrorSlice";
import { getAppMode } from "@/helper/getAppMode";
import { EAppMode } from "@/helper/constants";
import type { TRootState } from "@/state/store";

export const ErrorModal = () => {
  const dispatch = useDispatch();
  const apiErrors = useSelector((state: TRootState) => state.apiError);
  const handleClose = () => {
    dispatch(clearApiErrors());
  };

  const appMode = getAppMode();

  if (appMode === EAppMode.Production || !apiErrors.length) {
    return null;
  }

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
      onClose={handleClose}
      opened={true}
      w={"600px"}
      maw={"80vw"}
      closeProps={{ label: "Chiudi" }}
    >
      <Stack>
        {apiErrors?.map((msg, i) => (
          <Stack>
            <Text fw={"bold"}>{msg.status}</Text>
            <Text
              key={`error${i}${msg}`}
              dangerouslySetInnerHTML={{ __html: msg.message }}
            />
          </Stack>
        ))}
      </Stack>
    </WikiModal>
  );
};
