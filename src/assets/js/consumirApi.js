const url = 'https://api.adviceslip.com/advice'

return fetch(url, {
        method: 'GET'
        .then((response) => {
            if(!response.ok || response.status == 203 ) {
                throw new Error(response.statusText);
            }
            return response.json()
        })
        .catch(error => {
            console.log(error)
        })
})
