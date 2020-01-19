import React, { useState, useEffect, Component } from 'react';

export class Productenlijst extends Component {

    state = {
        producten: []
    }

    componentDidMount = () => {
        this.props.updateData();
        console.log(this.props)
    };

    

    render() {

        
        return (
            <div>
                <ul>
                    {

                        this.props.producten.map((product, idx) => <li key={idx}>{product.naam}</li>)
                    }
                </ul>
            </div>
        );
    }
}




// export const Productenlijst = () => {
//     const [producten, setProducten] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:5984/producten/_all_docs')
//             .then(response => response.json())
//             .then(json => {
//                 for (let prop in json.rows) {
//                     fetch(`http://localhost:5984/producten/${json.rows[prop].key}`)
//                         .then(response => response.json())
//                         .then(json => {
//                             let temp = producten;
//                             temp.push(json);
//                             setProducten(temp);

//                             // forceUpdate();
//                             console.log("Binnenste: ", producten);
//                         })
//                 }
//                 console.log("Middelste: ", producten);
//             });
//             console.log("Buitenste: ", producten);
//     });

//     console.log("Funct: ", producten);

//     return (
//         <div>
//             <h1>{producten}</h1>
//         <ul>
//             {
//                 producten.map(product => <li>halo</li>)
//             }
//         </ul>
//         </div>
//     );
// }