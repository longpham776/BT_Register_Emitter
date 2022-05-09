const Emitter = require('mEmitter');
const Register = require('RegisterUser');
var users=[];
cc.Class({
    extends: cc.Component,

    properties: {
        content: cc.Node,
        items: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent("listuser", this.listUser,this);
    },
    onEnable(){
        this.addListView();
    },
    listUser(value){
        users = value;
        cc.log(users);
    },
    addListView(){
        this.content.removeAllChildren();
        for(let i=0;i<users.length;i++){
            let item = cc.instantiate(this.items);
            item.parent = this.content;
            item.y = -30-(i*60);
            item.getChildByName("item").getComponent(cc.Label).string = users[i].username;
            this.content.height += 10;
        }
    },
    resizeFont(slide){
        var childrenContent= this.content.getChildByName('itemLayout')._parent._children;
        for(let i=0;i<childrenContent.length;i++){
            childrenContent[i].getChildByName("item").getComponent(cc.Label).fontSize = 10+(0.125*slide.progress*64);
        }
    },
    deleteListView: function(){
        this.content.removeAllChildren();
        this.content.height = 220;
        users = [];
    },
    start () {

    },

    update (dt) {

    },
});
