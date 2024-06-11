import { routes } from '@/shared/sidebarPaths'
import * as S from './styles'
import { SidebarButton } from '../SidebarButton'

export function Sidebar() {
  return (
    <S.SidebarWrapper>
      <S.SidebarBody>
        <S.LogoContainer>
          <span>Your Logo</span>
        </S.LogoContainer>
        <S.Buttons>
          {routes.map((btn, i) => {
            return (
              <SidebarButton
                title={btn.title}
                path={btn.path}
                icon={btn.icon}
              />
            )
          })}
        </S.Buttons>
      </S.SidebarBody>
    </S.SidebarWrapper>
  )
}
