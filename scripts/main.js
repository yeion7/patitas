document.addEventListener('DOMContentLoaded', function () {
  var menu = document.getElementById('toggle');
  var items = document.querySelector('.nav-items');

  menu.addEventListener('click', function (evt) {
    evt.preventDefault();
    items.classList.toggle('hidden');
  });
});

var adopts = document.querySelectorAll('.adopt');
var modal = document.querySelector('.modal');


Array.prototype.forEach.call(adopts, function (item) {
  item.addEventListener('click', function () {
    _this = this;
    var modalContainer = `
    <div class="modal-container">
      <a class="modal-close">X</a>
      <img src="${this.src}" class="modal-img"/>
      <h3 class="modal-name">Artur</h3>
      <p class="modal-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo deleniti, veniam. Debitis explicabo exercitationem ipsa nesciunt dolor commodi quisquam sequi blanditiis. Quis architecto aliquid ut vitae consequuntur perferendis quos, ad.
      </p>
      <button class="modal-button">Adoptar</button>

     </div>`;

    modal.classList.toggle('hidden');
    modal.innerHTML = modalContainer;

    var modalClose = document.querySelector('.modal-close');
    var modalButton = document.querySelector('.modal-button');

    modalClose.addEventListener('click', function () {
      modal.classList.toggle('hidden');
    });

    modalButton.addEventListener('click', function () {
      modal.classList.toggle('hidden');
    });

  });
});
