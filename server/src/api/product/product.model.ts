export type TProductRequestData = {
  isFertilizer: boolean;
  name: string;
  fertilizerName: string;
  quantity: number;
  unit: string;
  recipe: number;
};

export type TProductResponseData = {
  id: number;
  isFertilizer: boolean;
  name: string;
  fertilizerName: string;
  quantity: number;
  unit: string;
};
