// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

//Select and cache the <main> element in a variable named mainEl.
const mainEl = document.getElementsByTagName('main');
console.log(mainEl[0])

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
    // Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl[0].style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>DOM Manipulation</h1>. 
// There are a variety of ways to do this; 
// pick whichever one that you think works best in this situation.
mainEl[0].innerHTML = "<h1>DOM Manipulation</h1>";

// Add a class of flex-ctr to mainEl.
    // Hint: Use the Element.classList API.

mainEl[0].classList.add('flex-ctr');

//2

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu");
console.log(topMenuEl);

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

//3
// Iterate over the entire menuLinks array and for each "link" object:

    menuLinks.forEach((link)=>{

    // Create an <a> element.
    let newLink = document.createElement('a');

    // On the new element, add an href attribute with 
    // its value set to the href property of the "link" object.
    newLink.setAttribute('href', link.href)

    // Set the new element's content to the value of the 
    // text property of the "link" object.
    newLink.textContent = link.text
    topMenuEl.appendChild(newLink)

})


// Set the new element's content to the value of the text property of the "link" object.


// Append the new element to the topMenuEl element.


//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

const subMenuEl = document.getElementById("sub-menu");

//Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.

subMenuEl.style.backgroundColor =  "--sub-menu-bg";
