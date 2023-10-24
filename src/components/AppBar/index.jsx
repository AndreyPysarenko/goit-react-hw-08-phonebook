import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'store/auth/selector';
import Navigation from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { HeaderStyled } from 'components/AppBar/AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <HeaderStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};
