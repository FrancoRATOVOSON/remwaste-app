import type { SkipListType, SkipType } from '@/lib/types'

import { useState } from 'react'
import { SkipCard } from '../skip-card'
import { SkipView } from '../skip-view'
import { cn } from '@/lib/utils'

interface SkipListProps {
  list: SkipListType
}

export function SkipList({ list }: SkipListProps) {
  const [selected, setSelected] = useState<SkipType | null>(null)

  const handleSkipSelect = (id: number) => {
    const selectedSkip = list.find(skip => skip.id === id)

    if (selectedSkip) setSelected(selectedSkip)
  }

  if (list.length === 0)
    return (
      <div className="flex size-full items-center justify-center">
        <p className="text-muted-foreground text-center">No Skip Found For Your Location</p>
      </div>
    )

  return (
    <div className={cn('flex gap-6', selected && 'flex-col md:flex-row')}>
      <div
        className={cn(
          'flex w-full gap-4 overflow-scroll md:w-fit md:flex-wrap',
          selected && 'md:flex-col'
        )}
      >
        {list.map(skip => (
          <SkipCard
            key={skip.id}
            skip={skip}
            onClick={handleSkipSelect}
            className={cn(selected && 'shrink-0 grow')}
          />
        ))}
      </div>
      {selected && <SkipView skip={selected} className="grow-0 md:max-h-96" />}
    </div>
  )
}
