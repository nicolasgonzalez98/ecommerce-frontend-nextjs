import styled from "styled-components"

const StyledDiv = styled.div`
    max-width:100%;
    margin:0 20px;
    padding: 0 20px;
`;

export default function Center({children}){
    return (
        <StyledDiv>{children}</StyledDiv>
    )
}