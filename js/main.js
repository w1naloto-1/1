document.addEventListener("DOMContentLoaded", () => {

  const handleAccordionClick = (headers, closeOthers) => {
    headers.forEach((header) => {
      header.addEventListener("click", function () {
        const targetId = this.dataset.target;
        const target = document.querySelector(targetId);

        if (!target) return;

        const accordionButton = this.querySelector(".custom-accordion-button");

        if (closeOthers) {
       
          headers.forEach((otherHeader) => {
            const otherTargetId = otherHeader.dataset.target;
            const otherTarget = document.querySelector(otherTargetId);
            const otherButton = otherHeader.querySelector(
              ".custom-accordion-button"
            );

            if (
              otherHeader !== this &&
              otherTarget?.classList.contains("show")
            ) {
              otherTarget.classList.remove("show");
              otherButton?.classList.remove("active");
              otherTarget.style.maxHeight = "0";
              setTimeout(() => {
                otherTarget.style.display = "none";
              }, 300); 
            }
          });
        }

        
        if (header.classList.contains("bottom")) {
          if (target.style.display === "block") {
            target.style.maxHeight = "0";
            setTimeout(() => {
              target.style.display = "none";
            }, 300); 
          } else {
            target.style.display = "block";
            setTimeout(() => {
              target.style.maxHeight = "500px";
            }, 0);
          }
        }

       
        target.classList.toggle("show");
        accordionButton?.classList.toggle("active");

            if (!target.classList.contains("show")) {
          const hiddenItems = target.querySelectorAll(
            ".custom-list-item.visible"
          );
          hiddenItems.forEach((item) => {
            item.classList.add("hidden");
            item.classList.remove("visible");
          });

          const showMoreButton = target.querySelector(
            ".custom-list-item.show-more"
          );
          if (showMoreButton) {
            showMoreButton.style.display = "block";
          }
        }
      });
    });
  };

  const topAccordionHeaders = document.querySelectorAll(
    ".custom-header:not(.bottom)"
  );
  const bottomAccordionHeaders = document.querySelectorAll(
    ".custom-header.bottom"
  );


  handleAccordionClick(topAccordionHeaders, true);

 
  handleAccordionClick(bottomAccordionHeaders, false);

  const listItems = document.querySelectorAll(".custom-list-item:not(.bottom)");
  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      listItems.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });

 
  const toggle = document.querySelector(".toggle-button.new");
  if (toggle) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
    });
  }

  const toggle1 = document.querySelector(".toggle-button.sale");
  if (toggle1) {
    toggle1.addEventListener("click", () => {
      toggle1.classList.toggle("active");
    });
  }


  const showMoreButtons = document.querySelectorAll(
    ".custom-list-item.show-more"
  );
  showMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const container = this.closest(".custom-body.bottom");
      if (!container) return;

      const hiddenItems = container.querySelectorAll(
        ".custom-list-item.hidden"
      );
      hiddenItems.forEach((item) => {
        item.classList.remove("hidden");
        item.classList.add("visible");
      });

      this.style.display = "none";
    });
  });

  
  const slider = document.getElementById("slider");
  const minPriceInput = document.getElementById("min-price");
  const maxPriceInput = document.getElementById("max-price");


  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
  });


  slider.noUiSlider.on("update", (values) => {
    minPriceInput.value = Math.round(values[0]);
    maxPriceInput.value = Math.round(values[1]);
  });


  minPriceInput.addEventListener("change", () => {
    slider.noUiSlider.set([minPriceInput.value, null]);
  });

  maxPriceInput.addEventListener("change", () => {
    slider.noUiSlider.set([null, maxPriceInput.value]);
  });






  
  const toggleMobile = document.querySelector(".toggle-button-mobile");
  if (toggleMobile) {
    toggleMobile.addEventListener("click", () => {
      toggleMobile.classList.toggle("active");
    });
  }



  const containerFiltersMobile = document.querySelector(".filters-mobile");
  const hiddenListsFilters = document.querySelectorAll(".sub-filters-container.hidden");

  const containerFiltersMobileSub = document.querySelector(".sub-filters-container");
  const hiddenListsFilterss = document.querySelectorAll(".sub-sub-filters-container");
  
  // Первая кнопка "Назад" для контейнера containerFiltersMobile
  const backButtonMain = document.querySelector(".back-button.main");
  
  if (backButtonMain) {
    backButtonMain.addEventListener("click", () => {
      containerFiltersMobile.style.transform = "translateX(0)";
      setTimeout(() => {
        hiddenListsFilters.forEach((ul) => {
          ul.classList.add("hidden");
        });
      }, 300);
    });
  }
  
  // Вторая кнопка "Назад" для контейнера containerFiltersMobileSub
  const backButtonSub = document.querySelector(".back-button.sub");
  
  if (backButtonSub) {
    backButtonSub.addEventListener("click", () => {
      containerFiltersMobileSub.style.transform = "translateX(0)";
      setTimeout(() => {
        hiddenListsFilterss.forEach((ul) => {
          ul.classList.add("hidden");
        });
      }, 300);
    });
  }
  
  // Обработчик клика для переходов в подменю (для containerFiltersMobile)
 // Обработчик клика для переходов в подменю (для containerFiltersMobile)
// Обработчик клика для containerFiltersMobile
containerFiltersMobile.addEventListener("click", (event) => {
  const li = event.target.closest("li"); // Находим ближайший <li>
  
  if (li && li.dataset.id) {
    const id = li.dataset.id; // Получаем data-id кликаемого элемента

    console.log(`Кликнули по data-id: ${id}`); // Для отладки

    // Перебираем все элементы с классом `.hidden`
    hiddenListsFilters.forEach((ul) => {
      if (ul.dataset.id === id) {
        ul.classList.remove("hidden"); // Показываем нужный список
        console.log(`Показываем элемент с data-id: ${id}`);
      } else {
        ul.classList.add("hidden"); // Скрываем остальные списки
      }
    });

    // Перемещаем контейнер
    containerFiltersMobile.style.transform = "translateX(-100%)";
  }
});



// Обработчик клика для переходов в подменю (для containerFiltersMobileSub)
containerFiltersMobileSub.addEventListener("click", (event) => {
  // Находим ближайший <li>, по которому был клик
  const li = event.target.closest("li");

  if (li && li.dataset.id) {
    const id = li.dataset.id;

    hiddenListsFilterss.forEach((ul) => {
      if (ul.dataset.id === id) {
        ul.classList.remove("hidden");
      } else {
        ul.classList.add("hidden");
      }
     

    });

    // Перемещаем контейнер
    containerFiltersMobileSub.style.transform = "translateX(-100%)";
  }
});

  

});
