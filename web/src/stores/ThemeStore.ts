import create, {State} from "zustand";


interface ThemeStoreI extends State{
    theme: string
    dark: () => void
    light: () => void
}

export const useThemeStore = create<ThemeStoreI>((set) => {
    return {
        theme: localStorage.getItem('theme') || 'dark',
        dark: () => {
            localStorage.setItem('theme', 'dark')

            set({theme: 'dark'})
        },
        light: () => {
            localStorage.setItem('theme', 'light');

            set({theme: 'light'})
        }
    }
})