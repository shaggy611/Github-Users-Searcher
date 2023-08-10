import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import { CssBaseline, Typography } from '@mui/material'
import SearchBlock from './components/SearchBlock'
import UserCard from './components/UserCard'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Typography
          sx={{ fontSize: '1.5rem' }}
          p={0}
          align='center'
          gutterBottom>
          GitHub User Search
        </Typography>
        <SearchBlock />

        <UserCard />
      </ThemeProvider>
    </>
  )
}

export default App
