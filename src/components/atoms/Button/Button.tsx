import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react';
import { buttonStyleGenerator } from './Button.style';

export interface ButtonProps {
    children: React.ReactNode
    size?: 'xsmall' | 'small' | 'large' | 'xlarge'
    variant?: 'primary' | 'secondary' | 'discrete' |
    'tentative' | 'destructive' | 'except' | 'light'
    color?: 'default' | 'destructive' | 'execpt'
    label: string
}

const Button = (props: ButtonProps): React.ReactElement<ButtonProps> => {
    const { children, label } = props;
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
