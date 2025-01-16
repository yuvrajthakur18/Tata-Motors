'use client';

import { DrawerPlacements, useDrawer } from '@core/drawer-views';
import { ActionIcon } from 'rizzui';
import cn from '@core/utils/class-names';
import { ReactNode } from 'react';

interface Props {
  view: ReactNode;
  placement?: DrawerPlacements;
  className?: string;
}

export default function HamburgerButton({ view, placement = 'left', className }: Props) {
  const { openDrawer } = useDrawer();
  return (
    <ActionIcon
      aria-label="Open Sidebar Menu"
      variant="text"
      className={cn('me-3 h-auto w-auto p-0 sm:me-4 xl:hidden', className)}
      onClick={() =>
        openDrawer({
          view,
          placement,
        })
      }
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
      </svg>
    </ActionIcon>
  );
}
