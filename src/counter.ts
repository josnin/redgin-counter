import { RedGin, getset, html, watch, event } from 'redgin';


export default class Counter2 extends RedGin {
  
  counter = getset<number>(0);
  

  render() {
    return html`
    <div>
    
    <div class="card">
    
      <button
        ${ event('click', () => this.counter++ ) } 
        type="button">
          Counter ${ watch(['counter'], () =>  this.counter  )}
      </button>
        
    
  </div>
    `;
  }
  

  

 
}

customElements.define('sample-counter', Counter2);

declare global {
	interface HTMLElementTagNameMap {
		"sample-counter": Counter2;
	}
}
