import { createContext, useEffect, useState } from "react";

type Usuario = {
    tipo: 'admin' | 'common';
    nome: string;
};

type AuthContextType = {
    isAdmin: () => boolean;
    isCommon: () => boolean;
    isAuthenticated: () => boolean;
    isInitialLoading: () => boolean;
};

type AuthContextProviderType = {
    children: React.ReactNode;
};

const usuario: Usuario = {
    nome: 'Dylan Colonhesi',
    tipo: 'admin'
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderType) {

    const [usuarioAutenticado, setUsuarioAutenticado] = useState<Usuario>();
    const [initialLoading, setInitialLoading] = useState(true);


    // Funções para verificar o tipo de usuário
    function isAdmin(): boolean {
        return usuarioAutenticado?.tipo === 'admin';
    }

    function isCommon(): boolean {
        return usuarioAutenticado?.tipo === 'common';
    }

    
    function isAuthenticated(): boolean {
        return !!usuarioAutenticado;
    }

    function isInitialLoading(): boolean {
        return initialLoading;
    }

    useEffect(() => {
        if(usuario) setUsuarioAutenticado(usuario);

        setInitialLoading(false)
    }, [usuario]);

    return (
        <AuthContext.Provider value={{ isAdmin, isCommon, isAuthenticated, isInitialLoading }}>
            {!initialLoading && props.children}
        </AuthContext.Provider>
    );
}