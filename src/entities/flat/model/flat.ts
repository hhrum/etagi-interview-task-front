import { ImageUrl, UniqueId } from 'shared/types'

export type Area = number

export interface Flat {
  id?: UniqueId

  price: number
  layoutImage: ImageUrl

  floor: number
  position: number
  rooms: number

  totalArea: Area
  kitchenArea: Area
  liveArea: Area
}
