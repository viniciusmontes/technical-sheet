import { SubmitHandler, useForm } from "react-hook-form";
import "./styles.css";

import { MaterialDTO } from "../../models/material";
import { requestBackend } from "../../utils/requets";

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  onInsertMaterial: (material: MaterialDTO) => void;
};

export default function MaterialModal({
  isOpen,
  onRequestClose,
  onInsertMaterial,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MaterialDTO>();

  const onSubmit: SubmitHandler<MaterialDTO> = (data) => {
    requestBackend({
      method: "POST",
      url: "/materials",
      data,
    }).then((response) => {
      onInsertMaterial(response.data);
      onRequestClose();
    });
  };

  if (!isOpen) {
    return null; 
  }

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onRequestClose(); 
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="material-modal-container">
        <div className="modal-header">Adicionar Material</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              {...register("name", { required: "Nome é obrigatório" })}
            />
            {errors.name && (
              <span className="error-message">{errors.name.message}</span>
            )}
          </div>
          <div className="form-group">
            <label>Unidade de Medida</label>
            <input
              type="text"
              {...register("unitMeasurement", {
                required: "Unidade de Medida é obrigatória",
              })}
            />
            {errors.unitMeasurement && (
              <span className="error-message">
                {errors.unitMeasurement.message}
              </span>
            )}
          </div>
          <div className="form-group">
            <label>Custo</label>
            <input
              type="number"
              step="0.01"
              {...register("cost", {
                required: "Custo é obrigatório",
                valueAsNumber: true,
              })}
            />
            {errors.cost && (
              <span className="error-message">{errors.cost.message}</span>
            )}
          </div>
          <div className="button-container">
            <button type="submit" className="submit-button">
              Criar
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={onRequestClose}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
