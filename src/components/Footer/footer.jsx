import React from 'react';
import { Layout } from 'antd';
import './footer.css';

const { Header, Footer } = Layout;

export default function End() {
    return <>
        <div className="main-continer">
            <Footer>
                <p className="cliam-txt">Copyright © 2020 - 2021 · BY: ASAD SULEMAN || All Rights Reserved</p>
            </Footer>

        </div>
    </>;
}