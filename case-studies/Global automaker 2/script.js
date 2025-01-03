document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const content = document.getElementById('dynamic-content');

    const tabContents = {
        'client-overview': 'Welcome to the client overview section. This is where the overview of the project will be explained.',
        'the-problem': 'This section highlights the problem faced by the client, providing detailed insights into the challenges.',
        'our-solution': 'Here we discuss the solution offered to address the client’s challenges and how it aligns with their goals.',
        'impact-on-operations': 'Learn about the impact our solution had on the client’s operations, enhancing efficiency and productivity.',
        'conclusion': 'This section concludes the case study, summarizing the results and the value delivered to the client.'
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        // Update the content
        const selectedContent = tab.getAttribute('data-content');
        content.textContent = tabContents[selectedContent];
        });
    });
});

function toggleContent(header) {
    const row = header.parentElement;
    const content = row.querySelector('.row-content');
    const arrow = header.querySelector('.arrow img');
    const isOpen = row.classList.contains('open');
    const allRows = document.querySelectorAll('.row.open');

    // Close all other rows
    allRows.forEach(openRow => {
      if (openRow !== row) {
        const openContent = openRow.querySelector('.row-content');
        const openArrow = openRow.querySelector('.row-header .arrow img');
        gsap.to(openContent, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            openContent.style.display = 'none';
          },
        });
        gsap.to(openArrow, { rotate: 0, duration: 0.3 });
        openRow.classList.remove('open');
      }
    });

    // Toggle the clicked row
    if (isOpen) {
      // Collapse the row
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          content.style.display = 'none';
        },
      });
      gsap.to(arrow, { rotate: 0, duration: 0.3 });
      row.classList.remove('open');
    } else {
      // Expand the row
      content.style.display = 'block'; // Show to measure height
      const contentHeight = content.scrollHeight; // Get full content height
      gsap.fromTo(
        content,
        { height: 0, opacity: 0 },
        { height: contentHeight, opacity: 1, duration: 0.5 }
      );
      gsap.to(arrow, { rotate: 180, duration: 0.3 });
      row.classList.add('open');
    }
  }


  function slideTabs(direction) {
    const tabs = document.getElementById("tabs");
    const scrollAmount = 200; // Number of pixels to slide

    if (direction === 'left') {
        tabs.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        tabs.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Optional: Disable arrows when scroll reaches start or end
const tabs = document.getElementById("tabs");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

function checkArrows() {
    leftArrow.disabled = tabs.scrollLeft === 0;
    rightArrow.disabled = tabs.scrollLeft + tabs.clientWidth >= tabs.scrollWidth;
}

tabs.addEventListener("scroll", checkArrows);
window.addEventListener("load", checkArrows);