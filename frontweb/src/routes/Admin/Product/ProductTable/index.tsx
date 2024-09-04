import "./styles.css";

import { FaEye } from "react-icons/fa";

import DataSheetModal from "../../../../components/DataSheetModal";
import { ProductDTO } from "../../../../models/product";
import { formatPrice } from "../../../../utils/formatters";
import { useState } from "react";

type Props = {
  products: ProductDTO[];
};

export default function ProductTable({ products }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<ProductDTO | null>(
    null
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
