import { Heading } from '@/components/atoms/Heading'
import * as S from './styles'
import { Button } from '@/components/atoms/Button'
import { FiPlus } from 'react-icons/fi'
import { Text } from '@/components/atoms/Text'

export default function MenuPage() {
  return (
    <S.Container>
      <Heading color="black" weight="bold">
        Seu Cardápio
      </Heading>
      <S.CardsWrapper>
        <S.CreatingCategory>
          <Text color="primary" weight="semibold" size="lg">
            Categorias
          </Text>
          <S.UserHandleContainer>
            <S.Products>
              <Text>Nenhum produto aqui ainda</Text>
            </S.Products>
            <S.FooterCard>
              <S.NewCategoryButton
                backgroundColor="transparent"
                rounding="rounded"
                color="white"
              >
                <FiPlus size={24} />
                Nova categoria
              </S.NewCategoryButton>
              <div></div>
            </S.FooterCard>
          </S.UserHandleContainer>
        </S.CreatingCategory>
        <S.CreatingCategory>
          <Text color="primary" weight="semibold" size="lg">
            Produtos
          </Text>
          <S.UserHandleContainer>
            <S.Products>
              <Text>Nenhum produto aqui ainda</Text>
            </S.Products>
            <S.FooterCard>
              <S.NewCategoryButton
                backgroundColor="transparent"
                rounding="rounded"
                color="white"
              >
                <FiPlus size={24} />
                Nova categoria
              </S.NewCategoryButton>
              <div></div>
            </S.FooterCard>
          </S.UserHandleContainer>
        </S.CreatingCategory>
      </S.CardsWrapper>
    </S.Container>
  )
}
