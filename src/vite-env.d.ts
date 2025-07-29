/// <reference types="vite/client" />

declare module 'react' {
  export * from 'react';
}

declare module 'react/jsx-runtime' {
  export * from 'react/jsx-runtime';
}

declare module '@mui/icons-material/*' {
  import { SvgIconProps } from '@mui/material/SvgIcon';
  const Icon: React.FC<SvgIconProps>;
  export default Icon;
}
