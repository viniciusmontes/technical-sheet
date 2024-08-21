import { useEffect, useState } from "react";
import { ProductDTO } from "../../../../models/product";
import { requestBackend } from "../../../../utils/requets";
import { FaEye } from "react-icons/fa";
import DataSheetModal from "../../../../components/DataSheetModal";
import { formatPrice } from "../../../../utils/formatters";

import "./styles.css";

export default function ProductTable() {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductDTO | null>(
    null
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    requestBackend({ url: "/products" }).then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleOpenModal = (product: ProductDTO) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{formatPrice(product.price)}</td>
              <td>
                <FaEye
                  onClick={() => handleOpenModal(product)}
                  style={{ cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedProduct && (
        <DataSheetModal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          productName={selectedProduct.name}
          dataSheet={selectedProduct.technicalSheet}
        />
      )}
    </>
  );
}
