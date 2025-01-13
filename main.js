
document.querySelectorAll('.accordionQuestions-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.accordionQuestions-content');
      const icon = header.querySelector('.toggle-icon');
  
      if (content.style.maxHeight) {
        // Закрыть текущую секцию
        content.style.maxHeight = null;
        icon.textContent = '+';
      } else {
        // Закрыть все секции
        document.querySelectorAll('.accordion-contentQuestions').forEach(content => {
          content.style.maxHeight = null;
          content.previousElementSibling.querySelector('.toggle-icon').textContent = '+';
        });
        // Открыть текущую секцию
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.textContent = '-';
      }
    });
  });
  document.querySelectorAll('.accordion-header').forEach(header => {
    const toggleButton = header.querySelector('.accordion-toggle');
    toggleButton.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');
  
      if (content.classList.contains('open')) {
        content.classList.remove('open');
        toggleButton.textContent = 'Подробнее';
      } else {
        document.querySelectorAll('.accordion-content').forEach(content => {
          content.classList.remove('open');
          content.parentElement.querySelector('.accordion-toggle').textContent = 'Подробнее';
        });
        content.classList.add('open');
        toggleButton.textContent = 'Свернуть';
      }
    });
  });
  