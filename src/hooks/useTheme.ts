export type ThemeMode = 'light' | 'dark' | 'salesforce' | 'midnight' | 'sunset';

export interface ThemeColors {
  background: string;
  foreground: string;
  primary: string;
  'primary-foreground': string;
  secondary: string;
  'secondary-foreground': string;
  accent: string;
  'accent-foreground': string;
  muted: string;
  'muted-foreground': string;
  card: string;
  'card-foreground': string;
  border: string;
  ring: string;
  success: string;
  warning: string;
  error: string;
}

export const themes: Record<ThemeMode, Partial<ThemeColors>> = {
  light: {
    background: '0 0% 100%',
    foreground: '222.2 84% 4.9%',
    primary: '221.2 83.2% 53.3%',
    'primary-foreground': '210 40% 98%',
    secondary: '210 40% 96.1%',
    'secondary-foreground': '222.2 47.4% 11.2%',
    accent: '210 40% 96.1%',
    'accent-foreground': '222.2 47.4% 11.2%',
    muted: '210 40% 96.1%',
    'muted-foreground': '215.4 16.3% 46.9%',
    card: '0 0% 100%',
    'card-foreground': '222.2 84% 4.9%',
    border: '214.3 31.8% 91.4%',
    ring: '221.2 83.2% 53.3%',
    success: '142 76% 36%',
    warning: '38 92% 50%',
    error: '0 84% 60%',
  },
  dark: {
    background: '222.2 84% 4.9%',
    foreground: '210 40% 98%',
    primary: '217.2 91.2% 59.8%',
    'primary-foreground': '222.2 47.4% 11.2%',
    secondary: '217.2 32.6% 17.5%',
    'secondary-foreground': '210 40% 98%',
    accent: '217.2 32.6% 17.5%',
    'accent-foreground': '210 40% 98%',
    muted: '217.2 32.6% 17.5%',
    'muted-foreground': '215 20.2% 65.1%',
    card: '222.2 84% 4.9%',
    'card-foreground': '210 40% 98%',
    border: '217.2 32.6% 17.5%',
    ring: '224.3 76.3% 48%',
    success: '142 76% 46%',
    warning: '38 92% 50%',
    error: '0 84% 60%',
  },
  salesforce: {
    background: '0 0% 100%',
    foreground: '222.2 84% 4.9%',
    primary: '201 100% 44%', // Salesforce blue
    'primary-foreground': '210 40% 98%',
    secondary: '210 40% 96.1%',
    'secondary-foreground': '222.2 47.4% 11.2%',
    accent: '270 50% 70%', // Salesforce purple accent
    'accent-foreground': '210 40% 98%',
    muted: '210 40% 96.1%',
    'muted-foreground': '215.4 16.3% 46.9%',
    card: '0 0% 100%',
    'card-foreground': '222.2 84% 4.9%',
    border: '201 100% 90%',
    ring: '201 100% 44%',
    success: '142 76% 36%',
    warning: '38 92% 50%',
    error: '0 84% 60%',
  },
  midnight: {
    background: '240 30% 8%',
    foreground: '0 0% 98%',
    primary: '265 89% 78%', // Purple
    'primary-foreground': '240 30% 8%',
    secondary: '240 20% 15%',
    'secondary-foreground': '0 0% 98%',
    accent: '190 90% 50%', // Cyan
    'accent-foreground': '240 30% 8%',
    muted: '240 20% 15%',
    'muted-foreground': '240 10% 60%',
    card: '240 20% 12%',
    'card-foreground': '0 0% 98%',
    border: '240 20% 20%',
    ring: '265 89% 78%',
    success: '160 84% 60%',
    warning: '40 100% 70%',
    error: '0 95% 70%',
  },
  sunset: {
    background: '25 100% 98%',
    foreground: '20 30% 20%',
    primary: '15 90% 65%', // Coral
    'primary-foreground': '0 0% 100%',
    secondary: '30 80% 90%',
    'secondary-foreground': '20 30% 20%',
    accent: '45 100% 70%', // Gold
    'accent-foreground': '20 30% 20%',
    muted: '30 50% 90%',
    'muted-foreground': '20 20% 40%',
    card: '0 0% 100%',
    'card-foreground': '20 30% 20%',
    border: '15 50% 85%',
    ring: '15 90% 65%',
    success: '120 50% 50%',
    warning: '40 90% 60%',
    error: '0 80% 65%',
  },
};