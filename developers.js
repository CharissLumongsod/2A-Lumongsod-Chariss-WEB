// developers js

document.addEventListener('DOMContentLoaded', function () {
    const developerContainer = document.getElementById('developer-container');

    // JavaScript variables for developer information
    const developers = [
        {
            name: 'Zynah Claire Umpad',
            role: 'Lead Developer',
            image: 'img/zynah.jpg',
            audio: 'audios/zyy.mp3'
        },
        {
            name: 'Cassey Gulfan',
            role: 'UX/UI Designer',
            image: 'img/cassey2.jpg',
            audio: 'audios/c.m4a'
        },
        {
            name: 'Mavene Dinoy',
            role: 'Backend Engineer',
            image: 'img/mavene.jpg',
            audio: 'audios/mave.mp3'
        },
        {
            name: 'Chariss Lumongsod',
            role: 'Community Manager',
            image: 'img/chariss.jpg',
            audio: 'audios/char.mp3'
        }
    ];

    function createDeveloperCard(developer) {
        const card = document.createElement('div');
        card.className = 'card';

        const image = document.createElement('img');
        image.src = developer.image;
        image.alt = developer.name;
        image.className = 'card__image';

        const name = document.createElement('h2');
        name.className = 'card__name';
        name.textContent = developer.name;

        const role = document.createElement('p');
        role.textContent = developer.role;

        const audio = document.createElement('audio');
        audio.controls = true;

        const audioSource = document.createElement('source');
        audioSource.src = developer.audio;

        // Determine the audio type based on the file extension
        const audioType = developer.audio.split('.').pop();
        audioSource.type = `audio/${audioType}`;

        audio.appendChild(audioSource);

        const messageButton = document.createElement('button');
        messageButton.className = 'btn draw-border';
        messageButton.textContent = 'Message';

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(role);
        card.appendChild(audio);
        card.appendChild(messageButton);

        return card;
    }

    function renderDevelopers() {
        for (const developer of developers) {
            const card = createDeveloperCard(developer);
            developerContainer.appendChild(card);
        }
    }

    renderDevelopers();
});
