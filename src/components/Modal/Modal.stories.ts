import type { Meta, StoryObj } from '@storybook/react';
import Modal, { ModalProps } from './Modal';

const meta = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
        isOpen: { control: 'boolean' },
        title: { control: 'text' },
        children: { control: 'text' },
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isOpen: true,
        title: 'Modal Title',
        children: 'This is the modal content',
        onClose: () => alert('Modal closed'),
    },
};

export const Closed: Story = {
    args: {
        isOpen: false,
        title: 'Modal Title',
        children: 'This is the modal content',
        onClose: () => alert('Modal closed'),
    },
};

export const WithCustomContent: Story = {
    args: {
        isOpen: true,
        title: 'Custom Modal Title',
        children: `<div>
                <p>This is custom content inside the modal.</p>
                <button onClick={()=> alert('Button inside modal clicked')}>Click Me</button>
            </div>`,
        onClose: () => alert('Modal closed'),
    },
};
