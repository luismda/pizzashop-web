import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('40', { exact: true })).toBeVisible()
  await expect(page.getByText('-5% em relação à ontem')).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('211')).toBeVisible()
  await expect(page.getByText('+8% relação ao mês passado')).toBeVisible()
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('31')).toBeVisible()
  await expect(page.getByText('-9% relação ao mês passado')).toBeVisible()
})

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('R$ 1.800,00')).toBeVisible()
  await expect(page.getByText('+17% relação ao mês passado')).toBeVisible()
})
