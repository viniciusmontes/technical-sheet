import './styles.css';

import Modal from 'react-modal';

import { DataSheetDTO } from '../../models/data-sheet';
import { formatPrice } from '../../utils/formatters';

type ProductModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  productName: string;
  dataSheet: DataSheetDTO;
};

export default function DataSheetModal({
  isOpen,
  onRequestClose,
  productName,
  dataSheet,
}: ProductModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Ficha Técnica"
      className="modal"
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <h2 className="modal-header">Ficha Técnica - {productName}</h2>
      <ul className="modal-list">
        {dataSheet.materials.map((material) => (
          <li key={material.materialId} className="modal-list-item">
            Material ID: {material.materialId}, Custo do Material:{" "}
            {formatPrice(material.materialCost)}, Quantidade:{" "}
            {material.quantity}, Custo Usado: {formatPrice(material.costUsed)}
          </li>
        ))}
      </ul>
      <p className="total-cost">
        Custo Total: {formatPrice(dataSheet.totalCost)}
      </p>
      <button onClick={onRequestClose} className="close-button">
        Fechar
      </button>
    </Modal>
  );
}
