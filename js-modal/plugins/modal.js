function _createModal(options) {
  const modal = document.createElement('div');
  modal.classList.add('pmodal');
  let closeBtnClass = "modal-close";
  // console.log(closeBtnClass);
   options.closable ? closeBtnClass : closeBtnClass="modal-close-hide";
  //  console.log(closeBtnClass);
  modal.insertAdjacentHTML("afterbegin",
    `<div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-header">
          <span class="modal-title">${options.title}</span>
          <span class=${closeBtnClass}> &times; </span>
        </div>
        <div class="modal-body">
          <p>${options.content}</p>
        </div>
        <div class="modal-footer">
          <button class="ok">Ok</button>
          <button class="cansel">Cancel</button>
        </div>
      </div>
    </div>`
  );
  modal.querySelector('.modal-window').style.width = options.width
  document.body.appendChild(modal);

  return modal;
}


$.modal = function (options) {
  const $modal = _createModal(options);
  const AIIMATION_SPEED = 2000;
  let closing = false;
    $modal.querySelector(`.modal-close`).addEventListener('click', () => {
      $.modal.close()
    });

  return {
    open() {
      !closing && $modal.classList.add('open');
    },
    close() {
      closing = true;
      $modal.classList.remove('open');
      $modal.classList.add('hide');
      setTimeout(() => {
        $modal.classList.remove('hide');
        closing = false
      }, AIIMATION_SPEED);
    },
    destroy() {},
    setContent(content) {
      typeof(content) === 'string' 
      ? $modal.querySelector(`.modal-body`).innerText = content
     : {}
    }
  }
}



//  ДЗ
// closable: boolean
// title: string
// content: string
// width: 400px
//  setContent(html : string) публичный метод

// destroy: убрать элемент и слушатели
// закрывашка окна по крестику и серому фону оверлея

// onClose(): void, onOpen(): void
// beforeClose(): boolean
// animate.css