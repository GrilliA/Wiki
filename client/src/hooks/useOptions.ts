import useGlobalState from "./useGlobalState";

export const useOptions = () => {
  const { state } = useGlobalState();
  const options = state.page.options ?? [];
  const getOptions = (group: string) => {
    const allOptions = options
      .filter((option) => option.value.group === group)
      .map((opt: any) => ({
        label: opt.value.label,
        value: opt.id.toString(),
      }));
    return allOptions;
  };
  const findOption = (value: string) => {
    const currentOption = options.find((opt) => opt.id.toString() === value);
    return currentOption;
  };
  return { getOptions, findOption };
};
