export default function Cardcomp(props) {
    return <>
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <a href="#!"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt="..." /></a>
                <div className="card-body">
                    <h4 className="card-title"><a href="#!">{props.productdata.name}</a></h4>
                    <h5>${props.productdata.price}</h5>
                    <p className="card-text">{props.productdata.description}</p>
                </div>
                <div className="card-footer"><small className="text-muted">★ ★ ★ ★ ☆</small>
                <span> </span>
                    <span>
                        <button className="btn btn-xs btn-primary" onClick={()=>{props.handleCart(props.productdata)}} >Add Cart</button>
                    </span>

                </div>
            </div>
        </div>
    </>
}