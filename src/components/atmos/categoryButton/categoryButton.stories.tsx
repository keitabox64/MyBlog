import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import React from 'react'
import Button from './categoryButton'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const categoryButton: ComponentStory<typeof Button> = () => <Button label='category' />
