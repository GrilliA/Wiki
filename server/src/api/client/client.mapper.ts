import { getConnectById } from "../../helper/getConnectById";
import { Prisma } from "@prisma/client";
import { TClientRequestData, TClientResponseData } from "./client.model";
import { getOptionResponseData } from "../options/option.util";

export const getClientRequestMapper = (client: TClientRequestData): Prisma.ClientCreateInput => {
  return {
    name: client.name,
    surname: client.surname,
    email: client.email,
    phoneNumber: client.phoneNumber,
    addressNumber: client.addressNumber,
    address: client.address,
    cap: client.cap,
    vatNumber: client.vatNumber,
    companyName: client.companyName,
    comune: getConnectById(client.comune),
    province: getConnectById(client.province),
    region: getConnectById(client.region),
    facility: getConnectById(client.facility),
    representative: getConnectById(client.representative),
    parent: getConnectById(client.parent),
  };
};

export const getClientReponseData = (client: any): TClientResponseData => {
  if (!client) {
    return null;
  }
  return {
    id: client?.id,
    surname: client?.surname,
    name: client?.name,
    email: client?.email,
    phoneNumber: client?.phoneNumber,
    addressNumber: client?.addressNumber,
    address: client?.address,
    cap: client?.cap,
    vatNumber: client?.vatNumber,
    companyName: client?.companyName,
    comune: client?.comune,
    province: client?.province,
    region: client?.region,
    facility: getOptionResponseData(client?.facility),
    representative: client?.representative,
    parent: getClientReponseData(client?.parent),
    children: client?.children?.map(getClientReponseData) || [],
  };
};
