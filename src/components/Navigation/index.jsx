import { selectIsLoggedIn } from 'store/auth/selector';
import { Link, LogoStyled, NavStyled } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavStyled>
      <LogoStyled>
        <BsFillJournalBookmarkFill size="20" />
        <p>Phonebook</p>
      </LogoStyled>
      <Link to="/" end>
        Home
      </Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </NavStyled>
  );
};

export default Navigation;
