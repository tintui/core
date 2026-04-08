import { ReactNode } from 'react';
import './globalStyles.scss';

export function TintUIProvider({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}
