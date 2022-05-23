import React from "react";
import './styles.scss';

type Props = { logo: string };

const Icon = ({ logo }: Props) => {
  return <span className={`logo logo-${logo}`} />;
}

export default Icon;
