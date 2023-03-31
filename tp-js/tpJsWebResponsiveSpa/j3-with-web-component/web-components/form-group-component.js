class FormGroupComponent extends HTMLElement {
  
  constructor() {
    super()
    this.label=""; //default value
  }

  initComponentInnerHtml(){
    this.componentCssTemplateString = `
    .f-form-group-wrap {
      display: flex;
      flex-flow: row wrap;
    }
    
    label.f-align {
      width: 12em;
      display: inline-block;
      margin-left: 0.3em;
      flex: 0 0 12em;
    }
    
    .f-align {
      margin-left: 0.3em;
      flex: 1 1 auto;
    }
    
    ::slotted(.f-max-size) {
      width: 98%;
    }

    ::slotted(input[type='text']) {
      width: 98%;
    }

    ::slotted(span) {
      display: inline-block; width: 98%;
      min-width : 12em;
    }
    

    `

    let fieldLabel = (this.label === "")?"":this.label+":";

    this.componentHtmlTemplateString = `
    <div class="f-form-group-wrap">
      <label  class="f-align">${fieldLabel}</label>
      <div class="f-align">
        <slot><input type="text"  class="f-max-size" id="field_id" /></slot>
      </div> 
    </div>
    `

    this.componentInnerHtml = `
    <style>
    ${this.componentCssTemplateString}
    </style>

    ${this.componentHtmlTemplateString}
    `
  }

  // component attributes
  static get observedAttributes() {
    return ['label'];
  }

// attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[ property ] = newValue;
  }




  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });//only accessible by web component
    //const shadow = this.attachShadow({ mode: 'open' });//acessible outside with Element.shadowRoot
    this.initComponentInnerHtml();
    shadow.innerHTML = this.componentInnerHtml;
  }

}

customElements.define("f-group", FormGroupComponent)