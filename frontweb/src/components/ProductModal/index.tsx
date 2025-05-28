import React, { useState } from "react";
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
    setValue,
    formState: { errors },
  } = useForm<ProductDTO>();

  const [priceInput, setPriceInput] = useState("");

  function moneyMask(value: string) {
    value = value.replace(/\D/g, "");
    const options = { minimumFractionDigits: 2 };
    const result = new Intl.NumberFormat("pt-BR", options).format(
      parseFloat(value) / 100
    );
    return "R$ " + result;
  }

  const handlePriceChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const masked = moneyMask(e.target.value);
    setPriceInput(masked);
    // Valor numérico real (sem R$ e pontuação) usado para enviar ao backend
    const numericValue = parseFloat(
      masked.replace("R$", "").replace(/\./g, "").replace(",", ".").trim()
    );
    setValue("price", numericValue, { shouldValidate: true });
  };

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
              type="text"
              value={priceInput}
              placeholder="R$0,00"
              onChange={handlePriceChange}
            />
            {errors.price && (
              <span className="error-message">{errors.price.message}</span>
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
