/**
 * React Query set-up
 * - Wrapping the children of the App component in a QueryClientProvider
 * - Create a queryClient using new QueryClient
 * - Pass queryClient as a value to client in the QueryClientProvider
 * 
 * React Query - Set Data
 * - POST request with React Query
 * - Invalidate queries( invalidateQueries )
 * - Update queries( setQueryData )
 */
import { QueryClientProvider, QueryClient } from "react-query";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </>
  );
}
