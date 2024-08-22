import { MaterialDTO } from "../../../../models/material";
import { formatPrice } from "../../../../utils/formatters";

type Props = {
  materials : MaterialDTO[]
}
export default function MaterialTable({materials} : Props) {
  
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
      <tbody>
        {materials.map((material) => (
          <tr key={material.id}>
            <td>{material.id}</td>
            <td>{material.name}</td>
            <td>{material.unitMeasurement}</td>
            <td>{formatPrice(material.cost)}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
