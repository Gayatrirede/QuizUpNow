const ALL_QUIZ_DATA = [
  // WEB DEVELOPMENT
  
  //  EASY 
  { topic: "web_dev", difficulty: "easy", id: "WD-E1", question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Transfer Markup Language", "Home Tool Markup Language", "Hyperlink Text Modern Language"], answer: "Hyper Text Markup Language" },
  { topic: "web_dev", difficulty: "easy", id: "WD-E2", question: "Which HTML tag is used to display images?", options: ["<image>", "<img>", "<src>", "<pic>"], answer: "<img>" },
  { topic: "web_dev", difficulty: "easy", id: "WD-E3", question: "What is the correct HTML tag for inserting a line break?", options: ["<break>", "<lb>", "<br>", "<newline>"], answer: "<br>" },
  { topic: "web_dev", difficulty: "easy", id: "WD-E4", question: "Which CSS property changes text color?", options: ["text-color", "font-color", "color", "background-color"], answer: "color" },
  { topic: "web_dev", difficulty: "easy", id: "WD-E5", question: "Which tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<url>"], answer: "<a>" },
  { topic: "web_dev", difficulty: "easy", id: "WD-E6", question: "In HTML, which tag is used for the largest heading?", options: ["<h6>", "<head>", "<h1>", "<heading>"], answer: "<h1>" },
  { topic: "web_dev", difficulty: "easy", id: "WD-E7", question: "Which property sets the background color in CSS?", options: ["background-color", "bgcolor", "color", "background-style"], answer: "background-color" },
  { topic: "web_dev", difficulty: "easy", id: "WD-E8", question: "Which HTML element contains the main content?", options: ["<main>", "<body>", "<content>", "<div>"], answer: "<body>" },
  { topic: "web_dev", difficulty: "easy", id: "WD-E9", question: "Which symbol is used to indicate an ID in CSS?", options: [".", "#", "*", "&"], answer: "#" },
  { topic: "web_dev", difficulty: "easy", id: "WD-E10", question: "Which language is used to style web pages?", options: ["HTML", "CSS", "Java", "Python"], answer: "CSS" },

  // MEDIUM (10)
  { topic: "web_dev", difficulty: "medium", id: "WD-M1", question: "Which attribute is used to specify an inline style in HTML?", options: ["font", "style", "class", "design"], answer: "style" },
  { topic: "web_dev", difficulty: "medium", id: "WD-M2", question: "Which CSS property controls the text size?", options: ["font-style", "text-size", "font-size", "text-style"], answer: "font-size" },
  { topic: "web_dev", difficulty: "medium", id: "WD-M3", question: "Inside which HTML element do we put JavaScript?", options: ["<js>", "<scripting>", "<javascript>", "<script>"], answer: "<script>" },
  { topic: "web_dev", difficulty: "medium", id: "WD-M4", question: "How do you write a comment in CSS?", options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"], answer: "/* comment */" },
  { topic: "web_dev", difficulty: "medium", id: "WD-M5", question: "Which HTML attribute specifies an alternate text for an image?", options: ["title", "alt", "src", "href"], answer: "alt" },
  { topic: "web_dev", difficulty: "medium", id: "WD-M6", question: "Which of the following positions an element relative to its first positioned ancestor?", options: ["fixed", "absolute", "relative", "static"], answer: "absolute" },
  { topic: "web_dev", difficulty: "medium", id: "WD-M7", question: "Which of these is NOT a JavaScript data type?", options: ["number", "boolean", "float", "string"], answer: "float" },
  { topic: "web_dev", difficulty: "medium", id: "WD-M8", question: "Which HTML tag is used to define an unordered list?", options: ["<ol>", "<ul>", "<list>", "<dl>"], answer: "<ul>" },
  { topic: "web_dev", difficulty: "medium", id: "WD-M9", question: "What does CSS stand for?", options: ["Creative Style Sheets", "Colorful Style Syntax", "Cascading Style Sheets", "Computer Styled Sheets"], answer: "Cascading Style Sheets" },
  { topic: "web_dev", difficulty: "medium", id: "WD-M10", question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Method", "Document Order Management", "Digital Object Module"], answer: "Document Object Model" },

  // HARD (10)
  { topic: "web_dev", difficulty: "hard", id: "WD-H1", question: "Which JavaScript method converts a JSON string into an object?", options: ["JSON.convert()", "JSON.toObject()", "JSON.parse()", "JSON.stringify()"], answer: "JSON.parse()" },
  { topic: "web_dev", difficulty: "hard", id: "WD-H2", question: "Which HTTP status code means 'Not Found'?", options: ["200", "301", "404", "500"], answer: "404" },
  { topic: "web_dev", difficulty: "hard", id: "WD-H3", question: "Which of these CSS units is relative to the font size of the root element?", options: ["em", "px", "rem", "%"], answer: "rem" },
  { topic: "web_dev", difficulty: "hard", id: "WD-H4", question: "Which HTML5 element is used to play video files?", options: ["<media>", "<movie>", "<video>", "<play>"], answer: "<video>" },
  { topic: "web_dev", difficulty: "hard", id: "WD-H5", question: "Which keyword is used to declare a constant in JavaScript?", options: ["let", "var", "constant", "const"], answer: "const" },
  { topic: "web_dev", difficulty: "hard", id: "WD-H6", question: "Which CSS property controls stacking order?", options: ["z-index", "position", "display", "float"], answer: "z-index" },
  { topic: "web_dev", difficulty: "hard", id: "WD-H7", question: "Which protocol does HTTPS use for encryption?", options: ["FTP", "SSL/TLS", "SSH", "IPSec"], answer: "SSL/TLS" },
  { topic: "web_dev", difficulty: "hard", id: "WD-H8", question: "Which HTML element is used to define important text?", options: ["<strong>", "<bold>", "<em>", "<b>"], answer: "<strong>" },
  { topic: "web_dev", difficulty: "hard", id: "WD-H9", question: "What will `typeof NaN` return in JavaScript?", options: ["undefined", "NaN", "number", "object"], answer: "number" },
  { topic: "web_dev", difficulty: "hard", id: "WD-H10", question: "What does API stand for?", options: ["Application Programming Interface", "Applied Program Instruction", "Advanced Programming Integration", "Automated Program Interaction"], answer: "Application Programming Interface" },

  // ==========================
  // 🌍 GENERAL KNOWLEDGE
  // ==========================

  // EASY (10)
  { topic: "gk", difficulty: "easy", id: "GK-E1", question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Mercury"], answer: "Mars" },
  { topic: "gk", difficulty: "easy", id: "GK-E2", question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
  { topic: "gk", difficulty: "easy", id: "GK-E3", question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"], answer: "Alexander Graham Bell" },
  { topic: "gk", difficulty: "easy", id: "GK-E4", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Pacific Ocean" },
  { topic: "gk", difficulty: "easy", id: "GK-E5", question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Chennai", "Kolkata"], answer: "Delhi" },
  { topic: "gk", difficulty: "easy", id: "GK-E6", question: "Which festival is known as the Festival of Lights?", options: ["Holi", "Diwali", "Eid", "Christmas"], answer: "Diwali" },
  { topic: "gk", difficulty: "easy", id: "GK-E7", question: "Which animal is known as the Ship of the Desert?", options: ["Camel", "Elephant", "Horse", "Donkey"], answer: "Camel" },
  { topic: "gk", difficulty: "easy", id: "GK-E8", question: "Which country is known as the Land of the Rising Sun?", options: ["Japan", "China", "Korea", "Thailand"], answer: "Japan" },
  { topic: "gk", difficulty: "easy", id: "GK-E9", question: "Who was the first President of India?", options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Indira Gandhi", "Sardar Patel"], answer: "Dr. Rajendra Prasad" },
  { topic: "gk", difficulty: "easy", id: "GK-E10", question: "Which is the smallest continent?", options: ["Asia", "Europe", "Australia", "Africa"], answer: "Australia" },

  // MEDIUM (10)
  { topic: "gk", difficulty: "medium", id: "GK-M1", question: "Who wrote the National Anthem of India?", options: ["Rabindranath Tagore", "Mahatma Gandhi", "Bankim Chandra Chatterjee", "Sarojini Naidu"], answer: "Rabindranath Tagore" },
  { topic: "gk", difficulty: "medium", id: "GK-M2", question: "Which planet is known as the Blue Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: "Earth" },
  { topic: "gk", difficulty: "medium", id: "GK-M3", question: "Who discovered gravity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Charles Darwin"], answer: "Isaac Newton" },
  { topic: "gk", difficulty: "medium", id: "GK-M4", question: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
  { topic: "gk", difficulty: "medium", id: "GK-M5", question: "Which is the largest desert in the world?", options: ["Sahara", "Gobi", "Arabian", "Kalahari"], answer: "Sahara" },
  { topic: "gk", difficulty: "medium", id: "GK-M6", question: "Which Indian city is known as the City of Joy?", options: ["Kolkata", "Mumbai", "Delhi", "Chennai"], answer: "Kolkata" },
  { topic: "gk", difficulty: "medium", id: "GK-M7", question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Gd", "Go"], answer: "Au" },
  { topic: "gk", difficulty: "medium", id: "GK-M8", question: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" },
  { topic: "gk", difficulty: "medium", id: "GK-M9", question: "Who was the first woman Prime Minister of India?", options: ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sushma Swaraj"], answer: "Indira Gandhi" },
  { topic: "gk", difficulty: "medium", id: "GK-M10", question: "What is the largest mammal in the world?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], answer: "Blue Whale" },

  // HARD (10)
  { topic: "gk", difficulty: "hard", id: "GK-H1", question: "Who was the first man to step on the moon?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"], answer: "Neil Armstrong" },
  { topic: "gk", difficulty: "hard", id: "GK-H2", question: "In which year did World War II end?", options: ["1942", "1945", "1948", "1950"], answer: "1945" },
  { topic: "gk", difficulty: "hard", id: "GK-H3", question: "Which is the coldest place on Earth?", options: ["Antarctica", "Arctic", "Greenland", "Iceland"], answer: "Antarctica" },
  { topic: "gk", difficulty: "hard", id: "GK-H4", question: "Which Indian scientist won the Nobel Prize for Physics in 1930?", options: ["C.V. Raman", "Homi Bhabha", "Vikram Sarabhai", "A.P.J. Abdul Kalam"], answer: "C.V. Raman" },
  { topic: "gk", difficulty: "hard", id: "GK-H5", question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"], answer: "Leonardo da Vinci" },
  { topic: "gk", difficulty: "hard", id: "GK-H6", question: "Which is the largest island in the world?", options: ["Greenland", "New Guinea", "Borneo", "Madagascar"], answer: "Greenland" },
  { topic: "gk", difficulty: "hard", id: "GK-H7", question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Dollar"], answer: "Yen" },
  { topic: "gk", difficulty: "hard", id: "GK-H8", question: "Which element has the chemical symbol ‘O’?", options: ["Osmium", "Oxygen", "Oxide", "Oganesson"], answer: "Oxygen" },
  { topic: "gk", difficulty: "hard", id: "GK-H9", question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
  { topic: "gk", difficulty: "hard", id: "GK-H10", question: "Which Indian missile is known as 'Agni'?", options: ["Ballistic missile", "Cruise missile", "Guided missile", "Surface-to-air missile"], answer: "Ballistic missile" }
];
