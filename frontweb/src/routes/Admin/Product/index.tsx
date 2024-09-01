import ProductTable from "./ProductTable";

export default function Product() {
  
  return (
    <div className="product-container">
      <h1>Produtos</h1>
      <div className="product-table-container">
        <ProductTable />
      </div>
    </div>
  );
}
