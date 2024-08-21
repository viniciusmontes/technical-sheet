import { useEffect, useState } from "react";
import { MaterialDTO } from "../../../../models/material";
import { requestBackend } from "../../../../utils/requets";
import { formatPrice } from "../../../../utils/formatters";

export default function MaterialTable() {
  const [materials, setMaterials] = useState<MaterialDTO[]>([]);

  useEffect(() => {
    requestBackend({ url: "/materials" }).then((response) => {
      setMaterials(response.data);
    });
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Unidade de Medida</th>
          <th>Custo</th>
          <th></th>
        </tr>
      </thead>
      {materials.map((material) => (
        <tbody>
          <tr>
            <td>{material.id}</td>
            <td>{material.name}</td>
            <td>{material.unitMeasurement}</td>
            <td>{formatPrice(material.cost)}</td>
            <td></td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
