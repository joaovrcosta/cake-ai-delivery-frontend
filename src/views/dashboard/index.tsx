import { Heading } from '@/components/atoms/Heading'
import * as S from './styles'
import { OrderBox } from '@/components/OrderBox'
import { Text } from '@/components/atoms/Text'

export default function DashboardPage() {
  return (
    <>
      <S.Container>
        <S.OrdersContainer>
          <S.InputContainer>
            <S.SearchIcon />
            <S.Input type="text" placeholder="Enter the receipt number" />
          </S.InputContainer>
          <S.OrdersHeading>
            <h3>Pedidos</h3>
          </S.OrdersHeading>
          <S.OrdersStatus>
            <S.ButtonStatus rounding="rounded">Todos</S.ButtonStatus>
            <S.ButtonStatus rounding="rounded">Novo</S.ButtonStatus>
            <S.ButtonStatus rounding="rounded">Em preparo</S.ButtonStatus>
            <S.ButtonStatus rounding="rounded">Cancelados</S.ButtonStatus>
          </S.OrdersStatus>
          <S.Orders>
            <OrderBox />
            <OrderBox />
            <OrderBox />
            <OrderBox />
            <OrderBox />
            <OrderBox />
            <OrderBox />
          </S.Orders>
        </S.OrdersContainer>
        <S.Informations>
          <Heading color="black" weight="bold">
            Informações de vendas
          </Heading>
          <S.CardsWrapper>
            <S.TotalCard>
              <Text>Total</Text>
              <h3>R$ 45,48</h3>
            </S.TotalCard>
            <S.TotalCard>
              <Text>Total</Text>
              <h3>R$ 45,48</h3>
            </S.TotalCard>
            <S.TotalCard>
              <Text>Total</Text>
              <h3>R$ 45,48</h3>
            </S.TotalCard>
          </S.CardsWrapper>
        </S.Informations>
      </S.Container>
    </>
  )
}
