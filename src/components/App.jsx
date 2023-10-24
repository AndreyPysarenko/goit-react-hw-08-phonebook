import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Loader from './Loader';
import { Route, Routes } from 'react-router-dom';
import Layout from 'Layout';
import { lazy } from 'react';
import { fetchCurrentUser } from 'store/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';

const Home = lazy(() => import('page/HomePage'));
const Contacts = lazy(() => import('page/ContactsPage'));
const Login = lazy(() => import('page/LoginPage'));
const Registration = lazy(() => import('page/RegistrationPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Loader />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="/registration"
              element={
                <PublicRoute>
                  <Registration />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
