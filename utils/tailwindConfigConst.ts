import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@/tailwind.config';

type TailwindConfig = typeof tailwindConfig & {
  theme: {
    screens: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
  };
};


export const tailwindFullConfig = resolveConfig(tailwindConfig as TailwindConfig);
export const breakpoints = tailwindFullConfig.theme?.screens || {}

