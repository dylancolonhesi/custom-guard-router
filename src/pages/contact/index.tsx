import styled from "styled-components"

const Background = styled.div`
    background: #7f75d4;
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

export function Contact() {
    return (
        <Background>
            <h1>CONTACT</h1>
        </Background>
    )
}