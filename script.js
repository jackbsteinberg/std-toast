const toastSandbox = document.querySelector('#toast-sandbox');
function updateStyles(selector) {
  if (toastSandbox !== document.querySelector(selector))
    toastSandbox.textContent = document.querySelector(selector).textContent;
  document.querySelector('#toast-styler').innerHTML = toastSandbox.value;
};
updateStyles('#toast-sandbox');

toastSandbox.addEventListener('input', () => {updateStyles('#toast-sandbox');});

toastSandbox.addEventListener('input', () => {console.log(toastSandbox.textContent)});

// Resize textareas
const updateTextareaSize = (area) => {
  const numLines = area.value.split('\n').length;
  area.style.minHeight = `${numLines*(1.15)}em`;
}

const textareaList = document.querySelectorAll('textarea');
textareaList.forEach((area) => {
  updateTextareaSize(area);
  area.addEventListener('input', () => {updateTextareaSize(area);})
});

// DEMO CUSTOM ELEMENT
const stylesheet = new CSSStyleSheet();
      stylesheet.replaceSync(`
        .code-area {
        width: 100%;
        min-height: 10em;
        border: solid 1px;
        padding: 5px;
        box-shadow: 1px 4px 2px -1px rgba(200, 200, 250, 0.7); 
        font-size: 14px;
        resize: none;
        font-family: monospace;
      }
      `);

class DemoContentElement extends HTMLElement {
  static observedAttributes = ['number'];

  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'closed'});
    
    shadowRoot.adoptedStyleSheets = [stylesheet];
    
    shadowRoot.innerHTML = `
        <div class='demo'>
          <slot name='header'></slot>
          <slot name='description'></slot>
          <div class='column-container'>
            <button onclick="updateStyles('#demo-css-${this.number}');">
              Set Sandbox Style
            </button>
            &emsp;
            <button onclick="document.querySelector('#toast-${this.number}').toggle();">
              Toggle Toast
            </button>
          </div>
          <br>
          <slot name='css'></slot>
        </div>
      `
  }

  get number() {
    return this.getAttribute('number');
  }
}

customElements.define('demo-content', DemoContentElement);
