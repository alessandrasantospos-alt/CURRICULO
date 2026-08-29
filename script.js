/**
 * Currículo — Interatividade
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollReveal();
  initProgressBars();
  initBackToTop();
  initActiveNavHighlight();
  initThemeToggle();
  initYear();
});

function initNavigation() {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const navLinks = document.querySelectorAll('.nav-link');

  function closeMenu() {
    sidebar?.classList.remove('open');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openMenu() {
    sidebar?.classList.add('open');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  menuToggle?.addEventListener('click', () => {
    sidebar?.classList.contains('open') ? closeMenu() : openMenu();
  });

  overlay?.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 960) closeMenu();
    });
  });
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), index * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );

  reveals.forEach(el => observer.observe(el));
}

function initProgressBars() {
  const bars = document.querySelectorAll('.progress-fill');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = `${entry.target.dataset.progress}%`;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  bars.forEach(bar => observer.observe(bar));
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    btn?.classList.toggle('visible', window.scrollY > 400);
  });

  btn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initActiveNavHighlight() {
  const sections = document.querySelectorAll('[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const ids = ['perfil', 'experiencia', 'formacao', 'projetos'];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && ids.includes(entry.target.id)) {
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    },
    { threshold: 0.25, rootMargin: '-60px 0px -55% 0px' }
  );

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

function initYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
