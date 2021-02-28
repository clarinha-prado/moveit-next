import { LoginForm } from '../components/LoginForm';

import { LoginContext, LoginProvider } from '../contexts/LoginContext';
import { useContext } from 'react';

export default function Home() {

  const { isLoggedIn } = useContext(LoginContext);
  console.log("início da home page - recuperado do contexto: " + isLoggedIn);

  return (
    <LoginProvider x={isLoggedIn}>
      <LoginForm />
    </LoginProvider>
  )
}
