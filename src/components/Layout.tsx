import { Sidebar } from './Sidebar'
import './Layout.css'

type LayoutProps = {
  activeMenuId: string
  onMenuSelect: (id: string) => void
  children: React.ReactNode
}

export function Layout({ activeMenuId, onMenuSelect, children }: LayoutProps) {
  return (
    <div className="layout">
      <Sidebar activeMenuId={activeMenuId} onMenuSelect={onMenuSelect} />
      <main className="layout__main">
        {children}
      </main>
    </div>
  )
}
