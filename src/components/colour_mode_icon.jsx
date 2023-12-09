import Paper from "@mui/material/Paper";
import {ReactComponent as DarkModeIcon} from "../assets/light_mode_black_24dp.svg";
import {ReactComponent as LightModeIcon} from "../assets/dark_mode_black_24dp.svg";
import {useContext, useEffect, useState} from "react";
import "./colour_mode_icon.scss";
import {useTheme} from "@mui/material";
import {PersonalThemeContext} from "../theme/theme.jsx";

function Icon({darkMode, ...props}) {

  const theme = useTheme()

  return (
    <>
      {darkMode ? <DarkModeIcon {...props} fill={theme.palette.primary.main}/> : <LightModeIcon {...props} fill={theme.palette.primary.main}/>}
    </>
  )
}

export default function DarkModeToggle() {

  const {isDarkMode, toggleDarkMode} = useContext(PersonalThemeContext)

  let defaultDarkMode;
  useEffect(() => {
    defaultDarkMode = isDarkMode
  }, [])

  const [darkModeIcon, setDarkModeIcon] = useState(<Icon darkMode={true} className={isDarkMode ? "start_visible" : "start_hidden"}/>)
  const [lightModeIcon, setLightModeIcon] = useState(<Icon darkMode={false} className={isDarkMode ? "start_hidden" : "start_visible"}/>)


  const handleClick = async () => {

    if (isDarkMode) { // Switching from dark to light mode
      setDarkModeIcon(<Icon darkMode={true} className={defaultDarkMode ? "hide_default" : "hide_secondary"}/>)
      setLightModeIcon(<Icon darkMode={false} className={defaultDarkMode ? "show_secondary" : "show_default"}/>)
    } else {
      setDarkModeIcon(<Icon darkMode={true} className={defaultDarkMode ? "show_default" : "show_secondary"}/>)
      setLightModeIcon(<Icon darkMode={false} className={defaultDarkMode ? "hide_secondary" : "hide_default"}/>)
    }

    toggleDarkMode()
  }

  return (
    <Paper className={"toggleColourModeButtonPaper"} onClick={() => handleClick()}>
        {darkModeIcon}
        {lightModeIcon}
    </Paper>
  )
}