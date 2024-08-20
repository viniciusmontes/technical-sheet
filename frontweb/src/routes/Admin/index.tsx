import { Link, Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <h1>Tela Admin</h1>
      <Link to={"/admin/products"}>
        <button>Ver produtos</button>
      </Link>
      <Outlet/>
      
    </>
  );
}
