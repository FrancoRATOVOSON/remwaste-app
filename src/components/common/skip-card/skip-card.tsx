import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import type { SkipType } from '@/lib/types'
import { cn, formatPrice } from '@/lib/utils'
import { TriangleAlert } from 'lucide-react'

interface SkipCardProps {
  skip: SkipType
  onClick?: (id: number) => void
  className?: string
}

export function SkipCard({
  skip: { id, price_before_vat, allowed_on_road, size },
  onClick,
  className
}: SkipCardProps) {
  const handleClick = () => {
    onClick?.(id)
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        className,
        'flex cursor-pointer flex-col items-center gap-1',
        'border-secondary w-28 rounded-[1.25rem] border py-2'
      )}
    >
      <div className="flex flex-row-reverse items-center gap-2">
        <div className="font-semibold">{`${size} Yards`}</div>
        {!allowed_on_road && (
          <Tooltip>
            <TooltipTrigger>
              <div className="bg-primary dark:bg-primary/20 flex size-5 items-center justify-center rounded-full">
                <TriangleAlert className="mb-0.5 size-3 text-yellow-300" />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-primary">
              <p>Not Allowed On The Road</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      <div className="bg-primary/15 border-primary/50 text-primary flex items-center justify-center rounded-full border px-2 py-1 text-xs font-semibold">
        {formatPrice(price_before_vat)}
      </div>
    </div>
  )
}
