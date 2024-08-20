import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Tela Home</h1>
      <Link to={"/admin"}>
        <button>Admin</button>
      </Link>
    </>
  );
}
