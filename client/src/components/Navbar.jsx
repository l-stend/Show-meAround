import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';
import { getUserFromLocalStorage } from '../utils/localStorage';
import './components-style/NavbarStyle.css';

const Navbar = () => {
  // const { user } = useSelector((store) => store.user);
  const user = getUserFromLocalStorage();
  const dispatch = useDispatch();
  return (
    <nav>
      <div>
        <img
          className='logo'
          src={require('../assets/logoSmA.png')}
          alt='boh'
        />
      </div>
      {user?.navLinks?.map((item) => {
        return (
          <div className='navbar-link text-center'>
            <NavLink
              key={item.name}
              style={{ color: '#ff8500' }}
              to={`/${item.url}`}
            >
              {item.name}
            </NavLink>
          </div>
        );
      })}
      <button className='logout' onClick={() => dispatch(logoutUser())}>
        logout
      </button>
    </nav>
  );
};

export default Navbar;
