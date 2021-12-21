/* import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  decorators: [(story: any) => <div className="p-4">{story()}</div>]
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  content: 'Mes références'
}

 */

import { Story, Meta } from '@storybook/react/types-6-0'
import { Button } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story = (args) => <Button {...args} />
