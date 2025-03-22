document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelector(".testimonial-container");
    const testimonialItems = document.querySelectorAll(".testimonial");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let index = 0; // Current slide index
    const totalTestimonials = testimonialItems.length; // Total slides

    function showTestimonial() {
        const width = testimonialItems[0].offsetWidth; // Get width of one slide
        testimonials.style.transform = `translateX(${-index * width}px)`;
    }

    nextBtn.addEventListener("click", function () {
        if (index < totalTestimonials - 1) {
            index++;
        } else {
            index = 0; // Loop back to the first slide
        }
        showTestimonial();
    });

    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
        } else {
            index = totalTestimonials - 1; // Loop back to the last slide
        }
        showTestimonial();
    });
});
