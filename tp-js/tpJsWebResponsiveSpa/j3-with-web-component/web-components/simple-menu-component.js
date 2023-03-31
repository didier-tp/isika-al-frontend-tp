class SimpleMenuComponent extends HTMLElement {
  
  constructor() {
    super()
    this.items = [ 'welcome' , 'menuItem2'];
    this.navEvent = new CustomEvent("nav", {
      bubbles: true,
      cancelable: false,
      composed: true
    });
  }

  initComponentInnerHtml(){
    this.componentCssTemplateString = `
    .withCenterItems { align-items : center;}
    .withStartItems { align-items : start;}
    
    .flexAllInColumnDir {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .myMenuItem {
        flex: 0;
        margin: 2px;
        border-radius: 10px 0 10px 0;
        background: #f5f5f5;
        color: #555;
        font: bold 12px Verdana;
        padding: 5px 3px 5px 3px;
        min-width : 120px;
      }
    `

    this.componentHtmlTemplateString = `
    <div class="flexAllInColumnDir withCenterItems" id="mySimpleMenu">
     <!--
      <button class="myMenuItem">menu1</button>
      <button class="myMenuItem">menu3</button>
     -->
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
    return ['items'];
  }

// attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    if(property=='items'){
        this.items = eval(newValue);
    }else{
        this[ property ] = newValue;
    }
  }




  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });//only accessible by web component
    //const shadow = this.attachShadow({ mode: 'open' });//acessible outside with Element.shadowRoot
    this.initComponentInnerHtml();
    shadow.innerHTML = this.componentInnerHtml;
    let mySimpleMenu = shadow.getElementById("mySimpleMenu");
    for(let i in this.items ){
      let menuItem = this.items[i]
      //console.log("mi=" + menuItem );
      let btnMenuItem = document.createElement("button");
      btnMenuItem.innerHTML=menuItem;
      btnMenuItem.setAttribute("class","myMenuItem");
      btnMenuItem.addEventListener("click" , (evt)=>{
        this.navEvent.value = evt.target.innerText;
        this.dispatchEvent(this.navEvent);
      })
      mySimpleMenu.appendChild(btnMenuItem);
    }
  }

}

customElements.define("simple-menu-component", SimpleMenuComponent)