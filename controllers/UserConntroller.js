//获取分类
var dbCongif = require("../util/dbconfig")
getUser=(req,res)=>{
  let {uname,upasswd} = req.query;
  var sql = "select * from user where uname = ? and upasswd = ?";
  var sqlArr = [uname,upasswd];
  var callBack = (err,data)=>{
      if(err){
        console.log('连接出错了！！！')
      }else{
        res.send({
          'list':data,
        })
      }
    }
    dbCongif.sqlConnect(sql,sqlArr,callBack)
}
//获取指定分类内容
getUserwd=(req,res)=>{
    let {uname} = req.query;
    var sql = 'select upasswd from user where uname=?';
    var sqlArr = [uname];
    var callBack = (err,data)=>{
        if(err){
          console.log('连接出错了！！！')
        }else{
          res.send({
            'list':data,
          })
        }
      }
      dbCongif.sqlConnect(sql,sqlArr,callBack);
}
getUsersj=(req,res)=>{
  let {uid} = req.query;
  var sql = 'SELECT book.* FROM shujia,book WHERE ? = `sj-uid` AND `sj-bid` = bid';
  var sqlArr = [uid];
  var callBack = (err,data)=>{
      if(err){
        console.log('连接出错了！！！')
      }else{
        res.send({
          'list':data,
        })
      }
    }
    dbCongif.sqlConnect(sql,sqlArr,callBack);
}

getCreate=(req,res)=>{
  let {nname,npasswd} = req.query;
  var sql = "INSERT INTO user(uid,uname,upasswd) VALUES(0,?,?)";
  var sqlArr = [nname,npasswd];
  var callBack = (err,data)=>{
      if(err){
        console.log('连接出错了！！！')
      }else{
        res.send({
          'list':data,
        })
      }
    }
    dbCongif.sqlConnect(sql,sqlArr,callBack)
}
module.exports = {
    getUser,getUserwd,getUsersj,getCreate
}