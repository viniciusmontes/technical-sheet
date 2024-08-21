import { Link, Outlet } from "react-router-dom";
import "./styles.css";

export default function Admin() {
  return (
    <>
      <div className="admin-container">
        <div className="admin-sidebar">
          <h1>Tela Admin</h1>
          <Link to={"/admin/products"}>
            <button>Produtos</button>
          </Link>
          <Link to={"/admin/materials"}>
            <button>Material</button>
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
}
