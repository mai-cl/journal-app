import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { AuthRouter } from '../routers/AuthRouter'
import { JournalScreen } from '../components/journal/JournalScreen'
import { useEffect, useState } from 'react'
import { firebase } from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'
import { startLoadingNotes } from '../actions/notes'

export const AppRouter = () => {
  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)

        dispatch(startLoadingNotes(user.uid))
      } else {
        setIsLoggedIn(false)
      }

      setChecking(false)
    })
  }, [dispatch, setChecking, setIsLoggedIn])

  if (checking) {
    return <h1>Espere...</h1>
  }

  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route path={'/auth'}>
            <PublicRoute isLoggedIn={isLoggedIn}>
              <AuthRouter />
            </PublicRoute>
          </Route>
          <Route path={'/'} exact>
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <JournalScreen />
            </PrivateRoute>
          </Route>
          <Redirect to={'/auth/login'} /> */}

          <PublicRoute
            path={'/auth'}
            isLoggedIn={isLoggedIn}
            component={AuthRouter}
          />

          <PrivateRoute
            path={'/'}
            isLoggedIn={isLoggedIn}
            exact
            component={JournalScreen}
          />

          <Redirect to={'/auth/login'} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
