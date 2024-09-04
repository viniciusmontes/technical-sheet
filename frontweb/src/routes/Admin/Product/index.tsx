import { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import { ProductDTO } from "../../../models/product";
import { requestBackend } from "../../../utils/requets";
import ProductModal from "../../../components/ProductModal";

export default function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    requestBackend({ url: "/products" }).then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInsertProduct = (newProduct: ProductDTO) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="product-container">
      <h1>Produtos</h1>
      <button onClick={handleOpenModal}>Criar Novo Produto</button>
      <div className="product-table-container">
        <ProductTable />
        <ProductModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          onInsertProduct={handleInsertProduct}
        />
      </div>
    </div>
  );
}
