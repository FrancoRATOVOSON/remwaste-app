import { Calendar, CreditCard, MapPin, ShieldCheck, Trash2, Truck } from 'lucide-react'
import { Stepper } from './stepper'
import { type Meta, type StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Stepper> = {
  title: 'Stepper',
  component: Stepper
}

export default meta

type Story = StoryObj<typeof Stepper>

export const Default: Story = {
  args: {
    steps: [
      { label: 'Postcode', icon: MapPin },
      { label: 'Waste Type', icon: Trash2 },
      { label: 'Select Skip', icon: Truck },
      { label: 'Permit Check', icon: ShieldCheck },
      { label: 'Choose Date', icon: Calendar },
      { label: 'Payment', icon: CreditCard }
    ],
    currentStep: 2
  }
}
