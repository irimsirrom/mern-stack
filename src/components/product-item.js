import React from 'react'

module.exports = React.createClass({
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.product_name}
                </div>
                <div className="panel-body">
                    {this.props.info.category}
                </div>
            </div>
        )
    }
})
