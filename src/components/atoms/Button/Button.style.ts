import { ButtonProps } from "./Button"

export const buttonStyleGenerator = ({ variant, size }: ButtonProps) => {
    let height, width, fontSize, bgColor, activeBgColor,
        hoverBgColor, focusBgColor, color;

    switch (size) {
        case 'xsmall':
            height = '24px'; width = '59px'; fontSize = '14px';
            break;
        case 'small':
            height = '32px'; width = '88px'; fontSize = '14px';
            break;
        case 'large':
            height = '48px'; width = '150px'; fontSize = '18px';
            break;
        case 'xlarge':
            height = '56px'; width = '118px'; fontSize = '20px';
            break;
    }

    switch (variant) {
        case 'primary':
            bgColor = 'green.0';
            activeBgColor = 'green.pressed';
            hoverBgColor = 'green.75';
            focusBgColor = 'green.0';
            color = 'white';
            break;
        case 'secondary':
            bgColor = 'white';
            activeBgColor = 'gray.pressed';
            hoverBgColor = 'gray.10';
            focusBgColor = 'white';
            color = 'green.0';
            break;
        case 'discrete':
            bgColor = 'gray.10';
            activeBgColor = 'gray.50';
            hoverBgColor = 'gray.5';
            focusBgColor = 'gray.10';
            color = 'gray.0';
            break;
        case 'tentative':
            bgColor = 'yellow.0';
            activeBgColor = 'yellow.pressed';
            hoverBgColor = 'yellow.75';
            focusBgColor = '';
            color = 'yellow.dark';
            break;
        case 'destructive':
            bgColor = 'ruby.0';
            activeBgColor = 'ruby.pressed';
            hoverBgColor = 'ruby.75';
            focusBgColor = '';
            color = 'white';
            break;
        case 'except':
            bgColor = 'gray.10';
            activeBgColor = 'gray.50';
            hoverBgColor = 'gray.5';
            focusBgColor = 'gray.50';
            color = 'green';
            break;
        case 'light':
            bgColor = 'white';
            activeBgColor = 'gray.pressed';
            hoverBgColor = 'gray.10';
            focusBgColor = 'white';
            color = 'green.0';
            break;
    }

    return {
        active: {
            bgColor: activeBgColor,
        },
        hover: {
            bgColor: hoverBgColor,
        },
        focus: {
            border: '2px',
            borderStyle: 'solid',
            // the border color looks like its based off the active color
            borderColor: variant === 'light' ? 'green.0' : activeBgColor,
            bgColor: focusBgColor
        },
        styles: {
            color: color,
            bgColor,
            borderRadius: "100px",
            height,
            width,
            fontSize,
            border: variant === 'light' ? '2px' : '',
            borderColor: variant === 'light' ? 'green.0' : '',
        }
    };
};