import React from "react";
import './styles.scss';

type Props = { icon: string };

export const Icon: React.FC<Props> = ({ icon }) => {
  return <img alt="icon" className="icon" src={icon} />;
}

export { Icon as default };
