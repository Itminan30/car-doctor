import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => console.log("user successfully logged out"))
            .catch(error => {
                console.log(error);
            })
    }
    const navItems = <>
        <li>
            <Link className="font-semibold md:font-bold md:text-lg text-[#444444]" to="/">Home</Link>
        </li>
        <li>
            <Link className="font-semibold md:font-bold md:text-lg text-[#444444]" to="/">About</Link>
        </li>
        {
            user ?
                <li>
                    <Link className="font-semibold md:font-bold md:text-lg text-[#444444]" to="/bookings">Service</Link>
                </li> :
                <></>
        }
        <li>
            <Link className="font-semibold md:font-bold md:text-lg text-[#444444]" to="/">Blog</Link>
        </li>
        <li>
            <Link className="font-semibold md:font-bold md:text-lg text-[#444444]" to="/">Contact</Link>
        </li>
    </>
    return (
        <div className="navbar md:w-4/5 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="" to="/">
                    <img className="w-3/5 md:w-full" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-3">
                    {user?.displayName ?
                        <div className="text-error font-bold text-xl border border-error px-3 py-2 rounded">{user.displayName}</div> :
                        <></>
                    }
                    {user ?
                        <button onClick={handleLogout} className="btn btn-outline btn-error text-xs font-semibold md:text-base rounded">
                            Logout
                        </button> :
                        <Link to="/login" className="btn btn-outline btn-error text-xs font-semibold md:text-base rounded">
                            Login
                        </Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;