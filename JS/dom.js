const button = document.getElementById('addParagraphBtn');

    // Add an event listener to the button
    button.onclick = function() {
      // Create a new paragraph element
      const newParagraph = document.createElement('p');
      
      // Set the text content of the new paragraph
      newParagraph.textContent = 'Enjoy our fresh sourdough bread!';
      
      // Append the new paragraph to the body
      document.body.appendChild(newParagraph);
    };



//DOM is simply working with HTML  , updating it as per need an get the desired output.
//Used using document.method();(Id, tag, queryselector and many more)
//so dom is accesssing html objects outside of html and work using JS