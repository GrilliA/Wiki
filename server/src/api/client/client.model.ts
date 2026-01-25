import { Comune, Province, Region, User } from "@prisma/client";
import { GemmaData } from "../../helper/typeUtil";
import { TOptionResponseData } from "../options/option.model";

export type TClientRequestData = {
  name: string;
  surname: string;
  email: string;
  phoneNumber?: string;
  addressNumber?: string;
  address?: string;
  cap?: string;
  vatNumber?: string;
  companyName?: string;
  comune?: number;
  province?: number;
  region?: number;
  facility?: number;
  representative?: string;
  parent?: number;
};

export type TClientResponseData = {
  id: number;
  surname: string;
  name: string;
  email: string;
  phoneNumber?: string;
  addressNumber?: string;
  address?: string;
  cap?: string;
  vatNumber?: string;
  companyName?: string;
  comune?: GemmaData<Comune>;
  province: GemmaData<Province>;
  region: GemmaData<Region>;
  facility?: TOptionResponseData;
  representative?: GemmaData<User>;
  parent: TClientResponseData | null;
  children: Array<TClientResponseData>;
};
