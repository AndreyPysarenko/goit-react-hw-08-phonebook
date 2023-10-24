import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { registerUser } from 'store/auth/operations';

const Registration = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(registerUser({ name, email, password }));
    form.reset();
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Name"
        name="name"
        size="small"
        required
      />
      <TextField
        id="outlined-basic"
        label="Email"
        name="email"
        size="small"
        required
      />
      <TextField
        id="outlined-basic"
        label="Password"
        name="password"
        type="password"
        size="small"
        required
      />
      <Button type="submit" variant="contained" size="medium">
        Registration
      </Button>
    </Box>
  );
};

export default Registration;
