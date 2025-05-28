import "./styles.css";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

type SidebarItem = {
  icon: IconType;
  title: string;
  link: string;
};

type Props = {
  sector: string;
  items: SidebarItem[];
};

export default function Sidebar({ sector, items }: Props) {
  return (
    <aside className="sidebar-container">
      <h2 className="sidebar-sector">{sector}</h2>
      <ul className="sidebar-list">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index} className="sidebar-item">
              <Link to={`/admin/${item.link}`} className="sidebar-link">
                <Icon className="sidebar-icon" />
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
