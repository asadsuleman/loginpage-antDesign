import React, { useState } from 'react';

import { Random, Wave } from 'react-animated-text';
import './Header.css';


export default function Header() {
    // const [state,setState] = useState(true);
    return <>
        <div className="container">

            <h1 className="main-text"><Wave text="WELCOME" effect="pop" effectChange={1.1} delay={4.0}   /></h1>





        </div>
    </>;
}