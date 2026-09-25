/**
 * VendingScreen — Máy bán hàng tự động
 * Chọn · Quét · Trả ngay
 */
import { Package } from 'lucide-react'
import ServiceScreen, { type ServiceConfig } from './ServiceScreen'
import type { LangCode } from '../i18n'

const VENDING_CONFIG: ServiceConfig = {
  type:         'vending',
  Icon:         ({ size = 24, color = 'currentColor' }) => <Package size={size} color={color} />,
  titleKey:     'home_vending',
  subtitleKey:  'home_vending_desc',
  demoMerchant: '0x5B12Ce46C7194aD57d143bC22847224047b1Ef42',
  demoItems: [
    { label: 'Nước suối 500ml', amount: 0.60 },
    { label: 'Bánh quy',        amount: 0.90 },
  ],
  demoTotal:  1.50,
  unitLabel: 'Sản phẩm',
  unitValue: '2 sản phẩm',
}

export default function VendingScreen({ lang }: { lang: LangCode }) {
  return <ServiceScreen lang={lang} config={VENDING_CONFIG} />
}
