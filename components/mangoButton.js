export class MangoButton extends HTMLElement {
    constructor() {
      super();
      //set up logic for things like event listeners, subcriptions to stores, initializing state
      // can set up shadow DOM here. Why/when would I do this? see MDN shadow DOM docs
    }
  
    connectedCallback() {
    //   const now = new Date();
      var buttonEl = document.createElement("button");
    //   this.textContent = now.toLocaleDateString();
      this.appendChild(buttonEl);
    }
  
    disconnectedCallback() {
      //logic
    }
  
    static get observedAttributed() {
    //   return ["title"];
    }
  
    // called when a watched attribute is changed
    // watched attributes need to be added to component's static observedAttributes proprty
    attributeChangedCallback(name, oldVlaue, newValue) {
    //   const title = this.getAttribute("title") || "";
    //   this.shadowRoot.querySelector(".title").textContent = title;
    }
  }
  
  customElements.define("mango-button", MangoButton);
  