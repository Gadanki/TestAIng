const contentData = {
    'intern-onboarding': {
        title: 'Intern Onboarding Essentials',
        content: 'Welcome to our company! This guide contains everything you need to know for your first few weeks. Begin by setting up your workstation, reviewing the company handbook, and scheduling your introduction meetings with team members.'
    }

};

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const contentTitle = document.getElementById('contentTitle');
    const contentBody = document.getElementById('contentBody');

    // Toggle sidebar
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        mainContent.classList.toggle('shifted'); 
    });

    function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('closed');
  }

    // Handle main menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            
            // Reset all active states
            document.querySelectorAll('.menu-item, .sub-menu-item').forEach(i => {
                i.classList.remove('active');
            });
            
            // Set active state
            e.target.classList.add('active');

        });
    });

    // Handle submenu items
    document.querySelectorAll('.sub-menu-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            
            // Reset all active states
            document.querySelectorAll('.menu-item, .sub-menu-item').forEach(i => {
                i.classList.remove('active');
            });
            
            // Set active state
            e.target.classList.add('active');
            
            // Update content
            if (contentData[id]) {
                contentTitle.textContent = contentData[id].title;
                contentBody.textContent = contentData[id].content;
            }
        });
    });


});