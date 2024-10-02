

$(document).ready(function(){
    // Initially hide the sidebar for both mobile and desktop
    $('.container .sidebar').hide();

    $('.container ul.toggle').click(function(){
        $(this).toggleClass('active');
        $('.container .sidebar').toggle(); // Use toggle to show/hide the sidebar
    });
    
    $(document).click(function(event) {
        if (!$(event.target).closest('.sidebar, .toggle').length) {
            if ($('.sidebar').is(':visible')) {
                $('.sidebar').hide(); // Hide the sidebar
                $('.toggle').removeClass('active');
            }
        }
    });

    function handleJarallax() {
        if (window.innerWidth <= 820) { 
            jarallax(document.querySelectorAll('.jarallax'), 'destroy');
        } else {
            jarallax(document.querySelectorAll('.jarallax'), {
                speed: 0.5,
                afterTop: float,
            });
        }
    }

    handleJarallax();

    $(window).resize(function(){
        handleJarallax();
    });
});