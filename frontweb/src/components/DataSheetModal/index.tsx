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
      shouldCloseOnOverlayClick={true}  // Fecha o modal ao clicar no plano de fundo
    >
      <h2 className="modal-header">Ficha Técnica - {productName}</h2>
      <table className="modal-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do Material</th>
            <th>Custo do Material</th>
            <th>Quantidade</th>
            <th>Custo Usado</th>
          </tr>
        </thead>
        <tbody>
          {dataSheet.materials.map((material) => (
            <tr key={material.materialId}>
              <td>{material.materialId}</td>
              <td>{material.materialName}</td>
              <td>{formatPrice(material.materialCost)}</td>
              <td>{material.quantity}</td>
              <td>{formatPrice(material.costUsed)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="total-cost">Custo Total: {formatPrice(dataSheet.totalCost)}</p>
      <button onClick={onRequestClose} className="close-button">
        Fechar
      </button>
    </Modal>
  );
}
