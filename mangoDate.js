class MangoDate extends HTMLElement {

    // called when element is first added to the DOM
    connectedCallback() {
        const now = new Date();
        this.textContent = now.toLocaleDateString();
    }

    // called when element is removed from the DOM
    disconnectedCallback() {
        //logic
    }

    // called when a watched attribute is changed
    // watched attributes need to be added to component's static observedAttributes proprty
    attributeChangedCallback() {
        //logic
    }
}

customElements.define('mango-date', MangoDate);