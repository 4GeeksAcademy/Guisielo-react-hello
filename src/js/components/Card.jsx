export const Card = () => {
    return (
        <div>
            <div className="card" >
                <img src="https://images.pexels.com/photos/10967612/pexels-photo-10967612.jpeg" class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <hr />
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}