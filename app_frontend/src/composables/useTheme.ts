import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')
const THEME_KEY = 'leonfisio-theme'

// Cargar tema guardado al iniciar
const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null
if (savedTheme === 'dark' || savedTheme === 'light') {
  theme.value = savedTheme
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  theme.value = 'dark'
}

// Aplicar tema al documento
const applyTheme = (newTheme: Theme) => {
  document.documentElement.setAttribute('data-theme', newTheme)
}

// Aplicar tema inicial
applyTheme(theme.value)

// Observar cambios en el tema
watch(theme, (newTheme) => {
  applyTheme(newTheme)
  localStorage.setItem(THEME_KEY, newTheme)
})

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return {
    theme,
    toggleTheme,
    isDark: () => theme.value === 'dark'
  }
}
