import { routes } from '@/shared/sidebarPaths'
import * as S from './styles'
import { SidebarButton } from '../SidebarButton'

export function Sidebar() {
  return (
    <S.SidebarWrapper>
      <S.SidebarBody>
        <S.LogoContainer>
          <h3>
            Magic<span>food</span>
          </h3>
        </S.LogoContainer>
        <S.ChooseRestaurant>
          <S.ChooseWrapper>
            <select>
              <option value="">MagicFood</option>
            </select>
          </S.ChooseWrapper>
        </S.ChooseRestaurant>
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
