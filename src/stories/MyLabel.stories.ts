import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type Props } from "../components/MyLabel";

const meta:Meta<Props> ={
    title: 'UI/labels/MyLabel',//crea el path que se coloque
    component: MyLabel,
    tags:['autodocs'], //la documentación automática
    parameters:{
        layout:'centered'
    },
    argTypes:{ //como se muestra la selección del control
        size: { control:'inline-radio' },
        fontColor: { control: 'color'}, //paleta de colores, infiere el control si tiene la palabra color

    }
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>

export const Basic: Story={
    args:{
       label:'Basic label',
       size: 'normal',
    }
};
export const AllCaps: Story={
    args:{
       label:'All Caps label',
       allCaps:true,
    }
};
export const Secondary: Story={
    args:{
       label:'Secondary label',
       color: 'text-secondary',
    }
};
export const CustomColor: Story={
    args:{
       label:'Custom color label',
       fontColor:'#5517ac'
    }
};