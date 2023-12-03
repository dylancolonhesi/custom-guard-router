import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const NavbarWrapper = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 5px;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: yellow;
  }
`;

export function Navbar() {
  const { isAdmin } = useAuth();

  return (
    <NavbarWrapper>
      <NavList>
        <NavItem>
          <StyledNavLink to="/" >
            Home
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/details">Details</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to={isAdmin() ? "/perfil-admin" : "/perfil-comum"}>Profile</StyledNavLink>
        </NavItem>
      </NavList>
    </NavbarWrapper>
  );
};