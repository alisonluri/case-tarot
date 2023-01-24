import { Router } from "./router/Router";
import {GlobalStyle, Page} from './Styled.js';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Page>
        <Router />
      </Page>
    </div>
  );
}

export default App;
