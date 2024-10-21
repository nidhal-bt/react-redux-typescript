import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAppDispatch } from "../../store/hooks";
import { userLoggedOut } from "../../store/features/auth";

const Navbar = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(userLoggedOut());
  };

  return (
    <div>
      <nav className="flex gap-2">
        <Button variant={"link"}>
          <Link to={"/"}>Home</Link>
        </Button>
        <Button variant={"link"}>
          <Link to={"/add"}>Add</Link>
        </Button>
        <Button onClick={logout}>Logout</Button>
      </nav>
      {children}
    </div>
  );
};

export default Navbar;
