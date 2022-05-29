import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import pages from "./mock";
import { DeviceData } from "./type";
import { fallbackHandler, useDevice } from "../../../commons";
import './styles.scss'

const icon = ["search"];
const icons = ["bell", "search", "user"];

export const Navbar: React.FC = () => {
  const { issm, isxs } = useDevice();
  const [links, setLinks] = useState<DeviceData>({});

  useEffect(() => {
    setLinks((issm || isxs) ? pages.mobile : pages.desktop);
  }, [issm, isxs]);

  return (
    <div className="navbar">
      <Link to="/home">
        <Icon icon="netflix" />
      </Link>
      <div className="navbar__links">
        {Object.keys(links).map((k: string) => (
          <Link key={k} to={k} className="link">{links[k]}</Link>
        ))}
      </div>
      <div className="navbar__options">
        {(isxs ? icon : icons).map(
          (el, idx) => <button key={idx} onClick={fallbackHandler}><Icon icon={el} /></button>
        )}
      </div>
    </div>
  );
}

export { Navbar as default };
