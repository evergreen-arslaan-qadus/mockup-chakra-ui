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
    helper?: string
}

const Textfield = (props: TextfieldProps): React.ReactElement<TextfieldProps> => {
    const { label, valid = false, placeholder = '', invalid = false, helper = '' } = props;
    const [isValid, setIsValid] = useState(valid);
    const [isInvalid, setIsInvalid] = useState(invalid);
    const [text, setText] = useState(placeholder);
    const [hasFocus, setHasFocus] = useState(false);
    const styleProps = textfieldStyleGenerator(props, isValid, isInvalid, text.length);

    const Label = chakra("span", {
        baseStyle: {
            ...styleProps.span.styles,
        },
    });

    const Helper = chakra("span", {
        baseStyle: {
            ...styleProps.helper.styles
        },
    });

    const labelStyles =
        isValid ? styleProps.span.valid :
            hasFocus ? styleProps.span.focus :
                isInvalid ? styleProps.span.invalid : {};

    const helperStyles =
        isValid ? styleProps.helper.valid :
            hasFocus ? styleProps.helper.focus :
                isInvalid ? styleProps.helper.invalid : {};

    return (
        <Flex alignItems="center" width="100%">
            <Label color="gray.75" {...labelStyles}>{label}</Label>
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
            <Helper color="gray.75" {...helperStyles}>{helper}</Helper>
        </Flex>
    )
}

export default Textfield
