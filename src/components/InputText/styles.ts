import styled from "styled-components/native";
import { InputTextProps } from "./types";

export const StyledInput = styled.TextInput.attrs<InputTextProps>(props => ({
  placeholderTextColor: props.placeholderTextColor || '#999',
}))`
  height: 48px;
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 15px;
  
  border-width: 1px;
  border-color: #DDD;
  border-radius: 8px;
  
  font-size: 16px;
  color: #333;
`;