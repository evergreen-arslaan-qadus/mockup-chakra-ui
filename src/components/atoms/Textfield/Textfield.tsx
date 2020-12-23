import React, { useState } from 'react'
import { chakra, Flex, Input as ChakraTextfield } from '@chakra-ui/react';
import { textfieldStyleGenerator } from './Textfield.style';

export interface TextfieldProps {
    size: 'xsmall' | 'small' | 'large' | 'xlarge'
    variant?: 'primary' | 'secondary' | 'discrete' |
    'tentative' | 'destructive' | 'except' | 'light'
    color?: 'default' | 'destructive' | 'execpt'
    label: string,
    labelBackgroundColor: string
}

const Textfield = (props: TextfieldProps): React.ReactElement<TextfieldProps> => {
    const { label, labelBackgroundColor } = props;
    // const styleProps = textfieldStyleGenerator(props);
    const [hasFocus, setHasFocus] = useState(false);

    const Span = chakra("span", {
        baseStyle: {
            position: 'absolute',
            backgroundColor: labelBackgroundColor,
            padding: '0 8px',
            left: '25px',
            top: '22px',
            transition: 'all 0.2s ease',
            pointerEvents: 'none',
            zIndex: '2',
        },
    });

    const styles = hasFocus ? {
        top: '2px',
        transition: 'all 0.2s ease',
    } : {};

    return (
        <Flex alignItems="center" width="100%">
            <Span {...styles}>{label}</Span>
            <ChakraTextfield
                onFocus={() => setHasFocus(!hasFocus)}
                onBlur={() => setHasFocus(!hasFocus)}
                position="relative"
            // _active={styleProps.active}
            // _focus={styleProps.focus}
            // _hover={styleProps.hover}
            // {...styleProps.styles}
            />
        </Flex>











    )
}

export default Textfield
