import React from 'react';
 
class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: false,
            isLoaded: false,
            list: [],
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/BanHang/", {mode: "cors"})
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        list: result
                    });
                    console.log(result);// Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                },

                (error) => {
                    console.log("error cmnr");
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        console.log("did mount");
    }

    handlerDelete(i)
    {
        var req = "http://localhost:3001/api/BanHang/"+i;
        fetch(req, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(()=>this.reload());
    }

    render() {
        const {error, isLoaded, list} = this.state;
        console.log(list);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;

        }
        else
            return (
                <div>
                    <h5 className="fontcolor text-center">Danh sách sản phẩm</h5>

                    <div className="paddingtop text-center fontcolor bg-black">
                        <div className="album py-5 bg-light bg-black">
                            <div className="row">
                                {list.map(item=>(
                                    <div className="col-md-4" key={item.id} >
                                        <img className="card-img-top " src={item.img_link} alt={item.id}
                                             width="350"
                                             height="350"/>
                                        <div className="card-body">
                                            <p className="card-text text-center fontcolor" >
                                                {item.ProName}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group pdleft text-center">
                                                    <button type="button"  onClick={this.handlerDelete.bind(this,item.id)} className="btn btn-danger"
                                                    >Delete
                                                    </button>
                                                    <button type="button" className="btn btn-primary"
                                                            data-toggle="modal"
                                                    >Edit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <a href="#" className="go-top">Back to top</a>
                </div>
            )
    }
}


export default Home


