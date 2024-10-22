import { useContext } from "react";
import { CretContexts } from "../Contextts/Contextts";

function Header() {
  let ourContext = useContext(CretContexts);
  return (
    <>
     <header className="header">
     <h1>NOTE APP</h1>
     <input type="search" name="userSearch" id="" placeholder="Serach Your Note" value={ourContext?.userSearch} onChange={(e) => ourContext?.handleValue(e)}/>
     </header>
    </>
  )
}

export default Header;
