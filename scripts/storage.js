// This snippet is actually the entire storage.js file, so feel free to copy it if you like.
function saveData(key, value) {
 
    // Notice how we aren't doing any like ('localStorage' in window).
    // We are simply just accessing the global property, just like referring to name instead of window.name
    if(localStorage) {
        localStorage.setItem(key, value);
    } else {
        alert('Browser does not support the localStorage API');
    }
}
 
 
function loadData(key) {
    if(localStorage) {
        if(key in localStorage){
            return localStorage.getItem(key);
        }
    } else {
        alert('Browser does not support the localStorage API');
    }
}

/* 
    One final thing I want to note is that using the 'let' keyword 
    will not add that variable to the window object. Which is why if you switch,
    var localStorage = ('localStorage' in window); 
    to 
    let localStorage = ('localStorage' in window);, 
    in the previous section, the localStorage won't work. 
*/