import { useContext } from "react";
import { ThemeContext } from "./hooks/useTheme";

export function Button({ variant = 'primary', ...props }) {
    const newProps = {
        ...props,
        className: `btn btn-${variant} ${props.className || ''}` // Ajout de la possibilité de passer des classes supplémentaires
    };
    const theme= useContext(ThemeContext)
    return <button  onClick={theme.toggleTheme} >{theme.theme}</button>

    if (props.href) {
        return <a {...newProps} />;
    }
    return <button {...newProps} />;
}
