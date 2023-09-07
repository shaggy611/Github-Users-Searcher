import TextField from '@mui/material/TextField/TextField'
import { useState } from 'react'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useActions } from './../hooks/useActions'

const SearchBlock: React.FC = () => {
  const [userName, setUserName] = useState('')
  const { fetchGithubUsers } = useActions()

  return (
    <>
      <Box pt={1} pb={1}>
        <Stack
          spacing={2}
          direction='row'
          justifyContent='center'
          alignItems='center'
          sx={{ minHeight: '100px' }}>
          <TextField
            onChange={(event) => setUserName(event.target.value)}
            id='outlined-basic'
            label='Type username'
            variant='outlined'
            sx={{ minWidth: '30%' }}
            value={userName}
          />

          <Button
            variant='contained'
            sx={{ paddingLeft: '30px', paddingRight: '30px', height: '100%' }}
            onClick={() => {
              fetchGithubUsers(userName)
            }}>
            SEARCH
          </Button>
        </Stack>
      </Box>
      <Divider />
    </>
  )
}

export default SearchBlock
