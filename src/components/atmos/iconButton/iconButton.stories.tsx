import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import React from 'react'
import IconButton from './iconButton'

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

export const GithubIconButton: ComponentStory<typeof IconButton> = () => (
  <IconButton imageLink='https://github.com/keitabox64' imagePath='/images/github.png' />
)
export const GithubWhiteIconButton: ComponentStory<typeof IconButton> = () => (
  <IconButton imageLink='https://github.com/keitabox64' imagePath='/images/github_white.png' />
)
export const TwitterIconButton: ComponentStory<typeof IconButton> = () => (
  <IconButton imageLink='https://twitter.com/ke_ke_ke_310' imagePath='/images/twitter.png' />
)
export const TwitterWhiteIconButton: ComponentStory<typeof IconButton> = () => (
  <IconButton imageLink='https://twitter.com/ke_ke_ke_310' imagePath='/images/twitter_white.png' />
)
