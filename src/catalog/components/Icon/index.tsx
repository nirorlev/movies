import React from "react";
import './styles.scss';

type Props = { logo: string };

const Icon: React.FC<Props> = ({ logo }) => {
  return <span className={`logo logo-${logo}`} />;
}

export default Icon;
