// arguments & parameters 

const speak = function (name = 'andy', time = 'night'){
    console.log(`good ${time} ${name}`);
};


speak();
speak('mike', 'day');

