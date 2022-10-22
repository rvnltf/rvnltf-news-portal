import { useSelector } from "react-redux";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import themes from "./themes";
import Routes from "./routes";

function App() {
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
