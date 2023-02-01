import GlobalState from "./global/GlobalState";
import { Router } from "./router/Router";
import {GlobalStyle, Page} from './Styled.js';

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Page>
        <Router />
      </Page>
    </GlobalState>
  );
}

export default App;
