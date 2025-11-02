import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NetworkSecurity from "./pages/NetworkSecurity";
import PenetrationTesting from "./pages/PenetrationTesting";
import WebSecurity from "./pages/WebSecurity";
import Tools from "./pages/Tools";
import TorGuide from "./pages/TorGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/network-security" element={<NetworkSecurity />} />
          <Route path="/penetration-testing" element={<PenetrationTesting />} />
          <Route path="/web-security" element={<WebSecurity />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tor-guide" element={<TorGuide />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
