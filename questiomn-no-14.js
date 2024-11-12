// Get references to filter elements
const categoryFilter = document.getElementById('category-filter');
const priceRangeFilter = document.getElementById('price-range');
const priceValueLabel = document.getElementById('price-value');
const itemsContainer = document.getElementById('items-container');

// Update price label when the slider changes
priceRangeFilter.addEventListener('input', () => {
    priceValueLabel.textContent = priceRangeFilter.value;
    filterItems();
});

// Listen to category selection
categoryFilter.addEventListener('change', filterItems);

// Function to filter items based on selected filters
function filterItems() {
    const selectedCategory = categoryFilter.value;
    const selectedPrice = parseInt(priceRangeFilter.value);

    // Get all items
    const items = itemsContainer.getElementsByClassName('item');

    // Loop through each item to determine visibility
    Array.from(items).forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        const itemPrice = parseInt(item.getAttribute('data-price'));

        // Check if item meets the filtering criteria
        const matchesCategory = (selectedCategory === 'all' || itemCategory === selectedCategory);
        const matchesPrice = (itemPrice <= selectedPrice);

        // Show or hide the item
        if (matchesCategory && matchesPrice) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Initial call to display all items
filterItems();
