
import { CssBaseline, ThemeProvider } from "@mui/material";
import {ColorModeContext, useMode} from "./theme";
import TopBar from "./component/global/TopBar";
import SideBar from "./component/global/SideBar";



function App() {
    const [theme, colorMode] = useMode();

    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
                <SideBar />
                <main className='content'>
                    <TopBar />
                </main>
            </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default App;
