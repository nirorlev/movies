import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import pages from "./mock";
import { DeviceData } from "./type";
import './styles.scss'

type Props = { isPortable: boolean };

const Navbar = ({ isPortable }: Props) => {
  const [links, setLinks] = useState<DeviceData>({});

  useEffect(() => {
    setLinks((isPortable ? pages.mobile : pages.desktop));
  }, [isPortable]);

  return (
    <div className="navbar">
      <Icon />
      {Object.keys(links).map((k: string) => (
        <Link key={k} to={k} className="link">{links[k]}</Link>
      ))}
    </div>
  );
}

export default Navbar;
