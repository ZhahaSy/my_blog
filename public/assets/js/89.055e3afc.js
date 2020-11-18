(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{571:function(v,_,t){"use strict";t.r(_);var o=t(4),n=Object(o.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("首先概括一下基本的区别:")]),v._v(" "),t("p",[t("strong",[v._v("TCP是一个面向连接的、可靠的、基于字节流的传输层协议。")])]),v._v(" "),t("p",[v._v("而"),t("strong",[v._v("UDP是一个面向无连接的传输层协议。")]),v._v("(就这么简单，其它TCP的特性也就没有了)。")]),v._v(" "),t("p",[v._v("具体来分析，和 "),t("code",[v._v("UDP")]),v._v(" 相比，"),t("code",[v._v("TCP")]),v._v(" 有三大核心特性:")]),v._v(" "),t("ol",[t("li",[t("p",[t("strong",[v._v("面向连接")]),v._v("。所谓的连接，指的是客户端和服务器的连接，在双方互相通信之前，TCP 需要三次握手建立连接，而 UDP 没有相应建立连接的过程。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("可靠性")]),v._v("。TCP 花了非常多的功夫保证连接的可靠，这个可靠性体现在哪些方面呢？一个是有状态，另一个是可控制。")])])]),v._v(" "),t("p",[v._v("TCP 会精准记录哪些数据发送了，哪些数据被对方接收了，哪些没有被接收到，而且保证数据包按序到达，不允许半点差错。这是"),t("strong",[v._v("有状态")]),v._v("。")]),v._v(" "),t("p",[v._v("当意识到丢包了或者网络环境不佳，TCP 会根据具体情况调整自己的行为，控制自己的发送速度或者重发。这是"),t("strong",[v._v("可控制")]),v._v("。")]),v._v(" "),t("p",[v._v("相应的，UDP 就是"),t("code",[v._v("无状态")]),v._v(", "),t("code",[v._v("不可控")]),v._v("的。")]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[v._v("面向字节流")]),v._v("。UDP 的数据传输是基于数据报的，这是因为仅仅只是继承了 IP 层的特性，而 TCP 为了维护状态，将一个个 IP 包变成了字节流。")])])])}),[],!1,null,null,null);_.default=n.exports}}]);