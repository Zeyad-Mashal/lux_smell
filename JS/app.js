function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}
function openJoinUs() {
    const openJoinUs = document.querySelector('.join_us_popup');
    openJoinUs.style.display = "flex";
}
function closeJoinUs() {
    const openJoinUs = document.querySelector('.join_us_popup');
    openJoinUs.style.display = "none";
}
function navigateTo(element) {
    // Remove 'active' class from all list items
    const listItems = document.querySelectorAll('.header_links ul li');
    listItems.forEach(item => item.classList.remove('active'));

    // Add 'active' class to the clicked list item
    element.classList.add('active');

    // Navigate to the specified URL
    window.location.href = url;
}

