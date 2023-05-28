import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext);

    const handleSignIn = () => {
        signInWithGoogle()
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .then(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleSignIn} className="btn btn-circle btn-outline">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;