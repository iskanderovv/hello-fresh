import styled from "styled-components";


export const StyledButton = styled.button`
    border: 2px solid #067A46;
    font-family: "Source Sans 3", sans-serif;
    background: ${(props) => props.variant === 'outline' ? 'transparent' : '#067A46'};
    color: ${(props) => props.variant === 'outline' ? '#067A46' : '#fff'};
    border-radius: 4px;
    padding: 11px 24px;
    font-size: 16px;
    font-weight: 600;
`;


export const LoginButton = styled(StyledButton)`
    padding: 8px 28px;
    color: #067A46;
    background: white;
`;

export const Title = styled.h3`
    font-size: 30px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: -0.30000001192092896px;
    font-family: "Inter", sans-serif;
    color: #242424;
`;

export const Subtitle = styled.h6`
    font-size: 16px;
    font-family: "Source Sans 3", sans-serif;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.30000001192092896px;
    color: #242424;
`

export const Info = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    font-family: "Source Sans 3", sans-serif;
    color: #242424;
`