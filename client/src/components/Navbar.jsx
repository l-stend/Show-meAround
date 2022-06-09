import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <nav>
      <h2>⛵ Navbar ⛵</h2>
      {user.navLinks.map((item) => {
        return (
          <NavLink key={item.name} to={`/${item.url}`}>
            {item.name}
          </NavLink>
        );
      })}
      <button onClick={() => dispatch(logoutUser())}>logout</button>
    </nav>
  );
};

export default Navbar;
