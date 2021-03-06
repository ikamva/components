import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'sk-box',
  styleUrl: 'box.css',
  shadow: false
})
export class SkBoxComponent {
  @Prop()
  boxtitle: string;
  @Prop()
  description: string;

  render() {
    return (
      <div class="sk-box">
        <h1>{this.boxtitle}</h1>
        <p>{this.description}</p>
      </div>
    );
  }
}
