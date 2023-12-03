import styled from "styled-components"

const Background = styled.div`
    background: #d13e3e;
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

export function PerfilAdmin() {
    return (
        <Background>
            <h1>PERFIL ADMIN</h1>
        </Background>
    )
}