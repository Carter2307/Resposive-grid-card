/**
 * Set and generate responsive card grid
 *
 * @param {HTMLInputElement} cardWidth - Css selector of input who contains width
 * @param {HTMLInputElement} cardNumber - Css selector of input who contains card number
 */
function gridSystem(cardWidth, cardNumber) {
	const width = parseInt(document.querySelector(`#${cardWidth}`).value);
	const number = parseInt(document.querySelector(`#${cardNumber}`).value);
	const gridContainer = document.querySelector(".grid__layout-container");

	this.resetGrid = (defaultCard, defaultSize) => {
		gridHandler("input", defaultSize, defaultCard);
	};

	//Valide if params exsit and run grid handler function 
	if (width && number && gridContainer) {
		gridHandler("nothing", width, number);
	}

	//create element to grid container
	function createGridCard() {
		const card = document.createElement("DIV");
		card.setAttribute("class", "grid__card");
		return card;
	}

	//Reset and show grid chil element 
	function gridHandler(container, size, num) {
	
		if (container) {
			console.log(container)
			Array.from(gridContainer.children)
				.forEach((child) => gridContainer.removeChild(child));
			
			gridContainer.style.gridTemplateColumns = `repeat(auto-fill, minmax(${size}px, 1fr))`;
			for (let i = 0; i < num; i++) {
				gridContainer.appendChild(createGridCard());
			}
		}
	}
}

//=================== Constructor function approch =================//
