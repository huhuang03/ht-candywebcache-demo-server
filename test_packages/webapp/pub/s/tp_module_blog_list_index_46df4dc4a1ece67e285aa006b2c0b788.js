II(11,function(i,n,_,r,e,s,o,a){var t;e.hl=n.S();t=e.hl.V(r.Xj);t.mk=function(t,e){return this.W(this.ak,t,this.Gj,e)};t.il=function(t){var e=0;if(t>1)e=this.ak+(t-2)*this.Gj;return e};t.zk=function(t){this.W(t);if(!t.stopped)this.Ak(this.il(t.index))};t.Ck=function(){this.ek();this.Pk("onbeforelistload","列表加载中...")};t.Dk=function(){this.W();this.ek()};t.Gk=function(e,i,n){var t=this.mk(i,e.length);if(this.Jk(t.index,t.total))return!0;this.xk(t.total>1?"":"none")};t.Fk=function(){this.Pk("onemptylist","没有列表数据！")};t.Ok=function(t,e){if(e||!_.ia(t))this.W(t,e);else this.Zj.innerHTML=t};t.Hk=function(t){this.Zj.innerHTML=t};t.Ik=function(t){this.wk=t};t.sk=function(t){this.Qk(t,"onafteradd");if(!t.stopped)this.cg()};t.tk=function(t){this.Qk(t,"onafterdelete");if(!t.stopped)this.cg()};t.Sk=function(i,r){var t=1;if(this.fk)t=this.fk.vj();var n=this.il(t),_=n+(t>1?this.Gj:this.ak);if(i>=_&&this.fk){var e=this.mk(0,this.fi());this.fk.xj(e.total);this.xk(e.total>1?"":"none")}else this.cg()};t.Tk=function(n,_){var t=1;if(this.fk)t=this.fk.vj();var e=this.il(t),i=this.mk(e,this.fi());this.zk({last:t,index:i.index})};if(!0)i.copy(i.P("nej.ut"),e);return e},35,8,36,52);II(14,function(_,i,r,s,n,o,e,t){e.jl=_.S();t=e.jl.V(n.ch);t.Kg=function(){this.W();this.Yg=i.Dc(r.Tc("module-id-2"));var t=i.jc(this.Yg,"js-flag");this.kl={limit:15,parent:t[0],item:"jst-2-blog-list",cache:{klass:o.Ki},pager:{clazz:"w-pager",parent:t[1]},onbeforelistload:this.gh.q(this),onemptylist:this.hh.q(this,"没有日志列表！")}};t.Pg=function(){var t=function(t){if(t.cid)return"class-"+t.cid;if(t.tid)return"tag-"+t.tid;else return"box-"+(t.box||1)};return function(e){this.W(e);if(this.ll)this.ll.gd();this.kl.cache.lkey=t(e.param||fh);this.ll=s.hl.bd(this.kl)}}();t.ml=function(t){console.log("hi,i'm "+this.Lg+", subscribe message from "+t.from+" and say: "+JSON.stringify(t.data))};n.rg("blog-list",e.jl)},8,9,10,11,12,13);