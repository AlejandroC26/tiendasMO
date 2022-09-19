import {NavLink, useLocation } from 'react-router-dom';
import $ from 'jquery';

function openCanvas(){
    $(".offcanvas-menu-wrapper").addClass("active");
    $(".offcanvas-menu-overlay").addClass("active");
}
function closeCanvas(){
    $(".offcanvas-menu-wrapper").removeClass("active");
    $(".offcanvas-menu-overlay").removeClass("active");
}


export default function Header(){
    const location = useLocation();
    function activeRoute(route){
        if(route === location.pathname) return true;
        else return false;
    }
    
    return (<>
        <div className={"offcanvas-menu-overlay"} onClick={closeCanvas}></div>
        <div className="offcanvas-menu-wrapper">
            <div className="offcanvas__close" onClick={closeCanvas}>+</div>
            <ul className="offcanvas__widget">
                <li><span className="icon_search search-switch"></span></li>
                <li><a href="#"><span className="icon_heart_alt"></span>
                    <div className="tip">2</div>
                </a></li>
                <li><a href="#"><span className="icon_bag_alt"></span>
                    <div className="tip">2</div>
                </a></li>
            </ul>
            <div className="offcanvas__logo">
                <a href="./index.html"><img src="logo.png" alt="logo"/></a>
            </div>
            <div id="mobile-menu-wrap">
                <div className="slicknav_menu">
                    <nav >
                        <ul>
                            <li className="active"><a href="./index.html">Home</a></li>
                            <li><a href="#">Women</a></li>
                            <li><a href="#">Men</a></li>
                            <li><a href="./shop.html">Shop</a></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="offcanvas__auth">
                <a href="#">Login</a>
                <a href="#">Register</a>
            </div>
        </div>
        <header className="header">
            <div id="preloder"><div className="loader"></div></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-2">
                        <div className="header__logo">
                            <a href="./index.html"><img src="logo.png" alt="logo"/></a>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <nav className="header__menu">
                            <ul>
                                <li className={activeRoute('/') ? "active" : ''}>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/shop">Shop</NavLink>
                                </li>
                                <li className={activeRoute('/blog') ? "active" : ''}>
                                    <NavLink to="/blog">Blog</NavLink>
                                </li>
                                <li className={activeRoute('/contact') ? "active" : ''}>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__right">
                            <div className="header__right__auth">
                                <a href="#">Login</a>
                                <a href="#">Register</a>
                            </div>
                            <ul className="header__right__widget">
                                <li><span className="icon_search search-switch"></span></li>
                                <li><a href="#"><span className="icon_heart_alt"></span>
                                    <div className="tip">2</div>
                                </a></li>
                                <li><a href="#"><span className="icon_bag_alt"></span>
                                    <div className="tip">2</div>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="canvas__open" onClick={openCanvas}>
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
    </>)
}

