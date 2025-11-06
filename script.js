document.addEventListener('DOMContentLoaded', function() {
    // Animation for the add bot button
    const addBotBtn = document.getElementById('add-bot-btn');
    
    // Add click animation
    addBotBtn.addEventListener('click', function(e) {
        // Add animation class
        this.classList.add('clicked');
        
        // Remove animation class after it completes
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
    
    // Add hover effect for features
    const features = document.querySelectorAll('.feature');
    
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Add a simple animation for page load
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});
