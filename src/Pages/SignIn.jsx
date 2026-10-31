import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function SignIn() {
  const { signIn } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  function handleSignIn() {
    signIn();
    navigate(from, { replace: true });
  }

  return (
    <section>
      <h2>Sign In</h2>

      <p>You must sign in before checking out.</p>

      <button onClick={handleSignIn}>
        Sign In
      </button>
    </section>
  );
}

export default SignIn;