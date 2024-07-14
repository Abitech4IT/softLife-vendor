import { createContext, useContext, useEffect, useState } from "react";

const VendorsContext = createContext();
const baseURL = "https://apisoftlifetest.woodlodge.com.ng/api/v1/user/vendors";

function VendorProvider({ children }) {
  const [vendor, setVendor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchVendors() {
      try {
        setIsLoading(true);
        const res = await fetch(baseURL);
        const data = await res.json();
        setVendor(data);
      } catch {
        console.log("There was an error fetching data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchVendors();
  }, []);

  return (
    <VendorsContext.Provider value={{ vendor, isLoading }}>
      {children}
    </VendorsContext.Provider>
  );
}

function useVendor() {
  const context = useContext(VendorsContext);
  if (context === undefined)
    throw new Error("VendorContext was used ouside the VendorProvider");
  return context;
}

export { VendorProvider, useVendor };
