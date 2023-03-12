import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import React from 'react'
import DecorationButton from './decorationButton'

export default {
  title: 'DecorationButton',
  component: DecorationButton,
} as ComponentMeta<typeof DecorationButton>

export const decorationButton: ComponentStory<typeof DecorationButton> = () => <DecorationButton />
