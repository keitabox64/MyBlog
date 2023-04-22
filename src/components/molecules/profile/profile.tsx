import styled from 'styled-components'
import { theme } from '../../../themes'

const ProfileFormatDesign = styled.div`
  background-color: ${theme.colors.white};
  border: none;
  border-radius: 8px;
  width: 320px;
  height: 242px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media (min-width: ${theme.breakpoints.tablet}) and (max-width: ${theme.breakpoints.pc}) {
    width: 660px;
    height: 190px;
  }
`
const NameContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
  align-items: center;
  margin: 24px 24px 0 24px;
`

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-right: 16px;
  object-fit: center;
`

const NameJP = styled.h3`
  margin: 0;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.mediumLarge}px;
  font-weight: 800;
`
const NameEN = styled.h4`
  color: ${theme.colors.gray2};
  font-size: ${theme.fontSizes.small}px;
  font-weight: 800;
  margin: 7px 0 0 8px;
`

const ProfileText = styled.p`
  width: 272px;
  margin: 24px;
  line-height: 22px;
  font-size: ${theme.fontSizes.small}px;
  @media (${theme.breakpoints.tablet} <= width < ${theme.breakpoints.pc}) {
    width: 612px;
  }
`

const Profile: React.FC = () => {
  return (
    <ProfileFormatDesign>
      <NameContainer>
        <ProfileImage src='/images/profile.webp' alt='KTImage' />
        <NameJP>けいてぃ</NameJP>
        <NameEN>KT</NameEN>
      </NameContainer>
      <ProfileText>
        Webコーダー兼Webデザイナー。映像制作やイベント企画もこなす。スクール卒業後、Webサイトのパフォーマンス向上に関心を持ち、学んだ知識を発信するためブログを立ち上げた。趣味は映画鑑賞と散歩。
      </ProfileText>
    </ProfileFormatDesign>
  )
}

export { Profile }
