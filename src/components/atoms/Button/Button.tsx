import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react';
import { buttonStyleGenerator } from './Button.style';

export interface ButtonProps {
    children: React.ReactNode
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
    icon?: string
    variant?: 'icon' | 'primary' | 'secondary' | 'light' | 'discree'
    color?: 'default' | 'tentative' | 'destructive' | 'execpt'
    label: string
    rightIcon?: React.ReactElement
    leftIcon?: React.ReactElement
}

const Button = (props: ButtonProps): React.ReactElement<ButtonProps> => {
    const { children, label } = props;
    const styleProps = buttonStyleGenerator(props);

    return (
        <ChakraButton
            _active={{ bgColor: 'green.pressed' }}
            _focus={{ border: '3px', borderStyle: 'solid', borderColor: 'green.pressed' }}
            _hover={{ bgColor: 'green.75' }}
            {...styleProps}
        >
            {label}
            {children}
        </ChakraButton>
    )
}

export default Button
