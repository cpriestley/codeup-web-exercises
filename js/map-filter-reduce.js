const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 1) Use .reduce to get the unique list of languages from the list of users.
function getUniqueLanguagesWithReduce() {
    let languages = users.reduce((languages, user) => {
        languages.push(...user.languages);
        return languages;
    }, []);
    return [...new Set(languages.map(l => l))];
}

function getUniqueLanguagesWithoutReduce() {
    let languages = new Set();
    users.forEach(user => user.languages.forEach(l => languages.add(l)));
    return [...languages];
}

//2) Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
function usersWithAtLeast3Languages() {
    return users.filter(user => user.languages.length > 2)
}

//3) Use .map to create an array of strings where each element is a user's email address
function getEmails() {
    return users.map(user => {
        return user.email
    });
}

//4) Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
function getAggregateYearsOfExperience() {
    return users.reduce((years, user) => {
        years += user.yearsOfExperience;
        return years;
    }, 0);
}

function getAverageYearsOfExperience() {
    return getAggregateYearsOfExperience() / users.length;
}

//5) Use .reduce to get the longest email from the list of users.
function getLongestEmail() {
    return users.reduce((email, user) => {
        email = email.length > user.email.length ? email : user.email;
        return email;
    }, "");
}

//6) Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
function getUserNames() {
    let names = users.reduce((names, user) => {
        names.push(user.name);
        return names
    }, []);
    return names.join(', ');
}

console.log(usersWithAtLeast3Languages());
console.log(getUniqueLanguagesWithReduce());
console.log(getUniqueLanguagesWithoutReduce());
console.log(getEmails());
console.log(getAggregateYearsOfExperience());
console.log(getAverageYearsOfExperience());
console.log(getLongestEmail());
console.log(getUserNames());