import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza de Queijo', amount: 20 },
    { product: 'Pizza de Chocolate', amount: 17 },
    { product: 'Pizza de Frango', amount: 9 },
    { product: 'Pizza de Calabresa', amount: 34 },
    { product: 'Pizza de Legumes', amount: 22 },
  ])
})
