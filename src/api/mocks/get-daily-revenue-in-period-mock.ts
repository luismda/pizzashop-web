import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/05', receipt: 20000 },
    { date: '02/05', receipt: 32000 },
    { date: '03/05', receipt: 9000 },
    { date: '04/05', receipt: 10000 },
    { date: '05/05', receipt: 15000 },
    { date: '06/05', receipt: 29000 },
    { date: '07/05', receipt: 7000 },
  ])
})
