import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity<{
    bgColor: string
}>`
    border: 1px solid gray;
    width: 100%;
    border-radius: 10px;
    flex-direction: row;
    background-color: white;
    margin: 10px 0;
    background-color: ${props => props.bgColor};
`;

export const CardTextContainer = styled.View`
    flex: 1;
    padding: 20px 16px;
`;

export const CardIconContainer = styled.View`
    padding: 0px 20px;
    align-self: center;
`

export const CardTitle = styled.Text<{
    textColor: string
}>`
    font-size: 21px;
    font-weight: bolder;
    margin-bottom: 10px;
    color: ${props => props.textColor};
`

export const CardDescription = styled.Text<{
    textColor: string
}>`
    font-size: 15px;
    color: ${props => props.textColor};
`