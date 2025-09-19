import { TOptionResponseData, TOptionRequestData } from "./option.model";
import * as Yup from "yup";
import { getConnectById } from "../../helper/getConnectById";
import { getGroupReponseData } from "../group/group.mapper";
import { TSchemaData } from "../group/group.model";
import { getRequiredInputMessage } from "../../helper/getInputMessage";

export const getOptionValidation = (schema: Array<TSchemaData>) => {
  return Yup.object({
    ...(schema?.reduce((acc, curr) => {
      return {
        ...acc,
        [curr.name]: Yup?.[curr.type]?.()[curr.isRequired ? "required" : "optional"](
          getRequiredInputMessage(curr.label),
        ),
      };
    }, {}) as Record<string, any>),
  });
};
// export const optionValidation = object({
//   body: object<TOptionRequestData>({
//     group: string().required("Il Gruppo e' obbligatorio!").trim().lowercase("Gruppo deve essere minuscolo!").strict(),
//     label: string().required("il Nome e' obbligatorio!").trim().lowercase("Nome deve essere minuscolo!").strict(),
//     value: string().trim().lowercase("Valore deve essere minuscolo!").strict(),
//     description: string().trim(),
//     externalId: string().trim().lowercase("Identificativo externo deve essere minuscolo!").strict(),
//     index: number().strict(),
//   }),
// });
export const getOptionResponseData = (data: any): TOptionResponseData => {
  if (!data) {
    return null;
  }
  return {
    id: data.id,
    index: data.index,
    value: data.value,
    group: getGroupReponseData(data.group),
  };
};

export const getOptionInput = (data?: any): TOptionRequestData => {
  const { group, ...value } = data;
  return {
    index: data?.index,
    value: JSON.stringify(value ?? {}),
    group: getConnectById(group),
  };
};

export const groupAllOptionsData = (options: TOptionResponseData[]) => {
  // const data = options.reduce<Record<string, Array<TOptionResponseData>>>((acc, curr) => {
  //   const key = curr.group;
  //   const currentGroupValues = acc[curr.group] ?? [];
  //   const values = [...currentGroupValues, curr];
  //   return {
  //     ...acc,
  //     [key]: sortOptionsDataByIndex(values),
  //   };
  // }, {});
  // return data;
  return {};
};

export const groupOptionsDataByGroup = (options: TOptionResponseData[][]) => {
  // const data = options?.reduce<Record<string, Array<TOptionResponseData>>>((acc, option) => {
  //   const firstOption = option?.[0];
  //   const key = firstOption?.group;
  //   if (!key) return acc;
  //   return {
  //     ...acc,
  //     [key]: option,
  //   };
  // }, {});
  // return data;
  return {};
};

export const sortOptionsDataByIndex = (options: TOptionResponseData[]) => {
  const optionsCopy = [...options];
  const data = optionsCopy.sort((a, b) => {
    const result = a.index - b.index;
    return result;
  });
  return data;
};
