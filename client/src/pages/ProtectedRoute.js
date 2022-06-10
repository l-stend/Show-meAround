import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserFromLocalStorage } from '../utils/localStorage';

const ProtectedRoute = ({ children }) => {
  // const { user } = useSelector((state) => state.user);
  const user = getUserFromLocalStorage();

  if (!user) {
    return <Navigate to='/landing' />;
  }

  return children;
};

export default ProtectedRoute;
