import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import VendorsCard from "./components/VendorsCard";
import Header from "./components/Header";
import { VendorProvider } from "./context/VendorsContext";

function App() {
  return (
    <VendorProvider>
      <Box>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Container>
            <VendorsCard />
          </Container>
        </Box>
      </Box>
    </VendorProvider>
  );
}

export default App;
