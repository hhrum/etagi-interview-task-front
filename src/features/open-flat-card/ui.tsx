import { FlatCard } from 'entities/flat'

import { Button } from 'shared/ui/button'

import { Flat } from '../../entities/flat/model'
import { FlatModal } from '../../entities/flat/ui/flat-modal'
import { useModal } from '../../shared/lib'

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
