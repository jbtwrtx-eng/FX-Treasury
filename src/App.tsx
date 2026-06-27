import { useState } from 'react'
import { Layout } from './components/Layout'
import { Dashboard } from './components/Dashboard'
import { PlaceholderPage } from './components/PlaceholderPage'
import { MENU_ITEMS } from './constants/menu'

function App() {
  const [activeMenuId, setActiveMenuId] = useState('dashboard')

  const activeMenu = MENU_ITEMS.find((item) => item.id === activeMenuId)

  return (
    <Layout
      activeMenuId={activeMenuId}
      onMenuSelect={setActiveMenuId}
    >
      {activeMenuId === 'dashboard' ? (
        <Dashboard />
      ) : (
        <PlaceholderPage title={activeMenu?.label ?? ''} />
      )}
    </Layout>
  )
}

export default App
