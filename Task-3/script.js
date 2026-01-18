const gameBoard = document.getElementById('game-board');
const restartBtn = document.getElementById('restart-btn');
const moveCountSpan = document.getElementById('move-count');

// Card Data (Emojis used for simplicity)
const cardData = [
    { name: 'ghost', icon: '👻' },
    { name: 'alien', icon: '👽' },
    { name: 'robot', icon: '🤖' },
    { name: 'poop', icon: '💩' },
    { name: 'cat', icon: '😻' },
    { name: 'rocket', icon: '🚀' },
    { name: 'fire', icon: '🔥' },
    { name: 'unicorn', icon: '🦄' }
];

// State Variables
let cards = []; // Holds the duplicated array
let hasFlippedCard = false;
let lockBoard = false; // Prevents clicking more than 2 cards
let firstCard, secondCard;
let moves = 0;
let matchesFound = 0;

/**
 * Initialize the Game
 */
function initGame() {
    // 1. Reset State
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
    moves = 0;
    matchesFound = 0;
    moveCountSpan.textContent = moves;
    gameBoard.innerHTML = ''; // Clear board

    // 2. Create Pairs (Duplicate the data array)
    cards = [...cardData, ...cardData];

    // 3. Shuffle Cards
    shuffle(cards);

    // 4. Generate HTML
    cards.forEach(cardItem => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.name = cardItem.name; // Store name for matching logic

        // Create Front Face (Icon)
        const frontFace = document.createElement('div');
        frontFace.classList.add('front-face');
        frontFace.textContent = cardItem.icon;

        // Create Back Face (Pattern)
        const backFace = document.createElement('div');
        backFace.classList.add('back-face');
        // Optional: Add a ? or logo to back face
        // backFace.textContent = '?'; 

        cardElement.appendChild(frontFace);
        cardElement.appendChild(backFace);
        gameBoard.appendChild(cardElement);

        // Add Click Event
        cardElement.addEventListener('click', flipCard);
    });
}

/**
 * Fisher-Yates Shuffle Algorithm
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Handle Card Flip
 */
function flipCard() {
    // Stop if board is locked (waiting for unflip) or clicking same card
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        // First click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    // Second click
    secondCard = this;
    incrementMoves();
    checkForMatch();
}

/**
 * Check if cards match
 */
function checkForMatch() {
    // Check if data-name attributes match
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    isMatch ? disableCards() : unflipCards();
}

/**
 * Logic for a Match
 */
function disableCards() {
    // Remove event listeners so they can't be clicked again
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    matchesFound++;
    resetBoard();

    // Check for Win Condition
    if (matchesFound === cardData.length) {
        setTimeout(() => alert(`You won in ${moves} moves!`), 500);
    }
}

/**
 * Logic for No Match
 */
function unflipCards() {
    lockBoard = true; // Lock board so user can't click others

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000); // 1 second delay
}

/**
 * Reset board state for next turn
 */
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function incrementMoves() {
    moves++;
    moveCountSpan.textContent = moves;
}

// Event Listeners
restartBtn.addEventListener('click', initGame);

// Start game on load
initGame();