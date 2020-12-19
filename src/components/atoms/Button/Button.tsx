import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react';

export interface ButtonProps {
    children: React.ReactNode
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
    icon?: string
    variant?: 'icon' | 'primay' | 'secondary' | 'light' | 'discree'
    color?: 'default' | 'tentative' | 'destructive' | 'execpt'
    label: string
    rightIcon?: React.ReactElement
    leftIcon?: React.ReactElement
}

const Button = ({ children, label }: ButtonProps): React.ReactElement<ButtonProps> => {
    return (
        <ChakraButton>
            {label}
            {children}
        </ChakraButton>
    )
}

export default Button
