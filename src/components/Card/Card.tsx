import React from 'react';

import './Card.css';
import { Props } from '../../interfaces/props.interface';

export const Card: React.FC<Props & { className: string }> = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>
}
