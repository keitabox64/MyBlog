import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import React from 'react'
import LinkBar from './linkBar'

export default {
  title: 'Molecules/LinkBar',
  component: LinkBar,
} as ComponentMeta<typeof LinkBar>

export const linkBar: ComponentStory<typeof LinkBar> = () => <LinkBar />
