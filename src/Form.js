import React from 'react';

export const Form = props => {

    const submit = (event) => {
        // event.preventDefault();
        let input = {};
        for (let i in event.target.elements) {
            let ele = event.target.elements[i];
            if (ele.tagName !== "INPUT") continue;

            console.log(ele.name, ele.value);
            input[ele.name] = ele.value;
        }
        
        fetch(`http://localhost:5984/producten/${input.naam}`, {method: "PUT", body: JSON.stringify(input)}).then(response => response.json()).then(json => console.log(json))
    };

    return(
        <div>
            <form onSubmit={submit}>
                <input type="text" name="naam" placeholder="naam"></input>
                <input type="number" name="aantal" min="1" defaultValue="1"></input>
                <input type="text" name="prijs" placeholder="prijs"></input>
                <input type="date" name="datum"></input>
                <button type="submit">Invoeren</button>
            </form>
        </div>
    );
}