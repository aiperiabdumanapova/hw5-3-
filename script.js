const url = 'https://api.telegram.org/bot7207231079:AAFR21ydwp2ekBoB3ZTgIuQcPFQiCT9DD7U/sendMessage';
function sendMessage(inputValue) {
    const params = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: -1002043719567,
            text: inputValue,
        })
    };
    fetch(url, params)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}

const img = 'https://api.telegram.org/bot7207231079:AAFR21ydwp2ekBoB3ZTgIuQcPFQiCT9DD7U/sendPhoto';
function sendPhoto(photoValue, caption) {
    const photoParams = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            photo: photoValue,
            chat_id: -1002043719567,
            caption: caption
        })
    };
    fetch(img, photoParams)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}
document.querySelector('form').onsubmit = (event) => {
    event.preventDefault();
    const photoValue = document.querySelector('#photo').value;
    const inputValue = document.querySelector('#description').value;
    sendPhoto(photoValue, inputValue);
};