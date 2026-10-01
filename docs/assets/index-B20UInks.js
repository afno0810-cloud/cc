const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./terrain-B8-xihun.js","./main-DsbM39xj.js","./main-Dzq0cm8p.css","./props-DORTp3q9.js","./missions-B_lOlJQ2.js","./birds-CT43mrLq.js","./course-DYt1txAR.js","./coast-CbHUlEfQ.js"])))=>i.map(i=>d[i]);
import{_ as Zi}from"./main-DsbM39xj.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hc="169",Nm={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Um={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},If=0,bu=1,Lf=2,Fm=3,Om=0,ku=1,zu=2,ui=3,vi=0,on=1,Ln=2,mi=0,$i=1,gn=2,xu=3,_u=4,Df=5,Qi=100,Nf=101,Uf=102,Ff=103,Of=104,Bf=200,kf=201,zf=202,Hf=203,$o=204,ec=205,Gf=206,Vf=207,Wf=208,Xf=209,qf=210,jf=211,Yf=212,Kf=213,Jf=214,tc=0,nc=1,ic=2,ks=3,sc=4,rc=5,ac=6,oc=7,za=0,Zf=1,Qf=2,Ni=0,$f=1,ep=2,tp=3,np=4,ip=5,sp=6,rp=7,yu="attached",ap="detached",Gc=300,Ui=301,ts=302,zs=303,Sa=304,kr=306,bi=1e3,Hn=1001,Ir=1002,Zt=1003,Vc=1004,Bm=1004,Is=1005,km=1005,Ct=1006,Tr=1007,zm=1007,Gn=1008,Hm=1008,xi=1009,Hu=1010,Gu=1011,Lr=1012,Wc=1013,Fi=1014,Dn=1015,Nn=1016,Xc=1017,qc=1018,Hs=1020,Vu=35902,Wu=1021,Xu=1022,vn=1023,qu=1024,ju=1025,Fs=1026,Gs=1027,jc=1028,Ha=1029,Yu=1030,Yc=1031,Gm=1032,Kc=1033,pa=33776,ma=33777,ga=33778,va=33779,cc=35840,lc=35841,uc=35842,hc=35843,dc=36196,fc=37492,pc=37496,mc=37808,gc=37809,vc=37810,bc=37811,xc=37812,_c=37813,yc=37814,Mc=37815,Sc=37816,wc=37817,Ac=37818,Tc=37819,Ec=37820,Rc=37821,ba=36492,Cc=36494,Pc=36495,Ku=36283,Ic=36284,Lc=36285,Dc=36286,op=2200,cp=2201,lp=2202,Dr=2300,Nr=2301,Yo=2302,Ls=2400,Ds=2401,wa=2402,Jc=2500,Ju=2501,up=0,Zu=1,Nc=2,hp=3200,dp=3201,Vm=3202,Wm=3203,ss=0,fp=1,fi="",Jt="srgb",qt="srgb-linear",Zc="display-p3",Ga="display-p3-linear",Aa="linear",Lt="srgb",Ta="rec709",Ea="p3",Xm=0,As=7680,qm=7681,jm=7682,Ym=7683,Km=34055,Jm=34056,Zm=5386,Qm=512,$m=513,eg=514,tg=515,ng=516,ig=517,sg=518,Mu=519,pp=512,mp=513,gp=514,Qu=515,vp=516,bp=517,xp=518,_p=519,Ra=35044,Su=35048,rg=35040,ag=35045,og=35049,cg=35041,lg=35046,ug=35050,hg=35042,dg="100",wu="300 es",pi=2e3,Ca=2001;class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gh=1234567;const Os=Math.PI/180,Ur=180/Math.PI;function Vn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function kt(r,e,t){return Math.max(e,Math.min(t,r))}function $u(r,e){return(r%e+e)%e}function fg(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function pg(r,e,t){return r!==e?(t-r)/(e-r):0}function xa(r,e,t){return(1-t)*r+t*e}function mg(r,e,t,n){return xa(r,e,1-Math.exp(-t*n))}function gg(r,e=1){return e-Math.abs($u(r,e*2)-e)}function vg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function bg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function xg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function _g(r,e){return r+Math.random()*(e-r)}function yg(r){return r*(.5-Math.random())}function Mg(r){r!==void 0&&(Gh=r);let e=Gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sg(r){return r*Os}function wg(r){return r*Ur}function Ag(r){return(r&r-1)===0&&r!==0}function Tg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Eg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Rg(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,c*h,c*d,o*l);break;case"YZY":r.set(c*d,o*u,c*h,o*l);break;case"ZXZ":r.set(c*h,c*d,o*u,o*l);break;case"XZX":r.set(o*u,c*g,c*f,o*l);break;case"YXY":r.set(c*f,o*u,c*g,o*l);break;case"ZYZ":r.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function at(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const mn={DEG2RAD:Os,RAD2DEG:Ur,generateUUID:Vn,clamp:kt,euclideanModulo:$u,mapLinear:fg,inverseLerp:pg,lerp:xa,damp:mg,pingpong:gg,smoothstep:vg,smootherstep:bg,randInt:xg,randFloat:_g,randFloatSpread:yg,seededRandom:Mg,degToRad:Sg,radToDeg:wg,isPowerOfTwo:Ag,ceilPowerOfTwo:Tg,floorPowerOfTwo:Eg,setQuaternionFromProperEuler:Rg,normalize:at,denormalize:Mn};class Q{constructor(e=0,t=0){Q.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,i,s,a,o,c,l){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],x=i[1],b=i[4],_=i[7],C=i[2],w=i[5],A=i[8];return s[0]=a*v+o*x+c*C,s[3]=a*m+o*b+c*w,s[6]=a*p+o*_+c*A,s[1]=l*v+u*x+h*C,s[4]=l*m+u*b+h*w,s[7]=l*p+u*_+h*A,s[2]=d*v+f*x+g*C,s[5]=d*m+f*b+g*w,s[8]=d*p+f*_+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*l-u*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(u*t-i*c)*v,e[5]=(i*s-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sl.makeScale(e,t)),this}rotate(e){return this.premultiply(Sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sl=new st;function yp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const Cg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Mr(r,e){return new Cg[r](e)}function Pa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mp(){const r=Pa("canvas");return r.style.display="block",r}const Vh={};function Ko(r){r in Vh||(Vh[r]=!0,console.warn(r))}function Pg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Ig(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Lg(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wh=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xh=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jr={[qt]:{transfer:Aa,primaries:Ta,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Jt]:{transfer:Lt,primaries:Ta,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ga]:{transfer:Aa,primaries:Ea,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Xh),fromReference:r=>r.applyMatrix3(Wh)},[Zc]:{transfer:Lt,primaries:Ea,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Xh),fromReference:r=>r.applyMatrix3(Wh).convertLinearToSRGB()}},Dg=new Set([qt,Ga]),bt={enabled:!0,_workingColorSpace:qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Dg.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=jr[e].toReference,i=jr[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return jr[r].primaries},getTransfer:function(r){return r===fi?Aa:jr[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(jr[e].luminanceCoefficients)}};function Er(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function wl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ir;class Sp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ir===void 0&&(ir=Pa("canvas")),ir.width=e.width,ir.height=e.height;const n=ir.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Pa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Er(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Er(t[n]/255)*255):t[n]=Er(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ng=0;class Ns{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Al(i[a].image)):s.push(Al(i[a]))}else s=Al(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Al(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Sp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ug=0;class Nt extends yi{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Hn,i=Hn,s=Ct,a=Gn,o=vn,c=xi,l=Nt.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Vn(),this.name="",this.source=new Ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bi:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bi:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Gc;Nt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,_=(f+1)/2,C=(p+1)/2,w=(u+d)/4,A=(h+v)/4,P=(g+m)/4;return b>_&&b>C?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=w/n,s=A/n):_>C?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=w/i,s=P/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=A/s,i=P/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-v)/x,this.z=(d-u)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wp extends yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Nt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ns(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qt extends wp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qc extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fg extends Qt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Qc(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class eh extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Og extends Qt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new eh(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class cn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==d||l!==f||u!==g){let m=1-o;const p=c*d+l*f+u*g+h*v,x=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const C=Math.sqrt(b),w=Math.atan2(C,p*x);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C}const _=o*x;if(c=c*m+d*_,l=l*m+f*_,u=u*m+g*_,h=h*m+v*_,m===1-o){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=i+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tl=new T,qh=new cn;class ln{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zn):Zn.fromBufferAttribute(s,a),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),to.subVectors(this.max,Yr),sr.subVectors(e.a,Yr),rr.subVectors(e.b,Yr),ar.subVectors(e.c,Yr),Gi.subVectors(rr,sr),Vi.subVectors(ar,rr),ds.subVectors(sr,ar);let t=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-ds.z,ds.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,ds.z,0,-ds.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-ds.y,ds.x,0];return!El(t,sr,rr,ar,to)||(t=[1,0,0,0,1,0,0,0,1],!El(t,sr,rr,ar,to))?!1:(no.crossVectors(Gi,Vi),t=[no.x,no.y,no.z],El(t,sr,rr,ar,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new T,new T,new T,new T,new T,new T,new T,new T],Zn=new T,eo=new ln,sr=new T,rr=new T,ar=new T,Gi=new T,Vi=new T,ds=new T,Yr=new T,to=new T,no=new T,fs=new T;function El(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){fs.fromArray(r,s);const o=i.x*Math.abs(fs.x)+i.y*Math.abs(fs.y)+i.z*Math.abs(fs.z),c=e.dot(fs),l=t.dot(fs),u=n.dot(fs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Bg=new ln,Kr=new T,Rl=new T;class un{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);const t=Kr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Kr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(Rl)),this.expandByPoint(Kr.copy(e.center).sub(Rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new T,Cl=new T,io=new T,Wi=new T,Pl=new T,so=new T,Il=new T;class zr{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Cl.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(Cl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(io),o=Wi.dot(this.direction),c=-Wi.dot(io),l=Wi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Cl).addScaledVector(io,d),f}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,i,s){Pl.subVectors(t,e),so.subVectors(n,e),Il.crossVectors(Pl,so);let a=this.direction.dot(Il),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wi.subVectors(this.origin,e);const c=o*this.direction.dot(so.crossVectors(Wi,so));if(c<0)return null;const l=o*this.direction.dot(Pl.cross(Wi));if(l<0||c+l>a)return null;const u=-o*Wi.dot(Il);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,i,s,a,o,c,l,u,h,d,f,g,v,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,u,h,d,f,g,v,m)}set(e,t,n,i,s,a,o,c,l,u,h,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/or.setFromMatrixColumn(e,0).length(),s=1/or.setFromMatrixColumn(e,1).length(),a=1/or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,v=l*h;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,v=l*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kg,e,zg)}lookAt(e,t,n){const i=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Xi.crossVectors(n,Bn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Xi.crossVectors(n,Bn)),Xi.normalize(),ro.crossVectors(Bn,Xi),i[0]=Xi.x,i[4]=ro.x,i[8]=Bn.x,i[1]=Xi.y,i[5]=ro.y,i[9]=Bn.y,i[2]=Xi.z,i[6]=ro.z,i[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],b=n[7],_=n[11],C=n[15],w=i[0],A=i[4],P=i[8],F=i[12],y=i[1],M=i[5],D=i[9],N=i[13],H=i[2],W=i[6],z=i[10],K=i[14],q=i[3],de=i[7],J=i[11],me=i[15];return s[0]=a*w+o*y+c*H+l*q,s[4]=a*A+o*M+c*W+l*de,s[8]=a*P+o*D+c*z+l*J,s[12]=a*F+o*N+c*K+l*me,s[1]=u*w+h*y+d*H+f*q,s[5]=u*A+h*M+d*W+f*de,s[9]=u*P+h*D+d*z+f*J,s[13]=u*F+h*N+d*K+f*me,s[2]=g*w+v*y+m*H+p*q,s[6]=g*A+v*M+m*W+p*de,s[10]=g*P+v*D+m*z+p*J,s[14]=g*F+v*N+m*K+p*me,s[3]=x*w+b*y+_*H+C*q,s[7]=x*A+b*M+_*W+C*de,s[11]=x*P+b*D+_*z+C*J,s[15]=x*F+b*N+_*K+C*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*c*h-i*l*h-s*o*d+n*l*d+i*o*f-n*c*f)+v*(+t*c*f-t*l*d+s*a*d-i*a*f+i*l*u-s*c*u)+m*(+t*l*h-t*o*f-s*a*h+n*a*f+s*o*u-n*l*u)+p*(-i*o*u-t*c*h+t*o*d+i*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=h*m*l-v*d*l+v*c*f-o*m*f-h*c*p+o*d*p,b=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,_=u*v*l-g*h*l+g*o*f-a*v*f-u*o*p+a*h*p,C=g*h*c-u*v*c-g*o*d+a*v*d+u*o*m-a*h*m,w=t*x+n*b+i*_+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=x*A,e[1]=(v*d*s-h*m*s-v*i*f+n*m*f+h*i*p-n*d*p)*A,e[2]=(o*m*s-v*c*s+v*i*l-n*m*l-o*i*p+n*c*p)*A,e[3]=(h*c*s-o*d*s-h*i*l+n*d*l+o*i*f-n*c*f)*A,e[4]=b*A,e[5]=(u*m*s-g*d*s+g*i*f-t*m*f-u*i*p+t*d*p)*A,e[6]=(g*c*s-a*m*s-g*i*l+t*m*l+a*i*p-t*c*p)*A,e[7]=(a*d*s-u*c*s+u*i*l-t*d*l-a*i*f+t*c*f)*A,e[8]=_*A,e[9]=(g*h*s-u*v*s-g*n*f+t*v*f+u*n*p-t*h*p)*A,e[10]=(a*v*s-g*o*s+g*n*l-t*v*l-a*n*p+t*o*p)*A,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*f-t*o*f)*A,e[12]=C*A,e[13]=(u*v*i-g*h*i+g*n*d-t*v*d-u*n*m+t*h*m)*A,e[14]=(g*o*i-a*v*i-g*n*c+t*v*c+a*n*m-t*o*m)*A,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,g=s*h,v=a*u,m=a*h,p=o*h,x=c*l,b=c*u,_=c*h,C=n.x,w=n.y,A=n.z;return i[0]=(1-(v+p))*C,i[1]=(f+_)*C,i[2]=(g-b)*C,i[3]=0,i[4]=(f-_)*w,i[5]=(1-(d+p))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(g+b)*A,i[9]=(m-x)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=or.set(i[0],i[1],i[2]).length();const a=or.set(i[4],i[5],i[6]).length(),o=or.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Qn.copy(this);const l=1/s,u=1/a,h=1/o;return Qn.elements[0]*=l,Qn.elements[1]*=l,Qn.elements[2]*=l,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=h,Qn.elements[9]*=h,Qn.elements[10]*=h,t.setFromRotationMatrix(Qn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=pi){const c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===pi)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ca)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=pi){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-s),d=(t+e)*l,f=(n+i)*u;let g,v;if(o===pi)g=(a+s)*h,v=-2*h;else if(o===Ca)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const or=new T,Qn=new ze,kg=new T(0,0,0),zg=new T(1,1,1),Xi=new T,ro=new T,Bn=new T,jh=new ze,Yh=new cn;class Wn{constructor(e=0,t=0,n=0,i=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class $c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hg=0;const Kh=new T,cr=new cn,Ti=new ze,ao=new T,Jr=new T,Gg=new T,Vg=new cn,Jh=new T(1,0,0),Zh=new T(0,1,0),Qh=new T(0,0,1),$h={type:"added"},Wg={type:"removed"},lr={type:"childadded",child:null},Ll={type:"childremoved",child:null};class mt extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new T,t=new Wn,n=new cn,i=new T(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new st}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis(Qh,e)}translateOnAxis(e,t){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis(Qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ao.copy(e):ao.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Jr,ao,this.up):Ti.lookAt(ao,Jr,this.up),this.quaternion.setFromRotationMatrix(Ti),i&&(Ti.extractRotation(i.matrixWorld),cr.setFromRotationMatrix(Ti),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($h),lr.child=e,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wg),Ll.child=e,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($h),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,Gg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Vg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new T(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new T,Ei=new T,Dl=new T,Ri=new T,ur=new T,hr=new T,ed=new T,Nl=new T,Ul=new T,Fl=new T,Ol=new ft,Bl=new ft,kl=new ft;class Sn{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$n.subVectors(e,t),i.cross($n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){$n.subVectors(i,t),Ei.subVectors(n,t),Dl.subVectors(e,t);const a=$n.dot($n),o=$n.dot(Ei),c=$n.dot(Dl),l=Ei.dot(Ei),u=Ei.dot(Dl),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ri.x),c.addScaledVector(a,Ri.y),c.addScaledVector(o,Ri.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return Ol.setScalar(0),Bl.setScalar(0),kl.setScalar(0),Ol.fromBufferAttribute(e,t),Bl.fromBufferAttribute(e,n),kl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ol,s.x),a.addScaledVector(Bl,s.y),a.addScaledVector(kl,s.z),a}static isFrontFacing(e,t,n,i){return $n.subVectors(n,t),Ei.subVectors(e,t),$n.cross(Ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),$n.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ur.subVectors(i,n),hr.subVectors(s,n),Nl.subVectors(e,n);const c=ur.dot(Nl),l=hr.dot(Nl);if(c<=0&&l<=0)return t.copy(n);Ul.subVectors(e,i);const u=ur.dot(Ul),h=hr.dot(Ul);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ur,a);Fl.subVectors(e,s);const f=ur.dot(Fl),g=hr.dot(Fl);if(g>=0&&f<=g)return t.copy(s);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(hr,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return ed.subVectors(s,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(ed,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(ur,a).addScaledVector(hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},oo={h:0,s:0,l:0};function zl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=bt.workingColorSpace){if(e=$u(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=zl(a,s,e+1/3),this.g=zl(a,s,e),this.b=zl(a,s,e-1/3)}return bt.toWorkingColorSpace(this,i),this}setStyle(e,t=Jt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const n=Ap[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=wl(e.r),this.g=wl(e.g),this.b=wl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return bt.fromWorkingColorSpace(fn.copy(this),e),Math.round(kt(fn.r*255,0,255))*65536+Math.round(kt(fn.g*255,0,255))*256+Math.round(kt(fn.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(fn.copy(this),t);const n=fn.r,i=fn.g,s=fn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Jt){bt.fromWorkingColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,i=fn.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(oo);const n=xa(qi.h,oo.h,t),i=xa(qi.s,oo.s,t),s=xa(qi.l,oo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new oe;oe.NAMES=Ap;let Xg=0;class $t extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=$i,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$o,this.blendDst=ec,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$o&&(n.blendSrc=this.blendSrc),this.blendDst!==ec&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(n.stencilFail=this.stencilFail),this.stencilZFail!==As&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rn extends $t{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ii=qg();function qg(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function In(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=kt(r,-65504,65504),Ii.floatView[0]=r;const e=Ii.uint32View[0],t=e>>23&511;return Ii.baseTable[t]+((e&8388607)>>Ii.shiftTable[t])}function la(r){const e=r>>10;return Ii.uint32View[0]=Ii.mantissaTable[Ii.offsetTable[e]+(r&1023)]+Ii.exponentTable[e],Ii.floatView[0]}const jg={toHalfFloat:In,fromHalfFloat:la},Wt=new T,co=new Q;class Ze{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ra,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ra&&(e.usage=this.usage),e}}class Yg extends Ze{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Kg extends Ze{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Jg extends Ze{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Zg extends Ze{constructor(e,t,n){super(new Int16Array(e),t,n)}}class th extends Ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qg extends Ze{constructor(e,t,n){super(new Int32Array(e),t,n)}}class nh extends Ze{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $g extends Ze{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=la(this.array[e*this.itemSize]);return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=In(t),this}getY(e){let t=la(this.array[e*this.itemSize+1]);return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=In(t),this}getZ(e){let t=la(this.array[e*this.itemSize+2]);return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=In(t),this}getW(e){let t=la(this.array[e*this.itemSize+3]);return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=In(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=In(t),this.array[e+1]=In(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=In(t),this.array[e+1]=In(n),this.array[e+2]=In(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=In(t),this.array[e+1]=In(n),this.array[e+2]=In(i),this.array[e+3]=In(s),this}}class Ie extends Ze{constructor(e,t,n){super(new Float32Array(e),t,n)}}let e0=0;const Xn=new ze,Hl=new mt,dr=new T,kn=new ln,Zr=new ln,nn=new T;class je extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yp(e)?nh:th)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,n){return Xn.makeTranslation(e,t,n),this.applyMatrix4(Xn),this}scale(e,t,n){return Xn.makeScale(e,t,n),this.applyMatrix4(Xn),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ie(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Zr.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(kn.min,Zr.min),kn.expandByPoint(nn),nn.addVectors(kn.max,Zr.max),kn.expandByPoint(nn)):(kn.expandByPoint(Zr.min),kn.expandByPoint(Zr.max))}kn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)nn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(nn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)nn.fromBufferAttribute(o,l),c&&(dr.fromBufferAttribute(e,l),nn.add(dr)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new T,c[P]=new T;const l=new T,u=new T,h=new T,d=new Q,f=new Q,g=new Q,v=new T,m=new T;function p(P,F,y){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,F),h.fromBufferAttribute(n,y),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,F),g.fromBufferAttribute(s,y),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const M=1/(f.x*g.y-g.x*f.y);isFinite(M)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(M),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(M),o[P].add(v),o[F].add(v),o[y].add(v),c[P].add(m),c[F].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,F=x.length;P<F;++P){const y=x[P],M=y.start,D=y.count;for(let N=M,H=M+D;N<H;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const b=new T,_=new T,C=new T,w=new T;function A(P){C.fromBufferAttribute(i,P),w.copy(C);const F=o[P];b.copy(F),b.sub(C.multiplyScalar(C.dot(F))).normalize(),_.crossVectors(w,F);const M=_.dot(c[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,M)}for(let P=0,F=x.length;P<F;++P){const y=x[P],M=y.start,D=y.count;for(let N=M,H=M+D;N<H;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new T,s=new T,a=new T,o=new T,c=new T,l=new T,u=new T,h=new T;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Ze(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new je,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const td=new ze,ps=new zr,lo=new un,nd=new T,uo=new T,ho=new T,fo=new T,Gl=new T,po=new T,id=new T,mo=new T;class xt extends mt{constructor(e=new je,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){po.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Gl.fromBufferAttribute(h,e),a?po.addScaledVector(Gl,u):po.addScaledVector(Gl.sub(t),u))}t.add(po)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),ps.copy(e.ray).recast(e.near),!(lo.containsPoint(ps.origin)===!1&&(ps.intersectSphere(lo,nd)===null||ps.origin.distanceToSquared(nd)>(e.far-e.near)**2))&&(td.copy(s).invert(),ps.copy(e.ray).applyMatrix4(td),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,C=b;_<C;_+=3){const w=o.getX(_),A=o.getX(_+1),P=o.getX(_+2);i=go(this,p,e,n,l,u,h,w,A,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);i=go(this,a,e,n,l,u,h,x,b,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,C=b;_<C;_+=3){const w=_,A=_+1,P=_+2;i=go(this,p,e,n,l,u,h,w,A,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=m,b=m+1,_=m+2;i=go(this,a,e,n,l,u,h,x,b,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function t0(r,e,t,n,i,s,a,o){let c;if(e.side===on?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===vi,o),c===null)return null;mo.copy(o),mo.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(mo);return l<t.near||l>t.far?null:{distance:l,point:mo.clone(),object:r}}function go(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,uo),r.getVertexPosition(c,ho),r.getVertexPosition(l,fo);const u=t0(r,e,t,n,uo,ho,fo,id);if(u){const h=new T;Sn.getBarycoord(id,uo,ho,fo,h),i&&(u.uv=Sn.getInterpolatedAttribute(i,o,c,l,h,new Q)),s&&(u.uv1=Sn.getInterpolatedAttribute(s,o,c,l,h,new Q)),a&&(u.normal=Sn.getInterpolatedAttribute(a,o,c,l,h,new T),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new T,materialIndex:0};Sn.getNormal(uo,ho,fo,d.normal),u.face=d,u.barycoord=h}return u}class rs extends je{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(h,2));function g(v,m,p,x,b,_,C,w,A,P,F){const y=_/A,M=C/P,D=_/2,N=C/2,H=w/2,W=A+1,z=P+1;let K=0,q=0;const de=new T;for(let J=0;J<z;J++){const me=J*M-N;for(let Ke=0;Ke<W;Ke++){const et=Ke*y-D;de[v]=et*x,de[m]=me*b,de[p]=H,l.push(de.x,de.y,de.z),de[v]=0,de[m]=0,de[p]=w>0?1:-1,u.push(de.x,de.y,de.z),h.push(Ke/A),h.push(1-J/P),K+=1}}for(let J=0;J<P;J++)for(let me=0;me<A;me++){const Ke=d+me+W*J,et=d+me+W*(J+1),Z=d+(me+1)+W*(J+1),he=d+(me+1)+W*J;c.push(Ke,et,he),c.push(et,Z,he),q+=6}o.addGroup(f,q,F),f+=q,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yn(r){const e={};for(let t=0;t<r.length;t++){const n=Fr(r[t]);for(const i in n)e[i]=n[i]}return e}function n0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Tp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const Ia={clone:Fr,merge:yn};var i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mt extends $t{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=s0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=n0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class el extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new T,sd=new Q,rd=new Q;class Xt extends el{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,sd,rd),t.subVectors(rd,sd)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Os*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fr=-90,pr=1;class Ep extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xt(fr,pr,e,t);i.layers=this.layers,this.add(i);const s=new Xt(fr,pr,e,t);s.layers=this.layers,this.add(s);const a=new Xt(fr,pr,e,t);a.layers=this.layers,this.add(a);const o=new Xt(fr,pr,e,t);o.layers=this.layers,this.add(o);const c=new Xt(fr,pr,e,t);c.layers=this.layers,this.add(c);const l=new Xt(fr,pr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Va extends Nt{constructor(e,t,n,i,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ui,super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rp extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Va(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new rs(5,5,5),s=new Mt({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:mi});s.uniforms.tEquirect.value=t;const a=new xt(i,s),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Ct),new Ep(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Vl=new T,r0=new T,a0=new st;class di{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Vl.subVectors(n,t).cross(r0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||a0.getNormalMatrix(e),i=this.coplanarPoint(Vl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new un,vo=new T;class Wa{constructor(e=new di,t=new di,n=new di,i=new di,s=new di,a=new di){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],x=i[13],b=i[14],_=i[15];if(n[0].setComponents(c-s,d-l,m-f,_-p).normalize(),n[1].setComponents(c+s,d+l,m+f,_+p).normalize(),n[2].setComponents(c+a,d+u,m+g,_+x).normalize(),n[3].setComponents(c-a,d-u,m-g,_-x).normalize(),n[4].setComponents(c-o,d-h,m-v,_-b).normalize(),t===pi)n[5].setComponents(c+o,d+h,m+v,_+b).normalize();else if(t===Ca)n[5].setComponents(o,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vo.x=i.normal.x>0?e.max.x:e.min.x,vo.y=i.normal.y>0?e.max.y:e.min.y,vo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function o0(r){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(r.bindBuffer(l,o),h.length===0)r.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];r.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}class Oi extends je{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const x=p*d-a;for(let b=0;b<l;b++){const _=b*h-s;g.push(_,-x,0),v.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const b=x+l*p,_=x+l*(p+1),C=x+1+l*(p+1),w=x+1+l*p;f.push(b,_,w),f.push(_,C,w)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(v,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.widthSegments,e.heightSegments)}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,m0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,y0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,I0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,L0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,D0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",k0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ev=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,av=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ov=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_v=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Iv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ov=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ab=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ob=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:c0,alphahash_pars_fragment:l0,alphamap_fragment:u0,alphamap_pars_fragment:h0,alphatest_fragment:d0,alphatest_pars_fragment:f0,aomap_fragment:p0,aomap_pars_fragment:m0,batching_pars_vertex:g0,batching_vertex:v0,begin_vertex:b0,beginnormal_vertex:x0,bsdfs:_0,iridescence_fragment:y0,bumpmap_pars_fragment:M0,clipping_planes_fragment:S0,clipping_planes_pars_fragment:w0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:T0,color_fragment:E0,color_pars_fragment:R0,color_pars_vertex:C0,color_vertex:P0,common:I0,cube_uv_reflection_fragment:L0,defaultnormal_vertex:D0,displacementmap_pars_vertex:N0,displacementmap_vertex:U0,emissivemap_fragment:F0,emissivemap_pars_fragment:O0,colorspace_fragment:B0,colorspace_pars_fragment:k0,envmap_fragment:z0,envmap_common_pars_fragment:H0,envmap_pars_fragment:G0,envmap_pars_vertex:V0,envmap_physical_pars_fragment:ev,envmap_vertex:W0,fog_vertex:X0,fog_pars_vertex:q0,fog_fragment:j0,fog_pars_fragment:Y0,gradientmap_pars_fragment:K0,lightmap_pars_fragment:J0,lights_lambert_fragment:Z0,lights_lambert_pars_fragment:Q0,lights_pars_begin:$0,lights_toon_fragment:tv,lights_toon_pars_fragment:nv,lights_phong_fragment:iv,lights_phong_pars_fragment:sv,lights_physical_fragment:rv,lights_physical_pars_fragment:av,lights_fragment_begin:ov,lights_fragment_maps:cv,lights_fragment_end:lv,logdepthbuf_fragment:uv,logdepthbuf_pars_fragment:hv,logdepthbuf_pars_vertex:dv,logdepthbuf_vertex:fv,map_fragment:pv,map_pars_fragment:mv,map_particle_fragment:gv,map_particle_pars_fragment:vv,metalnessmap_fragment:bv,metalnessmap_pars_fragment:xv,morphinstance_vertex:_v,morphcolor_vertex:yv,morphnormal_vertex:Mv,morphtarget_pars_vertex:Sv,morphtarget_vertex:wv,normal_fragment_begin:Av,normal_fragment_maps:Tv,normal_pars_fragment:Ev,normal_pars_vertex:Rv,normal_vertex:Cv,normalmap_pars_fragment:Pv,clearcoat_normal_fragment_begin:Iv,clearcoat_normal_fragment_maps:Lv,clearcoat_pars_fragment:Dv,iridescence_pars_fragment:Nv,opaque_fragment:Uv,packing:Fv,premultiplied_alpha_fragment:Ov,project_vertex:Bv,dithering_fragment:kv,dithering_pars_fragment:zv,roughnessmap_fragment:Hv,roughnessmap_pars_fragment:Gv,shadowmap_pars_fragment:Vv,shadowmap_pars_vertex:Wv,shadowmap_vertex:Xv,shadowmask_pars_fragment:qv,skinbase_vertex:jv,skinning_pars_vertex:Yv,skinning_vertex:Kv,skinnormal_vertex:Jv,specularmap_fragment:Zv,specularmap_pars_fragment:Qv,tonemapping_fragment:$v,tonemapping_pars_fragment:eb,transmission_fragment:tb,transmission_pars_fragment:nb,uv_pars_fragment:ib,uv_pars_vertex:sb,uv_vertex:rb,worldpos_vertex:ab,background_vert:ob,background_frag:cb,backgroundCube_vert:lb,backgroundCube_frag:ub,cube_vert:hb,cube_frag:db,depth_vert:fb,depth_frag:pb,distanceRGBA_vert:mb,distanceRGBA_frag:gb,equirect_vert:vb,equirect_frag:bb,linedashed_vert:xb,linedashed_frag:_b,meshbasic_vert:yb,meshbasic_frag:Mb,meshlambert_vert:Sb,meshlambert_frag:wb,meshmatcap_vert:Ab,meshmatcap_frag:Tb,meshnormal_vert:Eb,meshnormal_frag:Rb,meshphong_vert:Cb,meshphong_frag:Pb,meshphysical_vert:Ib,meshphysical_frag:Lb,meshtoon_vert:Db,meshtoon_frag:Nb,points_vert:Ub,points_frag:Fb,shadow_vert:Ob,shadow_frag:Bb,sprite_vert:kb,sprite_frag:zb},Ee={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ti={basic:{uniforms:yn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:yn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new oe(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:yn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:yn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:yn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new oe(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:yn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:yn([Ee.points,Ee.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:yn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:yn([Ee.common,Ee.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:yn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:yn([Ee.sprite,Ee.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:yn([Ee.common,Ee.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:yn([Ee.lights,Ee.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ti.physical={uniforms:yn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const bo={r:0,b:0,g:0},gs=new Wn,Hb=new ze;function Gb(r,e,t,n,i,s,a){const o=new oe(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b)),b}function v(x){let b=!1;const _=g(x);_===null?p(o,c):_&&_.isColor&&(p(_,1),b=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,b){const _=g(b);_&&(_.isCubeTexture||_.mapping===kr)?(u===void 0&&(u=new xt(new rs(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:Fr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),gs.copy(b.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(gs)),u.material.toneMapped=bt.getTransfer(_.colorSpace)!==Lt,(h!==_||d!==_.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=r.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new xt(new Oi(2,2),new Mt({name:"BackgroundMaterial",uniforms:Fr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=bt.getTransfer(_.colorSpace)!==Lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,f=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,b){x.getRGB(bo,Tp(r)),n.buffers.color.setClear(bo.r,bo.g,bo.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:v,addToRenderList:m}}function Vb(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(y,M,D,N,H){let W=!1;const z=h(N,D,M);s!==z&&(s=z,l(s.object)),W=f(y,N,D,H),W&&g(y,N,D,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,_(y,M,D,N),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return r.createVertexArray()}function l(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,M,D){const N=D.wireframe===!0;let H=n[y.id];H===void 0&&(H={},n[y.id]=H);let W=H[M.id];W===void 0&&(W={},H[M.id]=W);let z=W[N];return z===void 0&&(z=d(c()),W[N]=z),z}function d(y){const M=[],D=[],N=[];for(let H=0;H<t;H++)M[H]=0,D[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:D,attributeDivisors:N,object:y,attributes:{},index:null}}function f(y,M,D,N){const H=s.attributes,W=M.attributes;let z=0;const K=D.getAttributes();for(const q in K)if(K[q].location>=0){const J=H[q];let me=W[q];if(me===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),J===void 0||J.attribute!==me||me&&J.data!==me.data)return!0;z++}return s.attributesNum!==z||s.index!==N}function g(y,M,D,N){const H={},W=M.attributes;let z=0;const K=D.getAttributes();for(const q in K)if(K[q].location>=0){let J=W[q];J===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(J=y.instanceColor));const me={};me.attribute=J,J&&J.data&&(me.data=J.data),H[q]=me,z++}s.attributes=H,s.attributesNum=z,s.index=N}function v(){const y=s.newAttributes;for(let M=0,D=y.length;M<D;M++)y[M]=0}function m(y){p(y,0)}function p(y,M){const D=s.newAttributes,N=s.enabledAttributes,H=s.attributeDivisors;D[y]=1,N[y]===0&&(r.enableVertexAttribArray(y),N[y]=1),H[y]!==M&&(r.vertexAttribDivisor(y,M),H[y]=M)}function x(){const y=s.newAttributes,M=s.enabledAttributes;for(let D=0,N=M.length;D<N;D++)M[D]!==y[D]&&(r.disableVertexAttribArray(D),M[D]=0)}function b(y,M,D,N,H,W,z){z===!0?r.vertexAttribIPointer(y,M,D,H,W):r.vertexAttribPointer(y,M,D,N,H,W)}function _(y,M,D,N){v();const H=N.attributes,W=D.getAttributes(),z=M.defaultAttributeValues;for(const K in W){const q=W[K];if(q.location>=0){let de=H[K];if(de===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(de=y.instanceColor)),de!==void 0){const J=de.normalized,me=de.itemSize,Ke=e.get(de);if(Ke===void 0)continue;const et=Ke.buffer,Z=Ke.type,he=Ke.bytesPerElement,Se=Z===r.INT||Z===r.UNSIGNED_INT||de.gpuType===Wc;if(de.isInterleavedBufferAttribute){const _e=de.data,Fe=_e.stride,He=de.offset;if(_e.isInstancedInterleavedBuffer){for(let Qe=0;Qe<q.locationSize;Qe++)p(q.location+Qe,_e.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Qe=0;Qe<q.locationSize;Qe++)m(q.location+Qe);r.bindBuffer(r.ARRAY_BUFFER,et);for(let Qe=0;Qe<q.locationSize;Qe++)b(q.location+Qe,me/q.locationSize,Z,J,Fe*he,(He+me/q.locationSize*Qe)*he,Se)}else{if(de.isInstancedBufferAttribute){for(let _e=0;_e<q.locationSize;_e++)p(q.location+_e,de.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let _e=0;_e<q.locationSize;_e++)m(q.location+_e);r.bindBuffer(r.ARRAY_BUFFER,et);for(let _e=0;_e<q.locationSize;_e++)b(q.location+_e,me/q.locationSize,Z,J,me*he,me/q.locationSize*_e*he,Se)}}else if(z!==void 0){const J=z[K];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(q.location,J);break;case 3:r.vertexAttrib3fv(q.location,J);break;case 4:r.vertexAttrib4fv(q.location,J);break;default:r.vertexAttrib1fv(q.location,J)}}}}x()}function C(){P();for(const y in n){const M=n[y];for(const D in M){const N=M[D];for(const H in N)u(N[H].object),delete N[H];delete M[D]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const M=n[y.id];for(const D in M){const N=M[D];for(const H in N)u(N[H].object),delete N[H];delete M[D]}delete n[y.id]}function A(y){for(const M in n){const D=n[M];if(D[y.id]===void 0)continue;const N=D[y.id];for(const H in N)u(N[H].object),delete N[H];delete D[y.id]}}function P(){F(),a=!0,s!==i&&(s=i,l(s.object))}function F(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:F,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Wb(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(r.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v];for(let v=0;v<d.length;v++)t.update(g,n,d[v])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Xb(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==vn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==xi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Dn&&!P)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:C,maxSamples:w}}function qb(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new di,o=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const x=s?0:n,b=x*4;let _=p.clippingState||null;c.value=_,_=u(g,d,b,f);for(let C=0;C!==b;++C)_[C]=t[C];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,_=f;b!==v;++b,_+=4)a.copy(h[b]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function jb(r){let e=new WeakMap;function t(a,o){return o===zs?a.mapping=Ui:o===Sa&&(a.mapping=ts),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===zs||o===Sa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Rp(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ys extends el{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sr=4,ad=[.125,.215,.35,.446,.526,.582],Cs=20,Wl=new Ys,od=new oe;let Xl=null,ql=0,jl=0,Yl=!1;const Ts=(1+Math.sqrt(5))/2,mr=1/Ts,cd=[new T(-Ts,mr,0),new T(Ts,mr,0),new T(-mr,0,Ts),new T(mr,0,Ts),new T(0,Ts,-mr),new T(0,Ts,mr),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xl,ql,jl),this._renderer.xr.enabled=Yl,e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Nn,format:vn,colorSpace:qt,depthBuffer:!1},i=ld(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yb(s)),this._blurMaterial=Kb(s,e,t)}return i}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,Wl)}_sceneToCubeUV(e,t,n,i){const o=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(od),u.toneMapping=Ni,u.autoClear=!1;const f=new rn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new xt(new rs,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(od),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const b=this._cubeSize;xo(i,x*b,p>2?b:0,b,b),u.setRenderTarget(i),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ui||e.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;xo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Wl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=cd[(i-s-1)%cd.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new xt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Cs-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Cs;m>Cs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cs}`);const p=[];let x=0;for(let A=0;A<Cs;++A){const P=A/v,F=Math.exp(-P*P/2);p.push(F),A===0?x+=F:A<m&&(x+=2*F)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const _=this._sizeLods[i],C=3*_*(i>b-Sr?i-b+Sr:0),w=4*(this._cubeSize-_);xo(t,C,w,3*_,2*_),c.setRenderTarget(t),c.render(h,Wl)}}function Yb(r){const e=[],t=[],n=[];let i=r;const s=r-Sr+1+ad.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-Sr?c=ad[a-r+Sr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),b=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,P=w>2?0:-1,F=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];x.set(F,v*g*w),b.set(d,m*g*w);const y=[w,w,w,w,w,w];_.set(y,p*g*w)}const C=new je;C.setAttribute("position",new Ze(x,v)),C.setAttribute("uv",new Ze(b,m)),C.setAttribute("faceIndex",new Ze(_,p)),e.push(C),i>Sr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ld(r,e,t){const n=new Qt(r,e,t);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Kb(r,e,t){const n=new Float32Array(Cs),i=new T(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ud(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function hd(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ih(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jb(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===zs||c===Sa,u=c===Ui||c===ts;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Uc(r)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Uc(r)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Zb(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ko("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Qb(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],r.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let b=0,_=x.length;b<_;b+=3){const C=x[b+0],w=x[b+1],A=x[b+2];d.push(C,w,w,A,A,C)}}else if(g!==void 0){const x=g.array;v=g.version;for(let b=0,_=x.length/3-1;b<_;b+=3){const C=b+0,w=b+1,A=b+2;d.push(C,w,w,A,A,C)}}else return;const m=new(yp(d)?nh:th)(d,1);m.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function $b(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x];for(let x=0;x<v.length;x++)t.update(p,n,v[x])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ex(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tx(r,e,t){const n=new WeakMap,i=new ft;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let F=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let _=o.attributes.position.count*b,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const w=new Float32Array(_*C*4*h),A=new Qc(w,_,C,h);A.type=Dn,A.needsUpdate=!0;const P=b*4;for(let y=0;y<h;y++){const M=m[y],D=p[y],N=x[y],H=_*C*4*y;for(let W=0;W<M.count;W++){const z=W*P;f===!0&&(i.fromBufferAttribute(M,W),w[H+z+0]=i.x,w[H+z+1]=i.y,w[H+z+2]=i.z,w[H+z+3]=0),g===!0&&(i.fromBufferAttribute(D,W),w[H+z+4]=i.x,w[H+z+5]=i.y,w[H+z+6]=i.z,w[H+z+7]=0),v===!0&&(i.fromBufferAttribute(N,W),w[H+z+8]=i.x,w[H+z+9]=i.y,w[H+z+10]=i.z,w[H+z+11]=N.itemSize===4?i.w:1)}}d={count:h,texture:A,size:new Q(_,C)},n.set(o,d),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function nx(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class sh extends Nt{constructor(e,t,n,i,s,a,o,c,l,u=Fs){if(u!==Fs&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fs&&(n=Fi),n===void 0&&u===Gs&&(n=Hs),super(null,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Zt,this.minFilter=c!==void 0?c:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Pp=new Nt,dd=new sh(1,1),Ip=new Qc,Lp=new eh,Dp=new Va,fd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),vd=new Float32Array(4);function Hr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=fd[i];if(s===void 0&&(s=new Float32Array(i),fd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function tl(r,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ix(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function ax(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function ox(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;vd.set(n),r.uniformMatrix2fv(this.addr,!1,vd),tn(t,n)}}function cx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;gd.set(n),r.uniformMatrix3fv(this.addr,!1,gd),tn(t,n)}}function lx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;md.set(n),r.uniformMatrix4fv(this.addr,!1,md),tn(t,n)}}function ux(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function hx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function dx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function fx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function px(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function gx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function vx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function bx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(dd.compareFunction=Qu,s=dd):s=Pp,t.setTexture2D(e||s,i)}function xx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Lp,i)}function _x(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Dp,i)}function yx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ip,i)}function Mx(r){switch(r){case 5126:return ix;case 35664:return sx;case 35665:return rx;case 35666:return ax;case 35674:return ox;case 35675:return cx;case 35676:return lx;case 5124:case 35670:return ux;case 35667:case 35671:return hx;case 35668:case 35672:return dx;case 35669:case 35673:return fx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return yx}}function Sx(r,e){r.uniform1fv(this.addr,e)}function wx(r,e){const t=Hr(e,this.size,2);r.uniform2fv(this.addr,t)}function Ax(r,e){const t=Hr(e,this.size,3);r.uniform3fv(this.addr,t)}function Tx(r,e){const t=Hr(e,this.size,4);r.uniform4fv(this.addr,t)}function Ex(r,e){const t=Hr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Rx(r,e){const t=Hr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Cx(r,e){const t=Hr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Px(r,e){r.uniform1iv(this.addr,e)}function Ix(r,e){r.uniform2iv(this.addr,e)}function Lx(r,e){r.uniform3iv(this.addr,e)}function Dx(r,e){r.uniform4iv(this.addr,e)}function Nx(r,e){r.uniform1uiv(this.addr,e)}function Ux(r,e){r.uniform2uiv(this.addr,e)}function Fx(r,e){r.uniform3uiv(this.addr,e)}function Ox(r,e){r.uniform4uiv(this.addr,e)}function Bx(r,e,t){const n=this.cache,i=e.length,s=tl(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Pp,s[a])}function kx(r,e,t){const n=this.cache,i=e.length,s=tl(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Lp,s[a])}function zx(r,e,t){const n=this.cache,i=e.length,s=tl(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Dp,s[a])}function Hx(r,e,t){const n=this.cache,i=e.length,s=tl(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ip,s[a])}function Gx(r){switch(r){case 5126:return Sx;case 35664:return wx;case 35665:return Ax;case 35666:return Tx;case 35674:return Ex;case 35675:return Rx;case 35676:return Cx;case 5124:case 35670:return Px;case 35667:case 35671:return Ix;case 35668:case 35672:return Lx;case 35669:case 35673:return Dx;case 5125:return Nx;case 36294:return Ux;case 36295:return Fx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return Hx}}class Vx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mx(t.type)}}class Wx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gx(t.type)}}class Xx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Kl=/(\w+)(\])?(\[|\.)?/g;function bd(r,e){r.seq.push(e),r.map[e.id]=e}function qx(r,e,t){const n=r.name,i=n.length;for(Kl.lastIndex=0;;){const s=Kl.exec(n),a=Kl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){bd(t,l===void 0?new Vx(o,r,e):new Wx(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Xx(o),bd(t,h)),t=h}}}class Jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);qx(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function xd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const jx=37297;let Yx=0;function Kx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Jx(r){const e=bt.getPrimaries(bt.workingColorSpace),t=bt.getPrimaries(r);let n;switch(e===t?n="":e===Ea&&t===Ta?n="LinearDisplayP3ToLinearSRGB":e===Ta&&t===Ea&&(n="LinearSRGBToLinearDisplayP3"),r){case qt:case Ga:return[n,"LinearTransferOETF"];case Jt:case Zc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function _d(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Kx(r.getShaderSource(e),a)}else return i}function Zx(r,e){const t=Jx(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Qx(r,e){let t;switch(e){case $f:t="Linear";break;case ep:t="Reinhard";break;case tp:t="Cineon";break;case np:t="ACESFilmic";break;case sp:t="AgX";break;case rp:t="Neutral";break;case ip:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _o=new T;function $x(){bt.getLuminanceCoefficients(_o);const r=_o.x.toFixed(4),e=_o.y.toFixed(4),t=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function t_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function n_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ua(r){return r!==""}function yd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Md(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Au(r){return r.replace(i_,r_)}const s_=new Map;function r_(r,e){let t=ot[e];if(t===void 0){const n=s_.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Au(t)}const a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(r){return r.replace(a_,o_)}function o_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function wd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===zu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function l_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ui:case ts:e="ENVMAP_TYPE_CUBE";break;case kr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function h_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case za:e="ENVMAP_BLENDING_MULTIPLY";break;case Zf:e="ENVMAP_BLENDING_MIX";break;case Qf:e="ENVMAP_BLENDING_ADD";break}return e}function d_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function f_(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=c_(t),l=l_(t),u=u_(t),h=h_(t),d=d_(t),f=e_(t),g=t_(s),v=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ua).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ua).join(`
`),p.length>0&&(p+=`
`)):(m=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),p=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?ot.tonemapping_pars_fragment:"",t.toneMapping!==Ni?Qx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Zx("linearToOutputTexel",t.outputColorSpace),$x(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),a=Au(a),a=yd(a,t),a=Md(a,t),o=Au(o),o=yd(o,t),o=Md(o,t),a=Sd(a),o=Sd(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=x+m+a,_=x+p+o,C=xd(i,i.VERTEX_SHADER,b),w=xd(i,i.FRAGMENT_SHADER,_);i.attachShader(v,C),i.attachShader(v,w),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(M){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(C).trim(),H=i.getShaderInfoLog(w).trim();let W=!0,z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,C,w);else{const K=_d(i,C,"vertex"),q=_d(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+D+`
`+K+`
`+q)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(N===""||H==="")&&(z=!1);z&&(M.diagnostics={runnable:W,programLog:D,vertexShader:{log:N,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(C),i.deleteShader(w),P=new Jo(i,v),F=n_(i,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let F;this.getAttributes=function(){return F===void 0&&A(this),F};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(v,jx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=w,this}let p_=0;class m_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new g_(e),t.set(e,n)),n}}class g_{constructor(e){this.id=p_++,this.code=e,this.usedTimes=0}}function v_(r,e,t,n,i,s,a){const o=new $c,c=new m_,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,M,D,N,H){const W=N.fog,z=H.geometry,K=y.isMeshStandardMaterial?N.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),de=q&&q.mapping===kr?q.image.height:null,J=v[y.type];y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const me=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ke=me!==void 0?me.length:0;let et=0;z.morphAttributes.position!==void 0&&(et=1),z.morphAttributes.normal!==void 0&&(et=2),z.morphAttributes.color!==void 0&&(et=3);let Z,he,Se,_e;if(J){const rt=ti[J];Z=rt.vertexShader,he=rt.fragmentShader}else Z=y.vertexShader,he=y.fragmentShader,c.update(y),Se=c.getVertexShaderID(y),_e=c.getFragmentShaderID(y);const Fe=r.getRenderTarget(),He=H.isInstancedMesh===!0,Qe=H.isBatchedMesh===!0,Je=!!y.map,ae=!!y.matcap,I=!!q,ue=!!y.aoMap,pe=!!y.lightMap,ce=!!y.bumpMap,ve=!!y.normalMap,Le=!!y.displacementMap,ge=!!y.emissiveMap,R=!!y.metalnessMap,S=!!y.roughnessMap,X=y.anisotropy>0,ne=y.clearcoat>0,le=y.dispersion>0,ee=y.iridescence>0,Re=y.sheen>0,xe=y.transmission>0,Ce=X&&!!y.anisotropyMap,tt=ne&&!!y.clearcoatMap,fe=ne&&!!y.clearcoatNormalMap,Ae=ne&&!!y.clearcoatRoughnessMap,Xe=ee&&!!y.iridescenceMap,qe=ee&&!!y.iridescenceThicknessMap,Me=Re&&!!y.sheenColorMap,ct=Re&&!!y.sheenRoughnessMap,Ye=!!y.specularMap,Tt=!!y.specularColorMap,U=!!y.specularIntensityMap,G=xe&&!!y.transmissionMap,L=xe&&!!y.thicknessMap,O=!!y.gradientMap,se=!!y.alphaMap,re=y.alphaTest>0,te=!!y.alphaHash,Oe=!!y.extensions;let Ge=Ni;y.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(Ge=r.toneMapping);const Ve={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Z,fragmentShader:he,defines:y.defines,customVertexShaderID:Se,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&H._colorsTexture!==null,instancing:He,instancingColor:He&&H.instanceColor!==null,instancingMorph:He&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Fe===null?r.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:qt,alphaToCoverage:!!y.alphaToCoverage,map:Je,matcap:ae,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:de,aoMap:ue,lightMap:pe,bumpMap:ce,normalMap:ve,displacementMap:f&&Le,emissiveMap:ge,normalMapObjectSpace:ve&&y.normalMapType===fp,normalMapTangentSpace:ve&&y.normalMapType===ss,metalnessMap:R,roughnessMap:S,anisotropy:X,anisotropyMap:Ce,clearcoat:ne,clearcoatMap:tt,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ae,dispersion:le,iridescence:ee,iridescenceMap:Xe,iridescenceThicknessMap:qe,sheen:Re,sheenColorMap:Me,sheenRoughnessMap:ct,specularMap:Ye,specularColorMap:Tt,specularIntensityMap:U,transmission:xe,transmissionMap:G,thicknessMap:L,gradientMap:O,opaque:y.transparent===!1&&y.blending===$i&&y.alphaToCoverage===!1,alphaMap:se,alphaTest:re,alphaHash:te,combine:y.combine,mapUv:Je&&m(y.map.channel),aoMapUv:ue&&m(y.aoMap.channel),lightMapUv:pe&&m(y.lightMap.channel),bumpMapUv:ce&&m(y.bumpMap.channel),normalMapUv:ve&&m(y.normalMap.channel),displacementMapUv:Le&&m(y.displacementMap.channel),emissiveMapUv:ge&&m(y.emissiveMap.channel),metalnessMapUv:R&&m(y.metalnessMap.channel),roughnessMapUv:S&&m(y.roughnessMap.channel),anisotropyMapUv:Ce&&m(y.anisotropyMap.channel),clearcoatMapUv:tt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ct&&m(y.sheenRoughnessMap.channel),specularMapUv:Ye&&m(y.specularMap.channel),specularColorMapUv:Tt&&m(y.specularColorMap.channel),specularIntensityMapUv:U&&m(y.specularIntensityMap.channel),transmissionMapUv:G&&m(y.transmissionMap.channel),thicknessMapUv:L&&m(y.thicknessMap.channel),alphaMapUv:se&&m(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ve||X),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!z.attributes.uv&&(Je||se),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ke,morphTextureStride:et,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Je&&y.map.isVideoTexture===!0&&bt.getTransfer(y.map.colorSpace)===Lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ln,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Oe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&y.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function x(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)M.push(D),M.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(b(M,y),_(M,y),M.push(r.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function _(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),y.push(o.mask)}function C(y){const M=v[y.type];let D;if(M){const N=ti[M];D=Ia.clone(N.uniforms)}else D=y.uniforms;return D}function w(y,M){let D;for(let N=0,H=u.length;N<H;N++){const W=u[N];if(W.cacheKey===M){D=W,++D.usedTimes;break}}return D===void 0&&(D=new f_(r,M,y,s),u.push(D)),D}function A(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function P(y){c.remove(y)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:C,acquireProgram:w,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:F}}function b_(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function x_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ad(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Td(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,g,v,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function o(h,d,f,g,v,m){const p=a(h,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,g,v,m){const p=a(h,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||x_),n.length>1&&n.sort(d||Ad),i.length>1&&i.sort(d||Ad)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function __(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Td,r.set(n,[a])):i>=s.length?(a=new Td,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function y_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new oe};break;case"SpotLight":t={position:new T,direction:new T,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":t={color:new oe,position:new T,halfWidth:new T,halfHeight:new T};break}return r[e.id]=t,t}}}function M_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let S_=0;function w_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function A_(r){const e=new y_,t=M_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);const i=new T,s=new ze,a=new ze;function o(l){let u=0,h=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,b=0,_=0,C=0,w=0,A=0;l.sort(w_);for(let F=0,y=l.length;F<y;F++){const M=l[F],D=M.color,N=M.intensity,H=M.distance,W=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=D.r*N,h+=D.g*N,d+=D.b*N;else if(M.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(M.sh.coefficients[z],N);A++}else if(M.isDirectionalLight){const z=e.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const K=M.shadow,q=t.get(M);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=M.shadow.matrix,x++}n.directional[f]=z,f++}else if(M.isSpotLight){const z=e.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(D).multiplyScalar(N),z.distance=H,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,n.spot[v]=z;const K=M.shadow;if(M.map&&(n.spotLightMap[C]=M.map,C++,K.updateMatrices(M),M.castShadow&&w++),n.spotLightMatrix[v]=K.matrix,M.castShadow){const q=t.get(M);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=W,_++}v++}else if(M.isRectAreaLight){const z=e.get(M);z.color.copy(D).multiplyScalar(N),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),n.rectArea[m]=z,m++}else if(M.isPointLight){const z=e.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),z.distance=M.distance,z.decay=M.decay,M.castShadow){const K=M.shadow,q=t.get(M);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=M.shadow.matrix,b++}n.point[g]=z,g++}else if(M.isHemisphereLight){const z=e.get(M);z.skyColor.copy(M.color).multiplyScalar(N),z.groundColor.copy(M.groundColor).multiplyScalar(N),n.hemi[p]=z,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==b||P.numSpotShadows!==_||P.numSpotMaps!==C||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=b,P.numSpotShadows=_,P.numSpotMaps=C,P.numLightProbes=A,n.version=S_++)}function c(l,u){let h=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const b=l[p];if(b.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),h++}else if(b.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function Ed(r){const e=new A_(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function T_(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Ed(r),e.set(i,[o])):s>=a.length?(o=new Ed(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class rh extends $t{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ah extends $t{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function C_(r,e,t){let n=new Wa;const i=new Q,s=new Q,a=new ft,o=new rh({depthPacking:dp}),c=new ah,l={},u=t.maxTextureSize,h={[vi]:on,[on]:vi,[Ln]:Ln},d=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:E_,fragmentShader:R_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new je;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let p=this.type;this.render=function(w,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const F=r.getRenderTarget(),y=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),D=r.state;D.setBlending(mi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=p!==ui&&this.type===ui,H=p===ui&&this.type!==ui;for(let W=0,z=w.length;W<z;W++){const K=w[W],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const de=q.getFrameExtents();if(i.multiply(de),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/de.x),i.x=s.x*de.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/de.y),i.y=s.y*de.y,q.mapSize.y=s.y)),q.map===null||N===!0||H===!0){const me=this.type!==ui?{minFilter:Zt,magFilter:Zt}:{};q.map!==null&&q.map.dispose(),q.map=new Qt(i.x,i.y,me),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const J=q.getViewportCount();for(let me=0;me<J;me++){const Ke=q.getViewport(me);a.set(s.x*Ke.x,s.y*Ke.y,s.x*Ke.z,s.y*Ke.w),D.viewport(a),q.updateMatrices(K,me),n=q.getFrustum(),_(A,P,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===ui&&x(q,P),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(F,y,M)};function x(w,A){const P=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qt(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,P,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,P,f,v,null)}function b(w,A,P,F){let y=null;const M=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(M!==void 0)y=M;else if(y=P.isPointLight===!0?c:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const D=y.uuid,N=A.uuid;let H=l[D];H===void 0&&(H={},l[D]=H);let W=H[N];W===void 0&&(W=y.clone(),H[N]=W,A.addEventListener("dispose",C)),y=W}if(y.visible=A.visible,y.wireframe=A.wireframe,F===ui?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=r.properties.get(y);D.light=P}return y}function _(w,A,P,F,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===ui)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const N=e.update(w),H=w.material;if(Array.isArray(H)){const W=N.groups;for(let z=0,K=W.length;z<K;z++){const q=W[z],de=H[q.materialIndex];if(de&&de.visible){const J=b(w,de,F,y);w.onBeforeShadow(r,w,A,P,N,J,q),r.renderBufferDirect(P,null,N,J,w,q),w.onAfterShadow(r,w,A,P,N,J,q)}}}else if(H.visible){const W=b(w,H,F,y);w.onBeforeShadow(r,w,A,P,N,W,null),r.renderBufferDirect(P,null,N,W,w,null),w.onAfterShadow(r,w,A,P,N,W,null)}}const D=w.children;for(let N=0,H=D.length;N<H;N++)_(D[N],A,P,F,y)}function C(w){w.target.removeEventListener("dispose",C);for(const P in l){const F=l[P],y=w.target.uuid;y in F&&(F[y].dispose(),delete F[y])}}}const P_={[tc]:nc,[ic]:ac,[sc]:oc,[ks]:rc,[nc]:tc,[ac]:ic,[oc]:sc,[rc]:ks};function I_(r){function e(){let U=!1;const G=new ft;let L=null;const O=new ft(0,0,0,0);return{setMask:function(se){L!==se&&!U&&(r.colorMask(se,se,se,se),L=se)},setLocked:function(se){U=se},setClear:function(se,re,te,Oe,Ge){Ge===!0&&(se*=Oe,re*=Oe,te*=Oe),G.set(se,re,te,Oe),O.equals(G)===!1&&(r.clearColor(se,re,te,Oe),O.copy(G))},reset:function(){U=!1,L=null,O.set(-1,0,0,0)}}}function t(){let U=!1,G=!1,L=null,O=null,se=null;return{setReversed:function(re){G=re},setTest:function(re){re?Se(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(re){L!==re&&!U&&(r.depthMask(re),L=re)},setFunc:function(re){if(G&&(re=P_[re]),O!==re){switch(re){case tc:r.depthFunc(r.NEVER);break;case nc:r.depthFunc(r.ALWAYS);break;case ic:r.depthFunc(r.LESS);break;case ks:r.depthFunc(r.LEQUAL);break;case sc:r.depthFunc(r.EQUAL);break;case rc:r.depthFunc(r.GEQUAL);break;case ac:r.depthFunc(r.GREATER);break;case oc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}O=re}},setLocked:function(re){U=re},setClear:function(re){se!==re&&(r.clearDepth(re),se=re)},reset:function(){U=!1,L=null,O=null,se=null}}}function n(){let U=!1,G=null,L=null,O=null,se=null,re=null,te=null,Oe=null,Ge=null;return{setTest:function(Ve){U||(Ve?Se(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(Ve){G!==Ve&&!U&&(r.stencilMask(Ve),G=Ve)},setFunc:function(Ve,rt,ut){(L!==Ve||O!==rt||se!==ut)&&(r.stencilFunc(Ve,rt,ut),L=Ve,O=rt,se=ut)},setOp:function(Ve,rt,ut){(re!==Ve||te!==rt||Oe!==ut)&&(r.stencilOp(Ve,rt,ut),re=Ve,te=rt,Oe=ut)},setLocked:function(Ve){U=Ve},setClear:function(Ve){Ge!==Ve&&(r.clearStencil(Ve),Ge=Ve)},reset:function(){U=!1,G=null,L=null,O=null,se=null,re=null,te=null,Oe=null,Ge=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,x=null,b=null,_=null,C=null,w=new oe(0,0,0),A=0,P=!1,F=null,y=null,M=null,D=null,N=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,z=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=z>=2);let q=null,de={};const J=r.getParameter(r.SCISSOR_BOX),me=r.getParameter(r.VIEWPORT),Ke=new ft().fromArray(J),et=new ft().fromArray(me);function Z(U,G,L,O){const se=new Uint8Array(4),re=r.createTexture();r.bindTexture(U,re),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let te=0;te<L;te++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(G,0,r.RGBA,1,1,O,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage2D(G+te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se);return re}const he={};he[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),he[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),he[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Se(r.DEPTH_TEST),s.setFunc(ks),pe(!1),ce(bu),Se(r.CULL_FACE),I(mi);function Se(U){l[U]!==!0&&(r.enable(U),l[U]=!0)}function _e(U){l[U]!==!1&&(r.disable(U),l[U]=!1)}function Fe(U,G){return u[U]!==G?(r.bindFramebuffer(U,G),u[U]=G,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=G),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=G),!0):!1}function He(U,G){let L=d,O=!1;if(U){L=h.get(G),L===void 0&&(L=[],h.set(G,L));const se=U.textures;if(L.length!==se.length||L[0]!==r.COLOR_ATTACHMENT0){for(let re=0,te=se.length;re<te;re++)L[re]=r.COLOR_ATTACHMENT0+re;L.length=se.length,O=!0}}else L[0]!==r.BACK&&(L[0]=r.BACK,O=!0);O&&r.drawBuffers(L)}function Qe(U){return f!==U?(r.useProgram(U),f=U,!0):!1}const Je={[Qi]:r.FUNC_ADD,[Nf]:r.FUNC_SUBTRACT,[Uf]:r.FUNC_REVERSE_SUBTRACT};Je[Ff]=r.MIN,Je[Of]=r.MAX;const ae={[Bf]:r.ZERO,[kf]:r.ONE,[zf]:r.SRC_COLOR,[$o]:r.SRC_ALPHA,[qf]:r.SRC_ALPHA_SATURATE,[Wf]:r.DST_COLOR,[Gf]:r.DST_ALPHA,[Hf]:r.ONE_MINUS_SRC_COLOR,[ec]:r.ONE_MINUS_SRC_ALPHA,[Xf]:r.ONE_MINUS_DST_COLOR,[Vf]:r.ONE_MINUS_DST_ALPHA,[jf]:r.CONSTANT_COLOR,[Yf]:r.ONE_MINUS_CONSTANT_COLOR,[Kf]:r.CONSTANT_ALPHA,[Jf]:r.ONE_MINUS_CONSTANT_ALPHA};function I(U,G,L,O,se,re,te,Oe,Ge,Ve){if(U===mi){g===!0&&(_e(r.BLEND),g=!1);return}if(g===!1&&(Se(r.BLEND),g=!0),U!==Df){if(U!==v||Ve!==P){if((m!==Qi||b!==Qi)&&(r.blendEquation(r.FUNC_ADD),m=Qi,b=Qi),Ve)switch(U){case $i:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gn:r.blendFunc(r.ONE,r.ONE);break;case xu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _u:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case $i:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case xu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _u:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,x=null,_=null,C=null,w.set(0,0,0),A=0,v=U,P=Ve}return}se=se||G,re=re||L,te=te||O,(G!==m||se!==b)&&(r.blendEquationSeparate(Je[G],Je[se]),m=G,b=se),(L!==p||O!==x||re!==_||te!==C)&&(r.blendFuncSeparate(ae[L],ae[O],ae[re],ae[te]),p=L,x=O,_=re,C=te),(Oe.equals(w)===!1||Ge!==A)&&(r.blendColor(Oe.r,Oe.g,Oe.b,Ge),w.copy(Oe),A=Ge),v=U,P=!1}function ue(U,G){U.side===Ln?_e(r.CULL_FACE):Se(r.CULL_FACE);let L=U.side===on;G&&(L=!L),pe(L),U.blending===$i&&U.transparent===!1?I(mi):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),i.setMask(U.colorWrite);const O=U.stencilWrite;a.setTest(O),O&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Le(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Se(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function pe(U){F!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),F=U)}function ce(U){U!==If?(Se(r.CULL_FACE),U!==y&&(U===bu?r.cullFace(r.BACK):U===Lf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),y=U}function ve(U){U!==M&&(W&&r.lineWidth(U),M=U)}function Le(U,G,L){U?(Se(r.POLYGON_OFFSET_FILL),(D!==G||N!==L)&&(r.polygonOffset(G,L),D=G,N=L)):_e(r.POLYGON_OFFSET_FILL)}function ge(U){U?Se(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function R(U){U===void 0&&(U=r.TEXTURE0+H-1),q!==U&&(r.activeTexture(U),q=U)}function S(U,G,L){L===void 0&&(q===null?L=r.TEXTURE0+H-1:L=q);let O=de[L];O===void 0&&(O={type:void 0,texture:void 0},de[L]=O),(O.type!==U||O.texture!==G)&&(q!==L&&(r.activeTexture(L),q=L),r.bindTexture(U,G||he[U]),O.type=U,O.texture=G)}function X(){const U=de[q];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ne(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xe(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(U){Ke.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Ke.copy(U))}function Me(U){et.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),et.copy(U))}function ct(U,G){let L=c.get(G);L===void 0&&(L=new WeakMap,c.set(G,L));let O=L.get(U);O===void 0&&(O=r.getUniformBlockIndex(G,U.name),L.set(U,O))}function Ye(U,G){const O=c.get(G).get(U);o.get(G)!==O&&(r.uniformBlockBinding(G,O,U.__bindingPointIndex),o.set(G,O))}function Tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},q=null,de={},u={},h=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,x=null,b=null,_=null,C=null,w=new oe(0,0,0),A=0,P=!1,F=null,y=null,M=null,D=null,N=null,Ke.set(0,0,r.canvas.width,r.canvas.height),et.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:Se,disable:_e,bindFramebuffer:Fe,drawBuffers:He,useProgram:Qe,setBlending:I,setMaterial:ue,setFlipSided:pe,setCullFace:ce,setLineWidth:ve,setPolygonOffset:Le,setScissorTest:ge,activeTexture:R,bindTexture:S,unbindTexture:X,compressedTexImage2D:ne,compressedTexImage3D:le,texImage2D:Ae,texImage3D:Xe,updateUBOMapping:ct,uniformBlockBinding:Ye,texStorage2D:tt,texStorage3D:fe,texSubImage2D:ee,texSubImage3D:Re,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ce,scissor:qe,viewport:Me,reset:Tt}}function L_(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function D_(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function N_(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function Tu(r,e,t,n){const i=U_(n);switch(t){case Wu:return r*e;case qu:return r*e;case ju:return r*e*2;case jc:return r*e/i.components*i.byteLength;case Ha:return r*e/i.components*i.byteLength;case Yu:return r*e*2/i.components*i.byteLength;case Yc:return r*e*2/i.components*i.byteLength;case Xu:return r*e*3/i.components*i.byteLength;case vn:return r*e*4/i.components*i.byteLength;case Kc:return r*e*4/i.components*i.byteLength;case pa:case ma:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ga:case va:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lc:case hc:return Math.max(r,16)*Math.max(e,8)/4;case cc:case uc:return Math.max(r,8)*Math.max(e,8)/2;case dc:case fc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case vc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case _c:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case yc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ba:case Cc:case Pc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ku:case Ic:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Lc:case Dc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function U_(r){switch(r){case xi:case Hu:return{byteLength:1,components:1};case Lr:case Gu:case Nn:return{byteLength:2,components:1};case Xc:case qc:return{byteLength:2,components:4};case Fi:case Wc:case Dn:return{byteLength:4,components:1};case Vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}const F_={contain:L_,cover:D_,fill:N_,getByteLength:Tu};function O_(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Q,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):Pa("canvas")}function v(R,S,X){let ne=1;const le=ge(R);if((le.width>X||le.height>X)&&(ne=X/Math.max(le.width,le.height)),ne<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){const ee=Math.floor(ne*le.width),Re=Math.floor(ne*le.height);h===void 0&&(h=g(ee,Re));const xe=S?g(ee,Re):h;return xe.width=ee,xe.height=Re,xe.getContext("2d").drawImage(R,0,0,ee,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ee+"x"+Re+")."),xe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Zt&&R.minFilter!==Ct}function p(R){r.generateMipmap(R)}function x(R,S,X,ne,le=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=S;if(S===r.RED&&(X===r.FLOAT&&(ee=r.R32F),X===r.HALF_FLOAT&&(ee=r.R16F),X===r.UNSIGNED_BYTE&&(ee=r.R8)),S===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(ee=r.R8UI),X===r.UNSIGNED_SHORT&&(ee=r.R16UI),X===r.UNSIGNED_INT&&(ee=r.R32UI),X===r.BYTE&&(ee=r.R8I),X===r.SHORT&&(ee=r.R16I),X===r.INT&&(ee=r.R32I)),S===r.RG&&(X===r.FLOAT&&(ee=r.RG32F),X===r.HALF_FLOAT&&(ee=r.RG16F),X===r.UNSIGNED_BYTE&&(ee=r.RG8)),S===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(ee=r.RG8UI),X===r.UNSIGNED_SHORT&&(ee=r.RG16UI),X===r.UNSIGNED_INT&&(ee=r.RG32UI),X===r.BYTE&&(ee=r.RG8I),X===r.SHORT&&(ee=r.RG16I),X===r.INT&&(ee=r.RG32I)),S===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(ee=r.RGB8UI),X===r.UNSIGNED_SHORT&&(ee=r.RGB16UI),X===r.UNSIGNED_INT&&(ee=r.RGB32UI),X===r.BYTE&&(ee=r.RGB8I),X===r.SHORT&&(ee=r.RGB16I),X===r.INT&&(ee=r.RGB32I)),S===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(ee=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(ee=r.RGBA16UI),X===r.UNSIGNED_INT&&(ee=r.RGBA32UI),X===r.BYTE&&(ee=r.RGBA8I),X===r.SHORT&&(ee=r.RGBA16I),X===r.INT&&(ee=r.RGBA32I)),S===r.RGB&&X===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),S===r.RGBA){const Re=le?Aa:bt.getTransfer(ne);X===r.FLOAT&&(ee=r.RGBA32F),X===r.HALF_FLOAT&&(ee=r.RGBA16F),X===r.UNSIGNED_BYTE&&(ee=Re===Lt?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(R,S){let X;return R?S===null||S===Fi||S===Hs?X=r.DEPTH24_STENCIL8:S===Dn?X=r.DEPTH32F_STENCIL8:S===Lr&&(X=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Fi||S===Hs?X=r.DEPTH_COMPONENT24:S===Dn?X=r.DEPTH_COMPONENT32F:S===Lr&&(X=r.DEPTH_COMPONENT16),X}function _(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Zt&&R.minFilter!==Ct?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){const S=R.target;S.removeEventListener("dispose",C),A(S),S.isVideoTexture&&u.delete(S)}function w(R){const S=R.target;S.removeEventListener("dispose",w),F(S)}function A(R){const S=n.get(R);if(S.__webglInit===void 0)return;const X=R.source,ne=d.get(X);if(ne){const le=ne[S.__cacheKey];le.usedTimes--,le.usedTimes===0&&P(R),Object.keys(ne).length===0&&d.delete(X)}n.remove(R)}function P(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const X=R.source,ne=d.get(X);delete ne[S.__cacheKey],a.memory.textures--}function F(R){const S=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let le=0;le<S.__webglFramebuffer[ne].length;le++)r.deleteFramebuffer(S.__webglFramebuffer[ne][le]);else r.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)r.deleteFramebuffer(S.__webglFramebuffer[ne]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=R.textures;for(let ne=0,le=X.length;ne<le;ne++){const ee=n.get(X[ne]);ee.__webglTexture&&(r.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(X[ne])}n.remove(R)}let y=0;function M(){y=0}function D(){const R=y;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),y+=1,R}function N(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function H(R,S){const X=n.get(R);if(R.isVideoTexture&&ve(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(X,R,S);return}}t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+S)}function W(R,S){const X=n.get(R);if(R.version>0&&X.__version!==R.version){et(X,R,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+S)}function z(R,S){const X=n.get(R);if(R.version>0&&X.__version!==R.version){et(X,R,S);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+S)}function K(R,S){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Z(X,R,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+S)}const q={[bi]:r.REPEAT,[Hn]:r.CLAMP_TO_EDGE,[Ir]:r.MIRRORED_REPEAT},de={[Zt]:r.NEAREST,[Vc]:r.NEAREST_MIPMAP_NEAREST,[Is]:r.NEAREST_MIPMAP_LINEAR,[Ct]:r.LINEAR,[Tr]:r.LINEAR_MIPMAP_NEAREST,[Gn]:r.LINEAR_MIPMAP_LINEAR},J={[pp]:r.NEVER,[_p]:r.ALWAYS,[mp]:r.LESS,[Qu]:r.LEQUAL,[gp]:r.EQUAL,[xp]:r.GEQUAL,[vp]:r.GREATER,[bp]:r.NOTEQUAL};function me(R,S){if(S.type===Dn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ct||S.magFilter===Tr||S.magFilter===Is||S.magFilter===Gn||S.minFilter===Ct||S.minFilter===Tr||S.minFilter===Is||S.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,q[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,q[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,q[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,de[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Zt||S.minFilter!==Is&&S.minFilter!==Gn||S.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ke(R,S){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const ne=S.source;let le=d.get(ne);le===void 0&&(le={},d.set(ne,le));const ee=N(S);if(ee!==R.__cacheKey){le[ee]===void 0&&(le[ee]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),le[ee].usedTimes++;const Re=le[R.__cacheKey];Re!==void 0&&(le[R.__cacheKey].usedTimes--,Re.usedTimes===0&&P(S)),R.__cacheKey=ee,R.__webglTexture=le[ee].texture}return X}function et(R,S,X){let ne=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=r.TEXTURE_3D);const le=Ke(R,S),ee=S.source;t.bindTexture(ne,R.__webglTexture,r.TEXTURE0+X);const Re=n.get(ee);if(ee.version!==Re.__version||le===!0){t.activeTexture(r.TEXTURE0+X);const xe=bt.getPrimaries(bt.workingColorSpace),Ce=S.colorSpace===fi?null:bt.getPrimaries(S.colorSpace),tt=S.colorSpace===fi||xe===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let fe=v(S.image,!1,i.maxTextureSize);fe=Le(S,fe);const Ae=s.convert(S.format,S.colorSpace),Xe=s.convert(S.type);let qe=x(S.internalFormat,Ae,Xe,S.colorSpace,S.isVideoTexture);me(ne,S);let Me;const ct=S.mipmaps,Ye=S.isVideoTexture!==!0,Tt=Re.__version===void 0||le===!0,U=ee.dataReady,G=_(S,fe);if(S.isDepthTexture)qe=b(S.format===Gs,S.type),Tt&&(Ye?t.texStorage2D(r.TEXTURE_2D,1,qe,fe.width,fe.height):t.texImage2D(r.TEXTURE_2D,0,qe,fe.width,fe.height,0,Ae,Xe,null));else if(S.isDataTexture)if(ct.length>0){Ye&&Tt&&t.texStorage2D(r.TEXTURE_2D,G,qe,ct[0].width,ct[0].height);for(let L=0,O=ct.length;L<O;L++)Me=ct[L],Ye?U&&t.texSubImage2D(r.TEXTURE_2D,L,0,0,Me.width,Me.height,Ae,Xe,Me.data):t.texImage2D(r.TEXTURE_2D,L,qe,Me.width,Me.height,0,Ae,Xe,Me.data);S.generateMipmaps=!1}else Ye?(Tt&&t.texStorage2D(r.TEXTURE_2D,G,qe,fe.width,fe.height),U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe.width,fe.height,Ae,Xe,fe.data)):t.texImage2D(r.TEXTURE_2D,0,qe,fe.width,fe.height,0,Ae,Xe,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ye&&Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,G,qe,ct[0].width,ct[0].height,fe.depth);for(let L=0,O=ct.length;L<O;L++)if(Me=ct[L],S.format!==vn)if(Ae!==null)if(Ye){if(U)if(S.layerUpdates.size>0){const se=Tu(Me.width,Me.height,S.format,S.type);for(const re of S.layerUpdates){const te=Me.data.subarray(re*se/Me.data.BYTES_PER_ELEMENT,(re+1)*se/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,L,0,0,re,Me.width,Me.height,1,Ae,te,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,L,0,0,0,Me.width,Me.height,fe.depth,Ae,Me.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,L,qe,Me.width,Me.height,fe.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,L,0,0,0,Me.width,Me.height,fe.depth,Ae,Xe,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,L,qe,Me.width,Me.height,fe.depth,0,Ae,Xe,Me.data)}else{Ye&&Tt&&t.texStorage2D(r.TEXTURE_2D,G,qe,ct[0].width,ct[0].height);for(let L=0,O=ct.length;L<O;L++)Me=ct[L],S.format!==vn?Ae!==null?Ye?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,L,0,0,Me.width,Me.height,Ae,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,L,qe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?U&&t.texSubImage2D(r.TEXTURE_2D,L,0,0,Me.width,Me.height,Ae,Xe,Me.data):t.texImage2D(r.TEXTURE_2D,L,qe,Me.width,Me.height,0,Ae,Xe,Me.data)}else if(S.isDataArrayTexture)if(Ye){if(Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,G,qe,fe.width,fe.height,fe.depth),U)if(S.layerUpdates.size>0){const L=Tu(fe.width,fe.height,S.format,S.type);for(const O of S.layerUpdates){const se=fe.data.subarray(O*L/fe.data.BYTES_PER_ELEMENT,(O+1)*L/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,O,fe.width,fe.height,1,Ae,Xe,se)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ae,Xe,fe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,qe,fe.width,fe.height,fe.depth,0,Ae,Xe,fe.data);else if(S.isData3DTexture)Ye?(Tt&&t.texStorage3D(r.TEXTURE_3D,G,qe,fe.width,fe.height,fe.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ae,Xe,fe.data)):t.texImage3D(r.TEXTURE_3D,0,qe,fe.width,fe.height,fe.depth,0,Ae,Xe,fe.data);else if(S.isFramebufferTexture){if(Tt)if(Ye)t.texStorage2D(r.TEXTURE_2D,G,qe,fe.width,fe.height);else{let L=fe.width,O=fe.height;for(let se=0;se<G;se++)t.texImage2D(r.TEXTURE_2D,se,qe,L,O,0,Ae,Xe,null),L>>=1,O>>=1}}else if(ct.length>0){if(Ye&&Tt){const L=ge(ct[0]);t.texStorage2D(r.TEXTURE_2D,G,qe,L.width,L.height)}for(let L=0,O=ct.length;L<O;L++)Me=ct[L],Ye?U&&t.texSubImage2D(r.TEXTURE_2D,L,0,0,Ae,Xe,Me):t.texImage2D(r.TEXTURE_2D,L,qe,Ae,Xe,Me);S.generateMipmaps=!1}else if(Ye){if(Tt){const L=ge(fe);t.texStorage2D(r.TEXTURE_2D,G,qe,L.width,L.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,Xe,fe)}else t.texImage2D(r.TEXTURE_2D,0,qe,Ae,Xe,fe);m(S)&&p(ne),Re.__version=ee.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Z(R,S,X){if(S.image.length!==6)return;const ne=Ke(R,S),le=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+X);const ee=n.get(le);if(le.version!==ee.__version||ne===!0){t.activeTexture(r.TEXTURE0+X);const Re=bt.getPrimaries(bt.workingColorSpace),xe=S.colorSpace===fi?null:bt.getPrimaries(S.colorSpace),Ce=S.colorSpace===fi||Re===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const tt=S.isCompressedTexture||S.image[0].isCompressedTexture,fe=S.image[0]&&S.image[0].isDataTexture,Ae=[];for(let O=0;O<6;O++)!tt&&!fe?Ae[O]=v(S.image[O],!0,i.maxCubemapSize):Ae[O]=fe?S.image[O].image:S.image[O],Ae[O]=Le(S,Ae[O]);const Xe=Ae[0],qe=s.convert(S.format,S.colorSpace),Me=s.convert(S.type),ct=x(S.internalFormat,qe,Me,S.colorSpace),Ye=S.isVideoTexture!==!0,Tt=ee.__version===void 0||ne===!0,U=le.dataReady;let G=_(S,Xe);me(r.TEXTURE_CUBE_MAP,S);let L;if(tt){Ye&&Tt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,G,ct,Xe.width,Xe.height);for(let O=0;O<6;O++){L=Ae[O].mipmaps;for(let se=0;se<L.length;se++){const re=L[se];S.format!==vn?qe!==null?Ye?U&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,se,0,0,re.width,re.height,qe,re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,se,ct,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,se,0,0,re.width,re.height,qe,Me,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,se,ct,re.width,re.height,0,qe,Me,re.data)}}}else{if(L=S.mipmaps,Ye&&Tt){L.length>0&&G++;const O=ge(Ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,G,ct,O.width,O.height)}for(let O=0;O<6;O++)if(fe){Ye?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Ae[O].width,Ae[O].height,qe,Me,Ae[O].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,ct,Ae[O].width,Ae[O].height,0,qe,Me,Ae[O].data);for(let se=0;se<L.length;se++){const te=L[se].image[O].image;Ye?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,se+1,0,0,te.width,te.height,qe,Me,te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,se+1,ct,te.width,te.height,0,qe,Me,te.data)}}else{Ye?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,qe,Me,Ae[O]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,ct,qe,Me,Ae[O]);for(let se=0;se<L.length;se++){const re=L[se];Ye?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,se+1,0,0,qe,Me,re.image[O]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,se+1,ct,qe,Me,re.image[O])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),ee.__version=le.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function he(R,S,X,ne,le,ee){const Re=s.convert(X.format,X.colorSpace),xe=s.convert(X.type),Ce=x(X.internalFormat,Re,xe,X.colorSpace);if(!n.get(S).__hasExternalTextures){const fe=Math.max(1,S.width>>ee),Ae=Math.max(1,S.height>>ee);le===r.TEXTURE_3D||le===r.TEXTURE_2D_ARRAY?t.texImage3D(le,ee,Ce,fe,Ae,S.depth,0,Re,xe,null):t.texImage2D(le,ee,Ce,fe,Ae,0,Re,xe,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),ce(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,le,n.get(X).__webglTexture,0,pe(S)):(le===r.TEXTURE_2D||le>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,le,n.get(X).__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Se(R,S,X){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){const ne=S.depthTexture,le=ne&&ne.isDepthTexture?ne.type:null,ee=b(S.stencilBuffer,le),Re=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=pe(S);ce(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xe,ee,S.width,S.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,ee,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ee,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Re,r.RENDERBUFFER,R)}else{const ne=S.textures;for(let le=0;le<ne.length;le++){const ee=ne[le],Re=s.convert(ee.format,ee.colorSpace),xe=s.convert(ee.type),Ce=x(ee.internalFormat,Re,xe,ee.colorSpace),tt=pe(S);X&&ce(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Ce,S.width,S.height):ce(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,Ce,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _e(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const ne=n.get(S.depthTexture).__webglTexture,le=pe(S);if(S.depthTexture.format===Fs)ce(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(S.depthTexture.format===Gs)ce(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Fe(R){const S=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ne){const le=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ne.removeEventListener("dispose",le)};ne.addEventListener("dispose",le),S.__depthDisposeCallback=le}S.__boundDepthTexture=ne}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");_e(S.__webglFramebuffer,R)}else if(X){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]===void 0)S.__webglDepthbuffer[ne]=r.createRenderbuffer(),Se(S.__webglDepthbuffer[ne],R,!1);else{const le=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer[ne];r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Se(S.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,le)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function He(R,S,X){const ne=n.get(R);S!==void 0&&he(ne.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Fe(R)}function Qe(R){const S=R.texture,X=n.get(R),ne=n.get(S);R.addEventListener("dispose",w);const le=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Re=le.length>1;if(Re||(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=S.version,a.memory.textures++),ee){X.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[xe]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)X.__webglFramebuffer[xe][Ce]=r.createFramebuffer()}else X.__webglFramebuffer[xe]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let xe=0;xe<S.mipmaps.length;xe++)X.__webglFramebuffer[xe]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(Re)for(let xe=0,Ce=le.length;xe<Ce;xe++){const tt=n.get(le[xe]);tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&ce(R)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let xe=0;xe<le.length;xe++){const Ce=le[xe];X.__webglColorRenderbuffer[xe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[xe]);const tt=s.convert(Ce.format,Ce.colorSpace),fe=s.convert(Ce.type),Ae=x(Ce.internalFormat,tt,fe,Ce.colorSpace,R.isXRRenderTarget===!0),Xe=pe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe,Ae,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,X.__webglColorRenderbuffer[xe])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Se(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),me(r.TEXTURE_CUBE_MAP,S);for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)he(X.__webglFramebuffer[xe][Ce],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce);else he(X.__webglFramebuffer[xe],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let xe=0,Ce=le.length;xe<Ce;xe++){const tt=le[xe],fe=n.get(tt);t.bindTexture(r.TEXTURE_2D,fe.__webglTexture),me(r.TEXTURE_2D,tt),he(X.__webglFramebuffer,R,tt,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,0),m(tt)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let xe=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(xe,ne.__webglTexture),me(xe,S),S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)he(X.__webglFramebuffer[Ce],R,S,r.COLOR_ATTACHMENT0,xe,Ce);else he(X.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,xe,0);m(S)&&p(xe),t.unbindTexture()}R.depthBuffer&&Fe(R)}function Je(R){const S=R.textures;for(let X=0,ne=S.length;X<ne;X++){const le=S[X];if(m(le)){const ee=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Re=n.get(le).__webglTexture;t.bindTexture(ee,Re),p(ee),t.unbindTexture()}}}const ae=[],I=[];function ue(R){if(R.samples>0){if(ce(R)===!1){const S=R.textures,X=R.width,ne=R.height;let le=r.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=n.get(R),xe=S.length>1;if(xe)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(le|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(le|=r.STENCIL_BUFFER_BIT)),xe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);const tt=n.get(S[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,tt,0)}r.blitFramebuffer(0,0,X,ne,0,0,X,ne,le,r.NEAREST),c===!0&&(ae.length=0,I.length=0,ae.push(r.COLOR_ATTACHMENT0+Ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ae.push(ee),I.push(ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xe)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);const tt=n.get(S[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,tt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function pe(R){return Math.min(i.maxSamples,R.samples)}function ce(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ve(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function Le(R,S){const X=R.colorSpace,ne=R.format,le=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==qt&&X!==fi&&(bt.getTransfer(X)===Lt?(ne!==vn||le!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function ge(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=M,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=He,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ce}function Np(r,e){function t(n,i=fi){let s;const a=bt.getTransfer(i);if(n===xi)return r.UNSIGNED_BYTE;if(n===Xc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===qc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Vu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Hu)return r.BYTE;if(n===Gu)return r.SHORT;if(n===Lr)return r.UNSIGNED_SHORT;if(n===Wc)return r.INT;if(n===Fi)return r.UNSIGNED_INT;if(n===Dn)return r.FLOAT;if(n===Nn)return r.HALF_FLOAT;if(n===Wu)return r.ALPHA;if(n===Xu)return r.RGB;if(n===vn)return r.RGBA;if(n===qu)return r.LUMINANCE;if(n===ju)return r.LUMINANCE_ALPHA;if(n===Fs)return r.DEPTH_COMPONENT;if(n===Gs)return r.DEPTH_STENCIL;if(n===jc)return r.RED;if(n===Ha)return r.RED_INTEGER;if(n===Yu)return r.RG;if(n===Yc)return r.RG_INTEGER;if(n===Kc)return r.RGBA_INTEGER;if(n===pa||n===ma||n===ga||n===va)if(a===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===pa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===pa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cc||n===lc||n===uc||n===hc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dc||n===fc||n===pc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===dc||n===fc)return a===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===pc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mc||n===gc||n===vc||n===bc||n===xc||n===_c||n===yc||n===Mc||n===Sc||n===wc||n===Ac||n===Tc||n===Ec||n===Rc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===mc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_c)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ac)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ec)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ba||n===Cc||n===Pc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ba)return a===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ku||n===Ic||n===Lc||n===Dc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ic)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Up extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wn extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B_={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(B_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const k_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class H_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Nt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mt({vertexShader:k_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G_ extends yi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const v=new H_,m=t.getContextAttributes();let p=null,x=null;const b=[],_=[],C=new Q;let w=null;const A=new Xt;A.layers.enable(1),A.viewport=new ft;const P=new Xt;P.layers.enable(2),P.viewport=new ft;const F=[A,P],y=new Up;y.layers.enable(1),y.layers.enable(2);let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=b[Z];return he===void 0&&(he=new Jl,b[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=b[Z];return he===void 0&&(he=new Jl,b[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=b[Z];return he===void 0&&(he=new Jl,b[Z]=he),he.getHandSpace()};function N(Z){const he=_.indexOf(Z.inputSource);if(he===-1)return;const Se=b[he];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,l||a),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",W);for(let Z=0;Z<b.length;Z++){const he=_[Z];he!==null&&(_[Z]=null,b[Z].disconnect(he))}M=null,D=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,x=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",H),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Qt(f.framebufferWidth,f.framebufferHeight,{format:vn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,Se=null,_e=null;m.depth&&(_e=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?Gs:Fs,Se=m.stencil?Hs:Fi);const Fe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Fe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Qt(d.textureWidth,d.textureHeight,{format:vn,type:xi,depthTexture:new sh(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(Z){for(let he=0;he<Z.removed.length;he++){const Se=Z.removed[he],_e=_.indexOf(Se);_e>=0&&(_[_e]=null,b[_e].disconnect(Se))}for(let he=0;he<Z.added.length;he++){const Se=Z.added[he];let _e=_.indexOf(Se);if(_e===-1){for(let He=0;He<b.length;He++)if(He>=_.length){_.push(Se),_e=He;break}else if(_[He]===null){_[He]=Se,_e=He;break}if(_e===-1)break}const Fe=b[_e];Fe&&Fe.connect(Se)}}const z=new T,K=new T;function q(Z,he,Se){z.setFromMatrixPosition(he.matrixWorld),K.setFromMatrixPosition(Se.matrixWorld);const _e=z.distanceTo(K),Fe=he.projectionMatrix.elements,He=Se.projectionMatrix.elements,Qe=Fe[14]/(Fe[10]-1),Je=Fe[14]/(Fe[10]+1),ae=(Fe[9]+1)/Fe[5],I=(Fe[9]-1)/Fe[5],ue=(Fe[8]-1)/Fe[0],pe=(He[8]+1)/He[0],ce=Qe*ue,ve=Qe*pe,Le=_e/(-ue+pe),ge=Le*-ue;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ge),Z.translateZ(Le),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Fe[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const R=Qe+Le,S=Je+Le,X=ce-ge,ne=ve+(_e-ge),le=ae*Je/S*R,ee=I*Je/S*R;Z.projectionMatrix.makePerspective(X,ne,le,ee,R,S),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function de(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let he=Z.near,Se=Z.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(Se=v.depthFar)),y.near=P.near=A.near=he,y.far=P.far=A.far=Se,(M!==y.near||D!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,D=y.far);const _e=Z.parent,Fe=y.cameras;de(y,_e);for(let He=0;He<Fe.length;He++)de(Fe[He],_e);Fe.length===2?q(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),J(Z,y,_e)};function J(Z,he,Se){Se===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ur*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let me=null;function Ke(Z,he){if(u=he.getViewerPose(l||a),g=he,u!==null){const Se=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let _e=!1;Se.length!==y.cameras.length&&(y.cameras.length=0,_e=!0);for(let He=0;He<Se.length;He++){const Qe=Se[He];let Je=null;if(f!==null)Je=f.getViewport(Qe);else{const I=h.getViewSubImage(d,Qe);Je=I.viewport,He===0&&(e.setRenderTargetTextures(x,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(x))}let ae=F[He];ae===void 0&&(ae=new Xt,ae.layers.enable(He),ae.viewport=new ft,F[He]=ae),ae.matrix.fromArray(Qe.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Qe.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Je.x,Je.y,Je.width,Je.height),He===0&&(y.matrix.copy(ae.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_e===!0&&y.cameras.push(ae)}const Fe=i.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const He=h.getDepthInformation(Se[0]);He&&He.isValid&&He.texture&&v.init(e,He,i.renderState)}}for(let Se=0;Se<b.length;Se++){const _e=_[Se],Fe=b[Se];_e!==null&&Fe!==void 0&&Fe.update(_e,he,l||a)}me&&me(Z,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}const et=new Cp;et.setAnimationLoop(Ke),this.setAnimationLoop=function(Z){me=Z},this.dispose=function(){}}}const vs=new Wn,V_=new ze;function W_(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Tp(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,b,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),b=x.envMap,_=x.envMapRotation;b&&(m.envMap.value=b,vs.copy(_),vs.x*=-1,vs.y*=-1,vs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),m.envMapRotation.value.setFromMatrix4(V_.makeRotationFromEuler(vs)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function X_(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,b){const _=b.program;n.uniformBlockBinding(x,_)}function l(x,b){let _=i[x.id];_===void 0&&(g(x),_=u(x),i[x.id]=_,x.addEventListener("dispose",m));const C=b.program;n.updateUBOMapping(x,C);const w=e.render.frame;s[x.id]!==w&&(d(x),s[x.id]=w)}function u(x){const b=h();x.__bindingPointIndex=b;const _=r.createBuffer(),C=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,_),_}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const b=i[x.id],_=x.uniforms,C=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let w=0,A=_.length;w<A;w++){const P=Array.isArray(_[w])?_[w]:[_[w]];for(let F=0,y=P.length;F<y;F++){const M=P[F];if(f(M,w,F,C)===!0){const D=M.__offset,N=Array.isArray(M.value)?M.value:[M.value];let H=0;for(let W=0;W<N.length;W++){const z=N[W],K=v(z);typeof z=="number"||typeof z=="boolean"?(M.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,D+H,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=0,M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=0,M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=0):(z.toArray(M.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,M.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,b,_,C){const w=x.value,A=b+"_"+_;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const P=C[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return C[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(x){const b=x.uniforms;let _=0;const C=16;for(let A=0,P=b.length;A<P;A++){const F=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,M=F.length;y<M;y++){const D=F[y],N=Array.isArray(D.value)?D.value:[D.value];for(let H=0,W=N.length;H<W;H++){const z=N[H],K=v(z),q=_%C,de=q%K.boundary,J=q+de;_+=de,J!==0&&C-J<K.storage&&(_+=C-J),D.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=K.storage}}}const w=_%C;return w>0&&(_+=C-w),x.__size=_,x.__cache={},this}function v(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function m(x){const b=x.target;b.removeEventListener("dispose",m);const _=a.indexOf(b.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}class Fp{constructor(e={}){const{canvas:t=Mp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this.toneMapping=Ni,this.toneMappingExposure=1;const b=this;let _=!1,C=0,w=0,A=null,P=-1,F=null;const y=new ft,M=new ft;let D=null;const N=new oe(0);let H=0,W=t.width,z=t.height,K=1,q=null,de=null;const J=new ft(0,0,W,z),me=new ft(0,0,W,z);let Ke=!1;const et=new Wa;let Z=!1,he=!1;const Se=new ze,_e=new ze,Fe=new T,He=new ft,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function ae(){return A===null?K:1}let I=n;function ue(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hc}`),t.addEventListener("webglcontextlost",O,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",re,!1),I===null){const B="webgl2";if(I=ue(B,E),I===null)throw ue(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let pe,ce,ve,Le,ge,R,S,X,ne,le,ee,Re,xe,Ce,tt,fe,Ae,Xe,qe,Me,ct,Ye,Tt,U;function G(){pe=new Zb(I),pe.init(),Ye=new Np(I,pe),ce=new Xb(I,pe,e,Ye),ve=new I_(I),ce.reverseDepthBuffer&&ve.buffers.depth.setReversed(!0),Le=new ex(I),ge=new b_,R=new O_(I,pe,ve,ge,ce,Ye,Le),S=new jb(b),X=new Jb(b),ne=new o0(I),Tt=new Vb(I,ne),le=new Qb(I,ne,Le,Tt),ee=new nx(I,le,ne,Le),qe=new tx(I,ce,R),fe=new qb(ge),Re=new v_(b,S,X,pe,ce,Tt,fe),xe=new W_(b,ge),Ce=new __,tt=new T_(pe),Xe=new Gb(b,S,X,ve,ee,d,c),Ae=new C_(b,ee,ce),U=new X_(I,Le,ce,ve),Me=new Wb(I,pe,Le),ct=new $b(I,pe,Le),Le.programs=Re.programs,b.capabilities=ce,b.extensions=pe,b.properties=ge,b.renderLists=Ce,b.shadowMap=Ae,b.state=ve,b.info=Le}G();const L=new G_(b,I);this.xr=L,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=pe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=pe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(W,z,!1))},this.getSize=function(E){return E.set(W,z)},this.setSize=function(E,B,j=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,z=B,t.width=Math.floor(E*K),t.height=Math.floor(B*K),j===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(W*K,z*K).floor()},this.setDrawingBufferSize=function(E,B,j){W=E,z=B,K=j,t.width=Math.floor(E*j),t.height=Math.floor(B*j),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,B,j,Y){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,B,j,Y),ve.viewport(y.copy(J).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(me)},this.setScissor=function(E,B,j,Y){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,B,j,Y),ve.scissor(M.copy(me).multiplyScalar(K).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(E){ve.setScissorTest(Ke=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){de=E},this.getClearColor=function(E){return E.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(E=!0,B=!0,j=!0){let Y=0;if(E){let V=!1;if(A!==null){const be=A.texture.format;V=be===Kc||be===Yc||be===Ha}if(V){const be=A.texture.type,Pe=be===xi||be===Fi||be===Lr||be===Hs||be===Xc||be===qc,De=Xe.getClearColor(),Ne=Xe.getClearAlpha(),We=De.r,$e=De.g,Be=De.b;Pe?(f[0]=We,f[1]=$e,f[2]=Be,f[3]=Ne,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=We,g[1]=$e,g[2]=Be,g[3]=Ne,I.clearBufferiv(I.COLOR,0,g))}else Y|=I.COLOR_BUFFER_BIT}B&&(Y|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",O,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Ce.dispose(),tt.dispose(),ge.dispose(),S.dispose(),X.dispose(),ee.dispose(),Tt.dispose(),U.dispose(),Re.dispose(),L.dispose(),L.removeEventListener("sessionstart",Et),L.removeEventListener("sessionend",Gt),it.stop()};function O(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const E=Le.autoReset,B=Ae.enabled,j=Ae.autoUpdate,Y=Ae.needsUpdate,V=Ae.type;G(),Le.autoReset=E,Ae.enabled=B,Ae.autoUpdate=j,Ae.needsUpdate=Y,Ae.type=V}function re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function te(E){const B=E.target;B.removeEventListener("dispose",te),Oe(B)}function Oe(E){Ge(E),ge.remove(E)}function Ge(E){const B=ge.get(E).programs;B!==void 0&&(B.forEach(function(j){Re.releaseProgram(j)}),E.isShaderMaterial&&Re.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,j,Y,V,be){B===null&&(B=Qe);const Pe=V.isMesh&&V.matrixWorld.determinant()<0,De=ki(E,B,j,Y,V);ve.setMaterial(Y,Pe);let Ne=j.index,We=1;if(Y.wireframe===!0){if(Ne=le.getWireframeAttribute(j),Ne===void 0)return;We=2}const $e=j.drawRange,Be=j.attributes.position;let At=$e.start*We,pt=($e.start+$e.count)*We;be!==null&&(At=Math.max(At,be.start*We),pt=Math.min(pt,(be.start+be.count)*We)),Ne!==null?(At=Math.max(At,0),pt=Math.min(pt,Ne.count)):Be!=null&&(At=Math.max(At,0),pt=Math.min(pt,Be.count));const Dt=pt-At;if(Dt<0||Dt===1/0)return;Tt.setup(V,Y,De,j,Ne);let an,_t=Me;if(Ne!==null&&(an=ne.get(Ne),_t=ct,_t.setIndex(an)),V.isMesh)Y.wireframe===!0?(ve.setLineWidth(Y.wireframeLinewidth*ae()),_t.setMode(I.LINES)):_t.setMode(I.TRIANGLES);else if(V.isLine){let ke=Y.linewidth;ke===void 0&&(ke=1),ve.setLineWidth(ke*ae()),V.isLineSegments?_t.setMode(I.LINES):V.isLineLoop?_t.setMode(I.LINE_LOOP):_t.setMode(I.LINE_STRIP)}else V.isPoints?_t.setMode(I.POINTS):V.isSprite&&_t.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)_t.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))_t.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const ke=V._multiDrawStarts,Yt=V._multiDrawCounts,gt=V._multiDrawCount,Tn=Ne?ne.get(Ne).bytesPerElement:1,Mi=ge.get(Y).currentProgram.getUniforms();for(let hn=0;hn<gt;hn++)Mi.setValue(I,"_gl_DrawID",hn),_t.render(ke[hn]/Tn,Yt[hn])}else if(V.isInstancedMesh)_t.renderInstances(At,Dt,V.count);else if(j.isInstancedBufferGeometry){const ke=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Yt=Math.min(j.instanceCount,ke);_t.renderInstances(At,Dt,Yt)}else _t.render(At,Dt)};function Ve(E,B,j){E.transparent===!0&&E.side===Ln&&E.forceSinglePass===!1?(E.side=on,E.needsUpdate=!0,ht(E,B,j),E.side=vi,E.needsUpdate=!0,ht(E,B,j),E.side=Ln):ht(E,B,j)}this.compile=function(E,B,j=null){j===null&&(j=E),m=tt.get(j),m.init(B),x.push(m),j.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),E!==j&&E.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const Y=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const be=V.material;if(be)if(Array.isArray(be))for(let Pe=0;Pe<be.length;Pe++){const De=be[Pe];Ve(De,j,V),Y.add(De)}else Ve(be,j,V),Y.add(be)}),x.pop(),m=null,Y},this.compileAsync=function(E,B,j=null){const Y=this.compile(E,B,j);return new Promise(V=>{function be(){if(Y.forEach(function(Pe){ge.get(Pe).currentProgram.isReady()&&Y.delete(Pe)}),Y.size===0){V(E);return}setTimeout(be,10)}pe.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let rt=null;function ut(E){rt&&rt(E)}function Et(){it.stop()}function Gt(){it.start()}const it=new Cp;it.setAnimationLoop(ut),typeof self!="undefined"&&it.setContext(self),this.setAnimationLoop=function(E){rt=E,L.setAnimationLoop(E),E===null?it.stop():it.start()},L.addEventListener("sessionstart",Et),L.addEventListener("sessionend",Gt),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(B),B=L.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,B,A),m=tt.get(E,x.length),m.init(B),x.push(m),_e.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),et.setFromProjectionMatrix(_e),he=this.localClippingEnabled,Z=fe.init(this.clippingPlanes,he),v=Ce.get(E,p.length),v.init(),p.push(v),L.enabled===!0&&L.isPresenting===!0){const be=b.xr.getDepthSensingMesh();be!==null&&St(be,B,-1/0,b.sortObjects)}St(E,B,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(q,de),Je=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,Je&&Xe.addToRenderList(v,E),this.info.render.frame++,Z===!0&&fe.beginShadows();const j=m.state.shadowsArray;Ae.render(j,E,B),Z===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,V=v.transmissive;if(m.setupLights(),B.isArrayCamera){const be=B.cameras;if(V.length>0)for(let Pe=0,De=be.length;Pe<De;Pe++){const Ne=be[Pe];wt(Y,V,E,Ne)}Je&&Xe.render(E);for(let Pe=0,De=be.length;Pe<De;Pe++){const Ne=be[Pe];Rt(v,E,Ne,Ne.viewport)}}else V.length>0&&wt(Y,V,E,B),Je&&Xe.render(E),Rt(v,E,B);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(b,E,B),Tt.resetDefaultState(),P=-1,F=null,x.pop(),x.length>0?(m=x[x.length-1],Z===!0&&fe.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function St(E,B,j,Y){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||et.intersectsSprite(E)){Y&&He.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_e);const Pe=ee.update(E),De=E.material;De.visible&&v.push(E,Pe,De,j,He.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||et.intersectsObject(E))){const Pe=ee.update(E),De=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),He.copy(E.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),He.copy(Pe.boundingSphere.center)),He.applyMatrix4(E.matrixWorld).applyMatrix4(_e)),Array.isArray(De)){const Ne=Pe.groups;for(let We=0,$e=Ne.length;We<$e;We++){const Be=Ne[We],At=De[Be.materialIndex];At&&At.visible&&v.push(E,Pe,At,j,He.z,Be)}}else De.visible&&v.push(E,Pe,De,j,He.z,null)}}const be=E.children;for(let Pe=0,De=be.length;Pe<De;Pe++)St(be[Pe],B,j,Y)}function Rt(E,B,j,Y){const V=E.opaque,be=E.transmissive,Pe=E.transparent;m.setupLightsView(j),Z===!0&&fe.setGlobalState(b.clippingPlanes,j),Y&&ve.viewport(y.copy(Y)),V.length>0&&Pt(V,B,j),be.length>0&&Pt(be,B,j),Pe.length>0&&Pt(Pe,B,j),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function wt(E,B,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Qt(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?Nn:xi,minFilter:Gn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const be=m.state.transmissionRenderTarget[Y.id],Pe=Y.viewport||y;be.setSize(Pe.z,Pe.w);const De=b.getRenderTarget();b.setRenderTarget(be),b.getClearColor(N),H=b.getClearAlpha(),H<1&&b.setClearColor(16777215,.5),b.clear(),Je&&Xe.render(j);const Ne=b.toneMapping;b.toneMapping=Ni;const We=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),Z===!0&&fe.setGlobalState(b.clippingPlanes,Y),Pt(E,j,Y),R.updateMultisampleRenderTarget(be),R.updateRenderTargetMipmap(be),pe.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Be=0,At=B.length;Be<At;Be++){const pt=B[Be],Dt=pt.object,an=pt.geometry,_t=pt.material,ke=pt.group;if(_t.side===Ln&&Dt.layers.test(Y.layers)){const Yt=_t.side;_t.side=on,_t.needsUpdate=!0,jt(Dt,j,Y,an,_t,ke),_t.side=Yt,_t.needsUpdate=!0,$e=!0}}$e===!0&&(R.updateMultisampleRenderTarget(be),R.updateRenderTargetMipmap(be))}b.setRenderTarget(De),b.setClearColor(N,H),We!==void 0&&(Y.viewport=We),b.toneMapping=Ne}function Pt(E,B,j){const Y=B.isScene===!0?B.overrideMaterial:null;for(let V=0,be=E.length;V<be;V++){const Pe=E[V],De=Pe.object,Ne=Pe.geometry,We=Y===null?Pe.material:Y,$e=Pe.group;De.layers.test(j.layers)&&jt(De,B,j,Ne,We,$e)}}function jt(E,B,j,Y,V,be){E.onBeforeRender(b,B,j,Y,V,be),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(b,B,j,Y,E,be),V.transparent===!0&&V.side===Ln&&V.forceSinglePass===!1?(V.side=on,V.needsUpdate=!0,b.renderBufferDirect(j,B,Y,V,E,be),V.side=vi,V.needsUpdate=!0,b.renderBufferDirect(j,B,Y,V,E,be),V.side=Ln):b.renderBufferDirect(j,B,Y,V,E,be),E.onAfterRender(b,B,j,Y,V,be)}function ht(E,B,j){B.isScene!==!0&&(B=Qe);const Y=ge.get(E),V=m.state.lights,be=m.state.shadowsArray,Pe=V.state.version,De=Re.getParameters(E,V.state,be,B,j),Ne=Re.getProgramCacheKey(De);let We=Y.programs;Y.environment=E.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(E.isMeshStandardMaterial?X:S).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",te),We=new Map,Y.programs=We);let $e=We.get(Ne);if($e!==void 0){if(Y.currentProgram===$e&&Y.lightsStateVersion===Pe)return Kn(E,De),$e}else De.uniforms=Re.getUniforms(E),E.onBeforeCompile(De,b),$e=Re.acquireProgram(De,Ne),We.set(Ne,$e),Y.uniforms=De.uniforms;const Be=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=fe.uniform),Kn(E,De),Y.needsLights=ls(E),Y.lightsStateVersion=Pe,Y.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMap.value=V.state.directionalShadowMap,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotShadowMap.value=V.state.spotShadowMap,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMap.value=V.state.pointShadowMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=$e,Y.uniformsList=null,$e}function Un(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Jo.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Kn(E,B){const j=ge.get(E);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function ki(E,B,j,Y,V){B.isScene!==!0&&(B=Qe),R.resetTextureUnits();const be=B.fog,Pe=Y.isMeshStandardMaterial?B.environment:null,De=A===null?b.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:qt,Ne=(Y.isMeshStandardMaterial?X:S).get(Y.envMap||Pe),We=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,$e=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Be=!!j.morphAttributes.position,At=!!j.morphAttributes.normal,pt=!!j.morphAttributes.color;let Dt=Ni;Y.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Dt=b.toneMapping);const an=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_t=an!==void 0?an.length:0,ke=ge.get(Y),Yt=m.state.lights;if(Z===!0&&(he===!0||E!==F)){const k=E===F&&Y.id===P;fe.setState(Y,E,k)}let gt=!1;Y.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Yt.state.version||ke.outputColorSpace!==De||V.isBatchedMesh&&ke.batching===!1||!V.isBatchedMesh&&ke.batching===!0||V.isBatchedMesh&&ke.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&ke.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&ke.instancing===!1||!V.isInstancedMesh&&ke.instancing===!0||V.isSkinnedMesh&&ke.skinning===!1||!V.isSkinnedMesh&&ke.skinning===!0||V.isInstancedMesh&&ke.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ke.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ke.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ke.instancingMorph===!1&&V.morphTexture!==null||ke.envMap!==Ne||Y.fog===!0&&ke.fog!==be||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==fe.numPlanes||ke.numIntersection!==fe.numIntersection)||ke.vertexAlphas!==We||ke.vertexTangents!==$e||ke.morphTargets!==Be||ke.morphNormals!==At||ke.morphColors!==pt||ke.toneMapping!==Dt||ke.morphTargetsCount!==_t)&&(gt=!0):(gt=!0,ke.__version=Y.version);let Tn=ke.currentProgram;gt===!0&&(Tn=ht(Y,B,V));let Mi=!1,hn=!1,Zs=!1;const Ut=Tn.getUniforms(),Jn=ke.uniforms;if(ve.useProgram(Tn.program)&&(Mi=!0,hn=!0,Zs=!0),Y.id!==P&&(P=Y.id,hn=!0),Mi||F!==E){ce.reverseDepthBuffer?(Se.copy(E.projectionMatrix),Ig(Se),Lg(Se),Ut.setValue(I,"projectionMatrix",Se)):Ut.setValue(I,"projectionMatrix",E.projectionMatrix),Ut.setValue(I,"viewMatrix",E.matrixWorldInverse);const k=Ut.map.cameraPosition;k!==void 0&&k.setValue(I,Fe.setFromMatrixPosition(E.matrixWorld)),ce.logarithmicDepthBuffer&&Ut.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ut.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),F!==E&&(F=E,hn=!0,Zs=!0)}if(V.isSkinnedMesh){Ut.setOptional(I,V,"bindMatrix"),Ut.setOptional(I,V,"bindMatrixInverse");const k=V.skeleton;k&&(k.boneTexture===null&&k.computeBoneTexture(),Ut.setValue(I,"boneTexture",k.boneTexture,R))}V.isBatchedMesh&&(Ut.setOptional(I,V,"batchingTexture"),Ut.setValue(I,"batchingTexture",V._matricesTexture,R),Ut.setOptional(I,V,"batchingIdTexture"),Ut.setValue(I,"batchingIdTexture",V._indirectTexture,R),Ut.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&Ut.setValue(I,"batchingColorTexture",V._colorsTexture,R));const us=j.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0)&&qe.update(V,j,Tn),(hn||ke.receiveShadow!==V.receiveShadow)&&(ke.receiveShadow=V.receiveShadow,Ut.setValue(I,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Jn.envMap.value=Ne,Jn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(Jn.envMapIntensity.value=B.environmentIntensity),hn&&(Ut.setValue(I,"toneMappingExposure",b.toneMappingExposure),ke.needsLights&&zi(Jn,Zs),be&&Y.fog===!0&&xe.refreshFogUniforms(Jn,be),xe.refreshMaterialUniforms(Jn,Y,K,z,m.state.transmissionRenderTarget[E.id]),Jo.upload(I,Un(ke),Jn,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Jo.upload(I,Un(ke),Jn,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ut.setValue(I,"center",V.center),Ut.setValue(I,"modelViewMatrix",V.modelViewMatrix),Ut.setValue(I,"normalMatrix",V.normalMatrix),Ut.setValue(I,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const k=Y.uniformsGroups;for(let $=0,Te=k.length;$<Te;$++){const ye=k[$];U.update(ye,Tn),U.bind(ye,Tn)}}return Tn}function zi(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function ls(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,B,j){ge.get(E.texture).__webglTexture=B,ge.get(E.depthTexture).__webglTexture=j;const Y=ge.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const j=ge.get(E);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,j=0){A=E,C=B,w=j;let Y=!0,V=null,be=!1,Pe=!1;if(E){const Ne=ge.get(E);if(Ne.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(Ne.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Ne.__hasExternalTextures)R.rebindTextures(E,ge.get(E.texture).__webglTexture,ge.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Be=E.depthTexture;if(Ne.__boundDepthTexture!==Be){if(Be!==null&&ge.has(Be)&&(E.width!==Be.image.width||E.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const $e=ge.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray($e[B])?V=$e[B][j]:V=$e[B],be=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?V=ge.get(E).__webglMultisampledFramebuffer:Array.isArray($e)?V=$e[j]:V=$e,y.copy(E.viewport),M.copy(E.scissor),D=E.scissorTest}else y.copy(J).multiplyScalar(K).floor(),M.copy(me).multiplyScalar(K).floor(),D=Ke;if(ve.bindFramebuffer(I.FRAMEBUFFER,V)&&Y&&ve.drawBuffers(E,V),ve.viewport(y),ve.scissor(M),ve.setScissorTest(D),be){const Ne=ge.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ne.__webglTexture,j)}else if(Pe){const Ne=ge.get(E.texture),We=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ne.__webglTexture,j||0,We)}P=-1},this.readRenderTargetPixels=function(E,B,j,Y,V,be,Pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De){ve.bindFramebuffer(I.FRAMEBUFFER,De);try{const Ne=E.texture,We=Ne.format,$e=Ne.type;if(!ce.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Y&&j>=0&&j<=E.height-V&&I.readPixels(B,j,Y,V,Ye.convert(We),Ye.convert($e),be)}finally{const Ne=A!==null?ge.get(A).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,B,j,Y,V,be,Pe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De){const Ne=E.texture,We=Ne.format,$e=Ne.type;if(!ce.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-Y&&j>=0&&j<=E.height-V){ve.bindFramebuffer(I.FRAMEBUFFER,De);const Be=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Be),I.bufferData(I.PIXEL_PACK_BUFFER,be.byteLength,I.STREAM_READ),I.readPixels(B,j,Y,V,Ye.convert(We),Ye.convert($e),0);const At=A!==null?ge.get(A).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,At);const pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Pg(I,pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Be),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,be),I.deleteBuffer(Be),I.deleteSync(pt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,j=0){E.isTexture!==!0&&(Ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-j),V=Math.floor(E.image.width*Y),be=Math.floor(E.image.height*Y),Pe=B!==null?B.x:0,De=B!==null?B.y:0;R.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,Pe,De,V,be),ve.unbindTexture()},this.copyTextureToTexture=function(E,B,j=null,Y=null,V=0){E.isTexture!==!0&&(Ko("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],B=arguments[2],V=arguments[3]||0,j=null);let be,Pe,De,Ne,We,$e;j!==null?(be=j.max.x-j.min.x,Pe=j.max.y-j.min.y,De=j.min.x,Ne=j.min.y):(be=E.image.width,Pe=E.image.height,De=0,Ne=0),Y!==null?(We=Y.x,$e=Y.y):(We=0,$e=0);const Be=Ye.convert(B.format),At=Ye.convert(B.type);R.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const pt=I.getParameter(I.UNPACK_ROW_LENGTH),Dt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),an=I.getParameter(I.UNPACK_SKIP_PIXELS),_t=I.getParameter(I.UNPACK_SKIP_ROWS),ke=I.getParameter(I.UNPACK_SKIP_IMAGES),Yt=E.isCompressedTexture?E.mipmaps[V]:E.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Yt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Yt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,De),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,V,We,$e,be,Pe,Be,At,Yt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,V,We,$e,Yt.width,Yt.height,Be,Yt.data):I.texSubImage2D(I.TEXTURE_2D,V,We,$e,be,Pe,Be,At,Yt),I.pixelStorei(I.UNPACK_ROW_LENGTH,pt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Dt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,an),I.pixelStorei(I.UNPACK_SKIP_ROWS,_t),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke),V===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(E,B,j=null,Y=null,V=0){E.isTexture!==!0&&(Ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],B=arguments[3],V=arguments[4]||0);let be,Pe,De,Ne,We,$e,Be,At,pt;const Dt=E.isCompressedTexture?E.mipmaps[V]:E.image;j!==null?(be=j.max.x-j.min.x,Pe=j.max.y-j.min.y,De=j.max.z-j.min.z,Ne=j.min.x,We=j.min.y,$e=j.min.z):(be=Dt.width,Pe=Dt.height,De=Dt.depth,Ne=0,We=0,$e=0),Y!==null?(Be=Y.x,At=Y.y,pt=Y.z):(Be=0,At=0,pt=0);const an=Ye.convert(B.format),_t=Ye.convert(B.type);let ke;if(B.isData3DTexture)R.setTexture3D(B,0),ke=I.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)R.setTexture2DArray(B,0),ke=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const Yt=I.getParameter(I.UNPACK_ROW_LENGTH),gt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Tn=I.getParameter(I.UNPACK_SKIP_PIXELS),Mi=I.getParameter(I.UNPACK_SKIP_ROWS),hn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ne),I.pixelStorei(I.UNPACK_SKIP_ROWS,We),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$e),E.isDataTexture||E.isData3DTexture?I.texSubImage3D(ke,V,Be,At,pt,be,Pe,De,an,_t,Dt.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(ke,V,Be,At,pt,be,Pe,De,an,Dt.data):I.texSubImage3D(ke,V,Be,At,pt,be,Pe,De,an,_t,Dt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Yt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Tn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Mi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,hn),V===0&&B.generateMipmaps&&I.generateMipmap(ke),ve.unbindTexture()},this.initRenderTarget=function(E){ge.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),ve.unbindTexture()},this.resetState=function(){C=0,w=0,A=null,ve.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Zc?"display-p3":"srgb",t.unpackColorSpace=bt.workingColorSpace===Ga?"display-p3":"srgb"}}class nl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new oe(e),this.density=t}clone(){return new nl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class il{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new oe(e),this.near=t,this.far=n}clone(){return new il(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class La extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xa{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ra,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _n=new T;class ns{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ze(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ns(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sl extends $t{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let gr;const Qr=new T,vr=new T,br=new T,xr=new Q,$r=new Q,Op=new ze,yo=new T,ea=new T,Mo=new T,Rd=new Q,Zl=new Q,Cd=new Q;class oh extends mt{constructor(e=new sl){if(super(),this.isSprite=!0,this.type="Sprite",gr===void 0){gr=new je;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xa(t,5);gr.setIndex([0,1,2,0,2,3]),gr.setAttribute("position",new ns(n,3,0,!1)),gr.setAttribute("uv",new ns(n,2,3,!1))}this.geometry=gr,this.material=e,this.center=new Q(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vr.setFromMatrixScale(this.matrixWorld),Op.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),br.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vr.multiplyScalar(-br.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;So(yo.set(-.5,-.5,0),br,a,vr,i,s),So(ea.set(.5,-.5,0),br,a,vr,i,s),So(Mo.set(.5,.5,0),br,a,vr,i,s),Rd.set(0,0),Zl.set(1,0),Cd.set(1,1);let o=e.ray.intersectTriangle(yo,ea,Mo,!1,Qr);if(o===null&&(So(ea.set(-.5,.5,0),br,a,vr,i,s),Zl.set(0,1),o=e.ray.intersectTriangle(yo,Mo,ea,!1,Qr),o===null))return;const c=e.ray.origin.distanceTo(Qr);c<e.near||c>e.far||t.push({distance:c,point:Qr.clone(),uv:Sn.getInterpolation(Qr,yo,ea,Mo,Rd,Zl,Cd,new Q),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function So(r,e,t,n,i,s){xr.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?($r.x=s*xr.x-i*xr.y,$r.y=i*xr.x+s*xr.y):$r.copy(xr),r.copy(e),r.x+=$r.x,r.y+=$r.y,r.applyMatrix4(Op)}const wo=new T,Pd=new T;class Bp extends mt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){wo.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(wo);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){wo.setFromMatrixPosition(e.matrixWorld),Pd.setFromMatrixPosition(this.matrixWorld);const n=wo.distanceTo(Pd)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Id=new T,Ld=new ft,Dd=new ft,q_=new T,Nd=new ze,Ao=new T,Ql=new un,Ud=new ze,$l=new zr;class ch extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yu,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ao),this.boundingBox.expandByPoint(Ao)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new un),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ao),this.boundingSphere.expandByPoint(Ao)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ql.copy(this.boundingSphere),Ql.applyMatrix4(i),e.ray.intersectsSphere(Ql)!==!1&&(Ud.copy(i).invert(),$l.copy(e.ray).applyMatrix4(Ud),!(this.boundingBox!==null&&$l.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$l)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ap?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ld.fromBufferAttribute(i.attributes.skinIndex,e),Dd.fromBufferAttribute(i.attributes.skinWeight,e),Id.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Dd.getComponent(s);if(a!==0){const o=Ld.getComponent(s);Nd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(q_.copy(Id).applyMatrix4(Nd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class rl extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ni extends Nt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Zt,u=Zt,h,d){super(null,a,o,c,l,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fd=new ze,j_=new ze;class qa{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:j_;Fd.multiplyMatrices(o,t[s]),Fd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new qa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ni(t,e,e,vn,Dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new rl),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Vs extends Ze{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _r=new ze,Od=new ze,To=[],Bd=new ln,Y_=new ze,ta=new xt,na=new un;class lh extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Y_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),Bd.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(Bd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),na.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(n),e.ray.intersectsSphere(na)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,_r),Od.multiplyMatrices(n,_r),ta.matrixWorld=Od,ta.raycast(e,To);for(let a=0,o=To.length;a<o;a++){const c=To[a];c.instanceId=s,c.object=this,t.push(c)}To.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ni(new Float32Array(i*this.count),i,this.count,jc,Dn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function K_(r,e){return r.z-e.z}function J_(r,e){return e.z-r.z}class Z_{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const i=this.pool,s=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const a=i[this.index];s.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}}const Yi=new ze,eu=new ze,Q_=new ze,$_=new oe(1,1,1),kd=new ze,tu=new Wa,Eo=new ln,bs=new un,ia=new T,zd=new T,ey=new T,nu=new Z_,pn=new xt,Ro=[];function ty(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,r.getComponent(s,a))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class kp extends xt{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,i){super(new je,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new ni(t,e,e,vn,Dn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new ni(t,e,e,Ha,Fi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new ni(t,e,e,vn,Dn);n.colorSpace=bt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:o,itemSize:c,normalized:l}=a,u=new o.constructor(n*c),h=new Ze(u,c,l);t.setAttribute(s,h)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Ze(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Yi),this.getBoundingBoxAt(s,Eo).applyMatrix4(Yi),e.union(Eo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Yi),this.getBoundingSphereAt(s,bs).applyMatrix4(Yi),e.union(bs)}}addInstance(e){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(i=this._availableInstanceIds.pop(),this._drawInfo[i]=n):(i=this._drawInfo.length,this._drawInfo.push(n));const s=this._matricesTexture,a=s.image.data;Q_.toArray(a,i*16),s.needsUpdate=!0;const o=this._colorsTexture;return o&&($_.toArray(o.image.data,i*4),o.needsUpdate=!0),i}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const a=this._reservedRanges,o=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(s=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const l=e.getIndex(),u=l!==null;if(u&&(n===-1?i.indexCount=l.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const h=this._geometryCount;return this._geometryCount++,a.push(i),o.push({start:u?i.indexStart:i.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new ln,sphereInitialized:!1,sphere:new un}),this.setGeometryAt(h,e),h}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(i&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=o.vertexStart,l=o.vertexCount;for(const f in n.attributes){const g=t.getAttribute(f),v=n.getAttribute(f);ty(g,v,c);const m=g.itemSize;for(let p=g.count,x=l;p<x;p++){const b=c+p;for(let _=0;_<m;_++)v.setComponent(b,_,0)}v.needsUpdate=!0,v.addUpdateRange(c*m,l*m)}if(i){const f=o.indexStart;for(let g=0;g<a.count;g++)s.setX(f+g,c+a.getX(g));for(let g=a.count,v=o.indexCount;g<v;g++)s.setX(f+g,c);s.needsUpdate=!0,s.addUpdateRange(f,o.indexCount)}const u=this._bounds[e];t.boundingBox!==null?(u.box.copy(t.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,t.boundingSphere!==null?(u.sphere.copy(t.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const h=this._drawRanges[e],d=t.getAttribute("position");return h.count=i?a.count:d.count,this._visibilityChanged=!0,e}deleteInstance(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.box,s=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const a=s.index,o=s.attributes.position,c=this._drawRanges[e];for(let l=c.start,u=c.start+c.count;l<u;l++){let h=l;a&&(h=a.getX(h)),i.expandByPoint(ia.fromBufferAttribute(o,h))}n.boxInitialized=!0}return t.copy(i),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.sphere,s=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(e,Eo),Eo.getCenter(i.center);const a=s.index,o=s.attributes.position,c=this._drawRanges[e];let l=0;for(let u=c.start,h=c.start+c.count;u<h;u++){let d=u;a&&(d=a.getX(d)),ia.fromBufferAttribute(o,d),l=Math.max(l,i.center.distanceToSquared(ia))}i.radius=Math.sqrt(l),n.sphereInitialized=!0}return t.copy(i),t}setMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,s=this._drawInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._drawInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||t<0||t>=this._geometryCount?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._drawRanges[e];return t.start=n.start,t.count=n.count,t}raycast(e,t){const n=this._drawInfo,i=this._drawRanges,s=this.matrixWorld,a=this.geometry;pn.material=this.material,pn.geometry.index=a.index,pn.geometry.attributes=a.attributes,pn.geometry.boundingBox===null&&(pn.geometry.boundingBox=new ln),pn.geometry.boundingSphere===null&&(pn.geometry.boundingSphere=new un);for(let o=0,c=n.length;o<c;o++){if(!n[o].visible||!n[o].active)continue;const l=n[o].geometryIndex,u=i[l];pn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,pn.matrixWorld).premultiply(s),this.getBoundingBoxAt(l,pn.geometry.boundingBox),this.getBoundingSphereAt(l,pn.geometry.boundingSphere),pn.raycast(e,Ro);for(let h=0,d=Ro.length;h<d;h++){const f=Ro[h];f.object=this,f.batchId=o,t.push(f)}Ro.length=0}pn.material=null,pn.geometry.index=null,pn.geometry.attributes={},pn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,c=this._drawInfo,l=this._multiDrawStarts,u=this._multiDrawCounts,h=this._drawRanges,d=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data;d&&(kd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),tu.setFromProjectionMatrix(kd,e.coordinateSystem));let v=0;if(this.sortObjects){eu.copy(this.matrixWorld).invert(),ia.setFromMatrixPosition(n.matrixWorld).applyMatrix4(eu),zd.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(eu);for(let x=0,b=c.length;x<b;x++)if(c[x].visible&&c[x].active){const _=c[x].geometryIndex;this.getMatrixAt(x,Yi),this.getBoundingSphereAt(_,bs).applyMatrix4(Yi);let C=!1;if(d&&(C=!tu.intersectsSphere(bs)),!C){const w=ey.subVectors(bs.center,ia).dot(zd);nu.push(h[_],w,x)}}const m=nu.list,p=this.customSort;p===null?m.sort(s.transparent?J_:K_):p.call(this,m,n);for(let x=0,b=m.length;x<b;x++){const _=m[x];l[v]=_.start*o,u[v]=_.count,g[v]=_.index,v++}nu.reset()}else for(let m=0,p=c.length;m<p;m++)if(c[m].visible&&c[m].active){const x=c[m].geometryIndex;let b=!1;if(d&&(this.getMatrixAt(m,Yi),this.getBoundingSphereAt(x,bs).applyMatrix4(Yi),b=!tu.intersectsSphere(bs)),!b){const _=h[x];l[v]=_.start*o,u[v]=_.count,g[v]=m,v++}}f.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,a){this.onBeforeRender(e,null,i,s,a)}}class bn extends $t{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fc=new T,Oc=new T,Hd=new ze,sa=new zr,Co=new un,iu=new T,Gd=new T;class Bi extends mt{constructor(e=new je,t=new bn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Fc.fromBufferAttribute(t,i-1),Oc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fc.distanceTo(Oc);e.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(i),Co.radius+=s,e.ray.intersectsSphere(Co)===!1)return;Hd.copy(i).invert(),sa.copy(e.ray).applyMatrix4(Hd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=u.getX(v),x=u.getX(v+1),b=Po(this,e,sa,c,p,x);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=Po(this,e,sa,c,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=Po(this,e,sa,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Po(this,e,sa,c,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Po(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(Fc.fromBufferAttribute(a,i),Oc.fromBufferAttribute(a,s),t.distanceSqToSegment(Fc,Oc,iu,Gd)>n)return;iu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(iu);if(!(c<e.near||c>e.far))return{distance:c,point:Gd.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Vd=new T,Wd=new T;class jn extends Bi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Vd.fromBufferAttribute(t,i),Wd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vd.distanceTo(Wd);e.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uh extends Bi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class al extends $t{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xd=new ze,Eu=new zr,Io=new un,Lo=new T;class _i extends mt{constructor(e=new je,t=new al){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(i),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;Xd.copy(i).invert(),Eu.copy(e.ray).applyMatrix4(Xd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);Lo.fromBufferAttribute(h,m),qd(Lo,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,v=f;g<v;g++)Lo.fromBufferAttribute(h,g),qd(Lo,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function qd(r,e,t,n,i,s,a){const o=Eu.distanceSqToPoint(r);if(o<t){const c=new T;Eu.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ny extends Nt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Ct,this.magFilter=s!==void 0?s:Ct,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class iy extends Nt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Zt,this.minFilter=Zt,this.generateMipmaps=!1,this.needsUpdate=!0}}class ol extends Nt{constructor(e,t,n,i,s,a,o,c,l,u,h,d){super(null,a,o,c,l,u,i,s,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class sy extends ol{constructor(e,t,n,i,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Hn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ry extends ol{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Ui),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class hh extends Nt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new Q:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new T,i=[],s=[],a=[],o=new T,c=new ze;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new T)}s[0]=new T,a[0]=new T;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(kt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(kt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class cl extends si{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Q){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class zp extends cl{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function dh(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let d=(a-s)/l-(o-s)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Do=new T,su=new dh,ru=new dh,au=new dh;class Hp extends si{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%s]:(Do.subVectors(i[0],i[1]).add(i[0]),l=Do);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Do.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Do),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),su.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,v,m),ru.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,v,m),au.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(su.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),ru.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),au.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(su.calc(c),ru.calc(c),au.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jd(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,c=r*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*r+t}function ay(r,e){const t=1-r;return t*t*e}function oy(r,e){return 2*(1-r)*r*e}function cy(r,e){return r*r*e}function _a(r,e,t,n){return ay(r,e)+oy(r,t)+cy(r,n)}function ly(r,e){const t=1-r;return t*t*t*e}function uy(r,e){const t=1-r;return 3*t*t*r*e}function hy(r,e){return 3*(1-r)*r*r*e}function dy(r,e){return r*r*r*e}function ya(r,e,t,n,i){return ly(r,e)+uy(r,t)+hy(r,n)+dy(r,i)}class fh extends si{constructor(e=new Q,t=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Q){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ya(e,i.x,s.x,a.x,o.x),ya(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gp extends si{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ya(e,i.x,s.x,a.x,o.x),ya(e,i.y,s.y,a.y,o.y),ya(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ph extends si{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vp extends si{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mh extends si{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(_a(e,i.x,s.x,a.x),_a(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gh extends si{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(_a(e,i.x,s.x,a.x),_a(e,i.y,s.y,a.y),_a(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vh extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(jd(o,c.x,l.x,u.x,h.x),jd(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Q().fromArray(i))}return this}}var Bc=Object.freeze({__proto__:null,ArcCurve:zp,CatmullRomCurve3:Hp,CubicBezierCurve:fh,CubicBezierCurve3:Gp,EllipseCurve:cl,LineCurve:ph,LineCurve3:Vp,QuadraticBezierCurve:mh,QuadraticBezierCurve3:gh,SplineCurve:vh});class Wp extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Bc[i.type]().fromJSON(i))}return this}}class Da extends Wp{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ph(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new mh(this.currentPoint.clone(),new Q(e,t),new Q(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new fh(this.currentPoint.clone(),new Q(e,t),new Q(n,i),new Q(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new vh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){const l=new cl(e,t,n,i,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ja extends je{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=kt(i,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],u=1/t,h=new T,d=new Q,f=new T,g=new T,v=new T;let m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let x=0;x<=t;x++){const b=n+x*u*i,_=Math.sin(b),C=Math.cos(b);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*_,h.y=e[w].y,h.z=e[w].x*C,a.push(h.x,h.y,h.z),d.x=x/t,d.y=w/(e.length-1),o.push(d.x,d.y);const A=c[3*w+0]*_,P=c[3*w+1],F=c[3*w+0]*C;l.push(A,P,F)}}for(let x=0;x<t;x++)for(let b=0;b<e.length-1;b++){const _=b+x*e.length,C=_,w=_+e.length,A=_+e.length+1,P=_+1;s.push(C,w,P),s.push(A,P,w)}this.setIndex(s),this.setAttribute("position",new Ie(a,3)),this.setAttribute("uv",new Ie(o,2)),this.setAttribute("normal",new Ie(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.points,e.segments,e.phiStart,e.phiLength)}}class ll extends ja{constructor(e=1,t=1,n=4,i=8){const s=new Da;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new ll(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ya extends je{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new T,u=new Q;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(o,3)),this.setAttribute("uv",new Ie(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class as extends je{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Ie(h,3)),this.setAttribute("normal",new Ie(d,3)),this.setAttribute("uv",new Ie(f,2));function x(){const _=new T,C=new T;let w=0;const A=(t-e)/n;for(let P=0;P<=s;P++){const F=[],y=P/s,M=y*(t-e)+e;for(let D=0;D<=i;D++){const N=D/i,H=N*c+o,W=Math.sin(H),z=Math.cos(H);C.x=M*W,C.y=-y*n+m,C.z=M*z,h.push(C.x,C.y,C.z),_.set(W,A,z).normalize(),d.push(_.x,_.y,_.z),f.push(N,1-y),F.push(g++)}v.push(F)}for(let P=0;P<i;P++)for(let F=0;F<s;F++){const y=v[F][P],M=v[F+1][P],D=v[F+1][P+1],N=v[F][P+1];e>0&&(u.push(y,M,N),w+=3),t>0&&(u.push(M,D,N),w+=3)}l.addGroup(p,w,0),p+=w}function b(_){const C=g,w=new Q,A=new T;let P=0;const F=_===!0?e:t,y=_===!0?1:-1;for(let D=1;D<=i;D++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const M=g;for(let D=0;D<=i;D++){const H=D/i*c+o,W=Math.cos(H),z=Math.sin(H);A.x=F*z,A.y=m*y,A.z=F*W,h.push(A.x,A.y,A.z),d.push(0,y,0),w.x=W*.5+.5,w.y=z*.5*y+.5,f.push(w.x,w.y),g++}for(let D=0;D<i;D++){const N=C+D,H=M+D;_===!0?u.push(H,H+1,N):u.push(H+1,H,N),P+=3}l.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ul extends as{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ul(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class os extends je{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),l(n),u(),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(s.slice(),3)),this.setAttribute("uv",new Ie(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const b=new T,_=new T,C=new T;for(let w=0;w<t.length;w+=3)f(t[w+0],b),f(t[w+1],_),f(t[w+2],C),c(b,_,C,x)}function c(x,b,_,C){const w=C+1,A=[];for(let P=0;P<=w;P++){A[P]=[];const F=x.clone().lerp(_,P/w),y=b.clone().lerp(_,P/w),M=w-P;for(let D=0;D<=M;D++)D===0&&P===w?A[P][D]=F:A[P][D]=F.clone().lerp(y,D/M)}for(let P=0;P<w;P++)for(let F=0;F<2*(w-P)-1;F++){const y=Math.floor(F/2);F%2===0?(d(A[P][y+1]),d(A[P+1][y]),d(A[P][y])):(d(A[P][y+1]),d(A[P+1][y+1]),d(A[P+1][y]))}}function l(x){const b=new T;for(let _=0;_<s.length;_+=3)b.x=s[_+0],b.y=s[_+1],b.z=s[_+2],b.normalize().multiplyScalar(x),s[_+0]=b.x,s[_+1]=b.y,s[_+2]=b.z}function u(){const x=new T;for(let b=0;b<s.length;b+=3){x.x=s[b+0],x.y=s[b+1],x.z=s[b+2];const _=m(x)/2/Math.PI+.5,C=p(x)/Math.PI+.5;a.push(_,1-C)}g(),h()}function h(){for(let x=0;x<a.length;x+=6){const b=a[x+0],_=a[x+2],C=a[x+4],w=Math.max(b,_,C),A=Math.min(b,_,C);w>.9&&A<.1&&(b<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),C<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,b){const _=x*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){const x=new T,b=new T,_=new T,C=new T,w=new Q,A=new Q,P=new Q;for(let F=0,y=0;F<s.length;F+=9,y+=6){x.set(s[F+0],s[F+1],s[F+2]),b.set(s[F+3],s[F+4],s[F+5]),_.set(s[F+6],s[F+7],s[F+8]),w.set(a[y+0],a[y+1]),A.set(a[y+2],a[y+3]),P.set(a[y+4],a[y+5]),C.copy(x).add(b).add(_).divideScalar(3);const M=m(C);v(w,y+0,x,M),v(A,y+2,b,M),v(P,y+4,_,M)}}function v(x,b,_,C){C<0&&x.x===1&&(a[b]=x.x-1),_.x===0&&_.z===0&&(a[b]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.vertices,e.indices,e.radius,e.details)}}class hl extends os{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hl(e.radius,e.detail)}}const No=new T,Uo=new T,ou=new T,Fo=new Sn;class Xp extends je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Os*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:p}=Fo;if(v.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),Fo.getNormal(ou),h[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const b=(x+1)%3,_=h[x],C=h[b],w=Fo[u[x]],A=Fo[u[b]],P=`${_}_${C}`,F=`${C}_${_}`;F in d&&d[F]?(ou.dot(d[F].normal)<=s&&(f.push(w.x,w.y,w.z),f.push(A.x,A.y,A.z)),d[F]=null):P in d||(d[P]={index0:l[x],index1:l[b],normal:ou.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];No.fromBufferAttribute(o,v),Uo.fromBufferAttribute(o,m),f.push(No.x,No.y,No.z),f.push(Uo.x,Uo.y,Uo.z)}this.setAttribute("position",new Ie(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Bs extends Da{constructor(e){super(e),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Da().fromJSON(i))}return this}}const fy={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=qp(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,u,h,d,f;if(n&&(s=by(r,e,s,t)),r.length>80*t){o=l=r[0],c=u=r[1];for(let g=t;g<i;g+=t)h=r[g],d=r[g+1],h<o&&(o=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-o,u-c),f=f!==0?32767/f:0}return Na(s,a,t,o,c,f,0),a}};function qp(r,e,t,n,i){let s,a;if(i===Cy(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Yd(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Yd(s,r[s],r[s+1],a);return a&&dl(a,a.next)&&(Fa(a),a=a.next),a}function Ws(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(dl(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Fa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Na(r,e,t,n,i,s,a){if(!r)return;!a&&s&&Sy(r,n,i,s);let o=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?my(r,n,i,s):py(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Fa(r),r=l.next,o=l.next;continue}if(r=l,r===o){a?a===1?(r=gy(Ws(r),e,t),Na(r,e,t,n,i,s,2)):a===2&&vy(r,e,t,n,i,s):Na(Ws(r),e,t,n,i,s,1);break}}}function py(r){const e=r.prev,t=r,n=r.next;if(Ot(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=i<s?i<a?i:a:s<a?s:a,h=o<c?o<l?o:l:c<l?c:l,d=i>s?i>a?i:a:s>a?s:a,f=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&wr(i,o,s,c,a,l,g.x,g.y)&&Ot(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function my(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Ot(i,s,a)>=0)return!1;const o=i.x,c=s.x,l=a.x,u=i.y,h=s.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,v=o>c?o>l?o:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=Ru(f,g,e,t,n),x=Ru(v,m,e,t,n);let b=r.prevZ,_=r.nextZ;for(;b&&b.z>=p&&_&&_.z<=x;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==i&&b!==a&&wr(o,u,c,h,l,d,b.x,b.y)&&Ot(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&wr(o,u,c,h,l,d,_.x,_.y)&&Ot(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==i&&b!==a&&wr(o,u,c,h,l,d,b.x,b.y)&&Ot(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&wr(o,u,c,h,l,d,_.x,_.y)&&Ot(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function gy(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!dl(i,s)&&jp(i,n,n.next,s)&&Ua(i,s)&&Ua(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Fa(n),Fa(n.next),n=r=s),n=n.next}while(n!==r);return Ws(n)}function vy(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ty(a,o)){let c=Yp(a,o);a=Ws(a,a.next),c=Ws(c,c.next),Na(a,e,t,n,i,s,0),Na(c,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function by(r,e,t,n){const i=[];let s,a,o,c,l;for(s=0,a=e.length;s<a;s++)o=e[s]*n,c=s<a-1?e[s+1]*n:r.length,l=qp(r,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Ay(l));for(i.sort(xy),s=0;s<i.length;s++)t=_y(i[s],t);return t}function xy(r,e){return r.x-e.x}function _y(r,e){const t=yy(r,e);if(!t)return e;const n=Yp(t,r);return Ws(n,n.next),Ws(t,t.next)}function yy(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,l=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&wr(a<l?s:n,a,c,l,a<l?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),Ua(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&My(i,t)))&&(i=t,u=h)),t=t.next;while(t!==o);return i}function My(r,e){return Ot(r.prev,r,e.prev)<0&&Ot(e.next,r,r.next)<0}function Sy(r,e,t,n){let i=r;do i.z===0&&(i.z=Ru(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,wy(i)}function wy(r){let e,t,n,i,s,a,o,c,l=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(a>1);return r}function Ru(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Ay(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function wr(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Ty(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Ey(r,e)&&(Ua(r,e)&&Ua(e,r)&&Ry(r,e)&&(Ot(r.prev,r,e.prev)||Ot(r,e.prev,e))||dl(r,e)&&Ot(r.prev,r,r.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function dl(r,e){return r.x===e.x&&r.y===e.y}function jp(r,e,t,n){const i=Bo(Ot(r,e,t)),s=Bo(Ot(r,e,n)),a=Bo(Ot(t,n,r)),o=Bo(Ot(t,n,e));return!!(i!==s&&a!==o||i===0&&Oo(r,t,e)||s===0&&Oo(r,n,e)||a===0&&Oo(t,r,n)||o===0&&Oo(t,e,n))}function Oo(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Bo(r){return r>0?1:r<0?-1:0}function Ey(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&jp(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ua(r,e){return Ot(r.prev,r,r.next)<0?Ot(r,e,r.next)>=0&&Ot(r,r.prev,e)>=0:Ot(r,e,r.prev)<0||Ot(r,r.next,e)<0}function Ry(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Yp(r,e){const t=new Cu(r.i,r.x,r.y),n=new Cu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Yd(r,e,t,n){const i=new Cu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Fa(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Cu(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Cy(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class gi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return gi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Kd(e),Jd(n,e);let a=e.length;t.forEach(Kd);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Jd(n,t[c]);const o=fy.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Kd(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Jd(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class fl extends je{constructor(e=new Bs([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Ie(i,3)),this.setAttribute("uv",new Ie(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Py;let b,_=!1,C,w,A,P;p&&(b=p.getSpacedPoints(u),_=!0,d=!1,C=p.computeFrenetFrames(u,!1),w=new T,A=new T,P=new T),d||(m=0,f=0,g=0,v=0);const F=o.extractPoints(l);let y=F.shape;const M=F.holes;if(!gi.isClockWise(y)){y=y.reverse();for(let ae=0,I=M.length;ae<I;ae++){const ue=M[ae];gi.isClockWise(ue)&&(M[ae]=ue.reverse())}}const N=gi.triangulateShape(y,M),H=y;for(let ae=0,I=M.length;ae<I;ae++){const ue=M[ae];y=y.concat(ue)}function W(ae,I,ue){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(I,ue)}const z=y.length,K=N.length;function q(ae,I,ue){let pe,ce,ve;const Le=ae.x-I.x,ge=ae.y-I.y,R=ue.x-ae.x,S=ue.y-ae.y,X=Le*Le+ge*ge,ne=Le*S-ge*R;if(Math.abs(ne)>Number.EPSILON){const le=Math.sqrt(X),ee=Math.sqrt(R*R+S*S),Re=I.x-ge/le,xe=I.y+Le/le,Ce=ue.x-S/ee,tt=ue.y+R/ee,fe=((Ce-Re)*S-(tt-xe)*R)/(Le*S-ge*R);pe=Re+Le*fe-ae.x,ce=xe+ge*fe-ae.y;const Ae=pe*pe+ce*ce;if(Ae<=2)return new Q(pe,ce);ve=Math.sqrt(Ae/2)}else{let le=!1;Le>Number.EPSILON?R>Number.EPSILON&&(le=!0):Le<-Number.EPSILON?R<-Number.EPSILON&&(le=!0):Math.sign(ge)===Math.sign(S)&&(le=!0),le?(pe=-ge,ce=Le,ve=Math.sqrt(X)):(pe=Le,ce=ge,ve=Math.sqrt(X/2))}return new Q(pe/ve,ce/ve)}const de=[];for(let ae=0,I=H.length,ue=I-1,pe=ae+1;ae<I;ae++,ue++,pe++)ue===I&&(ue=0),pe===I&&(pe=0),de[ae]=q(H[ae],H[ue],H[pe]);const J=[];let me,Ke=de.concat();for(let ae=0,I=M.length;ae<I;ae++){const ue=M[ae];me=[];for(let pe=0,ce=ue.length,ve=ce-1,Le=pe+1;pe<ce;pe++,ve++,Le++)ve===ce&&(ve=0),Le===ce&&(Le=0),me[pe]=q(ue[pe],ue[ve],ue[Le]);J.push(me),Ke=Ke.concat(me)}for(let ae=0;ae<m;ae++){const I=ae/m,ue=f*Math.cos(I*Math.PI/2),pe=g*Math.sin(I*Math.PI/2)+v;for(let ce=0,ve=H.length;ce<ve;ce++){const Le=W(H[ce],de[ce],pe);_e(Le.x,Le.y,-ue)}for(let ce=0,ve=M.length;ce<ve;ce++){const Le=M[ce];me=J[ce];for(let ge=0,R=Le.length;ge<R;ge++){const S=W(Le[ge],me[ge],pe);_e(S.x,S.y,-ue)}}}const et=g+v;for(let ae=0;ae<z;ae++){const I=d?W(y[ae],Ke[ae],et):y[ae];_?(A.copy(C.normals[0]).multiplyScalar(I.x),w.copy(C.binormals[0]).multiplyScalar(I.y),P.copy(b[0]).add(A).add(w),_e(P.x,P.y,P.z)):_e(I.x,I.y,0)}for(let ae=1;ae<=u;ae++)for(let I=0;I<z;I++){const ue=d?W(y[I],Ke[I],et):y[I];_?(A.copy(C.normals[ae]).multiplyScalar(ue.x),w.copy(C.binormals[ae]).multiplyScalar(ue.y),P.copy(b[ae]).add(A).add(w),_e(P.x,P.y,P.z)):_e(ue.x,ue.y,h/u*ae)}for(let ae=m-1;ae>=0;ae--){const I=ae/m,ue=f*Math.cos(I*Math.PI/2),pe=g*Math.sin(I*Math.PI/2)+v;for(let ce=0,ve=H.length;ce<ve;ce++){const Le=W(H[ce],de[ce],pe);_e(Le.x,Le.y,h+ue)}for(let ce=0,ve=M.length;ce<ve;ce++){const Le=M[ce];me=J[ce];for(let ge=0,R=Le.length;ge<R;ge++){const S=W(Le[ge],me[ge],pe);_?_e(S.x,S.y+b[u-1].y,b[u-1].x+ue):_e(S.x,S.y,h+ue)}}}Z(),he();function Z(){const ae=i.length/3;if(d){let I=0,ue=z*I;for(let pe=0;pe<K;pe++){const ce=N[pe];Fe(ce[2]+ue,ce[1]+ue,ce[0]+ue)}I=u+m*2,ue=z*I;for(let pe=0;pe<K;pe++){const ce=N[pe];Fe(ce[0]+ue,ce[1]+ue,ce[2]+ue)}}else{for(let I=0;I<K;I++){const ue=N[I];Fe(ue[2],ue[1],ue[0])}for(let I=0;I<K;I++){const ue=N[I];Fe(ue[0]+z*u,ue[1]+z*u,ue[2]+z*u)}}n.addGroup(ae,i.length/3-ae,0)}function he(){const ae=i.length/3;let I=0;Se(H,I),I+=H.length;for(let ue=0,pe=M.length;ue<pe;ue++){const ce=M[ue];Se(ce,I),I+=ce.length}n.addGroup(ae,i.length/3-ae,1)}function Se(ae,I){let ue=ae.length;for(;--ue>=0;){const pe=ue;let ce=ue-1;ce<0&&(ce=ae.length-1);for(let ve=0,Le=u+m*2;ve<Le;ve++){const ge=z*ve,R=z*(ve+1),S=I+pe+ge,X=I+ce+ge,ne=I+ce+R,le=I+pe+R;He(S,X,ne,le)}}}function _e(ae,I,ue){c.push(ae),c.push(I),c.push(ue)}function Fe(ae,I,ue){Qe(ae),Qe(I),Qe(ue);const pe=i.length/3,ce=x.generateTopUV(n,i,pe-3,pe-2,pe-1);Je(ce[0]),Je(ce[1]),Je(ce[2])}function He(ae,I,ue,pe){Qe(ae),Qe(I),Qe(pe),Qe(I),Qe(ue),Qe(pe);const ce=i.length/3,ve=x.generateSideWallUV(n,i,ce-6,ce-3,ce-2,ce-1);Je(ve[0]),Je(ve[1]),Je(ve[3]),Je(ve[1]),Je(ve[2]),Je(ve[3])}function Qe(ae){i.push(c[ae*3+0]),i.push(c[ae*3+1]),i.push(c[ae*3+2])}function Je(ae){s.push(ae.x),s.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Iy(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Bc[i.type]().fromJSON(i)),new fl(n,e.options)}}const Py={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new Q(s,a),new Q(o,c),new Q(l,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],v=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new Q(a,1-c),new Q(l,1-h),new Q(d,1-g),new Q(v,1-p)]:[new Q(o,1-c),new Q(u,1-h),new Q(f,1-g),new Q(m,1-p)]}};function Iy(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class pl extends os{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pl(e.radius,e.detail)}}class Ka extends os{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ka(e.radius,e.detail)}}class Ja extends je{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],u=[];let h=e;const d=(t-e)/i,f=new T,g=new Q;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const x=p+m,b=x,_=x+n+1,C=x+n+2,w=x+1;o.push(b,_,w),o.push(_,C,w)}}this.setIndex(o),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ml extends je{constructor(e=new Bs([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ie(i,3)),this.setAttribute("normal",new Ie(s,3)),this.setAttribute("uv",new Ie(a,2));function l(u){const h=i.length/3,d=u.extractPoints(t);let f=d.shape;const g=d.holes;gi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const x=g[m];gi.isClockWise(x)===!0&&(g[m]=x.reverse())}const v=gi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const x=g[m];f=f.concat(x)}for(let m=0,p=f.length;m<p;m++){const x=f[m];i.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let m=0,p=v.length;m<p;m++){const x=v[m],b=x[0]+h,_=x[1]+h,C=x[2]+h;n.push(b,_,C),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ly(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new ml(n,e.curveSegments)}}function Ly(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class is extends je{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new T,d=new T,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],b=p/n;let _=0;p===0&&a===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){const w=C/t;h.x=-e*Math.cos(i+w*s)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(i+w*s)*Math.sin(a+b*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(w+_,1-b),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const b=u[p][x+1],_=u[p][x],C=u[p+1][x],w=u[p+1][x+1];(p!==0||a>0)&&f.push(b,_,w),(p!==n-1||c<Math.PI)&&f.push(_,C,w)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(v,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gl extends os{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gl(e.radius,e.detail)}}class vl extends je{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],u=new T,h=new T,d=new T;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*s,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;a.push(v,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class bl extends je{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],l=[],u=[],h=new T,d=new T,f=new T,g=new T,v=new T,m=new T,p=new T;for(let b=0;b<=n;++b){const _=b/n*s*Math.PI*2;x(_,s,a,e,f),x(_+.01,s,a,e,g),m.subVectors(g,f),p.addVectors(g,f),v.crossVectors(m,p),p.crossVectors(v,m),v.normalize(),p.normalize();for(let C=0;C<=i;++C){const w=C/i*Math.PI*2,A=-t*Math.cos(w),P=t*Math.sin(w);h.x=f.x+(A*p.x+P*v.x),h.y=f.y+(A*p.y+P*v.y),h.z=f.z+(A*p.z+P*v.z),c.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),u.push(b/n),u.push(C/i)}}for(let b=1;b<=n;b++)for(let _=1;_<=i;_++){const C=(i+1)*(b-1)+(_-1),w=(i+1)*b+(_-1),A=(i+1)*b+_,P=(i+1)*(b-1)+_;o.push(C,w,P),o.push(w,A,P)}this.setIndex(o),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(u,2));function x(b,_,C,w,A){const P=Math.cos(b),F=Math.sin(b),y=C/_*b,M=Math.cos(y);A.x=w*(2+M)*.5*P,A.y=w*(2+M)*F*.5,A.z=w*Math.sin(y)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class xl extends je{constructor(e=new gh(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new T,c=new T,l=new Q;let u=new T;const h=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Ie(h,3)),this.setAttribute("normal",new Ie(d,3)),this.setAttribute("uv",new Ie(f,2));function v(){for(let b=0;b<t;b++)m(b);m(s===!1?t:0),x(),p()}function m(b){u=e.getPointAt(b/t,u);const _=a.normals[b],C=a.binormals[b];for(let w=0;w<=i;w++){const A=w/i*Math.PI*2,P=Math.sin(A),F=-Math.cos(A);c.x=F*_.x+P*C.x,c.y=F*_.y+P*C.y,c.z=F*_.z+P*C.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=t;b++)for(let _=1;_<=i;_++){const C=(i+1)*(b-1)+(_-1),w=(i+1)*b+(_-1),A=(i+1)*b+_,P=(i+1)*(b-1)+_;g.push(C,w,P),g.push(w,A,P)}}function x(){for(let b=0;b<=t;b++)for(let _=0;_<=i;_++)l.x=b/t,l.y=_/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new xl(new Bc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Kp extends je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new T,s=new T;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],d=h.start,f=h.count;for(let g=d,v=d+f;g<v;g+=3)for(let m=0;m<3;m++){const p=o.getX(g+m),x=o.getX(g+(m+1)%3);i.fromBufferAttribute(a,p),s.fromBufferAttribute(a,x),Zd(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const u=3*o+l,h=3*o+(l+1)%3;i.fromBufferAttribute(a,u),s.fromBufferAttribute(a,h),Zd(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ie(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Zd(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Qd=Object.freeze({__proto__:null,BoxGeometry:rs,CapsuleGeometry:ll,CircleGeometry:Ya,ConeGeometry:ul,CylinderGeometry:as,DodecahedronGeometry:hl,EdgesGeometry:Xp,ExtrudeGeometry:fl,IcosahedronGeometry:pl,LatheGeometry:ja,OctahedronGeometry:Ka,PlaneGeometry:Oi,PolyhedronGeometry:os,RingGeometry:Ja,ShapeGeometry:ml,SphereGeometry:is,TetrahedronGeometry:gl,TorusGeometry:vl,TorusKnotGeometry:bl,TubeGeometry:xl,WireframeGeometry:Kp});class Jp extends $t{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new oe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Zp extends Mt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gr extends $t{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yn extends Gr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Qp extends $t{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new oe(16777215),this.specular=new oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $p extends $t{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new oe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class em extends $t{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class tm extends $t{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nm extends $t{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new oe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class im extends bn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Us(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function sm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function rm(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Pu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function bh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function Dy(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],u=l.getValueSize(),h=[],d=[];for(let f=0;f<l.times.length;++f){const g=l.times[f]*i;if(!(g<t||g>=n)){h.push(l.times[f]);for(let v=0;v<u;++v)d.push(l.values[f*u+v])}}h.length!==0&&(l.times=Us(h,l.times.constructor),l.values=Us(d,l.values.constructor),a.push(l))}s.tracks=a;let o=1/0;for(let c=0;c<s.tracks.length;++c)o>s.tracks[c].times[0]&&(o=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*o);return s.resetDuration(),s}function Ny(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const l=r.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const g=o.times.length-1;let v;if(s<=o.times[0]){const p=u,x=h-u;v=o.values.slice(p,x)}else if(s>=o.times[g]){const p=g*h+u,x=p+h-u;v=o.values.slice(p,x)}else{const p=o.createInterpolant(),x=u,b=h-u;p.evaluate(s),v=p.resultBuffer.slice(x,b)}c==="quaternion"&&new cn().fromArray(v).normalize().conjugate().toArray(v);const m=l.times.length;for(let p=0;p<m;++p){const x=p*f+d;if(c==="quaternion")cn.multiplyQuaternionsFlat(l.values,x,v,0,l.values,x);else{const b=f-d*2;for(let _=0;_<b;++_)l.values[x+_]-=v[_]}}}return r.blendMode=Ju,r}const Uy={convertArray:Us,isTypedArray:sm,getKeyframeOrder:rm,sortedArray:Pu,flattenJSON:bh,subclip:Dy,makeClipAdditive:Ny};class Vr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class am extends Vr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ls,endingEnd:Ls}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ds:s=e,o=2*t-n;break;case wa:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ds:a=e,c=2*n-t;break;case wa:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,x=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let C=0;C!==o;++C)s[C]=p*a[u+C]+x*a[l+C]+b*a[c+C]+_*a[h+C];return s}}class xh extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[l+d]*h+a[c+d]*u;return s}}class om extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ri{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Us(t,this.TimeBufferType),this.values=Us(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Us(e.times,Array),values:Us(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new om(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new am(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Dr:t=this.InterpolantFactoryMethodDiscrete;break;case Nr:t=this.InterpolantFactoryMethodLinear;break;case Yo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&sm(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Yo,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[d+g]||v!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=Nr;class Ks extends ri{constructor(e,t,n){super(e,t,n)}}Ks.prototype.ValueTypeName="bool";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Dr;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class _h extends ri{}_h.prototype.ValueTypeName="color";class Xs extends ri{}Xs.prototype.ValueTypeName="number";class cm extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)cn.slerpFlat(s,0,a,l-o,a,l,c);return s}}class qs extends ri{InterpolantFactoryMethodLinear(e){return new cm(this.times,this.values,this.getValueSize(),e)}}qs.prototype.ValueTypeName="quaternion";qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends ri{constructor(e,t,n){super(e,t,n)}}Js.prototype.ValueTypeName="string";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Dr;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends ri{}js.prototype.ValueTypeName="vector";class Or{constructor(e="",t=-1,n=[],i=Jc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Oy(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(ri.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=rm(c);c=Pu(c,1,u),l=Pu(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Xs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,v){if(f.length!==0){const m=[],p=[];bh(f,m,p,g),m.length!==0&&v.push(new h(d,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const b=d[g];m.push(b.time),p.push(b.morphTarget===v?1:0)}i.push(new Xs(".morphTargetInfluence["+v+"]",m,p))}c=f.length*a}else{const f=".bones["+t[h].name+"]";n(js,f+".position",d,"pos",i),n(qs,f+".quaternion",d,"rot",i),n(js,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Fy(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xs;case"vector":case"vector2":case"vector3":case"vector4":return js;case"color":return _h;case"quaternion":return qs;case"bool":case"boolean":return Ks;case"string":return Js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Oy(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Fy(r.type);if(r.times===void 0){const t=[],n=[];bh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Di={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class yh{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const lm=new yh;class An{constructor(e){this.manager=e!==void 0?e:lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}An.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ci={};class By extends Error{constructor(e,t){super(e),this.response=t}}class ii extends An{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Di.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:i});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;const u=Ci[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){x();function x(){h.read().then(({done:b,value:_})=>{if(b)p.close();else{v+=_.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let w=0,A=u.length;w<A;w++){const P=u[w];P.onProgress&&P.onProgress(C)}p.enqueue(_),x()}},b=>{p.error(b)})}}});return new Response(m)}else throw new By(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Di.add(e,l);const u=Ci[e];delete Ci[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Ci[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ci[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ky extends An{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new ii(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Or.parse(e[n]);t.push(i)}return t}}class zy extends An{constructor(e){super(e)}load(e,t,n,i){const s=this,a=[],o=new ol,c=new ii(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(s.withCredentials);let l=0;function u(h){c.load(e[h],function(d){const f=s.parse(d,!0);a[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(o.minFilter=Ct),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)u(h);else c.load(e,function(h){const d=s.parse(h,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let g=0;g<f;g++){a[g]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)a[g].mipmaps.push(d.mipmaps[g*d.mipmapCount+v]),a[g].format=d.format,a[g].width=d.width,a[g].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=Ct),o.format=d.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class Oa extends An{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Di.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Pa("img");function c(){u(),Di.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Hy extends An{constructor(e){super(e)}load(e,t,n,i){const s=new Va;s.colorSpace=Jt;const a=new Oa(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(e[l],function(u){s.images[l]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return s}}class Gy extends An{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new ni,o=new ii(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(c){let l;try{l=s.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:Hn,a.wrapT=l.wrapT!==void 0?l.wrapT:Hn,a.magFilter=l.magFilter!==void 0?l.magFilter:Ct,a.minFilter=l.minFilter!==void 0?l.minFilter:Ct,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Gn),l.mipmapCount===1&&(a.minFilter=Ct),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}}class um extends An{constructor(e){super(e)}load(e,t,n,i){const s=new Nt,a=new Oa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class cs extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class hm extends cs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const cu=new ze,$d=new T,ef=new T;class Mh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wa,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$d.setFromMatrixPosition(e.matrixWorld),t.position.copy($d),ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ef),t.updateMatrixWorld(),cu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vy extends Mh{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ur*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sh extends cs{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Vy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const tf=new ze,ra=new T,lu=new T;class Wy extends Mh{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ra.setFromMatrixPosition(e.matrixWorld),n.position.copy(ra),lu.copy(n.position),lu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(lu),n.updateMatrixWorld(),i.makeTranslation(-ra.x,-ra.y,-ra.z),tf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tf)}}class wh extends cs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Xy extends Mh{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ba extends cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Xy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dm extends cs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fm extends cs{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class pm{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class mm extends cs{constructor(e=new pm,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class _l extends An{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,a=new ii(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new oe().setHex(a.value);break;case"v2":i.uniforms[s].value=new Q().fromArray(a.value);break;case"v3":i.uniforms[s].value=new T().fromArray(a.value);break;case"v4":i.uniforms[s].value=new ft().fromArray(a.value);break;case"m3":i.uniforms[s].value=new st().fromArray(a.value);break;case"m4":i.uniforms[s].value=new ze().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new Q().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new Q().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return _l.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Jp,SpriteMaterial:sl,RawShaderMaterial:Zp,ShaderMaterial:Mt,PointsMaterial:al,MeshPhysicalMaterial:Yn,MeshStandardMaterial:Gr,MeshPhongMaterial:Qp,MeshToonMaterial:$p,MeshNormalMaterial:em,MeshLambertMaterial:tm,MeshDepthMaterial:rh,MeshDistanceMaterial:ah,MeshBasicMaterial:rn,MeshMatcapMaterial:nm,LineDashedMaterial:im,LineBasicMaterial:bn,Material:$t};return new t[e]}}class es{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class gm extends je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class vm extends An{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new ii(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,g){if(t[g]!==void 0)return t[g];const m=f.interleavedBuffers[g],p=s(f,m.buffer),x=Mr(m.type,p),b=new Xa(x,m.stride);return b.uuid=m.uuid,t[g]=b,b}function s(f,g){if(n[g]!==void 0)return n[g];const m=f.arrayBuffers[g],p=new Uint32Array(m).buffer;return n[g]=p,p}const a=e.isInstancedBufferGeometry?new gm:new je,o=e.data.index;if(o!==void 0){const f=Mr(o.type,o.array);a.setIndex(new Ze(f,1))}const c=e.data.attributes;for(const f in c){const g=c[f];let v;if(g.isInterleavedBufferAttribute){const m=i(e.data,g.data);v=new ns(m,g.itemSize,g.offset,g.normalized)}else{const m=Mr(g.type,g.array),p=g.isInstancedBufferAttribute?Vs:Ze;v=new p(m,g.itemSize,g.normalized)}g.name!==void 0&&(v.name=g.name),g.usage!==void 0&&v.setUsage(g.usage),a.setAttribute(f,v)}const l=e.data.morphAttributes;if(l)for(const f in l){const g=l[f],v=[];for(let m=0,p=g.length;m<p;m++){const x=g[m];let b;if(x.isInterleavedBufferAttribute){const _=i(e.data,x.data);b=new ns(_,x.itemSize,x.offset,x.normalized)}else{const _=Mr(x.type,x.array);b=new Ze(_,x.itemSize,x.normalized)}x.name!==void 0&&(b.name=x.name),v.push(b)}a.morphAttributes[f]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,g=h.length;f!==g;++f){const v=h[f];a.addGroup(v.start,v.count,v.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new T;d.center!==void 0&&f.fromArray(d.center),a.boundingSphere=new un(f,d.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class qy extends An{constructor(e){super(e)}load(e,t,n,i){const s=this,a=this.path===""?es.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new ii(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?es.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new ii(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),o=JSON.parse(a),c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(l)}),o=this.parseTextures(e.textures,a),c=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,s,c,o,n),u=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,u),this.bindLightTargets(l),t!==void 0){let h=!1;for(const d in a)if(a[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,i,o,a,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Bs().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=new qa().fromJSON(e[s],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new vm;for(let s=0,a=e.length;s<a;s++){let o;const c=e[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(c);break;default:c.type in Qd?o=Qd[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),n[c.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new _l;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){const c=e[a];n[c.uuid]===void 0&&(n[c.uuid]=s.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Or.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function a(c){return n.manager.itemStart(c),s.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return a(u)}else return c.data?{data:Mr(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new yh(t);s=new Oa(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,u=e.length;l<u;l++){const h=e[l],d=h.url;if(Array.isArray(d)){const f=[];for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o(m);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new ni(p.data,p.width,p.height)))}i[h.uuid]=new Ns(f)}else{const f=o(h.url);i[h.uuid]=new Ns(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(a){if(typeof a=="string"){const o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(c)}else return a.data?{data:Mr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Oa(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const c=e[a],l=c.url;if(Array.isArray(l)){const u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h],g=await s(f);g!==null&&(g instanceof HTMLImageElement?u.push(g):u.push(new ni(g.data,g.width,g.height)))}n[c.uuid]=new Ns(u)}else{const u=await s(c.url);n[c.uuid]=new Ns(u)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const i={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const c=t[o.image],l=c.data;let u;Array.isArray(l)?(u=new Va,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new ni:u=new Nt,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,jy)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],nf),u.wrapT=n(o.wrap[1],nf)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,sf)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,sf)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.userData!==void 0&&(u.userData=o.userData),i[o.uuid]=u}return i}parseObject(e,t,n,i,s){let a;function o(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function c(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let g=0,v=d.length;g<v;g++){const m=d[g];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function l(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let u,h;switch(e.type){case"Scene":a=new La,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new oe(e.background):a.background=l(e.background)),e.environment!==void 0&&(a.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new il(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new nl(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Xt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Ys(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new dm(e.color,e.intensity);break;case"DirectionalLight":a=new Ba(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new wh(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new fm(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Sh(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new hm(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new mm().fromJSON(e);break;case"SkinnedMesh":u=o(e.geometry),h=c(e.material),a=new ch(u,h),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),h=c(e.material),a=new xt(u,h);break;case"InstancedMesh":u=o(e.geometry),h=c(e.material);const d=e.count,f=e.instanceMatrix,g=e.instanceColor;a=new lh(u,h,d),a.instanceMatrix=new Vs(new Float32Array(f.array),16),g!==void 0&&(a.instanceColor=new Vs(new Float32Array(g.array),g.itemSize));break;case"BatchedMesh":u=o(e.geometry),h=c(e.material),a=new kp(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,h),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(v=>{const m=new ln;m.min.fromArray(v.boxMin),m.max.fromArray(v.boxMax);const p=new un;return p.radius=v.sphereRadius,p.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:m,sphereInitialized:v.sphereInitialized,sphere:p}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=l(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=l(e.colorsTexture.uuid));break;case"LOD":a=new Bp;break;case"Line":a=new Bi(o(e.geometry),c(e.material));break;case"LineLoop":a=new uh(o(e.geometry),c(e.material));break;case"LineSegments":a=new jn(o(e.geometry),c(e.material));break;case"PointCloud":case"Points":a=new _i(o(e.geometry),c(e.material));break;case"Sprite":a=new oh(c(e.material));break;case"Group":a=new wn;break;case"Bone":a=new rl;break;default:a=new mt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,n,i,s))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const g=d[f];a.animations.push(s[g])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const g=d[f],v=a.getObjectByProperty("uuid",g.object);v!==void 0&&a.addLevel(v,g.distance,g.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new mt}})}}const jy={UVMapping:Gc,CubeReflectionMapping:Ui,CubeRefractionMapping:ts,EquirectangularReflectionMapping:zs,EquirectangularRefractionMapping:Sa,CubeUVReflectionMapping:kr},nf={RepeatWrapping:bi,ClampToEdgeWrapping:Hn,MirroredRepeatWrapping:Ir},sf={NearestFilter:Zt,NearestMipmapNearestFilter:Vc,NearestMipmapLinearFilter:Is,LinearFilter:Ct,LinearMipmapNearestFilter:Tr,LinearMipmapLinearFilter:Gn};class bm extends An{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Di.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Di.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Di.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Di.add(e,c),s.manager.itemStart(e)}}let ko;class Ah{static getContext(){return ko===void 0&&(ko=new(window.AudioContext||window.webkitAudioContext)),ko}static setContext(e){ko=e}}class Yy extends An{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new ii(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const l=c.slice(0);Ah.getContext().decodeAudioData(l,function(h){t(h)}).catch(o)}catch(l){o(l)}},n,i);function o(c){i?i(c):console.error(c),s.manager.itemError(e)}}}const rf=new ze,af=new ze,xs=new ze;class Ky{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Xt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Xt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,xs.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,a=t.near*Math.tan(Os*t.fov*.5)/t.zoom;let o,c;af.elements[12]=-i,rf.elements[12]=i,o=-a*t.aspect+s,c=a*t.aspect+s,xs.elements[0]=2*t.near/(c-o),xs.elements[8]=(c+o)/(c-o),this.cameraL.projectionMatrix.copy(xs),o=-a*t.aspect-s,c=a*t.aspect-s,xs.elements[0]=2*t.near/(c-o),xs.elements[8]=(c+o)/(c-o),this.cameraR.projectionMatrix.copy(xs)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(af),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(rf)}}class ka{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=of(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=of();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function of(){return performance.now()}const _s=new T,cf=new cn,Jy=new T,ys=new T;class Zy extends mt{constructor(){super(),this.type="AudioListener",this.context=Ah.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ka}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(_s,cf,Jy),ys.set(0,0,-1).applyQuaternion(cf),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(_s.x,i),t.positionY.linearRampToValueAtTime(_s.y,i),t.positionZ.linearRampToValueAtTime(_s.z,i),t.forwardX.linearRampToValueAtTime(ys.x,i),t.forwardY.linearRampToValueAtTime(ys.y,i),t.forwardZ.linearRampToValueAtTime(ys.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(_s.x,_s.y,_s.z),t.setOrientation(ys.x,ys.y,ys.z,n.x,n.y,n.z)}}class xm extends mt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Ms=new T,lf=new cn,Qy=new T,Ss=new T;class $y extends xm{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ms,lf,Qy),Ss.set(0,0,1).applyQuaternion(lf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ms.x,n),t.positionY.linearRampToValueAtTime(Ms.y,n),t.positionZ.linearRampToValueAtTime(Ms.z,n),t.orientationX.linearRampToValueAtTime(Ss.x,n),t.orientationY.linearRampToValueAtTime(Ss.y,n),t.orientationZ.linearRampToValueAtTime(Ss.z,n)}else t.setPosition(Ms.x,Ms.y,Ms.z),t.setOrientation(Ss.x,Ss.y,Ss.z)}}class eM{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class _m{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){cn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;cn.multiplyQuaternionsFlat(e,a,e,t,e,n),cn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Th="\\[\\]\\.:\\/",tM=new RegExp("["+Th+"]","g"),Eh="[^"+Th+"]",nM="[^"+Th.replace("\\.","")+"]",iM=/((?:WC+[\/:])*)/.source.replace("WC",Eh),sM=/(WCOD+)?/.source.replace("WCOD",nM),rM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),aM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),oM=new RegExp("^"+iM+sM+rM+aM+"$"),cM=["material","materials","bones","map"];class lM{constructor(e,t,n){const i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class vt{constructor(e,t,n){this.path=t,this.parsedPath=n||vt.parseTrackName(t),this.node=vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new vt.Composite(e,t,n):new vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tM,"")}static parseTrackName(e){const t=oM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);cM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vt.Composite=lM;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class uM{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Vn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,a=s.length;let o,c=e.length,l=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const d=arguments[u],f=d.uuid;let g=t[f];if(g===void 0){g=c++,t[f]=g,e.push(d);for(let v=0,m=a;v!==m;++v)s[v].push(new vt(d,n[v],i[v]))}else if(g<l){o=e[g];const v=--l,m=e[v];t[m.uuid]=g,e[g]=m,t[f]=v,e[v]=d;for(let p=0,x=a;p!==x;++p){const b=s[p],_=b[v];let C=b[g];b[g]=_,C===void 0&&(C=new vt(d,n[p],i[p])),b[v]=C}}else e[g]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const c=arguments[a],l=c.uuid,u=t[l];if(u!==void 0&&u>=s){const h=s++,d=e[h];t[d.uuid]=u,e[u]=d,t[l]=h,e[h]=c;for(let f=0,g=i;f!==g;++f){const v=n[f],m=v[h],p=v[u];v[u]=m,v[h]=p}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,a=e.length;for(let o=0,c=arguments.length;o!==c;++o){const l=arguments[o],u=l.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const d=--s,f=e[d],g=--a,v=e[g];t[f.uuid]=h,e[h]=f,t[v.uuid]=d,e[d]=v,e.pop();for(let m=0,p=i;m!==p;++m){const x=n[m],b=x[d],_=x[g];x[h]=b,x[d]=_,x.pop()}}else{const d=--a,f=e[d];d>0&&(t[f.uuid]=h),e[h]=f,e.pop();for(let g=0,v=i;g!==v;++g){const m=n[g];m[h]=m[d],m.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const a=this._paths,o=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,h=new Array(l);i=s.length,n[e]=i,a.push(e),o.push(t),s.push(h);for(let d=u,f=c.length;d!==f;++d){const g=c[d];h[d]=new vt(g,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,c=a[o],l=e[o];t[l]=n,a[n]=c,a.pop(),s[n]=s[o],s.pop(),i[n]=i[o],i.pop()}}}class ym{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),c={endingStart:Ls,endingEnd:Ls};for(let l=0;l!==a;++l){const u=s[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=cp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Ju:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case Jc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===lp;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===op){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ds,i.endingEnd=Ds):(e?i.endingStart=this.zeroSlopeAtStart?Ds:Ls:i.endingStart=wa,t?i.endingEnd=this.zeroSlopeAtEnd?Ds:Ls:i.endingEnd=wa)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const hM=new Float32Array(1);class dM extends yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){const d=i[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;g=new _m(vt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new xh(new Float32Array(2),new Float32Array(2),1,hM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Or.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Jc),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new ym(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Or.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Rh{constructor(e){this.value=e}clone(){return new Rh(this.value.clone===void 0?this.value:this.value.clone())}}let fM=0;class pM extends yi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:fM++}),this.name="",this.usage=Ra,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class mM extends Xa{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class gM{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const uf=new ze;class Mm{constructor(e,t,n=0,i=1/0){this.ray=new zr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new $c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return uf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uf),this}intersectObject(e,t=!0,n=[]){return Iu(e,this,n,t),n.sort(hf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Iu(e[i],this,n,t);return n.sort(hf),n}}function hf(r,e){return r.distance-e.distance}function Iu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Iu(s[a],e,t,!0)}}class vM{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bM{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Ch{constructor(e,t,n,i){Ch.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const df=new Q;class xM{constructor(e=new Q(1/0,1/0),t=new Q(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=df.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,df).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ff=new T,zo=new T;class _M{constructor(e=new T,t=new T){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ff.subVectors(e,this.start),zo.subVectors(this.end,this.start);const n=zo.dot(zo);let s=zo.dot(ff)/n;return t&&(s=kt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const pf=new T;class yM extends mt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new je,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,c=32;a<c;a++,o++){const l=a/c*Math.PI*2,u=o/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Ie(i,3));const s=new bn({fog:!1,toneMapped:!1});this.cone=new jn(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),pf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(pf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Ki=new T,Ho=new ze,uu=new ze;class MM extends jn{constructor(e){const t=Sm(e),n=new je,i=[],s=[],a=new oe(0,0,1),o=new oe(0,1,0);for(let l=0;l<t.length;l++){const u=t[l];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new Ie(i,3)),n.setAttribute("color",new Ie(s,3));const c=new bn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");uu.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Ho.multiplyMatrices(uu,o.matrixWorld),Ki.setFromMatrixPosition(Ho),i.setXYZ(a,Ki.x,Ki.y,Ki.z),Ho.multiplyMatrices(uu,o.parent.matrixWorld),Ki.setFromMatrixPosition(Ho),i.setXYZ(a+1,Ki.x,Ki.y,Ki.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Sm(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Sm(r.children[t]));return e}class SM extends xt{constructor(e,t,n){const i=new is(t,4,2),s=new rn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const wM=new T,mf=new oe,gf=new oe;class AM extends mt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Ka(t);i.rotateY(Math.PI*.5),this.material=new rn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),a=new Float32Array(s.count*3);i.setAttribute("color",new Ze(a,3)),this.add(new xt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");mf.copy(this.light.color),gf.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?mf:gf;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(wM.setFromMatrixPosition(this.light.matrixWorld).negate())}}class TM extends jn{constructor(e=10,t=10,n=4473924,i=8947848){n=new oe(n),i=new oe(i);const s=t/2,a=e/t,o=e/2,c=[],l=[];for(let d=0,f=0,g=-o;d<=t;d++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const v=d===s?n:i;v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3}const u=new je;u.setAttribute("position",new Ie(c,3)),u.setAttribute("color",new Ie(l,3));const h=new bn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class EM extends jn{constructor(e=10,t=16,n=8,i=64,s=4473924,a=8947848){s=new oe(s),a=new oe(a);const o=[],c=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),f=Math.sin(d)*e,g=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,g);const v=h&1?s:a;c.push(v.r,v.g,v.b),c.push(v.r,v.g,v.b)}for(let h=0;h<n;h++){const d=h&1?s:a,f=e-e/n*h;for(let g=0;g<i;g++){let v=g/i*(Math.PI*2),m=Math.sin(v)*f,p=Math.cos(v)*f;o.push(m,0,p),c.push(d.r,d.g,d.b),v=(g+1)/i*(Math.PI*2),m=Math.sin(v)*f,p=Math.cos(v)*f,o.push(m,0,p),c.push(d.r,d.g,d.b)}}const l=new je;l.setAttribute("position",new Ie(o,3)),l.setAttribute("color",new Ie(c,3));const u=new bn({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const vf=new T,Go=new T,bf=new T;class RM extends mt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new je;i.setAttribute("position",new Ie([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new bn({fog:!1,toneMapped:!1});this.lightPlane=new Bi(i,s),this.add(this.lightPlane),i=new je,i.setAttribute("position",new Ie([0,0,0,0,0,1],3)),this.targetLine=new Bi(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),vf.setFromMatrixPosition(this.light.matrixWorld),Go.setFromMatrixPosition(this.light.target.matrixWorld),bf.subVectors(Go,vf),this.lightPlane.lookAt(Go),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Go),this.targetLine.scale.z=bf.length()}}const Vo=new T,Bt=new el;class CM extends jn{constructor(e){const t=new je,n=new bn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(g,v){c(g),c(v)}function c(g){i.push(0,0,0),s.push(0,0,0),a[g]===void 0&&(a[g]=[]),a[g].push(i.length/3-1)}t.setAttribute("position",new Ie(i,3)),t.setAttribute("color",new Ie(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const l=new oe(16755200),u=new oe(16711680),h=new oe(43775),d=new oe(16777215),f=new oe(3355443);this.setColors(l,u,h,d,f)}setColors(e,t,n,i,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Bt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Ht("c",t,e,Bt,0,0,-1),Ht("t",t,e,Bt,0,0,1),Ht("n1",t,e,Bt,-n,-i,-1),Ht("n2",t,e,Bt,n,-i,-1),Ht("n3",t,e,Bt,-n,i,-1),Ht("n4",t,e,Bt,n,i,-1),Ht("f1",t,e,Bt,-n,-i,1),Ht("f2",t,e,Bt,n,-i,1),Ht("f3",t,e,Bt,-n,i,1),Ht("f4",t,e,Bt,n,i,1),Ht("u1",t,e,Bt,n*.7,i*1.1,-1),Ht("u2",t,e,Bt,-n*.7,i*1.1,-1),Ht("u3",t,e,Bt,0,i*2,-1),Ht("cf1",t,e,Bt,-n,0,1),Ht("cf2",t,e,Bt,n,0,1),Ht("cf3",t,e,Bt,0,-i,1),Ht("cf4",t,e,Bt,0,i,1),Ht("cn1",t,e,Bt,-n,0,-1),Ht("cn2",t,e,Bt,n,0,-1),Ht("cn3",t,e,Bt,0,-i,-1),Ht("cn4",t,e,Bt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ht(r,e,t,n,i,s,a){Vo.set(i,s,a).unproject(n);const o=e[r];if(o!==void 0){const c=t.getAttribute("position");for(let l=0,u=o.length;l<u;l++)c.setXYZ(o[l],Vo.x,Vo.y,Vo.z)}}const Wo=new ln;class PM extends jn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new je;s.setIndex(new Ze(n,1)),s.setAttribute("position",new Ze(i,3)),super(s,new bn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Wo.setFromObject(this.object),Wo.isEmpty())return;const t=Wo.min,n=Wo.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class IM extends jn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new je;s.setIndex(new Ze(n,1)),s.setAttribute("position",new Ie(i,3)),super(s,new bn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class LM extends Bi{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new je;a.setAttribute("position",new Ie(s,3)),a.computeBoundingSphere(),super(a,new bn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new je;c.setAttribute("position",new Ie(o,3)),c.computeBoundingSphere(),this.add(new xt(c,new rn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const xf=new T;let Xo,hu;class DM extends mt{constructor(e=new T(0,0,1),t=new T(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",Xo===void 0&&(Xo=new je,Xo.setAttribute("position",new Ie([0,0,0,0,1,0],3)),hu=new as(0,.5,1,5,1),hu.translate(0,-.5,0)),this.position.copy(t),this.line=new Bi(Xo,new bn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new xt(hu,new rn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{xf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(xf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class NM extends jn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new je;i.setAttribute("position",new Ie(t,3)),i.setAttribute("color",new Ie(n,3));const s=new bn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new oe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class UM{constructor(){this.type="ShapePath",this.color=new oe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Da,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const x=[];for(let b=0,_=p.length;b<_;b++){const C=p[b],w=new Bs;w.curves=C.curves,x.push(w)}return x}function n(p,x){const b=x.length;let _=!1;for(let C=b-1,w=0;w<b;C=w++){let A=x[C],P=x[w],F=P.x-A.x,y=P.y-A.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(A=x[w],F=-F,P=x[C],y=-y),p.y<A.y||p.y>P.y)continue;if(p.y===A.y){if(p.x===A.x)return!0}else{const M=y*(p.x-A.x)-F*(p.y-A.y);if(M===0)return!0;if(M<0)continue;_=!_}}else{if(p.y!==A.y)continue;if(P.x<=p.x&&p.x<=A.x||A.x<=p.x&&p.x<=P.x)return!0}}return _}const i=gi.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,c;const l=[];if(s.length===1)return o=s[0],c=new Bs,c.curves=o.curves,l.push(c),l;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],d=[];let f=[],g=0,v;d[g]=void 0,f[g]=[];for(let p=0,x=s.length;p<x;p++)o=s[p],v=o.getPoints(),a=i(v),a=e?!a:a,a?(!u&&d[g]&&g++,d[g]={s:new Bs,p:v},d[g].s.curves=o.curves,u&&g++,f[g]=[]):f[g].push({h:o,p:v[0]});if(!d[0])return t(s);if(d.length>1){let p=!1,x=0;for(let b=0,_=d.length;b<_;b++)h[b]=[];for(let b=0,_=d.length;b<_;b++){const C=f[b];for(let w=0;w<C.length;w++){const A=C[w];let P=!0;for(let F=0;F<d.length;F++)n(A.p,d[F].p)&&(b!==F&&x++,P?(P=!1,h[F].push(A)):p=!0);P&&h[b].push(A)}}x>0&&p===!1&&(f=h)}let m;for(let p=0,x=d.length;p<x;p++){c=d[p].s,l.push(c),m=f[p];for(let b=0,_=m.length;b<_;b++)c.holes.push(m[b].h)}return l}}class FM extends yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class OM extends Qt{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hc);const BM=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:np,AddEquation:Qi,AddOperation:Qf,AdditiveAnimationBlendMode:Ju,AdditiveBlending:gn,AgXToneMapping:sp,AlphaFormat:Wu,AlwaysCompare:_p,AlwaysDepth:nc,AlwaysStencilFunc:Mu,AmbientLight:dm,AnimationAction:ym,AnimationClip:Or,AnimationLoader:ky,AnimationMixer:dM,AnimationObjectGroup:uM,AnimationUtils:Uy,ArcCurve:zp,ArrayCamera:Up,ArrowHelper:DM,AttachedBindMode:yu,Audio:xm,AudioAnalyser:eM,AudioContext:Ah,AudioListener:Zy,AudioLoader:Yy,AxesHelper:NM,BackSide:on,BasicDepthPacking:hp,BasicShadowMap:Om,BatchedMesh:kp,Bone:rl,BooleanKeyframeTrack:Ks,Box2:xM,Box3:ln,Box3Helper:IM,BoxGeometry:rs,BoxHelper:PM,BufferAttribute:Ze,BufferGeometry:je,BufferGeometryLoader:vm,ByteType:Hu,Cache:Di,Camera:el,CameraHelper:CM,CanvasTexture:hh,CapsuleGeometry:ll,CatmullRomCurve3:Hp,CineonToneMapping:tp,CircleGeometry:Ya,ClampToEdgeWrapping:Hn,Clock:ka,Color:oe,ColorKeyframeTrack:_h,ColorManagement:bt,CompressedArrayTexture:sy,CompressedCubeTexture:ry,CompressedTexture:ol,CompressedTextureLoader:zy,ConeGeometry:ul,ConstantAlphaFactor:Kf,ConstantColorFactor:jf,Controls:FM,CubeCamera:Ep,CubeReflectionMapping:Ui,CubeRefractionMapping:ts,CubeTexture:Va,CubeTextureLoader:Hy,CubeUVReflectionMapping:kr,CubicBezierCurve:fh,CubicBezierCurve3:Gp,CubicInterpolant:am,CullFaceBack:bu,CullFaceFront:Lf,CullFaceFrontBack:Fm,CullFaceNone:If,Curve:si,CurvePath:Wp,CustomBlending:Df,CustomToneMapping:ip,CylinderGeometry:as,Cylindrical:bM,Data3DTexture:eh,DataArrayTexture:Qc,DataTexture:ni,DataTextureLoader:Gy,DataUtils:jg,DecrementStencilOp:Ym,DecrementWrapStencilOp:Jm,DefaultLoadingManager:lm,DepthFormat:Fs,DepthStencilFormat:Gs,DepthTexture:sh,DetachedBindMode:ap,DirectionalLight:Ba,DirectionalLightHelper:RM,DiscreteInterpolant:om,DisplayP3ColorSpace:Zc,DodecahedronGeometry:hl,DoubleSide:Ln,DstAlphaFactor:Gf,DstColorFactor:Wf,DynamicCopyUsage:ug,DynamicDrawUsage:Su,DynamicReadUsage:og,EdgesGeometry:Xp,EllipseCurve:cl,EqualCompare:gp,EqualDepth:sc,EqualStencilFunc:eg,EquirectangularReflectionMapping:zs,EquirectangularRefractionMapping:Sa,Euler:Wn,EventDispatcher:yi,ExtrudeGeometry:fl,FileLoader:ii,Float16BufferAttribute:$g,Float32BufferAttribute:Ie,FloatType:Dn,Fog:il,FogExp2:nl,FramebufferTexture:iy,FrontSide:vi,Frustum:Wa,GLBufferAttribute:gM,GLSL1:dg,GLSL3:wu,GreaterCompare:vp,GreaterDepth:ac,GreaterEqualCompare:xp,GreaterEqualDepth:rc,GreaterEqualStencilFunc:sg,GreaterStencilFunc:ng,GridHelper:TM,Group:wn,HalfFloatType:Nn,HemisphereLight:hm,HemisphereLightHelper:AM,IcosahedronGeometry:pl,ImageBitmapLoader:bm,ImageLoader:Oa,ImageUtils:Sp,IncrementStencilOp:jm,IncrementWrapStencilOp:Km,InstancedBufferAttribute:Vs,InstancedBufferGeometry:gm,InstancedInterleavedBuffer:mM,InstancedMesh:lh,Int16BufferAttribute:Zg,Int32BufferAttribute:Qg,Int8BufferAttribute:Yg,IntType:Wc,InterleavedBuffer:Xa,InterleavedBufferAttribute:ns,Interpolant:Vr,InterpolateDiscrete:Dr,InterpolateLinear:Nr,InterpolateSmooth:Yo,InvertStencilOp:Zm,KeepStencilOp:As,KeyframeTrack:ri,LOD:Bp,LatheGeometry:ja,Layers:$c,LessCompare:mp,LessDepth:ic,LessEqualCompare:Qu,LessEqualDepth:ks,LessEqualStencilFunc:tg,LessStencilFunc:$m,Light:cs,LightProbe:mm,Line:Bi,Line3:_M,LineBasicMaterial:bn,LineCurve:ph,LineCurve3:Vp,LineDashedMaterial:im,LineLoop:uh,LineSegments:jn,LinearDisplayP3ColorSpace:Ga,LinearFilter:Ct,LinearInterpolant:xh,LinearMipMapLinearFilter:Hm,LinearMipMapNearestFilter:zm,LinearMipmapLinearFilter:Gn,LinearMipmapNearestFilter:Tr,LinearSRGBColorSpace:qt,LinearToneMapping:$f,LinearTransfer:Aa,Loader:An,LoaderUtils:es,LoadingManager:yh,LoopOnce:op,LoopPingPong:lp,LoopRepeat:cp,LuminanceAlphaFormat:ju,LuminanceFormat:qu,MOUSE:Nm,Material:$t,MaterialLoader:_l,MathUtils:mn,Matrix2:Ch,Matrix3:st,Matrix4:ze,MaxEquation:Of,Mesh:xt,MeshBasicMaterial:rn,MeshDepthMaterial:rh,MeshDistanceMaterial:ah,MeshLambertMaterial:tm,MeshMatcapMaterial:nm,MeshNormalMaterial:em,MeshPhongMaterial:Qp,MeshPhysicalMaterial:Yn,MeshStandardMaterial:Gr,MeshToonMaterial:$p,MinEquation:Ff,MirroredRepeatWrapping:Ir,MixOperation:Zf,MultiplyBlending:_u,MultiplyOperation:za,NearestFilter:Zt,NearestMipMapLinearFilter:km,NearestMipMapNearestFilter:Bm,NearestMipmapLinearFilter:Is,NearestMipmapNearestFilter:Vc,NeutralToneMapping:rp,NeverCompare:pp,NeverDepth:tc,NeverStencilFunc:Qm,NoBlending:mi,NoColorSpace:fi,NoToneMapping:Ni,NormalAnimationBlendMode:Jc,NormalBlending:$i,NotEqualCompare:bp,NotEqualDepth:oc,NotEqualStencilFunc:ig,NumberKeyframeTrack:Xs,Object3D:mt,ObjectLoader:qy,ObjectSpaceNormalMap:fp,OctahedronGeometry:Ka,OneFactor:kf,OneMinusConstantAlphaFactor:Jf,OneMinusConstantColorFactor:Yf,OneMinusDstAlphaFactor:Vf,OneMinusDstColorFactor:Xf,OneMinusSrcAlphaFactor:ec,OneMinusSrcColorFactor:Hf,OrthographicCamera:Ys,P3Primaries:Ea,PCFShadowMap:ku,PCFSoftShadowMap:zu,PMREMGenerator:Uc,Path:Da,PerspectiveCamera:Xt,Plane:di,PlaneGeometry:Oi,PlaneHelper:LM,PointLight:wh,PointLightHelper:SM,Points:_i,PointsMaterial:al,PolarGridHelper:EM,PolyhedronGeometry:os,PositionalAudio:$y,PropertyBinding:vt,PropertyMixer:_m,QuadraticBezierCurve:mh,QuadraticBezierCurve3:gh,Quaternion:cn,QuaternionKeyframeTrack:qs,QuaternionLinearInterpolant:cm,RED_GREEN_RGTC2_Format:Lc,RED_RGTC1_Format:Ku,REVISION:Hc,RGBADepthPacking:dp,RGBAFormat:vn,RGBAIntegerFormat:Kc,RGBA_ASTC_10x10_Format:Tc,RGBA_ASTC_10x5_Format:Sc,RGBA_ASTC_10x6_Format:wc,RGBA_ASTC_10x8_Format:Ac,RGBA_ASTC_12x10_Format:Ec,RGBA_ASTC_12x12_Format:Rc,RGBA_ASTC_4x4_Format:mc,RGBA_ASTC_5x4_Format:gc,RGBA_ASTC_5x5_Format:vc,RGBA_ASTC_6x5_Format:bc,RGBA_ASTC_6x6_Format:xc,RGBA_ASTC_8x5_Format:_c,RGBA_ASTC_8x6_Format:yc,RGBA_ASTC_8x8_Format:Mc,RGBA_BPTC_Format:ba,RGBA_ETC2_EAC_Format:pc,RGBA_PVRTC_2BPPV1_Format:hc,RGBA_PVRTC_4BPPV1_Format:uc,RGBA_S3TC_DXT1_Format:ma,RGBA_S3TC_DXT3_Format:ga,RGBA_S3TC_DXT5_Format:va,RGBDepthPacking:Vm,RGBFormat:Xu,RGBIntegerFormat:Gm,RGB_BPTC_SIGNED_Format:Cc,RGB_BPTC_UNSIGNED_Format:Pc,RGB_ETC1_Format:dc,RGB_ETC2_Format:fc,RGB_PVRTC_2BPPV1_Format:lc,RGB_PVRTC_4BPPV1_Format:cc,RGB_S3TC_DXT1_Format:pa,RGDepthPacking:Wm,RGFormat:Yu,RGIntegerFormat:Yc,RawShaderMaterial:Zp,Ray:zr,Raycaster:Mm,Rec709Primaries:Ta,RectAreaLight:fm,RedFormat:jc,RedIntegerFormat:Ha,ReinhardToneMapping:ep,RenderTarget:wp,RepeatWrapping:bi,ReplaceStencilOp:qm,ReverseSubtractEquation:Uf,RingGeometry:Ja,SIGNED_RED_GREEN_RGTC2_Format:Dc,SIGNED_RED_RGTC1_Format:Ic,SRGBColorSpace:Jt,SRGBTransfer:Lt,Scene:La,ShaderChunk:ot,ShaderLib:ti,ShaderMaterial:Mt,ShadowMaterial:Jp,Shape:Bs,ShapeGeometry:ml,ShapePath:UM,ShapeUtils:gi,ShortType:Gu,Skeleton:qa,SkeletonHelper:MM,SkinnedMesh:ch,Source:Ns,Sphere:un,SphereGeometry:is,Spherical:vM,SphericalHarmonics3:pm,SplineCurve:vh,SpotLight:Sh,SpotLightHelper:yM,Sprite:oh,SpriteMaterial:sl,SrcAlphaFactor:$o,SrcAlphaSaturateFactor:qf,SrcColorFactor:zf,StaticCopyUsage:lg,StaticDrawUsage:Ra,StaticReadUsage:ag,StereoCamera:Ky,StreamCopyUsage:hg,StreamDrawUsage:rg,StreamReadUsage:cg,StringKeyframeTrack:Js,SubtractEquation:Nf,SubtractiveBlending:xu,TOUCH:Um,TangentSpaceNormalMap:ss,TetrahedronGeometry:gl,Texture:Nt,TextureLoader:um,TextureUtils:F_,TorusGeometry:vl,TorusKnotGeometry:bl,Triangle:Sn,TriangleFanDrawMode:Nc,TriangleStripDrawMode:Zu,TrianglesDrawMode:up,TubeGeometry:xl,UVMapping:Gc,Uint16BufferAttribute:th,Uint32BufferAttribute:nh,Uint8BufferAttribute:Kg,Uint8ClampedBufferAttribute:Jg,Uniform:Rh,UniformsGroup:pM,UniformsLib:Ee,UniformsUtils:Ia,UnsignedByteType:xi,UnsignedInt248Type:Hs,UnsignedInt5999Type:Vu,UnsignedIntType:Fi,UnsignedShort4444Type:Xc,UnsignedShort5551Type:qc,UnsignedShortType:Lr,VSMShadowMap:ui,Vector2:Q,Vector3:T,Vector4:ft,VectorKeyframeTrack:js,VideoTexture:ny,WebGL3DRenderTarget:Og,WebGLArrayRenderTarget:Fg,WebGLCoordinateSystem:pi,WebGLCubeRenderTarget:Rp,WebGLMultipleRenderTargets:OM,WebGLRenderTarget:Qt,WebGLRenderer:Fp,WebGLUtils:Np,WebGPUCoordinateSystem:Ca,WireframeGeometry:Kp,WrapAroundEnding:wa,ZeroCurvatureEnding:Ls,ZeroFactor:Bf,ZeroSlopeEnding:Ds,ZeroStencilOp:Xm,createCanvasElement:Mp},Symbol.toStringTag,{value:"Module"})),Ph=[{dx:.8,dz:.6,k:.2,s:1,a:.2},{dx:-.42,dz:.91,k:.36,s:1.5,a:.12},{dx:.95,dz:-.31,k:.75,s:2.3,a:.06},{dx:.2,dz:-.98,k:1.3,s:3.1,a:.025}];function _f(r,e,t,n){let i=0;for(const s of Ph)i+=s.a*Math.sin((s.dx*r+s.dz*e)*s.k+t*s.s);return i*n}function kM(r,e,t,n){let i=0,s=0;for(const a of Ph){const o=a.a*a.k*Math.cos((a.dx*r+a.dz*e)*a.k+t*a.s);i+=o*a.dx,s+=o*a.dz}return[i*n,s*n]}const zM=`
vec3 waveH(vec2 p, float t, float amp) {
    float h = 0.0; float sx = 0.0; float sz = 0.0; float ph; float c;
    ${Ph.map(r=>`
    ph = (${r.dx.toFixed(3)} * p.x + ${r.dz.toFixed(3)} * p.y) * ${r.k.toFixed(3)} + t * ${r.s.toFixed(3)};
    h += ${r.a.toFixed(3)} * sin(ph);
    c = ${(r.a*r.k).toFixed(4)} * cos(ph);
    sx += c * ${r.dx.toFixed(3)}; sz += c * ${r.dz.toFixed(3)};`).join("")}
    return vec3(h, sx, sz) * amp;
}
`,HM=256,GM=128,Ps=6371e3,kc=6471e3,Rr=[58e-7,135e-7,331e-7],Cr=2e-6,Zo=[65e-8,1881e-9,85e-9],Lu=8e3,Du=1200,du=.758,yr=22,Nu=new T(.35,.34,.87).normalize(),VM=`
#define PI 3.141592653589793
const float R_PLANET = 6371e3;
const float R_ATMOS = 6471e3;
const vec3 K_RLH = vec3(5.8e-6, 13.5e-6, 33.1e-6);
const float K_MIE = 2e-6;
const vec3 K_OZO = vec3(0.65e-6, 1.881e-6, 0.085e-6);
float ozone(float h) { return max(0.0, 1.0 - abs(h - 25e3) / 15e3); }
const float SH_RLH = 8e3;
const float SH_MIE = 1.2e3;
const float G_MIE = 0.758;

vec2 rsi(vec3 r0, vec3 rd, float sr) {
    float a = dot(rd, rd);
    float b = 2.0 * dot(rd, r0);
    float c = dot(r0, r0) - sr * sr;
    float d = b * b - 4.0 * a * c;
    if (d < 0.0) return vec2(1e5, -1e5);
    return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}

// single scattering along the view ray; light rays that hit the planet are in its shadow
uniform vec3 uMs; // light scattered many times: the sky's own glow, added along the ray
vec3 atmosphere(vec3 r, vec3 pSun, float iSun) {
    vec3 r0 = vec3(0.0, R_PLANET + 20.0, 0.0);
    vec2 p = rsi(r0, r, R_ATMOS);
    if (p.x > p.y) return vec3(0.0);
    vec2 pg = rsi(r0, r, R_PLANET);
    if (pg.x > 0.0) p.y = min(p.y, pg.x);
    const int I = 20;
    const int J = 8;
    float iStep = (p.y - max(p.x, 0.0)) / float(I);
    float iTime = max(p.x, 0.0);
    vec3 totRlh = vec3(0.0);
    vec3 totMie = vec3(0.0);
    float odRlh = 0.0;
    float odMie = 0.0;
    float odOzo = 0.0;
    float mu = dot(r, pSun);
    float mumu = mu * mu;
    float gg = G_MIE * G_MIE;
    float pRlh = 3.0 / (16.0 * PI) * (1.0 + mumu);
    float pMie = 3.0 / (8.0 * PI) * ((1.0 - gg) * (mumu + 1.0)) / (pow(1.0 + gg - 2.0 * mu * G_MIE, 1.5) * (2.0 + gg));
    for (int i = 0; i < I; i++) {
        vec3 iPos = r0 + r * (iTime + iStep * 0.5);
        float h = length(iPos) - R_PLANET;
        float sR = exp(-h / SH_RLH) * iStep;
        float sM = exp(-h / SH_MIE) * iStep;
        odRlh += sR;
        odMie += sM;
        odOzo += ozone(h) * iStep;
        // is this bit of air still in sunlight?
        vec2 sh = rsi(iPos, pSun, R_PLANET);
        if (!(sh.x > 0.0 && sh.x < 1e5)) {
            float jStep = rsi(iPos, pSun, R_ATMOS).y / float(J);
            float jTime = 0.0;
            float jR = 0.0;
            float jM = 0.0;
            float jO = 0.0;
            for (int j = 0; j < J; j++) {
                vec3 jPos = iPos + pSun * (jTime + jStep * 0.5);
                float jh = length(jPos) - R_PLANET;
                jR += exp(-jh / SH_RLH) * jStep;
                jM += exp(-jh / SH_MIE) * jStep;
                jO += ozone(jh) * jStep;
                jTime += jStep;
            }
            vec3 attn = exp(-(K_MIE * 1.1 * (odMie + jM) + K_RLH * (odRlh + jR) + K_OZO * (odOzo + jO)));
            totRlh += sR * attn;
            totMie += sM * attn;
        }
        iTime += iStep;
    }
    vec3 single = iSun * (pRlh * K_RLH * totRlh + pMie * K_MIE * totMie);
    return single + uMs * (1.0 - exp(-(K_RLH * odRlh + K_MIE * odMie)));
}
`,Ma=`
vec2 panoUV(vec3 d) {
    float u = atan(d.z, d.x) / 6.283185307 + 0.5;
    float y = clamp(d.y, -1.0, 1.0);
    float v = 0.5 + 0.5 * sign(y) * sqrt(abs(y));
    return vec2(u, v);
}
vec3 panoDir(vec2 uv) {
    float az = (uv.x - 0.5) * 6.283185307;
    float s = uv.y * 2.0 - 1.0;
    float y = sign(s) * s * s;
    float c = sqrt(max(0.0, 1.0 - y * y));
    return vec3(cos(az) * c, y, sin(az) * c);
}
`;function WM(r){const e=mn.degToRad(r),t=[Math.cos(e),Math.sin(e)],n=[0,Ps+20],i=2*(t[0]*n[0]+t[1]*n[1]),s=n[0]*n[0]+n[1]*n[1]-kc*kc,a=(-i+Math.sqrt(i*i-4*s))/2,o=48,c=a/o;let l=0,u=0,h=0;for(let d=0;d<o;d++){const f=(d+.5)*c,g=n[0]+t[0]*f,v=n[1]+t[1]*f,m=Math.hypot(g,v)-Ps;if(m<0)return null;l+=Math.exp(-m/Lu)*c,u+=Math.exp(-m/Du)*c,h+=Math.max(0,1-Math.abs(m-25e3)/15e3)*c}return[l,u,h]}function XM(r,e=new oe){let t=0,n=0,i=0;const s=5;for(let a=0;a<s;a++){const o=WM(r+((a+.5)/s-.5)*.53);o&&(t+=Math.exp(-(Cr*1.1*o[1]+Rr[0]*o[0]+Zo[0]*o[2]))/s,n+=Math.exp(-(Cr*1.1*o[1]+Rr[1]*o[0]+Zo[1]*o[2]))/s,i+=Math.exp(-(Cr*1.1*o[1]+Rr[2]*o[0]+Zo[2]*o[2]))/s)}return e.setRGB(t,n,i)}function fu(r,e,t,n=[0,0,0]){const i=[0,Ps+20,0],s=(w,A,P)=>{const F=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],y=2*(A[0]*w[0]+A[1]*w[1]+A[2]*w[2]),M=w[0]*w[0]+w[1]*w[1]+w[2]*w[2]-P*P,D=y*y-4*F*M;return D<0?[1e5,-1e5]:[(-y-Math.sqrt(D))/(2*F),(-y+Math.sqrt(D))/(2*F)]},a=Math.hypot(r[0],r[1],r[2]);r=[r[0]/a,r[1]/a,r[2]/a];const o=s(i,r,kc),c=s(i,r,Ps);c[0]>0&&(o[1]=Math.min(o[1],c[0]));const l=16,u=6,h=Math.max(o[0],0),d=(o[1]-h)/l;let f=0,g=0,v=0;const m=w=>Math.max(0,1-Math.abs(w-25e3)/15e3),p=[0,0,0,0,0,0],x=r[0]*e[0]+r[1]*e[1]+r[2]*e[2],b=du*du,_=3/(16*Math.PI)*(1+x*x),C=3/(8*Math.PI)*((1-b)*(x*x+1))/(Math.pow(1+b-2*x*du,1.5)*(2+b));for(let w=0;w<l;w++){const A=h+d*(w+.5),P=[i[0]+r[0]*A,i[1]+r[1]*A,i[2]+r[2]*A],F=Math.hypot(P[0],P[1],P[2])-Ps,y=Math.exp(-F/Lu)*d,M=Math.exp(-F/Du)*d;f+=y,g+=M,v+=m(F)*d;const D=s(P,e,Ps);if(D[0]>0&&D[0]<1e5)continue;const N=s(P,e,kc)[1]/u;let H=0,W=0,z=0;for(let K=0;K<u;K++){const q=N*(K+.5),de=Math.hypot(P[0]+e[0]*q,P[1]+e[1]*q,P[2]+e[2]*q)-Ps;H+=Math.exp(-de/Lu)*N,W+=Math.exp(-de/Du)*N,z+=m(de)*N}for(let K=0;K<3;K++){const q=Math.exp(-(Cr*1.1*(g+W)+Rr[K]*(f+H)+Zo[K]*(v+z)));p[K]+=y*q,p[K+3]+=M*q}}return[0,1,2].map(w=>t*(_*Rr[w]*p[w]+C*Cr*p[w+3])+n[w]*(1-Math.exp(-(Rr[w]*f+Cr*g))))}function qM(r,{lowPower:e=!1}={}){const t={elev:10,azim:180,dir:new T,sunColor:new oe,night:0,dusk:0},n=new Qt(HM,GM,{type:Nn,depthBuffer:!1,generateMipmaps:!1,minFilter:Ct,magFilter:Ct,wrapS:bi,colorSpace:qt});n.texture.mapping=zs;const i={uSun:{value:t.dir},uNight:{value:0},uMs:{value:new T},uOver:{value:0}},s=new Mt({uniforms:i,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
            ${VM}
            ${Ma}
            uniform vec3 uSun; uniform float uNight; uniform float uOver;
            varying vec2 vUv;
            void main() {
                vec3 d = panoDir(vUv);
                vec3 dd = normalize(vec3(d.x, max(d.y, 0.0015), d.z));
                vec3 col = atmosphere(dd, uSun, ${yr.toFixed(1)});
                // overcast: the cloud deck spreads the light evenly, three times brighter overhead than at the horizon
                if (uOver > 0.0) {
                    vec3 zen = atmosphere(vec3(0.0, 1.0, 0.0), uSun, ${yr.toFixed(1)});
                    float L = dot(zen, vec3(0.2126, 0.7152, 0.0722)) * 1.15 + 0.0004;
                    vec3 grey = vec3(0.93, 0.96, 1.0) * L * (1.0 + 2.0 * max(dd.y, 0.0)) / 3.0;
                    col = mix(col, grey, uOver);
                }
                // the night sky is not black: airglow and starlight
                col += vec3(0.0045, 0.007, 0.015) * (0.4 + 0.6 * smoothstep(-0.1, 0.6, d.y)) * uNight;
                // below the horizon: the land and the water under this sky
                if (d.y < 0.0) col *= mix(0.32, 0.12, smoothstep(0.0, -0.3, d.y));
                gl_FragColor = vec4(col, 1.0);
            }
        `}),a=new La;a.add(new xt(new Oi(2,2),s));const o=new Ys(-1,1,1,-1,0,1),c=new Uc(r);let l=null;const u=new Qt(256,128,{type:Nn,depthBuffer:!1,generateMipmaps:!1,minFilter:Ct,magFilter:Ct,colorSpace:qt});u.texture.mapping=zs;const h=new Mt({uniforms:{uPano:{value:n.texture}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
            ${Ma}
            uniform sampler2D uPano; varying vec2 vUv;
            void main() {
                // three.js equirect: u from atan(dir.z, dir.x), v from asin(dir.y)
                float phi = (vUv.x - 0.5) * 6.283185307;
                float th = (vUv.y - 0.5) * 3.14159265;
                vec3 d = vec3(cos(th) * cos(phi), sin(th), cos(th) * sin(phi));
                gl_FragColor = vec4(texture2D(uPano, panoUV(d)).rgb, 1.0);
            }
        `}),d=new La;d.add(new xt(new Oi(2,2),h));const f={uPano:{value:n.texture},uSun:{value:t.dir},uSunCol:{value:new oe},uTime:{value:0},uNight:{value:0},uCloud:{value:.56},uAmbient:{value:new oe},uDim:{value:1},uMoon:{value:Nu.clone()},uSunVis:{value:1}},g=new Mt({uniforms:f,side:on,depthWrite:!1,fog:!1,vertexShader:`
            varying vec3 vDir;
            void main() {
                vDir = normalize(position);
                vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                gl_Position = p.xyww; // on the far plane
            }
        `,fragmentShader:`
            ${Ma}
            uniform sampler2D uPano; uniform vec3 uSun; uniform vec3 uSunCol; uniform float uTime;
            uniform float uNight; uniform float uCloud; uniform vec3 uAmbient; uniform float uDim; uniform vec3 uMoon; uniform float uSunVis;
            varying vec3 vDir;

            float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
            float noise(vec2 p) {
                vec2 i = floor(p); vec2 f = fract(p);
                vec2 u = f * f * (3.0 - 2.0 * f);
                return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
            }
            float fbm(vec2 p) {
                float v = 0.0; float a = 0.5;
                for (int i = 0; i < ${e?4:6}; i++) { v += a * noise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
                return v;
            }

            void main() {
                vec3 d = normalize(vDir);
                vec3 col = texture2D(uPano, panoUV(d)).rgb;

                // the sun disc, coloured by the air it shines through
                float cs = dot(d, uSun);
                float disc = smoothstep(0.99996, 0.99999, cs);
                col += uSunCol * (disc * 4000.0 + pow(max(cs, 0.0), 2200.0) * 40.0) * uSunVis;

                // the moon, and its glow in the air
                float cm = dot(d, uMoon);
                vec3 moonCol = vec3(0.9, 0.93, 1.0) * uNight;
                col += moonCol * smoothstep(0.99992, 0.99996, cm) * 2.5;
                col += moonCol * pow(max(cm, 0.0), 300.0) * 0.012;

                // clouds: a thin layer high up, lit by the sun from the side it is on
                if (d.y > 0.0) {
                    vec2 p = d.xz / (d.y + 0.08) * 1.1;
                    vec2 wind = vec2(uTime * 0.004, uTime * 0.0015);
                    float n = fbm(p * 1.4 + wind);
                    float n2 = fbm(p * 3.3 - wind * 1.6 + n);
                    float cover = smoothstep(1.0 - uCloud, 1.0 - uCloud + 0.28, n * 0.75 + n2 * 0.35);
                    float fade = smoothstep(0.0, 0.18, d.y);
                    // light: the sunny edge of a cloud is bright, the thick middle darker
                    float thick = smoothstep(0.2, 1.0, cover);
                    float fwd = pow(max(cs, 0.0), 6.0);
                    vec3 lit = uSunCol * ${yr.toFixed(1)} * (0.018 + 0.06 * fwd) * (1.0 - thick * 0.55);
                    vec3 cloud = uAmbient * (0.9 - thick * 0.35) + lit;
                    col = mix(col, cloud, cover * fade * 0.92);
                }
                gl_FragColor = vec4(col * uDim, 1.0);
            }
        `}),v=new xt(new is(1,64,32),g);v.scale.setScalar(4e4),v.frustumCulled=!1,v.renderOrder=-10;const m=(()=>{const N=e?900:2400,H=new Float32Array(N*3),W=new Float32Array(N);for(let de=0;de<N;de++){const J=Math.random()*Math.PI*2,me=Math.pow(Math.random(),.7)*.98+.02,Ke=Math.sqrt(1-me*me);H.set([Math.cos(J)*Ke*38e3,me*38e3,Math.sin(J)*Ke*38e3],de*3),W[de]=Math.pow(Math.random(),3)}const z=new je;z.setAttribute("position",new Ze(H,3)),z.setAttribute("aSize",new Ze(W,1));const K=new Mt({transparent:!0,depthWrite:!1,blending:gn,uniforms:{uTime:{value:0},uOpacity:{value:0},uPx:{value:1}},vertexShader:`
                attribute float aSize; uniform float uTime; uniform float uPx; varying float vA;
                void main() {
                    vA = (0.25 + aSize) * (0.7 + 0.3 * sin(uTime * (0.8 + aSize * 3.0) + aSize * 90.0));
                    gl_PointSize = (1.0 + aSize * 2.2) * uPx;
                    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    gl_Position = p.xyww;
                }
            `,fragmentShader:`
                uniform float uOpacity; varying float vA;
                void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * vA * uOpacity * (1.0 - d * 2.0) * 0.12, 1.0); }
            `}),q=new _i(z,K);return q.frustumCulled=!1,q.renderOrder=-9,q})(),p=(()=>{const N=new wn,H=[[3e4,-1.45,2.3,700,8e3,0],[25e3,-.35,1.7,900,6500,3.7],[34e3,.55,1.3,800,7500,8.1]];for(const[W,z,K,q,de,J]of H){const me=new as(W,W,de,e?96:192,1,!0,z,K);me.translate(0,q+de/2,0);const Ke=new Mt({transparent:!0,depthWrite:!1,side:Ln,blending:gn,uniforms:{uTime:{value:0},uOpacity:{value:0},uSeed:{value:J}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
                    uniform float uTime; uniform float uOpacity; uniform float uSeed; varying vec2 vUv;
                    float hh(float x) { return fract(sin(x * 127.1 + uSeed * 31.7) * 43758.5453); }
                    float n1(float x) { float i = floor(x); float f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(hh(i), hh(i + 1.0), f); }
                    void main() {
                        float x = vUv.x;
                        float t = uTime * 0.02;
                        // the lower edge waves along the sky
                        float edge = 0.06 + 0.2 * n1(x * 6.0 + t * 2.5 + uSeed) + 0.07 * n1(x * 21.0 - t * 4.0);
                        float above = vUv.y - edge;
                        if (above < 0.0) discard;
                        float body = exp(-above * 4.2);
                        float rays = 0.45 + 0.55 * n1(x * 170.0 + t * 14.0) * (0.5 + 0.5 * n1(x * 53.0 - t * 6.0));
                        float folds = 0.25 + 0.75 * n1(x * 2.6 - t * 1.2 + uSeed * 2.0);
                        vec3 col = mix(vec3(0.1, 1.0, 0.42), vec3(0.5, 0.22, 0.95), smoothstep(0.1, 0.65, above));
                        float sideFade = smoothstep(0.0, 0.15, x) * smoothstep(1.0, 0.85, x);
                        float a = body * rays * folds * sideFade * smoothstep(0.0, 0.025, above) * uOpacity;
                        gl_FragColor = vec4(col * a * 0.1, 1.0);
                    }
                `}),et=new xt(me,Ke);et.frustumCulled=!1,et.renderOrder=-8,N.add(et)}return N})(),x=new wn;x.add(v,m,p);const b=new oe;let _=null,C=null,w=[0,0,0];function A(N,H=t.azim){t.elev=N,t.azim=H;const W=mn.degToRad(N),z=mn.degToRad(H);t.dir.set(Math.cos(W)*Math.cos(z),Math.sin(W),Math.cos(W)*Math.sin(z)),XM(N,t.sunColor),t.night=mn.smoothstep(-N,1,10),t.dusk=1-mn.smoothstep(N,2,22);const K=fu([0,1,0],[t.dir.x,t.dir.y,t.dir.z],yr);w=[K[0]*4,K[1]*4,K[2]*4],i.uMs.value.set(w[0],w[1],w[2]),f.uSunCol.value.copy(t.sunColor),f.uNight.value=t.night,i.uNight.value=t.night,m.material.uniforms.uOpacity.value=mn.smoothstep(-N,3,11)}let P=0,F=0;function y(N){P=N,i.uOver.value=N}function M(N=!1){const H=`${t.elev.toFixed(2)}|${t.azim.toFixed(1)}|${P.toFixed(2)}`;if(H===_&&!N)return!1;_=H;const W=r.getRenderTarget();if(r.setRenderTarget(n),r.render(a,o),r.setRenderTarget(W),D(0,1,0,b),f.uAmbient.value.copy(b).multiplyScalar(1.4),N||C===null||Math.abs(t.elev-C)>.6||Math.abs(P-F)>.04){C=t.elev,F=P;const z=l;return r.setRenderTarget(u),r.render(d,o),r.setRenderTarget(W),l=c.fromEquirectangular(u.texture),z&&z.dispose(),!0}return!1}function D(N,H,W,z=new oe){const K=fu([N,Math.max(H,.0015),W],[t.dir.x,t.dir.y,t.dir.z],yr,w),q=t.night*(.4+.6*mn.smoothstep(H,-.1,.6));if(z.setRGB(K[0]+.0045*q,K[1]+.007*q,K[2]+.015*q),P>0){const de=fu([0,1,0],[t.dir.x,t.dir.y,t.dir.z],yr,w),me=((de[0]*.2126+de[1]*.7152+de[2]*.0722)*1.15+4e-4)*(1+2*Math.max(H,0))/3;z.lerp(new oe(.93*me,.96*me,me),P)}return z}return{group:x,sky:v,stars:m,state:t,uniforms:f,pano:n,get env(){return l?l.texture:null},ambient:b,skyAt:D,setSun:A,setOvercast:y,bake:M,update(N){f.uTime.value=N,m.material.uniforms.uTime.value=N;const H=1-mn.smoothstep(P,.2,.7);m.material.uniforms.uOpacity.value=mn.smoothstep(-t.elev,3,11)*H,m.visible=m.material.uniforms.uOpacity.value>.005;const W=mn.smoothstep(t.night,.55,.95)*H;p.visible=W>.01;for(const z of p.children)z.material.uniforms.uTime.value=N,z.material.uniforms.uOpacity.value=W}}}const Li={abyss:new oe("#05080c"),deep:new oe("#080d15"),horizon:new oe("#141a2d"),violet:new oe("#7c469c"),lavender:new oe("#d6baec"),cardinal:new oe("#f2c230"),moon:new oe("#eef3ff"),steel:new oe("#3f5678"),ice:new oe("#c9d7ee")};new T(-.55,.32,-.77).normalize();const Uu=40,zc=12;function jM(r){return()=>{r|=0,r=r+1831565813|0;let e=Math.imul(r^r>>>15,1|r);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function YM(r=256){const e=jM(11),t=[];for(let h=0;h<72;h++){const d=.5+(e()-.5)*2.4,f=2+Math.pow(e(),1.7)*44,g=Math.round(Math.cos(d)*f),v=Math.round(Math.sin(d)*f);if(!g&&!v)continue;const m=Math.hypot(g,v);t.push({kx:g,ky:v,a:1/Math.pow(m,1.35),ph:e()*Math.PI*2})}const n=new Float32Array(r*r),i=new Float32Array(r*r),s=new Float32Array(r*r);let a=0,o=0;const c=Math.PI*2;for(let h=0;h<r;h++)for(let d=0;d<r;d++){let f=0,g=0,v=0;for(const p of t){const x=c*(p.kx*d+p.ky*h)/r+p.ph,b=Math.cos(x);f+=p.a*p.kx*b,g+=p.a*p.ky*b,v+=p.a*Math.sin(x)}const m=h*r+d;n[m]=f,i[m]=g,s[m]=v,a=Math.max(a,Math.abs(f),Math.abs(g)),o=Math.max(o,Math.abs(v))}const l=new Uint8Array(r*r*4);for(let h=0;h<r*r;h++)l[h*4]=Math.round(n[h]/a*127.5+127.5),l[h*4+1]=Math.round(i[h]/a*127.5+127.5),l[h*4+2]=Math.round(s[h]/o*127.5+127.5),l[h*4+3]=255;const u=new ni(l,r,r,vn);return u.wrapS=u.wrapT=bi,u.magFilter=Ct,u.minFilter=Gn,u.generateMipmaps=!0,u.anisotropy=8,u.colorSpace=fi,u.needsUpdate=!0,u}function KM(r,e,t){const i=Math.pow(t/.35,1/r),s=[0,0,0],a=[];for(let c=1;c<=r;c++){const l=.35*Math.pow(i,c-1);for(let u=0;u<e;u++){const h=u/e*Math.PI*2;s.push(Math.cos(h)*l,0,Math.sin(h)*l)}}for(let c=0;c<e;c++)a.push(0,1+(c+1)%e,1+c);for(let c=1;c<r;c++){const l=1+(c-1)*e,u=1+c*e;for(let h=0;h<e;h++){const d=(h+1)%e;a.push(l+h,l+d,u+h,l+d,u+d,u+h)}}const o=new je;return o.setAttribute("position",new Ie(s,3)),o.setIndex(a),o}function JM({lowPower:r=!1}={}){const e=KM(r?150:210,r?160:256,36e3),t=[];for(let o=0;o<Uu;o++)t.push(new ft(0,0,-999,0));const n=[];for(let o=0;o<zc;o++)n.push(new ft(0,0,-999,0));const i={uTime:{value:0},uAmp:{value:1},uCenter:{value:new Q},uCam:{value:new T},uWaves:{value:YM(r?128:256)},uPano:{value:null},uReflect:{value:null},uReflectMatrix:{value:new ze},uReflectOn:{value:1},uSun:{value:new T(0,1,0)},uSunCol:{value:new oe(1,1,1)},uSunPower:{value:22},uBody:{value:new oe(.004,.018,.026)},uNight:{value:0},uFog:{value:5200},uDim:{value:1},uBoat:{value:new Q},uBoatDir:{value:new Q(1,0)},uBoatSpeed:{value:0},uBoatOn:{value:1},uWake:{value:t},uRipple:{value:n},uSweep:{value:1},uSweepAngle:{value:0},uLidar:{value:new oe("#9fd4ff")},uGlit:{value:1},uRain:{value:0},uChop:{value:1}},s=new Mt({uniforms:i,vertexShader:`
            uniform float uTime; uniform float uAmp; uniform vec2 uCenter; uniform vec3 uCam;
            varying vec3 vPos; varying vec2 vSlope; varying float vH;
            ${zM}
            void main() {
                vec3 p = position + vec3(uCenter.x, 0.0, uCenter.y);
                // swells fade out far away, where they would only shimmer
                float far = 1.0 - smoothstep(220.0, 1600.0, length(p.xz - uCam.xz));
                vec3 w = waveH(p.xz, uTime, uAmp * far);
                p.y += w.x;
                vSlope = w.yz;
                vH = w.x;
                vPos = p;
                gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
            }
        `,fragmentShader:`
            ${Ma}
            #define WAKE_N ${Uu}
            #define RIPPLE_N ${zc}
            uniform float uTime; uniform vec3 uCam; uniform sampler2D uWaves; uniform sampler2D uPano;
            uniform sampler2D uReflect; uniform mat4 uReflectMatrix; uniform float uReflectOn;
            uniform vec3 uSun; uniform vec3 uSunCol; uniform float uSunPower; uniform vec3 uBody;
            uniform float uNight; uniform float uFog; uniform float uDim;
            uniform vec2 uBoat; uniform vec2 uBoatDir; uniform float uBoatSpeed; uniform float uBoatOn;
            uniform vec4 uWake[WAKE_N]; uniform vec4 uRipple[RIPPLE_N];
            uniform float uSweep; uniform float uSweepAngle; uniform vec3 uLidar; uniform float uGlit;
            uniform float uRain; uniform float uChop;
            varying vec3 vPos; varying vec2 vSlope; varying float vH;

            float rh(vec2 q) { return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
            vec3 sky(vec3 d) { return texture2D(uPano, panoUV(normalize(vec3(d.x, max(d.y, 0.002), d.z)))).rgb; }

            void main() {
                vec3 toCam = uCam - vPos;
                float dist = length(toCam);
                vec3 V = toCam / dist;

                // small waves, at three scales, fading into calm far away
                vec2 p = vPos.xz;
                vec3 w1 = texture2D(uWaves, p / 34.0 + vec2(0.011, 0.006) * uTime).xyz * 2.0 - 1.0;
                vec3 w2 = texture2D(uWaves, p / 9.5 + vec2(-0.019, 0.013) * uTime).xyz * 2.0 - 1.0;
                vec3 w3 = texture2D(uWaves, p / 140.0 + vec2(0.003, -0.002) * uTime).xyz * 2.0 - 1.0;
                float near = 1.0 / (1.0 + dist * 0.0035);
                vec2 slope = vSlope + (w1.xy * 0.15 + w2.xy * 0.12 * near + w3.xy * 0.045) * (0.3 + 0.7 * near) * uChop;

                // raindrops: little rings spreading where each drop lands (close by; far off they blur into a rough sheen)
                if (uRain > 0.01) {
                    float rn = 1.0 - smoothstep(25.0, 140.0, dist);
                    if (rn > 0.0) {
                        for (int layer = 0; layer < 2; layer++) {
                            vec2 rp = p * (layer == 0 ? 1.6 : 2.3) + float(layer) * 17.3;
                            vec2 base = floor(rp);
                            for (int i = -1; i <= 1; i++) {
                                for (int j = -1; j <= 1; j++) {
                                    vec2 cell = base + vec2(float(i), float(j));
                                    float h = rh(cell);
                                    if (h > uRain * 0.9 + 0.1) continue;
                                    vec2 c = cell + vec2(rh(cell + 1.7), rh(cell + 3.1));
                                    float tt = fract(uTime * (0.9 + h * 0.6) + h * 7.0);
                                    vec2 dd = rp - c;
                                    float l = length(dd) + 1e-4;
                                    float R = tt * 0.75;
                                    float ring = exp(-pow((l - R) * 16.0, 2.0)) * (1.0 - tt) * (1.0 - tt);
                                    slope += (dd / l) * ring * 0.55 * rn;
                                }
                            }
                        }
                    }
                }
                float foamNoise = w1.z * 0.5 + w2.z * 0.5;

                // ripples where the water was touched
                float rippleFoam = 0.0;
                for (int i = 0; i < RIPPLE_N; i++) {
                    vec4 r = uRipple[i];
                    float age = uTime - r.z;
                    if (age < 0.0 || age > 6.0) continue;
                    vec2 d = p - r.xy;
                    float l = length(d) + 1e-4;
                    float R = age * 3.2;
                    float x = l - R;
                    float env = exp(-x * x * 0.9) * r.w * (1.0 - age / 6.0) / (1.0 + R * 0.25);
                    slope += (d / l) * cos(x * 5.0) * env * 0.35;
                    rippleFoam += exp(-x * x * 6.0) * env * 0.5 * smoothstep(1.4, 0.0, age);
                }

                vec3 N = normalize(vec3(-slope.x, 1.0, -slope.y));
                if (dot(N, V) < 0.02) N = normalize(N + V * (0.02 - dot(N, V)));

                // how much is mirrored (Schlick, water F0 = 0.02)
                float cosT = clamp(dot(N, V), 0.0, 1.0);
                float F = 0.02 + 0.98 * pow(1.0 - cosT, 5.0);

                // the mirror image: sky from the panorama, the world from the reflection render
                vec3 R = reflect(-V, N);
                vec3 refl = sky(R);
                if (uReflectOn > 0.0) {
                    vec4 rc = uReflectMatrix * vec4(vPos.x, 0.0, vPos.z, 1.0);
                    vec2 ruv = rc.xy / rc.w + slope * vec2(0.035, 0.05) / (1.0 + dist * 0.012);
                    ruv = clamp(ruv, 0.001, 0.999);
                    // a few taps: the mirror is never perfectly sharp, and its edges don't show the pixels
                    // (weighted by coverage: where nothing was drawn the colour means nothing)
                    vec2 px = 1.3 / vec2(textureSize(uReflect, 0));
                    vec4 m0 = texture2D(uReflect, ruv);
                    vec4 m1 = texture2D(uReflect, ruv + vec2(px.x, px.y));
                    vec4 m2 = texture2D(uReflect, ruv + vec2(-px.x, px.y));
                    vec4 m3 = texture2D(uReflect, ruv + vec2(px.x, -px.y));
                    vec4 m4 = texture2D(uReflect, ruv + vec2(-px.x, -px.y));
                    float a0 = clamp(m0.a, 0.0, 1.0), a1 = clamp(m1.a, 0.0, 1.0), a2 = clamp(m2.a, 0.0, 1.0), a3 = clamp(m3.a, 0.0, 1.0), a4 = clamp(m4.a, 0.0, 1.0);
                    vec3 rgb = m0.rgb * a0 * 0.4 + (m1.rgb * a1 + m2.rgb * a2 + m3.rgb * a3 + m4.rgb * a4) * 0.15;
                    float cov = a0 * 0.4 + (a1 + a2 + a3 + a4) * 0.15;
                    refl = mix(refl, rgb / max(cov, 1e-3), cov * uReflectOn);
                }

                // the water itself: dark fjord water, lit by the sky
                vec3 body = uBody;
                // light through the crests when you look towards the sun
                vec2 sunH = normalize(uSun.xz + 1e-5);
                float back = pow(max(dot(-V.xz / max(length(V.xz), 1e-4), sunH), 0.0), 4.0);
                body += vec3(0.02, 0.09, 0.08) * uSunCol * back * smoothstep(-0.2, 0.6, vH) * (1.0 - uNight) * 0.5;

                vec3 col = mix(body, refl, F);

                // sun glitter
                vec3 Hh = normalize(V + uSun);
                float nh = max(dot(N, Hh), 0.0);
                float glit = pow(nh, 1400.0) * 22.0 + pow(nh, 160.0) * 0.35;
                col += uSunCol * uSunPower * glit * F * 3.0 * step(0.0, uSun.y) * uGlit;

                // the water is darker right against the hulls (they shade it and hide the sky)
                if (uBoatOn > 0.0) {
                    vec2 d0 = p - uBoat;
                    vec2 lq = vec2(dot(d0, uBoatDir), dot(d0, vec2(-uBoatDir.y, uBoatDir.x)));
                    float contact = 0.0;
                    for (int k = 0; k < 2; k++) {
                        float side = k == 0 ? 1.84 : -1.84;
                        vec2 q = abs(vec2(lq.x, lq.y - side)) - vec2(2.75, 0.45);
                        float dd = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - 0.34;
                        contact = max(contact, exp(-max(dd, 0.0) * 1.6));
                    }
                    // and between the hulls, under the frame
                    vec2 qm = abs(lq) - vec2(2.2, 1.0);
                    float dm = length(max(qm, 0.0)) + min(max(qm.x, qm.y), 0.0);
                    contact = max(contact, 0.6 * exp(-max(dm, 0.0) * 1.2));
                    col *= 1.0 - 0.38 * contact * uBoatOn;
                }

                // foam: around the two hulls and behind the boat
                float foam = rippleFoam;
                if (uBoatOn > 0.0) {
                    vec2 d = p - uBoat;
                    vec2 lp = vec2(dot(d, uBoatDir), dot(d, vec2(-uBoatDir.y, uBoatDir.x)));
                    for (int k = 0; k < 2; k++) {
                        float side = k == 0 ? 1.85 : -1.85;
                        vec2 e = vec2(lp.x / 3.3, (lp.y - side) / 0.62);
                        float ee = length(e);
                        foam += smoothstep(1.55, 1.0, ee) * smoothstep(0.85, 1.02, ee) * (0.22 + uBoatSpeed * 1.4);
                    }
                    foam *= uBoatOn;
                }
                for (int i = 0; i < WAKE_N; i++) {
                    vec4 w = uWake[i];
                    float age = uTime - w.z;
                    if (age < 0.0 || age > 7.0) continue;
                    float r = 1.2 + age * 1.1;
                    float l = length(p - w.xy);
                    float ring = exp(-pow((l - r) / (0.7 + age * 0.35), 2.0)) + exp(-pow(l / (1.6 + age * 0.5), 2.0)) * 0.7;
                    foam += ring * w.w * (1.0 - age / 7.0) * 0.55;
                }
                foam = clamp(foam, 0.0, 1.4) * smoothstep(-0.35, 0.45, foamNoise + foam * 0.35);
                vec3 foamCol = (uSunCol * max(uSun.y, 0.0) * uSunPower * 0.035 + sky(vec3(0.0, 1.0, 0.0)) * 0.9);
                col = mix(col, foamCol, clamp(foam, 0.0, 0.9));

                // LiDAR returns: rings and a turning sweep around the boat, clearer at night
                float lidarK = uSweep * (0.18 + 0.82 * uNight);
                if (lidarK > 0.001) {
                    vec2 d = p - uBoat;
                    float r = length(d);
                    float ringR = mod(uTime * 11.0, 70.0);
                    float ring = exp(-pow((r - ringR) * 0.45, 2.0)) * (1.0 - ringR / 70.0);
                    float ang = atan(d.y, d.x);
                    float diff = mod(uSweepAngle - ang, 6.28318);
                    float sw = exp(-diff * 3.2) * smoothstep(55.0, 4.0, r);
                    vec2 cell = fract(p * 0.9) - 0.5;
                    float dots = 1.0 - smoothstep(0.02, 0.11, length(cell));
                    col += uLidar * (ring * 0.9 + sw) * (0.05 + dots * 0.5) * lidarK;
                }

                // the air between you and the water
                vec3 air = sky(vec3(-V.x, 0.0, -V.z));
                float fog = 1.0 - exp(-dist / uFog);
                col = mix(col, air, fog * mix(1.0, 0.92, clamp(uFog / 5200.0, 0.0, 1.0)));

                gl_FragColor = vec4(col * uDim, 1.0);
            }
        `}),a=new xt(e,s);return a.frustumCulled=!1,a.renderOrder=-5,a}function ZM(){const r=new Ya(48,24,-.16,.32);r.rotateX(-Math.PI/2);const e=new Mt({transparent:!0,depthWrite:!1,side:Ln,blending:gn,uniforms:{uOpacity:{value:1},uColor:{value:new oe("#9fd4ff")}},vertexShader:"varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
            uniform float uOpacity; uniform vec3 uColor; varying vec2 vP;
            void main(){ float r = length(vP); float a = (1.0 - r / 48.0); gl_FragColor = vec4(uColor, a * a * 0.07 * uOpacity); }
        `});return new xt(r,e)}const Qo={uPano:{value:null},uFog:{value:36e3},uNight:{value:0}};function sw(r,{windows:e=!1,terrain:t=!1}={}){const n=e==="facade";return r.onBeforeCompile=i=>{Object.assign(i.uniforms,Qo),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vAirPos;
varying vec3 vAirN;`+(e?`
attribute float aRoof;
varying float vRoof;`:"")+(n?`
attribute vec2 aFac;
varying vec2 vFac;`:"")).replace("#include <project_vertex>",`#include <project_vertex>
                vec4 airWp = vec4(transformed, 1.0);
                vec3 airN = objectNormal;
                #ifdef USE_INSTANCING
                    airWp = instanceMatrix * airWp;
                    airN = mat3(instanceMatrix) * airN;
                #endif
                vAirPos = (modelMatrix * airWp).xyz;
                vAirN = normalize(mat3(modelMatrix) * airN);
                ${e?"vRoof = aRoof;":""}
                ${n?"vFac = aFac;":""}`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
                ${Ma}
                uniform sampler2D uPano; uniform float uFog; uniform float uNight;
                varying vec3 vAirPos; varying vec3 vAirN;
                ${e?"varying float vRoof;":""}
                ${n?"varying vec2 vFac;":""}
                float airHash(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 17853.853); }
                float airNoise(vec2 p) {
                    vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
                    return mix(mix(airHash(i), airHash(i + vec2(1.0, 0.0)), f.x), mix(airHash(i + vec2(0.0, 1.0)), airHash(i + vec2(1.0, 1.0)), f.x), f.y);
                }`).replace("#include <color_fragment>",t?`#include <color_fragment>
                    {
                        // trees: dark clumps and lighter gaps at a few sizes, fading out far away
                        vec2 q = vAirPos.xz;
                        float camD = length(vAirPos - cameraPosition);
                        float n = airNoise(q / 14.0) * 0.45 + airNoise(q / 55.0) * 0.35 + airNoise(q / 260.0) * 0.2;
                        float k = smoothstep(9000.0, 1500.0, camD) * smoothstep(2.0, 12.0, vAirPos.y);
                        diffuseColor.rgb *= mix(1.0, 0.55 + n * 0.95, k);
                    }`:"#include <color_fragment>").replace("#include <emissivemap_fragment>",n?`#include <emissivemap_fragment>
                    {
                        // windows in rows on each wall: white frames, dark glass, light at night
                        float wall = (1.0 - step(0.5, abs(vAirN.y))) * (1.0 - vRoof);
                        vec2 cs = vec2(6.5, 9.0);
                        vec2 cell = floor(vFac / cs);
                        vec2 f = fract(vFac / cs);
                        float inX = step(0.3, f.x) * step(f.x, 0.7);
                        float inY = step(0.32, f.y) * step(f.y, 0.8);
                        float frX = step(0.25, f.x) * step(f.x, 0.75);
                        float frY = step(0.27, f.y) * step(f.y, 0.85);
                        float win = inX * inY * step(0.5, vFac.y) * wall;
                        float frame = frX * frY * (1.0 - inX * inY) * step(0.5, vFac.y) * wall;
                        // a glazing bar across the middle
                        win *= 1.0 - step(abs(f.x - 0.5), 0.018);
                        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.8, 0.8, 0.78), frame);
                        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.02, 0.025, 0.03), win);
                        float on = step(0.42, airHash(cell + floor(vAirPos.xz / 23.0) * 7.0));
                        totalEmissiveRadiance += vec3(1.0, 0.66, 0.34) * win * on * uNight * 1.1;
                        // dark tarred planks under the floor line, darker roofs
                        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.55, (1.0 - step(0.5, vFac.y)) * wall);
                        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.8, smoothstep(0.35, 0.5, abs(fract(vFac.x * 1.6) - 0.5)) * wall * 0.5);
                    }`:e?`#include <emissivemap_fragment>
                    {
                        // lit windows at night, on the walls of the buildings
                        float wall = (1.0 - step(0.5, abs(vAirN.y))) * (1.0 - vRoof);
                        vec2 g = vec2(abs(vAirN.x) > abs(vAirN.z) ? vAirPos.z : vAirPos.x, vAirPos.y);
                        vec2 cell = floor(g / vec2(7.0, 9.5));
                        vec2 f = fract(g / vec2(7.0, 9.5));
                        float win = step(0.3, f.x) * step(f.x, 0.72) * step(0.35, f.y) * step(f.y, 0.78);
                        float on = step(0.76, airHash(cell + floor(vAirPos.xz / 40.0)));
                        totalEmissiveRadiance += vec3(1.0, 0.72, 0.42) * win * on * wall * uNight * 0.7;
                        // by day: dark glass in light frames, so the walls read as houses, not boxes
                        float frame = step(0.24, f.x) * step(f.x, 0.78) * step(0.29, f.y) * step(f.y, 0.84) * (1.0 - win);
                        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.78, 0.78, 0.75), frame * wall * 0.6);
                        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.035, 0.045, 0.055), win * wall * 0.85);
                        // facades a touch darker under the roofs
                        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.045, 0.045, 0.05), vRoof);
                    }`:"#include <emissivemap_fragment>").replace("#include <fog_fragment>",`#include <fog_fragment>
                {
                    vec3 airD = vAirPos - cameraPosition;
                    float airL = length(airD);
                    vec3 airV = airD / airL;
                    vec3 air = texture2D(uPano, panoUV(normalize(vec3(airV.x, max(airV.y, 0.0) * 0.35 + 0.004, airV.z)))).rgb;
                    gl_FragColor.rgb = mix(gl_FragColor.rgb, air, 1.0 - exp(-airL / uFog));
                }`)},r.customProgramCacheKey=()=>n?"air-facade":e?"air-windows":t?"air-terrain":"air",r}function yf(r,e){if(e===up)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Nc||e===Zu){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Nc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class QM extends An{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new iS(t)}),this.register(function(t){return new sS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new nS(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new rS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new eS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new vS(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=es.extractUrlBase(e);a=es.resolveURL(l,this.path)}else a=es.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new ii(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===wm){try{a[dt.KHR_BINARY_GLTF]=new bS(e)}catch(h){i&&i(h);return}s=JSON.parse(a[dt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new IS(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case dt.KHR_MATERIALS_UNLIT:a[h]=new tS;break;case dt.KHR_DRACO_MESH_COMPRESSION:a[h]=new xS(s,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:a[h]=new _S;break;case dt.KHR_MESH_QUANTIZATION:a[h]=new yS;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function $M(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class eS{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new oe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],qt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ba(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new wh(u),l.distance=h;break;case"spot":l=new Sh(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Pi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class tS{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return rn}extendParams(e,t,n){const i=[];e.color=new oe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],qt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Jt))}return Promise.all(i)}}class nS{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class iS{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Q(o,o)}return Promise.all(s)}}class sS{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class rS{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class aS{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],qt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Jt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class oS{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class cS{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new oe().setRGB(o[0],o[1],o[2],qt),Promise.all(s)}}class lS{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class uS{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new oe().setRGB(o[0],o[1],o[2],qt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Jt)),Promise.all(s)}}class hS{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class dS{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class fS{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class pS{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class mS{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gS{constructor(e){this.name=dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class vS{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==qn.TRIANGLES&&l.mode!==qn.TRIANGLE_STRIP&&l.mode!==qn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const v=new ze,m=new T,p=new cn,x=new T(1,1,1),b=new lh(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&x.fromBufferAttribute(c.SCALE,_),b.setMatrixAt(_,v.compose(m,p,x));for(const _ in c)if(_==="_COLOR_0"){const C=c[_];b.instanceColor=new Vs(C.array,C.itemSize,C.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);mt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const wm="glTF",aa=12,Mf={JSON:1313821514,BIN:5130562};class bS{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,aa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-aa,s=new DataView(e,aa);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===Mf.JSON){const l=new Uint8Array(e,aa+a,o);this.content=n.decode(l)}else if(c===Mf.BIN){const l=aa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class xS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=Fu[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Fu[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Pr[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const v=f.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}h(f)},o,l,qt,d)})})}}class _S{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class yS{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}}class Am extends Vr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,v=g-l,m=-2*f+3*d,p=f-d,x=1-m,b=p-d+h;for(let _=0;_!==o;_++){const C=a[v+_+o],w=a[v+_+c]*u,A=a[g+_+o],P=a[g+_]*u;s[_]=x*C+b*w+m*A+p*P}return s}}const MS=new cn;class SS extends Am{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return MS.fromArray(s).normalize().toArray(s),s}}const qn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sf={9728:Zt,9729:Ct,9984:Vc,9985:Tr,9986:Is,9987:Gn},wf={33071:Hn,33648:Ir,10497:bi},pu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wS={CUBICSPLINE:void 0,LINEAR:Nr,STEP:Dr},mu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function AS(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Gr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vi})),r.DefaultMaterial}function ws(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function TS(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function ES(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function RS(r){let e;const t=r.extensions&&r.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gu(t.attributes):e=r.indices+":"+gu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+gu(r.targets[n]);return e}function gu(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ou(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function CS(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const PS=new ze;class IS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $M,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator!="undefined"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||s&&a<98?this.textureLoader=new um(this.options.manager):this.textureLoader=new bm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ii(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ws(s,o,i),Pi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())s(u,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(es.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=pu[i.type],o=Pr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Ze(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=pu[i.type],l=Pr[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(f&&f!==h){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(x);b||(v=new l(o,p*f,i.count*f/u),b=new Xa(v,f/u),t.cache.add(x,b)),m=new ns(b,c,d%f/u,g)}else o===null?v=new l(i.count*c):v=new l(o,d,i.count*c),m=new Ze(v,c,g);if(i.sparse!==void 0){const p=pu.SCALAR,x=Pr[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,C=new x(a[1],b,i.sparse.count*p),w=new l(a[2],_,i.sparse.count*c);o!==null&&(m=new Ze(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=C.length;A<P;A++){const F=C[A];if(m.setX(F,w[A*c]),c>=2&&m.setY(F,w[A*c+1]),c>=3&&m.setZ(F,w[A*c+2]),c>=4&&m.setW(F,w[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=Sf[d.magFilter]||Ct,u.minFilter=Sf[d.minFilter]||Gn,u.wrapS=wf[d.wrapS]||bi,u.wrapT=wf[d.wrapT]||bi,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Nt(v);m.needsUpdate=!0,d(m)}),t.load(es.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Pi(h,a),h.userData.mimeType=a.mimeType||CS(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[dt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new al,$t.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new bn,$t.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Gr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[dt.KHR_MATERIALS_UNLIT]){const h=i[dt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new oe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],qt),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Jt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Ln);const u=s.alphaMode||mu.OPAQUE;if(u===mu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===mu.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==rn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Q(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==rn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==rn){const h=s.emissiveFactor;o.emissive=new oe().setRGB(h[0],h[1],h[2],qt)}return s.emissiveTexture!==void 0&&a!==rn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Jt)),Promise.all(l).then(function(){const h=new a(o);return s.name&&(h.name=s.name),Pi(h,s),t.associations.set(h,{materials:e}),s.extensions&&ws(i,h,s),h})}createUniqueName(e){const t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Af(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=RS(l),h=i[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Af(new je,l,t),i[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?AS(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const v=u[f],m=a[f];let p;const x=l[f];if(m.mode===qn.TRIANGLES||m.mode===qn.TRIANGLE_STRIP||m.mode===qn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new ch(v,x):new xt(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===qn.TRIANGLE_STRIP?p.geometry=yf(p.geometry,Zu):m.mode===qn.TRIANGLE_FAN&&(p.geometry=yf(p.geometry,Nc));else if(m.mode===qn.LINES)p=new jn(v,x);else if(m.mode===qn.LINE_STRIP)p=new Bi(v,x);else if(m.mode===qn.LINE_LOOP)p=new uh(v,x);else if(m.mode===qn.POINTS)p=new _i(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ES(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Pi(p,s),m.extensions&&ws(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&ws(i,h[0],s),h[0];const d=new wn;s.extensions&&ws(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(mn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ys(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new ze;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new qa(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],v=f.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],v=h[3],m=h[4],p=[];for(let x=0,b=d.length;x<b;x++){const _=d[x],C=f[x],w=g[x],A=v[x],P=m[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const F=n._createAnimationTracks(_,C,w,A,P);if(F)for(let y=0;y<F.length;y++)p.push(F[y])}return new Or(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,PS)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new rl:l.length>1?u=new wn:l.length===1?u=l[0]:u=new mt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=a),Pi(u,s),s.extensions&&ws(n,u,s),s.matrix!==void 0){const h=new ze;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new wn;n.name&&(s.name=i.createUniqueName(n.name)),Pi(s,n),n.extensions&&ws(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof $t||d instanceof Nt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];Ji[s.path]===Ji.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Ji[s.path]){case Ji.weights:l=Xs;break;case Ji.rotation:l=qs;break;case Ji.position:case Ji.scale:l=js;break;default:switch(n.itemSize){case 1:l=Xs;break;case 2:case 3:default:l=js;break}break}const u=i.interpolation!==void 0?wS[i.interpolation]:Nr,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Ji[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ou(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof qs?SS:Am;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function LS(r,e,t){const n=e.attributes,i=new ln;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),o.normalized){const u=Ou(Pr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new T,c=new T;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=Ou(Pr[d.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new un;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Af(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=Fu[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return bt.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),Pi(r,e),LS(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?TS(r,e.targets,t):r})}var DS=function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),b=0;b<p.length;++b){var _=p.charCodeAt(b);x[b]=_>96?_-97:_>64?_-39:_+4}for(var C=0,b=0;b<p.length;++b)x[C++]=x[b]<60?n[x[b]]:(x[b]-60)*64+x[++b];return x.buffer.slice(0,C)}function c(p,x,b,_,C,w){var A=s.exports.sbrk,P=b+3&-4,F=A(P*_),y=A(C.length),M=new Uint8Array(s.exports.memory.buffer);M.set(C,y);var D=p(F,b,_,y,C.length);if(D==0&&w&&w(F,P,_),x.set(M.subarray(F,F+b*_)),A(F-A(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(b){var _=b.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function g(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),b=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(b),C=0;C<p;++C)h[C]=f(_);URL.revokeObjectURL(_)}function v(p,x,b,_,C){for(var w=h[0],A=1;A<h.length;++A)h[A].pending<w.pending&&(w=h[A]);return new Promise(function(P,F){var y=new Uint8Array(b),M=d++;w.pending+=p,w.requests[M]={resolve:P,reject:F},w.object.postMessage({id:M,count:p,size:x,source:y,mode:_,filter:C},[y.buffer])})}function m(p){a.then(function(){var x=p.data;try{var b=new Uint8Array(x.count*x.size);c(s.exports[x.mode],b,x.count,x.size,x.source,s.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:b},[b.buffer])}catch(_){self.postMessage({id:x.id,count:x.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,x,b,_,C){c(s.exports.meshopt_decodeVertexBuffer,p,x,b,_,s.exports[l[C]])},decodeIndexBuffer:function(p,x,b,_){c(s.exports.meshopt_decodeIndexBuffer,p,x,b,_)},decodeIndexSequence:function(p,x,b,_){c(s.exports.meshopt_decodeIndexSequence,p,x,b,_)},decodeGltfBuffer:function(p,x,b,_,C,w){c(s.exports[u[C]],p,x,b,_,s.exports[l[w]])},decodeGltfBufferAsync:function(p,x,b,_,C){return h.length>0?v(p,x,b,u[_],l[C]):a.then(function(){var w=new Uint8Array(p*x);return c(s.exports[u[_]],w,p,x,b,s.exports[l[C]]),w})}}}();const Ft=new Sn,qo=new T,Tf=new Q,Ef=new Q,Rf=new Q;class NS{constructor(e){this.geometry=e.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.indexAttribute,t=this.positionAttribute,n=this.weightAttribute,i=e?e.count/3:t.count/3,s=new Float32Array(i);for(let c=0;c<i;c++){let l=1,u=3*c,h=3*c+1,d=3*c+2;e&&(u=e.getX(u),h=e.getX(h),d=e.getX(d)),n&&(l=n.getX(u)+n.getX(h)+n.getX(d)),Ft.a.fromBufferAttribute(t,u),Ft.b.fromBufferAttribute(t,h),Ft.c.fromBufferAttribute(t,d),l*=Ft.getArea(),s[c]=l}const a=new Float32Array(i);let o=0;for(let c=0;c<i;c++)o+=s[c],a[c]=o;return this.distribution=a,this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,n,i){const s=this.sampleFaceIndex();return this.sampleFace(s,e,t,n,i)}sampleFaceIndex(){const e=this.distribution[this.distribution.length-1];return this.binarySearch(this.randomFunction()*e)}binarySearch(e){const t=this.distribution;let n=0,i=t.length-1,s=-1;for(;n<=i;){const a=Math.ceil((n+i)/2);if(a===0||t[a-1]<=e&&t[a]>e){s=a;break}else e<t[a]?i=a-1:n=a+1}return s}sampleFace(e,t,n,i,s){let a=this.randomFunction(),o=this.randomFunction();a+o>1&&(a=1-a,o=1-o);const c=this.indexAttribute;let l=e*3,u=e*3+1,h=e*3+2;return c&&(l=c.getX(l),u=c.getX(u),h=c.getX(h)),Ft.a.fromBufferAttribute(this.positionAttribute,l),Ft.b.fromBufferAttribute(this.positionAttribute,u),Ft.c.fromBufferAttribute(this.positionAttribute,h),t.set(0,0,0).addScaledVector(Ft.a,a).addScaledVector(Ft.b,o).addScaledVector(Ft.c,1-(a+o)),n!==void 0&&(this.normalAttribute!==void 0?(Ft.a.fromBufferAttribute(this.normalAttribute,l),Ft.b.fromBufferAttribute(this.normalAttribute,u),Ft.c.fromBufferAttribute(this.normalAttribute,h),n.set(0,0,0).addScaledVector(Ft.a,a).addScaledVector(Ft.b,o).addScaledVector(Ft.c,1-(a+o)).normalize()):Ft.getNormal(n)),i!==void 0&&this.colorAttribute!==void 0&&(Ft.a.fromBufferAttribute(this.colorAttribute,l),Ft.b.fromBufferAttribute(this.colorAttribute,u),Ft.c.fromBufferAttribute(this.colorAttribute,h),qo.set(0,0,0).addScaledVector(Ft.a,a).addScaledVector(Ft.b,o).addScaledVector(Ft.c,1-(a+o)),i.r=qo.x,i.g=qo.y,i.b=qo.z),s!==void 0&&this.uvAttribute!==void 0&&(Tf.fromBufferAttribute(this.uvAttribute,l),Ef.fromBufferAttribute(this.uvAttribute,u),Rf.fromBufferAttribute(this.uvAttribute,h),s.set(0,0).addScaledVector(Tf,a).addScaledVector(Ef,o).addScaledVector(Rf,1-(a+o))),this}}const Es=.62,ha=-.62;function US({renderer:r,lowPower:e,onProgress:t,url:n}){const i=new wn,s={uCut:{value:ha},uGhost:{value:0},uTime:{value:0},uEdgeCol:{value:Li.ice.clone()},uEdgeGain:{value:1},uWater:{value:0},uWet:{value:1},uWetAll:{value:0}},a={uCut:s.uCut,uTime:s.uTime,uAssemble:{value:0},uOpacity:{value:1},uGain:{value:1},uPx:{value:1},uProj:{value:800},uHi:{value:new T(99,99,99)},uHiOn:{value:0},uHiR:{value:.2},uLav:{value:Li.lavender},uYel:{value:Li.cardinal},uVio:{value:Li.violet}};function o(m,p){const x=m.clone();return x.onBeforeCompile=b=>{Object.assign(b.uniforms,s,{uMeshToModel:{value:p}}),b.vertexShader=b.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uMeshToModel;
varying vec3 vModelPos;
varying float vWorldY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vModelPos = (uMeshToModel * vec4(transformed, 1.0)).xyz;
vWorldY = (modelMatrix * vec4(transformed, 1.0)).y;`),b.fragmentShader=b.fragmentShader.replace("#include <common>",`#include <common>
uniform float uCut;
uniform float uGhost;
uniform float uTime;
uniform vec3 uEdgeCol;
uniform float uEdgeGain;
uniform float uWater;
uniform float uWet;
uniform float uWetAll;
varying vec3 vModelPos;
varying float vWorldY;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
                    {
                        // wet at the waterline: darker and glossy, drying a little above it (with a ragged edge)
                        float h = vWorldY - uWater;
                        float ragged = 0.05 * sin(vModelPos.x * 90.0 + vModelPos.z * 40.0) + 0.03 * sin(vModelPos.x * 230.0);
                        float wet = max((1.0 - smoothstep(0.02, 0.22 + ragged, h)) * uWet, uWetAll * 0.6);
                        diffuseColor.rgb *= mix(1.0, 0.8, wet);
                        roughnessFactor = mix(roughnessFactor, 0.12, wet);
                    }`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
float side = vModelPos.x - uCut;
if (side > 0.0 && uGhost < 0.5) discard;`).replace("#include <opaque_fragment>",`{
                        float ghostK = step(0.0, side) * uGhost;
                        float rim = pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 2.2);
                        outgoingLight = mix(outgoingLight, outgoingLight * 0.12 + uEdgeCol * (rim * 0.35 + 0.015) * uEdgeGain, ghostK);
                        float edge = exp(-pow(side * 110.0, 2.0));
                        outgoingLight += uEdgeCol * edge * 2.2 * uEdgeGain;
                    }
                    #include <opaque_fragment>`)},x.customProgramCacheKey=()=>"argus-cut",x}function c(m,p){const x=new Float32Array(p*3),b=new Float32Array(p*3),_=new Float32Array(p),C=new Float32Array(p),w=m.map(W=>(W.geometry.index?W.geometry.index.count:W.geometry.attributes.position.count)/3),A=w.reduce((W,z)=>W+z,0),P=new T,F=new T,y=new Q;let M=0;m.forEach((W,z)=>{const K=z===m.length-1?p-M:Math.round(p*w[z]/A),q=new NS(W).build(),de=W.userData.toModel,J=new st().getNormalMatrix(de),me=l(W.material.map);for(let Ke=0;Ke<K&&M<p;Ke++,M++){q.sample(P,F,void 0,y),P.applyMatrix4(de),F.applyMatrix3(J).normalize(),P.addScaledVector(F,.004),x.set([P.x,P.y,P.z],M*3);const et=Math.random()*Math.PI*2,Z=.4+Math.random()*1.1;b.set([Math.cos(et)*Z,.2+Math.random()*.9,Math.sin(et)*Z],M*3),_[M]=me?me(y.x,y.y):.7,C[M]=Math.random()}});const D=new je;D.setAttribute("position",new Ze(x,3)),D.setAttribute("aDir",new Ze(b,3)),D.setAttribute("aLum",new Ze(_,1)),D.setAttribute("aSeed",new Ze(C,1));const N=new Mt({transparent:!0,depthWrite:!1,blending:gn,uniforms:a,vertexShader:`
                uniform float uCut; uniform float uTime; uniform float uAssemble; uniform float uPx; uniform float uProj;
                uniform vec3 uHi; uniform float uHiOn; uniform float uHiR;
                uniform vec3 uLav; uniform vec3 uYel; uniform vec3 uVio; uniform float uOpacity; uniform float uGain;
                attribute vec3 aDir; attribute float aLum; attribute float aSeed;
                varying vec3 vCol; varying float vA;
                void main() {
                    vec3 p = position;
                    float t = clamp((uAssemble * 1.6 - aSeed * 0.6), 0.0, 1.0);
                    t = 1.0 - pow(1.0 - t, 3.0);
                    p += aDir * (1.0 - t);
                    float side = position.x - uCut;
                    float cloud = smoothstep(-0.004, 0.004, side);
                    float edge = exp(-pow(side * 60.0, 2.0));
                    float hi = uHiOn * (1.0 - smoothstep(uHiR * 0.35, uHiR, distance(position, uHi)));
                    float twinkle = 0.75 + 0.25 * sin(uTime * 3.0 + aSeed * 40.0);
                    // cool white points with a touch of Marinor lilac
                    vec3 c = mix(vec3(0.42, 0.52, 0.74), mix(vec3(0.93, 0.95, 1.0), uLav, 0.25), 0.3 + aLum * 0.7);
                    c = mix(c, vec3(1.0), edge * 0.7);
                    c = mix(c, uYel * 2.2, hi);
                    vCol = c;
                    vA = (cloud * (0.45 + aLum * 0.7) * twinkle + edge * 1.2 + hi * 2.4) * uOpacity * uGain * (0.25 + 0.75 * t);
                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    float size = 0.0085 * (1.0 + edge * 1.3 + hi * 1.4) * (1.0 + (1.0 - t) * 0.8);
                    gl_PointSize = max(1.0, uPx * size * uProj / -mv.z);
                    gl_Position = projectionMatrix * mv;
                }
            `,fragmentShader:`
                varying vec3 vCol; varying float vA;
                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5 || vA < 0.002) discard;
                    float a = vA * (1.0 - d * 1.9);
                    gl_FragColor = vec4(vCol * a, 1.0);
                }
            `}),H=new _i(D,N);return H.frustumCulled=!1,H.renderOrder=6,H}function l(m){if(!m||!m.image)return null;try{const x=document.createElement("canvas");x.width=x.height=256;const b=x.getContext("2d",{willReadFrequently:!0});b.drawImage(m.image,0,0,256,256);const _=b.getImageData(0,0,256,256).data,C=m.flipY;return(w,A)=>{const P=Math.min(255,Math.max(0,Math.floor(w*256))),F=C?1-A:A,M=(Math.min(255,Math.max(0,Math.floor(F*256)))*256+P)*4;return(_[M]*.3+_[M+1]*.55+_[M+2]*.15)/255}}catch{return null}}let u=null;const h=new QM().setMeshoptDecoder(DS),d=n||(e?"media/models/argus-lite.glb":"media/models/argus.glb"),f=typeof window.__modelSource=="function"?window.__modelSource(e):null,v=(f?f.then(m=>new Promise((p,x)=>{const b=window.createImageBitmap;try{window.createImageBitmap=void 0}catch{}h.parse(m,"",p,x),window.createImageBitmap=b})):h.loadAsync(d,m=>m.total&&t&&t(m.loaded/m.total))).then(m=>{const p=m.scene,x=new ln().setFromObject(p);p.position.sub(x.getCenter(new T)),i.add(p),i.updateMatrixWorld(!0);const b=new ze().copy(i.matrixWorld).invert(),_=[];p.traverse(C=>{C.isMesh&&(C.userData.toModel=new ze().multiplyMatrices(b,C.matrixWorld),C.material.map&&(C.material.map.anisotropy=r.capabilities.getMaxAnisotropy()),C.material.envMapIntensity=1,_.push(C))}),u=c(_,e?16e3:42e3),_.forEach(C=>C.material=o(C.material,C.userData.toModel)),i.add(u)}).catch(m=>{console.warn("Argus model failed to load",m);const p=new xt(new rs(1,.2,.8),new Gr({color:13619168}));i.add(p),s.uCut.value=Es});return{model:i,uniforms:s,points:a,ready:v,get cloud(){return u}}}async function FS(r,{color:e="#f1f4f8",glow:t="#b9c9e6"}={}){const n="Big Shoulders Display";try{await document.fonts.load(`800 200px "${n}"`,r)}catch{}const i=r.toUpperCase(),s=420,a=document.createElement("canvas"),o=a.getContext("2d");o.font=`800 ${s*.86}px "${n}", Impact, sans-serif`;const c=Math.ceil(o.measureText(i).width)+160;a.width=Math.min(4096,c),a.height=s+160,o.font=`800 ${s*.86}px "${n}", Impact, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.shadowColor=t,o.shadowBlur=28,o.fillStyle=e,o.fillText(i,a.width/2,a.height/2+s*.04),o.shadowBlur=0,o.fillText(i,a.width/2,a.height/2+s*.04);const l=new hh(a);l.colorSpace=Jt,l.anisotropy=4;const u=a.width/a.height,h=new rn({map:l,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,color:new oe(.92,.94,.98),opacity:0}),d=new xt(new Oi(u,1),h);return d.renderOrder=8,d.userData.aspect=u,d}const Rs=new T(0,72,-170),hi=36,ei={trondheim:{lat:63.43,lon:10.4},sarasota:{lat:27.34,lon:-82.53}},Ar=Math.PI/180;function oa(r,e,t=1,n=new T){const i=r*Ar,s=e*Ar;return n.set(Math.cos(i)*Math.sin(s)*t,Math.sin(i)*t,Math.cos(i)*Math.cos(s)*t)}async function OS(){const[{feature:r},e]=await Promise.all([Zi(()=>import("./index-BnENo9bV.js"),[],import.meta.url),Zi(()=>import("./land-110m-R6gr8IEs.js"),[],import.meta.url)]),t=e.default||e,n=r(t,t.objects.land),i=1024,s=512,a=document.createElement("canvas");a.width=i,a.height=s;const o=a.getContext("2d",{willReadFrequently:!0});o.fillStyle="#fff";const c=[];for(const u of n.features){const h=u.geometry;h.type==="Polygon"?c.push(h.coordinates):h.type==="MultiPolygon"&&c.push(...h.coordinates)}for(const u of c)for(const h of[-360,0,360]){o.beginPath();for(const d of u){let f=null,g=0;d.forEach(([v,m],p)=>{if(f!==null){const C=v+g-f;C>180?g-=360:C<-180&&(g+=360)}const x=v+g;f=x;const b=(x+h+180)/360*i,_=(90-m)/180*s;p===0?o.moveTo(b,_):o.lineTo(b,_)}),o.closePath()}o.fill("evenodd")}const l=o.getImageData(0,0,i,s).data;return(u,h)=>{const d=Math.min(i-1,Math.max(0,Math.floor((h+180)/360*i))),f=Math.min(s-1,Math.max(0,Math.floor((90-u)/180*s)));return l[(f*i+d)*4]>127}}async function BS({lowPower:r}){const e=await OS(),t=new wn,n=new wn;t.position.copy(Rs),t.add(n);const i=r?26e3:6e4,s=[],a=[],o=[],c=new T,l=Math.PI*(3-Math.sqrt(5));for(let D=0;D<i;D++){const N=1-2*(D+.5)/i,H=Math.asin(N)/Ar;let W=D*l/Ar%360;W>180&&(W-=360);const z=e(H,W);!z&&D%9!==0||(oa(H,W,hi*(z?1.004:1),c),s.push(c.x,c.y,c.z),a.push(z?1:0),o.push(Math.random()))}const u=new je;u.setAttribute("position",new Ie(s,3)),u.setAttribute("aLand",new Ie(a,1)),u.setAttribute("aRnd",new Ie(o,1));const h={uOpacity:{value:0},uTime:{value:0},uPx:{value:1},uProj:{value:800},uHome:{value:oa(ei.trondheim.lat,ei.trondheim.lon,hi)},uIce:{value:Li.ice},uSteel:{value:Li.steel},uLav:{value:Li.lavender}},d=new _i(u,new Mt({transparent:!0,depthWrite:!1,blending:gn,uniforms:h,vertexShader:`
                attribute float aLand; attribute float aRnd;
                uniform float uTime; uniform float uPx; uniform float uProj; uniform vec3 uHome;
                uniform vec3 uIce; uniform vec3 uSteel; uniform vec3 uLav;
                varying vec3 vCol; varying float vA;
                void main() {
                    vec4 mv = modelViewMatrix * vec4(position, 1.0);
                    // points on the far side fade out
                    vec3 n = normalize(mat3(modelViewMatrix) * position);
                    float facing = clamp(dot(n, normalize(-mv.xyz)) * 1.6 + 0.2, 0.0, 1.0);
                    float near = 1.0 - smoothstep(2.0, 11.0, distance(position, uHome));
                    float tw = 0.8 + 0.2 * sin(uTime * 2.0 + aRnd * 30.0);
                    vCol = mix(uSteel * 1.2, mix(uIce, vec3(1.0), 0.3), aLand);
                    vCol = mix(vCol, uLav * 1.6, near * aLand);
                    vA = facing * (aLand * (0.55 + near * 0.8) * tw + (1.0 - aLand) * 0.22);
                    gl_PointSize = max(1.0, uPx * (aLand > 0.5 ? 0.3 : 0.24) * uProj / -mv.z);
                    gl_Position = projectionMatrix * mv;
                }
            `,fragmentShader:`
                uniform float uOpacity; varying vec3 vCol; varying float vA;
                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    gl_FragColor = vec4(vCol * vA * uOpacity * (1.0 - d * 1.8), 1.0);
                }
            `}));d.frustumCulled=!1,n.add(d);const f=new xt(new is(hi*.985,64,32),new rn({color:new oe("#04070b"),transparent:!0,opacity:0,fog:!1}));n.add(f);const g=new xt(new is(hi*1.16,64,32),new Mt({transparent:!0,depthWrite:!1,side:on,blending:gn,uniforms:{uOpacity:h.uOpacity,uCol:{value:new oe("#7fa3d9")}},vertexShader:`
                varying vec3 vN; varying vec3 vV;
                void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }
            `,fragmentShader:`
                uniform float uOpacity; uniform vec3 uCol; varying vec3 vN; varying vec3 vV;
                void main() { float k = pow(clamp(0.78 + dot(vN, vV), 0.0, 1.0), 4.0); gl_FragColor = vec4(uCol * k * 1.6 * uOpacity, 1.0); }
            `}));t.add(g);const v=oa(ei.trondheim.lat,ei.trondheim.lon,1),m=oa(ei.sarasota.lat,ei.sarasota.lon,1),p=700,x=[],b=[],_=new cn,C=v.angleTo(m),w=new T().crossVectors(v,m).normalize();for(let D=0;D<p;D++){const N=D/(p-1);_.setFromAxisAngle(w,C*N),c.copy(v).applyQuaternion(_).multiplyScalar(hi*(1.01+.2*Math.sin(Math.PI*N))),x.push(c.x,c.y,c.z),b.push(N)}const A=new je;A.setAttribute("position",new Ie(x,3)),A.setAttribute("aT",new Ie(b,1));const P={uTo:{value:0},uTime:h.uTime,uOpacity:h.uOpacity,uPx:h.uPx,uProj:h.uProj,uYel:{value:Li.cardinal}},F=new _i(A,new Mt({transparent:!0,depthWrite:!1,blending:gn,uniforms:P,vertexShader:`
                attribute float aT; uniform float uTo; uniform float uTime; uniform float uPx; uniform float uProj;
                varying float vA; varying float vHead;
                void main() {
                    vec4 mv = modelViewMatrix * vec4(position, 1.0);
                    float on = step(aT, uTo);
                    vHead = exp(-pow((aT - uTo) * 60.0, 2.0)) * step(0.001, uTo);
                    float dash = 0.55 + 0.45 * sin(aT * 220.0 - uTime * 5.0);
                    vA = on * dash + vHead * 1.1;
                    gl_PointSize = max(1.0, uPx * (0.42 + vHead * 0.5) * uProj / -mv.z);
                    gl_Position = projectionMatrix * mv;
                }
            `,fragmentShader:`
                uniform float uOpacity; uniform vec3 uYel; varying float vA; varying float vHead;
                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    vec3 c = mix(uYel * 1.3, vec3(1.0), vHead * 0.6);
                    gl_FragColor = vec4(c * vA * uOpacity * (1.0 - d * 1.8), 1.0);
                }
            `}));F.frustumCulled=!1,n.add(F);const y=[];for(const[D,N]of Object.entries(ei)){const H=oa(N.lat,N.lon,hi),W=H.clone().normalize(),z=new Ja(.9,1.25,40),K=new xt(z,new rn({color:Li.cardinal,transparent:!0,opacity:0,side:Ln,depthWrite:!1,blending:gn,fog:!1}));K.position.copy(H).addScaledVector(W,.15),K.lookAt(H.clone().multiplyScalar(2));const q=new as(.08,.08,6,8,1,!0);q.translate(0,3,0);const de=new xt(q,new rn({color:new oe(1.6,1.3,.5),transparent:!0,opacity:0,depthWrite:!1,blending:gn,fog:!1}));de.position.copy(H),de.quaternion.setFromUnitVectors(new T(0,1,0),W),n.add(K,de),y.push({key:D,ring:K,beam:de,top:H.clone().addScaledVector(W,6.5)})}f.renderOrder=6,d.renderOrder=7,F.renderOrder=7,y.forEach(D=>D.ring.renderOrder=D.beam.renderOrder=7),g.renderOrder=8;const M=new T;return{group:t,spin:n,pins:y,arcMid:(_.setFromAxisAngle(w,C*.5),v.clone().applyQuaternion(_).multiplyScalar(hi*1.24)),setOpacity(D){t.visible=D>.01,h.uOpacity.value=D,f.material.opacity=D*.92},face(D,N){n.rotation.set(0,0,0),t.rotation.set(D*Ar*.85,-N*Ar,0,"XYZ")},update(D,N,H){h.uTime.value=D,P.uTo.value=N,y.forEach((W,z)=>{const K=z===0?1:Math.min(1,N*1.05>.98?1:0),q=1+(D*.8+z*.5)%1*1.6;W.ring.scale.setScalar(q),W.ring.material.opacity=h.uOpacity.value*K*(1-(D*.8+z*.5)%1)*(.8+H*.4),W.beam.material.opacity=h.uOpacity.value*K*.7})},worldOf(D,N=M){return N.copy(D).applyMatrix4(n.matrixWorld)},setPx(D,N){h.uPx.value=D,h.uProj.value=N}}}const Tm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Za{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const kS=new Ys(-1,1,1,-1,0,1);class zS extends je{constructor(){super(),this.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ie([0,2,0,0,2,0],2))}}const HS=new zS;class Em{constructor(e){this._mesh=new xt(HS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,kS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Bu extends Za{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ia.clone(e.uniforms),this.material=new Mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Em(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Cf extends Za{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class GS extends Za{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class VS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Q);this._width=n.width,this._height=n.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bu(Tm),this.copyPass.material.blending=mi,this.clock=new ka}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Cf!==void 0&&(a instanceof Cf?n=!0:a instanceof GS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class WS extends Za{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new oe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const XS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new oe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Br extends Za{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Q(e.x,e.y):new Q(256,256),this.clearColor=new oe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(s,a,{type:Nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Qt(s,a,{type:Nn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Qt(s,a,{type:Nn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=XS;this.highPassUniforms=Ia.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Q(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Tm;this.copyUniforms=Ia.clone(u.uniforms),this.blendMaterial=new Mt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:gn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new oe,this.oldClearAlpha=1,this.basic=new rn,this.fsQuad=new Em(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Q(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Br.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Br.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Br.BlurDirectionX=new Q(1,0);Br.BlurDirectionY=new Q(0,1);const qS={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Q(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},jS={uniforms:{tDiffuse:{value:null},uTime:{value:0},uExposure:{value:1},uRes:{value:new Q(1,1)},uCA:{value:25e-5},uGrain:{value:.03},uVig:{value:.4},uFlash:{value:0},uDim:{value:1},uSunPos:{value:new Q(-9,-9)},uSunCol:{value:new oe},uSunOn:{value:0},uRays:{value:0},uFlare:{value:1}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,fragmentShader:`
        uniform sampler2D tDiffuse; uniform float uTime; uniform float uExposure; uniform vec2 uRes;
        uniform float uCA; uniform float uGrain; uniform float uVig; uniform float uFlash; uniform float uDim;
        uniform vec2 uSunPos; uniform vec3 uSunCol; uniform float uSunOn; uniform float uRays; uniform float uFlare;
        varying vec2 vUv;

        vec3 RRTAndODTFit(vec3 v) {
            vec3 a = v * (v + 0.0245786) - 0.000090537;
            vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
            return a / b;
        }
        vec3 aces(vec3 color) {
            const mat3 ACESInputMat = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
            const mat3 ACESOutputMat = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
            color *= uExposure / 0.6;
            color = ACESInputMat * color;
            color = RRTAndODTFit(color);
            color = ACESOutputMat * color;
            return clamp(color, 0.0, 1.0);
        }
        vec3 toSRGB(vec3 c) {
            return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
        }
        float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
        float lum(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

        void main() {
            vec2 d = vUv - 0.5;
            float r2 = dot(d, d);
            vec2 off = d * r2 * uCA * 40.0;
            vec3 c;
            c.r = texture2D(tDiffuse, vUv + off).r;
            c.g = texture2D(tDiffuse, vUv).g;
            c.b = texture2D(tDiffuse, vUv - off).b;

            float aspect = uRes.x / uRes.y;
            if (uSunOn > 0.0) {
                // is the sun itself visible? (it is the brightest thing there is: hills, clouds or the boat hide it)
                float vis = 0.0;
                if (uSunPos.x > -0.05 && uSunPos.x < 1.05 && uSunPos.y > -0.05 && uSunPos.y < 1.05) {
                    vec2 px = 3.0 / uRes;
                    vis += lum(texture2D(tDiffuse, uSunPos).rgb);
                    vis += lum(texture2D(tDiffuse, uSunPos + vec2(px.x, 0.0)).rgb);
                    vis += lum(texture2D(tDiffuse, uSunPos - vec2(px.x, 0.0)).rgb);
                    vis += lum(texture2D(tDiffuse, uSunPos + vec2(0.0, px.y)).rgb);
                    vis += lum(texture2D(tDiffuse, uSunPos - vec2(0.0, px.y)).rgb);
                    vis = smoothstep(20.0, 300.0, vis / 5.0);
                }
                // sun rays: light scattered by the haze, streaming out from the sun
                if (uRays > 0.0) {
                    vec2 toSun = uSunPos - vUv;
                    vec2 st = toSun / 28.0;
                    vec2 p = vUv;
                    float acc = 0.0;
                    float w = 1.0;
                    for (int i = 0; i < 28; i++) {
                        p += st;
                        vec3 s = texture2D(tDiffuse, clamp(p, 0.0, 1.0)).rgb;
                        acc += smoothstep(8.0, 60.0, lum(s)) * w;
                        w *= 0.955;
                    }
                    vec2 dd = toSun * vec2(aspect, 1.0);
                    c += uSunCol * (acc / 28.0) * uRays * exp(-length(dd) * 2.6) * 0.35;
                }
                // lens flare: ghosts on the line from the sun through the middle of the frame
                if (vis > 0.001 && uFlare > 0.0) {
                    vec2 axis = 0.5 - uSunPos;
                    vec3 fl = vec3(0.0);
                    for (int i = 0; i < 6; i++) {
                        float fi = float(i);
                        float t = (fi == 0.0) ? 0.35 : (fi == 1.0) ? 0.72 : (fi == 2.0) ? 1.15 : (fi == 3.0) ? 1.45 : (fi == 4.0) ? 1.8 : 2.2;
                        float rad = (fi == 0.0) ? 0.018 : (fi == 1.0) ? 0.05 : (fi == 2.0) ? 0.03 : (fi == 3.0) ? 0.09 : (fi == 4.0) ? 0.025 : 0.14;
                        vec2 gp = uSunPos + axis * t;
                        float dist = length((vUv - gp) * vec2(aspect, 1.0));
                        float disc = smoothstep(rad, rad * 0.7, dist) * (0.4 + 0.6 * smoothstep(rad * 0.4, rad, dist));
                        vec3 tint = (fi == 1.0 || fi == 4.0) ? vec3(0.4, 0.8, 1.0) : (fi == 3.0) ? vec3(1.0, 0.6, 0.3) : vec3(0.7, 1.0, 0.7);
                        fl += disc * tint * (fi == 5.0 ? 0.25 : 0.5);
                    }
                    // a soft glow around the sun and a thin horizontal streak
                    vec2 sd = (vUv - uSunPos) * vec2(aspect, 1.0);
                    fl += vec3(1.0, 0.9, 0.75) * exp(-length(sd) * 18.0) * 0.6;
                    fl += vec3(0.8, 0.85, 1.0) * exp(-abs(sd.y) * 260.0) * exp(-abs(sd.x) * 2.5) * 0.6;
                    c += fl * uSunCol * vis * uFlare * 0.22;
                }
            }

            c = aces(c);
            c = toSRGB(c);
            c += uFlash * vec3(0.9, 0.93, 1.0);
            c *= uDim;
            float v = smoothstep(0.95, 0.2, sqrt(r2) * 1.25);
            c *= mix(1.0, v, uVig);
            float g = hash(vUv * uRes + fract(uTime * 7.13) * 91.7) - 0.5;
            c += g * uGrain;
            gl_FragColor = vec4(c, 1.0);
        }
    `};function YS(r,e,t,{lowPower:n}){const i=r.getDrawingBufferSize(new Q),s=new Qt(i.x,i.y,{type:Nn,samples:n?0:4}),a=new VS(r,s),o=new WS(e,t),c=new Br(new Q(i.x,i.y),.55,.6,2),l=new Bu(jS);a.addPass(o),a.addPass(c),a.addPass(l);const u=n?new Bu(qS):null;return u&&a.addPass(u),{composer:a,bloom:c,grade:l,setSize(h,d,f){a.setPixelRatio(f),a.setSize(h,d);const g=n?.35:.5;c.setSize(Math.round(h*f*g),Math.round(d*f*g)),l.uniforms.uRes.value.set(h*f,d*f),u&&u.uniforms.resolution.value.set(1/(h*f),1/(d*f))},render(h){l.uniforms.uTime.value=h,a.render()}}}function KS(r,e=60){const t=new Float32Array(r*3),n=new Float32Array(r);for(let o=0;o<r;o++)t[o*3]=(Math.random()-.5)*e,t[o*3+1]=(Math.random()-.5)*e,t[o*3+2]=(Math.random()-.5)*e,n[o]=Math.random();const i=new je;i.setAttribute("position",new Ze(t,3)),i.setAttribute("aSeed",new Ze(n,1));const s={uCam:{value:new T},uTime:{value:0},uBox:{value:e},uProj:{value:800},uOpacity:{value:1}},a=new _i(i,new Mt({transparent:!0,depthWrite:!1,blending:gn,uniforms:s,vertexShader:`
                attribute float aSeed; uniform vec3 uCam; uniform float uTime; uniform float uBox; uniform float uProj;
                varying float vA; varying float vS;
                void main() {
                    // a light wind along the fjord, and a slow rise and fall
                    vec3 p = position + vec3(uTime * (0.5 + aSeed * 0.5), sin(uTime * 0.35 + aSeed * 6.28) * 0.6, uTime * 0.22);
                    p = mod(p - uCam + uBox * 0.5, uBox) - uBox * 0.5 + uCam;
                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    float d = -mv.z;
                    // soft near the lens, gone at the edge of the box so the wrap never shows
                    vA = smoothstep(2.5, 8.0, d) * (1.0 - smoothstep(uBox * 0.3, uBox * 0.48, d)) * (0.15 + 0.85 * aSeed);
                    vA *= 0.6 + 0.4 * sin(uTime * (1.0 + aSeed * 2.0) + aSeed * 50.0);
                    vS = aSeed;
                    gl_PointSize = clamp((0.025 + aSeed * 0.035) * uProj / d, 1.0, 7.0);
                    gl_Position = projectionMatrix * mv;
                }
            `,fragmentShader:`
                uniform float uOpacity; varying float vA; varying float vS;
                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    float k = pow(1.0 - d * 2.0, 1.6);
                    vec3 c = mix(vec3(0.72, 0.8, 0.95), vec3(1.0, 0.95, 0.85), step(0.92, vS));
                    gl_FragColor = vec4(c * k * vA * 0.28 * uOpacity, 1.0);
                }
            `}));return a.frustumCulled=!1,a.renderOrder=9,{points:a,update(o,c,l,u=1){s.uTime.value=o,s.uCam.value.copy(c),s.uProj.value=l,s.uOpacity.value=u}}}const da=new T(0,46,-240);async function JS(r,{lowPower:e}){const t=new Image;t.decoding="async",t.src=r,await t.decode();const n=t.naturalWidth/t.naturalHeight,i=e?150:240,s=Math.round(i/n),a=document.createElement("canvas");a.width=i,a.height=s;const o=a.getContext("2d",{willReadFrequently:!0});o.drawImage(t,0,0,i,s);const c=o.getImageData(0,0,i,s).data,l=30,u=l/n,h=i*s,d=new Float32Array(h*3),f=new Float32Array(h*3),g=new Float32Array(h*3),v=new Float32Array(h),m=C=>Math.pow(C/255,2.2);let p=0;for(let C=0;C<s;C++)for(let w=0;w<i;w++){const A=(C*i+w)*4,P=c[A],F=c[A+1],y=c[A+2],M=(P*.3+F*.55+y*.15)/255,D=(Math.random()-.5)*.6,N=(Math.random()-.5)*.6;d[p*3]=((w+.5+D)/i-.5)*l,d[p*3+1]=(.5-(C+.5+N)/s)*u,d[p*3+2]=(M-.5)*2.4,f[p*3]=m(P),f[p*3+1]=m(F),f[p*3+2]=m(y);const H=Math.random()*Math.PI*2,W=6+Math.random()*18;g[p*3]=Math.cos(H)*W,g[p*3+1]=(Math.random()-.5)*16,g[p*3+2]=Math.sin(H)*W*.5-14-Math.random()*20,v[p]=Math.random(),p++}const x=new je;x.setAttribute("position",new Ze(d,3)),x.setAttribute("color",new Ze(f,3)),x.setAttribute("aDir",new Ze(g,3)),x.setAttribute("aSeed",new Ze(v,1));const b={uAssemble:{value:0},uOpacity:{value:0},uTime:{value:0},uProj:{value:800},uSpacing:{value:l/i*1.35},uScan:{value:-1},uW:{value:l}},_=new _i(x,new Mt({transparent:!0,depthWrite:!1,blending:$i,uniforms:b,vertexColors:!0,vertexShader:`
                attribute vec3 aDir; attribute float aSeed;
                uniform float uAssemble; uniform float uTime; uniform float uProj; uniform float uSpacing; uniform float uScan; uniform float uW;
                varying vec3 vCol; varying float vA;
                void main() {
                    float t = clamp(uAssemble * 1.5 - aSeed * 0.5, 0.0, 1.0);
                    t = 1.0 - pow(1.0 - t, 4.0);
                    vec3 p = position + aDir * (1.0 - t);
                    // a scan line across the picture while it forms
                    float sx = (position.x / uW + 0.5);
                    float edge = exp(-pow((sx - uScan) * 30.0, 2.0));
                    vCol = mix(color * 1.1, vec3(0.9, 0.95, 1.0), clamp(edge * 0.9 + (1.0 - t) * 0.6, 0.0, 1.0));
                    vA = (0.25 + 0.75 * t);
                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    gl_PointSize = clamp(uSpacing * (1.0 + edge * 0.8) * uProj / -mv.z, 1.0, 9.0);
                    gl_Position = projectionMatrix * mv;
                }
            `,fragmentShader:`
                uniform float uOpacity; varying vec3 vCol; varying float vA;
                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    gl_FragColor = vec4(vCol, vA * uOpacity * (1.0 - smoothstep(0.35, 0.5, d)));
                }
            `}));return _.frustumCulled=!1,_.renderOrder=7,_.position.copy(da),{points:_,U:b,width:l,height:u}}function ZS(r=700){const e=new Float32Array(r*3),t=new Float32Array(r*3),n=new Float32Array(r),i=new Float32Array(r),s=new Float32Array(r),a=new je;a.setAttribute("position",new Ze(e,3).setUsage(Su)),a.setAttribute("aLife",new Ze(n,1).setUsage(Su)),a.setAttribute("aSize",new Ze(i,1));const o={uCol:{value:new oe(1,1,1)},uProj:{value:800}},c=new Mt({transparent:!0,depthWrite:!1,uniforms:o,vertexShader:`
            attribute float aLife; attribute float aSize; uniform float uProj; varying float vA;
            void main() {
                vec4 mv = modelViewMatrix * vec4(position, 1.0);
                vA = clamp(aLife * 2.0, 0.0, 1.0);
                gl_PointSize = aLife > 0.0 ? clamp(aSize * uProj / -mv.z, 1.0, 22.0) : 0.0;
                gl_Position = projectionMatrix * mv;
            }
        `,fragmentShader:`
            uniform vec3 uCol; varying float vA;
            void main() {
                float d = length(gl_PointCoord - 0.5);
                if (d > 0.5) discard;
                float a = smoothstep(0.5, 0.15, d) * vA * 0.75;
                gl_FragColor = vec4(uCol, a);
            }
        `}),l=new _i(a,c);l.frustumCulled=!1,l.renderOrder=7;let u=0,h=0;return{points:l,uniforms:o,emit(d,f,g,v,m,p,x,b=1.5,_=.12){for(let C=0;C<x;C++){const w=u;u=(u+1)%r,e[w*3]=d+(Math.random()-.5)*.6,e[w*3+1]=f,e[w*3+2]=g+(Math.random()-.5)*.6,t[w*3]=v+(Math.random()-.5)*b,t[w*3+1]=m*(.6+Math.random()*.7),t[w*3+2]=p+(Math.random()-.5)*b,n[w]=.6+Math.random()*.9,i[w]=_*(.5+Math.random()),s[w]=0}h=r,a.attributes.aSize.needsUpdate=!0},splash(d,f,g=1){this.emit(d,.1,f,0,5.5*g,0,Math.round(60*g),3.2*g,.14)},update(d){if(!h)return;let f=0;const g=Math.exp(-d*.9);for(let v=0;v<r;v++)n[v]<=0||(f++,t[v*3+1]-=9.8*3.3*d,t[v*3]*=g,t[v*3+2]*=g,e[v*3]+=t[v*3]*d,e[v*3+1]+=t[v*3+1]*d,e[v*3+2]+=t[v*3+2]*d,n[v]-=d,e[v*3+1]<-.2&&(n[v]=0));h=f,a.attributes.position.needsUpdate=!0,a.attributes.aLife.needsUpdate=!0}}}function QS(r=3e3){const e=new Float32Array(r*2*3),t=new Float32Array(r*2*3),n=new Float32Array(r*2);for(let c=0;c<r;c++){const l=Math.random(),u=Math.random(),h=Math.random();for(let d=0;d<2;d++)t.set([l,u,h],(c*2+d)*3),n[c*2+d]=d}const i=new je;i.setAttribute("position",new Ze(e,3)),i.setAttribute("aSeed",new Ze(t,3)),i.setAttribute("aEnd",new Ze(n,1));const s={uTime:{value:0},uCam:{value:new T},uAmount:{value:0},uCol:{value:new oe(.7,.75,.8)},uWind:{value:new Q(3,1.5)}},a=new Mt({uniforms:s,transparent:!0,depthWrite:!1,blending:gn,vertexShader:`
            uniform float uTime; uniform vec3 uCam; uniform float uAmount; uniform vec2 uWind;
            attribute vec3 aSeed; attribute float aEnd;
            varying float vA;
            const vec3 BOX = vec3(48.0, 30.0, 48.0);
            void main() {
                float fall = 26.0 + aSeed.x * 8.0;
                vec3 vel = vec3(uWind.x, -fall, uWind.y);
                vec3 p = aSeed * BOX + vel * uTime;
                // wrap inside the box round the camera
                p = mod(p - uCam + BOX * 0.5, BOX) - BOX * 0.5 + uCam;
                // the streak: the drop and where it was a moment ago
                p -= vel * 0.032 * aEnd;
                vec4 mv = modelViewMatrix * vec4(p, 1.0);
                // only some drops, more when it rains harder; fade with distance and at the box edges
                float on = step(aSeed.z, uAmount);
                float d = -mv.z;
                vA = on * (1.0 - smoothstep(6.0, 24.0, d)) * smoothstep(1.5, 4.0, d) * (1.0 - aEnd * 0.8);
                gl_Position = projectionMatrix * mv;
            }
        `,fragmentShader:`
            uniform vec3 uCol; varying float vA;
            void main() { if (vA < 0.01) discard; gl_FragColor = vec4(uCol * vA * 0.8, 1.0); }
        `}),o=new jn(i,a);return o.frustumCulled=!1,o.renderOrder=8,{lines:o,uniforms:s}}const li=(r,e,t)=>Math.min(t,Math.max(e,r)),Pf=13,vu=21,ca=170,sn=3.1,Pn=2.7;function $S({camera:r,getBoat:e,getElev:t,landHeight:n,obstacles:i,colliders:s,buoys:a,spray:o,onPing:c,reduced:l}){const u={active:!1,pos:new T,heading:0,course:0,vel:new T,speed:0,yawRate:0,spinRate:0,pitch:0,roll:0,camPos:new T,camLook:new T,sunElev:12,locked:!1,target:null,outBlend:0},h=new Set,d=new Q;let f=0,g=.28,v=17,m=!1,p=0,x=0;const b=new T,_=new T;let C=0,w=-10;const A=[16,5,.5,-3.5,-10];let P=0;const F=[{name:"Clear",over:0,fog:0,rain:0},{name:"Cloudy",over:.75,fog:.15,rain:0},{name:"Fog",over:.9,fog:1,rain:0},{name:"Rain",over:1,fog:.45,rain:1}];let y=0;const M=document.createElement("div");M.className="drive-hud",M.setAttribute("role","dialog"),M.setAttribute("aria-label","Drive Argus"),M.innerHTML=`
        <div class="hud-look" aria-hidden="true"></div>
        <div class="hud-top">
            <span class="hud-tag"><i></i>Drive Argus</span>
            <div class="hud-actions">
                <button type="button" class="hud-btn" data-hud="time">Time of day</button>
                <button type="button" class="hud-btn" data-hud="weather">Weather: <span class="hud-weather">Clear</span></button>
                <button type="button" class="hud-btn" data-hud="sound" aria-pressed="false">Sound</button>
                <button type="button" class="hud-btn hud-exit" data-hud="exit">Exit <kbd>Esc</kbd></button>
            </div>
        </div>
        <p class="hud-help"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> or arrows to drive · <kbd>Q</kbd><kbd>E</kbd> turn the boat as it goes · <kbd>Shift</kbd> more power · <kbd>Space</kbd> LiDAR ping · <kbd>T</kbd> time · <kbd>V</kbd> weather · drag to look around</p>
        <div class="hud-bottom">
            <div class="hud-gauges">
                <div class="hud-gauge"><span>Throttle</span><i><b class="hud-thr"></b></i></div>
                <canvas class="hud-compass" width="440" height="60" aria-hidden="true"></canvas>
            </div>
            <div class="hud-radar-wrap"><canvas class="hud-radar" width="360" height="360" aria-hidden="true"></canvas><span>LiDAR</span></div>
        </div>
        <div class="hud-stick" aria-hidden="true"><i></i></div>
    `,document.body.appendChild(M);const D=document.createElement("button");D.type="button",D.className="drive-fab",D.setAttribute("data-drive",""),D.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.2"/><path d="M12 4v5.8M12 14.2V20M4 12h5.8M14.2 12H20"/></svg><span>Drive Argus</span>',document.body.appendChild(D);const N=!!document.querySelector(".btn-drive"),H=()=>D.classList.toggle("is-shown",!N||scrollY>innerHeight*.7);addEventListener("scroll",H,{passive:!0}),H();const W=M.querySelector(".hud-thr"),z=M.querySelector(".hud-compass").getContext("2d"),K=M.querySelector(".hud-radar").getContext("2d"),q=M.querySelector('[data-hud="sound"]'),de=M.querySelector(".hud-weather"),J=M.querySelector(".hud-stick"),me=J.querySelector("i");M.addEventListener("click",G=>{const L=G.target.closest("[data-hud]");if(!L)return;const O=L.dataset.hud;O==="exit"&&Le(),O==="time"&&Ke(),O==="weather"&&et(),O==="sound"&&ce(!ue)});function Ke(){P=(P+1)%A.length,u.sunElev=A[P]}function et(){y=(y+1)%F.length,de.textContent=F[y].name}const Z=M.querySelector(".hud-look");let he=0,Se=0;Z.addEventListener("pointerdown",G=>{m=!0,he=G.clientX,Se=G.clientY,Z.setPointerCapture(G.pointerId)}),Z.addEventListener("pointermove",G=>{m&&(f-=(G.clientX-he)*.006,g=li(g+(G.clientY-Se)*.003,.08,1.1),he=G.clientX,Se=G.clientY,p=performance.now())});const _e=()=>{m=!1,p=performance.now()};Z.addEventListener("pointerup",_e),Z.addEventListener("pointercancel",_e),Z.addEventListener("wheel",G=>{v=li(v*Math.exp(G.deltaY*.001),10,60),G.preventDefault()},{passive:!1});let Fe=null;const He=new Q;J.addEventListener("pointerdown",G=>{Fe=G.pointerId,J.setPointerCapture(G.pointerId);const L=J.getBoundingClientRect();He.set(L.left+L.width/2,L.top+L.height/2),Je(G)}),J.addEventListener("pointermove",G=>G.pointerId===Fe&&Je(G));const Qe=()=>{Fe=null,d.set(0,0),me.style.transform=""};J.addEventListener("pointerup",Qe),J.addEventListener("pointercancel",Qe);function Je(G){d.set(G.clientX-He.x,G.clientY-He.y),d.length()>46&&d.setLength(46),me.style.transform=`translate(${d.x}px, ${d.y}px)`,d.divideScalar(46)}function ae(G){if(!u.active)return;const L=G.key.toLowerCase();if(G.type==="keydown"){if(L==="escape")return document.body.hasAttribute("data-game")?void 0:Le();L==="t"&&Ke(),L==="v"&&et(),L===" "&&(w=performance.now()/1e3,c&&c(u.pos)),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(L)&&G.preventDefault(),h.add(L)}else h.delete(L)}addEventListener("keydown",ae),addEventListener("keyup",ae),addEventListener("blur",()=>h.clear());let I=null,ue=!1;try{ue=localStorage.getItem("marinor-sound")==="on"}catch{}function pe(){if(I)return I;const G=window.AudioContext||window.webkitAudioContext;if(!G)return null;const L=new G,O=L.createGain();O.gain.value=0,O.connect(L.destination);const se=L.createOscillator();se.type="sawtooth",se.frequency.value=60;const re=L.createBiquadFilter();re.type="lowpass",re.frequency.value=300;const te=L.createGain();te.gain.value=0,se.connect(re).connect(te).connect(O),se.start();const Oe=L.sampleRate*2,Ge=L.createBuffer(1,Oe,L.sampleRate),Ve=Ge.getChannelData(0);let rt=0;for(let it=0;it<Oe;it++)rt=(rt+.02*(Math.random()*2-1))/1.02,Ve[it]=rt*3.5;const ut=L.createBufferSource();ut.buffer=Ge,ut.loop=!0;const Et=L.createBiquadFilter();Et.type="bandpass",Et.frequency.value=500,Et.Q.value=.6;const Gt=L.createGain();return Gt.gain.value=.25,ut.connect(Et).connect(Gt).connect(O),ut.start(),I={ctx:L,master:O,motor:se,motorF:re,motorG:te,waterF:Et,waterG:Gt},I}function ce(G){ue=G,q.setAttribute("aria-pressed",G?"true":"false"),q.textContent=G?"Sound on":"Sound off";try{localStorage.setItem("marinor-sound",G?"on":"off")}catch{}const L=G?pe():I;L&&(G&&L.ctx.state==="suspended"&&L.ctx.resume(),L.master.gain.setTargetAtTime(G&&u.active?.14:0,L.ctx.currentTime,.2))}q.textContent=ue?"Sound on":"Sound off";function ve(){if(u.active)return;const G=e();u.pos.copy(G.pos).setY(0),u.heading=G.heading,u.course=G.heading,u.vel.set(0,0,0),u.speed=0,u.spinRate=0,u.sunElev=t(),P=A.reduce((L,O,se)=>Math.abs(O-u.sunElev)<Math.abs(A[L]-u.sunElev)?se:L,0),b.copy(r.position),_.copy(G.pos),x=0,f=0,C=scrollY,u.active=!0,u.outBlend=0,document.documentElement.classList.add("is-driving"),M.classList.add("is-on"),M.querySelector(".hud-exit").focus({preventScroll:!0}),ue&&ce(!0),dispatchEvent(new CustomEvent("drive:change",{detail:!0}))}function Le(){u.active&&(u.active=!1,u.outBlend=1,h.clear(),document.documentElement.classList.remove("is-driving"),M.classList.remove("is-on"),I&&I.master.gain.setTargetAtTime(0,I.ctx.currentTime,.15),scrollTo(0,C),dispatchEvent(new CustomEvent("drive:change",{detail:!1})))}const ge=new T,R=new T,S=new T,X=new T,ne=[[sn,Pn-.2],[sn,-Pn+.2],[-sn,Pn-.2],[-sn,-Pn+.2],[0,Pn],[0,-Pn],[sn+.1,1.8],[sn+.1,-1.8],[-sn-.1,1.8],[-sn-.1,-1.8],[sn*.5,Pn],[sn*.5,-Pn],[-sn*.5,Pn],[-sn*.5,-Pn]],le=-1;let ee=0;function Re(G,L){const O=Math.cos(G.rot),se=Math.sin(G.rot),re=[[ge.x,ge.z],[R.x,R.z],[O,-se],[se,O]],te=u.pos.x-G.x,Oe=u.pos.z-G.z;let Ge=1/0,Ve=0,rt=0;for(const[ut,Et]of re){const Gt=sn*Math.abs(ge.x*ut+ge.z*Et)+Pn*Math.abs(R.x*ut+R.z*Et),it=G.hx*Math.abs(O*ut-se*Et)+G.hz*Math.abs(se*ut+O*Et),St=te*ut+Oe*Et,Rt=Gt+it-Math.abs(St);if(Rt<=0)return!1;if(Rt<Ge){Ge=Rt;const wt=St<0?-1:1;Ve=ut*wt,rt=Et*wt}}return L.set(Ve*Ge,0,rt*Ge),!0}function xe(G,L){const O=G.x-u.pos.x,se=G.z-u.pos.z,re=O*ge.x+se*ge.z,te=O*R.x+se*R.z,Oe=li(re,-sn,sn),Ge=li(te,-Pn,Pn),Ve=re-Oe,rt=te-Ge,ut=Math.hypot(Ve,rt);if(ut>=G.r)return!1;if(ut>1e-4){const Et=(G.r-ut)/ut;L.set(-(ge.x*Ve+R.x*rt)*Et,0,-(ge.z*Ve+R.z*rt)*Et)}else{const Et=sn-Math.abs(re)+G.r,Gt=Pn-Math.abs(te)+G.r;Et<Gt?L.copy(ge).multiplyScalar(-Math.sign(re||1)*Et):L.copy(R).multiplyScalar(-Math.sign(te||1)*Gt)}return!0}function Ce(G,L){const O=u.vel.dot(G);O<0&&(u.vel.addScaledVector(G,-O*1.15),-O>3&&o&&L-ee>.25&&(ee=L,o.splash(u.pos.x-G.x*sn,u.pos.z-G.z*sn,Math.min(1.2,-O/10))))}function tt(G){for(let L=0;L<3;L++){let O=!1;if(ge.set(Math.cos(u.heading),0,-Math.sin(u.heading)),R.set(Math.sin(u.heading),0,Math.cos(u.heading)),n)for(const[re,te]of ne){const Oe=u.pos.x+ge.x*re+R.x*te,Ge=u.pos.z+ge.z*re+R.z*te;if(n(Oe,Ge)<=le)continue;const Ve=2.5;X.set(n(Oe-Ve,Ge)-n(Oe+Ve,Ge),0,n(Oe,Ge-Ve)-n(Oe,Ge+Ve)),X.lengthSq()<1e-6&&X.set(-u.pos.x,0,-u.pos.z),X.normalize();let rt=0;for(;rt<12&&n(Oe+X.x*rt*.4,Ge+X.z*rt*.4)>le;)rt++;u.pos.addScaledVector(X,rt*.4+.05),Ce(X,G),O=!0}const se=s?s():[];for(const re of se)for(const te of re)Math.abs(te.x-u.pos.x)>te.hx+te.hz+8||Math.abs(te.z-u.pos.z)>te.hx+te.hz+8||Re(te,S)&&(u.pos.add(S),Ce(X.copy(S).normalize(),G),O=!0);for(const re of i())Math.abs(re.x-u.pos.x)>re.r+6||Math.abs(re.z-u.pos.z)>re.r+6||xe(re,S)&&(u.pos.add(S),Ce(X.copy(S).normalize(),G),O=!0);if(!O)break}}const fe=new T,Ae=new T,Xe=new T,qe=new T;let Me=0,ct=0;function Ye(G,L){let O=0,se=0,re=0;(h.has("w")||h.has("arrowup"))&&(O+=1),(h.has("s")||h.has("arrowdown"))&&(O-=1),(h.has("a")||h.has("arrowleft"))&&(se+=1),(h.has("d")||h.has("arrowright"))&&(se-=1),h.has("q")&&(re+=1),h.has("e")&&(re-=1),O+=-d.y,se+=-d.x,O=li(O,-1,1),se=li(se,-1,1),u.locked&&(O=0,se=0,re=0);const te=h.has("shift");Me+=(O-Me)*(1-Math.exp(-G*4)),fe.set(Math.cos(u.course),0,-Math.sin(u.course)),Ae.set(Math.sin(u.course),0,Math.cos(u.course));let Oe=u.vel.dot(fe),Ge=u.vel.dot(Ae);const Ve=te?vu:Pf,rt=O>0?O*Ve*.9:O*Ve*.5,ut=Oe*(.9/Ve)*Math.abs(Oe)*.9+Oe*.25,Et=Oe;Oe+=(rt-ut)*G,Ge*=Math.exp(-G*1.6);const Gt=se*(.55+Math.min(1,Math.abs(Oe)/Pf)*.6)*(Oe<-.5?-1:1);u.yawRate+=(Gt-u.yawRate)*(1-Math.exp(-G*3.5)),u.course+=u.yawRate*G,u.spinRate+=(re*1.7-u.spinRate)*(1-Math.exp(-G*4)),u.heading+=(u.yawRate+u.spinRate)*G,fe.set(Math.cos(u.course),0,-Math.sin(u.course)),Ae.set(Math.sin(u.course),0,Math.cos(u.course)),u.vel.copy(fe).multiplyScalar(Oe).addScaledVector(Ae,Ge),u.pos.addScaledVector(u.vel,G),tt(L);const it=Math.hypot(u.pos.x,u.pos.z);it>2400&&u.pos.multiplyScalar(2400/it),u.speed=u.vel.dot(fe);const St=(u.speed-Et)/Math.max(G,.001),Rt=li(u.speed/vu,-.3,1)*.07+li(St*.006,-.03,.05),wt=li(-u.yawRate*u.speed*.012-u.spinRate*.02,-.14,.14);if(u.pitch+=(Rt-u.pitch)*(1-Math.exp(-G*3)),u.roll+=(wt-u.roll)*(1-Math.exp(-G*3)),o&&!l&&Math.abs(u.speed)>6&&L-ct>.03){ct=L,ge.set(Math.cos(u.heading),0,-Math.sin(u.heading)),R.set(Math.sin(u.heading),0,Math.cos(u.heading));const Un=(Math.abs(u.speed)-6)/10;for(const Kn of[-1,1]){const ki=u.pos.x+ge.x*3+R.x*1.85*Kn,zi=u.pos.z+ge.z*3+R.z*1.85*Kn;o.emit(ki,.2,zi,R.x*Kn*2.4+u.vel.x*.5,3.2+Un*3,R.z*Kn*2.4+u.vel.z*.5,Math.ceil(2+Un*5),1.2,.1)}}!m&&performance.now()-p>2200&&(f*=Math.exp(-G*1.2));const Pt=u.course+Math.PI+f-u.yawRate*.25,jt=Math.cos(g)*v;Xe.set(u.pos.x+Math.cos(Pt)*jt,1.2+Math.sin(g)*v,u.pos.z-Math.sin(Pt)*jt),qe.copy(u.pos).addScaledVector(fe,5).setY(1.6),x=Math.min(1,x+G*.8);const ht=x*x*(3-2*x);if(x<1?(u.camPos.lerpVectors(b,Xe,ht),u.camLook.lerpVectors(_,qe,ht)):(u.camPos.lerp(Xe,1-Math.exp(-G*6)),u.camLook.lerp(qe,1-Math.exp(-G*8))),I&&ue){const Un=Math.abs(u.speed)/vu;I.motor.frequency.setTargetAtTime(50+Math.abs(Me)*70+Un*60,I.ctx.currentTime,.1),I.motorF.frequency.setTargetAtTime(260+Math.abs(Me)*900,I.ctx.currentTime,.1),I.motorG.gain.setTargetAtTime(.05+Math.abs(Me)*.22,I.ctx.currentTime,.1),I.waterF.frequency.setTargetAtTime(380+Un*900,I.ctx.currentTime,.2),I.waterG.gain.setTargetAtTime(.15+Un*.7,I.ctx.currentTime,.2)}Tt(L)}function Tt(G){W.style.transform=`scaleX(${Math.abs(Me).toFixed(3)})`,W.classList.toggle("is-back",Me<0);const L=(Math.atan2(Math.cos(u.heading),-Math.sin(u.heading))*180/Math.PI+360)%360,O=z,se=O.canvas.width,re=O.canvas.height;O.clearRect(0,0,se,re),O.font="600 18px 'JetBrains Mono', monospace",O.textAlign="center";for(let it=-60;it<=60;it+=5){const St=Math.round(L/5)*5+it,Rt=se/2+(St-L)*3.4,wt=(St%360+360)%360,Pt=wt%45===0;if(O.fillStyle="rgba(232,238,248,0.55)",O.fillRect(Rt-1,0,2,Pt?16:8),Pt){const jt={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"}[wt];O.fillStyle="rgba(232,238,248,0.9)",O.fillText(jt,Rt,40)}}if(O.fillStyle="#f2c230",O.fillRect(se/2-1.5,0,3,24),u.target){let St=((Math.atan2(u.target.x-u.pos.x,u.target.z-u.pos.z)*180/Math.PI+360)%360-L+540)%360-180;const Rt=(se/2-14)/3.4,wt=se/2+li(St,-Rt,Rt)*3.4;if(O.fillStyle="#7cc4ff",O.beginPath(),Math.abs(St)<Rt)O.moveTo(wt,22),O.lineTo(wt-8,6),O.lineTo(wt+8,6);else{const Pt=Math.sign(St);O.moveTo(wt+Pt*10,14),O.lineTo(wt-Pt*4,4),O.lineTo(wt-Pt*4,24)}O.closePath(),O.fill()}O.fillStyle="rgba(232,238,248,0.95)",O.fillText(String(Math.round(L)%360).padStart(3,"0")+"°",se/2,58);const te=K,Oe=te.canvas.width,Ge=Oe/2-6;te.clearRect(0,0,Oe,Oe),te.save(),te.translate(Oe/2,Oe/2),te.fillStyle="rgba(6,10,16,0.55)",te.beginPath(),te.arc(0,0,Ge,0,Math.PI*2),te.fill(),te.strokeStyle="rgba(200,212,232,0.18)",te.lineWidth=1.5;for(const it of[.33,.66,1])te.beginPath(),te.arc(0,0,Ge*it,0,Math.PI*2),te.stroke();const Ve=G*2.4,rt=te.createConicGradient?te.createConicGradient(Ve,0,0):null;rt&&(rt.addColorStop(0,"rgba(159,212,255,0.35)"),rt.addColorStop(.12,"rgba(159,212,255,0)"),rt.addColorStop(1,"rgba(159,212,255,0)"),te.fillStyle=rt,te.beginPath(),te.arc(0,0,Ge,0,Math.PI*2),te.fill());const ut=performance.now()/1e3-w;ut<1.6&&(te.strokeStyle=`rgba(159,212,255,${1-ut/1.6})`,te.lineWidth=3,te.beginPath(),te.arc(0,0,Ge*(ut/1.6),0,Math.PI*2),te.stroke());const Et=(it,St)=>{const Rt=it-u.pos.x,wt=St-u.pos.z,Pt=Math.cos(u.heading),jt=Math.sin(u.heading),ht=Rt*Pt-wt*jt;return[(Rt*jt+wt*Pt)/ca*Ge,-ht/ca*Ge]},Gt=(it,St,Rt,wt)=>{const[Pt,jt]=Et(it,St);Pt*Pt+jt*jt>Ge*Ge||(te.fillStyle=Rt,te.beginPath(),te.arc(Pt,jt,wt,0,Math.PI*2),te.fill())};for(const it of i())Gt(it.x,it.z,"rgba(232,238,248,0.7)",Math.max(4,it.r/ca*Ge));te.fillStyle="rgba(232,238,248,0.55)";for(const it of s?s():[])for(const St of it){const[Rt,wt]=Et(St.x,St.z);if(Rt*Rt+wt*wt>Ge*Ge*1.2)continue;te.save(),te.translate(Rt,wt),te.rotate(-(St.rot-u.heading)-Math.PI/2);const Pt=Math.max(2,St.hx/ca*Ge),jt=Math.max(2,St.hz/ca*Ge);te.fillRect(-Pt,-jt,Pt*2,jt*2),te.restore()}for(const it of a())Gt(it.x,it.z,it.kind==="port"?"#ff5a4a":it.kind==="stbd"?"#45d07f":"#f2c230",5);if(u.target){const[it,St]=Et(u.target.x,u.target.z),Rt=Math.hypot(it,St),wt=Rt>Ge-10?(Ge-10)/Rt:1;te.strokeStyle="#7cc4ff",te.lineWidth=3,te.beginPath(),te.arc(it*wt,St*wt,9,0,Math.PI*2),te.stroke()}te.fillStyle="#e8eef8",te.beginPath(),te.moveTo(0,-9),te.lineTo(6,7),te.lineTo(-6,7),te.closePath(),te.fill(),te.restore()}function U(G){for(const L of G){const O=L.x-u.pos.x,se=L.z-u.pos.z,re=Math.hypot(O,se),te=L.r+3.2,Oe=re<te;if(Oe&&!L.touching&&(L.hits=(L.hits||0)+1),L.touching=Oe,re<te&&re>.001){const Ge=(te-re)*6;L.vx+=O/re*Ge+u.vel.x*.3,L.vz+=se/re*Ge+u.vel.z*.3,u.vel.length()>2.5&&o&&o.splash(L.x,L.z,.5),u.vel.multiplyScalar(.96)}}}return{get active(){return u.active},state:u,get pos(){return u.pos},get heading(){return u.heading},get course(){return u.course},get speed(){return u.speed},get vel(){return u.vel},get pitch(){return u.pitch},get roll(){return u.roll},get camPos(){return u.camPos},get camLook(){return u.camLook},get sunElev(){return u.sunElev},get weather(){return F[y]},get outBlend(){return u.outBlend},hud:M,actions:M.querySelector(".hud-actions"),place(G,L,O){u.pos.set(G,0,L),u.heading=O,u.course=O,u.vel.set(0,0,0),u.speed=0,u.yawRate=0,u.spinRate=0,Me=0,f=0;const se=O+Math.PI,re=Math.cos(g)*v;u.camPos.set(G+Math.cos(se)*re,1.2+Math.sin(g)*v,L-Math.sin(se)*re),u.camLook.set(G+Math.cos(O)*5,1.6,L-Math.sin(O)*5),x=1},fade(G){u.outBlend=Math.max(0,u.outBlend-G*.9)},start:ve,stop:Le,update:Ye,collide:U}}const lt=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),zn=r=>r*r*(3-2*r),It=(r,e,t)=>r+(e-r)*t,ew=r=>1-Math.pow(1-lt(r),3),fa={lidar:{label:"LiDAR",p:[-.052,.373,.02],a:.7,e:4.6},gnss:{label:"Seapath 130 · GNSS",p:[-.416,.183,.296],a:2,e:3.2},camera:{label:"Stereo depth camera",p:[.204,.217,0],a:.25,e:2.2},case:{label:"Electronics case",p:[.008,.273,-.152],a:-1.2,e:3},hull:{label:"Two hulls",p:[.224,.079,-.424],a:-.6,e:1.6},props:{label:"Four propellers",p:[-.368,-.355,.296],a:2.7,e:.9},pixhawk:{label:"Pixhawk",p:[.048,.333,-.04],a:-.3,e:5.5},link:{label:"5G link",p:[-.032,.333,.064],a:-1.8,e:5}},jo=(r,e)=>window.dispatchEvent(new CustomEvent(r,{detail:e}));async function tw({reduced:r=!1}={}){const e=document.createElement("canvas");e.id="scene",e.setAttribute("aria-hidden","true"),document.body.prepend(e);const t=Math.min(innerWidth,innerHeight)<700,n=t||(navigator.hardwareConcurrency||8)<=4;let i;try{i=new Fp({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"})}catch{return e.remove(),jo("scene:failed"),null}const s=Math.min(devicePixelRatio||1,n?1.25:1.5);let a=s;i.setPixelRatio(s),i.setSize(innerWidth,innerHeight,!1),i.outputColorSpace=Jt,i.setClearColor(0),i.shadowMap.enabled=!0,i.shadowMap.type=zu,i.shadowMap.autoUpdate=!1;const o=new La,c=new Xt(38,innerWidth/innerHeight,.5,6e4),l=qM(i,{lowPower:n});l.stars.material.uniforms.uPx.value=s,o.add(l.group);const u=204;let h=parseFloat(document.body.dataset.sun||"16"),d=h;l.setSun(d,u),l.bake(!0),o.environment=l.env,o.environmentIntensity=1,Qo.uPano.value=l.pano.texture;const f=new Ba(16777215,3),g=new Ba(new oe(.62,.7,1),0);g.position.copy(Nu).multiplyScalar(1e3),o.add(f,f.target,g),f.castShadow=!0,f.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(f.shadow.camera,{left:-5.5,right:5.5,top:5.5,bottom:-5.5,near:1,far:120}),f.shadow.camera.updateProjectionMatrix(),f.shadow.bias=-4e-4,f.shadow.normalBias=.025,f.shadow.radius=2;let v=.1;const m=k=>k.r*.2126+k.g*.7152+k.b*.0722,p=new oe,x=JM({lowPower:n});x.material.uniforms.uPano.value=l.pano.texture;const b=x.material.uniforms,_=ZM();o.add(x,_);const C=r?null:KS(n?160:320);C&&o.add(C.points);const w=ZS(n?350:700);o.add(w.points);const A=QS(n?1500:3500);o.add(A.lines);const P={over:0,fog:0,rain:0};let F=null,y=null,M=null,D=null,N=null;const H=async()=>{F=await Zi(()=>import("./terrain-B8-xihun.js"),__vite__mapDeps([0,1,2]),import.meta.url);const{createTerrain:k,createShoreLights:$}=F;o.add(k({lowPower:n})),N=$({lowPower:n}),N.material.uniforms.uPx.value=s,o.add(N);const{createProps:Te}=await Zi(async()=>{const{createProps:ye}=await import("./props-DORTp3q9.js");return{createProps:ye}},__vite__mapDeps([3,0,1,2]),import.meta.url);if(y=Te({lowPower:n}),o.add(y.group),J){const{createMissions:ye}=await Zi(async()=>{const{createMissions:we}=await import("./missions-B_lOlJQ2.js");return{createMissions:we}},__vite__mapDeps([4,1,2]),import.meta.url);M=ye({scene:o,props:y,drive:J,isGame:document.body.hasAttribute("data-game")})}if(!r){const{createBirds:ye}=await Zi(async()=>{const{createBirds:we}=await import("./birds-CT43mrLq.js");return{createBirds:we}},__vite__mapDeps([5,1,2]),import.meta.url);D=ye(n?10:22),o.add(D.mesh)}},W=new wn;o.add(W);const z=6.2,K=US({renderer:i,lowPower:n,onProgress:k=>jo("scene:progress",k)}),q=K.model;q.scale.setScalar(z),q.position.y=.0575*z,W.add(q);const de=(()=>{const k=document.createElement("canvas");k.width=k.height=64;const $=k.getContext("2d"),Te=$.createRadialGradient(32,32,0,32,32,32);return Te.addColorStop(0,"rgba(255,255,255,1)"),Te.addColorStop(.25,"rgba(214,186,236,0.6)"),Te.addColorStop(1,"rgba(214,186,236,0)"),$.fillStyle=Te,$.fillRect(0,0,64,64),new hh(k)})();let J=null,me=0;const Ke=[[.49,.13,-.296,16726570],[.49,.13,.296,3866474]].map(([k,$,Te,ye])=>{const we=new oh(new sl({map:de,color:new oe(ye).multiplyScalar(2.5),transparent:!0,depthWrite:!1,blending:gn}));return we.scale.setScalar(.05),we.position.set(k,$,Te),q.add(we),we}),et=new Qt(4,4,{type:Nn,samples:n?0:2});b.uReflect.value=et.texture;const Z=new Xt,he=new di,Se=new ft,_e=new ft,Fe=new T,He=new T;function Qe(){c.updateMatrixWorld(),Fe.set(0,0,-1).applyQuaternion(c.quaternion),He.set(0,1,0).applyQuaternion(c.quaternion),Z.position.set(c.position.x,-c.position.y,c.position.z),Fe.y=-Fe.y,He.y=-He.y,Z.up.copy(He),Z.lookAt(Z.position.x+Fe.x,Z.position.y+Fe.y,Z.position.z+Fe.z),Z.far=c.far,Z.updateMatrixWorld(),Z.projectionMatrix.copy(c.projectionMatrix);const k=b.uReflectMatrix.value;k.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),k.multiply(Z.projectionMatrix).multiply(Z.matrixWorldInverse),he.set(new T(0,1,0),.05).applyMatrix4(Z.matrixWorldInverse),Se.set(he.normal.x,he.normal.y,he.normal.z,he.constant);const $=Z.projectionMatrix;_e.x=(Math.sign(Se.x)+$.elements[8])/$.elements[0],_e.y=(Math.sign(Se.y)+$.elements[9])/$.elements[5],_e.z=-1,_e.w=(1+$.elements[10])/$.elements[14],Se.multiplyScalar(2/Se.dot(_e)),$.elements[2]=Se.x,$.elements[6]=Se.y,$.elements[10]=Se.z+1,$.elements[14]=Se.w,Z.projectionMatrixInverse.copy($).invert();const Te=[x,_,C&&C.points].filter(Boolean),ye=Te.map(we=>we.visible);Te.forEach(we=>we.visible=!1),i.setRenderTarget(et),i.clear(),i.render(o,Z),i.setRenderTarget(null),Te.forEach((we,Ue)=>we.visible=ye[Ue])}const Je=YS(i,o,c,{lowPower:n}),ae=[...document.querySelectorAll("[data-stage]")],I=new Set(ae.map(k=>k.dataset.stage));let ue=null,pe=null;if(I.has("course")){const{createCourse:k}=await Zi(async()=>{const{createCourse:$}=await import("./course-DYt1txAR.js");return{createCourse:$}},__vite__mapDeps([6,1,2]),import.meta.url);ue=k(),ue.setOpacity(0),ue.route.material.uniforms.uPx.value=s,o.add(ue.group)}let ce=null;I.has("globe")&&(ce=await BS({lowPower:n}),ce.setOpacity(0),o.add(ce.group));let ve=null;const Le=document.querySelector('[data-stage="photo"]');if(Le&&Le.dataset.src)try{ve=await JS(Le.dataset.src,{lowPower:n}),o.add(ve.points)}catch{Le.classList.add("is-formed")}if(I.has("coast")){const{createCoast:k}=await Zi(async()=>{const{createCoast:$}=await import("./coast-CbHUlEfQ.js");return{createCoast:$}},__vite__mapDeps([7,1,2]),import.meta.url);pe=k(n?.6:1),pe.setOpacity(0),pe.setPx(s),o.add(pe.group)}const ge=ae.map(k=>{const $=k.querySelector("[data-labels]"),ye=(k.dataset.parts||"").split(",").filter(Boolean).map(we=>{const Ue=document.createElement("div");return Ue.className="hotspot",Ue.innerHTML=`<i></i><span>${fa[we].label}</span>`,$&&$.appendChild(Ue),{key:we,el:Ue,v:new T}});return{el:k,kind:k.dataset.stage,view:k.dataset.view||"",offset:parseFloat(k.dataset.offset||"0"),steps:[...k.querySelectorAll("[data-part]")],listMode:k.dataset.mode==="list",labels:$?ye:[],cities:k.querySelector("[data-cities]"),tasks:[...k.querySelectorAll("[data-task]")],through:k.hasAttribute("data-through"),arcStart:parseFloat(k.dataset.arcStart||"0.45"),zoom:parseFloat(k.dataset.zoom||"1"),anchor:k.dataset.anchor?k.querySelector(k.dataset.anchor):null,globePins:[...k.querySelectorAll("[data-globe-pin]")],p:0,w:0,active:null}}),R=ge.find(k=>k.kind==="hero");let S=null;R&&R.el.dataset.title&&FS(R.el.dataset.title).then(k=>{S=k,o.add(k),document.documentElement.classList.add("has-3d-title")});function X(){const k=innerHeight;for(const $ of ge){const Te=$.el.getBoundingClientRect();if($.kind==="hero"){$.p=lt(-Te.top/Math.max(1,Te.height)),$.w=1-zn(lt((-Te.top-Te.height*.05)/(Te.height*.75)));continue}if($.kind==="photo"){$.w=zn(lt((k-Te.top)/(k*.4)))*zn(lt(Te.bottom/(k*.4)));continue}const ye=Math.max(1,$.el.offsetHeight-k);$.p=$.through?lt((k-Te.top)/(k+Te.height)):lt(-Te.top/ye);const we=lt(1-Te.top/(k*.85)),Ue=lt((Te.bottom-k*.15)/(k*.85));$.w=zn(Math.min(we,Ue));let nt=null;if($.listMode){let zt=1/0;for(const xn of $.steps){const Vt=xn.getBoundingClientRect(),ai=Math.abs(Vt.top+Vt.height/2-k*.5);ai<zt&&Vt.bottom>0&&Vt.top<k&&(zt=ai,nt=xn)}}else if($.steps.length){const zt=lt(($.p-.22)/.62);nt=$.p>.2&&$.p<.88?$.steps[Math.min($.steps.length-1,Math.floor(zt*$.steps.length*.999))]:null}if(nt!==$.active&&($.steps.forEach(zt=>zt.classList.toggle("is-on",zt===nt)),$.active=nt),$.tasks.length){const zt=Math.min($.tasks.length-1,Math.floor($.p*$.tasks.length*.999));$.tasks.forEach((xn,Vt)=>xn.classList.toggle("is-on",Vt===zt))}}}const ne=document.querySelector(".hero-home"),le=parseFloat(document.body.dataset.offset||(ne?"0.14":"0.3")),ee=new T,Re=new T,xe=new T,Ce=new Q,tt=new Q;addEventListener("pointermove",k=>{Ce.set(k.clientX/innerWidth*2-1,k.clientY/innerHeight*2-1)},{passive:!0});function fe(k,$,Te,ye){const we=-.9-$*4.33+k*.012,Ue=t?30:40;Te.set(Math.cos(we)*Ue,7+$*5,Math.sin(we)*Ue),ye.set(-Math.cos(we)*70,3,-Math.sin(we)*70)}const Ae={home:{a:-.95,r:15.5,rs:34,y:2.3,look:1,off:.25,offY:.02,offYs:.2},argus:{a:-.5,r:13.5,rs:31,y:1.7,look:1.4,off:0,offY:-.1,offYs:.04}};function Xe(k,$,Te){const ye=Ae[k.view]||Ae.home,we=r?0:Math.sin(ht*.09)*.14,Ue=ye.a+we+tt.x*.22+k.p*.5,nt=(t?ye.rs:ye.r)+k.p*6;return $.set(Math.cos(Ue)*nt,ye.y+k.p*5-tt.y*.35,Math.sin(Ue)*nt),Te.set(0,ye.look,0),ye}function qe(k,$,Te){let ye=-.55+k.p*Math.PI*1.7,we=2.6+Math.sin(k.p*Math.PI)*2.2;if(k.listMode){const nt=k.active&&fa[k.active.dataset.part],zt=nt?nt.a:-.5,xn=nt?nt.e:3;k.a===void 0&&(k.a=zt,k.e=xn);let Vt=zt-k.a;Vt=Math.atan2(Math.sin(Vt),Math.cos(Vt)),k.a+=Vt*.045,k.e+=(xn-k.e)*.045,ye=k.a+k.p*.6,we=k.e}const Ue=k.listMode?t?15:13.5:t?11:9.2;$.set(Math.cos(ye)*Ue,we*(k.listMode?1.35:1),Math.sin(ye)*Ue),Te.set(0,.9,0)}let Me=0;function ct(k,$,Te){Me=It(ue.phases[0],1,k);const ye=ue.curve.getPointAt(lt(Me)),we=ue.curve.getPointAt(lt(Me+.035)),Ue=ee.copy(we).sub(ye).normalize(),nt=t?1.9:1;return $.set(ye.x-(Ue.x*16+Ue.z*8)*nt,t?17:9.5,ye.z-(Ue.z*16-Ue.x*8)*nt),Te.set(we.x,.5,we.z),ye}const Ye=new T;function Tt(k,$,Te){if(t){const ye=pe.pins,we=lt(k*1.1)*(ye.length-1),Ue=Math.min(ye.length-2,Math.floor(we));Ye.copy(ye[Ue].top).lerp(ye[Ue+1].top,we-Ue).setY(0),$.set(Ye.x+10,150,Ye.z+95),Te.copy(Ye).setZ(Ye.z-25);return}$.set(60+k*40,190-k*30,150-k*90),Te.set(95+k*30,0,-10-k*40)}let U=innerWidth,G=innerHeight;function L(){U=innerWidth,G=innerHeight,i.setPixelRatio(a),i.setSize(U,G,!1),c.aspect=U/G,c.updateProjectionMatrix(),Je.setSize(U,G,a);const k=n?.35:.5;et.setSize(Math.round(U*a*k),Math.round(G*a*k)),K.points.uProj.value=G*a/(2*Math.tan(mn.degToRad(c.fov/2))),ce&&ce.setPx(1,K.points.uProj.value)}addEventListener("resize",L);const O={start:-1,done:r},se=1.5,re=1.7;let te=ha,Oe=0,Ge=0;const Ve=new T(99,99,99);r&&(K.points.uAssemble.value=1,te=Es);let rt=0;const ut=[[],[],[]];J=$S({camera:c,reduced:r,spray:w,getBoat:()=>({pos:W.position,heading:rt}),getElev:()=>d,landHeight:(k,$)=>F?F.landHeight(k,$):-10,obstacles:()=>y?y.obstacles:[],colliders:()=>(ut[0]=F?F.COLLIDERS:[],ut[1]=y?y.colliders:[],ut[2]=M?M.colliders:[],ut),buoys:()=>y?y.buoys:[],onPing:k=>{b.uRipple.value[me].set(k.x,k.z,ht,2.4),me=(me+1)%zc}});const Et=()=>{O.done=!0,te=Es,J.start()};addEventListener("drive:start",Et),document.addEventListener("click",k=>{k.target.closest&&k.target.closest("[data-drive]")&&(k.preventDefault(),Et())}),document.documentElement.classList.add("can-drive");const Gt=[...document.querySelectorAll(".win-box, [data-win]")],it=new Map,St=()=>Gt.forEach(k=>it.set(k,parseFloat(getComputedStyle(k).borderTopLeftRadius)||0));St(),addEventListener("resize",St);let Rt="";const wt=(k,$,Te,ye,we)=>{we=Math.min(we,Te/2,ye/2);const Ue=nt=>Math.round(nt*10)/10;return`M${Ue(k+we)} ${Ue($)}H${Ue(k+Te-we)}A${Ue(we)} ${Ue(we)} 0 0 1 ${Ue(k+Te)} ${Ue($+we)}V${Ue($+ye-we)}A${Ue(we)} ${Ue(we)} 0 0 1 ${Ue(k+Te-we)} ${Ue($+ye)}H${Ue(k+we)}A${Ue(we)} ${Ue(we)} 0 0 1 ${Ue(k)} ${Ue($+ye-we)}V${Ue($+we)}A${Ue(we)} ${Ue(we)} 0 0 1 ${Ue(k+we)} ${Ue($)}Z`};function Pt(k){let $="";if(k)$="full";else for(const ye of Gt){const we=ye.getBoundingClientRect();we.bottom<=0||we.top>=innerHeight||we.width<2||we.height<2||ye.closest(".is-formed")||($+=wt(we.left,we.top,we.width,we.height,it.get(ye)||0))}const Te=$==="full"?"none":$?`path('${$}')`:"inset(50%)";return Te!==Rt&&(e.style.clipPath=Te,Rt=Te),!!$}const jt=new ka;let ht=0,Un=!0;document.addEventListener("visibilitychange",()=>Un=!document.hidden);let Kn=0,ki=0,zi=0,ls=0;const E=new T;let B=1,j=0;const Y=new Q(1e9,1e9),V=new ka(!1);let be=null;const Pe=()=>be!==null?be:V.getElapsedTime();function De(){if(requestAnimationFrame(De),!Un)return;const k=jt.getDelta(),$=Math.min(k,window.__dtMax||.05);if(r||(ht+=$),Be(k),X(),!Pt(J&&(J.active||J.outBlend>0))&&!(O.start>=0&&!O.done))return;const Te=Math.max(1,document.documentElement.scrollHeight-innerHeight),ye=lt(scrollY/Te);fe(ht,ye,Re,xe);const we=new T;let Ue=1,nt=t&&!R?0:1,zt=0,xn=0,Vt=0,ai=0,oi=null,Wr=0,Qa=0,En=t?0:le,ci=0,Qs=0,$a=null;tt.lerp(Ce,1-Math.exp(-$*2.8));for(const ie of ge){if(ie.w<=.001)continue;const yt=new T,On=new T;if(ie.kind==="hero"){const Kt=Xe(ie,yt,On);nt=Math.max(nt,ie.w),En=It(En,t?0:Kt.off,ie.w),ci=It(ci,t?Kt.offYs:Kt.offY,ie.w)}else if(ie.kind==="argus"){nt=Math.max(nt,ie.w),qe(ie,yt,On),En=It(En,t?0:ie.offset,ie.w),t&&ie.listMode&&(ci=It(ci,.25,ie.w));const Kt=ie.listMode?1:zn(lt((ie.p-.06)/.16))*(1-zn(lt((ie.p-.86)/.12)));Qs=Math.max(Qs,Kt*lt(ie.w*1.6-.3)),ie.active&&ie.w>.5&&($a=ie.active.dataset.part)}else if(ie.kind==="course"&&ue){nt=Math.max(nt,ie.w);const Kt=ct(ie.p,yt,On);we.lerp(Kt,ie.w),zt=Math.max(zt,ie.w),En=It(En,0,ie.w)}else if(ie.kind==="globe"&&ce){const Kt=zn(lt((ie.p-ie.arcStart)/.38));ai=Math.max(ai,Kt),Vt=Math.max(Vt,ie.w),oi=ie;const Si=It(ei.trondheim.lat,ei.sarasota.lat,Kt*.85),Xr=It(ei.trondheim.lon,ei.sarasota.lon,Kt*.85);ce.face(Si*.8,Xr+(r?0:Math.sin(ht*.12)*4));let tr=(hi*(t?5.8:4.3)-ie.p*hi*.4)*ie.zoom,qr=t?0:ie.offset,Hh=t?.12:0;if(ie.anchor){const nr=ie.anchor.getBoundingClientRect();qr=(nr.left+nr.width/2-U/2)/U,Hh=-(nr.top+nr.height/2-G/2)/G;const Dm=Math.min(nr.width,nr.height)*.46;tr=hi*(G/2)/(Dm*Math.tan(mn.degToRad(c.fov/2))),Wr=Math.max(Wr,ie.w)}yt.set(Rs.x+tt.x*3,Rs.y,Rs.z+tr),On.copy(Rs),nt=Math.min(nt,1-ie.w),Ue=It(Ue,.4,ie.w),En=It(En,qr,ie.w),ci=It(ci,Hh,ie.w)}else if(ie.kind==="photo"&&ve){ie.w>.5&&ie.t0===void 0&&(ie.t0=ht);const Kt=ie.t0===void 0?0:ht-ie.t0;ve.U.uAssemble.value=r?1:lt(Kt/1.9),ve.U.uScan.value=r?2:It(-.1,1.1,lt((Kt-.5)/1.7)),(Kt>2.2||r)&&ie.el.classList.add("is-formed"),Qa=Math.max(Qa,ie.w*(Kt<2.6?1:Math.max(0,1-(Kt-2.6)/.9)));const Si=ie.el.getBoundingClientRect(),Xr=Math.tan(mn.degToRad(c.fov/2)),tr=ve.width*U/(2*Xr*c.aspect*Math.max(80,Si.width)),qr=lt(1-(Kt-1.9)/.5);yt.set(da.x+tt.x*tr*.1*qr,da.y-tt.y*tr*.06*qr,da.z+tr),On.copy(da),En=It(En,(Si.left+Si.width/2-U/2)/U,ie.w),ci=It(ci,-(Si.top+Si.height/2-G/2)/G,ie.w),Wr=Math.max(Wr,ie.w),nt=Math.min(nt,1-ie.w),Ue=It(Ue,.5,ie.w)}else ie.kind==="coast"&&pe&&(Tt(ie.p,yt,On),xn=Math.max(xn,ie.w),nt=Math.min(nt,1-ie.w),Ue=It(Ue,.45,ie.w),En=It(En,t?0:ie.offset,ie.w));Re.lerp(yt,ie.w),xe.lerp(On,ie.w)}if(Re.x+=tt.x*.6,Re.y+=-tt.y*.3,ee.copy(Re).sub(we).setY(Math.max(Re.y-1,0)),ee.length()<8.5&&Re.copy(we).add(ee.setLength(8.5)).setY(Math.max(Re.y,1.2)),!O.done&&O.start>=0){const ie=Pe();K.points.uAssemble.value=lt(ie/se);const yt=ew((ie-se*.75)/re);te=It(ha,Es,yt),Oe=0,ie>se*.75+re&&(O.done=!0,jo("scene:intro-done"))}else if(O.done){const ie=It(Es,ha,Qs),yt=$*1.4;te+=lt(ie-te,-yt,yt),window.__snap&&(te=ie),te<Es-.005?Oe=1:Oe=0}K.uniforms.uCut.value=te,K.uniforms.uGhost.value=Oe,Ge=It(Ge,$a&&Qs>.5?1:0,window.__snap?1:1-Math.exp(-$*5)),$a&&Ve.fromArray(fa[$a].p),K.points.uHi.value.lerp(Ve,1-Math.exp(-$*8)),K.points.uHiOn.value=Ge,K.uniforms.uTime.value=ht;const Ih=J&&(J.active||J.outBlend>0)?J.weather:null,Rm=window.__snap?1:1-Math.exp(-$*.8);for(const ie of["over","fog","rain"]){const yt=Ih?Ih[ie]:0;P[ie]+=(yt-P[ie])*Rm,Math.abs(yt-P[ie])<.002&&(P[ie]=yt)}const Hi=P.over;l.setOvercast(Hi),l.uniforms.uCloud.value=It(.56,1.1,Hi),Qo.uFog.value=36e3*Math.pow(420/36e3,P.fog);const Cm=J&&J.active?J.sunElev:It(h,-5,zn(lt((ye-.04)/.92)));d+=(Cm-d)*(1-Math.exp(-$*2.5)),Math.abs(d-l.state.elev)>.03&&l.setSun(d,u),l.bake()&&(o.environment=l.env);const Rn=l.state,Cn=Rn.night;l.skyAt(0,1,0,p),v+=(m(p)-v)*.2,f.color.copy(Rn.sunColor),f.intensity=3.2*(1-.9*Hi),f.position.copy(Rn.dir).multiplyScalar(1e3).add(xe),f.target.position.copy(xe);const Pm=lt(Math.pow(.1/Math.max(v,1e-4),.5),.85,4.2);g.intensity=Cn*.35,B+=(Pm-B)*(1-Math.exp(-$*3)),Qo.uNight.value=Cn,N&&(N.material.uniforms.uNight.value=Cn/B,N.visible=Cn>.02);let yl=0;for(const ie of ge)yl=Math.max(yl,ie.w);J&&J.active&&(yl=1);const Lh=1,Dh=J&&J.active?1:R?R.w:0;Ue*=Lh;let Fn=0,Ml=0;if(J&&J.active)J.update($,ht),we.set(J.pos.x,0,J.pos.z),Fn=J.heading,Ml=J.speed,nt=1,Re.copy(J.camPos),xe.copy(J.camLook),En=0,ci=0,Qs=0;else if(zt>.001&&ue){const ie=ue.curve.getPointAt(lt(Me)),yt=ue.curve.getPointAt(lt(Me+.01));Fn=-Math.atan2(yt.z-ie.z,yt.x-ie.x),Fn*=zt}if(J&&!J.active&&J.outBlend>0){const ie=zn(J.outBlend);J.fade($),we.lerp(J.pos,ie);let yt=J.heading-Fn;yt=Math.atan2(Math.sin(yt),Math.cos(yt)),Fn+=yt*ie,Re.lerp(J.camPos,ie),xe.lerp(J.camLook,ie),nt=Math.max(nt,ie)}rt=Fn;const $s=we.x,er=we.z,Nh=_f($s,er,ht,1),[Uh,Fh]=kM($s,er,ht,1);W.position.set($s,Nh*.8,er),K.uniforms.uWater.value=Nh;const Im=J&&J.active?J.pitch:0,Lm=J&&J.active?J.roll:0;if(W.rotation.set(0,0,0),W.rotateY(Fn),W.rotateZ((Uh*Math.cos(Fn)-Fh*Math.sin(Fn))*1.1+Im),W.rotateX(-(Uh*Math.sin(Fn)+Fh*Math.cos(Fn))*1.1+Lm),W.visible=nt>.02,K.points.uOpacity.value=nt,K.points.uGain.value=1/B,K.uniforms.uEdgeGain.value=1/B,q.traverse(ie=>{ie.isMesh&&(ie.material.transparent=nt<.999,ie.material.opacity=nt)}),Math.hypot($s-Y.x,er-Y.y)>1.3&&W.visible){const ie=J&&J.active?lt(Ml/14):zt>.1?.6:0;ie>.02&&(b.uWake.value[j].set($s,er,ht,ie),j=(j+1)%Uu),Y.set($s,er)}c.position.copy(Re),c.lookAt(xe);const Oh=Wr>.5?1:1-Math.exp(-$*5);if(ki=It(ki,En,Oh),zi=It(zi,ci,Oh),Math.abs(ki)>.002||Math.abs(zi)>.002?c.setViewOffset(U,G,-ki*U,zi*G,U,G):c.clearViewOffset(),S&&R){const ie=Ae[R.view]||Ae.home,yt=t?ie.rs:ie.r;E.set(-Math.cos(ie.a)*7,2.3+(t?.5:0),-Math.sin(ie.a)*7),S.position.copy(E),S.lookAt(Math.cos(ie.a)*yt,2.3,Math.sin(ie.a)*yt);const Si=2*(yt+7)*Math.tan(mn.degToRad(c.fov/2))*c.aspect*(t?.94:.86);S.scale.setScalar(Si/S.userData.aspect);const Xr=O.done||r?R.w:lt((Pe()-se*.75-re*.5)/.8)*R.w;ls=Math.min(ls+(Xr-ls)*(1-Math.exp(-$*3)),R.w)*(J&&J.active?0:1),S.material.opacity=ls,S.material.color.setScalar(.95/B),S.visible=ls>.01}Kn+=$*2.4,b.uTime.value=ht,b.uCenter.value.set(Math.round(c.position.x),Math.round(c.position.z)),b.uBoat.value.set(W.position.x,W.position.z),b.uBoatDir.value.set(Math.cos(-Fn),Math.sin(-Fn)),b.uBoatSpeed.value=lt(Ml/14),b.uBoatOn.value=W.visible?1:0,b.uSweepAngle.value=-Kn,b.uCam.value.copy(c.position),b.uDim.value=Ue,b.uSweep.value=nt*(O.done?1:lt(te-ha))*(1-Qs*.5)*.6/B;for(const ie of Ke)ie.material.opacity=Cn*nt,ie.visible=Cn>.05&&W.visible;if(Rn.elev>-2?(b.uSun.value.copy(Rn.dir),b.uSunCol.value.copy(Rn.sunColor)):(b.uSun.value.copy(Nu),b.uSunCol.value.setRGB(.0022,.0025,.003).multiplyScalar(Cn)),b.uNight.value=Cn,b.uBody.value.setRGB(.02,.075,.09).multiplyScalar(Math.max(v,.0015)*1.3),l.uniforms.uDim.value=It(1,Ue,.6),l.uniforms.uSunVis.value=(.15+.85*Dh)*(1-zn(lt(Hi/.8))),b.uGlit.value=(.3+.7*Dh)*(J&&J.active?.6:1)*(1-Hi),b.uFog.value=5200*Math.pow(340/5200,P.fog),b.uRain.value=P.rain,b.uChop.value=1+.35*Hi+.5*P.rain,K.uniforms.uWetAll.value=P.rain,A.lines.visible=P.rain>.01,A.lines.visible&&(A.uniforms.uTime.value=ht,A.uniforms.uCam.value.copy(c.position),A.uniforms.uAmount.value=P.rain,A.uniforms.uCol.value.copy(p).multiplyScalar(1.5).addScalar(.004*Cn)),l.update(ht),_.position.set(W.position.x,.25,W.position.z),_.rotation.y=Kn,_.material.uniforms.uOpacity.value=nt*(1-xn)*(O.done?1:0)*(.15+Cn*.35)/B,ue){ue.setOpacity(zt),ue.route.material.uniforms.uU.value=Me,ue.route.material.uniforms.uTime.value=ht;for(const On of ue.floaters)On.obj.position.y=_f(On.x,On.z,ht,1)*.8+On.lift;const ie=ue.otter,yt=lt((Me-ue.phases[2])/(ue.phases[3]-ue.phases[2]));ie.obj.position.set(ie.x,ie.obj.position.y,ie.z-yt*56)}if(ve&&(ve.U.uOpacity.value=Qa,ve.U.uProj.value=K.points.uProj.value,ve.points.visible=Qa>.01),ce&&(ce.setOpacity(Vt/Math.sqrt(B)),ce.update(ht,ai,0),_.material.uniforms.uOpacity.value*=1-Vt,oi&&Dt(oi,ai)),pe){pe.setOpacity(xn/Math.sqrt(B));const ie=ge.find(yt=>yt.kind==="coast");pe.routeMat.uniforms.uTo.value=ie?lt(ie.p*1.15):0,pe.routeMat.uniforms.uTime.value=ht,ie&&ie.cities&&_t(ie)}y&&y.update(ht,$,Cn),M&&M.update(ht,$,B),w.update($),w.uniforms.uCol.value.copy(Rn.sunColor).multiplyScalar(Math.max(Rn.dir.y,0)*2.2).add(p).multiplyScalar(1.4),w.uniforms.uProj.value=K.points.uProj.value,D&&D.update(ht,$,zn(lt((Cn-.25)/.5))),J&&J.active&&y&&J.collide(y.buoys),At(),C&&(C.points.visible=!(J&&J.active),C.update(ht,c.position,K.points.uProj.value,(.25+.5*Cn)*(1-Vt*.6)/B));const hs=Je.grade.uniforms;hs.uExposure.value=B,hs.uDim.value=1,Je.bloom.threshold=2.4/B,Je.bloom.strength=(.45+Cn*.25)*It(.5,1,Lh),ee.copy(Rn.dir).multiplyScalar(1e3).add(c.position).project(c),hs.uSunPos.value.set(ee.x*.5+.5,ee.y*.5+.5),hs.uSunOn.value=Rn.elev>-1.5&&ee.z<1?1:0,hs.uSunCol.value.copy(Rn.sunColor);const Bh=J&&J.active?1:R?R.w:0,kh=J&&J.active?.55:1,zh=1-zn(lt(Hi/.6));hs.uRays.value=r?0:.9*(1-zn(lt((Rn.elev-6)/18)))*Bh*kh*zh,hs.uFlare.value=Bh*kh*zh,f.position.copy(Rn.dir).multiplyScalar(50).add(W.position),f.target.position.copy(W.position),f.castShadow=Rn.elev>.3&&Hi<.6&&W.visible&&te>Es-.02,i.shadowMap.needsUpdate=f.castShadow,b.uReflectOn.value>0&&Qe(),Je.render(ht)}let Ne=0,We=0,$e=2;function Be(k){if(k>.25||(Ne+=k,We++,We<90))return;const $=Ne/We;Ne=We=0,!($e-- >0)&&($>1/38&&a>.76?(a=Math.max(.75,a*.82),Je.bloom.enabled=a>.9||!n,L()):$<1/57&&a<s-.01&&(a=Math.min(s,a*1.1),L()))}function At(){for(const k of ge){if(!k.labels.length)continue;const $=k.w>.55&&Oe>.5,Te=k.active?k.active.dataset.part:null;for(const ye of k.labels){ye.v.fromArray(fa[ye.key].p),q.localToWorld(ye.v),ye.v.project(c);const we=(ye.v.x*.5+.5)*U,Ue=(-ye.v.y*.5+.5)*G,nt=ye.v.z>1;ye.el.style.setProperty("--x",`${we}px`),ye.el.style.setProperty("--y",`${Ue}px`),ye.el.classList.toggle("is-shown",$&&!nt&&(!Te||Te===ye.key||!k.listMode)),ye.el.classList.toggle("is-on",Te===ye.key)}}}const pt=new T;function Dt(k,$){ce.group.updateMatrixWorld(!0);for(const Te of k.globePins){const ye=Te.dataset.globePin;ye==="mid"?pt.copy(ce.arcMid):pt.copy(ce.pins.find(oi=>oi.key===ye).top),ce.worldOf(pt,pt);const we=c.position.clone().sub(Rs).normalize(),Ue=pt.clone().sub(Rs).normalize().dot(we);pt.project(c);const nt=Te.offsetWidth||160;Te.style.setProperty("--x",`${Math.min((pt.x*.5+.5)*U,U-nt-24)}px`),Te.style.setProperty("--y",`${(-pt.y*.5+.5)*G}px`);const zt=ye==="trondheim"?0:ye==="mid"?.55:.97,xn=(pt.x*.5+.5)*U,Vt=(-pt.y*.5+.5)*G;let ai=!0;if(k.anchor){const oi=k.anchor.getBoundingClientRect();ai=xn>oi.left&&xn<oi.right&&Vt>oi.top&&Vt<oi.bottom}Te.classList.toggle("is-shown",k.w>.82&&Ue>.05&&$>=zt&&ai)}}let an=null;function _t(k){an||(an=pe.pins.map(Te=>{const ye=document.createElement("div");return ye.className="hotspot city"+(Te.city.home?" is-home":""),ye.innerHTML=`<i></i><span>${Te.city.home?"Trondheim · home port":Te.city.name}</span>`,k.cities.appendChild(ye),{pin:Te,el:ye,v:new T}}));const $=lt(k.p*1.15);for(const Te of an){Te.v.copy(Te.pin.top).project(c),Te.el.style.setProperty("--x",`${(Te.v.x*.5+.5)*U}px`),Te.el.style.setProperty("--y",`${(-Te.v.y*.5+.5)*G}px`);const ye=pe.pins.indexOf(Te.pin);Te.el.classList.toggle("is-shown",k.w>.5&&pe.cityU[ye]<=$+.02)}}const ke=new Mm,Yt=new di(new T(0,1,0),0),gt=new T,Tn=new Q;let Mi=0;function hn(k,$){return Tn.set(k/innerWidth*2-1,-($/innerHeight)*2+1),ke.setFromCamera(Tn,c),ke.ray.intersectPlane(Yt,gt)&&gt.distanceTo(c.position)<420?gt:null}function Zs(k,$){b.uRipple.value[me].set(k.x,k.z,ht,$),me=(me+1)%zc}const Ut="a,button,input,textarea,select,label,summary,[role=button],[tabindex],.drive-hud",Jn=(k,$)=>Gt.some(Te=>{const ye=Te.getBoundingClientRect();return k>=ye.left&&k<=ye.right&&$>=ye.top&&$<=ye.bottom});addEventListener("pointerdown",k=>{if(r||k.target.closest&&k.target.closest(Ut)||!Jn(k.clientX,k.clientY))return;const $=hn(k.clientX,k.clientY);$&&(Zs($,1.2),w.splash($.x,$.z,.7))},{passive:!0}),addEventListener("pointermove",k=>{if(r||k.pointerType!=="mouse"||ht-Mi<.22||!Jn(k.clientX,k.clientY))return;const $=hn(k.clientX,k.clientY);$&&(Mi=ht,Zs($,.35))},{passive:!0}),/[?&]debug\b/.test(location.search)&&(window.__dbg={THREE:BM,scene:o,camera:c,renderer:i,coast:pe,course:ue,globe:ce,argus:K,post:Je,sky:l,water:x,get drive(){return J},get props(){return y},get missions(){return M},landHeight:(k,$)=>F?F.landHeight(k,$):null,get colliders(){return F?F.COLLIDERS:[]},setIntro:k=>{be=k,O.done=!1,O.start=0},setSunTop:k=>h=k}),await K.ready,q.traverse(k=>{k.isMesh&&(k.castShadow=k.receiveShadow=!0)}),L(),jo("scene:ready");const us=()=>{O.start>=0||(O.start=0,V.start())};return document.documentElement.classList.contains("is-loading")?window.addEventListener("loader:done",us,{once:!0}):us(),setTimeout(us,4e3),requestAnimationFrame(De),requestAnimationFrame(()=>e.classList.add("is-ready")),setTimeout(()=>H().catch(k=>console.warn("world failed",k)),80),{renderer:i,scene:o,camera:c}}const rw=Object.freeze(Object.defineProperty({__proto__:null,PARTS:fa,startScene:tw},Symbol.toStringTag,{value:"Module"}));export{gn as A,ln as B,ul as C,Ln as D,Wn as E,Ie as F,wn as G,Xp as H,pl as I,bn as J,Ja as K,jn as L,DS as M,Zt as N,fh as O,_i as P,cn as Q,bi as R,Mt as S,rw as T,T as V,QM as a,xt as b,_f as c,kM as d,Gr as e,oe as f,oh as g,sl as h,hh as i,je as j,Ze as k,lh as l,ze as m,rs as n,as as o,st as p,rn as q,Oi as r,Q as s,mn as t,Jt as u,Vs as v,sw as w,Hp as x,is as y,Li as z};
