export const toFormData = (obj: object) => {
  const result = new FormData();

  for (var key in obj) {
    result.append(key, obj[key]);
  }

  return result;
};
