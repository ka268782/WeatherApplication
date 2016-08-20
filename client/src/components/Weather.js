var React=require('react');
var Child=require('./Child');
var loadeddata = false;

var Weather=React.createClass({
   getInitialState:function(){
     return({datas:[]})
   },

   getData:function(){

    var accessToken = localStorage.getItem('gToken');
     $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q='+this.refs.city.value+'&appid=04b27f761d98e576d1b2d446db9cc4a1',
      dataType: 'json',
      async:false,
      type: 'GET',
      success: function(data)
      {

          this.setState({datas:data});
          loadeddata=true;

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this),
   });

 },

  render:function(){
    var value;
    if(loadeddata)
    {
      value = <Child details={this.state.datas}/>;
    }

    return(
      <div>
          <input type="text" className="form-control"  ref="city" placeholder="Search" />
          <button type="submit" className="btn btn-default" onClick={this.getData}>ADD12</button>
          {value}
      </div>
    );
  }
})
module.exports=Weather
