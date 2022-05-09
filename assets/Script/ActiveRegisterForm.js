// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        registerForm: cc.Layout,
        richText: cc.RichText,
        laBel: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    activeRegisterForm: function(){
        this.node.active = false;
        this.registerForm.node.active = true;
        this.richText.node.active = true;
        this.laBel.node.active = true;
    },
    start () {

    },

    // update (dt) {},
});
