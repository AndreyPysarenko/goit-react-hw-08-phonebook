import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { logOut } from 'store/auth/operations';
import { selectUser } from 'store/auth/selector';
import { Container } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  if (!user.name) return;

  return (
    <Container>
      <p>Welcome, {user.name}</p>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </Container>
  );
};
