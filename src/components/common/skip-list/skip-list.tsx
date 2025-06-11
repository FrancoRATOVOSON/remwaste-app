import type { SkipListType, SkipType } from '@/lib/types'

import { useState } from 'react'
import { SkipCard } from '../skip-card'

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
      <div>
        <p>No Skipp Found For Your Location</p>
      </div>
    )

  return (
    <div>
      <div>
        {list.map(skip => (
          <SkipCard key={skip.id} skip={skip} onClick={handleSkipSelect} />
        ))}
      </div>
      {selected && <div></div>}
    </div>
  )
}
