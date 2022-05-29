import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import pages from "./mock";
import { DeviceData } from "./type";
import { fallbackHandler } from "../../../commons";
import './styles.scss'

type Props = { isExtraSmall?: boolean, isSmall?: boolean };

const icon = ["search"];
const icons = ["bell", "search", "user"];

export const Navbar: React.FC<Props> = ({ isSmall, isExtraSmall }: Props) => {
  const [links, setLinks] = useState<DeviceData>({});

  useEffect(() => {
    setLinks((isSmall || isExtraSmall) ? pages.mobile : pages.desktop);
  }, [isSmall, isExtraSmall]);

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
        {(isExtraSmall ? icon : icons).map(
          (el, idx) => <button key={idx} onClick={fallbackHandler}><Icon icon={el} /></button>
        )}
      </div>
    </div>
  );
}

export { Navbar as default };
