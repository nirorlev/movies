import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import pages from "./mock";
import { DeviceData } from "./type";
import { U } from "../../../commons";
import './styles.scss'

type Props = { isExtraSmall?: boolean, isSmall?: boolean };

const icon = ["search"];
const icons = ["bell", "search", "user"];

const Navbar = ({ isSmall, isExtraSmall }: Props) => {
  const [links, setLinks] = useState<DeviceData>({});

  useEffect(() => {
    setLinks((isSmall ? pages.mobile : pages.desktop));
  }, [isSmall]);

  return (
    <div className="navbar">
      <Link to="/home">
        <Icon logo="netflix" />
      </Link>
      <div className="navbar__links">
        {Object.keys(links).map((k: string) => (
          <Link key={k} to={k} className="link">{links[k]}</Link>
        ))}
      </div>
      <div className="navbar__options">
        {(isExtraSmall ? icon : icons).map(el => <button onClick={U.fallbackHandler}><Icon logo={el} /></button>)}
      </div>
    </div>
  );
}

export default Navbar;
