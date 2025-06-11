import { SkipList } from './components/common/skip-list'
import { Stepper } from './components/common/stepper'
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert'
import { Skeleton } from './components/ui/skeleton'
import { useQuery } from './hooks/useQuery'
import { apiUrrl } from './lib/constants'
import type { SkipListType } from './lib/types'
import {
  AlertTriangle,
  Calendar,
  CreditCard,
  MapPin,
  ShieldCheck,
  Trash2,
  Truck
} from 'lucide-react'

function App() {
  const { data, isLoading } = useQuery<SkipListType, Error>(apiUrrl)

  const steps = [
    { label: 'Postcode', icon: MapPin },
    { label: 'Waste Type', icon: Trash2 },
    { label: 'Select Skip', icon: Truck },
    { label: 'Permit Check', icon: ShieldCheck },
    { label: 'Choose Date', icon: Calendar },
    { label: 'Payment', icon: CreditCard }
  ]
  const currentStep = 2

  const Content = () => {
    if (data) return <SkipList list={data} />

    if (isLoading)
      return (
        <div className="flex gap-4">
          <Skeleton className="h-20 w-28" />
          <Skeleton className="h-20 w-28" />
          <Skeleton className="h-20 w-28" />
        </div>
      )

    return (
      <div className="fllex size-full grow items-center justify-center">
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>Something went wrong while getting your datas</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="size-full space-y-12 px-6 py-8">
      <div className="mx-0 md:mx-4 lg:mx-auto lg:max-w-10/12">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="mx-auto space-y-2 text-center">
        <h1 className="text-2xl font-bold">Choose Your Skip Size</h1>
        <p>Select the skip size that best suits your needs</p>
      </div>
      <div className="mx-auto w-fit max-w-full md:w-full md:max-w-4/5 lg:px-10">
        <Content />
      </div>
    </div>
  )
}

export default App
