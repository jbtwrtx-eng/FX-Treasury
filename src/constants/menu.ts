import type { MenuItem, StatCard } from '../types'

export const MENU_ITEMS: MenuItem[] = [
  { id: 'dashboard', label: 'ダッシュボード', icon: '◈', path: '/' },
  { id: 'transfer', label: '資金移動', icon: '⇄', path: '/transfer' },
  { id: 'titan-fx', label: 'TITAN FX', icon: '◉', path: '/titan-fx' },
  { id: 'trust-wallet', label: 'Trust Wallet', icon: '◎', path: '/trust-wallet' },
  { id: 'gmo-coin', label: 'GMOコイン', icon: '◆', path: '/gmo-coin' },
  { id: 'sbi-vc', label: 'SBI VCトレード', icon: '◇', path: '/sbi-vc' },
  { id: 'bitbank', label: 'bitbank', icon: '▣', path: '/bitbank' },
  { id: 'rakuten', label: '楽天銀行', icon: '▤', path: '/rakuten' },
  { id: 'yucho', label: 'ゆうちょ銀行', icon: '▥', path: '/yucho' },
  { id: 'txid', label: 'TXID管理', icon: '⛓', path: '/txid' },
  { id: 'documents', label: '証憑管理', icon: '▦', path: '/documents' },
  { id: 'tax', label: '税金', icon: '▧', path: '/tax' },
  { id: 'settings', label: '設定', icon: '⚙', path: '/settings' },
]

export const DASHBOARD_STATS: StatCard[] = [
  {
    id: 'monthly-profit',
    label: '今月利益',
    value: '¥1,284,500',
    change: '+12.4%',
    accent: 'gold',
  },
  {
    id: 'annual-profit',
    label: '年間利益',
    value: '¥14,892,300',
    change: '+8.7%',
    accent: 'emerald',
  },
  {
    id: 'pending-count',
    label: '未処理件数',
    value: '7',
    change: '要対応',
    accent: 'amber',
  },
]
