export class MangoDate extends HTMLElement {
  // called when element is created, example:
  // const component = new MangoDate()
  // can create shadow DOM, but can't add nodes to normal DOM and can't add/set attributes
  constructor() {
    super();
    //set up logic for things like event listeners, subcriptions to stores, initializing state
    // can set up shadow DOM here. Why/when would I do this? see MDN shadow DOM docs
  }

  // called when element is first added to the DOM, example:
  // document.body.appendChild(component)
  // best practice to set up HTML content here, as well as make requests here
  connectedCallback() {
    const now = new Date();
    this.textContent = now.toLocaleDateString();
  }

  // called when element is removed from the DOM, example:
  // document.body.removeChild(component)
  // unsubscribe from events, stop timers, and unregitering callbacks should happen here
  disconnectedCallback() {
    //logic
  }

  static get observedAttributed() {
    return ["title"];
  }

  // called when a watched attribute is changed
  // watched attributes need to be added to component's static observedAttributes proprty
  attributeChangedCallback(name, oldVlaue, newValue) {
    const title = this.getAttribute("title") || "";
    this.shadowRoot.querySelector(".title").textContent = title;
  }
}

customElements.define("mango-date", MangoDate);
