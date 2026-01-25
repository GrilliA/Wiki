import { Response, Request } from "express";
import { createClient, deleteClient, getallClients, getClientById, updateClient } from "./client.service";
import { getClientReponseData, getClientRequestMapper } from "./client.mapper";

export const selectClientController = async (req: Request, res: Response) => {
  const clientId = Number(req.params.id);
  const client = await getClientById(clientId);
  req.session.user = {
    ...req.session.user,
    clientId,
  };
  res.status(200).json({
    data: client,
    message: "select client succefully",
  });
};

export const deselectClientController = async (req: Request, res: Response) => {
  const { clientId, ...user } = req.session.user;
  req.session.user = user;
  res.status(200).json({
    message: "deselect client succefully",
  });
};

export const getClientController = async (req: Request, res: Response) => {
  const client = await getClientById(+req.params.id);
  res.status(200).json({
    data: getClientReponseData(client),
    message: "got client succefully",
  });
};

export const getAllClientController = async (req: Request, res: Response) => {
  const clients = await getallClients();
  res.status(200).json({
    data: clients.map(getClientReponseData),
    message: "got all client succefully",
  });
};

export const createClientController = async (req: Request, res: Response) => {
  const data = getClientRequestMapper(req.body);
  const client = await createClient(data);
  res.status(200).json({
    data: client,
    message: "Create client succefully",
  });
};

export const updateClientController = async (req: Request, res: Response) => {
  const { body } = req;
  const data = getClientRequestMapper(body);
  const id = +req.params.id;
  const location = await updateClient(id, data);
  res.status(200).json({
    data: location,
    message: "updated client succefully",
  });
};

export const deleteClientController = async (req: Request, res: Response) => {
  const clientId = +req.params.id;
  if (req.session.user.clientId === clientId) {
    res.status(400).json({
      message: "Non puoi eliminare il cliente selezionato",
    });
    return;
  }
  await deleteClient(clientId);
  const allClients = await getallClients();
  res.status(200).json({
    data: allClients.map(getClientReponseData),
    message: "deleted client succefully",
  });
};
