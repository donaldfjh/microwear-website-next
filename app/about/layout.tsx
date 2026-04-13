import { ReactNode } from 'react';

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', colorScheme: 'dark' }}>
      {children}
    </div>
  );
}