import styled from "styled-components"

const Background = styled.div`
    background: #d1cf3e;
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

export function Home() {
    return (
        <Background>
            <h1>HOME</h1>
        </Background>
    )
}