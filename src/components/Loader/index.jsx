import { ColorRing } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectAppState } from 'store/appState/selector';
import { Backdrop } from './Loader.styled';

const Loader = () => {
  const { isLoading } = useSelector(selectAppState);

  return (
    isLoading && (
      <Backdrop>
        <ColorRing
          height="100"
          width="100"
          radius="48"
          color={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          wrapperClassName=""
          visible={true}
        />
      </Backdrop>
    )
  );
};

export default Loader;
