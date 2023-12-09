import "./landingPage.scss"
import DarkModeToggle from "./colour_mode_icon.jsx";
import {Card, CardContent, Link, Typography, useTheme} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code.js";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Introduction() {

  const theme = useTheme()

  return (
    <>
      <div className={"titleContainer"}>
        <Typography variant="titlePrimary">Luke </Typography>
        <Typography variant="titleWhite">Roberts</Typography>
      </div>
      <Typography style={{color: theme.palette.text.primary}}>Front Office Software Engineer Specialising In Energy
        Derivatives @ Dare</Typography>
      <Link href="mailto: contact@ltroberts.co.uk" color={theme.palette.primary.main}>contact@ltroberts.co.uk</Link>
    </>
  )
}

function LinkableIcon({url, Icon, LinkProps, ...props}) {

  return (
    <Link href={url} target="_blank" {...LinkProps}>
      <Icon {...props}/>
    </Link>
  )
}

function Links() {

  const theme = useTheme()

  const sharedStyle = {
    fontSize: "3rem",
    padding: "0.5rem",
  }

  const LinkedInBlue = "#0077B5"
  const GithubBlue = "#4078c0"

  return (
    <div>
      <LinkableIcon sx={{"&:hover": {color: `${LinkedInBlue} !important`}}} url={"https://www.linkedin.com/in/lukeyr/"}
                    Icon={LinkedInIcon} style={{color: theme.palette.text.primary, ...sharedStyle}}/>
      <LinkableIcon sx={{"&:hover": {color: `${GithubBlue} !important`}}} url={"https://github.com/LukeyR/"}
                    Icon={GitHubIcon} style={{color: theme.palette.text.primary, ...sharedStyle}}/>
    </div>
  )

}

function LandingPage() {

  const theme = useTheme()

  return (
    <>
      <DarkModeToggle/>
      <Card>
        <CardContent>
          <Introduction/>
          <Links/>
          <div className={"sourceCodePosiioning"}>
            <LinkableIcon sx={{"&:hover": {color: `${theme.palette.primary.main} !important`}}}
                          url={"https://github.com/LukeyR/PersonalWebsite"} Icon={CodeIcon}
                          style={{color: theme.palette.text.primary}}/>
          </div>
        </CardContent>
      </Card>

    </>
  )
}

export default LandingPage