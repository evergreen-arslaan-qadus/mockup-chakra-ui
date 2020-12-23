import React, { useState } from 'react'
import { chakra, Flex, Input as ChakraTextfield, Text } from '@chakra-ui/react';
import { textfieldStyleGenerator } from './Textfield.style';

export interface TextfieldProps {
    size: 'xsmall' | 'small' | 'large' | 'xlarge'
    variant?: 'primary' | 'secondary' | 'discrete' |
    'tentative' | 'destructive' | 'except' | 'light'
    color?: 'default' | 'destructive' | 'execpt'
    label: string
}

const Textfield = (props: TextfieldProps): React.ReactElement<TextfieldProps> => {
    const { label } = props;
    const styleProps = textfieldStyleGenerator(props);
    const [hasFocus, setHasFocus] = useState(false);


    const Fieldset = chakra("fieldset", {
        baseStyle: {
            border: '2px',
        },
    });

    const Legend = chakra("legend", {
        baseStyle: {
            padding: '0 8px',
        },
    })

    const focusStyle = {
        maxWidth: '1000px',
        transition: 'max-width 100ms cubic- bezier(0.0, 0, 0.2, 1) 50ms',
        width: 'auto',
        height: '11px',
        padding: "0 16px",
    }

    const fieldsetFocusStyle = {
        top: "0px",
        left: "0",
        right: "0",
        bottom: "16px",
        margin: "0",
        padding: "0 8px",
        overflow: "hidden",
        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: '8px'
    }

    const styles = hasFocus ? { ...fieldsetFocusStyle } : {};

    return (
        <Flex alignItems="center" width="100%">
            <Fieldset
                {...styles}
                position="absolute"
                pl="4"
            >
                <Legend _focus={focusStyle}>
                    {label}
                </Legend>
            </Fieldset>
            <ChakraTextfield
                onChange={e => setText(e.target.value)}
                onFocus={() => setHasFocus(!hasFocus)}
                onBlur={() => setHasFocus(!hasFocus)}
                position="relative"
                zIndex="1"
                bgColor=""
                bored="0px"
                borderColor="transparent"
                _active={{}}
                _hover={{}}
                _focus={{}}
            // _active={styleProps.active}
            // _focus={styleProps.focus}
            // _hover={styleProps.hover}
            // {...styleProps.styles}
            />
        </Flex>











    )
}

export default Textfield
