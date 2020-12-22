import { ButtonProps } from "./Button"

export const buttonStyleGenerator = ({ variant }: ButtonProps) => {

    return {
        active: {
            bgColor: 'green.pressed'
        },
        hover: {
            bgColor: 'green.75'
        },
        focus: {
            border: '3px',
            borderStyle: 'solid',
            borderColor: 'green.pressed'
        },
        styles: {
            color: variant === 'secondary' ? 'green.0' : 'white',
            bgColor: variant === 'secondary' ? 'white' : 'green.0',
            borderRadius: "100px"
        }
    };
};