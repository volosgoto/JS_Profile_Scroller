let data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingFor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Sara Smith',
        age: 25,
        gender: 'female',
        lookingFor: 'male',
        location: 'Denwer CO',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    },
    {
        name: 'Sam Sam',
        age: 45,
        gender: 'male',
        lookingFor: 'female',
        location: 'New York NY',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    },
    {
        name: 'Mary Mar',
        age: 38,
        gender: 'female',
        lookingFor: 'male',
        location: 'Los Altos CA',
        image: 'https://randomuser.me/api/portraits/men/84.jpg'
    }
];


let profiles = profileIterator(data);

// Event next click
document.querySelector('#next').addEventListener('click', nextProfile);


// Next profile display
function nextProfile() {
    // Current profile
    let currentProfile = profiles.next().value;
    
    document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">LookingFor: ${currentProfile.lookingFor}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
        </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `
        <img src="${currentProfile.image}" alt="User Image">
    `;
    
}

// User iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ? 
            { value: profiles[nextIndex++], done: false } : 
            { done: true }; 
        }
    };
}

