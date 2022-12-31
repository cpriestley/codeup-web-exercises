(function() {
    const reviewObj = {
        restaurant_id: 1,
        name: 'Clayton',
        rating: 5,
        comments: "It wasn't great, but I hate leaving bad reviews"
    };
    const url = 'https://codeup-restful-example.glitch.me/reviews';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewObj),
    };
    fetch(url, options)
        .then( response => console.log(response) ) /* review was created successfully */
        .catch( error => console.error(error) ); /* handle errors */
}());