import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import type { SkipType } from '@/lib/types'
import { cn, formatPrice, getImageUrl } from '@/lib/utils'
import { Check, ChevronRight, TriangleAlert } from 'lucide-react'

interface SkipViewProps {
  skip: SkipType
  next?: (id: number) => void
  className?: string
}

export function SkipView({
  skip: { id, size, price_before_vat, allowed_on_road, hire_period_days },
  next,
  className
}: SkipViewProps) {
  const imageUrl = getImageUrl(size)
  const price = formatPrice(price_before_vat)
  const label = `${size} Yard Skip`
  const hirePeriod = `${hire_period_days} day${hire_period_days > 1 ? 's' : ''} hire period`
  const roadAllowance = `${allowed_on_road ? '' : 'Not '}Allowed On The Road`

  const handleContinue = () => {
    next?.(id)
  }

  return (
    <div className={cn('flex w-full', 'h-fit flex-col gap-4', 'md:flex-1 lg:flex-row', className)}>
      <div
        className={cn(
          'flex shrink grow-0 items-center justify-center overflow-clip rounded-md',
          'h-fit max-h-full w-full lg:w-1/2'
        )}
      >
        <AspectRatio ratio={1.43 / 1}>
          <img src={imageUrl} alt={label} className="size-full" />
        </AspectRatio>
      </div>
      <div className="flex grow flex-col gap-4 md:justify-between">
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{label}</div>
          <div className="w-fit font-semibold">{price}</div>
          <div className="font-light">{hirePeriod}</div>
          <div
            className={cn(
              'bg-primary flex w-fit items-center gap-1 rounded-md px-2 py-1',
              allowed_on_road ? 'text-green-300' : 'text-yellow-300'
            )}
          >
            {allowed_on_road ? <Check className="size-4" /> : <TriangleAlert className="size-4" />}
            <span className="text-xs">{roadAllowance}</span>
          </div>
        </div>
        <Button onClick={handleContinue} size="lg" className="cursor-pointer">
          Continue With This Choice
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}
