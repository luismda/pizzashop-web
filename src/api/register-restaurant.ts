import { api } from '@/lib/axios'

interface RegisterRestaurantBody {
  email: string
  phone: string
  managerName: string
  restaurantName: string
}

export async function registerRestaurant({
  email,
  phone,
  managerName,
  restaurantName,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', { email, phone, managerName, restaurantName })
}
