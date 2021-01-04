import { TextfieldProps } from "./Textfield"

export const textfieldStyleGenerator = (props: TextfieldProps, isValid: boolean, isInvalid: boolean, textLength: number) => {
    return {
        textfield: {
            active: {
                transition: 'all 0.2s ease',
            },
            hover: {
                transition: 'all 0.2s ease',
            },
            focus: {
                border: '2px',
                borderColor: isValid ? 'green.75' : isInvalid ? 'ruby.0' : 'gray.75',
                transition: 'all 0.2s ease',
            },
            styles: {
                transition: 'all 0.2s ease'
            }
        },
        span: {
            active: {},
            hover: {},
            focus: {
                top: '2px',
                color: isValid ? 'green.75' : isInvalid ? 'ruby.0' : 'gray.dark'
            },
            valid: {
                top: '2px',
                color: 'green.75'
            },
            invalid: {
                top: textLength > 0 ? '2px' : '22px',
                color: 'ruby.0',
            },
            styles: {
                position: 'absolute',
                backgroundColor: props.labelBackgroundColor,
                padding: '0 8px',
                left: '25px',
                top: '22px',
                transition: 'all 0.2s ease',
                pointerEvents: 'none',
                zIndex: '2',
            }
        },
        helper: {
            active: {},
            focus: {
                color: isValid ? 'green.75' : isInvalid ? 'ruby.0' : 'gray.dark'
            },
            valid: {
                display: 'none'
            },
            invalid: {
                color: 'ruby.0',
            },
            styles: {
                position: 'absolute',
                backgroundColor: props.labelBackgroundColor,
                padding: '0 8px',
                left: '25px',
                top: '65px !important',
                transition: 'all 0.2s ease',
                pointerEvents: 'none',
                zIndex: '3',
            }
        }
    };
};