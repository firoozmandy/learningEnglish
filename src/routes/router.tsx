import { Route, Routes } from 'react-router-dom'
import { appRoutes } from './index'

const AppRouter = () => {
  return (
    <Routes>
      {appRoutes.map((route, idx) => (
        <Route
          key={idx + route.name}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  )
}

export default AppRouter
