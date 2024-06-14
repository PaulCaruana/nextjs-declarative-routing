"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { lightTheme } from "@/app/theme/light";

export default function Providers({
  children,
  isPreviewMode = true,
}: {
  children: React.ReactNode;
  isPreviewMode?: boolean;
}) {
  const [client] = useState(new QueryClient());

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <QueryClientProvider client={client}>
          {children}
          {isPreviewMode && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
