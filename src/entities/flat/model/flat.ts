import { ImageUrl, Price, UniqueId } from 'shared/types'

export type Area = number

export interface Flat {
  id?: UniqueId

  price: Price
  layoutImage: ImageUrl

  floor: number
  position: number
  rooms: number

  totalArea: Area
  kitchenArea: Area
  liveArea: Area
}
