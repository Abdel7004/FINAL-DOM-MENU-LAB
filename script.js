// Task 1.0
// Select and cache the <main> element in a variable named mainEl.

const mainEl = document.querySelector("main");
console.log(mainEl);

// Task 1.1
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this:
// 'var(--main-bg)'

mainEl.style.backgroundColor = "var(--main-bg)";

// Task 1.2
// Set the content of mainEl to <h1>SEI Rocks!</h1>.

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// Task 1.3
mainEl.classList.add('flex-ctr');

// Task 2.0
var topMenuEl = document.querySelector('#top-menu');

// Task 2.1
topMenuEl.style.height = '100%';

// Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3
topMenuEl.classList.add('flex-around');

// Task 3.0
var menuLinks = [
{text: 'about', href: '/about'},
{text: 'catalog', href: '/catalog'},
{text: 'orders', href: '/orders'},
{text: 'account', href: '/account'},
];

// Task 3.1
menuLinks.forEach(function(link) {
var a = document.createElement('a');
a.href = link.href;
a.innerText = link.text;
topMenuEl.appendChild(a);
});
