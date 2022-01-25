'use strict';

let filterRes = document.querySelector('.filterRes');
let filterLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');
filterLabel.addEventListener('click', function () {
    filterRes.classList.toggle('hidden');
    filterLabel.classList.toggle('filterLabelPink')
    filterIcon.classList.toggle('filterIconPink')

    if (filterIcon.getAttribute('src') === 'Images/filter.svg') {
        filterIcon.setAttribute('src', 'Images/filterhover.svg')
    }else {
        filterIcon.setAttribute('src', 'Images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    });
});

let filterSizeX = document.querySelector('.filterSizeX');
let filterSizeWrap = document.querySelector('.filterSizeWrap');

filterSizeWrap.addEventListener('click', function() {
    filterSizeX.classList.toggle('hidden');
})