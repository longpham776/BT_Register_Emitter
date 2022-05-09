const Emitter = require('mEmitter');
const user = cc.Class({username:"",password:"",email:""});
var users = [];
module.exports = users;
cc.Class({
    extends: cc.Component,

    properties: {
        username: {
            default: null,
            type: cc.EditBox,
        },
        password: {
            default: null,
            type: cc.EditBox,
        },
        email:{
            default: null,
            type: cc.EditBox,
        },
        layoutListView: cc.Layout,
        layoutRegister: cc.Layout,
        loadingProgressBar: cc.Layout,
        richText: cc.RichText,
        laBel: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },
    addUser: function(){
        this.node.active = true;
        if(!this.username.string && !this.password.string && !this.email.string) return alert('Please try enter your information!');
        else if(!this.username.string) return alert('Please enter your username!'); 
        else if(!this.password.string) return alert('Please enter your password!');
        else if(!this.email.string) return alert('Please enter your email!');
        else{
            if(!this.checkEmail()) return alert('Wrong email!');
            let newUser = new user;
            newUser.username = this.username.string;
            newUser.password = this.password.string;
            newUser.email = this.email.string;
            users.push(newUser);
            this.showUser();
            this.loadingRegister();
            this.returnDataListView();
            this.clearEditBox();
        }
    },
    clearEditBox(){
        this.username.string="";
        this.password.string="";
        this.email.string="";
    },
    returnDataListView: function(){
        this.layoutListView.node.active = true;
        Emitter.instance.emit('listuser',users);
        this.layoutListView.node.active = false;
    },
    checkEmail: function(){
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)$/;
        if(this.email.string.match(validRegex)) return true;
        return false;
    },
    loadingRegister(){
        this.layoutRegister.node.active = false;
        this.richText.node.active = false;
        this.laBel.node.active = false;
        this.loadingProgressBar.node.active = true;
    },
    showUser: function(){
        cc.log('username:'+this.username.string);
        cc.log('password:'+this.password.string);
        cc.log('email:'+this.email.string);
    },
    resetData(value){
        users = value;
    },
    start () {
        
    },

    // update (dt) {},
});
