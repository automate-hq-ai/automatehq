/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'react' {
  export = React;
  export as namespace React;
  
  export interface FC<P = {}> {
    (props: P): React.ReactElement | null;
  }
  
  export interface ReactNode {
    children?: ReactNode;
  }
  
  export interface FormEvent<T = Element> extends SyntheticEvent<T> {}
  export interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
  }
  export interface MouseEvent<T = Element> extends SyntheticEvent<T> {
    clientX: number;
    clientY: number;
  }
  export interface SyntheticEvent<T = Element> {
    currentTarget: EventTarget & T;
    target: EventTarget & T;
    preventDefault(): void;
    stopPropagation(): void;
  }
  export interface EventTarget {
    value?: string;
  }
} 