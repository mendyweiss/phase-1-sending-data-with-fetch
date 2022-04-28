// Add your code here

function submitData (userName, userEmail) {
    const bodyObj = {
        name: `${userName}`,
        email: `${userEmail}`
    }
    const configurationObj = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body:JSON.stringify(bodyObj)
    }
    return fetch("http://localhost:3000/users", configurationObj) 
            .then((resp) => {return resp.json()})
            .then((data) => {
                // const newDiv = document.createElement('div')
                const newParagraph = document.createElement('p')

                newParagraph.textContent = data.id;

                document.body.append(newParagraph);
                // document.querySelector('p').textContent = 'hi'//data.id
            })
            .catch((message) => {
                const newParagraph = document.createElement('p')

                newParagraph.textContent = message;

                document.body.append(newParagraph);
            })
        }
