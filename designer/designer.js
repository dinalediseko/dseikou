function slide(direction, sliderId) {
    const slider = document.getElementById(sliderId);
    const images = slider.querySelector('.slider-images');
    const imageCount = images.children.length;
    const currentTransform = images.style.transform;
    const currentIndex = currentTransform ? Math.round(parseFloat(currentTransform.replace('translateX(', '').replace('%)', '')) / -100) : 0;

    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
        newIndex = imageCount - 1;
    } else if (newIndex >= imageCount) {
        newIndex = 0;
    }

    images.style.transform = `translateX(-${newIndex * 100}%)`;
}
