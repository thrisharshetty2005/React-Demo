import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <table>
          <tbody>
            <tr>
              <th>
                <Link to="/">Home</Link>
              </th>
              <th>
                <Link to="/blogs">Blogs</Link>
              </th>
              <th>
                <Link to="/contact">Contact</Link>
              </th>
              <th>
                <Link to="/users">Users</Link>
              </th>
            </tr>
          </tbody>
        </table>
      </nav>

      <hr />

      <Outlet />
    </>
  );
}

export default Layout;