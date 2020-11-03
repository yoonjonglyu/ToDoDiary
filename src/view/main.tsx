import React from 'react';
import Layout from '../components/layout';

const Main: React.FC<any> = () => {
    return (
    <Layout>
        <div>
            <h1>Main</h1>
            <p>
                여기서 스케쥴링 된 todo를 보고 체크한다.
            </p>
        </div>
    </Layout>
    );
}

export default Main;