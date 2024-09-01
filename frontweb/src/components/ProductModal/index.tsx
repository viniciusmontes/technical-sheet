import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./styles.css";

import { ProductDTO } from "../../models/product";
import { requestBackend } from "../../utils/requets";

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  onInsertProduct: (product: ProductDTO) => void;
};

export default function ProductModal({
  isOpen,
  onRequestClose,
  onInsertProduct,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductDTO>();

  const onSubmit: SubmitHandler<ProductDTO> = (data) => {
    requestBackend({
      method: "POST",
      url: "/products",
      data,
    }).then((response) => {
      onInsertProduct(response.data);
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
        <div className="modal-header">Adicionar Produto</div>
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
            <label>Preço</label>
            <input
              type="number"
              {...register("price", {
                required: "O preço é obrigatório!",
              })}
            />
            {errors.price && (
              <span className="error-message">
                {errors.price.message}
              </span>
            )}
          </div>
          <div className="button-container">
            <button type="submit" className="submit-button">
              Salvar
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
