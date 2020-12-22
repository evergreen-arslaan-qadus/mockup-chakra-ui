import { ButtonProps } from "./Button"

export const buttonStyleGenerator = ({ variant }: ButtonProps) => {
    return {
        active: {
            bgColor: variant === 'secondary' ? 'gray.pressed' :
                variant === 'discrete' ? 'gray.50' : 'green.pressed',
        },
        hover: {
            bgColor: variant === 'secondary' ? 'gray.10' :
                variant === 'discrete' ? 'gray.5' : 'green.75',
        },
        focus: {
            border: '2px',
            borderStyle: 'solid',
            borderColor: variant === 'secondary' ? 'gray.pressed' :
                variant === 'discrete' ? 'gray.50' : 'green.pressed',
            bgColor: variant === 'secondary' ? 'white' :
                variant === 'discrete' ? 'gray.10' : 'green.0'
        },
        styles: {
            color: variant === 'secondary' ? 'green.0' :
                variant === 'discrete' ? 'gray.0' : 'white',
            bgColor: variant === 'secondary' ? 'white' :
                variant === 'discrete' ? 'gray.10' : 'green.0',
            borderRadius: "100px"
        }
    };
};