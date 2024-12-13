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
            const otherButton = otherHeader.querySelector(".custom-accordion-button");

            if (otherHeader !== this && otherTarget?.classList.contains("show")) {
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
          const hiddenItems = target.querySelectorAll(".custom-list-item.visible");
          hiddenItems.forEach((item) => {
            item.classList.add("hidden");
            item.classList.remove("visible");
          });

          const showMoreButton = target.querySelector(".custom-list-item.show-more");
          if (showMoreButton) {
            showMoreButton.style.display = "block";
          }
        }
      });
    });
  };

  const topAccordionHeaders = document.querySelectorAll(".custom-header:not(.bottom)");
  const bottomAccordionHeaders = document.querySelectorAll(".custom-header.bottom");

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

  const showMoreButtons = document.querySelectorAll(".custom-list-item.show-more");
  showMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const container = this.closest(".custom-body.bottom");
      if (!container) return;

      const hiddenItems = container.querySelectorAll(".custom-list-item.hidden");
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
  const hiddenListsFiltersSub = document.querySelectorAll(".sub-sub-filters-container");

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

  const backButtonSub = document.querySelector(".back-button.sub");
  if (backButtonSub) {
    backButtonSub.addEventListener("click", () => {
      containerFiltersMobileSub.style.transform = "translateX(0)";
      setTimeout(() => {
        hiddenListsFiltersSub.forEach((ul) => {
          ul.classList.add("hidden");
        });
      }, 300);
    });
  }

  const backButtonPrice = document.querySelector(".back-button.price");
  
  if (backButtonPrice) {
    backButtonPrice.addEventListener("click", () => {
      containerFiltersMobile.style.transform = "translateX(0)";
      setTimeout(() => {
        hiddenListsFilters.forEach((ul) => {
          ul.classList.add("hidden");
        });
      }, 300);
    });
  }


  const backButtonColor = document.querySelector(".back-button.color");
  
  if (backButtonColor) {
    backButtonColor.addEventListener("click", () => {
      containerFiltersMobile.style.transform = "translateX(0)";
      setTimeout(() => {
        hiddenListsFilters.forEach((ul) => {
          ul.classList.add("hidden");
        });
      }, 300);
    });
  }

  const backButtonMaterial = document.querySelector(".back-button.material");
  
  if (backButtonMaterial) {
    backButtonMaterial.addEventListener("click", () => {
      containerFiltersMobile.style.transform = "translateX(0)";
      setTimeout(() => {
        hiddenListsFilters.forEach((ul) => {
          ul.classList.add("hidden");
        });
      }, 300);
    });
  }

  const backButtonCountry = document.querySelector(".back-button.country");
  
  if (backButtonCountry) {
    backButtonCountry.addEventListener("click", () => {
      containerFiltersMobile.style.transform = "translateX(0)";
      setTimeout(() => {
        hiddenListsFilters.forEach((ul) => {
          ul.classList.add("hidden");
        });
      }, 300);
    });
  }


  const backButtonBrand = document.querySelector(".back-button.brands");
  
  if (backButtonBrand) {
    backButtonBrand.addEventListener("click", () => {
      containerFiltersMobile.style.transform = "translateX(0)";
      setTimeout(() => {
        hiddenListsFilters.forEach((ul) => {
          ul.classList.add("hidden");
        });
      }, 300);
    });
  } 
  const backButtonRoom = document.querySelector(".back-button.room");
  
  if (backButtonRoom) {
    backButtonRoom.addEventListener("click", () => {
      containerFiltersMobile.style.transform = "translateX(0)";
      setTimeout(() => {
        hiddenListsFilters.forEach((ul) => {
          ul.classList.add("hidden");
        });
      }, 300);
    });
  }

  const backButtonStyle = document.querySelector(".back-button.style");
  
  if (backButtonStyle) {
    backButtonStyle.addEventListener("click", () => {
      containerFiltersMobile.style.transform = "translateX(0)";
      setTimeout(() => {
        hiddenListsFilters.forEach((ul) => {
          ul.classList.add("hidden");
        });
      }, 300);
    });
  }


 

  containerFiltersMobile.addEventListener("click", (event) => {
    const li = event.target.closest("li");
    if (li && !li.closest(".filters-mobile-sub-main") && li.dataset.id) {
      const id = li.dataset.id;

      hiddenListsFilters.forEach((ul) => {
        if (ul.dataset.id === id) {
          ul.classList.remove("hidden");
        } else {
          ul.classList.add("hidden");
        }
      });

      containerFiltersMobile.style.transform = "translateX(-100%)";
    }
  });

  containerFiltersMobileSub.addEventListener("click", (event) => {
    const li = event.target.closest("li");
    if (li && li.dataset.id) {
      const id = li.dataset.id;

      hiddenListsFiltersSub.forEach((ul) => {
        if (ul.dataset.id === id) {
          ul.classList.remove("hidden");
        } else {
          ul.classList.add("hidden");
        }
      });

      containerFiltersMobileSub.style.transform = "translateX(-100%)";
    }
  });

  const selectedCounts = {
    brands: document.getElementById('selected-count-brands'),
    room: document.getElementById('selected-count-room'),
    style: document.getElementById('selected-count-style'),
    color: document.getElementById('selected-count-color'),
    material: document.getElementById('selected-count-material'),
    country: document.getElementById('selected-count-country'),
    price: document.getElementById('selected-count-price'),  // Счетчик для цены
  };
  
  let checkboxesState = {
    brands: {},
    room: {},
    style: {},
    color: {},
    material: {},
    country: {},
  };
  
  let priceState = {
    min: document.getElementById('min-price-mobile').value,
    max: document.getElementById('max-price-mobile').value
  };
  
  function updateSelectedCount(group) {
    let selectedCount = 0;
  
   
    if (group === 'price') {
      if (priceState.min !== '' && priceState.max !== '' && priceState.min !== '0' && priceState.max !== '10000000') {
        selectedCount = 1; 
      } else {
        selectedCount = 0;  
      }
    } else {

      selectedCount = Object.values(checkboxesState[group]).filter(checked => checked).length;
    }
  
    const selectedCountSpan = selectedCounts[group];
  
    if (selectedCountSpan) {
      selectedCountSpan.textContent = selectedCount;
      selectedCountSpan.style.display = selectedCount === 0 ? 'none' : 'inline-block';  // Скрываем или показываем счетчик
    }
  }
  
 
  function updatePriceState() {
    const minPrice = document.getElementById('min-price-mobile').value;
    const maxPrice = document.getElementById('max-price-mobile').value;
  
    if (minPrice !== priceState.min || maxPrice !== priceState.max) {
      priceState.min = minPrice;
      priceState.max = maxPrice;
      console.log(`Price state updated: min = ${priceState.min}, max = ${priceState.max}`);
      updateSelectedCount('price');  
    }
  }
  
  
  function updateCheckboxState(checkbox, group) {
    const id = checkbox.id;
    const checked = checkbox.checked;
    checkboxesState[group][id] = checked;
    updateSelectedCount(group);
  }
  

  const checkboxes = document.querySelectorAll('.custom-checkbox');
  checkboxes.forEach(checkbox => {
    const group = checkbox.dataset.group;
    if (!group) return;
  
    checkboxesState[group][checkbox.id] = checkbox.checked;
    checkbox.addEventListener('change', () => updateCheckboxState(checkbox, group));
  
    const label = checkbox.closest("label");
    if (label) {
      label.addEventListener('click', (event) => {
        if (!event.target.matches("input[type='checkbox']")) {
          checkbox.checked = !checkbox.checked;
          updateCheckboxState(checkbox, group);
        }
      });
    }
  });
  
 
  Object.keys(selectedCounts).forEach(group => {
    if (checkboxesState[group]) {
      updateSelectedCount(group);
    }
  });
  
  $(document).ready(function() {

    var slider = document.getElementById('price-slider');
  
    noUiSlider.create(slider, {
      start: [0, 10000000], 
      connect: true,        
      range: {
        'min': 0,           
        'max': 10000000     
      },
      step: 1000,           
      format: {
        to: function(value) {
          return Math.round(value); 
        },
        from: function(value) {
          return value;
        }
      }
    });
  
    
    var minInput = $('#min-price-mobile');
    var maxInput = $('#max-price-mobile');
  
    
    slider.noUiSlider.on('update', function(values, handle) {
      if (handle === 0) {
        minInput.val(values[0]); 
      } else {
        maxInput.val(values[1]); 
      }
      updatePriceState();  
    });
  
    minInput.on('change', function() {
      slider.noUiSlider.set([$(this).val(), null]);
    });
  
    maxInput.on('change', function() {
      slider.noUiSlider.set([null, $(this).val()]);
    });
  });
  

function clearAllFilters() {
  
  const checkboxes = document.querySelectorAll('.container-filters-mobile .custom-checkbox');
  
  
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
  
  
  const countCircles = document.querySelectorAll('.count-circle');
  countCircles.forEach(circle => {
    circle.style.display = 'none';
  });

 
  const toggleButtons = document.querySelectorAll('.toggle-button');
  toggleButtons.forEach(button => {
    button.classList.remove('active'); 
  });
}


document.querySelector('.btn.clear').addEventListener('click', function() {
  clearAllFilters(); 
});



});
