import { useEffect, useState } from 'react'

export function useDocumentWidth() {
  const [width, setWidth] = useState(window.screen.width)

  useEffect(() => {
    const handleResize = () => setWidth(window.screen.width)

    document.addEventListener('resize', handleResize)

    return () => document.removeEventListener('resize', handleResize)
  }, [])

  return width
}
