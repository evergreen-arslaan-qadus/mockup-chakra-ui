import { TextfieldProps } from "./Textfield"

export const textfieldStyleGenerator = (props: TextfieldProps, isValid: boolean) => {
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
                borderColor: !isValid ? 'gray.75' : 'green.75',
                transition: 'all 0.2s ease',
            },
            styles: {
                transition: 'all 0.2s ease'
            }
        },
        span: {
            active: {},
            hover: {},
            focus: {},
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
        }
    };
};