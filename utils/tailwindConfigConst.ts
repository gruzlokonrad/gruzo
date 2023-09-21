import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@/tailwind.config';
import { ScreensConfig } from 'tailwindcss/types/config';

export const tailwindFullConfig = resolveConfig(tailwindConfig);
export const breakpoints: ScreensConfig = tailwindFullConfig.theme?.screens || {}