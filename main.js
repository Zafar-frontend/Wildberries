
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');
      const icon = header.querySelector('.toggle-icon');
  
      if (content.style.maxHeight) {
        // Закрыть текущую секцию
        content.style.maxHeight = null;
        icon.textContent = '+';
      } else {
        // Закрыть все секции
        document.querySelectorAll('.accordion-content').forEach(content => {
          content.style.maxHeight = null;
          content.previousElementSibling.querySelector('.toggle-icon').textContent = '+';
        });
        // Открыть текущую секцию
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.textContent = '-';
      }
    });
  });
  