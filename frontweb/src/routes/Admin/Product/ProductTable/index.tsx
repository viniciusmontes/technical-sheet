import { useEffect, useState } from "react";
import { ProductDTO } from "../../../../models/product";
import { requestBackend } from "../../../../utils/requets";

export default function ProductTable() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    requestBackend({ url: "/products" }).then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
