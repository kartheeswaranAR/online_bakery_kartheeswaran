import image1 from '../../asserts/brownie1.jpg';
import image2 from '../../asserts/brownie2.jpg';
import image3 from '../../asserts/brownie3.jpg';
import image4 from '../../asserts/brownie4.jpg';


function SearchItems(){
    return(<div>
        <div className="seareg-bg">
        <div className="container ">
            <div className="row">
              <div className="col-md-4">
                <div className="thumbnail">                  
                    <img src={image1} className="imgsize"/>
                    <div className="caption">
                    <h3><i className="fa fa-plus-circle" aria-hidden="true"/>
                        <lable className="bronielable">Double Chocolate Box Brownie : $5</lable>
                        <i className="fa fa-minus-circle" aria-hidden="true"/></h3>
                    </div>
                    <div>
                    <lable className="bronielable">0 </lable> 
                    <lable className="bronielable">.              .Amount= $ 0.0</lable>                     
                    </div>                   
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumbnail">                  
                    <img src={image2} className="imgsize"/>
                    <div className="caption">
                        <h3><i className="fa fa-plus-circle" aria-hidden="true"/>
                        <lable className="bronielable">Cosmic Brownie Mini cake : $10</lable>
                        <i className="fa fa-minus-circle" aria-hidden="true"/></h3>
                    </div>
                    <div>
                    <lable className="bronielable">0 </lable> 
                    <lable className="bronielable">.              .Amount= $ 0.0</lable>                     
                    </div>                    
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumbnail">                  
                    <img src={image3}  className="imgsize"/>
                    <div className="caption">
                        <h3><i className="fa fa-plus-circle" aria-hidden="true"/>
                        <lable className="bronielable">Chocolate Brownie cake : $9</lable>
                        <i className="fa fa-minus-circle" aria-hidden="true"/></h3>
                    </div>
                    <div>
                    <lable className="bronielable">0 </lable> 
                    <lable className="bronielable">.              .Amount= $ 0.0</lable>                     
                    </div>                  
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumbnail">                  
                    <img src={image4} className="imgsize"/>
                    <div className="caption">
                        <h3><i className="fa fa-plus-circle" aria-hidden="true"/>
                        <lable className="bronielable">Red Velvet Brownie  : $7</lable>
                        <i className="fa fa-minus-circle" aria-hidden="true"/></h3>
                    </div>
                    <div>
                    <lable className="bronielable">0 </lable> 
                    <lable className="bronielable">.              .Amount= $ 0.0</lable>                     
                    </div> 
                                      
                </div>
              </div>
            </div>
          </div>
          </div>

    </div>);
}
export default SearchItems;