import { Flat, FlatCard, FlatModal } from 'entities/flat'

import { useModal } from 'shared/lib'
import { Button } from 'shared/ui'

export interface OpenFlatCardProps {
  className?: string
  flat: Flat
}

export function OpenFlatCard({ className = '', flat }: OpenFlatCardProps) {
  const controller = useModal()

  return (
    <>
      <FlatCard
        className={className}
        flat={flat}
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
