
import { StoryObj } from "@storybook/react";
import { MyLabel } from "./components/MyLabel.";


const meta ={
    title: 'MyLabel',
    component: MyLabel
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story =StoryObj<typeof meta>

export const Basic: Story={};