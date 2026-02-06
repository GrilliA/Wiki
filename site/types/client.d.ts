// Type declarations for client-side scripts

// Feather icons library (from icons.js)
declare const feather: {
  replace: () => void;
  icons: Record<string, { toSvg: () => string }>;
};

// Webpack Hot Module Replacement API
interface NodeModule {
  hot?: {
    accept: (dependencies?: string | string[], callback?: () => void) => void;
    decline: (dependencies?: string | string[]) => void;
    dispose: (callback: (data: Record<string, unknown>) => void) => void;
    addDisposeHandler: (callback: (data: Record<string, unknown>) => void) => void;
    removeDisposeHandler: (callback: (data: Record<string, unknown>) => void) => void;
  };
}

// SCSS module imports
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
