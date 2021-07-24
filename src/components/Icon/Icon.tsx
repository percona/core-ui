import React, { FC } from 'react';
import { AvailableIcons, Icons } from './types';

import {
  MinusSquare,
  PlusSquare,
  EnabledSquare,
  DisabledSquare,
} from '../../shared/icons';

// TODO: improve this mapping
const icons: Icons  = {
  plusSquare: PlusSquare,
  minusSquare: MinusSquare,
  selectedSquare: EnabledSquare,
  unselectedSquare: DisabledSquare,
};

interface IconProps extends React.SVGProps<SVGSVGElement>{
  name: AvailableIcons;
}

export const Icon: FC<IconProps> = ({ name, ...rest }) => {
  const IconComponent = icons[name];

  return <IconComponent {...rest} />;
};
