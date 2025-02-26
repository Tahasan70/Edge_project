import { useState, useEffect } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch products from the mock API
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Handle product deletion
  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.ProductID !== productId);
    setProducts(updatedProducts);
    alert("Product deleted successfully!");
  };

  // Filter products based on search input
  const filteredProducts = products.filter(
    (product) =>
      product.ProductName.toLowerCase().includes(search.toLowerCase()) ||
      product.ProductCategory.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 2,
        backgroundColor: "#ada7a6",
      }}
    >
      {/* Page Header */}
      <Typography variant="h4" component="h1" gutterBottom>
        Products API
      </Typography>

      {/* Search Box */}
      <TextField
        label="Search Products"
        variant="outlined"
        fullWidth
        margin="normal"
        sx={{ maxWidth: 600 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Products Table */}
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 800, marginTop: 3, boxShadow: 3 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Product Name</strong></TableCell>
              <TableCell><strong>Category</strong></TableCell>
              <TableCell><strong>Price ($)</strong></TableCell>
              <TableCell><strong>Stock Quantity</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <TableRow
                  key={product.ProductID}
                  style={product.StockQuantity < 10 ? { backgroundColor: "#ffcccb" } : {}}
                >
                  <TableCell>{product.ProductName}</TableCell>
                  <TableCell>{product.ProductCategory}</TableCell>
                  <TableCell>{product.ProductPrice}</TableCell>
                  <TableCell>{product.StockQuantity}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => deleteProduct(product.ProductID)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default App;
