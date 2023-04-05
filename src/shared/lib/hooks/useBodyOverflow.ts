import { useCallback, useEffect, useState } from 'react'

type ActivatorId = number | string

interface Activator {
  id: ActivatorId
  active: boolean
}

const activators: Array<Activator> = []

const syncBodyOverflow = () => {
  document.body.classList.toggle(
    'overflow',
    activators.some((item) => item.active),
  )
}

const checkExists = (id: ActivatorId) => activators.find((item) => item.id === id)

const pushActivator = (id: ActivatorId, active = false) => {
  const activator = checkExists(id)

  if (activator) {
    activator.active = active
    return
  }

  activators.push({
    id,
    active,
  })
}

const deleteActivator = (id: string | number) => {
  const activatorIndex = activators.findIndex((item) => item.id === id)

  if (activatorIndex === -1) {
    return
  }

  activators.splice(activatorIndex, 1)
}

export interface BodyOverflowService {
  toggleOverflow: (value: boolean) => void
  isOverflow: boolean
}

function useBodyOverflow(id: ActivatorId): BodyOverflowService {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const prevId = id

    pushActivator(id, active)

    syncBodyOverflow()

    return () => {
      if (prevId !== id) {
        deleteActivator(prevId)
      }
    }
  }, [id, active])

  const toggleOverflow = useCallback(
    (value: boolean) => {
      setActive(value)
    },
    [setActive],
  )

  return {
    toggleOverflow,
    isOverflow: active,
  }
}

export default useBodyOverflow
