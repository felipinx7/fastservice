const container = document.querySelector('.container');
const scrollbar = document.querySelector('.scrollbar');
const scrollbarThumb = document.querySelector('.scrollbar-thumb');

function updateScrollbar() {
    const visibleRatio = container.clientHeight / container.scrollHeight;
    scrollbarThumb.style.height = `${visibleRatio * 100}%`;
}
scrollbarThumb.onmousedown = function (e) {
    const startY = e.pageY;
    const startTop = scrollbarThumb.offsetTop;

    document.onmousemove = function (e) {
        const deltaY = e.pageY - startY;
        const newTop = Math.min(Math.max(startTop + deltaY, 0), scrollbar.offsetHeight - scrollbarThumb.offsetHeight);
        scrollbarThumb.style.top = newTop + 'px';

        const scrollPercent = newTop / (scrollbar.offsetHeight - scrollbarThumb.offsetHeight);
        container.scrollTop = scrollPercent * (container.scrollHeight - container.clientHeight);
    };

    document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
    };

    return false;
};

container.onscroll = function () {
    const scrollPercent = container.scrollTop / (container.scrollHeight - container.clientHeight);
    scrollbarThumb.style.top = scrollPercent * (scrollbar.offsetHeight - scrollbarThumb.offsetHeight) + 'px';
};
function updateScrollbar() {
    const visibleRatio = container.clientHeight / container.scrollHeight;
    const thumbHeight = Math.max(203, visibleRatio * container.clientHeight); 
    scrollbarThumb.style.height = `${thumbHeight}px`;
}

updateScrollbar();

window.onload = updateScrollbar;
window.onresize = updateScrollbar;
