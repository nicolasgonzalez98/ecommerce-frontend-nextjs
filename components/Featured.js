import styled from "styled-components";
import Center from "./Center";

const Bg =styled.div`
    background-color: #222;
    color:#fff;
    padding:50px 0;
`

const Title = styled.h1`
    margin:0;
    font-weight:normal;
`

const Desc = styled.p`
    color:#aaa;
    font-size:.8rem;
`

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:.8fr 1.2fr;
    gap:40px;

    img{
        max-width: 100%;
    }

    div{
        align-items:center;
    }
`

const Column= styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
`

export default function Featured(){
    return (
        <Bg>
            <Center>
                <Wrapper>
                    <Column>
                        <Title>Pro anywhere</Title>
                        <Desc>lorem</Desc>
                    </Column>
                    <Column>
                        <img src="https://next-ecommerce-nicog.s3.amazonaws.com/1704669011888.jpeg" />
                    </Column>
                </Wrapper>
            </Center>
        </Bg>
    )
}