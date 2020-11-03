import React from 'react';
import Layout from '../components/layout';

const Todo: React.FC<any> = () => {
    return (
        <Layout>
            <div>
                <h1>todo</h1>
                <p>
                    여기서 할일목록을 관리한다.
                </p>
            </div>
        </Layout>
    );
}

export default Todo;