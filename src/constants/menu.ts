import type { MenuItem, StatCard } from '../types'

export const MENU_ITEMS: MenuItem[] = [
  { id: 'dashboard', label: 'ダッシュボード', icon: '◈' },
  { id: 'transfer', label: '資金移動', icon: '⇄' },
  { id: 'titan-fx', label: 'TITAN FX', icon: '◉' },
  { id: 'trust-wallet', label: 'Trust Wallet', icon: '◎' },
  { id: 'gmo-coin', label: 'GMOコイン', icon: '◆' },
  { id: 'sbi-vc', label: 'SBI VCトレード', icon: '◇' },
  { id: 'bitbank', label: 'bitbank', icon: '▣' },
  { id: 'rakuten', label: '楽天銀行', icon: '▤' },
  { id: 'yucho', label: 'ゆうちょ銀行', icon: '▥' },
  { id: 'txid', label: 'TXID管理', icon: '⛓' },
  { id: 'documents', label: '証憑管理', icon: '▦' },
  { id: 'tax', label: '税金', icon: '▧' },
  { id: 'settings', label: '設定', icon: '⚙' },
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
