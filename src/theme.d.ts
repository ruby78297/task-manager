// theme.d.ts
import { PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    customDark?: string;
  }
}
