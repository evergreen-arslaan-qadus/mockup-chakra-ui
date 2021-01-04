import React, { useState } from 'react'
import { chakra, Flex, Input as ChakraTextfield } from '@chakra-ui/react';
import { textfieldStyleGenerator } from './Textfield.style';
import { theme } from '../../../theme';

export interface TextfieldProps {
    label: string,
    labelBackgroundColor: string
    valid?: boolean
    invalid?: boolean
    placeholder?: string
}

const Textfield = (props: TextfieldProps): React.ReactElement<TextfieldProps> => {
    const { label, valid = false, placeholder = '', invalid = false } = props;
    const [isValid, setIsValid] = useState(valid);
    const [isInvalid, setIsInvalid] = useState(invalid);
    const styleProps = textfieldStyleGenerator(props, isValid, isInvalid);
    const [hasFocus, setHasFocus] = useState(false);
    const [text, setText] = useState(placeholder);

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
        color: isInvalid ? theme.colors.ruby[0] : theme.colors.gray.dark
    } : isInvalid ? {
        transition: 'all 0.2s ease',
        top: text.length > 0 ? '2px' : '22px',
        color: theme.colors.ruby[0],
    } : {};

    return (
        <Flex alignItems="center" width="100%">
            <Span color="gray.75" {...styles}>{label}</Span>
            <ChakraTextfield
                onChange={
                    (e) => {
                        setText(() => {
                            const updatedPlaceholder = e.target.value;
                            if (updatedPlaceholder.length > 3) {
                                setIsInvalid(false);
                                setIsValid(true);
                            }

                            if (updatedPlaceholder.length === 0) {
                                setIsInvalid(false);
                                setIsValid(false);
                            }

                            if (updatedPlaceholder.length <= 3) {
                                setIsInvalid(true)
                                setIsValid(false)
                            }

                            return updatedPlaceholder;
                        });
                    }
                }
                onFocus={() => setHasFocus(!hasFocus)}
                onBlur={() => setHasFocus(!hasFocus)}
                position="relative"
                _active={styleProps.textfield.active}
                _focus={styleProps.textfield.focus}
                _hover={styleProps.textfield.hover}
                borderColor={isValid ? 'green.75' : isInvalid ? 'ruby.0' : 'gray.75'}
                border={isValid ? '2px' : '1px'}
                {...styleProps.textfield.styles}
                value={text}
            />
        </Flex>
    )
}

export default Textfield
