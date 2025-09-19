import { PrismaClient } from "@prisma/client";
import cropsOptions from "../../data/crops.json";
import regimeOptions from "../../data/regime.json";
import cropGroupOptions from "../../data/cropGroup.json";
import uomOptions from "../../data/uom.json";
import faseUnoOptions from "../../data/faseUno.json";
import faseDueOptions from "../../data/faseDue.json";
import treatmentTypeOptions from "../../data/treatmentType.json";
import products from "../../data/product.json";
import { createGroup } from "../api/group/group.service";

export const seedOptions = async (prisma: PrismaClient) => {
  const simpleChoiceGroup = await createGroup({
    name: "easyChoice",
    displayName: "Selezione semplice",
    description: "Una lista di selezione",
    schema: simpleChoiceSchema,
  });
  const normalizedCrops = cropsOptions.map((crop) => ({
    value: crop,
    groupId: simpleChoiceGroup.id,
  }));

  const normalizedUnitOfMeasureOptions = uomOptions.map((uom) => ({
    value: uom,
    groupId: simpleChoiceGroup.id,
  }));

  const normalizedregimeOptions = regimeOptions.map((regime) => ({
    value: regime,
    groupId: simpleChoiceGroup.id,
  }));
  const normalizedCropGroupOptions = cropGroupOptions.map((group) => ({
    value: group,
    groupId: simpleChoiceGroup.id,
  }));
  const normalizedFaseUnoOptions = faseUnoOptions.map((phase) => ({
    value: phase,
    groupId: simpleChoiceGroup.id,
  }));
  const normalizedFaseDueOptions = faseDueOptions.map((phase) => ({
    value: phase,
    groupId: simpleChoiceGroup.id,
  }));
  const normalizedTreatmentTypeOptions = treatmentTypeOptions.map((type) => ({
    value: type,
    groupId: simpleChoiceGroup.id,
  }));

  const allSimpleChoices = [
    ...normalizedCrops,
    ...normalizedUnitOfMeasureOptions,
    ...normalizedregimeOptions,
    ...normalizedCropGroupOptions,
    ...normalizedFaseUnoOptions,
    ...normalizedFaseDueOptions,
    ...normalizedTreatmentTypeOptions,
  ];
  await prisma.option.createMany({
    data: allSimpleChoices,
  });

  const productGroup = await createGroup({
    name: "products",
    displayName: "Prodotti fitosanitari",
    description: "Una lista di prodotti fitosanitari",
    schema: productSchema,
  });
  const normalizedProducts = (products as Array<any>).map((prod) => ({
    value: prod,
    groupId: productGroup.id,
  }));
  await prisma.option.createMany({
    data: normalizedProducts,
  });
};

const simpleChoiceSchema = [
  {
    name: "value",
    label: "valore",
    type: "string",
    isRequired: true,
  },
  {
    name: "label",
    label: "nome",
    type: "string",
    isRequired: true,
  },
  {
    name: "group",
    label: "gruppo",
    type: "string",
    isRequired: true,
  },
];

const productSchema = [
  { name: "num_registrazione", type: "string", label: "numero di registrazione", isRequired: true },
  { name: "denominazione_prodotto", type: "string", label: "denominazione prodotto", isRequired: true },
  { name: "ragione_sociale", type: "string", label: "ragione sociale", isRequired: true },
  { name: "indirizzo_sede_legale", type: "string", label: "indirizzo sede legale", isRequired: true },
  { name: "cap_sede_legale", type: "string", label: "CAP sede legale", isRequired: true },
  { name: "comune_sede_legale", type: "string", label: "comune sede legale", isRequired: true },
  { name: "provincia_sede_legale", type: "string", label: "provincia sede legale", isRequired: true },
  { name: "indirizzo_sede_amministrativa", type: "string", label: "indirizzo sede amministrativa", isRequired: true },
  { name: "cap_sede_amministrativa", type: "string", label: "CAP sede amministrativa", isRequired: true },
  { name: "comune_sede_amministrativa", type: "string", label: "comune sede amministrativa", isRequired: true },
  { name: "provincia_sede_amministrativa", type: "string", label: "provincia sede amministrativa", isRequired: true },
  { name: "data_registrazione", type: "date", label: "data registrazione", isRequired: true },
  { name: "data_scadenza_autorizzazione", type: "date", label: "data scadenza autorizzazione", isRequired: true },
  { name: "indicazioni_di_pericolo", type: "string", label: "indicazioni di pericolo", isRequired: true },
  { name: "attivita", type: "string", label: "attività", isRequired: true },
  { name: "codice_formulazione", type: "string", label: "codice formulazione", isRequired: true },
  { name: "descrizione_formulazione", type: "string", label: "descrizione formulazione", isRequired: true },
  { name: "sostanze_attive", type: "string", label: "sostanze attive", isRequired: true },
  {
    name: "contenuto_per_100g_di_prodotto",
    type: "string",
    label: "contenuto per 100g di prodotto",
    isRequired: true,
  },
  { name: "importazione_parallela", type: "string", label: "importazione parallela", isRequired: true },
  { name: "PFnPO", type: "string", label: "PFnPO", isRequired: true },
  { name: "PFnPE", type: "string", label: "PFnPE", isRequired: true },
  { name: "stato_amministrativo", type: "string", label: "stato amministrativo", isRequired: true },
  { name: "motivo_della revoca", type: "string", label: "motivo della revoca", isRequired: true },
  { name: "data_decreto_revoca", type: "date", label: "data decreto revoca", isRequired: true },
  { name: "data_decorrenza_revoca", type: "date", label: "data decorrenza revoca", isRequired: true },
  { name: "sostanze_attive_it", type: "string", label: "sostanze attive (IT)", isRequired: true },
  { name: "sostanze_attive_en", type: "string", label: "sostanze attive (EN)", isRequired: true },
];
