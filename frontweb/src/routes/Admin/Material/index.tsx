import { useState } from "react";
import MaterialModal from "../../../components/MaterialModal";
import MaterialTable from "./MaterialTable";
import { MaterialDTO } from "../../../models/material";



export default function Material() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [materials, setMaterials] = useState<MaterialDTO[]>([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMaterialCreated = (newMaterial: MaterialDTO) => {
    setMaterials([...materials, newMaterial]);
  };

  return (
    <div className="material-container">
      <h1>Tela de Materiais!</h1>
      <button onClick={handleOpenModal}>Criar Novo Material</button>
      <MaterialTable />
      <MaterialModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onInsertMaterial={handleMaterialCreated}
      />
    </div>
  );
}
