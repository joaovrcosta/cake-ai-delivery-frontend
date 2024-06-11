import { useState } from 'react'
import OrderDetailsComponent from '../OrderDetails'
import * as S from './styles'
import { IoMdArrowForward, IoMdClose } from 'react-icons/io'
import { CiClock2 } from 'react-icons/ci'
import { Text } from '../atoms/Text'

export function OrderBox() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const handleToggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen)
  }

  return (
    <>
      <S.Container>
        <S.OrderHeading>
          <h3>Pedido: 126</h3>
          <S.TimingInformation>
            <S.Timing>
              <CiClock2 size={24} />
              12:26
            </S.Timing>
            <S.CloseButton>
              <IoMdClose size={24} />
            </S.CloseButton>
          </S.TimingInformation>
        </S.OrderHeading>
        <S.CostumerInfo>
          <p>Airton</p>
          <p>(11) 958274220</p>
        </S.CostumerInfo>
        <S.Cost>
          <div>
            <S.Label>Total</S.Label>
            <S.Label>Dinheiro - Troco</S.Label>
          </div>
          <div>
            <Text weight="extrabold" color="primary">
              R$ 28,00
            </Text>
            <p>Não precisa</p>
          </div>
        </S.Cost>

        <S.LocationContainer>
          <S.Label>Entrega</S.Label>
          <p>Av.Domingos de Almeida, 154</p>
        </S.LocationContainer>

        <S.AcceptOrderButton>
          <S.AcceptButton
            color="primary"
            rounding="rounded"
            onClick={handleToggleDetails}
            isDetailOpening={isDetailsOpen}
          >
            Ver Pedido <IoMdArrowForward size={24} />
          </S.AcceptButton>
        </S.AcceptOrderButton>
        <OrderDetailsComponent
          toggleOrderDetails={handleToggleDetails}
          isOpen={isDetailsOpen}
        />
      </S.Container>
    </>
  )
}
