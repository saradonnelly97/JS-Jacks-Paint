function configureListeners() {
    let images = document.getElementsByTagName('img'); // select img elements  


     for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false) 
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)// iterate over images and add mouseover event listeners      
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    if (!this.classList.contains('dim')) {
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     if (this.classList.contains('dim')) {
        this.classList.remove('dim'); 
    }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            price = '$9.99' 
            colorName = 'Gloop Green'
            updatePrice(colorName, price) // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price = '$13'
            colorName = 'Benson Brown'
            updatePrice(colorName, price)   
            break;            
        case 'pn3':
            price = '$13'
            colorName = 'Whatever I wanted'
            updatePrice(colorName, price)      
            break;   
        case 'pn4':
            price = '$13'
            colorName = 'Whatever I wanted'
            updatePrice(colorName, price)      
            break;   
        case 'pn5':
            price = '$13'
            colorName = 'Whatever I wanted'
            updatePrice(colorName, price)           
            break;   
        case 'pn6':
            price = '$13'
            colorName = 'Whatever I wanted'
            updatePrice(colorName, price)             
            break;   
        case 'pn7':
            price = '$13'
            colorName = 'Whatever I wanted'
            updatePrice(colorName, price)   
            break;    
        case 'pn8':
            price = '$13'
            colorName = 'Whatever I wanted'
            updatePrice(colorName, price)   
            break;   
        case 'pn9':
            price = '$13'
            colorName = 'Whatever I wanted'
            updatePrice(colorName, price)   
            break;    
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price; // select element with corresponding id
        // display price
        
        let color = document.getElementById('color-name');
        color.textContent = colorName; // select element with corresponding id
        //display color name
    }
    
}
