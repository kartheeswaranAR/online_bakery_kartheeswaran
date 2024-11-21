

function AddImages()
{
    return(<div>
        <form className="seareg-bg">
        <div className="form-group">
            <div className="container addimage">
                <div className="input-group">                
                    <span><h3><i className="fa fa-upload"><input type="file"/> </i></h3></span>
                </div>
                
                    <div><textarea className="form-control desctext" id="exampleFormControlTextarea1" placeholder="Add Description"></textarea></div>
                    <div className="input-group">
                        <label className="input-group-text" style={{width: 300}}>Quantity Available</label>
                        <input type="number"  className="input-group qutytext" />
                    </div>


                    <div className="Additembtn"><button className="btn btn-green" type="button" id="AddItems">OK</button> </div>
                </div>
            </div>
      </form>

    </div>);
}
export default AddImages;