import {
  ValidationError
} from "./chunk-3IEESCWK.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/mantine-form-yup-resolver/dist/esm/index.mjs
function yupResolver(schema) {
  return (values) => {
    try {
      schema.validateSync(values, { abortEarly: false });
      return {};
    } catch (yupError) {
      const results = {};
      if (yupError instanceof ValidationError) {
        yupError.inner.forEach((error) => {
          results[error.path.replaceAll("[", ".").replaceAll("]", "")] = error.message;
        });
      }
      return results;
    }
  };
}
export {
  yupResolver
};
//# sourceMappingURL=mantine-form-yup-resolver.js.map
