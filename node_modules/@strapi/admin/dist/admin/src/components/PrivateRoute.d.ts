import * as React from 'react';
type PropsOf<T> = T extends React.ComponentType<infer P> ? P : object;
type PrivateRouteProps<TComponent extends React.ElementType> = {
    component: TComponent;
    path: string;
} & PropsOf<TComponent>;
declare const PrivateRoute: <TComponent extends React.ElementType<any>>({ component: Component, path, ...rest }: PrivateRouteProps<TComponent>) => import("react/jsx-runtime").JSX.Element;
export { PrivateRoute };
