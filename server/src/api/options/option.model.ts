import { TGroupResponseData } from "../group/group.model";

export type TOptionRequestData = {
  group: number;
  value?: string;
  index?: number;
};

export type TOptionResponseData = {
  id: number;
  group: TGroupResponseData;
  index: number;
  value?: string;
};
