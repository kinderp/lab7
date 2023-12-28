window.addEventListener("DOMContentLoaded", e => {
    const query1 = "http://localhost:3333/users?id=1234&token=abc";
    const query2 = "http://localhost:3333/users/5678/asdf";
    const query3 = "http://localhost:3333/users";

    let buttons = document.querySelectorAll(".buttons");
    buttons.forEach(b => {
        b.addEventListener("click", e => {
            let target = e.target
            let display = document.querySelector("#display");
            if(target.id == "1"){
                fetch(query1)
                    .then(response => {
                        console.log(response);
                        display.innerText = `1: ${response.status} ${response.statusText}`;
                    })
                    .catch(e => console.error(e.message));
            } else if(target.id == "2"){
                fetch(query2)
                    .then(response => {
                        console.log(response);
                        display.innerText = `2: ${response.status} ${response.statusText}`;
                    })
                    .catch(e => console.error(e.message));
            } else if(target.id == "3"){
                const tmpReq = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    },
                    body: new URLSearchParams(
                        {
                            'id': 9876,
                            'token': 'xxxx'
                        }
                    )
                }
                fetch(query3, tmpReq)
                    .then(response => {
                        console.log(response);
                        display.innerText = `3: ${response.status} ${response.statusText}`;
                    })
                    .catch(e => console.error(e.message));
            } else {
                console.error(`Unrecognized id ${target.id}`)
            }
        })
    });
});