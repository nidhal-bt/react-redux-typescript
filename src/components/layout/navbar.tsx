import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <nav className="flex gap-2">
        <Button variant={"link"}>
          <Link to={"/"}>Home</Link>
        </Button>
        <Button variant={"link"}>
          <Link to={"/add"}>Add</Link>
        </Button>
        {/* <Link to={"/"}></Link> */}
      </nav>
      {children}
    </div>
  );
};

export default Navbar;
