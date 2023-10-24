import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 600;
  font-size: 22px;
  color: #191d1e;

  &:hover,
  &.active {
    color: #1565c0;
  }
`;

export const LogoStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  text-transform: uppercase;
  font-size: 25px;
`;
