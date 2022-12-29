(function () {
    'use strict';

    try {
        const yaml = require('js-yaml');
        const fs = require('fs');
        const doc = yaml.load(fs.readFileSync('../resources/properties.yml', 'utf8'), undefined);
        let gitHubToken = doc['github']['api']['token'];
        let domain = doc['github']['api']['url'];
        let url = `${domain}/users/cpriestley/events/public`;

        fetch(url, {headers: {'Authorization': gitHubToken}, method: 'GET'})
            .then(response => response.json())
            .then(data => data.filter(event => event.type === 'PushEvent'))
            .then(pushEvents => console.log(pushEvents[0]['created_at']));
    } catch (e) {
        console.log(e);
    }

    function wait(number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (isNaN(number)) {
                    reject('Argument must be a number');
                } else {
                    resolve();
                }
            }, number);
        });
    }

    try {
        wait(1000)
            .then(() => console.log(`You'll see this after 1 second`))
            .catch(error => console.log(error));

        wait(3000)
            .then(() => console.log(`You'll see this after 3 seconds`))
            .catch(error => console.log(error));

        wait()
            .then(() => console.log(`This line should NOT be printed`))
            .catch(error => console.log(error));
    } catch (e) {
        console.log(e);
    }

})();

