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
  /* background-color: ${({ theme }) => theme.colors.gray_100}; */
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

  h3 {
    font-size: 32px;
    font-family: Poppins;

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1.5rem;
`

export const ChooseRestaurant = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 1.5rem;

  select {
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.gray_100};
    border-radius: 6px;
    width: 100%;
    height: 40px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`

export const ChooseWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray_100};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_100};
  width: 100%;
  padding: 1rem 0;
  /* padding: 1rem 2.5rem; */
`
