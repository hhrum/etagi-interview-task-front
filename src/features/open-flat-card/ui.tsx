import { FlatCard } from 'entities/flat'

import { Button } from 'shared/ui/button'

import { FlatModal } from '../../entities/flat/ui/flat-modal'
import { useModal } from '../../shared/lib'

export interface OpenFlatCardProps {
  className?: string
}

export function OpenFlatCard({ className = '' }: OpenFlatCardProps) {
  const controller = useModal()

  return (
    <>
      <FlatCard
        className={className}
        actionButton={
          <Button
            title="Открыть"
            variant="primary"
            onClick={() => controller.open()}
          />
        }
      />

      <FlatModal
        controller={controller}
        actionButton={
          <Button
            title="Закрыть"
            onClick={() => controller.close()}
          />
        }
      />
    </>
  )
}
