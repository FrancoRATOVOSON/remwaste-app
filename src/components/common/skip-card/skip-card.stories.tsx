import type { Meta, StoryObj } from '@storybook/react-vite'
import { SkipCard } from './skip-card'
import type { SkipType } from '@/lib/types'

const meta: Meta<typeof SkipCard> = {
  title: 'Skip/SkipCard',
  component: SkipCard
}

export default meta

type Story = StoryObj<typeof SkipCard>

const skipTest: SkipType = {
  id: 17933,
  size: 4,
  hire_period_days: 14,
  transport_cost: null,
  per_tonne_cost: null,
  price_before_vat: 278,
  vat: 20,
  postcode: 'NR32',
  area: '',
  forbidden: false,
  created_at: '2025-04-03T13:51:46.897146',
  updated_at: '2025-04-07T13:16:52.813',
  allowed_on_road: true,
  allows_heavy_waste: true
}

export const Default: Story = {
  args: {
    skip: skipTest
  }
}

export const NotAllowed: Story = {
  args: {
    skip: { ...skipTest, allowed_on_road: false }
  }
}
