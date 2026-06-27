import { DASHBOARD_STATS } from '../constants/menu'
import { StatCard } from './StatCard'
import './Dashboard.css'

export function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <div>
          <p className="dashboard__eyebrow">Overview</p>
          <h1 className="dashboard__title">ダッシュボード</h1>
        </div>
        <p className="dashboard__date">2026年6月27日</p>
      </header>

      <section className="dashboard__stats">
        {DASHBOARD_STATS.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </section>

      <section className="dashboard__panel">
        <h2 className="dashboard__panel-title">最近のアクティビティ</h2>
        <p className="dashboard__panel-placeholder">
          データ連携後に取引履歴や未処理項目がここに表示されます。
        </p>
      </section>
    </div>
  )
}
