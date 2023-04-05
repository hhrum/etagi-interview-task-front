import { ReactNode } from 'react'

export type ChildrenComponent = ReactNode

export interface RangeFilter {
  from: number | null
  to: number | null
}

export type SortingVariant = 'asc' | 'desc' | 'none'

export interface Sorting {
  column: string
  variant: SortingVariant
}

export interface IconProps {
  className?: string
}

export interface IPagination {
  current: number
  prev: number | null
  total: number | null
  next: number | null
}
