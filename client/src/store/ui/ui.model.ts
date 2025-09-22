export type UiModel = {
  modals: {
    [x: string]: {
      show: boolean;
      details?: Record<string, unknown> | null;
    };
  };
  loaders: Array<{ [x: string]: boolean }>;
  isLoading: boolean;
  error: {
    status: number;
    message: Array<string>;
    details?: string;
  } | null;
};
