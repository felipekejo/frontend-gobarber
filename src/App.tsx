import React from 'react';
import GlobalStyle from './styles/global';
import Signin from './pages/Signin';
// import SignUp from './pages/Signup';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Signin />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
