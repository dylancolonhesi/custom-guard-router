import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import React from "react";

type GuardType = {
    bool: boolean[],
    component: React.ReactNode
}

export function Guard({ bool, component }: GuardType) {
    const location = useLocation();
    const { isAuthenticated } = useAuth();
    console.log(bool);

    if (bool && bool.includes(true)) {
        // usuario com permissão retorna o component
        return component;
    } else if (isAuthenticated()) {
        // array de boolean esta vazio mas o usuário esta autenticado
        return component;
    } else {
        // Redireciona para a página de login se n estiver logado
        return <Navigate to={isAuthenticated() ? "/" : "/login"}  />;
    }
}