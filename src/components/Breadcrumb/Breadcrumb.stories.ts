import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumb from './Breadcrumb';

const meta = {
    title: 'components/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        items: [
            {
                title: 'Home',
                link: '#',
            },
            {
                title: 'Home2',
                link: '#',
            },
            {
                title: 'Home3',
                link: '#',
            },
            {
                title: 'Home4',
            },
        ],
    },
};
