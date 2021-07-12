import { Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import PrivateRoutes from 'core/components/Routes/PrivateRoutes';
import './styles.scss';
import Categories from './components/Categories';


const Admin = () =>(
  <div className="admin-container">
    <Navbar/>
    <div className="admin-content">
      <Switch>
        <PrivateRoutes path="/admin/products">
          <Products/>
        </PrivateRoutes>
        <PrivateRoutes path="/admin/categories">
          <Categories/>
        </PrivateRoutes>
        <PrivateRoutes path="/admin/users" allowedRoutes={['ROLE_ADMIN']}>
          <h1>Users</h1>
        </PrivateRoutes>

      </Switch>
    </div>
  </div>
);

export default Admin;