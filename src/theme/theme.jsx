import { createTheme} from '@mui/material/styles';
import {
  argbFromHex,
  themeFromSourceColor,
  hexFromArgb
} from "@material/material-color-utilities";
import {useMediaQuery} from "@mui/material";
import {createContext, useCallback, useEffect, useState} from "react";

const BASE_HEX = "#4649DC"

/**
 * @param {boolean} darkMode
 * @returns {{}} palette mappings
 */
function personalPalette(darkMode) {
  const m3ThemeColorsJSON = themeFromSourceColor(argbFromHex(BASE_HEX), []);

  const mode = darkMode ? "dark" : "light"

  console.log(mode, m3ThemeColorsJSON)
  return {
    mode: mode,
    primary: {
      main: hexFromArgb(m3ThemeColorsJSON.schemes[mode].primary),
    },
    secondary: {
      main: hexFromArgb(m3ThemeColorsJSON.schemes[mode].secondary),
    },
    error: {
      main: hexFromArgb(m3ThemeColorsJSON.schemes[mode].error),
    },
    text: {
      primary: hexFromArgb(m3ThemeColorsJSON.schemes[mode].onPrimaryContainer),
      secondary: hexFromArgb(m3ThemeColorsJSON.schemes[mode].onSecondaryContainer),
    },
    background: {
      paper: hexFromArgb(m3ThemeColorsJSON.schemes[mode].primaryContainer),
      default: hexFromArgb(m3ThemeColorsJSON.schemes[mode].background),
    }
  }
}

/**
 * returns the result of MUI's create theme
 * @param {boolean} darkMode
 */
function personalTheme(darkMode) {

  const DEFAULT_TITLE_FONT_SIZE = 64

  const colourOnlyTheme = {
    palette: personalPalette(darkMode),
  };

  const baseTheme = {
    typography: {
      fontFamily: ['Urbanist', '"Times New Roman"', 'Arial', 'sans-serif'].join(","),
      titlePrimary: {
        fontSize: DEFAULT_TITLE_FONT_SIZE,
        color: colourOnlyTheme.palette.primary.main,
      },
      titleWhite: {
        fontSize: DEFAULT_TITLE_FONT_SIZE,
        color: colourOnlyTheme.palette.secondary.main,
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            titlePrimary: 'h1',
            titleWhite: "h1",
          },
        },
      },
    },

  }

  return createTheme({
    ...colourOnlyTheme,
    ...baseTheme,
  }
  )
}

export default function UsePersonalTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [useDarkMode, setUseDarkMode] = useState(prefersDarkMode)
  const [theme, setTheme] = useState(personalTheme(prefersDarkMode))

  useEffect(() => {
    setTheme(personalTheme(useDarkMode))
  }, [useDarkMode])

  const toggleDarkMode = useCallback(() => {
    setUseDarkMode(!useDarkMode)
  }, [useDarkMode, setUseDarkMode])

  const isDarkMode = useDarkMode;

  return {
    theme,
    isDarkMode,
    toggleDarkMode,
  }
}

export const PersonalThemeContext = createContext(null);