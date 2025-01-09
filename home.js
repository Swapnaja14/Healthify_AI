$(document).ready(function() {
    const walkthrough = {
      index: 0,
  
      nextScreen: function() {
        if (this.index < this.indexMax()) {
          this.index++;
          this.updateScreen();
        }
      },
  
      prevScreen: function() {
        if (this.index > 0) {
          this.index--;
          this.updateScreen();
        }
      },
  
      updateScreen: function() {
        this.reset();
        this.goTo(this.index);
        this.setBtns();
      },
  
      setBtns: function() {
        const $nextBtn = $('.next-screen');
        const $prevBtn = $('.prev-screen');
        const $lastBtn = $('.finish');
        
        if (this.index === this.indexMax()) {
          $nextBtn.prop('disabled', true);
          $prevBtn.prop('disabled', false);
          $lastBtn.addClass('active').prop('disabled', false);
        } else if (this.index === 0) {
          $nextBtn.prop('disabled', false);
          $prevBtn.prop('disabled', true);
          $lastBtn.removeClass('active').prop('disabled', true);
        } else {
          $nextBtn.prop('disabled', false);
          $prevBtn.prop('disabled', false);
          $lastBtn.removeClass('active').prop('disabled', true);
        }
      },
  
      goTo: function(index) {
        $('.screen').eq(index).addClass('active');
        $('.dot').eq(index).addClass('active');
      },
  
      reset: function() {
        $('.screen, .dot').removeClass('active');
      },
  
      indexMax: function() {
        return $('.screen').length - 1;
      },
  
      closeModal: function() {
        $('.walkthrough, .shade').removeClass('reveal');
        setTimeout(() => {
          $('.walkthrough, .shade').removeClass('show');
          this.index = 0;
          this.updateScreen();
        }, 200);
      },
  
      openModal: function() {
        $('.walkthrough, .shade').addClass('show');
        setTimeout(() => {
          $('.walkthrough, .shade').addClass('reveal');
        }, 200);
        this.updateScreen();
      }
    };
  
    $('.next-screen').click(function() {
      walkthrough.nextScreen();
    });
  
    $('.prev-screen').click(function() {
      walkthrough.prevScreen();
    });
  
    $('.close').click(function() {
      walkthrough.closeModal();
    });
  
    $('.open-walkthrough').click(function() {
      walkthrough.openModal();
    });
  
    walkthrough.openModal();
  
    // Optionally use arrow keys to navigate walkthrough
    $(document).keydown(function(e) {
      switch (e.which) {
        case 37: // left arrow
          walkthrough.prevScreen();
          break;
        case 38: // up arrow
          walkthrough.openModal();
          break;
        case 39: // right arrow
          walkthrough.nextScreen();
          break;
        case 40: // down arrow
          walkthrough.closeModal();
          break;
        default:
          return;
      }
      e.preventDefault();
    });
  });

  const selectedElement = $0;
const parentElement = selectedElement.parentElement;
const navigationBar = document.querySelector('nav'); // Assuming 'nav' is the navigation bar

const selectedElementComputedStyle = window.getComputedStyle(selectedElement);
const parentElementComputedStyle = window.getComputedStyle(parentElement);
const navigationBarComputedStyle = window.getComputedStyle(navigationBar);

const data = {
  selectedElement: {
    tagName: selectedElement.tagName,
    selector: 'p',
    styles: {
      display: selectedElementComputedStyle['display'],
      position: selectedElementComputedStyle['position'],
      margin: selectedElementComputedStyle['margin'],
      padding: selectedElementComputedStyle['padding'],
      zIndex: selectedElementComputedStyle['z-index'],
      top: selectedElementComputedStyle['top'],
      left: selectedElementComputedStyle['left'],
      right: selectedElementComputedStyle['right'],
      bottom: selectedElementComputedStyle['bottom'],
    },
  },
  parentElement: {
    tagName: parentElement.tagName,
    selector: '.sec1_bottom',
    styles: {
      display: parentElementComputedStyle['display'],
      position: parentElementComputedStyle['position'],
      margin: parentElementComputedStyle['margin'],
      padding: parentElementComputedStyle['padding'],
      zIndex: parentElementComputedStyle['z-index'],
      top: parentElementComputedStyle['top'],
      left: parentElementComputedStyle['left'],
      right: parentElementComputedStyle['right'],
      bottom: parentElementComputedStyle['bottom'],
    },
  },
  navigationBar: {
    tagName: navigationBar ? navigationBar.tagName : null,
    selector: 'nav',
    styles: {
      display: navigationBar ? navigationBarComputedStyle['display'] : null,
      position: navigationBar ? navigationBarComputedStyle['position'] : null,
      margin: navigationBar ? navigationBarComputedStyle['margin'] : null,
      padding: navigationBar ? navigationBarComputedStyle['padding'] : null,
      zIndex: navigationBar ? navigationBarComputedStyle['z-index'] : null,
      top: navigationBar ? navigationBarComputedStyle['top'] : null,
      left: navigationBar ? navigationBarComputedStyle['left'] : null,
      right: navigationBar ? navigationBarComputedStyle['right'] : null,
      bottom: navigationBar ? navigationBarComputedStyle['bottom'] : null,
    },
  },
  overlappingElements: Array.from(document.querySelectorAll('*'))
    .filter(el => {
      const rect = el.getBoundingClientRect();
      const parentRect = parentElement.getBoundingClientRect();
      return (
        el !== parentElement &&
        rect.left < parentRect.right &&
        rect.right > parentRect.left &&
        rect.top < parentRect.bottom &&
        rect.bottom > parentRect.top
      );
    })
    .map(el => ({
      tagName: el.tagName,
      id: el.id,
      className: el.className,
      zIndex: window.getComputedStyle(el)['z-index']
    }))
};
  