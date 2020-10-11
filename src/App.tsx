import React from 'react';
import GlobalStyle from './styles/global';
import Signin from './pages/Signin';
// import SignUp from './pages/Signup';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Diego' }}>
      <Signin />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);
export default App;
