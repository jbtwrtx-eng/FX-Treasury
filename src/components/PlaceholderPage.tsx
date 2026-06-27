import './PlaceholderPage.css'

type PlaceholderPageProps = {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="placeholder">
      <header className="placeholder__header">
        <p className="placeholder__eyebrow">Coming Soon</p>
        <h1 className="placeholder__title">{title}</h1>
      </header>
      <div className="placeholder__body">
        <p>この画面は今後実装予定です。</p>
      </div>
    </div>
  )
}
