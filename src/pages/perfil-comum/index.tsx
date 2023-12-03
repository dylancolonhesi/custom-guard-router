import styled from "styled-components"

const Background = styled.div`
    background: #3e60d1;
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

export function PerfilComum() {
    return (
        <Background>
            <h1>PERFIL COMMON</h1>
        </Background>
    )
}