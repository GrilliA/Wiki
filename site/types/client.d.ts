/// <reference types="vite/client" />

declare const feather: {
  replace: () => void;
  icons: Record<string, { toSvg: () => string }>;
};

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
