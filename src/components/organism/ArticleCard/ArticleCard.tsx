import styled from 'styled-components'
import { theme } from '../../../themes'
import { RssPost } from '@/utils/rss'

type ArticleCardProps = {
  post: RssPost
}

const FormatCardDesign = styled.a`
  background-color: ${theme.colors.white};
  border: none;
  border-radius: 8px;
  width: 320px;
  height: 345px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`
const Thumbnail = styled.img`
  width: 320px;
  height: 167.5px;
  object-fit: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
const Title = styled.h3`
  margin: 20px 20px;
  text-align: left;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.mediumLarge};
  line-height: ${theme.lineHeights[2]};
`

const Source = styled.div`
  margin: 0 20px 20px 20px;
  text-align: left;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.small};
`

const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  return (
    <FormatCardDesign href={post.link} target='_blank' rel='noopener noreferrer'>
      <Thumbnail src={post.thumbnail} alt={`${post.title} thumbnail`} />
      <Title>{post.title}</Title>
      <Source>{post.source}</Source>
    </FormatCardDesign>
  )
}
export { ArticleCard }
