import * as THREE from 'three';
import * as React from 'react';
import { TinyEmitter } from 'tiny-emitter';
import { NamedArrayTuple } from './three-types';
import { ReactThreeFiber } from '.';
import { RectReadOnly, Options as ResizeOptions } from 'react-use-measure';
export declare type Camera = THREE.OrthographicCamera | THREE.PerspectiveCamera;
export declare function isOrthographicCamera(def: THREE.Camera): def is THREE.OrthographicCamera;
export interface Intersection extends THREE.Intersection {
    eventObject: THREE.Object3D;
}
declare type ThreeEvent<T> = T & Intersection & {
    intersections: Intersection[];
    stopped: boolean;
    unprojectedPoint: THREE.Vector3;
    ray: THREE.Ray;
    camera: Camera;
    stopPropagation: () => void;
    sourceEvent: T;
    delta: number;
};
export declare type PointerEvent = ThreeEvent<React.PointerEvent>;
export declare type MouseEvent = ThreeEvent<React.MouseEvent>;
export declare type WheelEvent = ThreeEvent<React.WheelEvent>;
declare type DomEvent = PointerEvent | MouseEvent | WheelEvent;
export declare type RenderCallback = (state: CanvasContext, delta: number) => void;
export declare type Viewport = {
    width: number;
    height: number;
    factor: number;
    distance: number;
};
export declare type ViewportData = Viewport & ((camera: Camera, target: THREE.Vector3) => Viewport);
export declare type SharedCanvasContext = {
    gl: THREE.WebGLRenderer;
    aspect: number;
    subscribe: (callback: React.MutableRefObject<RenderCallback>, priority?: number) => () => void;
    setDefaultCamera: (camera: Camera) => void;
    invalidate: () => void;
    intersect: (event?: DomEvent) => void;
    camera: Camera;
    raycaster: THREE.Raycaster;
    mouse: THREE.Vector2;
    clock: THREE.Clock;
    scene: THREE.Scene;
    size: RectReadOnly;
    viewport: ViewportData;
    events: DomEventHandlers;
    forceResize: () => void;
};
export declare type Subscription = {
    ref: React.MutableRefObject<RenderCallback>;
    priority: number;
};
export declare type CanvasContext = SharedCanvasContext & {
    captured: Intersection[] | undefined;
    noEvents: boolean;
    ready: boolean;
    active: boolean;
    manual: number;
    colorManagement: boolean;
    vr: boolean;
    concurrent: boolean;
    invalidateFrameloop: boolean;
    frames: number;
    subscribers: Subscription[];
    initialClick: NamedArrayTuple<(x: number, y: number) => void>;
    initialHits: THREE.Object3D[];
    pointer: TinyEmitter;
};
export declare type FilterFunction = (items: THREE.Intersection[], state: SharedCanvasContext) => THREE.Intersection[];
export declare type ComputeOffsetsFunction = (event: DomEvent, state: SharedCanvasContext) => {
    offsetX: number;
    offsetY: number;
};
export interface CanvasProps {
    children: React.ReactNode;
    vr?: boolean;
    webgl1?: boolean;
    concurrent?: boolean;
    shadowMap?: boolean | Partial<THREE.WebGLShadowMap>;
    colorManagement?: boolean;
    orthographic?: boolean;
    resize?: ResizeOptions;
    invalidateFrameloop?: boolean;
    updateDefaultCamera?: boolean;
    noEvents?: boolean;
    gl?: Partial<THREE.WebGLRendererParameters>;
    camera?: Partial<ReactThreeFiber.Object3DNode<THREE.Camera, typeof THREE.Camera> & ReactThreeFiber.Object3DNode<THREE.PerspectiveCamera, typeof THREE.PerspectiveCamera> & ReactThreeFiber.Object3DNode<THREE.OrthographicCamera, typeof THREE.OrthographicCamera>>;
    raycaster?: Partial<THREE.Raycaster> & {
        filter?: FilterFunction;
        computeOffsets?: ComputeOffsetsFunction;
    };
    pixelRatio?: number | [number, number];
    onCreated?: (props: CanvasContext) => Promise<any> | void;
    onPointerMissed?: () => void;
}
export interface UseCanvasProps extends CanvasProps {
    gl: THREE.WebGLRenderer;
    size: RectReadOnly;
    forceResize: () => void;
}
export declare type DomEventHandlers = {
    onClick(e: any): void;
    onContextMenu(e: any): void;
    onDoubleClick(e: any): void;
    onWheel(e: any): void;
    onPointerDown(e: any): void;
    onPointerUp(e: any): void;
    onPointerLeave(e: any): void;
    onPointerMove(e: any): void;
    onGotPointerCaptureLegacy(e: any): void;
    onLostPointerCapture(e: any): void;
};
export declare const stateContext: React.Context<SharedCanvasContext>;
export declare const useCanvas: (props: UseCanvasProps) => DomEventHandlers;
export {};
