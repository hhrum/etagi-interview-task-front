import axios from 'axios'

import { app } from 'shared/config'

export const ApiClient = {
  get: async <T>(url: string, data: object) =>
    axios.get<T>(`${app.api}${url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: data,
    }),
}
