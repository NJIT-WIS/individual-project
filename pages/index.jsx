import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'MyDesignSystemLightTheme';
import Desktop1Comp from 'Desktop1/Desktop1';

const Home = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <main>
            <Desktop1Comp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Home;
