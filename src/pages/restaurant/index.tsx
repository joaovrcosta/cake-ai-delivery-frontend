import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts/default'
import { NextPageWithLayout } from '../_app'
import RestaurantPage from '@/views/restaurant'

const TabelaFipeScreen: NextPageWithLayout = () => {
  return <RestaurantPage />
}

TabelaFipeScreen.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default TabelaFipeScreen
