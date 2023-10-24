import { Link, NavStyled } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <NavStyled>
      <Link to="/registration">Registration</Link>
      <Link to="/login">Login</Link>
    </NavStyled>
  );
};
