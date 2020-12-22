import React from 'react'
import { Button as ChakraButton, Flex } from '@chakra-ui/react';
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
    const { children, label, leftIcon, rightIcon } = props;
    const styleProps = buttonStyleGenerator(props);

    return (
        <ChakraButton
            _active={styleProps.active}
            _focus={styleProps.focus}
            _hover={styleProps.hover}
            {...styleProps.styles}
        >
            {label}
            {children}
        </ChakraButton>
    )
}

export default Button
