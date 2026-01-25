import { TOptionResponseData } from "../options/option.model";

export type TGroupRequestData = {
  name: string;
  displayName: string;
  description: string;
  schema: string;
};

export type TGroupResponseData = {
  id: number;
  name: string;
  displayName: string;
  description: string;
  schema: Array<TSchemaData>;
  options?: Array<TOptionResponseData>;
};

export type TSchemaData = {
  name: string;
  label: string;
  type: string;
  isRequired: boolean;
};
