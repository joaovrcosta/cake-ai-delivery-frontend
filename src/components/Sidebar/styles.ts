import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  display: block;
  z-index: 2;
  transition: transform 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.gray_100};
`

export const SidebarBody = styled.div`
  height: 100vh;
  overflow: hidden;
`

export const UnorderList = styled.div``

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;

  span {
    font-size: 32px;
    font-family: Poppins;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`
