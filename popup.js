class Popup {
    constructor(options) {
      this.options = options;
      this.popupContainer = document.createElement('div');
      this.popupContainer.classList.add('popup-container');
      this.populatePopup();
      document.body.appendChild(this.popupContainer);
      this.dragElement(this.headerContainer);
    }
    populatePopup() {
      this.headerContainer = document.createElement('div');
      this.headerContainer.classList.add('header-container');
      this.headerContainer.innerHTML = this.options.header;
  
      this.contentContainer = document.createElement('div');
      this.contentContainer.classList.add('content-container');
      this.contentContainer.innerHTML = this.options.content;
  
      this.createInputs();
  
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');
  
      const saveBtn = document.createElement('button');
      saveBtn.innerText = 'Save';
      saveBtn.id = this.options.saveButtonId;
      saveBtn.classList.add('save-button');
  
      const cancelBtn = document.createElement('button');
      cancelBtn.innerText = 'Clear';
      cancelBtn.classList.add('clear-button');
  
      const closeBtn = document.createElement('button');
      closeBtn.innerText = 'Close';
      closeBtn.classList.add('close-button');
      closeBtn.addEventListener('click', () => {
        this.hide();
        open = false;
      });
  
      buttonContainer.appendChild(closeBtn);
      buttonContainer.appendChild(cancelBtn);
      buttonContainer.appendChild(saveBtn);
  
      this.popupContainer.appendChild(this.headerContainer);
      this.popupContainer.appendChild(this.contentContainer);
      this.popupContainer.appendChild(buttonContainer);
    }
    createInputs() {
      if (!this.options.inputType) return;
      for (const inputType of this.options.inputType) {
        const input = document.createElement(inputType.tagName || 'input');
        input.type = inputType.type || 'text';
        if (inputType.text) input.innerText = inputType.text;
        if (inputType.className) input.classList.add(inputType.className);
        if (inputType.id) input.id = inputType.id;
        if (inputType.attributes) {
          for (const attribute in inputType.attributes) {
            input.setAttribute(attribute, inputType.attributes[attribute]);
          }
        }
        this.contentContainer.appendChild(input);
      }
    }
    show() {
      this.popupContainer.style.display = 'block';
    }
    hide() {
      this.popupContainer.style.display = 'none';
    }
    dragElement(el) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        el.onmousedown = e => {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = () => {
                document.onmouseup = null;
                document.onmousemove = null;
            };
            document.onmousemove = e => {
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                el.parentElement.style.top = `${el.parentElement.offsetTop - pos2}px`;
                el.parentElement.style.left = `${el.parentElement.offsetLeft - pos1}px`;
            };
        };
    }
}