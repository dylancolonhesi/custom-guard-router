import { GuardedRoute } from "../components/router-custom";
import { Home } from "../pages/home";
import { Details } from "../pages/details";
import { Contact } from "../pages/contact";
import { useAuth } from "../hooks/useAuth";
import { PerfilComum } from "../pages/perfil-comum";
import { PerfilAdmin } from "../pages/perfil-admin";
import { Route, Routes } from "react-router-dom";

export function MainRoutes() {
    const { isAdmin, isCommon } = useAuth();

    return (
        <Routes>
            <Route path="/" element={
                <GuardedRoute component={<Home />} guard={[]} />
            } />
            <Route path="/contact" element={
                <GuardedRoute component={<Contact />} guard={[isAdmin() || isCommon()]} />
            } />
            <Route path="/details" element={
                <GuardedRoute component={<Details />} guard={[isAdmin() || isCommon()]} />
            } />
            <Route path="/perfil-admin" element={
                <GuardedRoute component={<PerfilAdmin />} guard={[isAdmin()]} />
            } />
            <Route path="/perfil-comum" element={
                <GuardedRoute component={<PerfilComum />} guard={[isCommon()]} />
            } />
        </Routes>

    )
}
