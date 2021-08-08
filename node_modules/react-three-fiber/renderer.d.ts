import * as THREE from 'three';
import * as React from 'react';
import Reconciler from 'react-reconciler';
import { CanvasContext } from './canvas';
export declare type GlobalRenderCallback = (timeStamp: number) => boolean;
export interface ObjectHash {
    [name: string]: object;
}
export declare const addEffect: (callback: GlobalRenderCallback) => () => void;
export declare const addAfterEffect: (callback: GlobalRenderCallback) => () => void;
export declare const addTail: (callback: GlobalRenderCallback) => () => void;
export declare function renderGl(state: React.MutableRefObject<CanvasContext>, timestamp: number, repeat?: number, runGlobalEffects?: boolean): number;
export declare function invalidate(state?: React.MutableRefObject<CanvasContext> | boolean, frames?: number): void;
export declare function forceResize(): void;
export declare const extend: (objects: object) => void;
export declare function applyProps(instance: any, newProps: any, oldProps?: any, accumulative?: boolean): void;
declare const Renderer: Reconciler.Reconciler<unknown, unknown, unknown, unknown>;
export declare function render(element: React.ReactNode, container: THREE.Object3D, state?: React.MutableRefObject<CanvasContext>): unknown;
export declare function unmountComponentAtNode(container: THREE.Object3D, callback?: (c: THREE.Object3D) => void): void;
export declare function createPortal(children: React.ReactNode, containerInfo: any, implementation?: any, key?: any): React.ReactNode;
export { Renderer };
