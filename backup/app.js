/* ==========================================================================
   SG EDUCATION - APP JAVASCRIPT CONTROLLER (KIDZEE REFERENCE PRESCHOOL ENGINE)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initScrollReveal();
  initHeroCarousel();
  initHabitsBoard();
  initGalleryLightbox();
  initTestimonialsSlider();
});

/* ==========================================
   1. STICKY PLAYFUL HEADER CONTROL
   ========================================== */
function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Execute once on start in case page was reloaded
}

/* ==========================================
   2. MOBILE NAV DRAWER ACTIONS
   ========================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .nav-cta a');

  if (!toggleBtn || !navMenu) return;

  // Toggle open drawer
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleBtn.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  // Close when clicking navigation item link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });

  // Close when clicking outside header drawer bounds
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleBtn.classList.remove('open');
      navMenu.classList.remove('open');
    }
  });
}

/* ==========================================
   3. SCROLL REVEAL VIEWPORT OBSERVER
   ========================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, we don't need to observe it anymore
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null, // Default viewport
      threshold: 0.1, // Trigger when 10% is visible
      rootMargin: '0px 0px -40px 0px' // Slightly trigger ahead of boundary
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if browser does not support modern IntersectionObserver API
    revealElements.forEach(el => el.classList.add('active'));
  }
}

/* ==========================================
   4. HERO CAROUSEL BACKGROUND SLIDESHOW
   ========================================== */
function initHeroCarousel() {
  const slides = document.querySelectorAll('#hero-carousel .carousel-slide');
  if (slides.length === 0) return;

  let activeIndex = 0;
  const slideInterval = 5000; // Switch background slide every 5 seconds

  function nextBackground() {
    slides[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add('active');
  }

  setInterval(nextBackground, slideInterval);
}

/* ==========================================
   5. ONE DAY ONE GOOD THING HABIT SWITCHER
   ========================================== */
const DAILY_HABITS = [
  {
    emoji: '🙏',
    title: 'Greeting Elders',
    desc: 'Namaste! Children learn to greet parents, teachers, and elders with folded hands, building warm, respectful connections.',
    color: '#FF2A7A'
  },
  {
    emoji: '🧹',
    title: 'Self-Reliance',
    desc: 'Arranging Play Space! Children clean their study desk and put away toys after playtime, promoting order and neat habits.',
    color: '#FF6F00'
  },
  {
    emoji: '🧘',
    title: 'Morning Calm',
    desc: 'Take three slow, deep breaths and practice basic yoga stretches. Builds persistent focus and inner stability.',
    color: '#FFC300'
  },
  {
    emoji: '🌱',
    title: 'Active Caring',
    desc: 'Watering garden green buds! Instills early responsibility, empathy, and deep love for our environment.',
    color: '#2ECC71'
  },
  {
    emoji: '👂',
    title: 'Listening Ears',
    desc: 'Mindful Listening! Focus undivided attention when teachers or parents speak, shaping respect and patience.',
    color: '#00AEFF'
  }
];

function initHabitsBoard() {
  let activeIdx = 0;
  let autoplayTimer = null;

  const emojiNode = document.getElementById('habit-emoji');
  const titleNode = document.getElementById('habit-title');
  const descNode = document.getElementById('habit-desc');
  const prevBtn = document.getElementById('habit-prev');
  const nextBtn = document.getElementById('habit-next');
  const dotsContainer = document.getElementById('habit-dots');

  if (!emojiNode || !titleNode || !descNode || !dotsContainer) return;

  // Render index dots indicators
  dotsContainer.innerHTML = '';
  DAILY_HABITS.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = `widget-dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      activeIdx = index;
      renderHabitDisplay();
      resetAutoplay();
    });
    dotsContainer.appendChild(dot);
  });

  const dotElements = dotsContainer.querySelectorAll('.widget-dot');

  function renderHabitDisplay() {
    const activeHabit = DAILY_HABITS[activeIdx];
    const displayBox = document.getElementById('habit-widget-content');
    
    // Quick fade out
    displayBox.style.opacity = 0;
    displayBox.style.transform = 'translateY(8px)';

    setTimeout(() => {
      emojiNode.textContent = activeHabit.emoji;
      titleNode.textContent = activeHabit.title;
      titleNode.style.color = activeHabit.color;
      descNode.textContent = activeHabit.desc;

      dotElements.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIdx);
      });

      // Fade in smoothly
      displayBox.style.opacity = 1;
      displayBox.style.transform = 'translateY(0)';
    }, 200);
  }

  function advanceHabit() {
    activeIdx = (activeIdx + 1) % DAILY_HABITS.length;
    renderHabitDisplay();
  }

  function regressHabit() {
    activeIdx = (activeIdx - 1 + DAILY_HABITS.length) % DAILY_HABITS.length;
    renderHabitDisplay();
  }

  // Bind click buttons
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      advanceHabit();
      resetAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      regressHabit();
      resetAutoplay();
    });
  }

  // Setup loop
  function startAutoplay() {
    autoplayTimer = setInterval(advanceHabit, 6000);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  startAutoplay();
  renderHabitDisplay(); // Init render
}

/* ==========================================
   6. MASONRY PHOTO GALLERY & LIGHTBOX POPUP
   ========================================== */
let filteredGalleryItems = [];
let activeLightboxIndex = 0;

function filterGallery(category) {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  // Change active class on filter tab button
  filterBtns.forEach(btn => {
    const btnOnclick = btn.getAttribute('onclick');
    if (btnOnclick && btnOnclick.includes(`'${category}'`)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Toggle items block/none with scaled animations
  galleryItems.forEach(item => {
    const itemCat = item.getAttribute('data-category');
    if (category === 'all' || itemCat === category) {
      item.style.display = 'block';
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
      }, 50);
    } else {
      item.style.opacity = '0';
      item.style.transform = 'scale(0.8)';
      setTimeout(() => {
        item.style.display = 'none';
      }, 300);
    }
  });

  // Re-populate active images list after delay
  setTimeout(populateActiveImageList, 350);
}

function initGalleryLightbox() {
  populateActiveImageList();
}

function populateActiveImageList() {
  const visibleItems = document.querySelectorAll('.gallery-item');
  filteredGalleryItems = [];

  visibleItems.forEach(item => {
    if (item.style.display !== 'none') {
      const img = item.querySelector('img');
      const caption = item.querySelector('.item-overlay h4').textContent;
      filteredGalleryItems.push({
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt'),
        caption: caption,
        element: item
      });
    }
  });
}

function openLightbox(galleryItemIndex) {
  populateActiveImageList();

  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');

  if (!modal || !modalImg || !modalCaption) return;

  const clickedItem = document.querySelectorAll('.gallery-item')[galleryItemIndex];
  activeLightboxIndex = filteredGalleryItems.findIndex(img => img.element === clickedItem);

  if (activeLightboxIndex === -1) activeLightboxIndex = 0;

  const currentItem = filteredGalleryItems[activeLightboxIndex];
  modalImg.setAttribute('src', currentItem.src);
  modalImg.setAttribute('alt', currentItem.alt);
  modalCaption.textContent = currentItem.caption;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden'; // Stop body scroll scroll lock
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto'; // Release body scroll
  }
}

function nextLightbox() {
  if (filteredGalleryItems.length === 0) return;
  activeLightboxIndex = (activeLightboxIndex + 1) % filteredGalleryItems.length;
  refreshLightboxView();
}

function prevLightbox() {
  if (filteredGalleryItems.length === 0) return;
  activeLightboxIndex = (activeLightboxIndex - 1 + filteredGalleryItems.length) % filteredGalleryItems.length;
  refreshLightboxView();
}

function refreshLightboxView() {
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');

  if (!modalImg || !modalCaption) return;

  const currentItem = filteredGalleryItems[activeLightboxIndex];

  modalImg.style.opacity = 0;
  setTimeout(() => {
    modalImg.setAttribute('src', currentItem.src);
    modalImg.setAttribute('alt', currentItem.alt);
    modalCaption.textContent = currentItem.caption;
    modalImg.style.opacity = 1;
  }, 150);
}

// Click backdrop to close
document.getElementById('lightbox-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'lightbox-modal') {
    closeLightbox();
  }
});

// Bind keyboard hooks for lightbox
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('lightbox-modal');
  if (modal && modal.classList.contains('open')) {
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
    if (e.key === 'Escape') closeLightbox();
  }
});


/* ==========================================================================
   7. TESTIMONIALS SLIDER CAROUSEL
   ========================================================================== */
function initTestimonialsSlider() {
  const track = document.getElementById('testimonial-track');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('review-prev');
  const nextBtn = document.getElementById('review-next');
  const dotsContainer = document.getElementById('review-dots');

  if (!track || slides.length === 0 || !dotsContainer) return;

  let activeIndex = 0;
  let slideTimer = null;

  // Render dots
  dotsContainer.innerHTML = '';
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      activeIndex = index;
      moveSliderTrack();
      resetAutoplay();
    });
    dotsContainer.appendChild(dot);
  });

  const dotElements = dotsContainer.querySelectorAll('.slider-dot');

  function moveSliderTrack() {
    track.style.transform = `translateX(-${activeIndex * 100}%)`;
    dotElements.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
  }

  function advanceSlide() {
    activeIndex = (activeIndex + 1) % slides.length;
    moveSliderTrack();
  }

  function regressSlide() {
    activeIndex = (activeIndex - 1 + slides.length) % slides.length;
    moveSliderTrack();
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      advanceSlide();
      resetAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      regressSlide();
      resetAutoplay();
    });
  }

  // Loop Setup
  function startAutoplay() {
    slideTimer = setInterval(advanceSlide, 7000);
  }

  function resetAutoplay() {
    clearInterval(slideTimer);
    startAutoplay();
  }

  // Hover pauses loop
  track.addEventListener('mouseenter', () => clearInterval(slideTimer));
  track.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
}

/* ==========================================================================
   8. ADMISSIONS ENROLLMENT VALIDATION & SUCCESS MODAL
   ========================================================================== */
function handleAdmissionSubmit(event) {
  event.preventDefault();

  const form = document.getElementById('enrollmentForm');
  if (!form) return;

  const requiredInputs = form.querySelectorAll('input[required]');
  let isValidForm = true;

  requiredInputs.forEach(input => {
    // Check specific Phone validation (10 clean digits)
    if (input.id === 'phone_num') {
      const cleanNum = input.value.replace(/\D/g, ''); // Extract digits
      if (cleanNum.length < 10) {
        input.classList.add('invalid');
        isValidForm = false;
      } else {
        input.classList.remove('invalid');
      }
    } 
    // Basic value check
    else if (!input.value.trim()) {
      input.classList.add('invalid');
      isValidForm = false;
    } else {
      input.classList.remove('invalid');
    }

    // Bind real-time input correction triggers
    input.addEventListener('input', () => {
      if (input.value.trim()) {
        input.classList.remove('invalid');
      }
    });
  });

  if (isValidForm) {
    // Popup positive modal dialog box overlay
    const successDialog = document.getElementById('success-dialog');
    if (successDialog) {
      successDialog.classList.add('open');
      document.body.style.overflow = 'hidden'; // Stop body scrolling
    }

    // Reset fields on successful submit
    form.reset();
  }
}

// Global hook for quick inquiry submission handling
function handleFormSubmit(event) {
  event.preventDefault();
  
  // Show successful submit modal for landing page inquiry card
  const successDialog = document.getElementById('success-dialog');
  if (successDialog) {
    successDialog.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // Clear inquiry input
  event.target.reset();
}

function closeSuccessDialog() {
  const successDialog = document.getElementById('success-dialog');
  if (successDialog) {
    successDialog.classList.remove('open');
    document.body.style.overflow = 'auto'; // Release body scrolling scroll lock
  }
}
