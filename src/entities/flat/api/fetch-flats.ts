import { ApiClient } from 'shared/api'
import { IPagination, Sorting } from 'shared/types'

import { Flat, FlatFilter } from '../model'

export interface FlatApi {
  id: number
  floor: number
  pos_on_floor: number
  price: number
  rooms: number
  area_total: number
  area_kitchen: number
  area_live: number
  layout_image: string
}

export const mapperFlatsApiToModel = (data: Array<FlatApi>): Flat[] =>
  data.map(
    (flat: FlatApi) =>
      ({
        id: flat.id,
        floor: flat.floor,
        position: flat.pos_on_floor,
        price: flat.price,
        rooms: flat.rooms,
        totalArea: flat.area_total,
        kitchenArea: flat.area_kitchen,
        liveArea: flat.area_live,
        layoutImage: flat.layout_image,
      } as Flat),
  )

export interface FetchFlatsResponse {
  items: FlatApi[]
  pagination: IPagination
}

export interface FetchFlatsResult {
  items: Flat[]
  pagination: IPagination
}

export const fetchFlats = async (
  filter: FlatFilter | null,
  sorting: Sorting | null,
  page: number | null,
): Promise<FetchFlatsResult> => {
  const response = await ApiClient.get<FetchFlatsResponse>('/flat', { filter, sorting, page })

  let { pagination } = response.data

  if (pagination === undefined) {
    pagination = {
      current: 1,
      total: 0,
      next: null,
      prev: null,
    }
  }

  return {
    items: mapperFlatsApiToModel(response.data.items),
    pagination,
  }
}
