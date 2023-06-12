import * as THREE from "three";

declare module "three" {
  export class CSS2DObject extends THREE.Object3D {
    constructor(element: HTMLElement);
  }
}
