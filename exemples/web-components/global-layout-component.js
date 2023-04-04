class GlobalLayoutComponent extends HTMLElement {
  
  constructor() {
    super()
    this.mainTitle="MyApp"; //default value
    this.toggleM=false;
  }

  initComponentInnerHtml(){
    this.componentCssTemplateString = `
    .flexAllInColumnDir {
      height: 100%; width: 100%;
      display: flex; flex-direction: column;
      }
    .flexAllInRowDir {
        height: 100%;   width: 100%;
        display: flex;  flex-direction: row;
      }
    .stickyInFlex{
      flex-shrink: 0;
    }
    .remainingContentInFlex{
      flex-grow: 1; 
      overflow-y: auto;
    }
    .withCenterItems { align-items : center;}
    .withPadding { padding-left : 6px; padding-right : 12px;}
    .withStartItems { align-items : start;}
    .defaultHeader{ background : lightgrey; }
    .defaultFooter{ background : black; color: white;  }
    .defaultLateral{ background : lightblue; display:none; } 
    #toggleMenuBtn { font-weight:bold; font-size: 24pt; background-color : lightblue; margin-left: 4px;}
    `

    this.componentHtmlTemplateString = `
    <div class="flexAllInColumnDir">
      <div class="stickyInFlex defaultHeader" >
        <div class="flexAllInRowDir withCenterItems">
          <div class="stickyInFlex" >
             <button  id="toggleMenuBtn" >&gt;</button>
          </div>
          <div class="remainingContentInFlex">
             <slot name="mainHeader">myHeader</slot>
          </div>
        </div>
      </div>
      <div class="remainingContentInFlex">
        <div class="flexAllInColumnDir">
           <div class="flexAllInRowDir remainingContentInFlex">
              <div class="stickyInFlex defaultLateral" id="lateralPanel">
                <slot name="lateralPanel">lateralPanel</slot>
              </div>
              <div class="remainingContentInFlex withMargin withPadding">
                <slot name="mainContent">mainContent</slot>
              </div>
            </div>
            <div class="defaultFooter stickyInFlex">
              <slot name="mainFooter">mainFooter</slot>
            </div>
        </div>
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
    return ['mainTitle'];
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
    shadow.getElementById("toggleMenuBtn").addEventListener("click", (evt)=>{
        this.toggleM= !this.toggleM;
        shadow.getElementById("toggleMenuBtn").innerHTML=this.toggleM?"&lt;":"&gt;";
        shadow.getElementById("lateralPanel").style.display=this.toggleM?"flex":"none";
    });
  }

}

customElements.define("global-layout-component", GlobalLayoutComponent)