!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Chess=e():r.Chess=e()}(this,(function(){return function(r){var e={};function n(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=r,n.c=e,n.d=function(r,e,t){n.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,e){if(1&e&&(r=n(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)n.d(t,o,function(e){return r[e]}.bind(null,o));return t},n.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(e,"a",e),e},n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},n.p="",n(n.s=0)}([function(r,e,n){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}
/* @license
 * Copyright (c) 2018, Jeff Hlywa (jhlywa@gmail.com)
 * Released under the BSD license
 * https://github.com/jhlywa/chess.js/blob/master/LICENSE
 */n.r(e),n.d(e,"Chess",(function(){return o}));var o=function(r){var e="b",n="w",o=-1,i="p",u="n",f="b",l="r",a="q",s="k",c="pnbrqkPNBRQK",p="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",v=["1-0","0-1","1/2-1/2","*"],g={b:[16,32,17,15],w:[-16,-32,-17,-15]},h={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},d=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],b=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],E={p:0,n:1,b:2,r:3,q:4,k:5},_={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"},y={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},m=7,S=6,A=1,C=0,T={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},P={w:[{square:T.a1,flag:y.QSIDE_CASTLE},{square:T.h1,flag:y.KSIDE_CASTLE}],b:[{square:T.a8,flag:y.QSIDE_CASTLE},{square:T.h8,flag:y.KSIDE_CASTLE}]},I=new Array(128),w={w:o,b:o},O=n,L={w:0,b:0},R=o,N=0,k=1,q=[],D={};function x(r){void 0===r&&(r=!1),I=new Array(128),w={w:o,b:o},O=n,L={w:0,b:0},R=o,N=0,k=1,q=[],r||(D={}),B(j())}function K(){Q(p)}function Q(r,t){void 0===t&&(t=!1);var i=r.split(/\s+/),u=i[0],f=0;if(!U(r).valid)return!1;x(t);for(var l=0;l<u.length;l++){var a=u.charAt(l);if("/"===a)f+=8;else if(-1!=="0123456789".indexOf(a))f+=parseInt(a,10);else{var s=a<"a"?n:e;G({type:a.toLowerCase(),color:s},fr(f)),f++}}return O=i[1],i[2].indexOf("K")>-1&&(L.w|=y.KSIDE_CASTLE),i[2].indexOf("Q")>-1&&(L.w|=y.QSIDE_CASTLE),i[2].indexOf("k")>-1&&(L.b|=y.KSIDE_CASTLE),i[2].indexOf("q")>-1&&(L.b|=y.QSIDE_CASTLE),R="-"===i[3]?o:T[i[3]],N=parseInt(i[4],10),k=parseInt(i[5],10),B(j()),!0}function U(r){var e="No errors.",n="FEN string must contain six space-delimited fields.",t="6th field (move number) must be a positive integer.",o="5th field (half move counter) must be a non-negative integer.",i="4th field (en-passant square) is invalid.",u="3rd field (castling availability) is invalid.",f="2nd field (side to move) is invalid.",l="1st field (piece positions) does not contain 8 '/'-delimited rows.",a="1st field (piece positions) is invalid [consecutive numbers].",s="1st field (piece positions) is invalid [invalid piece].",c="1st field (piece positions) is invalid [row too large].",p="Illegal en-passant square",v=r.split(/\s+/);if(6!==v.length)return{valid:!1,error_number:1,error:n};if(isNaN(v[5])||parseInt(v[5],10)<=0)return{valid:!1,error_number:2,error:t};if(isNaN(v[4])||parseInt(v[4],10)<0)return{valid:!1,error_number:3,error:o};if(!/^(-|[abcdefgh][36])$/.test(v[3]))return{valid:!1,error_number:4,error:i};if(!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(v[2]))return{valid:!1,error_number:5,error:u};if(!/^(w|b)$/.test(v[1]))return{valid:!1,error_number:6,error:f};var g=v[0].split("/");if(8!==g.length)return{valid:!1,error_number:7,error:l};for(var h=0;h<g.length;h++){for(var d=0,b=!1,E=0;E<g[h].length;E++)if(isNaN(g[h][E])){if(!/^[prnbqkPRNBQK]$/.test(g[h][E]))return{valid:!1,error_number:9,error:s};d+=1,b=!1}else{if(b)return{valid:!1,error_number:8,error:a};d+=parseInt(g[h][E],10),b=!0}if(8!==d)return{valid:!1,error_number:10,error:c}}return"3"==v[3][1]&&"w"==v[1]||"6"==v[3][1]&&"b"==v[1]?{valid:!1,error_number:11,error:p}:{valid:!0,error_number:0,error:e}}function j(){for(var r=0,t="",i=T.a8;i<=T.h1;i++){if(null==I[i])r++;else{r>0&&(t+=r,r=0);var u=I[i].color,f=I[i].type;t+=u===n?f.toUpperCase():f.toLowerCase()}i+1&136&&(r>0&&(t+=r),i!==T.h1&&(t+="/"),r=0,i+=8)}var l="";L[n]&y.KSIDE_CASTLE&&(l+="K"),L[n]&y.QSIDE_CASTLE&&(l+="Q"),L[e]&y.KSIDE_CASTLE&&(l+="k"),L[e]&y.QSIDE_CASTLE&&(l+="q"),l=l||"-";var a=R===o?"-":fr(R);return[t,O,l,a,N,k].join(" ")}function M(r){for(var e=0;e<r.length;e+=2)"string"==typeof r[e]&&"string"==typeof r[e+1]&&(D[r[e]]=r[e+1]);return D}function B(r){q.length>0||(r!==p?(D.SetUp="1",D.FEN=r):(delete D.SetUp,delete D.FEN))}function $(r){var e=I[T[r]];return e?{type:e.type,color:e.color}:null}function G(r,e){if(!("type"in r&&"color"in r))return!1;if(-1===c.indexOf(r.type.toLowerCase()))return!1;if(!(e in T))return!1;var n=T[e];return(r.type!=s||w[r.color]==o||w[r.color]==n)&&(I[n]={type:r.type,color:r.color},r.type===s&&(w[r.color]=n),B(j()),!0)}function F(r,e,n,t,o){var u={color:O,from:e,to:n,flags:t,piece:r[e].type};return o&&(u.flags|=y.PROMOTION,u.promotion=o),r[n]?u.captured=r[n].type:t&y.EP_CAPTURE&&(u.captured=i),u}function W(r){function e(r,e,n,t,o){if(r[n].type!==i||ir(t)!==C&&ir(t)!==m)e.push(F(r,n,t,o));else for(var s=[a,l,f,u],c=0,p=s.length;c<p;c++)e.push(F(r,n,t,o,s[c]))}var n=[],t=O,o=lr(t),s={b:A,w:S},c=T.a8,p=T.h1,v=!1,d=!(void 0!==r&&"legal"in r)||r.legal;if(void 0!==r&&"square"in r){if(!(r.square in T))return[];c=p=T[r.square],v=!0}for(var b=c;b<=p;b++)if(136&b)b+=7;else{var E=I[b];if(null!=E&&E.color===t)if(E.type===i){var _=b+g[t][0];if(null==I[_]){e(I,n,b,_,y.NORMAL);_=b+g[t][1];s[t]===ir(b)&&null==I[_]&&e(I,n,b,_,y.BIG_PAWN)}for(P=2;P<4;P++){136&(_=b+g[t][P])||(null!=I[_]&&I[_].color===o?e(I,n,b,_,y.CAPTURE):_===R&&e(I,n,b,R,y.EP_CAPTURE))}}else for(var P=0,N=h[E.type].length;P<N;P++){var k=h[E.type][P];for(_=b;!(136&(_+=k));){if(null!=I[_]){if(I[_].color===t)break;e(I,n,b,_,y.CAPTURE);break}if(e(I,n,b,_,y.NORMAL),"n"===E.type||"k"===E.type)break}}}if(!v||p===w[t]){if(L[t]&y.KSIDE_CASTLE){var q=(D=w[t])+2;null!=I[D+1]||null!=I[q]||z(o,w[t])||z(o,D+1)||z(o,q)||e(I,n,w[t],q,y.KSIDE_CASTLE)}if(L[t]&y.QSIDE_CASTLE){var D;q=(D=w[t])-2;null!=I[D-1]||null!=I[D-2]||null!=I[D-3]||z(o,w[t])||z(o,D-1)||z(o,q)||e(I,n,w[t],q,y.QSIDE_CASTLE)}}if(!d)return n;var x=[];for(b=0,N=n.length;b<N;b++)nr(n[b]),J(t)||x.push(n[b]),tr();return x}function H(r,e){var n="";if(r.flags&y.KSIDE_CASTLE)n="O-O";else if(r.flags&y.QSIDE_CASTLE)n="O-O-O";else{var t=function(r,e){for(var n=W({legal:!e}),t=r.from,o=r.to,i=r.piece,u=0,f=0,l=0,a=0,s=n.length;a<s;a++){var c=n[a].from,p=n[a].to,v=n[a].piece;i===v&&t!==c&&o===p&&(u++,ir(t)===ir(c)&&f++,ur(t)===ur(c)&&l++)}if(u>0)return f>0&&l>0?fr(t):l>0?fr(t).charAt(1):fr(t).charAt(0);return""}(r,e);r.piece!==i&&(n+=r.piece.toUpperCase()+t),r.flags&(y.CAPTURE|y.EP_CAPTURE)&&(r.piece===i&&(n+=fr(r.from)[0]),n+="x"),n+=fr(r.to),r.flags&y.PROMOTION&&(n+="="+r.promotion.toUpperCase())}return nr(r),V()&&(X()?n+="#":n+="+"),tr(),n}function Z(r){return r.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}function z(r,t){for(var o=T.a8;o<=T.h1;o++)if(136&o)o+=7;else if(null!=I[o]&&I[o].color===r){var u=I[o],f=o-t,l=f+119;if(d[l]&1<<E[u.type]){if(u.type===i){if(f>0){if(u.color===n)return!0}else if(u.color===e)return!0;continue}if("n"===u.type||"k"===u.type)return!0;for(var a=b[l],s=o+a,c=!1;s!==t;){if(null!=I[s]){c=!0;break}s+=a}if(!c)return!0}}return!1}function J(r){return z(lr(r),w[r])}function V(){return J(O)}function X(){return V()&&0===W().length}function Y(){return!V()&&0===W().length}function rr(){for(var r={},e=[],n=0,t=0,o=T.a8;o<=T.h1;o++)if(t=(t+1)%2,136&o)o+=7;else{var i=I[o];i&&(r[i.type]=i.type in r?r[i.type]+1:1,i.type===f&&e.push(t),n++)}if(2===n)return!0;if(3===n&&(1===r[f]||1===r[u]))return!0;if(n===r[f]+2){var l=0,a=e.length;for(o=0;o<a;o++)l+=e[o];if(0===l||l===a)return!0}return!1}function er(){for(var r=[],e={},n=!1;;){var t=tr();if(!t)break;r.push(t)}for(;;){var o=j().split(" ").slice(0,4).join(" ");if(e[o]=o in e?e[o]+1:1,e[o]>=3&&(n=!0),!r.length)break;nr(r.pop())}return n}function nr(r){var n=O,t=lr(n);if(function(r){q.push({move:r,kings:{b:w.b,w:w.w},turn:O,castling:{b:L.b,w:L.w},ep_square:R,half_moves:N,move_number:k})}(r),I[r.to]=I[r.from],I[r.from]=null,r.flags&y.EP_CAPTURE&&(O===e?I[r.to-16]=null:I[r.to+16]=null),r.flags&y.PROMOTION&&(I[r.to]={type:r.promotion,color:n}),I[r.to].type===s){if(w[I[r.to].color]=r.to,r.flags&y.KSIDE_CASTLE){var u=r.to-1,f=r.to+1;I[u]=I[f],I[f]=null}else if(r.flags&y.QSIDE_CASTLE){u=r.to+1,f=r.to-2;I[u]=I[f],I[f]=null}L[n]=""}if(L[n])for(var l=0,a=P[n].length;l<a;l++)if(r.from===P[n][l].square&&L[n]&P[n][l].flag){L[n]^=P[n][l].flag;break}if(L[t])for(l=0,a=P[t].length;l<a;l++)if(r.to===P[t][l].square&&L[t]&P[t][l].flag){L[t]^=P[t][l].flag;break}R=r.flags&y.BIG_PAWN?"b"===O?r.to-16:r.to+16:o,r.piece===i?N=0:r.flags&(y.CAPTURE|y.EP_CAPTURE)?N=0:N++,O===e&&k++,O=lr(O)}function tr(){var r=q.pop();if(null==r)return null;var n=r.move;w=r.kings,O=r.turn,L=r.castling,R=r.ep_square,N=r.half_moves,k=r.move_number;var t,o,u=O,f=lr(O);if(I[n.from]=I[n.to],I[n.from].type=n.piece,I[n.to]=null,n.flags&y.CAPTURE)I[n.to]={type:n.captured,color:f};else if(n.flags&y.EP_CAPTURE){var l;l=u===e?n.to-16:n.to+16,I[l]={type:i,color:f}}n.flags&(y.KSIDE_CASTLE|y.QSIDE_CASTLE)&&(n.flags&y.KSIDE_CASTLE?(t=n.to+1,o=n.to-1):n.flags&y.QSIDE_CASTLE&&(t=n.to-2,o=n.to+1),I[t]=I[o],I[o]=null);return n}function or(r,e){var n=Z(r);if(e){var t=n.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);if(t)var o=t[1],i=t[2],u=t[3],f=t[4]}for(var l=W(),a=0,s=l.length;a<s;a++){if(n===Z(H(l[a]))||e&&n===Z(H(l[a],!0)))return l[a];if(t&&(!o||o.toLowerCase()==l[a].piece)&&T[i]==l[a].from&&T[u]==l[a].to&&(!f||f.toLowerCase()==l[a].promotion))return l[a]}return null}function ir(r){return r>>4}function ur(r){return 15&r}function fr(r){var e=ur(r),n=ir(r);return"abcdefgh".substring(e,e+1)+"87654321".substring(n,n+1)}function lr(r){return r===n?e:n}function ar(r){var e=function r(e){var n=e instanceof Array?[]:{};for(var o in e)"object"===t(o)?n[o]=r(e[o]):n[o]=e[o];return n}(r);e.san=H(e,!1),e.to=fr(e.to),e.from=fr(e.from);var n="";for(var o in y)y[o]&e.flags&&(n+=_[o]);return e.flags=n,e}function sr(r){return r.replace(/^\s+|\s+$/g,"")}return Q(void 0===r?p:r),{WHITE:n,BLACK:e,PAWN:i,KNIGHT:u,BISHOP:f,ROOK:l,QUEEN:a,KING:s,SQUARES:function(){for(var r=[],e=T.a8;e<=T.h1;e++)136&e?e+=7:r.push(fr(e));return r}(),FLAGS:_,load:function(r){return Q(r)},reset:function(){return K()},moves:function(r){for(var e=W(r),n=[],t=0,o=e.length;t<o;t++)void 0!==r&&"verbose"in r&&r.verbose?n.push(ar(e[t])):n.push(H(e[t],!1));return n},in_check:function(){return V()},in_checkmate:function(){return X()},in_stalemate:function(){return Y()},in_draw:function(){return N>=100||Y()||rr()||er()},insufficient_material:function(){return rr()},in_threefold_repetition:function(){return er()},game_over:function(){return N>=100||X()||Y()||rr()||er()},validate_fen:function(r){return U(r)},fen:function(){return j()},board:function(){for(var r=[],e=[],n=T.a8;n<=T.h1;n++)null==I[n]?e.push(null):e.push({type:I[n].type,color:I[n].color}),n+1&136&&(r.push(e),e=[],n+=8);return r},pgn:function(r){var e="object"===t(r)&&"string"==typeof r.newline_char?r.newline_char:"\n",n="object"===t(r)&&"number"==typeof r.max_width?r.max_width:0,o=[],i=!1;for(var u in D)o.push("["+u+' "'+D[u]+'"]'+e),i=!0;i&&q.length&&o.push(e);for(var f=[];q.length>0;)f.push(tr());for(var l=[],a="";f.length>0;){var s=f.pop();q.length||"b"!==s.color?"w"===s.color&&(a.length&&l.push(a),a=k+"."):a=k+". ...",a=a+" "+H(s,!1),nr(s)}if(a.length&&l.push(a),void 0!==D.Result&&l.push(D.Result),0===n)return o.join("")+l.join(" ");var c=0;for(u=0;u<l.length;u++)c+l[u].length>n&&0!==u?(" "===o[o.length-1]&&o.pop(),o.push(e),c=0):0!==u&&(o.push(" "),c++),o.push(l[u]),c+=l[u].length;return o.join("")},load_pgn:function(r,e){var n=void 0!==e&&"sloppy"in e&&e.sloppy;function o(r){return r.replace(/\\/g,"\\")}var i="object"===t(e)&&"string"==typeof e.newline_char?e.newline_char:"\r?\n",u=new RegExp("^(\\[((?:"+o(i)+")|.)*\\])(?:"+o(i)+"){2}"),f=u.test(r)?u.exec(r)[1]:"";K();var l=function(r,e){for(var n="object"===t(e)&&"string"==typeof e.newline_char?e.newline_char:"\r?\n",i={},u=r.split(new RegExp(o(n))),f="",l="",a=0;a<u.length;a++)f=u[a].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/,"$1"),l=u[a].replace(/^\[[A-Za-z]+\s"(.*)"\]$/,"$1"),sr(f).length>0&&(i[f]=l);return i}(f,e);for(var a in l)M([a,l[a]]);if("1"===l.SetUp&&!("FEN"in l&&Q(l.FEN,!0)))return!1;var s=r.replace(f,"").replace(new RegExp(o(i),"g")," ");s=s.replace(/(\{[^}]+\})+?/g,"");for(var c=/(\([^\(\)]+\))+?/g;c.test(s);)s=s.replace(c,"");var p=sr(s=(s=(s=s.replace(/\d+\.(\.\.)?/g,"")).replace(/\.\.\./g,"")).replace(/\$\d+/g,"")).split(new RegExp(/\s+/));p=p.join(",").replace(/,,+/g,",").split(",");for(var g="",h=0;h<p.length-1;h++){if(null==(g=or(p[h],n)))return!1;nr(g)}if(g=p[p.length-1],v.indexOf(g)>-1)(function(r){for(var e in r)return!0;return!1})(D)&&void 0===D.Result&&M(["Result",g]);else{if(null==(g=or(g,n)))return!1;nr(g)}return!0},header:function(){return M(arguments)},ascii:function(){return function(){for(var r="   +------------------------+\n",e=T.a8;e<=T.h1;e++){if(0===ur(e)&&(r+=" "+"87654321"[ir(e)]+" |"),null==I[e])r+=" . ";else{var t=I[e].type;r+=" "+(I[e].color===n?t.toUpperCase():t.toLowerCase())+" "}e+1&136&&(r+="|\n",e+=8)}return r+="   +------------------------+\n",r+="     a  b  c  d  e  f  g  h\n"}()},turn:function(){return O},move:function(r,e){var n=void 0!==e&&"sloppy"in e&&e.sloppy,o=null;if("string"==typeof r)o=or(r,n);else if("object"===t(r))for(var i=W(),u=0,f=i.length;u<f;u++)if(!(r.from!==fr(i[u].from)||r.to!==fr(i[u].to)||"promotion"in i[u]&&r.promotion!==i[u].promotion)){o=i[u];break}if(!o)return null;var l=ar(o);return nr(o),l},undo:function(){var r=tr();return r?ar(r):null},clear:function(){return x()},put:function(r,e){return G(r,e)},get:function(r){return $(r)},remove:function(r){return function(r){var e=$(r);return I[T[r]]=null,e&&e.type===s&&(w[e.color]=o),B(j()),e}(r)},perft:function(r){return function r(e){for(var n=W({legal:!1}),t=0,o=O,i=0,u=n.length;i<u;i++){if(nr(n[i]),!J(o))if(e-1>0)t+=r(e-1);else t++;tr()}return t}(r)},square_color:function(r){if(r in T){var e=T[r];return(ir(e)+ur(e))%2==0?"light":"dark"}return null},history:function(r){for(var e=[],n=[],t=(void 0!==r&&"verbose"in r&&r.verbose);q.length>0;)e.push(tr());for(;e.length>0;){var o=e.pop();t?n.push(ar(o)):n.push(H(o)),nr(o)}return n}}}}])}));