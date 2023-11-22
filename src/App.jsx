import { Typography, AppBar, Card, CardActions, CardMedia, CssBaseline, Grid, ToolBar, Container } from "@mui/material"
import { PhotoCamera } from "@mui/icons-material"

const App = () => {
  return (
        <>
        <CssBaseline />
        <AppBar position="relative">
            <ToolBar>
                <PhotoCamera />
                <Typography variant="h6">Photo Album</Typography>
            </ToolBar>
        </AppBar>

    </>
  )
  }


export default App