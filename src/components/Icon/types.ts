import React, { FC } from 'react';

export type AvailableIcons = 'plusSquare' | 'minusSquare' | 'selectedSquare' | 'unselectedSquare';

export type Icons = {
  [I in AvailableIcons]: FC<React.SVGProps<SVGSVGElement>>;
}
