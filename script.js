// Array of readings
const content = [
    "Ulises Carrion - Mail Art and the Big Monster from Second Thoughts discusses the concept of Mail Art, which uses the postal system to distribute art, rather than mail being the artistic medium itself. Although I have often thought of Mail as an easy, inexpensive art form, the author made me realize that creating impactful Mail Art requires significant time, money, and effort like any artwork. Another big idea I noticed is that Mail Art aims to challenge societal control and connect people, with its success measured by the response and engagement it generates rather than aesthetic beauty.",
    "Laurel Schwulst & Edouard U - Selections from Creative Independent and Arena How Do You Use the Internet Mindfully discuss the nature and potential of websites being more than just utilitarian tools but as spaces for creativity, meaning-making, and artistic expression. Lauren Schwulst provided multiple metaphors to encourage artists to view websites as opportunities to build unique worlds that reflect their identities and imaginations. Édouard U. further builds on these ideas by emphasizing the practice of constructing and developing “personal abstractions via personal knowledge networks,” a specific way of learning that relies on the web and its networks.",
    "Olia Lialina - STILL THERE Ruins and Templates of Geocities from Lost and Living (in) Archives goes into detail about the history and significance of Geocities, a free web hosting service that allowed users to create their own personal web pages in the 1990s and is also a valuable snapshot of early amateur web design. Olia Lialina emphasizes what we can learn from analyzing the archived Geocities pages, like identifying what the popular design elements were at the time and understanding how web pages 'age'. Even though most Geocities pages are now defunct, some were retained due to the efforts of an Archive team and these can be used to show the web's continual evolution and provide an important perspective on the history and temporality of the web.",
    "Bojana Coklyat & Shannon Finnegan - Selections from Alt-Text as Poetry Workbook is a particularly practical one as it elaborates upon the concept of alt-text and in expansion the significance of web accessibility. Alt-text (or alternative text) is often text descriptions of images present on a website, with a main goal to assist the visually impaired who need to use screenreaders to access the web and its contents. The reading then goes a step further to discuss the artistic potential of alt-text being poetic while also retaining its descriptive and helpful power.",
    "_A Personal Computer for Children of All Cultures_ from Decolonising the Digital demonstrates how computing systems we view as neutral technologies are actually laden with cultural biases, particularly favoring the English language. More specifically, most if not all programming languages use English keywords and conventions for naming elements and struggle when it comes to rendering non-Latin scripts. Unfortunately, attempts to create a purely non-English programming language have failed, as they inevitably need to interface with the Anglocentric existing software ecosystem. This highlights technology's role in perpetuating Western linguistic hegemony, contrary to ideals of universal access. However, the author's proposed solution of an emergent interlingua built collectively across human languages is an intriguing, if not idealistic, path toward a more equitably and technologically developed society.",
    "Ben Duvall - Selections from New Modernism(s) explores how the treatment of surface and sign in graphic design has changed from modernism to postmodernism and now to what the author calls 'hypermodernism'. In modernism, signs had a one-to-one relationship between signifier and signified, while postmodernism embraced a more fragmented and ambiguous usage of signs. Now in the internet age, the author argues signs have become hyperlinks - compressed icons that contain an almost infinite chain of signifieds and referents, similar to how meaning is conveyed online.",
    "Dot Tuer - Beyond the New Media Frame The Poetics of Absence in Vera Frenkel's String Games represents an early intersection of performance, conceptual art, and new media, presciently exploring themes of absence, loss, and memory through networked video technology. Adapting from the classic game of Cat's Cradle, the artist had participants in different cities pass an imaginary loop of string between them through improvised gestures and sequences transmitted over live video, highlighting the gaps and ellipses inherent in communication mediated by screens. In later works, Frenkel builds on the poetics of absence established in String Games to evoke displacement, trauma, and the fragmented nature of historical memory.",
    "Paul Soulellis - Performing the Feed discusses the evolution of publishing from physical interruptions to endless digital feeds, arguing that a new paradigm has emerged characterized by fluid, algorithmic, and atmospheric data flows. The author suggests that we need new techniques to discern, archive, and interrupt the smooth flow of algorithmic media, such as printing it out or leaking closed systems. Artists and archivists are positioned as key figures in helping us negotiate between fixed and flowing information to prepare for an uncertain future dominated by realistic predictive feeds.",
    "Neta Bomani & Sabii Borno - Beyond Dark Matter from Logic Issue 15 Beacons was a powerful and thought-provoking reading that explores the complex history of the Civil Rights Movement and the role of technology in shaping society. Using the narrative of a character named Gem being sucked into her computer and subsequently learning of its underlyings, the text delves into the history of the Civil Rights Movement and the Black Power Movement in the United States during the 1950s and 1960s, highlighting the surveillance and suppression of these movements by the U.S. government. The passage also touches on the formation of NASA in 1958 and the Community Renewal Program in 1959, which used computer simulations and systems analysis for urban planning and predicting Black urban rebellions, emphasizing the importance of understanding the full story behind historical events and the potential for technology to be used as a tool of control and oppression.",
    "Boris Groys - Art on the Internet discusses how the emergence of the Internet has radically changed the way art and literature operate, leading to their 'defictionalization.' The Internet functions as a space of total transparency and surveillance, where even the process of art production is exposed from beginning to end, subjecting creative workers to a panoptic gaze. This shift has fundamentally altered the viewer's engagement, turning art viewing into an active, framing activity rather than a passive reception."
  ];

  // Array to keep track of displayed content
  const displayedContent = [];
  
  // Function to create a new random box
  function createRandomBox() {
    if (displayedContent.length === content.length) {
        alert("That was all of my readings!");
        return;
    }

    const leftcol = document.getElementById("leftcol");
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * content.length);
    } while (displayedContent.includes(randomIndex));
    
    const randomContent = content[randomIndex];
    displayedContent.push(randomIndex);
    
    const box = document.createElement("div");
    box.className = "random-box";
    
    const contentDiv = document.createElement("div");
    contentDiv.textContent = randomContent;
    box.appendChild(contentDiv);
    
    const leftcolRect = leftcol.getBoundingClientRect();
    const boxWidth = 200;
    const boxHeight = 200;
    const maxX = leftcolRect.width - boxWidth - 150;
    const maxY = leftcolRect.height - boxHeight - 100;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    box.style.left = randomX + "px";
    box.style.top = randomY + "px";
    
    box.addEventListener("click", function() {
        box.remove();
    });
    
    leftcol.appendChild(box);
    }
  
// Add click event listener to the left scrollable div
document.getElementById("spawnButton").addEventListener("click", createRandomBox);