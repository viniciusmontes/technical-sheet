import { MaterialQuantityDTO } from "./material-quantity";

export type DataSheetDTO = {
    id : string,
    materials: MaterialQuantityDTO[];
    totalCost : number
}