//获取分类
var dbCongif = require("../util/dbconfig")
getBook=(req,res)=>{
    var sql = "select * from book";
    var sqlArr = [];
    var callBack = (err,data)=>{
      if(err){
        console.log('连接出错了！！！')
      }else{
        res.send({
          'list':data
        })
      }
    }
    dbCongif.sqlConnect(sql,sqlArr,callBack)
}
//获取指定分类内容
getBookname=(req,res)=>{
    let {name} = req.query;
    var sql = 'select * from book where bname=?';
    var sqlArr = [name];
    var callBack = (err,data)=>{
        if(err){
          console.log('连接出错了！！！')
        }else{
          res.send({
            'list':data
          })
        }
      }
      dbCongif.sqlConnect(sql,sqlArr,callBack);
}
getBookxx=(req,res)=>{
  let {bname} = req.query;
  var sql = 'select * from book where bname=?';
  var sqlArr = [bname];
  var callBack = (err,data)=>{
    if(err){
      console.log('连接出错了！！！')
    }else{
      res.send({
        'list':data
      })
    }
  }
  dbCongif.sqlConnect(sql,sqlArr,callBack)
}
module.exports = {
    getBook,getBookname,getBookxx
}