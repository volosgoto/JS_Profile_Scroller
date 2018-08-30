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



function nextProfile(params) {
    
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

