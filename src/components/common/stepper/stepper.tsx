import { cn } from '@/lib/utils'
import { Check, type LucideIcon } from 'lucide-react'
import React, { useEffect, useRef } from 'react'

export interface Step {
  label: string
  icon: LucideIcon
}

interface StepperProps {
  steps: Step[]
  currentStep: number
}

export function Stepper({ steps, currentStep }: StepperProps) {
  const currentStepRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (currentStepRef.current)
      currentStepRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'center'
      })
  }, [])

  return (
    <div className="flex w-full items-center overflow-auto lg:justify-center">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            ref={index === currentStep ? currentStepRef : null}
            className={cn(
              'flex shrink-0 items-center gap-2 rounded-xl px-1 py-1',
              index < currentStep &&
                'bg-primary/15 dark:bg-primary/5 text-primary border-primary border',
              index === currentStep && 'bg-primary text-primary-foreground px-2.5 py-2.5'
            )}
          >
            <div
              className={cn(
                'flex items-center justify-center rounded-full border-2',
                index <= currentStep
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-background text-primary-foreground',
                index >= currentStep ? 'size-fit' : 'size-6'
              )}
            >
              {index < currentStep ? (
                <Check className="size-4" />
              ) : (
                <step.icon className="size-4" />
              )}
            </div>
            <div className="text-center text-xs">{step.label}</div>
          </div>

          {index < steps.length - 1 && (
            <div className="bg-primary mx-2 h-0.5 max-w-20 min-w-2 flex-1 grow" />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
