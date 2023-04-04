import { useCallback, useState } from 'react'

import { ModalController } from '../../ui'

let lastZIndex = 0

export function useModal(): ModalController {
  const [zIndex, setZIndex] = useState(0)

  const open = useCallback(() => {
    lastZIndex += 1
    setZIndex(lastZIndex)
  }, [])

  const close = useCallback(() => {
    setZIndex(0)
  }, [])

  return {
    isOpen: !!zIndex,
    open,
    close,
    zIndex,
  }
}
