import { useCallback, useId, useState } from 'react'

import { ModalController } from '../../ui'
import useBodyOverflow from './useBodyOverflow'

let lastZIndex = 0

export function useModal(): ModalController {
  const uniqueId = useId()
  const [zIndex, setZIndex] = useState(0)
  const bodyOverflow = useBodyOverflow(uniqueId)

  const open = useCallback(() => {
    lastZIndex += 1
    setZIndex(lastZIndex)
    bodyOverflow.toggleOverflow(true)
  }, [bodyOverflow])

  const close = useCallback(() => {
    setZIndex(0)
    bodyOverflow.toggleOverflow(false)
  }, [bodyOverflow])

  return {
    isOpen: !!zIndex,
    open,
    close,
    zIndex,
  }
}
