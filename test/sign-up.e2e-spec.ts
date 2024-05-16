import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('91919292919')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Cadastro finalizado com sucesso!')

  await expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Invalid Restaurant')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('91919292919')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Ocorreu uma falha ao finalizar o cadastro.')

  await expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
