import React from 'react';
import { Link } from 'react-router-dom'

interface Layout {
    children : React.ReactNode;
}

const Layout : React.FC<Layout> = ({ children }) => {
    return (
        <div id="wrap">
            <header>
                <nav className="header-nav">
                    <ul>
                        <li><Link to="/todo">할일관리</Link></li>
                        <li><Link to="/">메인로고</Link></li>
                        <li><Link to="/stats">통계관리</Link></li>
                    </ul>
                </nav> 
            </header>
            <article className="container">
                {children}
            </article>
            <footer>
                <small className="copyright">CopyRight ISA(RYU YOON JONG).</small>
            </footer>
        </div>
    );
}

export default Layout;