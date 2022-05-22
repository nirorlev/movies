import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useDevice from "../../../commons/effects/useDevice";
import Icon from "../Icon";
import pages from "./mock";
import { DeviceData } from "./type";

const Navbar = () => {
  const { isPortable } = useDevice();
  const [links, setLinks] = useState<DeviceData>({});

  useEffect(() => {
    setLinks((isPortable ? pages.mobile : pages.desktop));
  }, [isPortable]);

  return (
    <div className="navbar">
      <Icon />
      {Object.keys(links).map((k: string) => (
        <Link key={k} to={k}>{links[k]}</Link>
      ))}
    </div>
  );
}

export default Navbar;
