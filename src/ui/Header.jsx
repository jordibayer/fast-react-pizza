import { Link } from 'react-router-dom';
import Username from '../features/user/Username';
import SearchOrder from '../features/order/SearchOrder';

export default function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}
