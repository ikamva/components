/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface SkBox {
    'boxTitle': string;
    'description': string;
  }
  interface SkBoxAttributes extends StencilHTMLAttributes {
    'boxTitle'?: string;
    'description'?: string;
  }

  interface MyComponent {
    'first': string;
    'last': string;
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    'first'?: string;
    'last'?: string;
    'middle'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'SkBox': Components.SkBox;
    'MyComponent': Components.MyComponent;
  }

  interface StencilIntrinsicElements {
    'sk-box': Components.SkBoxAttributes;
    'my-component': Components.MyComponentAttributes;
  }


  interface HTMLSkBoxElement extends Components.SkBox, HTMLStencilElement {}
  var HTMLSkBoxElement: {
    prototype: HTMLSkBoxElement;
    new (): HTMLSkBoxElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLElementTagNameMap {
    'sk-box': HTMLSkBoxElement
    'my-component': HTMLMyComponentElement
  }

  interface ElementTagNameMap {
    'sk-box': HTMLSkBoxElement;
    'my-component': HTMLMyComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
