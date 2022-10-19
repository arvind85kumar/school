import {Link} from  'react-router-dom';
function Home() {
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-md-8">Slider</div>
            </div>
            <div className="row content">
                <div className="col-md-12">
                <div className="row">
  <div className="col-md-6 col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link href="#" className="btn btn-primary">Go somewhere</Link>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link href="#" className="btn btn-primary">Go somewhere</Link>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    </>)
}
export default Home;