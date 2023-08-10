import styled from '@emotion/styled'
import { useAppSelector } from '../hooks/useTypedSelector'
import Button from '@mui/material/Button'
import { Alert, Card, CardContent, Skeleton } from '@mui/material'
import { githubUserReceivedData } from '../types/users'

const UserCard = () => {
  const state = useAppSelector((state) => state.githubUser)
  const { user, loading, error }: { user: githubUserReceivedData, loading: boolean, error: string | null } = state

  console.log(user)

  return (
    <>
      <h2>User info:</h2>
      <br />

      {loading ? (
        <Skeleton
          variant='rounded'
          animation='wave'
          sx={{
            minWidth: 275,
            maxWidth: 600,
            minHeight: 200,
            boxShadow: '10px 10px 29px 5px rgba(0,0,0,0.86)',
            margin: '0 auto',
          }}
        />
      ) : (
        ''
      )}

      {Object.keys(user).length !== 0 && error === null ? (
        <Card
          sx={{
            minWidth: 275,
            maxWidth: 600,
            boxShadow: '10px 10px 29px 5px rgba(0,0,0,0.86)',
            margin: '0 auto',
          }}>
          <CardContent>
            <StyledUserCard>
              <div className='user__info-wrapper'>
                <img src={user.avatar_url} alt='User Avatar' />
                <div className='user__info-text'>
                  <p className='user__info-name'>{user.login}</p>
                  <p>Public Repos: {user.public_repos}</p>
                  <p>{user.bio}</p>
                  <Button
                    sx={{ fontSize: '0.9rem', p: 0.5 }}
                    href={user.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    variant='outlined'>
                    Visit profile
                  </Button>
                </div>
              </div>
            </StyledUserCard>
          </CardContent>
        </Card>
      ) : (
        ''
      )}

      {error !== null ? (
        <Alert
          severity='error'
          sx={{ minWidth: 275, maxWidth: 600, margin: '0 auto' }}>
          {error}
        </Alert>
      ) : (
        ''
      )}
    </>
  )
}

export default UserCard

const StyledUserCard = styled.div`
  & .user__info-wrapper {
    display: flex;
  }

  & .user__info-name {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 0;
  }

  & .user__info-text {
    text-align: left;
  }

  & p {
    font-size: 1.2rem;
  }

  & img {
    max-width: 40%;
    height: 100%;
    margin-right: 20px;
  }
`
