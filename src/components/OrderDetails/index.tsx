import { useState } from 'react'
import * as S from './styles'
import { IoMdClose } from 'react-icons/io'

interface IOrderDetailsComponent {
  isOpen: boolean
  toggleOrderDetails: any
}

function OrderDetailsComponent({
  isOpen,
  toggleOrderDetails,
}: IOrderDetailsComponent) {
  return (
    <>
      <S.OrderDetails isOpen={isOpen}>
        <S.CloseButton onClick={toggleOrderDetails}>
          <IoMdClose size={32} />
        </S.CloseButton>
        <h1>Pedido 126</h1>
      </S.OrderDetails>
    </>
  )
}

export default OrderDetailsComponent
