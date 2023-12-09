import {createContext, useEffect, useState} from 'react'
import React from "react"
import './App.scss'
import WebFont from "webfontloader";
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import LandingPage from "./components/landingPage.jsx";
import UsePersonalTheme, {PersonalThemeContext} from "./theme/theme.jsx";


function App() {
  const {
    theme,
    isDarkMode,
    toggleDarkMode
  } = UsePersonalTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <PersonalThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        <LandingPage/>
      </PersonalThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App
