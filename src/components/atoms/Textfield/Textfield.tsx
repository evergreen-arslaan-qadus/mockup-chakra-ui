import React, { useState } from 'react'
import { chakra, Flex, Input as ChakraTextfield } from '@chakra-ui/react';
import { textfieldStyleGenerator } from './Textfield.style';
import { theme } from '../../../theme';

export interface TextfieldProps {
    // size: 'xsmall' | 'small' | 'large' | 'xlarge'
    // color?: 'default' | 'destructive' | 'execpt'
    label: string,
    labelBackgroundColor: string
}

const Textfield = (props: TextfieldProps): React.ReactElement<TextfieldProps> => {
    const { label } = props;
    const [isValid, setIsValid] = useState(false);
    const styleProps = textfieldStyleGenerator(props, isValid);
    const [hasFocus, setHasFocus] = useState(false);

    const Span = chakra("span", {
        baseStyle: {
            ...styleProps.span.styles
        },
    });

    const styles = isValid ? {
        transition: 'all 0.2s ease',
        top: '2px',
        color: theme.colors.green[75],
    } : hasFocus ? {
        top: '2px',
        transition: 'all 0.2s ease',
        color: theme.colors.gray.dark
    } : {};

    return (
        <Flex alignItems="center" width="100%">
            <Span color="gray.75" {...styles}>{label}</Span>
            <ChakraTextfield
                onChange={e => setIsValid(e.target.value.length > 0)}
                onFocus={() => setHasFocus(!hasFocus)}
                onBlur={() => setHasFocus(!hasFocus)}
                position="relative"
                _active={styleProps.textfield.active}
                _focus={styleProps.textfield.focus}
                _hover={styleProps.textfield.hover}
                borderColor={isValid ? 'green.75' : 'gray.75'}
                border={isValid ? '2px' : '1px'}
                {...styleProps.textfield.styles}
            />
        </Flex>











    )
}

export default Textfield
