/**
 * CheckoutScreen — Tự thanh toán tại quầy (Self-checkout)
 * Siêu thị / Mini mart
 */
import { ShoppingCart } from 'lucide-react'
import ServiceScreen, { type ServiceConfig } from './ServiceScreen'
import type { LangCode } from '../i18n'

const CHECKOUT_CONFIG: ServiceConfig = {
  type:         'checkout',
  Icon:         ({ size = 24, color = 'currentColor' }) => <ShoppingCart size={size} color={color} />,
  titleKey:     'home_checkout',
  subtitleKey:  'home_checkout_desc',
  demoMerchant: '0x5B12Ce46C7194aD57d143bC22847224047b1Ef42',
  demoItems: [
    { label: 'Mì tôm (5 gói)',  amount: 1.20 },
    { label: 'Sữa tươi 1L',     amount: 1.50 },
    { label: 'Trứng (10 quả)',   amount: 2.30 },
  ],
  demoTotal:  5.00,
  unitLabel: 'Số mặt hàng',
  unitValue: '3 sản phẩm',
}

export default function CheckoutScreen({ lang }: { lang: LangCode }) {
  return <ServiceScreen lang={lang} config={CHECKOUT_CONFIG} />
}
