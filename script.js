document.getElementById('contribute-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const file = document.getElementById('file').files[0];
    const author = document.getElementById('author').value;
    const language = document.getElementById('language').value;

    const archiveEntry = document.createElement('div');
    archiveEntry.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p><strong>File:</strong> ${file.name}</p>
        <p><strong>Submitted by:</strong> ${author}</p>
        <p><strong>Language:</strong> ${language}</p>
    `;

    document.getElementById('archive-list').appendChild(archiveEntry);

    updateVisualization();

    document.getElementById('contribute-form').reset();
});

function updateVisualization() {
    const labels = ['Language 1', 'Language 2', 'Language 3'];
    const data = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];

    const ctx = document.getElementById('contributionChart').getContext('2d');
    const contributionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Contributions',
                data: data,
                backgroundColor: ['#4CAF50', '#81C784', '#FFEB3B'],
                borderColor: '#333',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

document.getElementById('premium-button').addEventListener('click', function() {
    alert('Thank you for upgrading to Premium!');
});

const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.classList.add('fade-in');
});

const aiResponses = {
    "what is noise pollution?": "Noise pollution is unwanted or harmful sound in the environment.",
    "how does it affect indigenous cultures?": "It disrupts traditional practices, communication, and the natural sounds of the environment.",
    "how can we preserve indigenous languages?": "We can document them using technology, teaching them in schools, and creating digital archives.",
    "what are the benefits of preserving culture?": "Preserving culture helps maintain diversity, fosters community identity, and contributes to knowledge and history.",
    "what can technology do for indigenous preservation?": "Technology can create platforms for documentation, sharing stories, and connecting communities."
};

document.getElementById('ask-button').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const response = aiResponses[userInput] || "I'm sorry, I don't have an answer for that. Try asking something else!";
    
    document.getElementById('ai-response').innerText = response;
    
    document.getElementById('user-input').value = '';
});

function createMessageElement(text, isUserMessage) {
    const messageDiv = document.createElement('div');
    messageDiv.className = isUserMessage ? 'user-message' : 'ai-message';
    messageDiv.innerText = text;
    return messageDiv;
}

async function fetchAIResponse(userInput) {
    const response = await fetch('https://api.example.com/getResponse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer d4b9363a10164f4787b54a91a03c2dab'
        },
        body: JSON.stringify({ query: userInput })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.answer;
}

document.getElementById('ask-button').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
        const userMessageElement = createMessageElement(userInput, true);
        document.getElementById('ai-response').appendChild(userMessageElement);

        try {
            const aiResponse = await fetchAIResponse(userInput);
            setTimeout(() => {
                const aiMessageElement = createMessageElement(aiResponse, false);
                document.getElementById('ai-response').appendChild(aiMessageElement);
            }, 500);
        } catch (error) {
            console.error('Error fetching AI response:', error);
            const errorMessageElement = createMessageElement("There was an error retrieving the answer. Please try again.", false);
            document.getElementById('ai-response').appendChild(errorMessageElement);
        }

        document.getElementById('user-input').value = '';
    }
});
document.getElementById('contribute-form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const file = document.getElementById('file').files[0];
    const author = document.getElementById('author').value;
    const language = document.getElementById('language').value;

   
    const archiveEntry = document.createElement('div');
    archiveEntry.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p><strong>File:</strong> ${file.name}</p>
        <p><strong>Submitted by:</strong> ${author}</p>
        <p><strong>Language:</strong> ${language}</p>
    `;

    
    document.getElementById('archive-list').appendChild(archiveEntry);

    
    updateVisualization();

    document.getElementById('contribute-form').reset();
});
function updateVisualization() {
    const labels = ['Language 1', 'Language 2', 'Language 3']; 
    const data = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]; 

    const ctx = document.getElementById('contributionChart').getContext('2d');
    const contributionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Contributions',
                data: data,
                backgroundColor: ['#4CAF50', '#81C784', '#FFEB3B'],
                borderColor: '#333',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
async function fetchAIResponse(userInput) {
    const response = await fetch('https://api.example.com/getResponse', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer d4b9363a10164f4787b54a91a03c2dab' 
        },
        body: JSON.stringify({ query: userInput }) 
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.answer; 
}


document.getElementById('ask-button').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
        
        const userMessageElement = createMessageElement(userInput, true);
        document.getElementById('ai-response').appendChild(userMessageElement);

        try {
            const aiResponse = await fetchAIResponse(userInput);
            
            setTimeout(() => {
                const aiMessageElement = createMessageElement(aiResponse, false);
                document.getElementById('ai-response').appendChild(aiMessageElement);
            }, 500); 
        } catch (error) {
            console.error('Error fetching AI response:', error);
            const errorMessageElement = createMessageElement("There was an error retrieving the answer. Please try again.", false);
            document.getElementById('ai-response').appendChild(errorMessageElement);
        }

        document.getElementById('user-input').value = '';
    }
});
