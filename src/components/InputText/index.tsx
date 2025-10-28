import { StyledInput } from "./styles";
import { InputTextProps } from "./types";

export default function InputText(props: InputTextProps) {
    return <StyledInput
        {...props}
        placeholder={props.placeholder || 'Digite aqui...'}
    />
}