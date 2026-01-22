// Theme Toggle Functionality
(function() {
    'use strict';
    
    console.log('Theme toggle script loaded');
    
    function initThemeToggle() {
        const themeToggle = document.getElementById('dark-mode-toggle');
        const body = document.body;
        
        console.log('Theme toggle button found:', themeToggle);
        
        if (!themeToggle) {
            console.error('Theme toggle button not found!');
            return;
        }
        
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        body.setAttribute('data-theme', savedTheme);
        
        console.log('Current theme set to:', savedTheme);
        
        // Update toggle button icon based on current theme
        updateToggleIcon(savedTheme);
        
        // Add click event listener
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Theme toggle clicked');
            
            const currentTheme = body.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            console.log('Switching from', currentTheme, 'to', newTheme);
            
            // Toggle theme
            body.setAttribute('data-theme', newTheme);
            
            // Save theme preference
            localStorage.setItem('theme', newTheme);
            
            // Update toggle button icon
            updateToggleIcon(newTheme);
            
            // Update button aria-pressed attribute
            themeToggle.setAttribute('aria-pressed', newTheme === 'dark');
            
            console.log('Theme switched to:', newTheme);
            
            // Force a small delay to ensure the theme change is visible
            setTimeout(() => {
                console.log('Theme change complete');
            }, 100);
        });
        
        function updateToggleIcon(theme) {
            if (themeToggle) {
                const icon = themeToggle.querySelector('i');
                
                if (icon) {
                    if (theme === 'dark') {
                        icon.className = 'bi bi-moon navicons';
                        themeToggle.title = 'Switch to Light Mode';
                    } else {
                        icon.className = 'bi bi-sun navicons';
                        themeToggle.title = 'Switch to Dark Mode';
                    }
                } else {
                    // If no icon found, update the entire innerHTML
                    if (theme === 'dark') {
                        themeToggle.innerHTML = '<i class="bi bi-moon navicons"></i> Toggle Theme';
                        themeToggle.title = 'Switch to Light Mode';
                    } else {
                        themeToggle.innerHTML = '<i class="bi bi-sun navicons"></i> Toggle Theme';
                        themeToggle.title = 'Switch to Dark Mode';
                    }
                }
                
                console.log('Toggle icon updated for theme:', theme);
            }
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeToggle);
    } else {
        // DOM is already ready
        initThemeToggle();
    }
    
    // Also try to initialize after a short delay in case of dynamic content loading
    setTimeout(initThemeToggle, 500);
})();
