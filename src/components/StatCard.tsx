import type { StatCard as StatCardType } from '../types'
import './StatCard.css'

type StatCardProps = {
  stat: StatCardType
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <article className={`stat-card stat-card--${stat.accent}`}>
      <div className="stat-card__glow" aria-hidden="true" />
      <p className="stat-card__label">{stat.label}</p>
      <p className="stat-card__value">{stat.value}</p>
      {stat.change && (
        <span className="stat-card__change">{stat.change}</span>
      )}
    </article>
  )
}
