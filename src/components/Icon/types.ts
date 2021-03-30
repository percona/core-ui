import React from 'react';

export type AvailableIcons = 'plusSquare' | 'minusSquare' | 'selectedSquare' | 'unselectedSquare';

export type Icons = {
  [I in AvailableIcons]: React.ElementType;
}
