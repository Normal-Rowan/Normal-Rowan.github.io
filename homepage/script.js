/*my code only logs to client side */
document.addEventListener('DOMContentLoaded', function(){

    let details = document.getElementById('logDetails');
    details.addEventListener('click', function() {
        let address = document.getElementById('address').value;
        console.log(address);
        let message = document.getElementById('message').value;
        console.log(message);
    });
});
