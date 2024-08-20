import { DataSheetDTO } from "./data-sheet";

export type ProductDTO = {
  id: string;
  name: string;
  price: number;
  technicalSheet : DataSheetDTO;
};
