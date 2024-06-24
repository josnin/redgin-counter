import { RedGin, getset, html, watch, event } from 'redgin';


export default class Counter2 extends RedGin {
  counter = getset<number>(0);

  render() {
    return html`
        <button
          ${event('click', () => this.counter++)}
          type="button"
        >
          Counter ${watch(['counter'], () => this.counter)}
        </button>
        
    `;
  }
  
}

// Define the custom element 'sample-counter'
customElements.define('sample-counter', Counter2);

// Declare the custom element globally
declare global {
  interface HTMLElementTagNameMap {
    "sample-counter": Counter2;
  }
}