import { ButtonProps } from "./Button"

export const buttonStyleGenerator = ({ children, label, variant }: ButtonProps) => {
    return {
        color: variant === 'secondary' ? 'green.0' : 'white',
        bgColor: variant === 'secondary' ? 'white' : 'green.0',
        borderRadius: "100px"
    };
};