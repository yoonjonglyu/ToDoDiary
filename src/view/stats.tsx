import React from 'react';
import Layout from '../components/layout';

const Stats: React.FC<any> = () => {
    return (
    <Layout>
        <div>
            <h1>통계</h1>
            <p>
                여기서 통계된 데이터를 확인하고 다운로드 받는다.
            </p>
        </div>
    </Layout>
    );
}

export default Stats;