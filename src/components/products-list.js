import React from 'react'
import ProductItem from './product-item.js'

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                </div>
                <div className="col-md-6">
                    {
                        this.props.schools.map(function(s,index){
                            return(
                                <ProductItem info={s} key={"school"+index} />
                            )
                        })
                    }
                </div>
           </div>
       )
   }
});
