import styled from "styled-components"

const Background = styled.div`
    background: #b6d13e;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1 {
        text-align: center;
        color: white;
    }
`

export function Details() {
    return (
        <Background>
            <h1>DETAILS</h1>
        </Background>
    )
}