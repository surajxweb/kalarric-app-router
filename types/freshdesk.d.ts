// types/freshdesk.d.ts

declare global {
  interface Window {
    FreshworksWidget: {
      (action: string, ...args: any[]): void;
      q: any[];
    };
  }
}

export {};
