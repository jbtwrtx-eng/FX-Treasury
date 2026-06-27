export type MenuItem = {
  id: string
  label: string
  icon: string
  path: string
}

export type StatCard = {
  id: string
  label: string
  value: string
  change?: string
  accent: 'gold' | 'emerald' | 'amber'
}
