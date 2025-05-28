import { Outlet } from "react-router-dom";
import "./styles.css";
import Sidebar from "../../components/Sidebar";
import { FaCog } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";

export default function Admin() {
  return (
    <div className="admin-container">
      <Sidebar
        sector="Administração"
        items={[
          { icon: BiSolidFoodMenu, title: "Produtos", link: "products" },
          { icon: MdFoodBank, title: "Materiais", link: "materials" },
          { icon: FaCog, title: "Configurações", link: "default" },
        ]}
      />
      <main className="admin-content">
        <Outlet/>
      </main>
    </div>
  );
}

