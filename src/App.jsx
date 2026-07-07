import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyle from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClint = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClint}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout></AppLayout>}>
            <Route index element={<Navigate to="dashboard" replace />}></Route>
            <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="bookings" element={<Bookings></Bookings>}></Route>
            <Route path="cabins" element={<Cabins></Cabins>}></Route>
            <Route path="users" element={<Users></Users>}></Route>
            <Route path="settings" element={<Settings></Settings>}></Route>
            <Route path="account" element={<Account></Account>}></Route>
          </Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
