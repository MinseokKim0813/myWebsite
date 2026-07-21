import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LocaleProvider } from "./i18n/locale";

const queryClient = new QueryClient();

// GitHub Pages serves from /repoName/ — use build-time base path when set.
function getBasename(): string {
  const fromEnv = import.meta.env.VITE_BASE_PATH;
  if (typeof fromEnv === "string" && fromEnv.length > 0) {
    return fromEnv.startsWith("/") ? fromEnv : `/${fromEnv}`;
  }

  const segments = window.location.pathname.split("/").filter(Boolean);
  if (segments.length === 0) return "";
  if (segments[0] === "index.html") return "";
  return `/${segments[0]}`;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={getBasename()}>
        <Routes>
          <Route
            path="/"
            element={
              <LocaleProvider locale="en">
                <Index />
              </LocaleProvider>
            }
          />
          <Route
            path="/ko"
            element={
              <LocaleProvider locale="ko">
                <Index />
              </LocaleProvider>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
