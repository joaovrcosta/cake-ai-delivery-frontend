import styled from 'styled-components'
import { Button } from '../atoms/Button'
import Link from 'next/link'

export const MenuButton = styled(Button)`
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`
export const PathLink = styled(Link)`
  width: 100%;
`
