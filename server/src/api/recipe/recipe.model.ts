import { TCommentResponseData } from "../comment/comment.model";
import { TOptionResponseData } from "../options/option.model";
import { TProductResponseData } from "../product/product.model";

export type TRecipeRequestData = {
  date: string;
  hectares: number;
  clientNote: string;
  internalNote: string;
  typeOfTreatment: number;
  treatmentPhase: number;
  crop: number;
};

export type TRecipeResponseData = {
  id: number;
  date: string;
  hectares: number;
  clientNote: string;
  internalNote: string;
  typeOfTreatment?: TOptionResponseData;
  treatmentPhase?: TOptionResponseData;
  comments: Array<TCommentResponseData>;
  products?: Array<TProductResponseData>;
};
