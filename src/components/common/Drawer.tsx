import { XIcon } from '@heroicons/react/outline';

import type * as React from 'react';

export type Props = { isOpen: boolean; onClose?: () => void };

const Drawer: React.FC<React.PropsWithChildren<Props>> = ({ children, isOpen, onClose }) => {
  const overlayClass = isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none';
  const drawerClass = isOpen ? 'translate-x-0' : '-translate-x-full';

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 cursor-pointer transition-opacity ${overlayClass}`}
        onClick={() => onClose?.()}
      />
      <aside className={`fixed inset-0 w-full sm:w-96 bg-white transition-transform ${drawerClass}`}>
        <div className="sm:hidden p-4">
          <button className="block md:hidden w-11 h-11 ml-auto -mr-1 rounded-full hover:bg-gray-100 focus:bg-gray-100">
            <XIcon className="w-6 h-6 mx-auto" onClick={() => onClose?.()} />
          </button>
        </div>

        {children}
      </aside>
    </>
  );
};

export default Drawer;