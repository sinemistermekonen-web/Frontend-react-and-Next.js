import  {useLocation, useNavigate} from "react-router-dom";

function SignIn({onSignIn}) {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    function handleSignIn() {
        onSignIn();
        navigate(from,{replace:true});

    }
     return (
        <section>
            <h2>Sign In</h2>
            <p> You must sign in before checking out</p>
        </section>
     )
}
export default SignIn;