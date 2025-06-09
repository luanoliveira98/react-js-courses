import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { OrderContextProvider } from "./contexts/OrderContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <OrderContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </OrderContextProvider>
    </ThemeProvider>
  );
}

export default App;
