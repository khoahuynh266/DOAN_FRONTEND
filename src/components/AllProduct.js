import React from 'react'
import Header from "./AdminCatologies";
import Main from "./Main";
import ProductCatologies from "./ProductCatologies";
import MainProducts from "./MainProducts";
import { Link } from 'react-router-dom';
import AdminDashboard from "./AdminDashboard";
import Footer from "./Footer"

class allProduct extends React.Component
{

    constructor(props) {
        super(props);
        this.state = {
            isLogin : false,
            Username : "",
            isAdmin : false,
            QueryStr : "",

        }
       this.logout=  this.logout.bind(this);
        this.Search = this.Search.bind(this);
    }



    Search()
    {
        if(this.QueryStr.value==="" || this.QueryStr.value == null)
        {
            this.QueryStr.value = "null";
        }
        document.location.href = "http://localhost:3000/home/Search/"+this.QueryStr.value;
    }

    logout()
    {
        window.localStorage.clear();
      /*  window.localStorage.removeItem("access_token");
        window.localStorage.removeItem("username"); // remove token là access token*/
        document.location.href = "http://localhost:3000/"; // chuyển về trang index
    }

    componentDidMount()
    {

        if(window.localStorage.getItem('username')) {
            this.setState({Username: window.localStorage.getItem('username'), isLogin: true});
        }
        if(window.localStorage.getItem('permission')==1) {
            this.setState({isAdmin: true , isLogin: true});
        }
    }

    render(){
        var cartItem = 0;
       if(window.localStorage.getItem("SaveProduct"))
        {
           cartItem = (JSON.parse(window.localStorage.getItem("SaveProduct")).length/4);
        }

        return(

            <div className="top0">

                <div className="bg-light">
                    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                        <Link to ="/home/page/1" className="navbar-brand col-sm-3 col-md-2 mr-0">Quang's shop</Link>
                        <input ref={input=>this.QueryStr = input} className="form-control form-control-dark w80" type="text" placeholder="Nhập tên sản phẩm , giá sản phẩm , nhà sản xuất,..."
                               aria-label="Search"/>

                          {/*  <Link to={'/home/Search/'+this.state.QueryStr} className="nav-link" >*/}
                                <div className="navbar-nav px-2">
                                    <button className="btn btn-primary" onClick={this.Search}>
                                        <i className="fa fa-search"></i>
                                       Tìm kiếm

                                    </button>
                                </div>
                           {/*  </Link>*/}

                        {this.state.isLogin === true?
                            <React.Fragment>
                                <div className="navbar-nav px-2">
                                    <Link to={'/home/Cart'} className="btn btn-primary">
                                        <i className="fa fa-shopping-basket"></i> Giỏ hàng của bạn({cartItem})
                                    </Link>
                                </div>

                            <div className="dropdown pdr30">


                                <button  className={this.state.isAdmin===true?"btn btn-primary bold bg-red" : "btn btn-primary bold"} data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">
                                            <b>Xin chào , {this.state.Username} !</b> < span
                                            className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link to="/home/profile" >Thông tin cá nhân</Link></li>
                                    <li><Link to='/home/Purchase' >Lịch sử mua hàng</Link></li>
                                    <li><Link to="/home/ChangePassword">Đổi mật khẩu</Link></li>

                                    {this.state.isAdmin === true ?
                                        <React.Fragment>
                                             <li><Link to="/admin">Admin</Link></li>
                                        </React.Fragment>

                                        :

                                        ""
                                    }

                                    <li role="separator" className="divider"></li>
                                    <li><a onClick={this.logout}>Thoát</a></li>
                                </ul>
                            </div>

                            </React.Fragment>

                            :
                                    <React.Fragment>
                                        <Link to='/home/register' className="nav-link" >
                                            <div className="navbar-nav px-2">
                                                <button className="btn btn-primary">
                                                    Đăng ký
                                                </button>
                                            </div>
                                        </Link>
                                        <Link to='/home/login' className="nav-link" >
                                            <div className="navbar-nav px-3">
                                                <button className="btn btn-primary">
                                                    Đăng nhập
                                                </button>
                                            </div>
                                        </Link>
                                    </React.Fragment>

                            }

                    </nav>

                    <div className="container-fluid bg-color">
                        <div className="row">
                                <ProductCatologies/>
                            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom ">
                                    <div className="btn-toolbar mb-2 mb-md-0">
                                        <div className="pdr30">
                                            <Link to='/home/BestSeller'  className="btn btn-sm btn-outline-secondary"role="button">
                                                <b className="fa fa-bars fontsize20"> 10 sản phẩm bán chạy nhất</b> < span className="caret"></span>
                                            </Link>
                                           {/* <ul className="dropdown-menu">
                                                <li><Link to="/home/profile" >10 sản phẩm bán chạy nhất</Link></li>
                                                <li><a>10 sản phẩm mới nhất</a></li>
                                                <li><Link to="/home/ChangePassword">10 sản phẩm được xem nhiều nhất</Link></li>
                                            </ul>*/}
                                            <Link to='/home/NewProducts'  className="btn btn-sm btn-outline-secondary" role="button">
                                                <b className="fa fa-bars fontsize20"> 10 sản phẩm mới nhất</b> < span className="caret"></span>
                                            </Link>
                                            <Link to='/home/ProductViewest'  className="btn btn-sm btn-outline-secondary"role="button">
                                                <b className="fa fa-bars fontsize20"> 10 sản phẩm được xem nhiều nhất</b> < span className="caret"></span>
                                            </Link>
                                            <div className="pull-right">
                                                <div className="pull-left ">
                                                    <i className="glyphicon glyphicon-phone-alt fontsize40">  </i>
                                                </div>
                                                <span></span>
                                                <div className="pull-right fontsize15 pdleft15">
                                                    <span className="bold "> HỖ TRỢ VIÊN</span>
                                                    <br/>
                                                    <span> 01222764497 </span>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <MainProducts/>

                            </main>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>
        );
    }

}

export default allProduct

