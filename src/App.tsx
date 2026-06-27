import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Dashboard } from './components/Dashboard'
import { PlaceholderPage } from './components/PlaceholderPage'
import { MENU_ITEMS } from './constants/menu'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {MENU_ITEMS.map((item) =>
            item.id === 'dashboard' ? (
              <Route key={item.id} index element={<Dashboard />} />
            ) : (
              <Route
                key={item.id}
                path={item.path.slice(1)}
                element={<PlaceholderPage title={item.label} />}
              />
            ),
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
