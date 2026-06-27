import { MENU_ITEMS } from '../constants/menu'
import './Sidebar.css'

type SidebarProps = {
  activeMenuId: string
  onMenuSelect: (id: string) => void
}

export function Sidebar({ activeMenuId, onMenuSelect }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__logo">FX</div>
        <div className="sidebar__brand-text">
          <span className="sidebar__brand-name">FX Treasury</span>
          <span className="sidebar__brand-sub">資金管理システム</span>
        </div>
      </div>

      <nav className="sidebar__nav">
        <ul className="sidebar__menu">
          {MENU_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`sidebar__item ${activeMenuId === item.id ? 'sidebar__item--active' : ''}`}
                onClick={() => onMenuSelect(item.id)}
              >
                <span className="sidebar__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="sidebar__label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__footer">
        <span className="sidebar__version">v0.0.1</span>
      </div>
    </aside>
  )
}
