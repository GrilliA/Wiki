import { getOptionInput, getOptionResponseData } from "../options/option.util";
import { TGroupRequestData, TGroupResponseData, TSchemaData } from "./group.model";

export const getGroupRequestMapper = (group: TGroupRequestData) => {
  const schema = JSON.parse(group.schema ?? "[]");
  return {
    name: group.name,
    displayName: group.displayName,
    description: group.description,
    schema: schema.map(getSchemaData),
  };
};

export const getGroupReponseData = (group: any): TGroupResponseData => {
  if (!group) {
    return null;
  }
  return {
    id: group.id,
    name: group.name,
    displayName: group.displayName,
    description: group.description,
    schema: group.schema?.map(getSchemaData),
    options: group.options?.map(getOptionResponseData),
  };
};

export const getSchemaData = (schema: any): TSchemaData => {
  if (!schema) {
    return null;
  }
  return {
    name: schema.name,
    label: schema.label,
    type: schema.type,
    isRequired: schema.isRequired,
  };
};
