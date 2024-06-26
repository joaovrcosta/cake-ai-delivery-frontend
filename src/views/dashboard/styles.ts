import { Button } from '@/components/atoms/Button'
import { RiFileSearchFill } from 'react-icons/ri'
import styled from 'styled-components'
import { CiSearch } from 'react-icons/ci'

export const Container = styled.div`
  display: flex;
  width: 100%;
`

export const OrdersContainer = styled.div`
  /* width: 22rem; */
  height: 100vh;
  background-color: white;
  padding: 1rem;
  overflow-y: auto;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
  border-left: 1px solid ${({ theme }) => theme.colors.gray_100};

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

export const OrdersStatus = styled.div`
  display: flex;
  max-height: 20rem;
  overflow-y: auto;
  gap: 0.5rem;
  padding: 0.5rem 0;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 24px;
  }

  &::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
    cursor: pointer;
  }

  scrollbar-color: #000 #f1f1f1;
  scrollbar-width: thin;
`

export const ButtonStatus = styled(Button)`
  height: px;
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: #13b156;
    color: #fff;
  }
`

export const Orders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  overflow: auto;
`

export const Informations = styled.div`
  padding: 1rem 2rem;
  width: 100%;
`
export const TotalCard = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 28px;
  }
`

export const OrdersHeading = styled.div`
  padding: 1.5rem 0 1rem 0;

  h3 {
    font-size: 24px;
  }
`
export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.5rem;
  margin-top: 1.5rem;
`

export const InputContainer = styled.div`
  position: relative;
`

export const SearchIcon = styled(CiSearch)`
  position: absolute;
  top: 58%; /* Ajusta para o ícone ficar no meio verticalmente */
  right: 10px;
  transform: translateY(-50%); /* Alinha verticalmente o ícone */
  color: ${({ theme }) => theme.colors.gray_500};
  height: 24px;
  width: 24px;
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  height: 40px;
  padding: 0 40px 0 10px;
  border-radius: 8px;
  width: 100%;
  margin-top: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
