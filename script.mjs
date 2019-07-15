const toastSandbox = document.querySelector('#toast-sandbox');
updateStyles('#toast-sandbox', undefined, '#toast-styler');

function replaceIDs (text, number) {
  return text.split(`#toast-${number}`).join('std-toast');
}

function updateStyles(selector, number, target) {
  let replacementContent = document.querySelector(selector).value;
  if (target == '#toast-styler') {
    // replace ids with std-toast
    replacementContent = replaceIDs(document.querySelector(selector).value, number);
    toastSandbox.value = replacementContent;
  }
  document.querySelector(target).innerHTML = replacementContent; 
}

toastSandbox.addEventListener('input', () => {updateStyles('#toast-sandbox', undefined, '#toast-styler');});

// Resize textareas
const updateTextareaSize = (area) => {
  const numLines = area.value.split('\n').length;
  area.rows = numLines;
}

const textareaList = document.querySelectorAll('textarea');
textareaList.forEach((area) => {
  updateTextareaSize(area);
  area.addEventListener('input', () => {updateTextareaSize(area);})
});

// DEMO CUSTOM ELEMENT
class DemoContentElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'closed'});
    
    shadowRoot.innerHTML = `
        <div class='demo'>
          <slot name='header'></slot>
          <slot name='description'></slot>
          <div>
            <button id='set-style'>
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
      `;
    
    shadowRoot.querySelector('#set-style').addEventListener('click', () => {
      updateStyles(`#demo-css-${this.number}`, this.number, '#toast-styler');
      updateTextareaSize(toastSandbox);
    });
    
    updateStyles(`#demo-css-${this.number}`, this.number, `#toast-styler-${this.number}`);
    
    const textarea = shadowRoot.querySelector('slot[name="css"]').assignedNodes()[0];
    textarea.addEventListener('input', () => {
      updateStyles(`#demo-css-${this.number}`, this.number, `#toast-styler-${this.number}`);
    });
  }

  get number() {
    return this.getAttribute('number');
  }
}

customElements.define('demo-content', DemoContentElement);
