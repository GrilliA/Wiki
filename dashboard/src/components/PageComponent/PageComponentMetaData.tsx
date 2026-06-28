import { appName } from "@/helper/constants";
import type { TPageComponentMetaDataProps } from "./PageComponent.model";

export const PageComponentMetaData = (props: TPageComponentMetaDataProps) => {
  return (
    <>
      <title>{`${appName} - ${props.title}`}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
};
