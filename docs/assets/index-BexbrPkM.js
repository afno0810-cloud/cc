const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./terrain-0OKTOW1R.js","./main-Bm4w1JEV.js","./main-Dmzve_xN.css","./props-Vq6MTVeB.js","./missions-B8AfCl3w.js","./RoundedBoxGeometry-u23EG6ty.js","./taskart--jbd4T_-.js","./hudfx-B6y17fHQ.js","./places-Dqdkkz7J.js","./boats-BbT6cIeO.js","./score-hT9aZCLI.js","./postfx-rfwifhop.js","./autopilot-BeBv6DYc.js","./birds-B_IUDn9q.js","./course-IpGOpRQe.js","./coast-BGanyN1v.js"])))=>i.map(i=>d[i]);
import{_ as On}from"./main-Bm4w1JEV.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xc="169",eg={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},tg={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yf=0,Tu=1,Kf=2,ng=3,ig=0,ju=1,Yu=2,bi=3,Ai=0,un=1,Fn=2,Si=0,os=1,bn=2,Eu=3,Ru=4,Jf=5,as=100,Zf=101,Qf=102,$f=103,ep=104,tp=200,np=201,ip=202,sp=203,ic=204,sc=205,rp=206,ap=207,op=208,cp=209,lp=210,up=211,hp=212,dp=213,fp=214,rc=0,ac=1,oc=2,qs=3,cc=4,lc=5,uc=6,hc=7,Xa=0,pp=1,mp=2,zi=0,gp=1,vp=2,bp=3,xp=4,_p=5,yp=6,Mp=7,Cu="attached",Sp="detached",qc=300,Hi=301,ls=302,js=303,Ra=304,Xr=306,Ti=1e3,Xn=1001,Fr=1002,Kt=1003,jc=1004,sg=1004,ks=1005,rg=1005,Rt=1006,Lr=1007,ag=1007,qn=1008,og=1008,Ei=1009,Ku=1010,Ju=1011,kr=1012,Yc=1013,Gi=1014,kn=1015,Bn=1016,Kc=1017,Jc=1018,Ys=1020,Zu=35902,Qu=1021,$u=1022,xn=1023,eh=1024,th=1025,Vs=1026,Ks=1027,Zc=1028,qa=1029,nh=1030,Qc=1031,cg=1032,$c=1033,xa=33776,_a=33777,ya=33778,Ma=33779,dc=35840,fc=35841,pc=35842,mc=35843,gc=36196,vc=37492,bc=37496,xc=37808,_c=37809,yc=37810,Mc=37811,Sc=37812,wc=37813,Ac=37814,Tc=37815,Ec=37816,Rc=37817,Cc=37818,Pc=37819,Ic=37820,Lc=37821,Sa=36492,Dc=36494,Nc=36495,ih=36283,Uc=36284,Oc=36285,Fc=36286,wp=2200,Ap=2201,Tp=2202,Br=2300,zr=2301,Qo=2302,Bs=2400,zs=2401,Ca=2402,el=2500,sh=2501,Ep=0,rh=1,kc=2,Rp=3200,Cp=3201,lg=3202,ug=3203,ds=0,Pp=1,yi="",Yt="srgb",qt="srgb-linear",tl="display-p3",ja="display-p3-linear",Pa="linear",Pt="srgb",Ia="rec709",La="p3",hg=0,Ls=7680,dg=7681,fg=7682,pg=7683,mg=34055,gg=34056,vg=5386,bg=512,xg=513,_g=514,yg=515,Mg=516,Sg=517,wg=518,Pu=519,Ip=512,Lp=513,Dp=514,ah=515,Np=516,Up=517,Op=518,Fp=519,Da=35044,Iu=35048,Ag=35040,Tg=35045,Eg=35049,Rg=35041,Cg=35046,Pg=35050,Ig=35042,Lg="100",Lu="300 es",Mi=2e3,Na=2001;class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let id=1234567;const Ws=Math.PI/180,Hr=180/Math.PI;function jn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function Ht(r,e,t){return Math.max(e,Math.min(t,r))}function oh(r,e){return(r%e+e)%e}function Dg(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Ng(r,e,t){return r!==e?(t-r)/(e-r):0}function wa(r,e,t){return(1-t)*r+t*e}function Ug(r,e,t,n){return wa(r,e,1-Math.exp(-t*n))}function Og(r,e=1){return e-Math.abs(oh(r,e*2)-e)}function Fg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function kg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Bg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function zg(r,e){return r+Math.random()*(e-r)}function Hg(r){return r*(.5-Math.random())}function Gg(r){r!==void 0&&(id=r);let e=id+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vg(r){return r*Ws}function Wg(r){return r*Hr}function Xg(r){return(r&r-1)===0&&r!==0}function qg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function jg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Yg(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),u=s((e+n)/2),l=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*l,c*h,c*d,o*u);break;case"YZY":r.set(c*d,o*l,c*h,o*u);break;case"ZXZ":r.set(c*h,c*d,o*l,o*u);break;case"XZX":r.set(o*l,c*m,c*f,o*u);break;case"YXY":r.set(c*f,o*l,c*m,o*u);break;case"ZYZ":r.set(c*m,c*f,o*l,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function dt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ln={DEG2RAD:Ws,RAD2DEG:Hr,generateUUID:jn,clamp:Ht,euclideanModulo:oh,mapLinear:Dg,inverseLerp:Ng,lerp:wa,damp:Ug,pingpong:Og,smoothstep:Fg,smootherstep:kg,randInt:Bg,randFloat:zg,randFloatSpread:Hg,seededRandom:Gg,degToRad:Vg,radToDeg:Wg,isPowerOfTwo:Xg,ceilPowerOfTwo:qg,floorPowerOfTwo:jg,setQuaternionFromProperEuler:Yg,normalize:dt,denormalize:En};class ${constructor(e=0,t=0){$.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,i,s,a,o,c,u){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,u)}set(e,t,n,i,s,a,o,c,u){const l=this.elements;return l[0]=e,l[1]=i,l[2]=o,l[3]=t,l[4]=s,l[5]=c,l[6]=n,l[7]=a,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],l=n[4],h=n[7],d=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],x=i[1],b=i[4],_=i[7],C=i[2],M=i[5],T=i[8];return s[0]=a*v+o*x+c*C,s[3]=a*g+o*b+c*M,s[6]=a*p+o*_+c*T,s[1]=u*v+l*x+h*C,s[4]=u*g+l*b+h*M,s[7]=u*p+l*_+h*T,s[2]=d*v+f*x+m*C,s[5]=d*g+f*b+m*M,s[8]=d*p+f*_+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8];return t*a*l-t*o*u-n*s*l+n*o*c+i*s*u-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8],h=l*a-o*u,d=o*c-l*s,f=u*s-a*c,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(i*u-l*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(l*t-i*c)*v,e[5]=(i*s-o*t)*v,e[6]=f*v,e[7]=(n*c-u*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-i*u,i*c,-i*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Il.makeScale(e,t)),this}rotate(e){return this.premultiply(Il.makeRotation(-e)),this}translate(e,t){return this.premultiply(Il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Il=new ht;function kp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const Kg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Rr(r,e){return new Kg[r](e)}function Ua(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Bp(){const r=Ua("canvas");return r.style.display="block",r}const sd={};function $o(r){r in sd||(sd[r]=!0,console.warn(r))}function Jg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Zg(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Qg(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const rd=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ad=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qr={[qt]:{transfer:Pa,primaries:Ia,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Yt]:{transfer:Pt,primaries:Ia,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ja]:{transfer:Pa,primaries:La,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(ad),fromReference:r=>r.applyMatrix3(rd)},[tl]:{transfer:Pt,primaries:La,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(ad),fromReference:r=>r.applyMatrix3(rd).convertLinearToSRGB()}},$g=new Set([qt,ja]),St={enabled:!0,_workingColorSpace:qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!$g.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Qr[e].toReference,i=Qr[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Qr[r].primaries},getTransfer:function(r){return r===yi?Pa:Qr[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Qr[e].luminanceCoefficients)}};function Dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ll(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let lr;class zp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=Ua("canvas")),lr.width=e.width,lr.height=e.height;const n=lr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Ua("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Dr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dr(t[n]/255)*255):t[n]=Dr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e0=0;class Hs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Dl(i[a].image)):s.push(Dl(i[a]))}else s=Dl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Dl(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?zp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t0=0;class Nt extends Ci{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Xn,i=Xn,s=Rt,a=qn,o=xn,c=Ei,u=Nt.DEFAULT_ANISOTROPY,l=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=jn(),this.name="",this.source=new Hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ti:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ti:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=qc;Nt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,i=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,u=c[0],l=c[4],h=c[8],d=c[1],f=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(l-d)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(l+d)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,_=(f+1)/2,C=(p+1)/2,M=(l+d)/4,T=(h+v)/4,D=(m+g)/4;return b>_&&b>C?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=M/n,s=T/n):_>C?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=M/i,s=D/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=T/s,i=D/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(d-l)*(d-l));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-v)/x,this.z=(d-l)/x,this.w=Math.acos((u+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hp extends Ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Nt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jt extends Hp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class nl extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class n0 extends Jt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new nl(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class ch extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i0 extends Jt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new ch(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class hn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],u=n[i+1],l=n[i+2],h=n[i+3];const d=s[a+0],f=s[a+1],m=s[a+2],v=s[a+3];if(o===0){e[t+0]=c,e[t+1]=u,e[t+2]=l,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(h!==v||c!==d||u!==f||l!==m){let g=1-o;const p=c*d+u*f+l*m+h*v,x=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const C=Math.sqrt(b),M=Math.atan2(C,p*x);g=Math.sin(g*M)/C,o=Math.sin(o*M)/C}const _=o*x;if(c=c*g+d*_,u=u*g+f*_,l=l*g+m*_,h=h*g+v*_,g===1-o){const C=1/Math.sqrt(c*c+u*u+l*l+h*h);c*=C,u*=C,l*=C,h*=C}}e[t]=c,e[t+1]=u,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],u=n[i+2],l=n[i+3],h=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+l*h+c*f-u*d,e[t+1]=c*m+l*d+u*h-o*f,e[t+2]=u*m+l*f+o*d-c*h,e[t+3]=l*m-o*h-c*d-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),l=o(i/2),h=o(s/2),d=c(n/2),f=c(i/2),m=c(s/2);switch(a){case"XYZ":this._x=d*l*h+u*f*m,this._y=u*f*h-d*l*m,this._z=u*l*m+d*f*h,this._w=u*l*h-d*f*m;break;case"YXZ":this._x=d*l*h+u*f*m,this._y=u*f*h-d*l*m,this._z=u*l*m-d*f*h,this._w=u*l*h+d*f*m;break;case"ZXY":this._x=d*l*h-u*f*m,this._y=u*f*h+d*l*m,this._z=u*l*m+d*f*h,this._w=u*l*h-d*f*m;break;case"ZYX":this._x=d*l*h-u*f*m,this._y=u*f*h+d*l*m,this._z=u*l*m-d*f*h,this._w=u*l*h+d*f*m;break;case"YZX":this._x=d*l*h+u*f*m,this._y=u*f*h+d*l*m,this._z=u*l*m-d*f*h,this._w=u*l*h-d*f*m;break;case"XZY":this._x=d*l*h-u*f*m,this._y=u*f*h-d*l*m,this._z=u*l*m+d*f*h,this._w=u*l*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],l=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(l-c)*f,this._y=(s-u)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(l-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+u)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-u)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+l)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+u)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,l=t._w;return this._x=n*l+a*o+i*u-s*c,this._y=i*l+a*c+s*o-n*u,this._z=s*l+a*u+n*c-i*o,this._w=a*l-n*o-i*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const u=Math.sqrt(c),l=Math.atan2(u,o),h=Math.sin((1-t)*l)/u,d=Math.sin(t*l)/u;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(od.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(od.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*i-o*n),l=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+c*u+a*h-o*l,this.y=n+c*l+o*u-s*h,this.z=i+c*h+s*l-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nl.copy(this).projectOnVector(e),this.sub(Nl)}reflect(e){return this.sub(Nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nl=new E,od=new hn;class dn{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,oi):oi.fromBufferAttribute(s,a),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),ro.subVectors(this.max,$r),ur.subVectors(e.a,$r),hr.subVectors(e.b,$r),dr.subVectors(e.c,$r),Zi.subVectors(hr,ur),Qi.subVectors(dr,hr),xs.subVectors(ur,dr);let t=[0,-Zi.z,Zi.y,0,-Qi.z,Qi.y,0,-xs.z,xs.y,Zi.z,0,-Zi.x,Qi.z,0,-Qi.x,xs.z,0,-xs.x,-Zi.y,Zi.x,0,-Qi.y,Qi.x,0,-xs.y,xs.x,0];return!Ul(t,ur,hr,dr,ro)||(t=[1,0,0,0,1,0,0,0,1],!Ul(t,ur,hr,dr,ro))?!1:(ao.crossVectors(Zi,Qi),t=[ao.x,ao.y,ao.z],Ul(t,ur,hr,dr,ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new E,new E,new E,new E,new E,new E,new E,new E],oi=new E,so=new dn,ur=new E,hr=new E,dr=new E,Zi=new E,Qi=new E,xs=new E,$r=new E,ro=new E,ao=new E,_s=new E;function Ul(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){_s.fromArray(r,s);const o=i.x*Math.abs(_s.x)+i.y*Math.abs(_s.y)+i.z*Math.abs(_s.z),c=e.dot(_s),u=t.dot(_s),l=n.dot(_s);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>o)return!1}return!0}const s0=new dn,ea=new E,Ol=new E;class fn{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):s0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const t=ea.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ea,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(Ol)),this.expandByPoint(ea.copy(e.center).sub(Ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new E,Fl=new E,oo=new E,$i=new E,kl=new E,co=new E,Bl=new E;class qr{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fl.copy(e).add(t).multiplyScalar(.5),oo.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(Fl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(oo),o=$i.dot(this.direction),c=-$i.dot(oo),u=$i.lengthSq(),l=Math.abs(1-a*a);let h,d,f,m;if(l>0)if(h=a*c-o,d=a*o-c,m=s*l,h>=0)if(d>=-m)if(d<=m){const v=1/l;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+u}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+u;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+u;else d<=-m?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+u):d<=m?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+u):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+u);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Fl).addScaledVector(oo,d),f}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const n=Ii.dot(this.direction),i=Ii.dot(Ii)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const u=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,i=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,i=(e.min.x-d.x)*u),l>=0?(s=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(s=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,i,s){kl.subVectors(t,e),co.subVectors(n,e),Bl.crossVectors(kl,co);let a=this.direction.dot(Bl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$i.subVectors(this.origin,e);const c=o*this.direction.dot(co.crossVectors($i,co));if(c<0)return null;const u=o*this.direction.dot(kl.cross($i));if(u<0||c+u>a)return null;const l=-o*$i.dot(Bl);return l<0?null:this.at(l/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,i,s,a,o,c,u,l,h,d,f,m,v,g){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,u,l,h,d,f,m,v,g)}set(e,t,n,i,s,a,o,c,u,l,h,d,f,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=u,p[6]=l,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fr.setFromMatrixColumn(e,0).length(),s=1/fr.setFromMatrixColumn(e,1).length(),a=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),u=Math.sin(i),l=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*l,f=a*h,m=o*l,v=o*h;t[0]=c*l,t[4]=-c*h,t[8]=u,t[1]=f+m*u,t[5]=d-v*u,t[9]=-o*c,t[2]=v-d*u,t[6]=m+f*u,t[10]=a*c}else if(e.order==="YXZ"){const d=c*l,f=c*h,m=u*l,v=u*h;t[0]=d+v*o,t[4]=m*o-f,t[8]=a*u,t[1]=a*h,t[5]=a*l,t[9]=-o,t[2]=f*o-m,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*l,f=c*h,m=u*l,v=u*h;t[0]=d-v*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*l,t[9]=v-d*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*l,f=a*h,m=o*l,v=o*h;t[0]=c*l,t[4]=m*u-f,t[8]=d*u+v,t[1]=c*h,t[5]=v*u+d,t[9]=f*u-m,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*u,m=o*c,v=o*u;t[0]=c*l,t[4]=v-d*h,t[8]=m*h+f,t[1]=h,t[5]=a*l,t[9]=-o*l,t[2]=-u*l,t[6]=f*h+m,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*c,f=a*u,m=o*c,v=o*u;t[0]=c*l,t[4]=-h,t[8]=u*l,t[1]=d*h+v,t[5]=a*l,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*l,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r0,e,a0)}lookAt(e,t,n){const i=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),es.crossVectors(n,Vn),es.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),es.crossVectors(n,Vn)),es.normalize(),lo.crossVectors(Vn,es),i[0]=es.x,i[4]=lo.x,i[8]=Vn.x,i[1]=es.y,i[5]=lo.y,i[9]=Vn.y,i[2]=es.z,i[6]=lo.z,i[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],l=n[1],h=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],x=n[3],b=n[7],_=n[11],C=n[15],M=i[0],T=i[4],D=i[8],z=i[12],y=i[1],S=i[5],F=i[9],O=i[13],B=i[2],q=i[6],H=i[10],j=i[14],X=i[3],he=i[7],ye=i[11],fe=i[15];return s[0]=a*M+o*y+c*B+u*X,s[4]=a*T+o*S+c*q+u*he,s[8]=a*D+o*F+c*H+u*ye,s[12]=a*z+o*O+c*j+u*fe,s[1]=l*M+h*y+d*B+f*X,s[5]=l*T+h*S+d*q+f*he,s[9]=l*D+h*F+d*H+f*ye,s[13]=l*z+h*O+d*j+f*fe,s[2]=m*M+v*y+g*B+p*X,s[6]=m*T+v*S+g*q+p*he,s[10]=m*D+v*F+g*H+p*ye,s[14]=m*z+v*O+g*j+p*fe,s[3]=x*M+b*y+_*B+C*X,s[7]=x*T+b*S+_*q+C*he,s[11]=x*D+b*F+_*H+C*ye,s[15]=x*z+b*O+_*j+C*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],l=e[2],h=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+s*c*h-i*u*h-s*o*d+n*u*d+i*o*f-n*c*f)+v*(+t*c*f-t*u*d+s*a*d-i*a*f+i*u*l-s*c*l)+g*(+t*u*h-t*o*f-s*a*h+n*a*f+s*o*l-n*u*l)+p*(-i*o*l-t*c*h+t*o*d+i*a*h-n*a*d+n*c*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8],h=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],x=h*g*u-v*d*u+v*c*f-o*g*f-h*c*p+o*d*p,b=m*d*u-l*g*u-m*c*f+a*g*f+l*c*p-a*d*p,_=l*v*u-m*h*u+m*o*f-a*v*f-l*o*p+a*h*p,C=m*h*c-l*v*c-m*o*d+a*v*d+l*o*g-a*h*g,M=t*x+n*b+i*_+s*C;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=x*T,e[1]=(v*d*s-h*g*s-v*i*f+n*g*f+h*i*p-n*d*p)*T,e[2]=(o*g*s-v*c*s+v*i*u-n*g*u-o*i*p+n*c*p)*T,e[3]=(h*c*s-o*d*s-h*i*u+n*d*u+o*i*f-n*c*f)*T,e[4]=b*T,e[5]=(l*g*s-m*d*s+m*i*f-t*g*f-l*i*p+t*d*p)*T,e[6]=(m*c*s-a*g*s-m*i*u+t*g*u+a*i*p-t*c*p)*T,e[7]=(a*d*s-l*c*s+l*i*u-t*d*u-a*i*f+t*c*f)*T,e[8]=_*T,e[9]=(m*h*s-l*v*s-m*n*f+t*v*f+l*n*p-t*h*p)*T,e[10]=(a*v*s-m*o*s+m*n*u-t*v*u-a*n*p+t*o*p)*T,e[11]=(l*o*s-a*h*s-l*n*u+t*h*u+a*n*f-t*o*f)*T,e[12]=C*T,e[13]=(l*v*i-m*h*i+m*n*d-t*v*d-l*n*g+t*h*g)*T,e[14]=(m*o*i-a*v*i-m*n*c+t*v*c+a*n*g-t*o*g)*T,e[15]=(a*h*i-l*o*i+l*n*c-t*h*c-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,l=s*o;return this.set(u*a+n,u*o-i*c,u*c+i*o,0,u*o+i*c,l*o+n,l*c-i*a,0,u*c-i*o,l*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,l=a+a,h=o+o,d=s*u,f=s*l,m=s*h,v=a*l,g=a*h,p=o*h,x=c*u,b=c*l,_=c*h,C=n.x,M=n.y,T=n.z;return i[0]=(1-(v+p))*C,i[1]=(f+_)*C,i[2]=(m-b)*C,i[3]=0,i[4]=(f-_)*M,i[5]=(1-(d+p))*M,i[6]=(g+x)*M,i[7]=0,i[8]=(m+b)*T,i[9]=(g-x)*T,i[10]=(1-(d+v))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fr.set(i[0],i[1],i[2]).length();const a=fr.set(i[4],i[5],i[6]).length(),o=fr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ci.copy(this);const u=1/s,l=1/a,h=1/o;return ci.elements[0]*=u,ci.elements[1]*=u,ci.elements[2]*=u,ci.elements[4]*=l,ci.elements[5]*=l,ci.elements[6]*=l,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,t.setFromRotationMatrix(ci),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Mi){const c=this.elements,u=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(o===Mi)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===Na)f=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=l,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Mi){const c=this.elements,u=1/(t-e),l=1/(n-i),h=1/(a-s),d=(t+e)*u,f=(n+i)*l;let m,v;if(o===Mi)m=(a+s)*h,v=-2*h;else if(o===Na)m=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fr=new E,ci=new Xe,r0=new E(0,0,0),a0=new E(1,1,1),es=new E,lo=new E,Vn=new E,cd=new Xe,ld=new hn;class Yn{constructor(e=0,t=0,n=0,i=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],u=i[5],l=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ld.setFromEuler(this),this.setFromQuaternion(ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class il{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o0=0;const ud=new E,pr=new hn,Li=new Xe,uo=new E,ta=new E,c0=new E,l0=new hn,hd=new E(1,0,0),dd=new E(0,1,0),fd=new E(0,0,1),pd={type:"added"},u0={type:"removed"},mr={type:"childadded",child:null},zl={type:"childremoved",child:null};class _t extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new E,t=new Yn,n=new hn,i=new E(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new ht}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(hd,e)}rotateY(e){return this.rotateOnAxis(dd,e)}rotateZ(e){return this.rotateOnAxis(fd,e)}translateOnAxis(e,t){return ud.copy(e).applyQuaternion(this.quaternion),this.position.add(ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hd,e)}translateY(e){return this.translateOnAxis(dd,e)}translateZ(e){return this.translateOnAxis(fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?uo.copy(e):uo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(ta,uo,this.up):Li.lookAt(uo,ta,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),pr.setFromRotationMatrix(Li),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pd),mr.child=e,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(u0),zl.child=e,this.dispatchEvent(zl),zl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pd),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,c0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){const h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),l=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const u in o){const l=o[u];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new E(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new E,Di=new E,Hl=new E,Ni=new E,gr=new E,vr=new E,md=new E,Gl=new E,Vl=new E,Wl=new E,Xl=new bt,ql=new bt,jl=new bt;class Rn{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),li.subVectors(e,t),i.cross(li);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){li.subVectors(i,t),Di.subVectors(n,t),Hl.subVectors(e,t);const a=li.dot(li),o=li.dot(Di),c=li.dot(Hl),u=Di.dot(Di),l=Di.dot(Hl),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(u*c-o*l)*d,m=(a*l-o*c)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ni.x),c.addScaledVector(a,Ni.y),c.addScaledVector(o,Ni.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return Xl.setScalar(0),ql.setScalar(0),jl.setScalar(0),Xl.fromBufferAttribute(e,t),ql.fromBufferAttribute(e,n),jl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Xl,s.x),a.addScaledVector(ql,s.y),a.addScaledVector(jl,s.z),a}static isFrontFacing(e,t,n,i){return li.subVectors(n,t),Di.subVectors(e,t),li.cross(Di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),li.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;gr.subVectors(i,n),vr.subVectors(s,n),Gl.subVectors(e,n);const c=gr.dot(Gl),u=vr.dot(Gl);if(c<=0&&u<=0)return t.copy(n);Vl.subVectors(e,i);const l=gr.dot(Vl),h=vr.dot(Vl);if(l>=0&&h<=l)return t.copy(i);const d=c*h-l*u;if(d<=0&&c>=0&&l<=0)return a=c/(c-l),t.copy(n).addScaledVector(gr,a);Wl.subVectors(e,s);const f=gr.dot(Wl),m=vr.dot(Wl);if(m>=0&&f<=m)return t.copy(s);const v=f*u-c*m;if(v<=0&&u>=0&&m<=0)return o=u/(u-m),t.copy(n).addScaledVector(vr,o);const g=l*m-f*h;if(g<=0&&h-l>=0&&f-m>=0)return md.subVectors(s,i),o=(h-l)/(h-l+(f-m)),t.copy(i).addScaledVector(md,o);const p=1/(g+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(gr,a).addScaledVector(vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Yl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=St.workingColorSpace){if(e=oh(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Yl(a,s,e+1/3),this.g=Yl(a,s,e),this.b=Yl(a,s,e-1/3)}return St.toWorkingColorSpace(this,i),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=Gp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=Ll(e.r),this.g=Ll(e.g),this.b=Ll(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return St.fromWorkingColorSpace(gn.copy(this),e),Math.round(Ht(gn.r*255,0,255))*65536+Math.round(Ht(gn.g*255,0,255))*256+Math.round(Ht(gn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(gn.copy(this),t);const n=gn.r,i=gn.g,s=gn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,u;const l=(o+a)/2;if(o===a)c=0,u=0;else{const h=a-o;switch(u=l<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=l,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Yt){St.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,n=gn.g,i=gn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(ho);const n=wa(ts.h,ho.h,t),i=wa(ts.s,ho.s,t),s=wa(ts.l,ho.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new oe;oe.NAMES=Gp;let h0=0;class Zt extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=os,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ic&&(n.blendSrc=this.blendSrc),this.blendDst!==sc&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sn extends Zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fi=d0();function d0(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const u=c-127;u<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,i[c]=-u-1,i[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,i[c]=13,i[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,l=0;for(;!(u&8388608);)u<<=1,l-=8388608;u&=-8388609,l+=947912704,s[c]=u|l}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Un(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Ht(r,-65504,65504),Fi.floatView[0]=r;const e=Fi.uint32View[0],t=e>>23&511;return Fi.baseTable[t]+((e&8388607)>>Fi.shiftTable[t])}function pa(r){const e=r>>10;return Fi.uint32View[0]=Fi.mantissaTable[Fi.offsetTable[e]+(r&1023)]+Fi.exponentTable[e],Fi.floatView[0]}const f0={toHalfFloat:Un,fromHalfFloat:pa},Wt=new E,fo=new $;class it{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Da,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Da&&(e.usage=this.usage),e}}class p0 extends it{constructor(e,t,n){super(new Int8Array(e),t,n)}}class m0 extends it{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class g0 extends it{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class v0 extends it{constructor(e,t,n){super(new Int16Array(e),t,n)}}class lh extends it{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class b0 extends it{constructor(e,t,n){super(new Int32Array(e),t,n)}}class uh extends it{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class x0 extends it{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=pa(this.array[e*this.itemSize]);return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=Un(t),this}getY(e){let t=pa(this.array[e*this.itemSize+1]);return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=Un(t),this}getZ(e){let t=pa(this.array[e*this.itemSize+2]);return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=Un(t),this}getW(e){let t=pa(this.array[e*this.itemSize+3]);return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=Un(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=Un(t),this.array[e+1]=Un(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=Un(t),this.array[e+1]=Un(n),this.array[e+2]=Un(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=Un(t),this.array[e+1]=Un(n),this.array[e+2]=Un(i),this.array[e+3]=Un(s),this}}class Be extends it{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _0=0;const Qn=new Xe,Kl=new _t,br=new E,Wn=new dn,na=new dn,tn=new E;class et extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kp(e)?uh:lh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ht().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Be(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];na.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Wn.min,na.min),Wn.expandByPoint(tn),tn.addVectors(Wn.max,na.max),Wn.expandByPoint(tn)):(Wn.expandByPoint(na.min),Wn.expandByPoint(na.max))}Wn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)tn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let u=0,l=o.count;u<l;u++)tn.fromBufferAttribute(o,u),c&&(br.fromBufferAttribute(e,u),tn.add(br)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new it(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new E,c[D]=new E;const u=new E,l=new E,h=new E,d=new $,f=new $,m=new $,v=new E,g=new E;function p(D,z,y){u.fromBufferAttribute(n,D),l.fromBufferAttribute(n,z),h.fromBufferAttribute(n,y),d.fromBufferAttribute(s,D),f.fromBufferAttribute(s,z),m.fromBufferAttribute(s,y),l.sub(u),h.sub(u),f.sub(d),m.sub(d);const S=1/(f.x*m.y-m.x*f.y);isFinite(S)&&(v.copy(l).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(S),g.copy(h).multiplyScalar(f.x).addScaledVector(l,-m.x).multiplyScalar(S),o[D].add(v),o[z].add(v),o[y].add(v),c[D].add(g),c[z].add(g),c[y].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,z=x.length;D<z;++D){const y=x[D],S=y.start,F=y.count;for(let O=S,B=S+F;O<B;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new E,_=new E,C=new E,M=new E;function T(D){C.fromBufferAttribute(i,D),M.copy(C);const z=o[D];b.copy(z),b.sub(C.multiplyScalar(C.dot(z))).normalize(),_.crossVectors(M,z);const S=_.dot(c[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,S)}for(let D=0,z=x.length;D<z;++D){const y=x[D],S=y.start,F=y.count;for(let O=S,B=S+F;O<B;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new it(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,s=new E,a=new E,o=new E,c=new E,u=new E,l=new E,h=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),l.subVectors(a,s),h.subVectors(i,s),l.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,g),o.add(l),c.add(l),u.add(l),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),l.subVectors(a,s),h.subVectors(i,s),l.cross(h),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(o,c){const u=o.array,l=o.itemSize,h=o.normalized,d=new u.constructor(c.length*l);let f=0,m=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*l;for(let p=0;p<l;p++)d[m++]=u[f++]}return new it(d,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new et,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],u=e(c,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let l=0,h=u.length;l<h;l++){const d=u[l],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],l=[];for(let h=0,d=u.length;h<d;h++){const f=u[h];l.push(f.toJSON(e.data))}l.length>0&&(i[c]=l,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const l=i[u];this.setAttribute(u,l.clone(t))}const s=e.morphAttributes;for(const u in s){const l=[],h=s[u];for(let d=0,f=h.length;d<f;d++)l.push(h[d].clone(t));this.morphAttributes[u]=l}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,l=a.length;u<l;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gd=new Xe,ys=new qr,po=new fn,vd=new E,mo=new E,go=new E,vo=new E,Jl=new E,bo=new E,bd=new E,xo=new E;class wt extends _t{constructor(e=new et,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){bo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const l=o[c],h=s[c];l!==0&&(Jl.fromBufferAttribute(h,e),a?bo.addScaledVector(Jl,l):bo.addScaledVector(Jl.sub(t),l))}t.add(bo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),ys.copy(e.ray).recast(e.near),!(po.containsPoint(ys.origin)===!1&&(ys.intersectSphere(po,vd)===null||ys.origin.distanceToSquared(vd)>(e.far-e.near)**2))&&(gd.copy(s).invert(),ys.copy(e.ray).applyMatrix4(gd),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,l=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,C=b;_<C;_+=3){const M=o.getX(_),T=o.getX(_+1),D=o.getX(_+2);i=_o(this,p,e,n,u,l,h,M,T,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const x=o.getX(g),b=o.getX(g+1),_=o.getX(g+2);i=_o(this,a,e,n,u,l,h,x,b,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),b=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,C=b;_<C;_+=3){const M=_,T=_+1,D=_+2;i=_o(this,p,e,n,u,l,h,M,T,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const x=g,b=g+1,_=g+2;i=_o(this,a,e,n,u,l,h,x,b,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function y0(r,e,t,n,i,s,a,o){let c;if(e.side===un?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===Ai,o),c===null)return null;xo.copy(o),xo.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(xo);return u<t.near||u>t.far?null:{distance:u,point:xo.clone(),object:r}}function _o(r,e,t,n,i,s,a,o,c,u){r.getVertexPosition(o,mo),r.getVertexPosition(c,go),r.getVertexPosition(u,vo);const l=y0(r,e,t,n,mo,go,vo,bd);if(l){const h=new E;Rn.getBarycoord(bd,mo,go,vo,h),i&&(l.uv=Rn.getInterpolatedAttribute(i,o,c,u,h,new $)),s&&(l.uv1=Rn.getInterpolatedAttribute(s,o,c,u,h,new $)),a&&(l.normal=Rn.getInterpolatedAttribute(a,o,c,u,h,new E),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const d={a:o,b:c,c:u,normal:new E,materialIndex:0};Rn.getNormal(mo,go,vo,d.normal),l.face=d,l.barycoord=h}return l}class fs extends et{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],l=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(h,2));function m(v,g,p,x,b,_,C,M,T,D,z){const y=_/T,S=C/D,F=_/2,O=C/2,B=M/2,q=T+1,H=D+1;let j=0,X=0;const he=new E;for(let ye=0;ye<H;ye++){const fe=ye*S-O;for(let Ze=0;Ze<q;Ze++){const ct=Ze*y-F;he[v]=ct*x,he[g]=fe*b,he[p]=B,u.push(he.x,he.y,he.z),he[v]=0,he[g]=0,he[p]=M>0?1:-1,l.push(he.x,he.y,he.z),h.push(Ze/T),h.push(1-ye/D),j+=1}}for(let ye=0;ye<D;ye++)for(let fe=0;fe<T;fe++){const Ze=d+fe+q*ye,ct=d+fe+q*(ye+1),K=d+(fe+1)+q*(ye+1),ce=d+(fe+1)+q*ye;c.push(Ze,ct,ce),c.push(ct,K,ce),X+=6}o.addGroup(f,X,z),f+=X,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tn(r){const e={};for(let t=0;t<r.length;t++){const n=Gr(r[t]);for(const i in n)e[i]=n[i]}return e}function M0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const Oa={clone:Gr,merge:Tn};var S0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class At extends Zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S0,this.fragmentShader=w0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=M0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class sl extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new E,xd=new $,_d=new $;class Xt extends sl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,xd,_d),t.subVectors(_d,xd)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/u,i*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xr=-90,_r=1;class Wp extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xt(xr,_r,e,t);i.layers=this.layers,this.add(i);const s=new Xt(xr,_r,e,t);s.layers=this.layers,this.add(s);const a=new Xt(xr,_r,e,t);a.layers=this.layers,this.add(a);const o=new Xt(xr,_r,e,t);o.layers=this.layers,this.add(o);const c=new Xt(xr,_r,e,t);c.layers=this.layers,this.add(c);const u=new Xt(xr,_r,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const u of t)this.remove(u);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Na)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,l]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,l),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Ya extends Nt{constructor(e,t,n,i,s,a,o,c,u,l){e=e!==void 0?e:[],t=t!==void 0?t:Hi,super(e,t,n,i,s,a,o,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xp extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ya(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fs(5,5,5),s=new At({name:"CubemapFromEquirect",uniforms:Gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Si});s.uniforms.tEquirect.value=t;const a=new wt(i,s),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=Rt),new Wp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Zl=new E,A0=new E,T0=new ht;class _i{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Zl.subVectors(n,t).cross(A0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||T0.getNormalMatrix(e),i=this.coplanarPoint(Zl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new fn,yo=new E;class Ka{constructor(e=new _i,t=new _i,n=new _i,i=new _i,s=new _i,a=new _i){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],u=i[4],l=i[5],h=i[6],d=i[7],f=i[8],m=i[9],v=i[10],g=i[11],p=i[12],x=i[13],b=i[14],_=i[15];if(n[0].setComponents(c-s,d-u,g-f,_-p).normalize(),n[1].setComponents(c+s,d+u,g+f,_+p).normalize(),n[2].setComponents(c+a,d+l,g+m,_+x).normalize(),n[3].setComponents(c-a,d-l,g-m,_-x).normalize(),n[4].setComponents(c-o,d-h,g-v,_-b).normalize(),t===Mi)n[5].setComponents(c+o,d+h,g+v,_+b).normalize();else if(t===Na)n[5].setComponents(o,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){return Ms.center.set(0,0,0),Ms.radius=.7071067811865476,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(yo.x=i.normal.x>0?e.max.x:e.min.x,yo.y=i.normal.y>0?e.max.y:e.min.y,yo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(yo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function E0(r){const e=new WeakMap;function t(o,c){const u=o.array,l=o.usage,h=u.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,u,l),o.onUploadCallback();let f;if(u instanceof Float32Array)f=r.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=r.SHORT;else if(u instanceof Uint32Array)f=r.UNSIGNED_INT;else if(u instanceof Int32Array)f=r.INT;else if(u instanceof Int8Array)f=r.BYTE;else if(u instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,u){const l=c.array,h=c.updateRanges;if(r.bindBuffer(u,o),h.length===0)r.bufferSubData(u,0,l);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],v=h[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const v=h[f];r.bufferSubData(u,v.start*l.BYTES_PER_ELEMENT,l,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:i,remove:s,update:a}}class Vi extends et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),u=o+1,l=c+1,h=e/o,d=t/c,f=[],m=[],v=[],g=[];for(let p=0;p<l;p++){const x=p*d-a;for(let b=0;b<u;b++){const _=b*h-s;m.push(_,-x,0),v.push(0,0,1),g.push(b/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const b=x+u*p,_=x+u*(p+1),C=x+1+u*(p+1),M=x+1+u*p;f.push(b,_,M),f.push(_,C,M)}this.setIndex(f),this.setAttribute("position",new Be(m,3)),this.setAttribute("normal",new Be(v,3)),this.setAttribute("uv",new Be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.widthSegments,e.heightSegments)}}var R0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C0=`#ifdef USE_ALPHAHASH
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
#endif`,P0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
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
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
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
#endif`,F0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H0=`#ifdef USE_IRIDESCENCE
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
#endif`,G0=`#ifdef USE_BUMPMAP
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Z0=`#define PI 3.141592653589793
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
} // validated`,Q0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$0=`vec3 transformedNormal = objectNormal;
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
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sv="gl_FragColor = linearToOutputTexel( gl_FragColor );",rv=`
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
}`,av=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uv=`#ifdef USE_ENVMAP
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
#endif`,hv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mv=`#ifdef USE_GRADIENTMAP
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
}`,gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xv=`uniform bool receiveShadow;
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
#endif`,_v=`#ifdef USE_ENVMAP
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
#endif`,yv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Av=`PhysicalMaterial material;
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
#endif`,Tv=`struct PhysicalMaterial {
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
}`,Ev=`
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
#endif`,Rv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ov=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fv=`#if defined( USE_POINTS_UV )
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
#endif`,kv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vv=`#ifdef USE_MORPHTARGETS
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
#endif`,Wv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jv=`#ifdef USE_NORMALMAP
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
#endif`,Zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ab=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,db=`float getShadowMask() {
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
}`,fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pb=`#ifdef USE_SKINNING
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
#endif`,mb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gb=`#ifdef USE_SKINNING
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
#endif`,vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_b=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yb=`#ifdef USE_TRANSMISSION
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
#endif`,Mb=`#ifdef USE_TRANSMISSION
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
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rb=`uniform sampler2D t2D;
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
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`#include <common>
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
}`,Nb=`#if DEPTH_PACKING == 3200
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
}`,Ub=`#define DISTANCE
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
}`,Ob=`#define DISTANCE
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
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bb=`uniform float scale;
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
}`,zb=`uniform vec3 diffuse;
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
}`,Hb=`#include <common>
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Vb=`#define LAMBERT
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
}`,Wb=`#define LAMBERT
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
}`,Xb=`#define MATCAP
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
}`,qb=`#define MATCAP
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
}`,jb=`#define NORMAL
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
}`,Yb=`#define NORMAL
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
}`,Kb=`#define PHONG
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
}`,Jb=`#define PHONG
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
}`,Zb=`#define STANDARD
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
}`,Qb=`#define STANDARD
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
}`,$b=`#define TOON
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
}`,ex=`#define TOON
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
}`,tx=`uniform float size;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,sx=`uniform vec3 color;
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
}`,rx=`uniform float rotation;
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
}`,ax=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:R0,alphahash_pars_fragment:C0,alphamap_fragment:P0,alphamap_pars_fragment:I0,alphatest_fragment:L0,alphatest_pars_fragment:D0,aomap_fragment:N0,aomap_pars_fragment:U0,batching_pars_vertex:O0,batching_vertex:F0,begin_vertex:k0,beginnormal_vertex:B0,bsdfs:z0,iridescence_fragment:H0,bumpmap_pars_fragment:G0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:W0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:q0,color_fragment:j0,color_pars_fragment:Y0,color_pars_vertex:K0,color_vertex:J0,common:Z0,cube_uv_reflection_fragment:Q0,defaultnormal_vertex:$0,displacementmap_pars_vertex:ev,displacementmap_vertex:tv,emissivemap_fragment:nv,emissivemap_pars_fragment:iv,colorspace_fragment:sv,colorspace_pars_fragment:rv,envmap_fragment:av,envmap_common_pars_fragment:ov,envmap_pars_fragment:cv,envmap_pars_vertex:lv,envmap_physical_pars_fragment:_v,envmap_vertex:uv,fog_vertex:hv,fog_pars_vertex:dv,fog_fragment:fv,fog_pars_fragment:pv,gradientmap_pars_fragment:mv,lightmap_pars_fragment:gv,lights_lambert_fragment:vv,lights_lambert_pars_fragment:bv,lights_pars_begin:xv,lights_toon_fragment:yv,lights_toon_pars_fragment:Mv,lights_phong_fragment:Sv,lights_phong_pars_fragment:wv,lights_physical_fragment:Av,lights_physical_pars_fragment:Tv,lights_fragment_begin:Ev,lights_fragment_maps:Rv,lights_fragment_end:Cv,logdepthbuf_fragment:Pv,logdepthbuf_pars_fragment:Iv,logdepthbuf_pars_vertex:Lv,logdepthbuf_vertex:Dv,map_fragment:Nv,map_pars_fragment:Uv,map_particle_fragment:Ov,map_particle_pars_fragment:Fv,metalnessmap_fragment:kv,metalnessmap_pars_fragment:Bv,morphinstance_vertex:zv,morphcolor_vertex:Hv,morphnormal_vertex:Gv,morphtarget_pars_vertex:Vv,morphtarget_vertex:Wv,normal_fragment_begin:Xv,normal_fragment_maps:qv,normal_pars_fragment:jv,normal_pars_vertex:Yv,normal_vertex:Kv,normalmap_pars_fragment:Jv,clearcoat_normal_fragment_begin:Zv,clearcoat_normal_fragment_maps:Qv,clearcoat_pars_fragment:$v,iridescence_pars_fragment:eb,opaque_fragment:tb,packing:nb,premultiplied_alpha_fragment:ib,project_vertex:sb,dithering_fragment:rb,dithering_pars_fragment:ab,roughnessmap_fragment:ob,roughnessmap_pars_fragment:cb,shadowmap_pars_fragment:lb,shadowmap_pars_vertex:ub,shadowmap_vertex:hb,shadowmask_pars_fragment:db,skinbase_vertex:fb,skinning_pars_vertex:pb,skinning_vertex:mb,skinnormal_vertex:gb,specularmap_fragment:vb,specularmap_pars_fragment:bb,tonemapping_fragment:xb,tonemapping_pars_fragment:_b,transmission_fragment:yb,transmission_pars_fragment:Mb,uv_pars_fragment:Sb,uv_pars_vertex:wb,uv_vertex:Ab,worldpos_vertex:Tb,background_vert:Eb,background_frag:Rb,backgroundCube_vert:Cb,backgroundCube_frag:Pb,cube_vert:Ib,cube_frag:Lb,depth_vert:Db,depth_frag:Nb,distanceRGBA_vert:Ub,distanceRGBA_frag:Ob,equirect_vert:Fb,equirect_frag:kb,linedashed_vert:Bb,linedashed_frag:zb,meshbasic_vert:Hb,meshbasic_frag:Gb,meshlambert_vert:Vb,meshlambert_frag:Wb,meshmatcap_vert:Xb,meshmatcap_frag:qb,meshnormal_vert:jb,meshnormal_frag:Yb,meshphong_vert:Kb,meshphong_frag:Jb,meshphysical_vert:Zb,meshphysical_frag:Qb,meshtoon_vert:$b,meshtoon_frag:ex,points_vert:tx,points_frag:nx,shadow_vert:ix,shadow_frag:sx,sprite_vert:rx,sprite_frag:ax},Ie={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},hi={basic:{uniforms:Tn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Tn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new oe(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Tn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Tn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Tn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new oe(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Tn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Tn([Ie.points,Ie.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Tn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Tn([Ie.common,Ie.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Tn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Tn([Ie.sprite,Ie.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Tn([Ie.common,Ie.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Tn([Ie.lights,Ie.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};hi.physical={uniforms:Tn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Mo={r:0,b:0,g:0},Ss=new Yn,ox=new Xe;function cx(r,e,t,n,i,s,a){const o=new oe(0);let c=s===!0?0:1,u,l,h=null,d=0,f=null;function m(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b)),b}function v(x){let b=!1;const _=m(x);_===null?p(o,c):_&&_.isColor&&(p(_,1),b=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(x,b){const _=m(b);_&&(_.isCubeTexture||_.mapping===Xr)?(l===void 0&&(l=new wt(new fs(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Gr(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Ss.copy(b.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),l.material.uniforms.envMap.value=_,l.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ox.makeRotationFromEuler(Ss)),l.material.toneMapped=St.getTransfer(_.colorSpace)!==Pt,(h!==_||d!==_.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,f=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new wt(new Vi(2,2),new At({name:"BackgroundMaterial",uniforms:Gr(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=St.getTransfer(_.colorSpace)!==Pt,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=r.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function p(x,b){x.getRGB(Mo,Vp(r)),n.buffers.color.setClear(Mo.r,Mo.g,Mo.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:v,addToRenderList:g}}function lx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(y,S,F,O,B){let q=!1;const H=h(O,F,S);s!==H&&(s=H,u(s.object)),q=f(y,O,F,B),q&&m(y,O,F,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,_(y,S,F,O),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return r.createVertexArray()}function u(y){return r.bindVertexArray(y)}function l(y){return r.deleteVertexArray(y)}function h(y,S,F){const O=F.wireframe===!0;let B=n[y.id];B===void 0&&(B={},n[y.id]=B);let q=B[S.id];q===void 0&&(q={},B[S.id]=q);let H=q[O];return H===void 0&&(H=d(c()),q[O]=H),H}function d(y){const S=[],F=[],O=[];for(let B=0;B<t;B++)S[B]=0,F[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:F,attributeDivisors:O,object:y,attributes:{},index:null}}function f(y,S,F,O){const B=s.attributes,q=S.attributes;let H=0;const j=F.getAttributes();for(const X in j)if(j[X].location>=0){const ye=B[X];let fe=q[X];if(fe===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor)),ye===void 0||ye.attribute!==fe||fe&&ye.data!==fe.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function m(y,S,F,O){const B={},q=S.attributes;let H=0;const j=F.getAttributes();for(const X in j)if(j[X].location>=0){let ye=q[X];ye===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor));const fe={};fe.attribute=ye,ye&&ye.data&&(fe.data=ye.data),B[X]=fe,H++}s.attributes=B,s.attributesNum=H,s.index=O}function v(){const y=s.newAttributes;for(let S=0,F=y.length;S<F;S++)y[S]=0}function g(y){p(y,0)}function p(y,S){const F=s.newAttributes,O=s.enabledAttributes,B=s.attributeDivisors;F[y]=1,O[y]===0&&(r.enableVertexAttribArray(y),O[y]=1),B[y]!==S&&(r.vertexAttribDivisor(y,S),B[y]=S)}function x(){const y=s.newAttributes,S=s.enabledAttributes;for(let F=0,O=S.length;F<O;F++)S[F]!==y[F]&&(r.disableVertexAttribArray(F),S[F]=0)}function b(y,S,F,O,B,q,H){H===!0?r.vertexAttribIPointer(y,S,F,B,q):r.vertexAttribPointer(y,S,F,O,B,q)}function _(y,S,F,O){v();const B=O.attributes,q=F.getAttributes(),H=S.defaultAttributeValues;for(const j in q){const X=q[j];if(X.location>=0){let he=B[j];if(he===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),he!==void 0){const ye=he.normalized,fe=he.itemSize,Ze=e.get(he);if(Ze===void 0)continue;const ct=Ze.buffer,K=Ze.type,ce=Ze.bytesPerElement,ge=K===r.INT||K===r.UNSIGNED_INT||he.gpuType===Yc;if(he.isInterleavedBufferAttribute){const xe=he.data,Ye=xe.stride,te=he.offset;if(xe.isInstancedInterleavedBuffer){for(let qe=0;qe<X.locationSize;qe++)p(X.location+qe,xe.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let qe=0;qe<X.locationSize;qe++)g(X.location+qe);r.bindBuffer(r.ARRAY_BUFFER,ct);for(let qe=0;qe<X.locationSize;qe++)b(X.location+qe,fe/X.locationSize,K,ye,Ye*ce,(te+fe/X.locationSize*qe)*ce,ge)}else{if(he.isInstancedBufferAttribute){for(let xe=0;xe<X.locationSize;xe++)p(X.location+xe,he.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let xe=0;xe<X.locationSize;xe++)g(X.location+xe);r.bindBuffer(r.ARRAY_BUFFER,ct);for(let xe=0;xe<X.locationSize;xe++)b(X.location+xe,fe/X.locationSize,K,ye,fe*ce,fe/X.locationSize*xe*ce,ge)}}else if(H!==void 0){const ye=H[j];if(ye!==void 0)switch(ye.length){case 2:r.vertexAttrib2fv(X.location,ye);break;case 3:r.vertexAttrib3fv(X.location,ye);break;case 4:r.vertexAttrib4fv(X.location,ye);break;default:r.vertexAttrib1fv(X.location,ye)}}}}x()}function C(){D();for(const y in n){const S=n[y];for(const F in S){const O=S[F];for(const B in O)l(O[B].object),delete O[B];delete S[F]}delete n[y]}}function M(y){if(n[y.id]===void 0)return;const S=n[y.id];for(const F in S){const O=S[F];for(const B in O)l(O[B].object),delete O[B];delete S[F]}delete n[y.id]}function T(y){for(const S in n){const F=n[S];if(F[y.id]===void 0)continue;const O=F[y.id];for(const B in O)l(O[B].object),delete O[B];delete F[y.id]}}function D(){z(),a=!0,s!==i&&(s=i,u(s.object))}function z(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:z,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function ux(r,e,t){let n;function i(u){n=u}function s(u,l){r.drawArrays(n,u,l),t.update(l,n,1)}function a(u,l,h){h!==0&&(r.drawArraysInstanced(n,u,l,h),t.update(l,n,h))}function o(u,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,l,0,h);let f=0;for(let m=0;m<h;m++)f+=l[m];t.update(f,n,1)}function c(u,l,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u.length;m++)a(u[m],l[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,u,0,l,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=l[v];for(let v=0;v<d.length;v++)t.update(m,n,d[v])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function hx(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==xn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const D=T===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ei&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==kn&&!D)}function c(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const l=c(u);l!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",l,"instead."),u=l);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:C,maxSamples:M}}function dx(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new _i,o=new ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=l(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?l(null):u();else{const x=s?0:n,b=x*4;let _=p.clippingState||null;c.value=_,_=l(m,d,b,f);for(let C=0;C!==b;++C)_[C]=t[C];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(h,d,f,m){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=f+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,_=f;b!==v;++b,_+=4)a.copy(h[b]).applyMatrix4(x,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function fx(r){let e=new WeakMap;function t(a,o){return o===js?a.mapping=Hi:o===Ra&&(a.mapping=ls),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===js||o===Ra)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Xp(c.height);return u.fromEquirectangularTexture(r,a),e.set(a,u),a.addEventListener("dispose",i),t(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class tr extends sl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cr=4,yd=[.125,.215,.35,.446,.526,.582],Os=20,Ql=new tr,Md=new oe;let $l=null,eu=0,tu=0,nu=!1;const Ds=(1+Math.sqrt(5))/2,yr=1/Ds,Sd=[new E(-Ds,yr,0),new E(Ds,yr,0),new E(-yr,0,Ds),new E(yr,0,Ds),new E(0,Ds,-yr),new E(0,Ds,yr),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class Bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$l=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($l,eu,tu),this._renderer.xr.enabled=nu,e.scissorTest=!1,So(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Bn,format:xn,colorSpace:qt,depthBuffer:!1},i=wd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=px(s)),this._blurMaterial=mx(s,e,t)}return i}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Ql)}_sceneToCubeUV(e,t,n,i){const o=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,d=l.toneMapping;l.getClearColor(Md),l.toneMapping=zi,l.autoClear=!1;const f=new sn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),m=new wt(new fs,f);let v=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(Md),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(u[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,u[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,u[p]));const b=this._cubeSize;So(i,x*b,p>2?b:0,b,b),l.setRenderTarget(i),v&&l.render(m,o),l.render(e,o)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=d,l.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hi||e.mapping===ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ad());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new wt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;So(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ql)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Sd[(i-s-1)%Sd.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,h=new wt(this._lodPlanes[i],u),d=u.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Os-1),v=s/m,g=isFinite(s)?1+Math.floor(l*v):Os;g>Os&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Os}`);const p=[];let x=0;for(let T=0;T<Os;++T){const D=T/v,z=Math.exp(-D*D/2);p.push(z),T===0?x+=z:T<g&&(x+=2*z)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-n;const _=this._sizeLods[i],C=3*_*(i>b-Cr?i-b+Cr:0),M=4*(this._cubeSize-_);So(t,C,M,3*_,2*_),c.setRenderTarget(t),c.render(h,Ql)}}function px(r){const e=[],t=[],n=[];let i=r;const s=r-Cr+1+yd.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-Cr?c=yd[a-r+Cr-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),l=-u,h=1+u,d=[l,l,h,l,h,h,l,l,h,h,l,h],f=6,m=6,v=3,g=2,p=1,x=new Float32Array(v*m*f),b=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let M=0;M<f;M++){const T=M%3*2/3-1,D=M>2?0:-1,z=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];x.set(z,v*m*M),b.set(d,g*m*M);const y=[M,M,M,M,M,M];_.set(y,p*m*M)}const C=new et;C.setAttribute("position",new it(x,v)),C.setAttribute("uv",new it(b,g)),C.setAttribute("faceIndex",new it(_,p)),e.push(C),i>Cr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wd(r,e,t){const n=new Jt(r,e,t);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function So(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function mx(r,e,t){const n=new Float32Array(Os),i=new E(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hh(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ad(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Td(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function hh(){return`

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
	`}function gx(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===js||c===Ra,l=c===Hi||c===ls;if(u||l){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Bc(r)),h=u?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return u&&f&&f.height>0||l&&f&&i(f)?(t===null&&(t=new Bc(r)),h=u?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let c=0;const u=6;for(let l=0;l<u;l++)o[l]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function vx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&$o("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bx(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const m in d)e.update(d[m],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const v=f[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],r.ARRAY_BUFFER)}}function u(h){const d=[],f=h.index,m=h.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let b=0,_=x.length;b<_;b+=3){const C=x[b+0],M=x[b+1],T=x[b+2];d.push(C,M,M,T,T,C)}}else if(m!==void 0){const x=m.array;v=m.version;for(let b=0,_=x.length/3-1;b<_;b+=3){const C=b+0,M=b+1,T=b+2;d.push(C,M,M,T,T,C)}}else return;const g=new(kp(d)?uh:lh)(d,1);g.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function l(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:l}}function xx(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function u(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*a,m),t.update(f,n,m))}function l(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function h(d,f,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)u(d[p]/a,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x];for(let x=0;x<v.length;x++)t.update(p,n,v[x])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function _x(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function yx(r,e,t){const n=new WeakMap,i=new bt;function s(a,o,c){const u=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=l!==void 0?l.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let z=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",z)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),m===!0&&(b=2),v===!0&&(b=3);let _=o.attributes.position.count*b,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const M=new Float32Array(_*C*4*h),T=new nl(M,_,C,h);T.type=kn,T.needsUpdate=!0;const D=b*4;for(let y=0;y<h;y++){const S=g[y],F=p[y],O=x[y],B=_*C*4*y;for(let q=0;q<S.count;q++){const H=q*D;f===!0&&(i.fromBufferAttribute(S,q),M[B+H+0]=i.x,M[B+H+1]=i.y,M[B+H+2]=i.z,M[B+H+3]=0),m===!0&&(i.fromBufferAttribute(F,q),M[B+H+4]=i.x,M[B+H+5]=i.y,M[B+H+6]=i.z,M[B+H+7]=0),v===!0&&(i.fromBufferAttribute(O,q),M[B+H+8]=i.x,M[B+H+9]=i.y,M[B+H+10]=i.z,M[B+H+11]=O.itemSize===4?i.w:1)}}d={count:h,texture:T,size:new $(_,C)},n.set(o,d),o.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<u.length;v++)f+=u[v];const m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",m),c.getUniforms().setValue(r,"morphTargetInfluences",u)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Mx(r,e,t,n){let i=new WeakMap;function s(c){const u=n.render.frame,l=c.geometry,h=e.get(c,l);if(i.get(h)!==u&&(e.update(h),i.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==u&&(d.update(),i.set(d,u))}return h}function a(){i=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class dh extends Nt{constructor(e,t,n,i,s,a,o,c,u,l=Vs){if(l!==Vs&&l!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Vs&&(n=Gi),n===void 0&&l===Ks&&(n=Ys),super(null,i,s,a,o,c,l,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Kt,this.minFilter=c!==void 0?c:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const jp=new Nt,Ed=new dh(1,1),Yp=new nl,Kp=new ch,Jp=new Ya,Rd=[],Cd=[],Pd=new Float32Array(16),Id=new Float32Array(9),Ld=new Float32Array(4);function jr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Rd[i];if(s===void 0&&(s=new Float32Array(i),Rd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function $t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function rl(r,e){let t=Cd[e];t===void 0&&(t=new Int32Array(e),Cd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Sx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function wx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),$t(t,e)}}function Ax(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),$t(t,e)}}function Tx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),$t(t,e)}}function Ex(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Qt(t,n))return;Ld.set(n),r.uniformMatrix2fv(this.addr,!1,Ld),$t(t,n)}}function Rx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Qt(t,n))return;Id.set(n),r.uniformMatrix3fv(this.addr,!1,Id),$t(t,n)}}function Cx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Qt(t,n))return;Pd.set(n),r.uniformMatrix4fv(this.addr,!1,Pd),$t(t,n)}}function Px(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),$t(t,e)}}function Lx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),$t(t,e)}}function Dx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),$t(t,e)}}function Nx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ux(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),$t(t,e)}}function Ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),$t(t,e)}}function Fx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),$t(t,e)}}function kx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ed.compareFunction=ah,s=Ed):s=jp,t.setTexture2D(e||s,i)}function Bx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Kp,i)}function zx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jp,i)}function Hx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yp,i)}function Gx(r){switch(r){case 5126:return Sx;case 35664:return wx;case 35665:return Ax;case 35666:return Tx;case 35674:return Ex;case 35675:return Rx;case 35676:return Cx;case 5124:case 35670:return Px;case 35667:case 35671:return Ix;case 35668:case 35672:return Lx;case 35669:case 35673:return Dx;case 5125:return Nx;case 36294:return Ux;case 36295:return Ox;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return Hx}}function Vx(r,e){r.uniform1fv(this.addr,e)}function Wx(r,e){const t=jr(e,this.size,2);r.uniform2fv(this.addr,t)}function Xx(r,e){const t=jr(e,this.size,3);r.uniform3fv(this.addr,t)}function qx(r,e){const t=jr(e,this.size,4);r.uniform4fv(this.addr,t)}function jx(r,e){const t=jr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Yx(r,e){const t=jr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Kx(r,e){const t=jr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Jx(r,e){r.uniform1iv(this.addr,e)}function Zx(r,e){r.uniform2iv(this.addr,e)}function Qx(r,e){r.uniform3iv(this.addr,e)}function $x(r,e){r.uniform4iv(this.addr,e)}function e_(r,e){r.uniform1uiv(this.addr,e)}function t_(r,e){r.uniform2uiv(this.addr,e)}function n_(r,e){r.uniform3uiv(this.addr,e)}function i_(r,e){r.uniform4uiv(this.addr,e)}function s_(r,e,t){const n=this.cache,i=e.length,s=rl(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||jp,s[a])}function r_(r,e,t){const n=this.cache,i=e.length,s=rl(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Kp,s[a])}function a_(r,e,t){const n=this.cache,i=e.length,s=rl(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Jp,s[a])}function o_(r,e,t){const n=this.cache,i=e.length,s=rl(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Yp,s[a])}function c_(r){switch(r){case 5126:return Vx;case 35664:return Wx;case 35665:return Xx;case 35666:return qx;case 35674:return jx;case 35675:return Yx;case 35676:return Kx;case 5124:case 35670:return Jx;case 35667:case 35671:return Zx;case 35668:case 35672:return Qx;case 35669:case 35673:return $x;case 5125:return e_;case 36294:return t_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return o_}}class l_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gx(t.type)}}class u_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c_(t.type)}}class h_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const iu=/(\w+)(\])?(\[|\.)?/g;function Dd(r,e){r.seq.push(e),r.map[e.id]=e}function d_(r,e,t){const n=r.name,i=n.length;for(iu.lastIndex=0;;){const s=iu.exec(n),a=iu.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===i){Dd(t,u===void 0?new l_(o,r,e):new u_(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new h_(o),Dd(t,h)),t=h}}}class ec{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);d_(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Nd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const f_=37297;let p_=0;function m_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function g_(r){const e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(r);let n;switch(e===t?n="":e===La&&t===Ia?n="LinearDisplayP3ToLinearSRGB":e===Ia&&t===La&&(n="LinearSRGBToLinearDisplayP3"),r){case qt:case ja:return[n,"LinearTransferOETF"];case Yt:case tl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Ud(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+m_(r.getShaderSource(e),a)}else return i}function v_(r,e){const t=g_(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function b_(r,e){let t;switch(e){case gp:t="Linear";break;case vp:t="Reinhard";break;case bp:t="Cineon";break;case xp:t="ACESFilmic";break;case yp:t="AgX";break;case Mp:t="Neutral";break;case _p:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wo=new E;function x_(){St.getLuminanceCoefficients(wo);const r=wo.x.toFixed(4),e=wo.y.toFixed(4),t=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function __(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function y_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ma(r){return r!==""}function Od(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Du(r){return r.replace(S_,A_)}const w_=new Map;function A_(r,e){let t=ft[e];if(t===void 0){const n=w_.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Du(t)}const T_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kd(r){return r.replace(T_,E_)}function E_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bd(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function R_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ju?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function C_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hi:case ls:e="ENVMAP_TYPE_CUBE";break;case Xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function P_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function I_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xa:e="ENVMAP_BLENDING_MULTIPLY";break;case pp:e="ENVMAP_BLENDING_MIX";break;case mp:e="ENVMAP_BLENDING_ADD";break}return e}function L_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function D_(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=R_(t),u=C_(t),l=P_(t),h=I_(t),d=L_(t),f=__(t),m=y_(s),v=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ma).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ma).join(`
`),p.length>0&&(p+=`
`)):(g=[Bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),p=[Bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?ft.tonemapping_pars_fragment:"",t.toneMapping!==zi?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,v_("linearToOutputTexel",t.outputColorSpace),x_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),a=Du(a),a=Od(a,t),a=Fd(a,t),o=Du(o),o=Od(o,t),o=Fd(o,t),a=kd(a),o=kd(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=x+g+a,_=x+p+o,C=Nd(i,i.VERTEX_SHADER,b),M=Nd(i,i.FRAGMENT_SHADER,_);i.attachShader(v,C),i.attachShader(v,M),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function T(S){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(v).trim(),O=i.getShaderInfoLog(C).trim(),B=i.getShaderInfoLog(M).trim();let q=!0,H=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,C,M);else{const j=Ud(i,C,"vertex"),X=Ud(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+F+`
`+j+`
`+X)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||B==="")&&(H=!1);H&&(S.diagnostics={runnable:q,programLog:F,vertexShader:{log:O,prefix:g},fragmentShader:{log:B,prefix:p}})}i.deleteShader(C),i.deleteShader(M),D=new ec(i,v),z=M_(i,v)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let z;this.getAttributes=function(){return z===void 0&&T(this),z};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(v,f_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=M,this}let N_=0;class U_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new O_(e),t.set(e,n)),n}}class O_{constructor(e){this.id=N_++,this.code=e,this.usedTimes=0}}function F_(r,e,t,n,i,s,a){const o=new il,c=new U_,u=new Set,l=[],h=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return u.add(y),y===0?"uv":`uv${y}`}function p(y,S,F,O,B){const q=O.fog,H=B.geometry,j=y.isMeshStandardMaterial?O.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||j),he=X&&X.mapping===Xr?X.image.height:null,ye=v[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const fe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ze=fe!==void 0?fe.length:0;let ct=0;H.morphAttributes.position!==void 0&&(ct=1),H.morphAttributes.normal!==void 0&&(ct=2),H.morphAttributes.color!==void 0&&(ct=3);let K,ce,ge,xe;if(ye){const xt=hi[ye];K=xt.vertexShader,ce=xt.fragmentShader}else K=y.vertexShader,ce=y.fragmentShader,c.update(y),ge=c.getVertexShaderID(y),xe=c.getFragmentShaderID(y);const Ye=r.getRenderTarget(),te=B.isInstancedMesh===!0,qe=B.isBatchedMesh===!0,ot=!!y.map,re=!!y.matcap,L=!!X,ve=!!y.aoMap,me=!!y.lightMap,de=!!y.bumpMap,_e=!!y.normalMap,ze=!!y.displacementMap,Re=!!y.emissiveMap,I=!!y.metalnessMap,w=!!y.roughnessMap,V=y.anisotropy>0,Z=y.clearcoat>0,se=y.dispersion>0,ne=y.iridescence>0,De=y.sheen>0,Me=y.transmission>0,Ce=V&&!!y.anisotropyMap,tt=Z&&!!y.clearcoatMap,le=Z&&!!y.clearcoatNormalMap,Ne=Z&&!!y.clearcoatRoughnessMap,Ke=ne&&!!y.iridescenceMap,Qe=ne&&!!y.iridescenceThicknessMap,Pe=De&&!!y.sheenColorMap,rt=De&&!!y.sheenRoughnessMap,Je=!!y.specularMap,st=!!y.specularColorMap,k=!!y.specularIntensityMap,Oe=Me&&!!y.transmissionMap,ee=Me&&!!y.thicknessMap,ae=!!y.gradientMap,Ue=!!y.alphaMap,Ae=y.alphaTest>0,nt=!!y.alphaHash,lt=!!y.extensions;let Ut=zi;y.toneMapped&&(Ye===null||Ye.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const Ve={shaderID:ye,shaderType:y.type,shaderName:y.name,vertexShader:K,fragmentShader:ce,defines:y.defines,customVertexShaderID:ge,customFragmentShaderID:xe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:qe,batchingColor:qe&&B._colorsTexture!==null,instancing:te,instancingColor:te&&B.instanceColor!==null,instancingMorph:te&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ye===null?r.outputColorSpace:Ye.isXRRenderTarget===!0?Ye.texture.colorSpace:qt,alphaToCoverage:!!y.alphaToCoverage,map:ot,matcap:re,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:he,aoMap:ve,lightMap:me,bumpMap:de,normalMap:_e,displacementMap:f&&ze,emissiveMap:Re,normalMapObjectSpace:_e&&y.normalMapType===Pp,normalMapTangentSpace:_e&&y.normalMapType===ds,metalnessMap:I,roughnessMap:w,anisotropy:V,anisotropyMap:Ce,clearcoat:Z,clearcoatMap:tt,clearcoatNormalMap:le,clearcoatRoughnessMap:Ne,dispersion:se,iridescence:ne,iridescenceMap:Ke,iridescenceThicknessMap:Qe,sheen:De,sheenColorMap:Pe,sheenRoughnessMap:rt,specularMap:Je,specularColorMap:st,specularIntensityMap:k,transmission:Me,transmissionMap:Oe,thicknessMap:ee,gradientMap:ae,opaque:y.transparent===!1&&y.blending===os&&y.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Ae,alphaHash:nt,combine:y.combine,mapUv:ot&&g(y.map.channel),aoMapUv:ve&&g(y.aoMap.channel),lightMapUv:me&&g(y.lightMap.channel),bumpMapUv:de&&g(y.bumpMap.channel),normalMapUv:_e&&g(y.normalMap.channel),displacementMapUv:ze&&g(y.displacementMap.channel),emissiveMapUv:Re&&g(y.emissiveMap.channel),metalnessMapUv:I&&g(y.metalnessMap.channel),roughnessMapUv:w&&g(y.roughnessMap.channel),anisotropyMapUv:Ce&&g(y.anisotropyMap.channel),clearcoatMapUv:tt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:rt&&g(y.sheenRoughnessMap.channel),specularMapUv:Je&&g(y.specularMap.channel),specularColorMapUv:st&&g(y.specularColorMap.channel),specularIntensityMapUv:k&&g(y.specularIntensityMap.channel),transmissionMapUv:Oe&&g(y.transmissionMap.channel),thicknessMapUv:ee&&g(y.thicknessMap.channel),alphaMapUv:Ue&&g(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(_e||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(ot||Ue),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ze,morphTextureStride:ct,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:ot&&y.map.isVideoTexture===!0&&St.getTransfer(y.map.colorSpace)===Pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fn,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:lt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&y.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ve.vertexUv1s=u.has(1),Ve.vertexUv2s=u.has(2),Ve.vertexUv3s=u.has(3),u.clear(),Ve}function x(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)S.push(F),S.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(b(S,y),_(S,y),S.push(r.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function b(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function _(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),y.push(o.mask)}function C(y){const S=v[y.type];let F;if(S){const O=hi[S];F=Oa.clone(O.uniforms)}else F=y.uniforms;return F}function M(y,S){let F;for(let O=0,B=l.length;O<B;O++){const q=l[O];if(q.cacheKey===S){F=q,++F.usedTimes;break}}return F===void 0&&(F=new D_(r,S,y,s),l.push(F)),F}function T(y){if(--y.usedTimes===0){const S=l.indexOf(y);l[S]=l[l.length-1],l.pop(),y.destroy()}}function D(y){c.remove(y)}function z(){c.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:C,acquireProgram:M,releaseProgram:T,releaseShaderCache:D,programs:l,dispose:z}}function k_(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function B_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function zd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Hd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,m,v,g){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function o(h,d,f,m,v,g){const p=a(h,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,m,v,g){const p=a(h,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function u(h,d){t.length>1&&t.sort(h||B_),n.length>1&&n.sort(d||zd),i.length>1&&i.sort(d||zd)}function l(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:l,sort:u}}function z_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Hd,r.set(n,[a])):i>=s.length?(a=new Hd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function H_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new oe};break;case"SpotLight":t={position:new E,direction:new E,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":t={color:new oe,position:new E,halfWidth:new E,halfHeight:new E};break}return r[e.id]=t,t}}}function G_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let V_=0;function W_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function X_(r){const e=new H_,t=G_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new E);const i=new E,s=new Xe,a=new Xe;function o(u){let l=0,h=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,x=0,b=0,_=0,C=0,M=0,T=0;u.sort(W_);for(let z=0,y=u.length;z<y;z++){const S=u[z],F=S.color,O=S.intensity,B=S.distance,q=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)l+=F.r*O,h+=F.g*O,d+=F.b*O;else if(S.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(S.sh.coefficients[H],O);T++}else if(S.isDirectionalLight){const H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const j=S.shadow,X=t.get(S);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=S.shadow.matrix,x++}n.directional[f]=H,f++}else if(S.isSpotLight){const H=e.get(S);H.position.setFromMatrixPosition(S.matrixWorld),H.color.copy(F).multiplyScalar(O),H.distance=B,H.coneCos=Math.cos(S.angle),H.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),H.decay=S.decay,n.spot[v]=H;const j=S.shadow;if(S.map&&(n.spotLightMap[C]=S.map,C++,j.updateMatrices(S),S.castShadow&&M++),n.spotLightMatrix[v]=j.matrix,S.castShadow){const X=t.get(S);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=q,_++}v++}else if(S.isRectAreaLight){const H=e.get(S);H.color.copy(F).multiplyScalar(O),H.halfWidth.set(S.width*.5,0,0),H.halfHeight.set(0,S.height*.5,0),n.rectArea[g]=H,g++}else if(S.isPointLight){const H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),H.distance=S.distance,H.decay=S.decay,S.castShadow){const j=S.shadow,X=t.get(S);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=S.shadow.matrix,b++}n.point[m]=H,m++}else if(S.isHemisphereLight){const H=e.get(S);H.skyColor.copy(S.color).multiplyScalar(O),H.groundColor.copy(S.groundColor).multiplyScalar(O),n.hemi[p]=H,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==v||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==x||D.numPointShadows!==b||D.numSpotShadows!==_||D.numSpotMaps!==C||D.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+C-M,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,D.directionalLength=f,D.pointLength=m,D.spotLength=v,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=x,D.numPointShadows=b,D.numSpotShadows=_,D.numSpotMaps=C,D.numLightProbes=T,n.version=V_++)}function c(u,l){let h=0,d=0,f=0,m=0,v=0;const g=l.matrixWorldInverse;for(let p=0,x=u.length;p<x;p++){const b=u[p];if(b.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),h++}else if(b.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(b.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:o,setupView:c,state:n}}function Gd(r){const e=new X_(r),t=[],n=[];function i(l){u.camera=l,t.length=0,n.length=0}function s(l){t.push(l)}function a(l){n.push(l)}function o(){e.setup(t)}function c(l){e.setupView(t,l)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function q_(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Gd(r),e.set(i,[o])):s>=a.length?(o=new Gd(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class fh extends Zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ph extends Zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const j_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
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
}`;function K_(r,e,t){let n=new Ka;const i=new $,s=new $,a=new bt,o=new fh({depthPacking:Cp}),c=new ph,u={},l=t.maxTextureSize,h={[Ai]:un,[un]:Ai,[Fn]:Fn},d=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:j_,fragmentShader:Y_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new et;m.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new wt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju;let p=this.type;this.render=function(M,T,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const z=r.getRenderTarget(),y=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Si),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==bi&&this.type===bi,B=p===bi&&this.type!==bi;for(let q=0,H=M.length;q<H;q++){const j=M[q],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const he=X.getFrameExtents();if(i.multiply(he),s.copy(X.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(s.x=Math.floor(l/he.x),i.x=s.x*he.x,X.mapSize.x=s.x),i.y>l&&(s.y=Math.floor(l/he.y),i.y=s.y*he.y,X.mapSize.y=s.y)),X.map===null||O===!0||B===!0){const fe=this.type!==bi?{minFilter:Kt,magFilter:Kt}:{};X.map!==null&&X.map.dispose(),X.map=new Jt(i.x,i.y,fe),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const ye=X.getViewportCount();for(let fe=0;fe<ye;fe++){const Ze=X.getViewport(fe);a.set(s.x*Ze.x,s.y*Ze.y,s.x*Ze.z,s.y*Ze.w),F.viewport(a),X.updateMatrices(j,fe),n=X.getFrustum(),_(T,D,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===bi&&x(X,D),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(z,y,S)};function x(M,T){const D=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Jt(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(T,null,D,d,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(T,null,D,f,v,null)}function b(M,T,D,z){let y=null;const S=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(S!==void 0)y=S;else if(y=D.isPointLight===!0?c:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=y.uuid,O=T.uuid;let B=u[F];B===void 0&&(B={},u[F]=B);let q=B[O];q===void 0&&(q=y.clone(),B[O]=q,T.addEventListener("dispose",C)),y=q}if(y.visible=T.visible,y.wireframe=T.wireframe,z===bi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=r.properties.get(y);F.light=D}return y}function _(M,T,D,z,y){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===bi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);const O=e.update(M),B=M.material;if(Array.isArray(B)){const q=O.groups;for(let H=0,j=q.length;H<j;H++){const X=q[H],he=B[X.materialIndex];if(he&&he.visible){const ye=b(M,he,z,y);M.onBeforeShadow(r,M,T,D,O,ye,X),r.renderBufferDirect(D,null,O,ye,M,X),M.onAfterShadow(r,M,T,D,O,ye,X)}}}else if(B.visible){const q=b(M,B,z,y);M.onBeforeShadow(r,M,T,D,O,q,null),r.renderBufferDirect(D,null,O,q,M,null),M.onAfterShadow(r,M,T,D,O,q,null)}}const F=M.children;for(let O=0,B=F.length;O<B;O++)_(F[O],T,D,z,y)}function C(M){M.target.removeEventListener("dispose",C);for(const D in u){const z=u[D],y=M.target.uuid;y in z&&(z[y].dispose(),delete z[y])}}}const J_={[rc]:ac,[oc]:uc,[cc]:hc,[qs]:lc,[ac]:rc,[uc]:oc,[hc]:cc,[lc]:qs};function Z_(r){function e(){let k=!1;const Oe=new bt;let ee=null;const ae=new bt(0,0,0,0);return{setMask:function(Ue){ee!==Ue&&!k&&(r.colorMask(Ue,Ue,Ue,Ue),ee=Ue)},setLocked:function(Ue){k=Ue},setClear:function(Ue,Ae,nt,lt,Ut){Ut===!0&&(Ue*=lt,Ae*=lt,nt*=lt),Oe.set(Ue,Ae,nt,lt),ae.equals(Oe)===!1&&(r.clearColor(Ue,Ae,nt,lt),ae.copy(Oe))},reset:function(){k=!1,ee=null,ae.set(-1,0,0,0)}}}function t(){let k=!1,Oe=!1,ee=null,ae=null,Ue=null;return{setReversed:function(Ae){Oe=Ae},setTest:function(Ae){Ae?ge(r.DEPTH_TEST):xe(r.DEPTH_TEST)},setMask:function(Ae){ee!==Ae&&!k&&(r.depthMask(Ae),ee=Ae)},setFunc:function(Ae){if(Oe&&(Ae=J_[Ae]),ae!==Ae){switch(Ae){case rc:r.depthFunc(r.NEVER);break;case ac:r.depthFunc(r.ALWAYS);break;case oc:r.depthFunc(r.LESS);break;case qs:r.depthFunc(r.LEQUAL);break;case cc:r.depthFunc(r.EQUAL);break;case lc:r.depthFunc(r.GEQUAL);break;case uc:r.depthFunc(r.GREATER);break;case hc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ae=Ae}},setLocked:function(Ae){k=Ae},setClear:function(Ae){Ue!==Ae&&(r.clearDepth(Ae),Ue=Ae)},reset:function(){k=!1,ee=null,ae=null,Ue=null}}}function n(){let k=!1,Oe=null,ee=null,ae=null,Ue=null,Ae=null,nt=null,lt=null,Ut=null;return{setTest:function(Ve){k||(Ve?ge(r.STENCIL_TEST):xe(r.STENCIL_TEST))},setMask:function(Ve){Oe!==Ve&&!k&&(r.stencilMask(Ve),Oe=Ve)},setFunc:function(Ve,xt,en){(ee!==Ve||ae!==xt||Ue!==en)&&(r.stencilFunc(Ve,xt,en),ee=Ve,ae=xt,Ue=en)},setOp:function(Ve,xt,en){(Ae!==Ve||nt!==xt||lt!==en)&&(r.stencilOp(Ve,xt,en),Ae=Ve,nt=xt,lt=en)},setLocked:function(Ve){k=Ve},setClear:function(Ve){Ut!==Ve&&(r.clearStencil(Ve),Ut=Ve)},reset:function(){k=!1,Oe=null,ee=null,ae=null,Ue=null,Ae=null,nt=null,lt=null,Ut=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,c=new WeakMap;let u={},l={},h=new WeakMap,d=[],f=null,m=!1,v=null,g=null,p=null,x=null,b=null,_=null,C=null,M=new oe(0,0,0),T=0,D=!1,z=null,y=null,S=null,F=null,O=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=H>=1):j.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=H>=2);let X=null,he={};const ye=r.getParameter(r.SCISSOR_BOX),fe=r.getParameter(r.VIEWPORT),Ze=new bt().fromArray(ye),ct=new bt().fromArray(fe);function K(k,Oe,ee,ae){const Ue=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(k,Ae),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let nt=0;nt<ee;nt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Oe,0,r.RGBA,1,1,ae,0,r.RGBA,r.UNSIGNED_BYTE,Ue):r.texImage2D(Oe+nt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ue);return Ae}const ce={};ce[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ge(r.DEPTH_TEST),s.setFunc(qs),me(!1),de(Tu),ge(r.CULL_FACE),L(Si);function ge(k){u[k]!==!0&&(r.enable(k),u[k]=!0)}function xe(k){u[k]!==!1&&(r.disable(k),u[k]=!1)}function Ye(k,Oe){return l[k]!==Oe?(r.bindFramebuffer(k,Oe),l[k]=Oe,k===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=Oe),k===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=Oe),!0):!1}function te(k,Oe){let ee=d,ae=!1;if(k){ee=h.get(Oe),ee===void 0&&(ee=[],h.set(Oe,ee));const Ue=k.textures;if(ee.length!==Ue.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let Ae=0,nt=Ue.length;Ae<nt;Ae++)ee[Ae]=r.COLOR_ATTACHMENT0+Ae;ee.length=Ue.length,ae=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,ae=!0);ae&&r.drawBuffers(ee)}function qe(k){return f!==k?(r.useProgram(k),f=k,!0):!1}const ot={[as]:r.FUNC_ADD,[Zf]:r.FUNC_SUBTRACT,[Qf]:r.FUNC_REVERSE_SUBTRACT};ot[$f]=r.MIN,ot[ep]=r.MAX;const re={[tp]:r.ZERO,[np]:r.ONE,[ip]:r.SRC_COLOR,[ic]:r.SRC_ALPHA,[lp]:r.SRC_ALPHA_SATURATE,[op]:r.DST_COLOR,[rp]:r.DST_ALPHA,[sp]:r.ONE_MINUS_SRC_COLOR,[sc]:r.ONE_MINUS_SRC_ALPHA,[cp]:r.ONE_MINUS_DST_COLOR,[ap]:r.ONE_MINUS_DST_ALPHA,[up]:r.CONSTANT_COLOR,[hp]:r.ONE_MINUS_CONSTANT_COLOR,[dp]:r.CONSTANT_ALPHA,[fp]:r.ONE_MINUS_CONSTANT_ALPHA};function L(k,Oe,ee,ae,Ue,Ae,nt,lt,Ut,Ve){if(k===Si){m===!0&&(xe(r.BLEND),m=!1);return}if(m===!1&&(ge(r.BLEND),m=!0),k!==Jf){if(k!==v||Ve!==D){if((g!==as||b!==as)&&(r.blendEquation(r.FUNC_ADD),g=as,b=as),Ve)switch(k){case os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bn:r.blendFunc(r.ONE,r.ONE);break;case Eu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ru:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Eu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ru:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}p=null,x=null,_=null,C=null,M.set(0,0,0),T=0,v=k,D=Ve}return}Ue=Ue||Oe,Ae=Ae||ee,nt=nt||ae,(Oe!==g||Ue!==b)&&(r.blendEquationSeparate(ot[Oe],ot[Ue]),g=Oe,b=Ue),(ee!==p||ae!==x||Ae!==_||nt!==C)&&(r.blendFuncSeparate(re[ee],re[ae],re[Ae],re[nt]),p=ee,x=ae,_=Ae,C=nt),(lt.equals(M)===!1||Ut!==T)&&(r.blendColor(lt.r,lt.g,lt.b,Ut),M.copy(lt),T=Ut),v=k,D=!1}function ve(k,Oe){k.side===Fn?xe(r.CULL_FACE):ge(r.CULL_FACE);let ee=k.side===un;Oe&&(ee=!ee),me(ee),k.blending===os&&k.transparent===!1?L(Si):L(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),i.setMask(k.colorWrite);const ae=k.stencilWrite;a.setTest(ae),ae&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ze(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):xe(r.SAMPLE_ALPHA_TO_COVERAGE)}function me(k){z!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),z=k)}function de(k){k!==Yf?(ge(r.CULL_FACE),k!==y&&(k===Tu?r.cullFace(r.BACK):k===Kf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xe(r.CULL_FACE),y=k}function _e(k){k!==S&&(q&&r.lineWidth(k),S=k)}function ze(k,Oe,ee){k?(ge(r.POLYGON_OFFSET_FILL),(F!==Oe||O!==ee)&&(r.polygonOffset(Oe,ee),F=Oe,O=ee)):xe(r.POLYGON_OFFSET_FILL)}function Re(k){k?ge(r.SCISSOR_TEST):xe(r.SCISSOR_TEST)}function I(k){k===void 0&&(k=r.TEXTURE0+B-1),X!==k&&(r.activeTexture(k),X=k)}function w(k,Oe,ee){ee===void 0&&(X===null?ee=r.TEXTURE0+B-1:ee=X);let ae=he[ee];ae===void 0&&(ae={type:void 0,texture:void 0},he[ee]=ae),(ae.type!==k||ae.texture!==Oe)&&(X!==ee&&(r.activeTexture(ee),X=ee),r.bindTexture(k,Oe||ce[k]),ae.type=k,ae.texture=Oe)}function V(){const k=he[X];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ke(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qe(k){Ze.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Ze.copy(k))}function Pe(k){ct.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),ct.copy(k))}function rt(k,Oe){let ee=c.get(Oe);ee===void 0&&(ee=new WeakMap,c.set(Oe,ee));let ae=ee.get(k);ae===void 0&&(ae=r.getUniformBlockIndex(Oe,k.name),ee.set(k,ae))}function Je(k,Oe){const ae=c.get(Oe).get(k);o.get(Oe)!==ae&&(r.uniformBlockBinding(Oe,ae,k.__bindingPointIndex),o.set(Oe,ae))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},X=null,he={},l={},h=new WeakMap,d=[],f=null,m=!1,v=null,g=null,p=null,x=null,b=null,_=null,C=null,M=new oe(0,0,0),T=0,D=!1,z=null,y=null,S=null,F=null,O=null,Ze.set(0,0,r.canvas.width,r.canvas.height),ct.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:ge,disable:xe,bindFramebuffer:Ye,drawBuffers:te,useProgram:qe,setBlending:L,setMaterial:ve,setFlipSided:me,setCullFace:de,setLineWidth:_e,setPolygonOffset:ze,setScissorTest:Re,activeTexture:I,bindTexture:w,unbindTexture:V,compressedTexImage2D:Z,compressedTexImage3D:se,texImage2D:Ne,texImage3D:Ke,updateUBOMapping:rt,uniformBlockBinding:Je,texStorage2D:tt,texStorage3D:le,texSubImage2D:ne,texSubImage3D:De,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ce,scissor:Qe,viewport:Pe,reset:st}}function Q_(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function $_(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function ey(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function Nu(r,e,t,n){const i=ty(n);switch(t){case Qu:return r*e;case eh:return r*e;case th:return r*e*2;case Zc:return r*e/i.components*i.byteLength;case qa:return r*e/i.components*i.byteLength;case nh:return r*e*2/i.components*i.byteLength;case Qc:return r*e*2/i.components*i.byteLength;case $u:return r*e*3/i.components*i.byteLength;case xn:return r*e*4/i.components*i.byteLength;case $c:return r*e*4/i.components*i.byteLength;case xa:case _a:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ya:case Ma:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fc:case mc:return Math.max(r,16)*Math.max(e,8)/4;case dc:case pc:return Math.max(r,8)*Math.max(e,8)/2;case gc:case vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case yc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Sa:case Dc:case Nc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ih:case Uc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Oc:case Fc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ty(r){switch(r){case Ei:case Ku:return{byteLength:1,components:1};case kr:case Ju:case Bn:return{byteLength:2,components:1};case Kc:case Jc:return{byteLength:2,components:4};case Gi:case Yc:case kn:return{byteLength:4,components:1};case Zu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}const ny={contain:Q_,cover:$_,fill:ey,getByteLength:Nu};function iy(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new $,l=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,w){return f?new OffscreenCanvas(I,w):Ua("canvas")}function v(I,w,V){let Z=1;const se=Re(I);if((se.width>V||se.height>V)&&(Z=V/Math.max(se.width,se.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){const ne=Math.floor(Z*se.width),De=Math.floor(Z*se.height);h===void 0&&(h=m(ne,De));const Me=w?m(ne,De):h;return Me.width=ne,Me.height=De,Me.getContext("2d").drawImage(I,0,0,ne,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ne+"x"+De+")."),Me}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),I;return I}function g(I){return I.generateMipmaps&&I.minFilter!==Kt&&I.minFilter!==Rt}function p(I){r.generateMipmap(I)}function x(I,w,V,Z,se=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ne=w;if(w===r.RED&&(V===r.FLOAT&&(ne=r.R32F),V===r.HALF_FLOAT&&(ne=r.R16F),V===r.UNSIGNED_BYTE&&(ne=r.R8)),w===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(ne=r.R8UI),V===r.UNSIGNED_SHORT&&(ne=r.R16UI),V===r.UNSIGNED_INT&&(ne=r.R32UI),V===r.BYTE&&(ne=r.R8I),V===r.SHORT&&(ne=r.R16I),V===r.INT&&(ne=r.R32I)),w===r.RG&&(V===r.FLOAT&&(ne=r.RG32F),V===r.HALF_FLOAT&&(ne=r.RG16F),V===r.UNSIGNED_BYTE&&(ne=r.RG8)),w===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(ne=r.RG8UI),V===r.UNSIGNED_SHORT&&(ne=r.RG16UI),V===r.UNSIGNED_INT&&(ne=r.RG32UI),V===r.BYTE&&(ne=r.RG8I),V===r.SHORT&&(ne=r.RG16I),V===r.INT&&(ne=r.RG32I)),w===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(ne=r.RGB8UI),V===r.UNSIGNED_SHORT&&(ne=r.RGB16UI),V===r.UNSIGNED_INT&&(ne=r.RGB32UI),V===r.BYTE&&(ne=r.RGB8I),V===r.SHORT&&(ne=r.RGB16I),V===r.INT&&(ne=r.RGB32I)),w===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(ne=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(ne=r.RGBA16UI),V===r.UNSIGNED_INT&&(ne=r.RGBA32UI),V===r.BYTE&&(ne=r.RGBA8I),V===r.SHORT&&(ne=r.RGBA16I),V===r.INT&&(ne=r.RGBA32I)),w===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(ne=r.RGB9_E5),w===r.RGBA){const De=se?Pa:St.getTransfer(Z);V===r.FLOAT&&(ne=r.RGBA32F),V===r.HALF_FLOAT&&(ne=r.RGBA16F),V===r.UNSIGNED_BYTE&&(ne=De===Pt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function b(I,w){let V;return I?w===null||w===Gi||w===Ys?V=r.DEPTH24_STENCIL8:w===kn?V=r.DEPTH32F_STENCIL8:w===kr&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Gi||w===Ys?V=r.DEPTH_COMPONENT24:w===kn?V=r.DEPTH_COMPONENT32F:w===kr&&(V=r.DEPTH_COMPONENT16),V}function _(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Kt&&I.minFilter!==Rt?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function C(I){const w=I.target;w.removeEventListener("dispose",C),T(w),w.isVideoTexture&&l.delete(w)}function M(I){const w=I.target;w.removeEventListener("dispose",M),z(w)}function T(I){const w=n.get(I);if(w.__webglInit===void 0)return;const V=I.source,Z=d.get(V);if(Z){const se=Z[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&D(I),Object.keys(Z).length===0&&d.delete(V)}n.remove(I)}function D(I){const w=n.get(I);r.deleteTexture(w.__webglTexture);const V=I.source,Z=d.get(V);delete Z[w.__cacheKey],a.memory.textures--}function z(I){const w=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let se=0;se<w.__webglFramebuffer[Z].length;se++)r.deleteFramebuffer(w.__webglFramebuffer[Z][se]);else r.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)r.deleteFramebuffer(w.__webglFramebuffer[Z]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=I.textures;for(let Z=0,se=V.length;Z<se;Z++){const ne=n.get(V[Z]);ne.__webglTexture&&(r.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(V[Z])}n.remove(I)}let y=0;function S(){y=0}function F(){const I=y;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),y+=1,I}function O(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function B(I,w){const V=n.get(I);if(I.isVideoTexture&&_e(I),I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){const Z=I.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(V,I,w);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+w)}function q(I,w){const V=n.get(I);if(I.version>0&&V.__version!==I.version){ct(V,I,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+w)}function H(I,w){const V=n.get(I);if(I.version>0&&V.__version!==I.version){ct(V,I,w);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+w)}function j(I,w){const V=n.get(I);if(I.version>0&&V.__version!==I.version){K(V,I,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+w)}const X={[Ti]:r.REPEAT,[Xn]:r.CLAMP_TO_EDGE,[Fr]:r.MIRRORED_REPEAT},he={[Kt]:r.NEAREST,[jc]:r.NEAREST_MIPMAP_NEAREST,[ks]:r.NEAREST_MIPMAP_LINEAR,[Rt]:r.LINEAR,[Lr]:r.LINEAR_MIPMAP_NEAREST,[qn]:r.LINEAR_MIPMAP_LINEAR},ye={[Ip]:r.NEVER,[Fp]:r.ALWAYS,[Lp]:r.LESS,[ah]:r.LEQUAL,[Dp]:r.EQUAL,[Op]:r.GEQUAL,[Np]:r.GREATER,[Up]:r.NOTEQUAL};function fe(I,w){if(w.type===kn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Rt||w.magFilter===Lr||w.magFilter===ks||w.magFilter===qn||w.minFilter===Rt||w.minFilter===Lr||w.minFilter===ks||w.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,X[w.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,X[w.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,X[w.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,he[w.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,he[w.minFilter]),w.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,ye[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Kt||w.minFilter!==ks&&w.minFilter!==qn||w.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ze(I,w){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",C));const Z=w.source;let se=d.get(Z);se===void 0&&(se={},d.set(Z,se));const ne=O(w);if(ne!==I.__cacheKey){se[ne]===void 0&&(se[ne]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),se[ne].usedTimes++;const De=se[I.__cacheKey];De!==void 0&&(se[I.__cacheKey].usedTimes--,De.usedTimes===0&&D(w)),I.__cacheKey=ne,I.__webglTexture=se[ne].texture}return V}function ct(I,w,V){let Z=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=r.TEXTURE_3D);const se=Ze(I,w),ne=w.source;t.bindTexture(Z,I.__webglTexture,r.TEXTURE0+V);const De=n.get(ne);if(ne.version!==De.__version||se===!0){t.activeTexture(r.TEXTURE0+V);const Me=St.getPrimaries(St.workingColorSpace),Ce=w.colorSpace===yi?null:St.getPrimaries(w.colorSpace),tt=w.colorSpace===yi||Me===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let le=v(w.image,!1,i.maxTextureSize);le=ze(w,le);const Ne=s.convert(w.format,w.colorSpace),Ke=s.convert(w.type);let Qe=x(w.internalFormat,Ne,Ke,w.colorSpace,w.isVideoTexture);fe(Z,w);let Pe;const rt=w.mipmaps,Je=w.isVideoTexture!==!0,st=De.__version===void 0||se===!0,k=ne.dataReady,Oe=_(w,le);if(w.isDepthTexture)Qe=b(w.format===Ks,w.type),st&&(Je?t.texStorage2D(r.TEXTURE_2D,1,Qe,le.width,le.height):t.texImage2D(r.TEXTURE_2D,0,Qe,le.width,le.height,0,Ne,Ke,null));else if(w.isDataTexture)if(rt.length>0){Je&&st&&t.texStorage2D(r.TEXTURE_2D,Oe,Qe,rt[0].width,rt[0].height);for(let ee=0,ae=rt.length;ee<ae;ee++)Pe=rt[ee],Je?k&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,Ne,Ke,Pe.data):t.texImage2D(r.TEXTURE_2D,ee,Qe,Pe.width,Pe.height,0,Ne,Ke,Pe.data);w.generateMipmaps=!1}else Je?(st&&t.texStorage2D(r.TEXTURE_2D,Oe,Qe,le.width,le.height),k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le.width,le.height,Ne,Ke,le.data)):t.texImage2D(r.TEXTURE_2D,0,Qe,le.width,le.height,0,Ne,Ke,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Je&&st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,Qe,rt[0].width,rt[0].height,le.depth);for(let ee=0,ae=rt.length;ee<ae;ee++)if(Pe=rt[ee],w.format!==xn)if(Ne!==null)if(Je){if(k)if(w.layerUpdates.size>0){const Ue=Nu(Pe.width,Pe.height,w.format,w.type);for(const Ae of w.layerUpdates){const nt=Pe.data.subarray(Ae*Ue/Pe.data.BYTES_PER_ELEMENT,(Ae+1)*Ue/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,Ae,Pe.width,Pe.height,1,Ne,nt,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,Pe.width,Pe.height,le.depth,Ne,Pe.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,Qe,Pe.width,Pe.height,le.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?k&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,Pe.width,Pe.height,le.depth,Ne,Ke,Pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,Qe,Pe.width,Pe.height,le.depth,0,Ne,Ke,Pe.data)}else{Je&&st&&t.texStorage2D(r.TEXTURE_2D,Oe,Qe,rt[0].width,rt[0].height);for(let ee=0,ae=rt.length;ee<ae;ee++)Pe=rt[ee],w.format!==xn?Ne!==null?Je?k&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,Ne,Pe.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,Qe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?k&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,Ne,Ke,Pe.data):t.texImage2D(r.TEXTURE_2D,ee,Qe,Pe.width,Pe.height,0,Ne,Ke,Pe.data)}else if(w.isDataArrayTexture)if(Je){if(st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,Qe,le.width,le.height,le.depth),k)if(w.layerUpdates.size>0){const ee=Nu(le.width,le.height,w.format,w.type);for(const ae of w.layerUpdates){const Ue=le.data.subarray(ae*ee/le.data.BYTES_PER_ELEMENT,(ae+1)*ee/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ae,le.width,le.height,1,Ne,Ke,Ue)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ne,Ke,le.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Qe,le.width,le.height,le.depth,0,Ne,Ke,le.data);else if(w.isData3DTexture)Je?(st&&t.texStorage3D(r.TEXTURE_3D,Oe,Qe,le.width,le.height,le.depth),k&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ne,Ke,le.data)):t.texImage3D(r.TEXTURE_3D,0,Qe,le.width,le.height,le.depth,0,Ne,Ke,le.data);else if(w.isFramebufferTexture){if(st)if(Je)t.texStorage2D(r.TEXTURE_2D,Oe,Qe,le.width,le.height);else{let ee=le.width,ae=le.height;for(let Ue=0;Ue<Oe;Ue++)t.texImage2D(r.TEXTURE_2D,Ue,Qe,ee,ae,0,Ne,Ke,null),ee>>=1,ae>>=1}}else if(rt.length>0){if(Je&&st){const ee=Re(rt[0]);t.texStorage2D(r.TEXTURE_2D,Oe,Qe,ee.width,ee.height)}for(let ee=0,ae=rt.length;ee<ae;ee++)Pe=rt[ee],Je?k&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Ne,Ke,Pe):t.texImage2D(r.TEXTURE_2D,ee,Qe,Ne,Ke,Pe);w.generateMipmaps=!1}else if(Je){if(st){const ee=Re(le);t.texStorage2D(r.TEXTURE_2D,Oe,Qe,ee.width,ee.height)}k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Ke,le)}else t.texImage2D(r.TEXTURE_2D,0,Qe,Ne,Ke,le);g(w)&&p(Z),De.__version=ne.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function K(I,w,V){if(w.image.length!==6)return;const Z=Ze(I,w),se=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+V);const ne=n.get(se);if(se.version!==ne.__version||Z===!0){t.activeTexture(r.TEXTURE0+V);const De=St.getPrimaries(St.workingColorSpace),Me=w.colorSpace===yi?null:St.getPrimaries(w.colorSpace),Ce=w.colorSpace===yi||De===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const tt=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,Ne=[];for(let ae=0;ae<6;ae++)!tt&&!le?Ne[ae]=v(w.image[ae],!0,i.maxCubemapSize):Ne[ae]=le?w.image[ae].image:w.image[ae],Ne[ae]=ze(w,Ne[ae]);const Ke=Ne[0],Qe=s.convert(w.format,w.colorSpace),Pe=s.convert(w.type),rt=x(w.internalFormat,Qe,Pe,w.colorSpace),Je=w.isVideoTexture!==!0,st=ne.__version===void 0||Z===!0,k=se.dataReady;let Oe=_(w,Ke);fe(r.TEXTURE_CUBE_MAP,w);let ee;if(tt){Je&&st&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,rt,Ke.width,Ke.height);for(let ae=0;ae<6;ae++){ee=Ne[ae].mipmaps;for(let Ue=0;Ue<ee.length;Ue++){const Ae=ee[Ue];w.format!==xn?Qe!==null?Je?k&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,0,0,Ae.width,Ae.height,Qe,Ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,rt,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,0,0,Ae.width,Ae.height,Qe,Pe,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,rt,Ae.width,Ae.height,0,Qe,Pe,Ae.data)}}}else{if(ee=w.mipmaps,Je&&st){ee.length>0&&Oe++;const ae=Re(Ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,rt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(le){Je?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ne[ae].width,Ne[ae].height,Qe,Pe,Ne[ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,rt,Ne[ae].width,Ne[ae].height,0,Qe,Pe,Ne[ae].data);for(let Ue=0;Ue<ee.length;Ue++){const nt=ee[Ue].image[ae].image;Je?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,0,0,nt.width,nt.height,Qe,Pe,nt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,rt,nt.width,nt.height,0,Qe,Pe,nt.data)}}else{Je?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Qe,Pe,Ne[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,rt,Qe,Pe,Ne[ae]);for(let Ue=0;Ue<ee.length;Ue++){const Ae=ee[Ue];Je?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,0,0,Qe,Pe,Ae.image[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,rt,Qe,Pe,Ae.image[ae])}}}g(w)&&p(r.TEXTURE_CUBE_MAP),ne.__version=se.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ce(I,w,V,Z,se,ne){const De=s.convert(V.format,V.colorSpace),Me=s.convert(V.type),Ce=x(V.internalFormat,De,Me,V.colorSpace);if(!n.get(w).__hasExternalTextures){const le=Math.max(1,w.width>>ne),Ne=Math.max(1,w.height>>ne);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,ne,Ce,le,Ne,w.depth,0,De,Me,null):t.texImage2D(se,ne,Ce,le,Ne,0,De,Me,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),de(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,se,n.get(V).__webglTexture,0,me(w)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,se,n.get(V).__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ge(I,w,V){if(r.bindRenderbuffer(r.RENDERBUFFER,I),w.depthBuffer){const Z=w.depthTexture,se=Z&&Z.isDepthTexture?Z.type:null,ne=b(w.stencilBuffer,se),De=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=me(w);de(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Me,ne,w.width,w.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,ne,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ne,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,De,r.RENDERBUFFER,I)}else{const Z=w.textures;for(let se=0;se<Z.length;se++){const ne=Z[se],De=s.convert(ne.format,ne.colorSpace),Me=s.convert(ne.type),Ce=x(ne.internalFormat,De,Me,ne.colorSpace),tt=me(w);V&&de(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Ce,w.width,w.height):de(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,Ce,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);const Z=n.get(w.depthTexture).__webglTexture,se=me(w);if(w.depthTexture.format===Vs)de(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(w.depthTexture.format===Ks)de(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ye(I){const w=n.get(I),V=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){const se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",se)};Z.addEventListener("dispose",se),w.__depthDisposeCallback=se}w.__boundDepthTexture=Z}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");xe(w.__webglFramebuffer,I)}else if(V){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=r.createRenderbuffer(),ge(w.__webglDepthbuffer[Z],I,!1);else{const se=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),ge(w.__webglDepthbuffer,I,!1);else{const Z=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,se)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function te(I,w,V){const Z=n.get(I);w!==void 0&&ce(Z.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Ye(I)}function qe(I){const w=I.texture,V=n.get(I),Z=n.get(w);I.addEventListener("dispose",M);const se=I.textures,ne=I.isWebGLCubeRenderTarget===!0,De=se.length>1;if(De||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=w.version,a.memory.textures++),ne){V.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[Me]=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)V.__webglFramebuffer[Me][Ce]=r.createFramebuffer()}else V.__webglFramebuffer[Me]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let Me=0;Me<w.mipmaps.length;Me++)V.__webglFramebuffer[Me]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(De)for(let Me=0,Ce=se.length;Me<Ce;Me++){const tt=n.get(se[Me]);tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture(),a.memory.textures++)}if(I.samples>0&&de(I)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Me=0;Me<se.length;Me++){const Ce=se[Me];V.__webglColorRenderbuffer[Me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[Me]);const tt=s.convert(Ce.format,Ce.colorSpace),le=s.convert(Ce.type),Ne=x(Ce.internalFormat,tt,le,Ce.colorSpace,I.isXRRenderTarget===!0),Ke=me(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,Ne,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,V.__webglColorRenderbuffer[Me])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),ge(V.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),fe(r.TEXTURE_CUBE_MAP,w);for(let Me=0;Me<6;Me++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ce=0;Ce<w.mipmaps.length;Ce++)ce(V.__webglFramebuffer[Me][Ce],I,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ce);else ce(V.__webglFramebuffer[Me],I,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);g(w)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let Me=0,Ce=se.length;Me<Ce;Me++){const tt=se[Me],le=n.get(tt);t.bindTexture(r.TEXTURE_2D,le.__webglTexture),fe(r.TEXTURE_2D,tt),ce(V.__webglFramebuffer,I,tt,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,0),g(tt)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let Me=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Me=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Me,Z.__webglTexture),fe(Me,w),w.mipmaps&&w.mipmaps.length>0)for(let Ce=0;Ce<w.mipmaps.length;Ce++)ce(V.__webglFramebuffer[Ce],I,w,r.COLOR_ATTACHMENT0,Me,Ce);else ce(V.__webglFramebuffer,I,w,r.COLOR_ATTACHMENT0,Me,0);g(w)&&p(Me),t.unbindTexture()}I.depthBuffer&&Ye(I)}function ot(I){const w=I.textures;for(let V=0,Z=w.length;V<Z;V++){const se=w[V];if(g(se)){const ne=I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,De=n.get(se).__webglTexture;t.bindTexture(ne,De),p(ne),t.unbindTexture()}}}const re=[],L=[];function ve(I){if(I.samples>0){if(de(I)===!1){const w=I.textures,V=I.width,Z=I.height;let se=r.COLOR_BUFFER_BIT;const ne=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=n.get(I),Me=w.length>1;if(Me)for(let Ce=0;Ce<w.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ce=0;Ce<w.length;Ce++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),Me){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);const tt=n.get(w[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,tt,0)}r.blitFramebuffer(0,0,V,Z,0,0,V,Z,se,r.NEAREST),c===!0&&(re.length=0,L.length=0,re.push(r.COLOR_ATTACHMENT0+Ce),I.depthBuffer&&I.resolveDepthBuffer===!1&&(re.push(ne),L.push(ne),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Me)for(let Ce=0;Ce<w.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);const tt=n.get(w[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,tt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const w=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function me(I){return Math.min(i.maxSamples,I.samples)}function de(I){const w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function _e(I){const w=a.render.frame;l.get(I)!==w&&(l.set(I,w),I.update())}function ze(I,w){const V=I.colorSpace,Z=I.format,se=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==qt&&V!==yi&&(St.getTransfer(V)===Pt?(Z!==xn||se!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function Re(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=S,this.setTexture2D=B,this.setTexture2DArray=q,this.setTexture3D=H,this.setTextureCube=j,this.rebindTextures=te,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=de}function Zp(r,e){function t(n,i=yi){let s;const a=St.getTransfer(i);if(n===Ei)return r.UNSIGNED_BYTE;if(n===Kc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Jc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Zu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ku)return r.BYTE;if(n===Ju)return r.SHORT;if(n===kr)return r.UNSIGNED_SHORT;if(n===Yc)return r.INT;if(n===Gi)return r.UNSIGNED_INT;if(n===kn)return r.FLOAT;if(n===Bn)return r.HALF_FLOAT;if(n===Qu)return r.ALPHA;if(n===$u)return r.RGB;if(n===xn)return r.RGBA;if(n===eh)return r.LUMINANCE;if(n===th)return r.LUMINANCE_ALPHA;if(n===Vs)return r.DEPTH_COMPONENT;if(n===Ks)return r.DEPTH_STENCIL;if(n===Zc)return r.RED;if(n===qa)return r.RED_INTEGER;if(n===nh)return r.RG;if(n===Qc)return r.RG_INTEGER;if(n===$c)return r.RGBA_INTEGER;if(n===xa||n===_a||n===ya||n===Ma)if(a===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dc||n===fc||n===pc||n===mc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===dc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===vc||n===bc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gc||n===vc)return a===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===bc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xc||n===_c||n===yc||n===Mc||n===Sc||n===wc||n===Ac||n===Tc||n===Ec||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===xc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_c)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ac)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ec)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ic)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sa||n===Dc||n===Nc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Sa)return a===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ih||n===Uc||n===Oc||n===Fc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Sa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Uc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Qp extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cn extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sy={type:"move"};class su{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(u,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const l=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=l.position.distanceTo(h.position),f=.02,m=.005;u.inputState.pinching&&d>f+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=f-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sy)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ay=`
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

}`;class oy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Nt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new At({vertexShader:ry,fragmentShader:ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cy extends Ci{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,u=null,l=null,h=null,d=null,f=null,m=null;const v=new oy,g=t.getContextAttributes();let p=null,x=null;const b=[],_=[],C=new $;let M=null;const T=new Xt;T.layers.enable(1),T.viewport=new bt;const D=new Xt;D.layers.enable(2),D.viewport=new bt;const z=[T,D],y=new Qp;y.layers.enable(1),y.layers.enable(2);let S=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=b[K];return ce===void 0&&(ce=new su,b[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=b[K];return ce===void 0&&(ce=new su,b[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=b[K];return ce===void 0&&(ce=new su,b[K]=ce),ce.getHandSpace()};function O(K){const ce=_.indexOf(K.inputSource);if(ce===-1)return;const ge=b[ce];ge!==void 0&&(ge.update(K.inputSource,K.frame,u||a),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",q);for(let K=0;K<b.length;K++){const ce=_[K];ce!==null&&(_[K]=null,b[K].disconnect(ce))}S=null,F=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,x=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",B),i.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Jt(f.framebufferWidth,f.framebufferHeight,{format:xn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ce=null,ge=null,xe=null;g.depth&&(xe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=g.stencil?Ks:Vs,ge=g.stencil?Ys:Gi);const Ye={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ye),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Jt(d.textureWidth,d.textureHeight,{format:xn,type:Ei,depthTexture:new dh(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await i.requestReferenceSpace(o),ct.setContext(i),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(K){for(let ce=0;ce<K.removed.length;ce++){const ge=K.removed[ce],xe=_.indexOf(ge);xe>=0&&(_[xe]=null,b[xe].disconnect(ge))}for(let ce=0;ce<K.added.length;ce++){const ge=K.added[ce];let xe=_.indexOf(ge);if(xe===-1){for(let te=0;te<b.length;te++)if(te>=_.length){_.push(ge),xe=te;break}else if(_[te]===null){_[te]=ge,xe=te;break}if(xe===-1)break}const Ye=b[xe];Ye&&Ye.connect(ge)}}const H=new E,j=new E;function X(K,ce,ge){H.setFromMatrixPosition(ce.matrixWorld),j.setFromMatrixPosition(ge.matrixWorld);const xe=H.distanceTo(j),Ye=ce.projectionMatrix.elements,te=ge.projectionMatrix.elements,qe=Ye[14]/(Ye[10]-1),ot=Ye[14]/(Ye[10]+1),re=(Ye[9]+1)/Ye[5],L=(Ye[9]-1)/Ye[5],ve=(Ye[8]-1)/Ye[0],me=(te[8]+1)/te[0],de=qe*ve,_e=qe*me,ze=xe/(-ve+me),Re=ze*-ve;if(ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Re),K.translateZ(ze),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ye[10]===-1)K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const I=qe+ze,w=ot+ze,V=de-Re,Z=_e+(xe-Re),se=re*ot/w*I,ne=L*ot/w*I;K.projectionMatrix.makePerspective(V,Z,se,ne,I,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function he(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ce=K.near,ge=K.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),y.near=D.near=T.near=ce,y.far=D.far=T.far=ge,(S!==y.near||F!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,F=y.far);const xe=K.parent,Ye=y.cameras;he(y,xe);for(let te=0;te<Ye.length;te++)he(Ye[te],xe);Ye.length===2?X(y,T,D):y.projectionMatrix.copy(T.projectionMatrix),ye(K,y,xe)};function ye(K,ce,ge){ge===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Hr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let fe=null;function Ze(K,ce){if(l=ce.getViewerPose(u||a),m=ce,l!==null){const ge=l.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let xe=!1;ge.length!==y.cameras.length&&(y.cameras.length=0,xe=!0);for(let te=0;te<ge.length;te++){const qe=ge[te];let ot=null;if(f!==null)ot=f.getViewport(qe);else{const L=h.getViewSubImage(d,qe);ot=L.viewport,te===0&&(e.setRenderTargetTextures(x,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(x))}let re=z[te];re===void 0&&(re=new Xt,re.layers.enable(te),re.viewport=new bt,z[te]=re),re.matrix.fromArray(qe.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(qe.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ot.x,ot.y,ot.width,ot.height),te===0&&(y.matrix.copy(re.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),xe===!0&&y.cameras.push(re)}const Ye=i.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")){const te=h.getDepthInformation(ge[0]);te&&te.isValid&&te.texture&&v.init(e,te,i.renderState)}}for(let ge=0;ge<b.length;ge++){const xe=_[ge],Ye=b[ge];xe!==null&&Ye!==void 0&&Ye.update(xe,ce,u||a)}fe&&fe(K,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),m=null}const ct=new qp;ct.setAnimationLoop(Ze),this.setAnimationLoop=function(K){fe=K},this.dispose=function(){}}}const ws=new Yn,ly=new Xe;function uy(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Vp(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,b,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),l(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,b):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===un&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===un&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),b=x.envMap,_=x.envMapRotation;b&&(g.envMap.value=b,ws.copy(_),ws.x*=-1,ws.y*=-1,ws.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),g.envMapRotation.value.setFromMatrix4(ly.makeRotationFromEuler(ws)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hy(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,b){const _=b.program;n.uniformBlockBinding(x,_)}function u(x,b){let _=i[x.id];_===void 0&&(m(x),_=l(x),i[x.id]=_,x.addEventListener("dispose",g));const C=b.program;n.updateUBOMapping(x,C);const M=e.render.frame;s[x.id]!==M&&(d(x),s[x.id]=M)}function l(x){const b=h();x.__bindingPointIndex=b;const _=r.createBuffer(),C=x.__size,M=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,C,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,_),_}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const b=i[x.id],_=x.uniforms,C=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let M=0,T=_.length;M<T;M++){const D=Array.isArray(_[M])?_[M]:[_[M]];for(let z=0,y=D.length;z<y;z++){const S=D[z];if(f(S,M,z,C)===!0){const F=S.__offset,O=Array.isArray(S.value)?S.value:[S.value];let B=0;for(let q=0;q<O.length;q++){const H=O[q],j=v(H);typeof H=="number"||typeof H=="boolean"?(S.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,F+B,S.__data)):H.isMatrix3?(S.__data[0]=H.elements[0],S.__data[1]=H.elements[1],S.__data[2]=H.elements[2],S.__data[3]=0,S.__data[4]=H.elements[3],S.__data[5]=H.elements[4],S.__data[6]=H.elements[5],S.__data[7]=0,S.__data[8]=H.elements[6],S.__data[9]=H.elements[7],S.__data[10]=H.elements[8],S.__data[11]=0):(H.toArray(S.__data,B),B+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,S.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,b,_,C){const M=x.value,T=b+"_"+_;if(C[T]===void 0)return typeof M=="number"||typeof M=="boolean"?C[T]=M:C[T]=M.clone(),!0;{const D=C[T];if(typeof M=="number"||typeof M=="boolean"){if(D!==M)return C[T]=M,!0}else if(D.equals(M)===!1)return D.copy(M),!0}return!1}function m(x){const b=x.uniforms;let _=0;const C=16;for(let T=0,D=b.length;T<D;T++){const z=Array.isArray(b[T])?b[T]:[b[T]];for(let y=0,S=z.length;y<S;y++){const F=z[y],O=Array.isArray(F.value)?F.value:[F.value];for(let B=0,q=O.length;B<q;B++){const H=O[B],j=v(H),X=_%C,he=X%j.boundary,ye=X+he;_+=he,ye!==0&&C-ye<j.storage&&(_+=C-ye),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=j.storage}}}const M=_%C;return M>0&&(_+=C-M),x.__size=_,x.__cache={},this}function v(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function g(x){const b=x.target;b.removeEventListener("dispose",g);const _=a.indexOf(b.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:u,dispose:p}}class $p{constructor(e={}){const{canvas:t=Bp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),m=new Int32Array(4);let v=null,g=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=zi,this.toneMappingExposure=1;const b=this;let _=!1,C=0,M=0,T=null,D=-1,z=null;const y=new bt,S=new bt;let F=null;const O=new oe(0);let B=0,q=t.width,H=t.height,j=1,X=null,he=null;const ye=new bt(0,0,q,H),fe=new bt(0,0,q,H);let Ze=!1;const ct=new Ka;let K=!1,ce=!1;const ge=new Xe,xe=new Xe,Ye=new E,te=new bt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function re(){return T===null?j:1}let L=n;function ve(R,A){return t.getContext(R,A)}try{const R={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xc}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),L===null){const A="webgl2";if(L=ve(A,R),L===null)throw ve(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let me,de,_e,ze,Re,I,w,V,Z,se,ne,De,Me,Ce,tt,le,Ne,Ke,Qe,Pe,rt,Je,st,k;function Oe(){me=new vx(L),me.init(),Je=new Zp(L,me),de=new hx(L,me,e,Je),_e=new Z_(L),de.reverseDepthBuffer&&_e.buffers.depth.setReversed(!0),ze=new _x(L),Re=new k_,I=new iy(L,me,_e,Re,de,Je,ze),w=new fx(b),V=new gx(b),Z=new E0(L),st=new lx(L,Z),se=new bx(L,Z,ze,st),ne=new Mx(L,se,Z,ze),Qe=new yx(L,de,I),le=new dx(Re),De=new F_(b,w,V,me,de,st,le),Me=new uy(b,Re),Ce=new z_,tt=new q_(me),Ke=new cx(b,w,V,_e,ne,d,c),Ne=new K_(b,ne,de),k=new hy(L,ze,de,_e),Pe=new ux(L,me,ze),rt=new xx(L,me,ze),ze.programs=De.programs,b.capabilities=de,b.extensions=me,b.properties=Re,b.renderLists=Ce,b.shadowMap=Ne,b.state=_e,b.info=ze}Oe();const ee=new cy(b,L);this.xr=ee,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(q,H,!1))},this.getSize=function(R){return R.set(q,H)},this.setSize=function(R,A,P=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,H=A,t.width=Math.floor(R*j),t.height=Math.floor(A*j),P===!0&&(t.style.width=R+"px",t.style.height=A+"px"),this.setViewport(0,0,R,A)},this.getDrawingBufferSize=function(R){return R.set(q*j,H*j).floor()},this.setDrawingBufferSize=function(R,A,P){q=R,H=A,j=P,t.width=Math.floor(R*P),t.height=Math.floor(A*P),this.setViewport(0,0,R,A)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(ye)},this.setViewport=function(R,A,P,N){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,A,P,N),_e.viewport(y.copy(ye).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,A,P,N){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,A,P,N),_e.scissor(S.copy(fe).multiplyScalar(j).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(R){_e.setScissorTest(Ze=R)},this.setOpaqueSort=function(R){X=R},this.setTransparentSort=function(R){he=R},this.getClearColor=function(R){return R.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(R=!0,A=!0,P=!0){let N=0;if(R){let U=!1;if(T!==null){const Y=T.texture.format;U=Y===$c||Y===Qc||Y===qa}if(U){const Y=T.texture.type,W=Y===Ei||Y===Gi||Y===kr||Y===Ys||Y===Kc||Y===Jc,ue=Ke.getClearColor(),J=Ke.getClearAlpha(),Le=ue.r,we=ue.g,pe=ue.b;W?(f[0]=Le,f[1]=we,f[2]=pe,f[3]=J,L.clearBufferuiv(L.COLOR,0,f)):(m[0]=Le,m[1]=we,m[2]=pe,m[3]=J,L.clearBufferiv(L.COLOR,0,m))}else N|=L.COLOR_BUFFER_BIT}A&&(N|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),P&&(N|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Ce.dispose(),tt.dispose(),Re.dispose(),w.dispose(),V.dispose(),ne.dispose(),st.dispose(),k.dispose(),De.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Xi),ee.removeEventListener("sessionend",jt),In.stop()};function ae(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const R=ze.autoReset,A=Ne.enabled,P=Ne.autoUpdate,N=Ne.needsUpdate,U=Ne.type;Oe(),ze.autoReset=R,Ne.enabled=A,Ne.autoUpdate=P,Ne.needsUpdate=N,Ne.type=U}function Ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function nt(R){const A=R.target;A.removeEventListener("dispose",nt),lt(A)}function lt(R){Ut(R),Re.remove(R)}function Ut(R){const A=Re.get(R).programs;A!==void 0&&(A.forEach(function(P){De.releaseProgram(P)}),R.isShaderMaterial&&De.releaseShaderCache(R))}this.renderBufferDirect=function(R,A,P,N,U,Y){A===null&&(A=qe);const W=U.isMesh&&U.matrixWorld.determinant()<0,ue=vs(R,A,P,N,U);_e.setMaterial(N,W);let J=P.index,Le=1;if(N.wireframe===!0){if(J=se.getWireframeAttribute(P),J===void 0)return;Le=2}const we=P.drawRange,pe=P.attributes.position;let Fe=we.start*Le,je=(we.start+we.count)*Le;Y!==null&&(Fe=Math.max(Fe,Y.start*Le),je=Math.min(je,(Y.start+Y.count)*Le)),J!==null?(Fe=Math.max(Fe,0),je=Math.min(je,J.count)):pe!=null&&(Fe=Math.max(Fe,0),je=Math.min(je,pe.count));const ke=je-Fe;if(ke<0||ke===1/0)return;st.setup(U,N,ue,P,J);let We,Ge=Pe;if(J!==null&&(We=Z.get(J),Ge=rt,Ge.setIndex(We)),U.isMesh)N.wireframe===!0?(_e.setLineWidth(N.wireframeLinewidth*re()),Ge.setMode(L.LINES)):Ge.setMode(L.TRIANGLES);else if(U.isLine){let be=N.linewidth;be===void 0&&(be=1),_e.setLineWidth(be*re()),U.isLineSegments?Ge.setMode(L.LINES):U.isLineLoop?Ge.setMode(L.LINE_LOOP):Ge.setMode(L.LINE_STRIP)}else U.isPoints?Ge.setMode(L.POINTS):U.isSprite&&Ge.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ge.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))Ge.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const be=U._multiDrawStarts,mt=U._multiDrawCounts,$e=U._multiDrawCount,Gt=J?Z.get(J).bytesPerElement:1,Hn=Re.get(N).currentProgram.getUniforms();for(let Lt=0;Lt<$e;Lt++)Hn.setValue(L,"_gl_DrawID",Lt),Ge.render(be[Lt]/Gt,mt[Lt])}else if(U.isInstancedMesh)Ge.renderInstances(Fe,ke,U.count);else if(P.isInstancedBufferGeometry){const be=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,mt=Math.min(P.instanceCount,be);Ge.renderInstances(Fe,ke,mt)}else Ge.render(Fe,ke)};function Ve(R,A,P){R.transparent===!0&&R.side===Fn&&R.forceSinglePass===!1?(R.side=un,R.needsUpdate=!0,ri(R,A,P),R.side=Ai,R.needsUpdate=!0,ri(R,A,P),R.side=Fn):ri(R,A,P)}this.compile=function(R,A,P=null){P===null&&(P=R),g=tt.get(P),g.init(A),x.push(g),P.traverseVisible(function(U){U.isLight&&U.layers.test(A.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),R!==P&&R.traverseVisible(function(U){U.isLight&&U.layers.test(A.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights();const N=new Set;return R.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Y=U.material;if(Y)if(Array.isArray(Y))for(let W=0;W<Y.length;W++){const ue=Y[W];Ve(ue,P,U),N.add(ue)}else Ve(Y,P,U),N.add(Y)}),x.pop(),g=null,N},this.compileAsync=function(R,A,P=null){const N=this.compile(R,A,P);return new Promise(U=>{function Y(){if(N.forEach(function(W){Re.get(W).currentProgram.isReady()&&N.delete(W)}),N.size===0){U(R);return}setTimeout(Y,10)}me.get("KHR_parallel_shader_compile")!==null?Y():setTimeout(Y,10)})};let xt=null;function en(R){xt&&xt(R)}function Xi(){In.stop()}function jt(){In.start()}const In=new qp;In.setAnimationLoop(en),typeof self!="undefined"&&In.setContext(self),this.setAnimationLoop=function(R){xt=R,ee.setAnimationLoop(R),R===null?In.stop():In.start()},ee.addEventListener("sessionstart",Xi),ee.addEventListener("sessionend",jt),this.render=function(R,A){if(A!==void 0&&A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(A),A=ee.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,A,T),g=tt.get(R,x.length),g.init(A),x.push(g),xe.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),ct.setFromProjectionMatrix(xe),ce=this.localClippingEnabled,K=le.init(this.clippingPlanes,ce),v=Ce.get(R,p.length),v.init(),p.push(v),ee.enabled===!0&&ee.isPresenting===!0){const Y=b.xr.getDepthSensingMesh();Y!==null&&ii(Y,A,-1/0,b.sortObjects)}ii(R,A,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(X,he),ot=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ot&&Ke.addToRenderList(v,R),this.info.render.frame++,K===!0&&le.beginShadows();const P=g.state.shadowsArray;Ne.render(P,R,A),K===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=v.opaque,U=v.transmissive;if(g.setupLights(),A.isArrayCamera){const Y=A.cameras;if(U.length>0)for(let W=0,ue=Y.length;W<ue;W++){const J=Y[W];si(N,U,R,J)}ot&&Ke.render(R);for(let W=0,ue=Y.length;W<ue;W++){const J=Y[W];yn(v,R,J,J.viewport)}}else U.length>0&&si(N,U,R,A),ot&&Ke.render(R),yn(v,R,A);T!==null&&(I.updateMultisampleRenderTarget(T),I.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(b,R,A),st.resetDefaultState(),D=-1,z=null,x.pop(),x.length>0?(g=x[x.length-1],K===!0&&le.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ii(R,A,P,N){if(R.visible===!1)return;if(R.layers.test(A.layers)){if(R.isGroup)P=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(A);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ct.intersectsSprite(R)){N&&te.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xe);const W=ne.update(R),ue=R.material;ue.visible&&v.push(R,W,ue,P,te.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ct.intersectsObject(R))){const W=ne.update(R),ue=R.material;if(N&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),te.copy(R.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),te.copy(W.boundingSphere.center)),te.applyMatrix4(R.matrixWorld).applyMatrix4(xe)),Array.isArray(ue)){const J=W.groups;for(let Le=0,we=J.length;Le<we;Le++){const pe=J[Le],Fe=ue[pe.materialIndex];Fe&&Fe.visible&&v.push(R,W,Fe,P,te.z,pe)}}else ue.visible&&v.push(R,W,ue,P,te.z,null)}}const Y=R.children;for(let W=0,ue=Y.length;W<ue;W++)ii(Y[W],A,P,N)}function yn(R,A,P,N){const U=R.opaque,Y=R.transmissive,W=R.transparent;g.setupLightsView(P),K===!0&&le.setGlobalState(b.clippingPlanes,P),N&&_e.viewport(y.copy(N)),U.length>0&&Mn(U,A,P),Y.length>0&&Mn(Y,A,P),W.length>0&&Mn(W,A,P),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function si(R,A,P,N){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[N.id]===void 0&&(g.state.transmissionRenderTarget[N.id]=new Jt(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Bn:Ei,minFilter:qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Y=g.state.transmissionRenderTarget[N.id],W=N.viewport||y;Y.setSize(W.z,W.w);const ue=b.getRenderTarget();b.setRenderTarget(Y),b.getClearColor(O),B=b.getClearAlpha(),B<1&&b.setClearColor(16777215,.5),b.clear(),ot&&Ke.render(P);const J=b.toneMapping;b.toneMapping=zi;const Le=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),g.setupLightsView(N),K===!0&&le.setGlobalState(b.clippingPlanes,N),Mn(R,P,N),I.updateMultisampleRenderTarget(Y),I.updateRenderTargetMipmap(Y),me.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let pe=0,Fe=A.length;pe<Fe;pe++){const je=A[pe],ke=je.object,We=je.geometry,Ge=je.material,be=je.group;if(Ge.side===Fn&&ke.layers.test(N.layers)){const mt=Ge.side;Ge.side=un,Ge.needsUpdate=!0,gi(ke,P,N,We,Ge,be),Ge.side=mt,Ge.needsUpdate=!0,we=!0}}we===!0&&(I.updateMultisampleRenderTarget(Y),I.updateRenderTargetMipmap(Y))}b.setRenderTarget(ue),b.setClearColor(O,B),Le!==void 0&&(N.viewport=Le),b.toneMapping=J}function Mn(R,A,P){const N=A.isScene===!0?A.overrideMaterial:null;for(let U=0,Y=R.length;U<Y;U++){const W=R[U],ue=W.object,J=W.geometry,Le=N===null?W.material:N,we=W.group;ue.layers.test(P.layers)&&gi(ue,A,P,J,Le,we)}}function gi(R,A,P,N,U,Y){R.onBeforeRender(b,A,P,N,U,Y),R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),U.onBeforeRender(b,A,P,N,R,Y),U.transparent===!0&&U.side===Fn&&U.forceSinglePass===!1?(U.side=un,U.needsUpdate=!0,b.renderBufferDirect(P,A,N,U,R,Y),U.side=Ai,U.needsUpdate=!0,b.renderBufferDirect(P,A,N,U,R,Y),U.side=Fn):b.renderBufferDirect(P,A,N,U,R,Y),R.onAfterRender(b,A,P,N,U,Y)}function ri(R,A,P){A.isScene!==!0&&(A=qe);const N=Re.get(R),U=g.state.lights,Y=g.state.shadowsArray,W=U.state.version,ue=De.getParameters(R,U.state,Y,A,P),J=De.getProgramCacheKey(ue);let Le=N.programs;N.environment=R.isMeshStandardMaterial?A.environment:null,N.fog=A.fog,N.envMap=(R.isMeshStandardMaterial?V:w).get(R.envMap||N.environment),N.envMapRotation=N.environment!==null&&R.envMap===null?A.environmentRotation:R.envMapRotation,Le===void 0&&(R.addEventListener("dispose",nt),Le=new Map,N.programs=Le);let we=Le.get(J);if(we!==void 0){if(N.currentProgram===we&&N.lightsStateVersion===W)return zn(R,ue),we}else ue.uniforms=De.getUniforms(R),R.onBeforeCompile(ue,b),we=De.acquireProgram(ue,J),Le.set(J,we),N.uniforms=ue.uniforms;const pe=N.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(pe.clippingPlanes=le.uniform),zn(R,ue),N.needsLights=qi(R),N.lightsStateVersion=W,N.needsLights&&(pe.ambientLightColor.value=U.state.ambient,pe.lightProbe.value=U.state.probe,pe.directionalLights.value=U.state.directional,pe.directionalLightShadows.value=U.state.directionalShadow,pe.spotLights.value=U.state.spot,pe.spotLightShadows.value=U.state.spotShadow,pe.rectAreaLights.value=U.state.rectArea,pe.ltc_1.value=U.state.rectAreaLTC1,pe.ltc_2.value=U.state.rectAreaLTC2,pe.pointLights.value=U.state.point,pe.pointLightShadows.value=U.state.pointShadow,pe.hemisphereLights.value=U.state.hemi,pe.directionalShadowMap.value=U.state.directionalShadowMap,pe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,pe.spotShadowMap.value=U.state.spotShadowMap,pe.spotLightMatrix.value=U.state.spotLightMatrix,pe.spotLightMap.value=U.state.spotLightMap,pe.pointShadowMap.value=U.state.pointShadowMap,pe.pointShadowMatrix.value=U.state.pointShadowMatrix),N.currentProgram=we,N.uniformsList=null,we}function Sn(R){if(R.uniformsList===null){const A=R.currentProgram.getUniforms();R.uniformsList=ec.seqWithValue(A.seq,R.uniforms)}return R.uniformsList}function zn(R,A){const P=Re.get(R);P.outputColorSpace=A.outputColorSpace,P.batching=A.batching,P.batchingColor=A.batchingColor,P.instancing=A.instancing,P.instancingColor=A.instancingColor,P.instancingMorph=A.instancingMorph,P.skinning=A.skinning,P.morphTargets=A.morphTargets,P.morphNormals=A.morphNormals,P.morphColors=A.morphColors,P.morphTargetsCount=A.morphTargetsCount,P.numClippingPlanes=A.numClippingPlanes,P.numIntersection=A.numClipIntersection,P.vertexAlphas=A.vertexAlphas,P.vertexTangents=A.vertexTangents,P.toneMapping=A.toneMapping}function vs(R,A,P,N,U){A.isScene!==!0&&(A=qe),I.resetTextureUnits();const Y=A.fog,W=N.isMeshStandardMaterial?A.environment:null,ue=T===null?b.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:qt,J=(N.isMeshStandardMaterial?V:w).get(N.envMap||W),Le=N.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,we=!!P.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),pe=!!P.morphAttributes.position,Fe=!!P.morphAttributes.normal,je=!!P.morphAttributes.color;let ke=zi;N.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ke=b.toneMapping);const We=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Ge=We!==void 0?We.length:0,be=Re.get(N),mt=g.state.lights;if(K===!0&&(ce===!0||R!==z)){const rn=R===z&&N.id===D;le.setState(N,R,rn)}let $e=!1;N.version===be.__version?(be.needsLights&&be.lightsStateVersion!==mt.state.version||be.outputColorSpace!==ue||U.isBatchedMesh&&be.batching===!1||!U.isBatchedMesh&&be.batching===!0||U.isBatchedMesh&&be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&be.instancing===!1||!U.isInstancedMesh&&be.instancing===!0||U.isSkinnedMesh&&be.skinning===!1||!U.isSkinnedMesh&&be.skinning===!0||U.isInstancedMesh&&be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&be.instancingMorph===!1&&U.morphTexture!==null||be.envMap!==J||N.fog===!0&&be.fog!==Y||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==le.numPlanes||be.numIntersection!==le.numIntersection)||be.vertexAlphas!==Le||be.vertexTangents!==we||be.morphTargets!==pe||be.morphNormals!==Fe||be.morphColors!==je||be.toneMapping!==ke||be.morphTargetsCount!==Ge)&&($e=!0):($e=!0,be.__version=N.version);let Gt=be.currentProgram;$e===!0&&(Gt=ri(N,A,U));let Hn=!1,Lt=!1,ai=!1;const Tt=Gt.getUniforms(),Ln=be.uniforms;if(_e.useProgram(Gt.program)&&(Hn=!0,Lt=!0,ai=!0),N.id!==D&&(D=N.id,Lt=!0),Hn||z!==R){de.reverseDepthBuffer?(ge.copy(R.projectionMatrix),Zg(ge),Qg(ge),Tt.setValue(L,"projectionMatrix",ge)):Tt.setValue(L,"projectionMatrix",R.projectionMatrix),Tt.setValue(L,"viewMatrix",R.matrixWorldInverse);const rn=Tt.map.cameraPosition;rn!==void 0&&rn.setValue(L,Ye.setFromMatrixPosition(R.matrixWorld)),de.logarithmicDepthBuffer&&Tt.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Tt.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),z!==R&&(z=R,Lt=!0,ai=!0)}if(U.isSkinnedMesh){Tt.setOptional(L,U,"bindMatrix"),Tt.setOptional(L,U,"bindMatrixInverse");const rn=U.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Tt.setValue(L,"boneTexture",rn.boneTexture,I))}U.isBatchedMesh&&(Tt.setOptional(L,U,"batchingTexture"),Tt.setValue(L,"batchingTexture",U._matricesTexture,I),Tt.setOptional(L,U,"batchingIdTexture"),Tt.setValue(L,"batchingIdTexture",U._indirectTexture,I),Tt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&Tt.setValue(L,"batchingColorTexture",U._colorsTexture,I));const ji=P.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&Qe.update(U,P,Gt),(Lt||be.receiveShadow!==U.receiveShadow)&&(be.receiveShadow=U.receiveShadow,Tt.setValue(L,"receiveShadow",U.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Ln.envMap.value=J,Ln.flipEnvMap.value=J.isCubeTexture&&J.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&A.environment!==null&&(Ln.envMapIntensity.value=A.environmentIntensity),Lt&&(Tt.setValue(L,"toneMappingExposure",b.toneMappingExposure),be.needsLights&&vi(Ln,ai),Y&&N.fog===!0&&Me.refreshFogUniforms(Ln,Y),Me.refreshMaterialUniforms(Ln,N,j,H,g.state.transmissionRenderTarget[R.id]),ec.upload(L,Sn(be),Ln,I)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ec.upload(L,Sn(be),Ln,I),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Tt.setValue(L,"center",U.center),Tt.setValue(L,"modelViewMatrix",U.modelViewMatrix),Tt.setValue(L,"normalMatrix",U.normalMatrix),Tt.setValue(L,"modelMatrix",U.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const rn=N.uniformsGroups;for(let It=0,Yi=rn.length;It<Yi;It++){const Ki=rn[It];k.update(Ki,Gt),k.bind(Ki,Gt)}}return Gt}function vi(R,A){R.ambientLightColor.needsUpdate=A,R.lightProbe.needsUpdate=A,R.directionalLights.needsUpdate=A,R.directionalLightShadows.needsUpdate=A,R.pointLights.needsUpdate=A,R.pointLightShadows.needsUpdate=A,R.spotLights.needsUpdate=A,R.spotLightShadows.needsUpdate=A,R.rectAreaLights.needsUpdate=A,R.hemisphereLights.needsUpdate=A}function qi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,A,P){Re.get(R.texture).__webglTexture=A,Re.get(R.depthTexture).__webglTexture=P;const N=Re.get(R);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=P===void 0,N.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,A){const P=Re.get(R);P.__webglFramebuffer=A,P.__useDefaultFramebuffer=A===void 0},this.setRenderTarget=function(R,A=0,P=0){T=R,C=A,M=P;let N=!0,U=null,Y=!1,W=!1;if(R){const J=Re.get(R);if(J.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(L.FRAMEBUFFER,null),N=!1;else if(J.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(J.__hasExternalTextures)I.rebindTextures(R,Re.get(R.texture).__webglTexture,Re.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const pe=R.depthTexture;if(J.__boundDepthTexture!==pe){if(pe!==null&&Re.has(pe)&&(R.width!==pe.image.width||R.height!==pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const Le=R.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(W=!0);const we=Re.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(we[A])?U=we[A][P]:U=we[A],Y=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?U=Re.get(R).__webglMultisampledFramebuffer:Array.isArray(we)?U=we[P]:U=we,y.copy(R.viewport),S.copy(R.scissor),F=R.scissorTest}else y.copy(ye).multiplyScalar(j).floor(),S.copy(fe).multiplyScalar(j).floor(),F=Ze;if(_e.bindFramebuffer(L.FRAMEBUFFER,U)&&N&&_e.drawBuffers(R,U),_e.viewport(y),_e.scissor(S),_e.setScissorTest(F),Y){const J=Re.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+A,J.__webglTexture,P)}else if(W){const J=Re.get(R.texture),Le=A||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,J.__webglTexture,P||0,Le)}D=-1},this.readRenderTargetPixels=function(R,A,P,N,U,Y,W){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=Re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&W!==void 0&&(ue=ue[W]),ue){_e.bindFramebuffer(L.FRAMEBUFFER,ue);try{const J=R.texture,Le=J.format,we=J.type;if(!de.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=R.width-N&&P>=0&&P<=R.height-U&&L.readPixels(A,P,N,U,Je.convert(Le),Je.convert(we),Y)}finally{const J=T!==null?Re.get(T).__webglFramebuffer:null;_e.bindFramebuffer(L.FRAMEBUFFER,J)}}},this.readRenderTargetPixelsAsync=async function(R,A,P,N,U,Y,W){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=Re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&W!==void 0&&(ue=ue[W]),ue){const J=R.texture,Le=J.format,we=J.type;if(!de.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(A>=0&&A<=R.width-N&&P>=0&&P<=R.height-U){_e.bindFramebuffer(L.FRAMEBUFFER,ue);const pe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,pe),L.bufferData(L.PIXEL_PACK_BUFFER,Y.byteLength,L.STREAM_READ),L.readPixels(A,P,N,U,Je.convert(Le),Je.convert(we),0);const Fe=T!==null?Re.get(T).__webglFramebuffer:null;_e.bindFramebuffer(L.FRAMEBUFFER,Fe);const je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Jg(L,je,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,pe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Y),L.deleteBuffer(pe),L.deleteSync(je),Y}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,A=null,P=0){R.isTexture!==!0&&($o("WebGLRenderer: copyFramebufferToTexture function signature has changed."),A=arguments[0]||null,R=arguments[1]);const N=Math.pow(2,-P),U=Math.floor(R.image.width*N),Y=Math.floor(R.image.height*N),W=A!==null?A.x:0,ue=A!==null?A.y:0;I.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,P,0,0,W,ue,U,Y),_e.unbindTexture()},this.copyTextureToTexture=function(R,A,P=null,N=null,U=0){R.isTexture!==!0&&($o("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,R=arguments[1],A=arguments[2],U=arguments[3]||0,P=null);let Y,W,ue,J,Le,we;P!==null?(Y=P.max.x-P.min.x,W=P.max.y-P.min.y,ue=P.min.x,J=P.min.y):(Y=R.image.width,W=R.image.height,ue=0,J=0),N!==null?(Le=N.x,we=N.y):(Le=0,we=0);const pe=Je.convert(A.format),Fe=Je.convert(A.type);I.setTexture2D(A,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,A.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,A.unpackAlignment);const je=L.getParameter(L.UNPACK_ROW_LENGTH),ke=L.getParameter(L.UNPACK_IMAGE_HEIGHT),We=L.getParameter(L.UNPACK_SKIP_PIXELS),Ge=L.getParameter(L.UNPACK_SKIP_ROWS),be=L.getParameter(L.UNPACK_SKIP_IMAGES),mt=R.isCompressedTexture?R.mipmaps[U]:R.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ue),L.pixelStorei(L.UNPACK_SKIP_ROWS,J),R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Le,we,Y,W,pe,Fe,mt.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Le,we,mt.width,mt.height,pe,mt.data):L.texSubImage2D(L.TEXTURE_2D,U,Le,we,Y,W,pe,Fe,mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,je),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ke),L.pixelStorei(L.UNPACK_SKIP_PIXELS,We),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ge),L.pixelStorei(L.UNPACK_SKIP_IMAGES,be),U===0&&A.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(R,A,P=null,N=null,U=0){R.isTexture!==!0&&($o("WebGLRenderer: copyTextureToTexture3D function signature has changed."),P=arguments[0]||null,N=arguments[1]||null,R=arguments[2],A=arguments[3],U=arguments[4]||0);let Y,W,ue,J,Le,we,pe,Fe,je;const ke=R.isCompressedTexture?R.mipmaps[U]:R.image;P!==null?(Y=P.max.x-P.min.x,W=P.max.y-P.min.y,ue=P.max.z-P.min.z,J=P.min.x,Le=P.min.y,we=P.min.z):(Y=ke.width,W=ke.height,ue=ke.depth,J=0,Le=0,we=0),N!==null?(pe=N.x,Fe=N.y,je=N.z):(pe=0,Fe=0,je=0);const We=Je.convert(A.format),Ge=Je.convert(A.type);let be;if(A.isData3DTexture)I.setTexture3D(A,0),be=L.TEXTURE_3D;else if(A.isDataArrayTexture||A.isCompressedArrayTexture)I.setTexture2DArray(A,0),be=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,A.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,A.unpackAlignment);const mt=L.getParameter(L.UNPACK_ROW_LENGTH),$e=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Gt=L.getParameter(L.UNPACK_SKIP_PIXELS),Hn=L.getParameter(L.UNPACK_SKIP_ROWS),Lt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ke.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ke.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,J),L.pixelStorei(L.UNPACK_SKIP_ROWS,Le),L.pixelStorei(L.UNPACK_SKIP_IMAGES,we),R.isDataTexture||R.isData3DTexture?L.texSubImage3D(be,U,pe,Fe,je,Y,W,ue,We,Ge,ke.data):A.isCompressedArrayTexture?L.compressedTexSubImage3D(be,U,pe,Fe,je,Y,W,ue,We,ke.data):L.texSubImage3D(be,U,pe,Fe,je,Y,W,ue,We,Ge,ke),L.pixelStorei(L.UNPACK_ROW_LENGTH,mt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$e),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Gt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Hn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Lt),U===0&&A.generateMipmaps&&L.generateMipmap(be),_e.unbindTexture()},this.initRenderTarget=function(R){Re.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),_e.unbindTexture()},this.resetState=function(){C=0,M=0,T=null,_e.reset(),st.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tl?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===ja?"display-p3":"srgb"}}class al{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new oe(e),this.density=t}clone(){return new al(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ol{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new oe(e),this.near=t,this.far=n}clone(){return new ol(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Fa extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ja{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Da,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new E;class us{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new it(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new us(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class cl extends Zt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Mr;const ia=new E,Sr=new E,wr=new E,Ar=new $,sa=new $,em=new Xe,Ao=new E,ra=new E,To=new E,Vd=new $,ru=new $,Wd=new $;class mh extends _t{constructor(e=new cl){if(super(),this.isSprite=!0,this.type="Sprite",Mr===void 0){Mr=new et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ja(t,5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute("position",new us(n,3,0,!1)),Mr.setAttribute("uv",new us(n,2,3,!1))}this.geometry=Mr,this.material=e,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),em.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-wr.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Eo(Ao.set(-.5,-.5,0),wr,a,Sr,i,s),Eo(ra.set(.5,-.5,0),wr,a,Sr,i,s),Eo(To.set(.5,.5,0),wr,a,Sr,i,s),Vd.set(0,0),ru.set(1,0),Wd.set(1,1);let o=e.ray.intersectTriangle(Ao,ra,To,!1,ia);if(o===null&&(Eo(ra.set(-.5,.5,0),wr,a,Sr,i,s),ru.set(0,1),o=e.ray.intersectTriangle(Ao,To,ra,!1,ia),o===null))return;const c=e.ray.origin.distanceTo(ia);c<e.near||c>e.far||t.push({distance:c,point:ia.clone(),uv:Rn.getInterpolation(ia,Ao,ra,To,Vd,ru,Wd,new $),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Eo(r,e,t,n,i,s){Ar.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(sa.x=s*Ar.x-i*Ar.y,sa.y=i*Ar.x+s*Ar.y):sa.copy(Ar),r.copy(e),r.x+=sa.x,r.y+=sa.y,r.applyMatrix4(em)}const Ro=new E,Xd=new E;class tm extends _t{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Ro.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Ro);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Ro.setFromMatrixPosition(e.matrixWorld),Xd.setFromMatrixPosition(this.matrixWorld);const n=Ro.distanceTo(Xd)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const qd=new E,jd=new bt,Yd=new bt,dy=new E,Kd=new Xe,Co=new E,au=new fn,Jd=new Xe,ou=new qr;class gh extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cu,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Co),this.boundingBox.expandByPoint(Co)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Co),this.boundingSphere.expandByPoint(Co)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),au.copy(this.boundingSphere),au.applyMatrix4(i),e.ray.intersectsSphere(au)!==!1&&(Jd.copy(i).invert(),ou.copy(e.ray).applyMatrix4(Jd),!(this.boundingBox!==null&&ou.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ou)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;jd.fromBufferAttribute(i.attributes.skinIndex,e),Yd.fromBufferAttribute(i.attributes.skinWeight,e),qd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Yd.getComponent(s);if(a!==0){const o=jd.getComponent(s);Kd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(dy.copy(qd).applyMatrix4(Kd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ll extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class di extends Nt{constructor(e=null,t=1,n=1,i,s,a,o,c,u=Kt,l=Kt,h,d){super(null,a,o,c,u,l,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zd=new Xe,fy=new Xe;class Za{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:fy;Zd.multiplyMatrices(o,t[s]),Zd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Za(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new di(t,e,e,xn,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new ll),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Js extends it{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Tr=new Xe,Qd=new Xe,Po=[],$d=new dn,py=new Xe,aa=new wt,oa=new fn;class vh extends wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Js(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,py)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),$d.copy(e.boundingBox).applyMatrix4(Tr),this.boundingBox.union($d)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),oa.copy(e.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(n),e.ray.intersectsSphere(oa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Tr),Qd.multiplyMatrices(n,Tr),aa.matrixWorld=Qd,aa.raycast(e,Po);for(let a=0,o=Po.length;a<o;a++){const c=Po[a];c.instanceId=s,c.object=this,t.push(c)}Po.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new di(new Float32Array(i*this.count),i,this.count,Zc,kn));const s=this.morphTexture.source.data.data;let a=0;for(let u=0;u<n.length;u++)a+=n[u];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function my(r,e){return r.z-e.z}function gy(r,e){return e.z-r.z}class vy{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const i=this.pool,s=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const a=i[this.index];s.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}}const is=new Xe,cu=new Xe,by=new Xe,xy=new oe(1,1,1),ef=new Xe,lu=new Ka,Io=new dn,As=new fn,ca=new E,tf=new E,_y=new E,uu=new vy,vn=new wt,Lo=[];function yy(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,r.getComponent(s,a))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class nm extends wt{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,i){super(new et,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new di(t,e,e,xn,kn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new di(t,e,e,qa,Gi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new di(t,e,e,xn,kn);n.colorSpace=St.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:o,itemSize:c,normalized:u}=a,l=new o.constructor(n*c),h=new it(l,c,u);t.setAttribute(s,h)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new it(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,is),this.getBoundingBoxAt(s,Io).applyMatrix4(is),e.union(Io)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,is),this.getBoundingSphereAt(s,As).applyMatrix4(is),e.union(As)}}addInstance(e){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(i=this._availableInstanceIds.pop(),this._drawInfo[i]=n):(i=this._drawInfo.length,this._drawInfo.push(n));const s=this._matricesTexture,a=s.image.data;by.toArray(a,i*16),s.needsUpdate=!0;const o=this._colorsTexture;return o&&(xy.toArray(o.image.data,i*4),o.needsUpdate=!0),i}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const a=this._reservedRanges,o=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(s=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const u=e.getIndex(),l=u!==null;if(l&&(n===-1?i.indexCount=u.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const h=this._geometryCount;return this._geometryCount++,a.push(i),o.push({start:l?i.indexStart:i.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new dn,sphereInitialized:!1,sphere:new fn}),this.setGeometryAt(h,e),h}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(i&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=o.vertexStart,u=o.vertexCount;for(const f in n.attributes){const m=t.getAttribute(f),v=n.getAttribute(f);yy(m,v,c);const g=m.itemSize;for(let p=m.count,x=u;p<x;p++){const b=c+p;for(let _=0;_<g;_++)v.setComponent(b,_,0)}v.needsUpdate=!0,v.addUpdateRange(c*g,u*g)}if(i){const f=o.indexStart;for(let m=0;m<a.count;m++)s.setX(f+m,c+a.getX(m));for(let m=a.count,v=o.indexCount;m<v;m++)s.setX(f+m,c);s.needsUpdate=!0,s.addUpdateRange(f,o.indexCount)}const l=this._bounds[e];t.boundingBox!==null?(l.box.copy(t.boundingBox),l.boxInitialized=!0):l.boxInitialized=!1,t.boundingSphere!==null?(l.sphere.copy(t.boundingSphere),l.sphereInitialized=!0):l.sphereInitialized=!1;const h=this._drawRanges[e],d=t.getAttribute("position");return h.count=i?a.count:d.count,this._visibilityChanged=!0,e}deleteInstance(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.box,s=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const a=s.index,o=s.attributes.position,c=this._drawRanges[e];for(let u=c.start,l=c.start+c.count;u<l;u++){let h=u;a&&(h=a.getX(h)),i.expandByPoint(ca.fromBufferAttribute(o,h))}n.boxInitialized=!0}return t.copy(i),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.sphere,s=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(e,Io),Io.getCenter(i.center);const a=s.index,o=s.attributes.position,c=this._drawRanges[e];let u=0;for(let l=c.start,h=c.start+c.count;l<h;l++){let d=l;a&&(d=a.getX(d)),ca.fromBufferAttribute(o,d),u=Math.max(u,i.center.distanceToSquared(ca))}i.radius=Math.sqrt(u),n.sphereInitialized=!0}return t.copy(i),t}setMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,s=this._drawInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._drawInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||t<0||t>=this._geometryCount?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._drawRanges[e];return t.start=n.start,t.count=n.count,t}raycast(e,t){const n=this._drawInfo,i=this._drawRanges,s=this.matrixWorld,a=this.geometry;vn.material=this.material,vn.geometry.index=a.index,vn.geometry.attributes=a.attributes,vn.geometry.boundingBox===null&&(vn.geometry.boundingBox=new dn),vn.geometry.boundingSphere===null&&(vn.geometry.boundingSphere=new fn);for(let o=0,c=n.length;o<c;o++){if(!n[o].visible||!n[o].active)continue;const u=n[o].geometryIndex,l=i[u];vn.geometry.setDrawRange(l.start,l.count),this.getMatrixAt(o,vn.matrixWorld).premultiply(s),this.getBoundingBoxAt(u,vn.geometry.boundingBox),this.getBoundingSphereAt(u,vn.geometry.boundingSphere),vn.raycast(e,Lo);for(let h=0,d=Lo.length;h<d;h++){const f=Lo[h];f.object=this,f.batchId=o,t.push(f)}Lo.length=0}vn.material=null,vn.geometry.index=null,vn.geometry.attributes={},vn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,c=this._drawInfo,u=this._multiDrawStarts,l=this._multiDrawCounts,h=this._drawRanges,d=this.perObjectFrustumCulled,f=this._indirectTexture,m=f.image.data;d&&(ef.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),lu.setFromProjectionMatrix(ef,e.coordinateSystem));let v=0;if(this.sortObjects){cu.copy(this.matrixWorld).invert(),ca.setFromMatrixPosition(n.matrixWorld).applyMatrix4(cu),tf.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(cu);for(let x=0,b=c.length;x<b;x++)if(c[x].visible&&c[x].active){const _=c[x].geometryIndex;this.getMatrixAt(x,is),this.getBoundingSphereAt(_,As).applyMatrix4(is);let C=!1;if(d&&(C=!lu.intersectsSphere(As)),!C){const M=_y.subVectors(As.center,ca).dot(tf);uu.push(h[_],M,x)}}const g=uu.list,p=this.customSort;p===null?g.sort(s.transparent?gy:my):p.call(this,g,n);for(let x=0,b=g.length;x<b;x++){const _=g[x];u[v]=_.start*o,l[v]=_.count,m[v]=_.index,v++}uu.reset()}else for(let g=0,p=c.length;g<p;g++)if(c[g].visible&&c[g].active){const x=c[g].geometryIndex;let b=!1;if(d&&(this.getMatrixAt(g,is),this.getBoundingSphereAt(x,As).applyMatrix4(is),b=!lu.intersectsSphere(As)),!b){const _=h[x];u[v]=_.start*o,l[v]=_.count,m[v]=g,v++}}f.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,a){this.onBeforeRender(e,null,i,s,a)}}class _n extends Zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zc=new E,Hc=new E,nf=new Xe,la=new qr,Do=new fn,hu=new E,sf=new E;class Wi extends _t{constructor(e=new et,t=new _n){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)zc.fromBufferAttribute(t,i-1),Hc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=zc.distanceTo(Hc);e.setAttribute("lineDistance",new Be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(i),Do.radius+=s,e.ray.intersectsSphere(Do)===!1)return;nf.copy(i).invert(),la.copy(e.ray).applyMatrix4(nf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=u){const p=l.getX(v),x=l.getX(v+1),b=No(this,e,la,c,p,x);b&&t.push(b)}if(this.isLineLoop){const v=l.getX(m-1),g=l.getX(f),p=No(this,e,la,c,v,g);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=u){const p=No(this,e,la,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=No(this,e,la,c,m-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function No(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(zc.fromBufferAttribute(a,i),Hc.fromBufferAttribute(a,s),t.distanceSqToSegment(zc,Hc,hu,sf)>n)return;hu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(hu);if(!(c<e.near||c>e.far))return{distance:c,point:sf.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const rf=new E,af=new E;class ti extends Wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)rf.fromBufferAttribute(t,i),af.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rf.distanceTo(af);e.setAttribute("lineDistance",new Be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bh extends Wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ul extends Zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const of=new Xe,Uu=new qr,Uo=new fn,Oo=new E;class Ri extends _t{constructor(e=new et,t=new ul){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(i),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;of.copy(i).invert(),Uu.copy(e.ray).applyMatrix4(of);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,v=f;m<v;m++){const g=u.getX(m);Oo.fromBufferAttribute(h,g),cf(Oo,g,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,v=f;m<v;m++)Oo.fromBufferAttribute(h,m),cf(Oo,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function cf(r,e,t,n,i,s,a){const o=Uu.distanceSqToPoint(r);if(o<t){const c=new E;Uu.closestPointToPoint(r,c),c.applyMatrix4(n);const u=i.ray.origin.distanceTo(c);if(u<i.near||u>i.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class My extends Nt{constructor(e,t,n,i,s,a,o,c,u){super(e,t,n,i,s,a,o,c,u),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Rt,this.magFilter=s!==void 0?s:Rt,this.generateMipmaps=!1;const l=this;function h(){l.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Sy extends Nt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Kt,this.minFilter=Kt,this.generateMipmaps=!1,this.needsUpdate=!0}}class hl extends Nt{constructor(e,t,n,i,s,a,o,c,u,l,h,d){super(null,a,o,c,u,l,i,s,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class wy extends hl{constructor(e,t,n,i,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Xn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ay extends hl{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Hi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class xh extends Nt{constructor(e,t,n,i,s,a,o,c,u){super(e,t,n,i,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,u;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),u=n[i]-a,u<0)o=i+1;else if(u>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);const l=n[i],d=n[i+1]-l,f=(a-l)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new $:new E);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,i=[],s=[],a=[],o=new E,c=new Xe;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new E)}s[0]=new E,a[0]=new E;let u=Number.MAX_VALUE;const l=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);l<=u&&(u=l,n.set(1,0,0)),h<=u&&(u=h,n.set(0,1,0)),d<=u&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ht(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Ht(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class dl extends pi{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new $){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=u-this.aY;c=d*l-f*h+this.aX,u=d*h+f*l+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class im extends dl{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function _h(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,u){i(a,o,u*(o-s),u*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,u,l,h){let d=(a-s)/u-(o-s)/(u+l)+(o-a)/l,f=(o-a)/l-(c-a)/(l+h)+(c-o)/h;d*=l,f*=l,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Fo=new E,du=new _h,fu=new _h,pu=new _h;class sm extends pi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let u,l;this.closed||o>0?u=i[(o-1)%s]:(Fo.subVectors(i[0],i[1]).add(i[0]),u=Fo);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?l=i[(o+2)%s]:(Fo.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=Fo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(l),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),du.initNonuniformCatmullRom(u.x,h.x,d.x,l.x,m,v,g),fu.initNonuniformCatmullRom(u.y,h.y,d.y,l.y,m,v,g),pu.initNonuniformCatmullRom(u.z,h.z,d.z,l.z,m,v,g)}else this.curveType==="catmullrom"&&(du.initCatmullRom(u.x,h.x,d.x,l.x,this.tension),fu.initCatmullRom(u.y,h.y,d.y,l.y,this.tension),pu.initCatmullRom(u.z,h.z,d.z,l.z,this.tension));return n.set(du.calc(c),fu.calc(c),pu.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lf(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,c=r*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*r+t}function Ty(r,e){const t=1-r;return t*t*e}function Ey(r,e){return 2*(1-r)*r*e}function Ry(r,e){return r*r*e}function Aa(r,e,t,n){return Ty(r,e)+Ey(r,t)+Ry(r,n)}function Cy(r,e){const t=1-r;return t*t*t*e}function Py(r,e){const t=1-r;return 3*t*t*r*e}function Iy(r,e){return 3*(1-r)*r*r*e}function Ly(r,e){return r*r*r*e}function Ta(r,e,t,n,i){return Cy(r,e)+Py(r,t)+Iy(r,n)+Ly(r,i)}class yh extends pi{constructor(e=new $,t=new $,n=new $,i=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new $){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ta(e,i.x,s.x,a.x,o.x),Ta(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rm extends pi{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ta(e,i.x,s.x,a.x,o.x),Ta(e,i.y,s.y,a.y,o.y),Ta(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mh extends pi{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class am extends pi{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sh extends pi{constructor(e=new $,t=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Aa(e,i.x,s.x,a.x),Aa(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wh extends pi{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Aa(e,i.x,s.x,a.x),Aa(e,i.y,s.y,a.y),Aa(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ah extends pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],u=i[a],l=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(lf(o,c.x,u.x,l.x,h.x),lf(o,c.y,u.y,l.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new $().fromArray(i))}return this}}var Gc=Object.freeze({__proto__:null,ArcCurve:im,CatmullRomCurve3:sm,CubicBezierCurve:yh,CubicBezierCurve3:rm,EllipseCurve:dl,LineCurve:Mh,LineCurve3:am,QuadraticBezierCurve:Sh,QuadraticBezierCurve3:wh,SplineCurve:Ah});class om extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],c=o.getLength(),u=c===0?0:1-a/c;return o.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let u=0;u<c.length;u++){const l=c[u];n&&n.equals(l)||(t.push(l),n=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Gc[i.type]().fromJSON(i))}return this}}class ka extends om{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Mh(this.currentPoint.clone(),new $(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Sh(this.currentPoint.clone(),new $(e,t),new $(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new yh(this.currentPoint.clone(),new $(e,t),new $(n,i),new $(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ah(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){const u=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+u,t+l,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){const u=new dl(e,t,n,i,s,a,o,c);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const l=u.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Qa extends et{constructor(e=[new $(0,-.5),new $(.5,0),new $(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ht(i,0,Math.PI*2);const s=[],a=[],o=[],c=[],u=[],l=1/t,h=new E,d=new $,f=new E,m=new E,v=new E;let g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(m)}for(let x=0;x<=t;x++){const b=n+x*l*i,_=Math.sin(b),C=Math.cos(b);for(let M=0;M<=e.length-1;M++){h.x=e[M].x*_,h.y=e[M].y,h.z=e[M].x*C,a.push(h.x,h.y,h.z),d.x=x/t,d.y=M/(e.length-1),o.push(d.x,d.y);const T=c[3*M+0]*_,D=c[3*M+1],z=c[3*M+0]*C;u.push(T,D,z)}}for(let x=0;x<t;x++)for(let b=0;b<e.length-1;b++){const _=b+x*e.length,C=_,M=_+e.length,T=_+e.length+1,D=_+1;s.push(C,M,D),s.push(T,D,M)}this.setIndex(s),this.setAttribute("position",new Be(a,3)),this.setAttribute("uv",new Be(o,2)),this.setAttribute("normal",new Be(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.points,e.segments,e.phiStart,e.phiLength)}}class fl extends Qa{constructor(e=1,t=1,n=4,i=8){const s=new ka;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new fl(e.radius,e.length,e.capSegments,e.radialSegments)}}class $a extends et{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],c=[],u=new E,l=new $;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;u.x=e*Math.cos(f),u.y=e*Math.sin(f),a.push(u.x,u.y,u.z),o.push(0,0,1),l.x=(a[d]/e+1)/2,l.y=(a[d+1]/e+1)/2,c.push(l.x,l.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(o,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ps extends et{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const u=this;i=Math.floor(i),s=Math.floor(s);const l=[],h=[],d=[],f=[];let m=0;const v=[],g=n/2;let p=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(l),this.setAttribute("position",new Be(h,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(f,2));function x(){const _=new E,C=new E;let M=0;const T=(t-e)/n;for(let D=0;D<=s;D++){const z=[],y=D/s,S=y*(t-e)+e;for(let F=0;F<=i;F++){const O=F/i,B=O*c+o,q=Math.sin(B),H=Math.cos(B);C.x=S*q,C.y=-y*n+g,C.z=S*H,h.push(C.x,C.y,C.z),_.set(q,T,H).normalize(),d.push(_.x,_.y,_.z),f.push(O,1-y),z.push(m++)}v.push(z)}for(let D=0;D<i;D++)for(let z=0;z<s;z++){const y=v[z][D],S=v[z+1][D],F=v[z+1][D+1],O=v[z][D+1];e>0&&(l.push(y,S,O),M+=3),t>0&&(l.push(S,F,O),M+=3)}u.addGroup(p,M,0),p+=M}function b(_){const C=m,M=new $,T=new E;let D=0;const z=_===!0?e:t,y=_===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,g*y,0),d.push(0,y,0),f.push(.5,.5),m++;const S=m;for(let F=0;F<=i;F++){const B=F/i*c+o,q=Math.cos(B),H=Math.sin(B);T.x=z*H,T.y=g*y,T.z=z*q,h.push(T.x,T.y,T.z),d.push(0,y,0),M.x=q*.5+.5,M.y=H*.5*y+.5,f.push(M.x,M.y),m++}for(let F=0;F<i;F++){const O=C+F,B=S+F;_===!0?l.push(B,B+1,O):l.push(B+1,B,O),D+=3}u.addGroup(p,D,_===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pl extends ps{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new pl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ms extends et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),u(n),l(),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(s.slice(),3)),this.setAttribute("uv",new Be(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const b=new E,_=new E,C=new E;for(let M=0;M<t.length;M+=3)f(t[M+0],b),f(t[M+1],_),f(t[M+2],C),c(b,_,C,x)}function c(x,b,_,C){const M=C+1,T=[];for(let D=0;D<=M;D++){T[D]=[];const z=x.clone().lerp(_,D/M),y=b.clone().lerp(_,D/M),S=M-D;for(let F=0;F<=S;F++)F===0&&D===M?T[D][F]=z:T[D][F]=z.clone().lerp(y,F/S)}for(let D=0;D<M;D++)for(let z=0;z<2*(M-D)-1;z++){const y=Math.floor(z/2);z%2===0?(d(T[D][y+1]),d(T[D+1][y]),d(T[D][y])):(d(T[D][y+1]),d(T[D+1][y+1]),d(T[D+1][y]))}}function u(x){const b=new E;for(let _=0;_<s.length;_+=3)b.x=s[_+0],b.y=s[_+1],b.z=s[_+2],b.normalize().multiplyScalar(x),s[_+0]=b.x,s[_+1]=b.y,s[_+2]=b.z}function l(){const x=new E;for(let b=0;b<s.length;b+=3){x.x=s[b+0],x.y=s[b+1],x.z=s[b+2];const _=g(x)/2/Math.PI+.5,C=p(x)/Math.PI+.5;a.push(_,1-C)}m(),h()}function h(){for(let x=0;x<a.length;x+=6){const b=a[x+0],_=a[x+2],C=a[x+4],M=Math.max(b,_,C),T=Math.min(b,_,C);M>.9&&T<.1&&(b<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),C<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,b){const _=x*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function m(){const x=new E,b=new E,_=new E,C=new E,M=new $,T=new $,D=new $;for(let z=0,y=0;z<s.length;z+=9,y+=6){x.set(s[z+0],s[z+1],s[z+2]),b.set(s[z+3],s[z+4],s[z+5]),_.set(s[z+6],s[z+7],s[z+8]),M.set(a[y+0],a[y+1]),T.set(a[y+2],a[y+3]),D.set(a[y+4],a[y+5]),C.copy(x).add(b).add(_).divideScalar(3);const S=g(C);v(M,y+0,x,S),v(T,y+2,b,S),v(D,y+4,_,S)}}function v(x,b,_,C){C<0&&x.x===1&&(a[b]=x.x-1),_.x===0&&_.z===0&&(a[b]=C/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.vertices,e.indices,e.radius,e.details)}}class ml extends ms{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ml(e.radius,e.detail)}}const ko=new E,Bo=new E,mu=new E,zo=new Rn;class cm extends et{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Ws*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,u=[0,0,0],l=["a","b","c"],h=new Array(3),d={},f=[];for(let m=0;m<c;m+=3){a?(u[0]=a.getX(m),u[1]=a.getX(m+1),u[2]=a.getX(m+2)):(u[0]=m,u[1]=m+1,u[2]=m+2);const{a:v,b:g,c:p}=zo;if(v.fromBufferAttribute(o,u[0]),g.fromBufferAttribute(o,u[1]),p.fromBufferAttribute(o,u[2]),zo.getNormal(mu),h[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const b=(x+1)%3,_=h[x],C=h[b],M=zo[l[x]],T=zo[l[b]],D=`${_}_${C}`,z=`${C}_${_}`;z in d&&d[z]?(mu.dot(d[z].normal)<=s&&(f.push(M.x,M.y,M.z),f.push(T.x,T.y,T.z)),d[z]=null):D in d||(d[D]={index0:u[x],index1:u[b],normal:mu.clone()})}}for(const m in d)if(d[m]){const{index0:v,index1:g}=d[m];ko.fromBufferAttribute(o,v),Bo.fromBufferAttribute(o,g),f.push(ko.x,ko.y,ko.z),f.push(Bo.x,Bo.y,Bo.z)}this.setAttribute("position",new Be(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Xs extends ka{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ka().fromJSON(i))}return this}}const Dy={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=lm(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,u,l,h,d,f;if(n&&(s=ky(r,e,s,t)),r.length>80*t){o=u=r[0],c=l=r[1];for(let m=t;m<i;m+=t)h=r[m],d=r[m+1],h<o&&(o=h),d<c&&(c=d),h>u&&(u=h),d>l&&(l=d);f=Math.max(u-o,l-c),f=f!==0?32767/f:0}return Ba(s,a,t,o,c,f,0),a}};function lm(r,e,t,n,i){let s,a;if(i===Ky(r,e,t,n)>0)for(s=e;s<t;s+=n)a=uf(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=uf(s,r[s],r[s+1],a);return a&&gl(a,a.next)&&(Ha(a),a=a.next),a}function Zs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(gl(t,t.next)||kt(t.prev,t,t.next)===0)){if(Ha(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ba(r,e,t,n,i,s,a){if(!r)return;!a&&s&&Vy(r,n,i,s);let o=r,c,u;for(;r.prev!==r.next;){if(c=r.prev,u=r.next,s?Uy(r,n,i,s):Ny(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(u.i/t|0),Ha(r),r=u.next,o=u.next;continue}if(r=u,r===o){a?a===1?(r=Oy(Zs(r),e,t),Ba(r,e,t,n,i,s,2)):a===2&&Fy(r,e,t,n,i,s):Ba(Zs(r),e,t,n,i,s,1);break}}}function Ny(r){const e=r.prev,t=r,n=r.next;if(kt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,u=n.y,l=i<s?i<a?i:a:s<a?s:a,h=o<c?o<u?o:u:c<u?c:u,d=i>s?i>a?i:a:s>a?s:a,f=o>c?o>u?o:u:c>u?c:u;let m=n.next;for(;m!==e;){if(m.x>=l&&m.x<=d&&m.y>=h&&m.y<=f&&Pr(i,o,s,c,a,u,m.x,m.y)&&kt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Uy(r,e,t,n){const i=r.prev,s=r,a=r.next;if(kt(i,s,a)>=0)return!1;const o=i.x,c=s.x,u=a.x,l=i.y,h=s.y,d=a.y,f=o<c?o<u?o:u:c<u?c:u,m=l<h?l<d?l:d:h<d?h:d,v=o>c?o>u?o:u:c>u?c:u,g=l>h?l>d?l:d:h>d?h:d,p=Ou(f,m,e,t,n),x=Ou(v,g,e,t,n);let b=r.prevZ,_=r.nextZ;for(;b&&b.z>=p&&_&&_.z<=x;){if(b.x>=f&&b.x<=v&&b.y>=m&&b.y<=g&&b!==i&&b!==a&&Pr(o,l,c,h,u,d,b.x,b.y)&&kt(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&Pr(o,l,c,h,u,d,_.x,_.y)&&kt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=v&&b.y>=m&&b.y<=g&&b!==i&&b!==a&&Pr(o,l,c,h,u,d,b.x,b.y)&&kt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&Pr(o,l,c,h,u,d,_.x,_.y)&&kt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Oy(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!gl(i,s)&&um(i,n,n.next,s)&&za(i,s)&&za(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ha(n),Ha(n.next),n=r=s),n=n.next}while(n!==r);return Zs(n)}function Fy(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qy(a,o)){let c=hm(a,o);a=Zs(a,a.next),c=Zs(c,c.next),Ba(a,e,t,n,i,s,0),Ba(c,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function ky(r,e,t,n){const i=[];let s,a,o,c,u;for(s=0,a=e.length;s<a;s++)o=e[s]*n,c=s<a-1?e[s+1]*n:r.length,u=lm(r,o,c,n,!1),u===u.next&&(u.steiner=!0),i.push(Xy(u));for(i.sort(By),s=0;s<i.length;s++)t=zy(i[s],t);return t}function By(r,e){return r.x-e.x}function zy(r,e){const t=Hy(r,e);if(!t)return e;const n=hm(t,r);return Zs(n,n.next),Zs(t,t.next)}function Hy(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,u=i.y;let l=1/0,h;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&Pr(a<u?s:n,a,c,u,a<u?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),za(t,r)&&(h<l||h===l&&(t.x>i.x||t.x===i.x&&Gy(i,t)))&&(i=t,l=h)),t=t.next;while(t!==o);return i}function Gy(r,e){return kt(r.prev,r,e.prev)<0&&kt(e.next,r,r.next)<0}function Vy(r,e,t,n){let i=r;do i.z===0&&(i.z=Ou(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Wy(i)}function Wy(r){let e,t,n,i,s,a,o,c,u=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<u&&(o++,n=n.nextZ,!!n);e++);for(c=u;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,u*=2}while(a>1);return r}function Ou(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Xy(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Pr(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function qy(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!jy(r,e)&&(za(r,e)&&za(e,r)&&Yy(r,e)&&(kt(r.prev,r,e.prev)||kt(r,e.prev,e))||gl(r,e)&&kt(r.prev,r,r.next)>0&&kt(e.prev,e,e.next)>0)}function kt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function gl(r,e){return r.x===e.x&&r.y===e.y}function um(r,e,t,n){const i=Go(kt(r,e,t)),s=Go(kt(r,e,n)),a=Go(kt(t,n,r)),o=Go(kt(t,n,e));return!!(i!==s&&a!==o||i===0&&Ho(r,t,e)||s===0&&Ho(r,n,e)||a===0&&Ho(t,r,n)||o===0&&Ho(t,e,n))}function Ho(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Go(r){return r>0?1:r<0?-1:0}function jy(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&um(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function za(r,e){return kt(r.prev,r,r.next)<0?kt(r,e,r.next)>=0&&kt(r,r.prev,e)>=0:kt(r,e,r.prev)<0||kt(r,r.next,e)<0}function Yy(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function hm(r,e){const t=new Fu(r.i,r.x,r.y),n=new Fu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function uf(r,e,t,n){const i=new Fu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ha(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Fu(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ky(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class wi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return wi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];hf(e),df(n,e);let a=e.length;t.forEach(hf);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,df(n,t[c]);const o=Dy.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function hf(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function df(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class vl extends et{constructor(e=new Xs([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a(u)}this.setAttribute("position",new Be(i,3)),this.setAttribute("uv",new Be(s,2)),this.computeVertexNormals();function a(o){const c=[],u=t.curveSegments!==void 0?t.curveSegments:12,l=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Jy;let b,_=!1,C,M,T,D;p&&(b=p.getSpacedPoints(l),_=!0,d=!1,C=p.computeFrenetFrames(l,!1),M=new E,T=new E,D=new E),d||(g=0,f=0,m=0,v=0);const z=o.extractPoints(u);let y=z.shape;const S=z.holes;if(!wi.isClockWise(y)){y=y.reverse();for(let re=0,L=S.length;re<L;re++){const ve=S[re];wi.isClockWise(ve)&&(S[re]=ve.reverse())}}const O=wi.triangulateShape(y,S),B=y;for(let re=0,L=S.length;re<L;re++){const ve=S[re];y=y.concat(ve)}function q(re,L,ve){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(L,ve)}const H=y.length,j=O.length;function X(re,L,ve){let me,de,_e;const ze=re.x-L.x,Re=re.y-L.y,I=ve.x-re.x,w=ve.y-re.y,V=ze*ze+Re*Re,Z=ze*w-Re*I;if(Math.abs(Z)>Number.EPSILON){const se=Math.sqrt(V),ne=Math.sqrt(I*I+w*w),De=L.x-Re/se,Me=L.y+ze/se,Ce=ve.x-w/ne,tt=ve.y+I/ne,le=((Ce-De)*w-(tt-Me)*I)/(ze*w-Re*I);me=De+ze*le-re.x,de=Me+Re*le-re.y;const Ne=me*me+de*de;if(Ne<=2)return new $(me,de);_e=Math.sqrt(Ne/2)}else{let se=!1;ze>Number.EPSILON?I>Number.EPSILON&&(se=!0):ze<-Number.EPSILON?I<-Number.EPSILON&&(se=!0):Math.sign(Re)===Math.sign(w)&&(se=!0),se?(me=-Re,de=ze,_e=Math.sqrt(V)):(me=ze,de=Re,_e=Math.sqrt(V/2))}return new $(me/_e,de/_e)}const he=[];for(let re=0,L=B.length,ve=L-1,me=re+1;re<L;re++,ve++,me++)ve===L&&(ve=0),me===L&&(me=0),he[re]=X(B[re],B[ve],B[me]);const ye=[];let fe,Ze=he.concat();for(let re=0,L=S.length;re<L;re++){const ve=S[re];fe=[];for(let me=0,de=ve.length,_e=de-1,ze=me+1;me<de;me++,_e++,ze++)_e===de&&(_e=0),ze===de&&(ze=0),fe[me]=X(ve[me],ve[_e],ve[ze]);ye.push(fe),Ze=Ze.concat(fe)}for(let re=0;re<g;re++){const L=re/g,ve=f*Math.cos(L*Math.PI/2),me=m*Math.sin(L*Math.PI/2)+v;for(let de=0,_e=B.length;de<_e;de++){const ze=q(B[de],he[de],me);xe(ze.x,ze.y,-ve)}for(let de=0,_e=S.length;de<_e;de++){const ze=S[de];fe=ye[de];for(let Re=0,I=ze.length;Re<I;Re++){const w=q(ze[Re],fe[Re],me);xe(w.x,w.y,-ve)}}}const ct=m+v;for(let re=0;re<H;re++){const L=d?q(y[re],Ze[re],ct):y[re];_?(T.copy(C.normals[0]).multiplyScalar(L.x),M.copy(C.binormals[0]).multiplyScalar(L.y),D.copy(b[0]).add(T).add(M),xe(D.x,D.y,D.z)):xe(L.x,L.y,0)}for(let re=1;re<=l;re++)for(let L=0;L<H;L++){const ve=d?q(y[L],Ze[L],ct):y[L];_?(T.copy(C.normals[re]).multiplyScalar(ve.x),M.copy(C.binormals[re]).multiplyScalar(ve.y),D.copy(b[re]).add(T).add(M),xe(D.x,D.y,D.z)):xe(ve.x,ve.y,h/l*re)}for(let re=g-1;re>=0;re--){const L=re/g,ve=f*Math.cos(L*Math.PI/2),me=m*Math.sin(L*Math.PI/2)+v;for(let de=0,_e=B.length;de<_e;de++){const ze=q(B[de],he[de],me);xe(ze.x,ze.y,h+ve)}for(let de=0,_e=S.length;de<_e;de++){const ze=S[de];fe=ye[de];for(let Re=0,I=ze.length;Re<I;Re++){const w=q(ze[Re],fe[Re],me);_?xe(w.x,w.y+b[l-1].y,b[l-1].x+ve):xe(w.x,w.y,h+ve)}}}K(),ce();function K(){const re=i.length/3;if(d){let L=0,ve=H*L;for(let me=0;me<j;me++){const de=O[me];Ye(de[2]+ve,de[1]+ve,de[0]+ve)}L=l+g*2,ve=H*L;for(let me=0;me<j;me++){const de=O[me];Ye(de[0]+ve,de[1]+ve,de[2]+ve)}}else{for(let L=0;L<j;L++){const ve=O[L];Ye(ve[2],ve[1],ve[0])}for(let L=0;L<j;L++){const ve=O[L];Ye(ve[0]+H*l,ve[1]+H*l,ve[2]+H*l)}}n.addGroup(re,i.length/3-re,0)}function ce(){const re=i.length/3;let L=0;ge(B,L),L+=B.length;for(let ve=0,me=S.length;ve<me;ve++){const de=S[ve];ge(de,L),L+=de.length}n.addGroup(re,i.length/3-re,1)}function ge(re,L){let ve=re.length;for(;--ve>=0;){const me=ve;let de=ve-1;de<0&&(de=re.length-1);for(let _e=0,ze=l+g*2;_e<ze;_e++){const Re=H*_e,I=H*(_e+1),w=L+me+Re,V=L+de+Re,Z=L+de+I,se=L+me+I;te(w,V,Z,se)}}}function xe(re,L,ve){c.push(re),c.push(L),c.push(ve)}function Ye(re,L,ve){qe(re),qe(L),qe(ve);const me=i.length/3,de=x.generateTopUV(n,i,me-3,me-2,me-1);ot(de[0]),ot(de[1]),ot(de[2])}function te(re,L,ve,me){qe(re),qe(L),qe(me),qe(L),qe(ve),qe(me);const de=i.length/3,_e=x.generateSideWallUV(n,i,de-6,de-3,de-2,de-1);ot(_e[0]),ot(_e[1]),ot(_e[3]),ot(_e[1]),ot(_e[2]),ot(_e[3])}function qe(re){i.push(c[re*3+0]),i.push(c[re*3+1]),i.push(c[re*3+2])}function ot(re){s.push(re.x),s.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Zy(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Gc[i.type]().fromJSON(i)),new vl(n,e.options)}}const Jy={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],u=e[i*3],l=e[i*3+1];return[new $(s,a),new $(o,c),new $(u,l)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],u=e[n*3],l=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],v=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(o-l)<Math.abs(a-u)?[new $(a,1-c),new $(u,1-h),new $(d,1-m),new $(v,1-p)]:[new $(o,1-c),new $(l,1-h),new $(f,1-m),new $(g,1-p)]}};function Zy(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class bl extends ms{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bl(e.radius,e.detail)}}class eo extends ms{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new eo(e.radius,e.detail)}}class to extends et{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],u=[],l=[];let h=e;const d=(t-e)/i,f=new E,m=new $;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const p=s+g/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),u.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,l.push(m.x,m.y)}h+=d}for(let v=0;v<i;v++){const g=v*(n+1);for(let p=0;p<n;p++){const x=p+g,b=x,_=x+n+1,C=x+n+2,M=x+1;o.push(b,_,M),o.push(_,C,M)}}this.setIndex(o),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xl extends et{constructor(e=new Xs([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)u(e);else for(let l=0;l<e.length;l++)u(e[l]),this.addGroup(o,c,l),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Be(i,3)),this.setAttribute("normal",new Be(s,3)),this.setAttribute("uv",new Be(a,2));function u(l){const h=i.length/3,d=l.extractPoints(t);let f=d.shape;const m=d.holes;wi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];wi.isClockWise(x)===!0&&(m[g]=x.reverse())}const v=wi.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];f=f.concat(x)}for(let g=0,p=f.length;g<p;g++){const x=f[g];i.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let g=0,p=v.length;g<p;g++){const x=v[g],b=x[0]+h,_=x[1]+h,C=x[2]+h;n.push(b,_,C),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Qy(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new xl(n,e.curveSegments)}}function Qy(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class hs extends et{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const l=[],h=new E,d=new E,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const x=[],b=p/n;let _=0;p===0&&a===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){const M=C/t;h.x=-e*Math.cos(i+M*s)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(i+M*s)*Math.sin(a+b*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(M+_,1-b),x.push(u++)}l.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const b=l[p][x+1],_=l[p][x],C=l[p+1][x],M=l[p+1][x+1];(p!==0||a>0)&&f.push(b,_,M),(p!==n-1||c<Math.PI)&&f.push(_,C,M)}this.setIndex(f),this.setAttribute("position",new Be(m,3)),this.setAttribute("normal",new Be(v,3)),this.setAttribute("uv",new Be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _l extends ms{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _l(e.radius,e.detail)}}class yl extends et{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],u=[],l=new E,h=new E,d=new E;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const v=m/i*s,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(v),h.y=(e+t*Math.cos(g))*Math.sin(v),h.z=t*Math.sin(g),o.push(h.x,h.y,h.z),l.x=e*Math.cos(v),l.y=e*Math.sin(v),d.subVectors(h,l).normalize(),c.push(d.x,d.y,d.z),u.push(m/i),u.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const v=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,x=(i+1)*f+m;a.push(v,g,x),a.push(g,p,x)}this.setIndex(a),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ml extends et{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],u=[],l=[],h=new E,d=new E,f=new E,m=new E,v=new E,g=new E,p=new E;for(let b=0;b<=n;++b){const _=b/n*s*Math.PI*2;x(_,s,a,e,f),x(_+.01,s,a,e,m),g.subVectors(m,f),p.addVectors(m,f),v.crossVectors(g,p),p.crossVectors(v,g),v.normalize(),p.normalize();for(let C=0;C<=i;++C){const M=C/i*Math.PI*2,T=-t*Math.cos(M),D=t*Math.sin(M);h.x=f.x+(T*p.x+D*v.x),h.y=f.y+(T*p.y+D*v.y),h.z=f.z+(T*p.z+D*v.z),c.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),u.push(d.x,d.y,d.z),l.push(b/n),l.push(C/i)}}for(let b=1;b<=n;b++)for(let _=1;_<=i;_++){const C=(i+1)*(b-1)+(_-1),M=(i+1)*b+(_-1),T=(i+1)*b+_,D=(i+1)*(b-1)+_;o.push(C,M,D),o.push(M,T,D)}this.setIndex(o),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(l,2));function x(b,_,C,M,T){const D=Math.cos(b),z=Math.sin(b),y=C/_*b,S=Math.cos(y);T.x=M*(2+S)*.5*D,T.y=M*(2+S)*z*.5,T.z=M*Math.sin(y)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Sl extends et{constructor(e=new wh(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new E,c=new E,u=new $;let l=new E;const h=[],d=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Be(h,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(f,2));function v(){for(let b=0;b<t;b++)g(b);g(s===!1?t:0),x(),p()}function g(b){l=e.getPointAt(b/t,l);const _=a.normals[b],C=a.binormals[b];for(let M=0;M<=i;M++){const T=M/i*Math.PI*2,D=Math.sin(T),z=-Math.cos(T);c.x=z*_.x+D*C.x,c.y=z*_.y+D*C.y,c.z=z*_.z+D*C.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=l.x+n*c.x,o.y=l.y+n*c.y,o.z=l.z+n*c.z,h.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=t;b++)for(let _=1;_<=i;_++){const C=(i+1)*(b-1)+(_-1),M=(i+1)*b+(_-1),T=(i+1)*b+_,D=(i+1)*(b-1)+_;m.push(C,M,D),m.push(M,T,D)}}function x(){for(let b=0;b<=t;b++)for(let _=0;_<=i;_++)u.x=b/t,u.y=_/i,f.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Sl(new Gc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class dm extends et{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new E,s=new E;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let u=0,l=c.length;u<l;++u){const h=c[u],d=h.start,f=h.count;for(let m=d,v=d+f;m<v;m+=3)for(let g=0;g<3;g++){const p=o.getX(m+g),x=o.getX(m+(g+1)%3);i.fromBufferAttribute(a,p),s.fromBufferAttribute(a,x),ff(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let u=0;u<3;u++){const l=3*o+u,h=3*o+(u+1)%3;i.fromBufferAttribute(a,l),s.fromBufferAttribute(a,h),ff(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Be(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function ff(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var pf=Object.freeze({__proto__:null,BoxGeometry:fs,CapsuleGeometry:fl,CircleGeometry:$a,ConeGeometry:pl,CylinderGeometry:ps,DodecahedronGeometry:ml,EdgesGeometry:cm,ExtrudeGeometry:vl,IcosahedronGeometry:bl,LatheGeometry:Qa,OctahedronGeometry:eo,PlaneGeometry:Vi,PolyhedronGeometry:ms,RingGeometry:to,ShapeGeometry:xl,SphereGeometry:hs,TetrahedronGeometry:_l,TorusGeometry:yl,TorusKnotGeometry:Ml,TubeGeometry:Sl,WireframeGeometry:dm});class fm extends Zt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new oe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class pm extends At{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yr extends Zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ni extends Yr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mm extends Zt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new oe(16777215),this.specular=new oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gm extends Zt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new oe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class vm extends Zt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class bm extends Zt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xm extends Zt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new oe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _m extends _n{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Gs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ym(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Mm(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ku(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Th(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function $y(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let c=0;c<s.tracks.length;++c){const u=s.tracks[c],l=u.getValueSize(),h=[],d=[];for(let f=0;f<u.times.length;++f){const m=u.times[f]*i;if(!(m<t||m>=n)){h.push(u.times[f]);for(let v=0;v<l;++v)d.push(u.values[f*l+v])}}h.length!==0&&(u.times=Gs(h,u.times.constructor),u.values=Gs(d,u.values.constructor),a.push(u))}s.tracks=a;let o=1/0;for(let c=0;c<s.tracks.length;++c)o>s.tracks[c].times[0]&&(o=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*o);return s.resetDuration(),s}function eM(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const u=r.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===c});if(u===void 0)continue;let l=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(l=h/3);let d=0;const f=u.getValueSize();u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=o.times.length-1;let v;if(s<=o.times[0]){const p=l,x=h-l;v=o.values.slice(p,x)}else if(s>=o.times[m]){const p=m*h+l,x=p+h-l;v=o.values.slice(p,x)}else{const p=o.createInterpolant(),x=l,b=h-l;p.evaluate(s),v=p.resultBuffer.slice(x,b)}c==="quaternion"&&new hn().fromArray(v).normalize().conjugate().toArray(v);const g=u.times.length;for(let p=0;p<g;++p){const x=p*f+d;if(c==="quaternion")hn.multiplyQuaternionsFlat(u.values,x,v,0,u.values,x);else{const b=f-d*2;for(let _=0;_<b;++_)u.values[x+_]-=v[_]}}}return r.blendMode=sh,r}const tM={convertArray:Gs,isTypedArray:ym,getKeyframeOrder:Mm,sortedArray:ku,flattenJSON:Th,subclip:$y,makeClipAdditive:eM};class Kr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Sm extends Kr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bs,endingEnd:Bs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case zs:s=e,o=2*t-n;break;case Ca:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zs:a=e,c=2*n-t;break;case Ca:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const u=(n-t)*.5,l=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*l,this._offsetNext=a*l}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,x=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,b=(-1-f)*g+(1.5+f)*v+.5*m,_=f*g-f*v;for(let C=0;C!==o;++C)s[C]=p*a[l+C]+x*a[u+C]+b*a[c+C]+_*a[h+C];return s}}class Eh extends Kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=(n-t)/(i-t),h=1-l;for(let d=0;d!==o;++d)s[d]=a[u+d]*h+a[c+d]*l;return s}}class wm extends Kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class mi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gs(t,this.TimeBufferType),this.values=Gs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gs(e.times,Array),values:Gs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Br:t=this.InterpolantFactoryMethodDiscrete;break;case zr:t=this.InterpolantFactoryMethodLinear;break;case Qo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&ym(i))for(let o=0,c=i.length;o!==c;++o){const u=i[o];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qo,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const u=e[o],l=e[o+1];if(u!==l&&(o!==1||u!==e[0]))if(i)c=!0;else{const h=o*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const v=t[h+m];if(v!==t[d+m]||v!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=zr;class nr extends mi{constructor(e,t,n){super(e,t,n)}}nr.prototype.ValueTypeName="bool";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Br;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Rh extends mi{}Rh.prototype.ValueTypeName="color";class Qs extends mi{}Qs.prototype.ValueTypeName="number";class Am extends Kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let u=e*o;for(let l=u+o;u!==l;u+=4)hn.slerpFlat(s,0,a,u-o,a,u,c);return s}}class $s extends mi{InterpolantFactoryMethodLinear(e){return new Am(this.times,this.values,this.getValueSize(),e)}}$s.prototype.ValueTypeName="quaternion";$s.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends mi{constructor(e,t,n){super(e,t,n)}}ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Br;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends mi{}er.prototype.ValueTypeName="vector";class Vr{constructor(e="",t=-1,n=[],i=el){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(iM(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(mi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],u=[];c.push((o+s-1)%s,o,(o+1)%s),u.push(0,1,0);const l=Mm(c);c=ku(c,1,l),u=ku(u,1,l),!i&&c[0]===0&&(c.push(s),u.push(u[0])),a.push(new Qs(".morphTargetInfluences["+t[o].name+"]",c,u).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const u=e[o],l=u.name.match(s);if(l&&l.length>1){const h=l[1];let d=i[h];d||(i[h]=d=[]),d.push(u)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,v){if(f.length!==0){const g=[],p=[];Th(f,g,p,m),g.length!==0&&v.push(new h(d,g,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let h=0;h<u.length;h++){const d=u[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(const v in f){const g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const b=d[m];g.push(b.time),p.push(b.morphTarget===v?1:0)}i.push(new Qs(".morphTargetInfluence["+v+"]",g,p))}c=f.length*a}else{const f=".bones["+t[h].name+"]";n(er,f+".position",d,"pos",i),n($s,f+".quaternion",d,"rot",i),n(er,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function nM(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qs;case"vector":case"vector2":case"vector3":case"vector4":return er;case"color":return Rh;case"quaternion":return $s;case"bool":case"boolean":return nr;case"string":return ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function iM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=nM(r.type);if(r.times===void 0){const t=[],n=[];Th(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Bi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ch{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){o++,s===!1&&i.onStart!==void 0&&i.onStart(l,a,o),s=!0},this.itemEnd=function(l){a++,i.onProgress!==void 0&&i.onProgress(l,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,h){return u.push(l,h),this},this.removeHandler=function(l){const h=u.indexOf(l);return h!==-1&&u.splice(h,2),this},this.getHandler=function(l){for(let h=0,d=u.length;h<d;h+=2){const f=u[h],m=u[h+1];if(f.global&&(f.lastIndex=0),f.test(l))return m}return null}}}const Tm=new Ch;class Pn{constructor(e){this.manager=e!==void 0?e:Tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui={};class sM extends Error{constructor(e,t){super(e),this.response=t}}class fi extends Pn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Bi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:n,onError:i});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||u.body===void 0||u.body.getReader===void 0)return u;const l=Ui[e],h=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let v=0;const g=new ReadableStream({start(p){x();function x(){h.read().then(({done:b,value:_})=>{if(b)p.close();else{v+=_.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let M=0,T=l.length;M<T;M++){const D=l[M];D.onProgress&&D.onProgress(C)}p.enqueue(_),x()}},b=>{p.error(b)})}}});return new Response(g)}else throw new sM(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return u.json();default:if(o===void 0)return u.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return u.arrayBuffer().then(m=>f.decode(m))}}}).then(u=>{Bi.add(e,u);const l=Ui[e];delete Ui[e];for(let h=0,d=l.length;h<d;h++){const f=l[h];f.onLoad&&f.onLoad(u)}}).catch(u=>{const l=Ui[e];if(l===void 0)throw this.manager.itemError(e),u;delete Ui[e];for(let h=0,d=l.length;h<d;h++){const f=l[h];f.onError&&f.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class rM extends Pn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new fi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Vr.parse(e[n]);t.push(i)}return t}}class aM extends Pn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=[],o=new hl,c=new fi(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(s.withCredentials);let u=0;function l(h){c.load(e[h],function(d){const f=s.parse(d,!0);a[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},u+=1,u===6&&(f.mipmapCount===1&&(o.minFilter=Rt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)l(h);else c.load(e,function(h){const d=s.parse(h,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let m=0;m<f;m++){a[m]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)a[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+v]),a[m].format=d.format,a[m].width=d.width,a[m].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=Rt),o.format=d.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class Ga extends Pn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Bi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ua("img");function c(){l(),Bi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(h){l(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class oM extends Pn{constructor(e){super(e)}load(e,t,n,i){const s=new Ya;s.colorSpace=Yt;const a=new Ga(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(u){a.load(e[u],function(l){s.images[u]=l,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let u=0;u<e.length;++u)c(u);return s}}class cM extends Pn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new di,o=new fi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(c){let u;try{u=s.parse(c)}catch(l){if(i!==void 0)i(l);else{console.error(l);return}}u.image!==void 0?a.image=u.image:u.data!==void 0&&(a.image.width=u.width,a.image.height=u.height,a.image.data=u.data),a.wrapS=u.wrapS!==void 0?u.wrapS:Xn,a.wrapT=u.wrapT!==void 0?u.wrapT:Xn,a.magFilter=u.magFilter!==void 0?u.magFilter:Rt,a.minFilter=u.minFilter!==void 0?u.minFilter:Rt,a.anisotropy=u.anisotropy!==void 0?u.anisotropy:1,u.colorSpace!==void 0&&(a.colorSpace=u.colorSpace),u.flipY!==void 0&&(a.flipY=u.flipY),u.format!==void 0&&(a.format=u.format),u.type!==void 0&&(a.type=u.type),u.mipmaps!==void 0&&(a.mipmaps=u.mipmaps,a.minFilter=qn),u.mipmapCount===1&&(a.minFilter=Rt),u.generateMipmaps!==void 0&&(a.generateMipmaps=u.generateMipmaps),a.needsUpdate=!0,t&&t(a,u)},n,i),a}}class Em extends Pn{constructor(e){super(e)}load(e,t,n,i){const s=new Nt,a=new Ga(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class gs extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Rm extends gs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const gu=new Xe,mf=new E,gf=new E;class Ph{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ka,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;mf.setFromMatrixPosition(e.matrixWorld),t.position.copy(mf),gf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gf),t.updateMatrixWorld(),gu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lM extends Ph{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Hr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ih extends gs{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new lM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vf=new Xe,ua=new E,vu=new E;class uM extends Ph{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ua.setFromMatrixPosition(e.matrixWorld),n.position.copy(ua),vu.copy(n.position),vu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vu),n.updateMatrixWorld(),i.makeTranslation(-ua.x,-ua.y,-ua.z),vf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vf)}}class Lh extends gs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new uM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hM extends Ph{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Va extends gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new hM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cm extends gs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pm extends gs{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Im{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Lm extends gs{constructor(e=new Im,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class wl extends Pn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,a=new fi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new oe().setHex(a.value);break;case"v2":i.uniforms[s].value=new $().fromArray(a.value);break;case"v3":i.uniforms[s].value=new E().fromArray(a.value);break;case"v4":i.uniforms[s].value=new bt().fromArray(a.value);break;case"m3":i.uniforms[s].value=new ht().fromArray(a.value);break;case"m4":i.uniforms[s].value=new Xe().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new $().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new $().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return wl.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:fm,SpriteMaterial:cl,RawShaderMaterial:pm,ShaderMaterial:At,PointsMaterial:ul,MeshPhysicalMaterial:ni,MeshStandardMaterial:Yr,MeshPhongMaterial:mm,MeshToonMaterial:gm,MeshNormalMaterial:vm,MeshLambertMaterial:bm,MeshDepthMaterial:fh,MeshDistanceMaterial:ph,MeshBasicMaterial:sn,MeshMatcapMaterial:xm,LineDashedMaterial:_m,LineBasicMaterial:_n,Material:Zt};return new t[e]}}class cs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Dm extends et{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Nm extends Pn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new fi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,m){if(t[m]!==void 0)return t[m];const g=f.interleavedBuffers[m],p=s(f,g.buffer),x=Rr(g.type,p),b=new Ja(x,g.stride);return b.uuid=g.uuid,t[m]=b,b}function s(f,m){if(n[m]!==void 0)return n[m];const g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}const a=e.isInstancedBufferGeometry?new Dm:new et,o=e.data.index;if(o!==void 0){const f=Rr(o.type,o.array);a.setIndex(new it(f,1))}const c=e.data.attributes;for(const f in c){const m=c[f];let v;if(m.isInterleavedBufferAttribute){const g=i(e.data,m.data);v=new us(g,m.itemSize,m.offset,m.normalized)}else{const g=Rr(m.type,m.array),p=m.isInstancedBufferAttribute?Js:it;v=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(v.name=m.name),m.usage!==void 0&&v.setUsage(m.usage),a.setAttribute(f,v)}const u=e.data.morphAttributes;if(u)for(const f in u){const m=u[f],v=[];for(let g=0,p=m.length;g<p;g++){const x=m[g];let b;if(x.isInterleavedBufferAttribute){const _=i(e.data,x.data);b=new us(_,x.itemSize,x.offset,x.normalized)}else{const _=Rr(x.type,x.array);b=new it(_,x.itemSize,x.normalized)}x.name!==void 0&&(b.name=x.name),v.push(b)}a.morphAttributes[f]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,m=h.length;f!==m;++f){const v=h[f];a.addGroup(v.start,v.count,v.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new E;d.center!==void 0&&f.fromArray(d.center),a.boundingSphere=new fn(f,d.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class dM extends Pn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=this.path===""?cs.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new fi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){let u=null;try{u=JSON.parse(c)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const l=u.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(u,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?cs.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new fi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),o=JSON.parse(a),c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(u)}),o=this.parseTextures(e.textures,a),c=this.parseMaterials(e.materials,o),u=this.parseObject(e.object,s,c,o,n),l=this.parseSkeletons(e.skeletons,u);if(this.bindSkeletons(u,l),this.bindLightTargets(u),t!==void 0){let h=!1;for(const d in a)if(a[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(u)}return u}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,i,o,a,t),u=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,u),this.bindLightTargets(c),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Xs().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=new Za().fromJSON(e[s],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Nm;for(let s=0,a=e.length;s<a;s++){let o;const c=e[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(c);break;default:c.type in pf?o=pf[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),n[c.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new wl;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){const c=e[a];n[c.uuid]===void 0&&(n[c.uuid]=s.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Vr.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function a(c){return n.manager.itemStart(c),s.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){const u=c,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(u)?u:n.resourcePath+u;return a(l)}else return c.data?{data:Rr(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new Ch(t);s=new Ga(c),s.setCrossOrigin(this.crossOrigin);for(let u=0,l=e.length;u<l;u++){const h=e[u],d=h.url;if(Array.isArray(d)){const f=[];for(let m=0,v=d.length;m<v;m++){const g=d[m],p=o(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new di(p.data,p.width,p.height)))}i[h.uuid]=new Hs(f)}else{const f=o(h.url);i[h.uuid]=new Hs(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(a){if(typeof a=="string"){const o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(c)}else return a.data?{data:Rr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Ga(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const c=e[a],u=c.url;if(Array.isArray(u)){const l=[];for(let h=0,d=u.length;h<d;h++){const f=u[h],m=await s(f);m!==null&&(m instanceof HTMLImageElement?l.push(m):l.push(new di(m.data,m.width,m.height)))}n[c.uuid]=new Hs(l)}else{const l=await s(c.url);n[c.uuid]=new Hs(l)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const i={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const c=t[o.image],u=c.data;let l;Array.isArray(u)?(l=new Ya,u.length===6&&(l.needsUpdate=!0)):(u&&u.data?l=new di:l=new Nt,u&&(l.needsUpdate=!0)),l.source=c,l.uuid=o.uuid,o.name!==void 0&&(l.name=o.name),o.mapping!==void 0&&(l.mapping=n(o.mapping,fM)),o.channel!==void 0&&(l.channel=o.channel),o.offset!==void 0&&l.offset.fromArray(o.offset),o.repeat!==void 0&&l.repeat.fromArray(o.repeat),o.center!==void 0&&l.center.fromArray(o.center),o.rotation!==void 0&&(l.rotation=o.rotation),o.wrap!==void 0&&(l.wrapS=n(o.wrap[0],bf),l.wrapT=n(o.wrap[1],bf)),o.format!==void 0&&(l.format=o.format),o.internalFormat!==void 0&&(l.internalFormat=o.internalFormat),o.type!==void 0&&(l.type=o.type),o.colorSpace!==void 0&&(l.colorSpace=o.colorSpace),o.minFilter!==void 0&&(l.minFilter=n(o.minFilter,xf)),o.magFilter!==void 0&&(l.magFilter=n(o.magFilter,xf)),o.anisotropy!==void 0&&(l.anisotropy=o.anisotropy),o.flipY!==void 0&&(l.flipY=o.flipY),o.generateMipmaps!==void 0&&(l.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(l.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(l.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(l.compareFunction=o.compareFunction),o.userData!==void 0&&(l.userData=o.userData),i[o.uuid]=l}return i}parseObject(e,t,n,i,s){let a;function o(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function c(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let m=0,v=d.length;m<v;m++){const g=d[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function u(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let l,h;switch(e.type){case"Scene":a=new Fa,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new oe(e.background):a.background=u(e.background)),e.environment!==void 0&&(a.environment=u(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new ol(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new al(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Xt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new tr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Cm(e.color,e.intensity);break;case"DirectionalLight":a=new Va(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new Lh(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Pm(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Ih(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new Rm(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Lm().fromJSON(e);break;case"SkinnedMesh":l=o(e.geometry),h=c(e.material),a=new gh(l,h),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":l=o(e.geometry),h=c(e.material),a=new wt(l,h);break;case"InstancedMesh":l=o(e.geometry),h=c(e.material);const d=e.count,f=e.instanceMatrix,m=e.instanceColor;a=new vh(l,h,d),a.instanceMatrix=new Js(new Float32Array(f.array),16),m!==void 0&&(a.instanceColor=new Js(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":l=o(e.geometry),h=c(e.material),a=new nm(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,h),a.geometry=l,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(v=>{const g=new dn;g.min.fromArray(v.boxMin),g.max.fromArray(v.boxMax);const p=new fn;return p.radius=v.sphereRadius,p.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:g,sphereInitialized:v.sphereInitialized,sphere:p}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=u(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=u(e.colorsTexture.uuid));break;case"LOD":a=new tm;break;case"Line":a=new Wi(o(e.geometry),c(e.material));break;case"LineLoop":a=new bh(o(e.geometry),c(e.material));break;case"LineSegments":a=new ti(o(e.geometry),c(e.material));break;case"PointCloud":case"Points":a=new Ri(o(e.geometry),c(e.material));break;case"Sprite":a=new mh(c(e.material));break;case"Group":a=new Cn;break;case"Bone":a=new ll;break;default:a=new _t}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,n,i,s))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const m=d[f];a.animations.push(s[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const m=d[f],v=a.getObjectByProperty("uuid",m.object);v!==void 0&&a.addLevel(v,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new _t}})}}const fM={UVMapping:qc,CubeReflectionMapping:Hi,CubeRefractionMapping:ls,EquirectangularReflectionMapping:js,EquirectangularRefractionMapping:Ra,CubeUVReflectionMapping:Xr},bf={RepeatWrapping:Ti,ClampToEdgeWrapping:Xn,MirroredRepeatWrapping:Fr},xf={NearestFilter:Kt,NearestMipmapNearestFilter:jc,NearestMipmapLinearFilter:ks,LinearFilter:Rt,LinearMipmapNearestFilter:Lr,LinearMipmapLinearFilter:qn};class Um extends Pn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Bi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(u=>{t&&t(u),s.manager.itemEnd(e)}).catch(u=>{i&&i(u)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(u){return Bi.add(e,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){i&&i(u),Bi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Bi.add(e,c),s.manager.itemStart(e)}}let Vo;class Dh{static getContext(){return Vo===void 0&&(Vo=new(window.AudioContext||window.webkitAudioContext)),Vo}static setContext(e){Vo=e}}class pM extends Pn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new fi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const u=c.slice(0);Dh.getContext().decodeAudioData(u,function(h){t(h)}).catch(o)}catch(u){o(u)}},n,i);function o(c){i?i(c):console.error(c),s.manager.itemError(e)}}}const _f=new Xe,yf=new Xe,Ts=new Xe;class mM{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Xt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Xt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Ts.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,a=t.near*Math.tan(Ws*t.fov*.5)/t.zoom;let o,c;yf.elements[12]=-i,_f.elements[12]=i,o=-a*t.aspect+s,c=a*t.aspect+s,Ts.elements[0]=2*t.near/(c-o),Ts.elements[8]=(c+o)/(c-o),this.cameraL.projectionMatrix.copy(Ts),o=-a*t.aspect-s,c=a*t.aspect-s,Ts.elements[0]=2*t.near/(c-o),Ts.elements[8]=(c+o)/(c-o),this.cameraR.projectionMatrix.copy(Ts)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(yf),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(_f)}}class Wa{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Mf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Mf(){return performance.now()}const Es=new E,Sf=new hn,gM=new E,Rs=new E;class vM extends _t{constructor(){super(),this.type="AudioListener",this.context=Dh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Wa}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Es,Sf,gM),Rs.set(0,0,-1).applyQuaternion(Sf),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Es.x,i),t.positionY.linearRampToValueAtTime(Es.y,i),t.positionZ.linearRampToValueAtTime(Es.z,i),t.forwardX.linearRampToValueAtTime(Rs.x,i),t.forwardY.linearRampToValueAtTime(Rs.y,i),t.forwardZ.linearRampToValueAtTime(Rs.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Es.x,Es.y,Es.z),t.setOrientation(Rs.x,Rs.y,Rs.z,n.x,n.y,n.z)}}class Om extends _t{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Cs=new E,wf=new hn,bM=new E,Ps=new E;class xM extends Om{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Cs,wf,bM),Ps.set(0,0,1).applyQuaternion(wf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Cs.x,n),t.positionY.linearRampToValueAtTime(Cs.y,n),t.positionZ.linearRampToValueAtTime(Cs.z,n),t.orientationX.linearRampToValueAtTime(Ps.x,n),t.orientationY.linearRampToValueAtTime(Ps.y,n),t.orientationZ.linearRampToValueAtTime(Ps.z,n)}else t.setPosition(Cs.x,Cs.y,Cs.z),t.setOrientation(Ps.x,Ps.y,Ps.z)}}class _M{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Fm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,u=t+t;c!==u;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){hn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;hn.multiplyQuaternionsFlat(e,a,e,t,e,n),hn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Nh="\\[\\]\\.:\\/",yM=new RegExp("["+Nh+"]","g"),Uh="[^"+Nh+"]",MM="[^"+Nh.replace("\\.","")+"]",SM=/((?:WC+[\/:])*)/.source.replace("WC",Uh),wM=/(WCOD+)?/.source.replace("WCOD",MM),AM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uh),TM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uh),EM=new RegExp("^"+SM+wM+AM+TM+"$"),RM=["material","materials","bones","map"];class CM{constructor(e,t,n){const i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yM,"")}static parseTrackName(e){const t=EM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);RM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===u){u=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const a=e[i];if(a===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=CM;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class PM{constructor(){this.isAnimationObjectGroup=!0,this.uuid=jn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,a=s.length;let o,c=e.length,u=this.nCachedObjects_;for(let l=0,h=arguments.length;l!==h;++l){const d=arguments[l],f=d.uuid;let m=t[f];if(m===void 0){m=c++,t[f]=m,e.push(d);for(let v=0,g=a;v!==g;++v)s[v].push(new Mt(d,n[v],i[v]))}else if(m<u){o=e[m];const v=--u,g=e[v];t[g.uuid]=m,e[m]=g,t[f]=v,e[v]=d;for(let p=0,x=a;p!==x;++p){const b=s[p],_=b[v];let C=b[m];b[m]=_,C===void 0&&(C=new Mt(d,n[p],i[p])),b[v]=C}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=u}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const c=arguments[a],u=c.uuid,l=t[u];if(l!==void 0&&l>=s){const h=s++,d=e[h];t[d.uuid]=l,e[l]=d,t[u]=h,e[h]=c;for(let f=0,m=i;f!==m;++f){const v=n[f],g=v[h],p=v[l];v[l]=g,v[h]=p}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,a=e.length;for(let o=0,c=arguments.length;o!==c;++o){const u=arguments[o],l=u.uuid,h=t[l];if(h!==void 0)if(delete t[l],h<s){const d=--s,f=e[d],m=--a,v=e[m];t[f.uuid]=h,e[h]=f,t[v.uuid]=d,e[d]=v,e.pop();for(let g=0,p=i;g!==p;++g){const x=n[g],b=x[d],_=x[m];x[h]=b,x[d]=_,x.pop()}}else{const d=--a,f=e[d];d>0&&(t[f.uuid]=h),e[h]=f,e.pop();for(let m=0,v=i;m!==v;++m){const g=n[m];g[h]=g[d],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const a=this._paths,o=this._parsedPaths,c=this._objects,u=c.length,l=this.nCachedObjects_,h=new Array(u);i=s.length,n[e]=i,a.push(e),o.push(t),s.push(h);for(let d=l,f=c.length;d!==f;++d){const m=c[d];h[d]=new Mt(m,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,c=a[o],u=e[o];t[u]=n,a[n]=c,a.pop(),s[n]=s[o],s.pop(),i[n]=i[o],i.pop()}}}class km{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),c={endingStart:Bs,endingEnd:Bs};for(let u=0;u!==a;++u){const l=s[u].createInterpolant(null);o[u]=l,l.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ap,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,u=o.sampleValues;return c[0]=s,c[1]=s+n,u[0]=e/a,u[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case sh:for(let l=0,h=c.length;l!==h;++l)c[l].evaluate(a),u[l].accumulateAdditive(o);break;case el:default:for(let l=0,h=c.length;l!==h;++l)c[l].evaluate(a),u[l].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===Tp;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===wp){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const u=e<0;this._setEndings(u,!u,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=zs,i.endingEnd=zs):(e?i.endingStart=this.zeroSlopeAtStart?zs:Bs:i.endingStart=Ca,t?i.endingEnd=this.zeroSlopeAtEnd?zs:Bs:i.endingEnd=Ca)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const IM=new Float32Array(1);class LM extends Ci{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,u=this._bindingsByRootAndName;let l=u[c];l===void 0&&(l={},u[c]=l);for(let h=0;h!==s;++h){const d=i[h],f=d.name;let m=l[f];if(m!==void 0)++m.referenceCount,a[h]=m;else{if(m=a[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;m=new Fm(Mt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[h]=m}o[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,u=c[c.length-1],l=e._byClipCacheIndex;u._byClipCacheIndex=l,c[l]=u,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],u=e._cacheIndex;c._cacheIndex=u,t[u]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Eh(new Float32Array(2),new Float32Array(2),1,IM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Vr.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let u=null;if(n===void 0&&(a!==null?n=a.blendMode:n=el),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;u=c.knownActions[0],a===null&&(a=u._clip)}if(a===null)return null;const l=new km(this,a,t,n);return this._bindAction(l,u),this._addInactiveAction(l,o,s),l}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Vr.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let u=0;u!==n;++u)t[u]._update(i,e,s,a);const o=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)o[u].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const u=a[o];this._deactivateAction(u);const l=u._cacheIndex,h=t[t.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,h._cacheIndex=l,t[l]=h,t.pop(),this._removeInactiveBindingsForAction(u)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Oh{constructor(e){this.value=e}clone(){return new Oh(this.value.clone===void 0?this.value:this.value.clone())}}let DM=0;class NM extends Ci{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:DM++}),this.name="",this.usage=Da,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class UM extends Ja{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class OM{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Af=new Xe;class Bm{constructor(e,t,n=0,i=1/0){this.ray=new qr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new il,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Af.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Af),this}intersectObject(e,t=!0,n=[]){return Bu(e,this,n,t),n.sort(Tf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Bu(e[i],this,n,t);return n.sort(Tf),n}}function Tf(r,e){return r.distance-e.distance}function Bu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Bu(s[a],e,t,!0)}}class FM{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kM{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Fh{constructor(e,t,n,i){Fh.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const Ef=new $;class BM{constructor(e=new $(1/0,1/0),t=new $(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ef.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ef).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rf=new E,Wo=new E;class zM{constructor(e=new E,t=new E){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Rf.subVectors(e,this.start),Wo.subVectors(this.end,this.start);const n=Wo.dot(Wo);let s=Wo.dot(Rf)/n;return t&&(s=Ht(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Cf=new E;class HM extends _t{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new et,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,c=32;a<c;a++,o++){const u=a/c*Math.PI*2,l=o/c*Math.PI*2;i.push(Math.cos(u),Math.sin(u),1,Math.cos(l),Math.sin(l),1)}n.setAttribute("position",new Be(i,3));const s=new _n({fog:!1,toneMapped:!1});this.cone=new ti(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Cf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Cf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const ss=new E,Xo=new Xe,bu=new Xe;class GM extends ti{constructor(e){const t=zm(e),n=new et,i=[],s=[],a=new oe(0,0,1),o=new oe(0,1,0);for(let u=0;u<t.length;u++){const l=t[u];l.parent&&l.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new Be(i,3)),n.setAttribute("color",new Be(s,3));const c=new _n({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");bu.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Xo.multiplyMatrices(bu,o.matrixWorld),ss.setFromMatrixPosition(Xo),i.setXYZ(a,ss.x,ss.y,ss.z),Xo.multiplyMatrices(bu,o.parent.matrixWorld),ss.setFromMatrixPosition(Xo),i.setXYZ(a+1,ss.x,ss.y,ss.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function zm(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,zm(r.children[t]));return e}class VM extends wt{constructor(e,t,n){const i=new hs(t,4,2),s=new sn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const WM=new E,Pf=new oe,If=new oe;class XM extends _t{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new eo(t);i.rotateY(Math.PI*.5),this.material=new sn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),a=new Float32Array(s.count*3);i.setAttribute("color",new it(a,3)),this.add(new wt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Pf.copy(this.light.color),If.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Pf:If;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(WM.setFromMatrixPosition(this.light.matrixWorld).negate())}}class qM extends ti{constructor(e=10,t=10,n=4473924,i=8947848){n=new oe(n),i=new oe(i);const s=t/2,a=e/t,o=e/2,c=[],u=[];for(let d=0,f=0,m=-o;d<=t;d++,m+=a){c.push(-o,0,m,o,0,m),c.push(m,0,-o,m,0,o);const v=d===s?n:i;v.toArray(u,f),f+=3,v.toArray(u,f),f+=3,v.toArray(u,f),f+=3,v.toArray(u,f),f+=3}const l=new et;l.setAttribute("position",new Be(c,3)),l.setAttribute("color",new Be(u,3));const h=new _n({vertexColors:!0,toneMapped:!1});super(l,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class jM extends ti{constructor(e=10,t=16,n=8,i=64,s=4473924,a=8947848){s=new oe(s),a=new oe(a);const o=[],c=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),f=Math.sin(d)*e,m=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,m);const v=h&1?s:a;c.push(v.r,v.g,v.b),c.push(v.r,v.g,v.b)}for(let h=0;h<n;h++){const d=h&1?s:a,f=e-e/n*h;for(let m=0;m<i;m++){let v=m/i*(Math.PI*2),g=Math.sin(v)*f,p=Math.cos(v)*f;o.push(g,0,p),c.push(d.r,d.g,d.b),v=(m+1)/i*(Math.PI*2),g=Math.sin(v)*f,p=Math.cos(v)*f,o.push(g,0,p),c.push(d.r,d.g,d.b)}}const u=new et;u.setAttribute("position",new Be(o,3)),u.setAttribute("color",new Be(c,3));const l=new _n({vertexColors:!0,toneMapped:!1});super(u,l),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Lf=new E,qo=new E,Df=new E;class YM extends _t{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new et;i.setAttribute("position",new Be([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new _n({fog:!1,toneMapped:!1});this.lightPlane=new Wi(i,s),this.add(this.lightPlane),i=new et,i.setAttribute("position",new Be([0,0,0,0,0,1],3)),this.targetLine=new Wi(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Lf.setFromMatrixPosition(this.light.matrixWorld),qo.setFromMatrixPosition(this.light.target.matrixWorld),Df.subVectors(qo,Lf),this.lightPlane.lookAt(qo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(qo),this.targetLine.scale.z=Df.length()}}const jo=new E,zt=new sl;class KM extends ti{constructor(e){const t=new et,n=new _n({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,v){c(m),c(v)}function c(m){i.push(0,0,0),s.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(i.length/3-1)}t.setAttribute("position",new Be(i,3)),t.setAttribute("color",new Be(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const u=new oe(16755200),l=new oe(16711680),h=new oe(43775),d=new oe(16777215),f=new oe(3355443);this.setColors(u,l,h,d,f)}setColors(e,t,n,i,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;zt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Vt("c",t,e,zt,0,0,-1),Vt("t",t,e,zt,0,0,1),Vt("n1",t,e,zt,-n,-i,-1),Vt("n2",t,e,zt,n,-i,-1),Vt("n3",t,e,zt,-n,i,-1),Vt("n4",t,e,zt,n,i,-1),Vt("f1",t,e,zt,-n,-i,1),Vt("f2",t,e,zt,n,-i,1),Vt("f3",t,e,zt,-n,i,1),Vt("f4",t,e,zt,n,i,1),Vt("u1",t,e,zt,n*.7,i*1.1,-1),Vt("u2",t,e,zt,-n*.7,i*1.1,-1),Vt("u3",t,e,zt,0,i*2,-1),Vt("cf1",t,e,zt,-n,0,1),Vt("cf2",t,e,zt,n,0,1),Vt("cf3",t,e,zt,0,-i,1),Vt("cf4",t,e,zt,0,i,1),Vt("cn1",t,e,zt,-n,0,-1),Vt("cn2",t,e,zt,n,0,-1),Vt("cn3",t,e,zt,0,-i,-1),Vt("cn4",t,e,zt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Vt(r,e,t,n,i,s,a){jo.set(i,s,a).unproject(n);const o=e[r];if(o!==void 0){const c=t.getAttribute("position");for(let u=0,l=o.length;u<l;u++)c.setXYZ(o[u],jo.x,jo.y,jo.z)}}const Yo=new dn;class JM extends ti{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new et;s.setIndex(new it(n,1)),s.setAttribute("position",new it(i,3)),super(s,new _n({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Yo.setFromObject(this.object),Yo.isEmpty())return;const t=Yo.min,n=Yo.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ZM extends ti{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new et;s.setIndex(new it(n,1)),s.setAttribute("position",new Be(i,3)),super(s,new _n({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class QM extends Wi{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new et;a.setAttribute("position",new Be(s,3)),a.computeBoundingSphere(),super(a,new _n({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new et;c.setAttribute("position",new Be(o,3)),c.computeBoundingSphere(),this.add(new wt(c,new sn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Nf=new E;let Ko,xu;class $M extends _t{constructor(e=new E(0,0,1),t=new E(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",Ko===void 0&&(Ko=new et,Ko.setAttribute("position",new Be([0,0,0,0,1,0],3)),xu=new ps(0,.5,1,5,1),xu.translate(0,-.5,0)),this.position.copy(t),this.line=new Wi(Ko,new _n({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new wt(xu,new sn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Nf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Nf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class eS extends ti{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new et;i.setAttribute("position",new Be(t,3)),i.setAttribute("color",new Be(n,3));const s=new _n({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new oe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class tS{constructor(){this.type="ShapePath",this.color=new oe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ka,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const x=[];for(let b=0,_=p.length;b<_;b++){const C=p[b],M=new Xs;M.curves=C.curves,x.push(M)}return x}function n(p,x){const b=x.length;let _=!1;for(let C=b-1,M=0;M<b;C=M++){let T=x[C],D=x[M],z=D.x-T.x,y=D.y-T.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(T=x[M],z=-z,D=x[C],y=-y),p.y<T.y||p.y>D.y)continue;if(p.y===T.y){if(p.x===T.x)return!0}else{const S=y*(p.x-T.x)-z*(p.y-T.y);if(S===0)return!0;if(S<0)continue;_=!_}}else{if(p.y!==T.y)continue;if(D.x<=p.x&&p.x<=T.x||T.x<=p.x&&p.x<=D.x)return!0}}return _}const i=wi.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,c;const u=[];if(s.length===1)return o=s[0],c=new Xs,c.curves=o.curves,u.push(c),u;let l=!i(s[0].getPoints());l=e?!l:l;const h=[],d=[];let f=[],m=0,v;d[m]=void 0,f[m]=[];for(let p=0,x=s.length;p<x;p++)o=s[p],v=o.getPoints(),a=i(v),a=e?!a:a,a?(!l&&d[m]&&m++,d[m]={s:new Xs,p:v},d[m].s.curves=o.curves,l&&m++,f[m]=[]):f[m].push({h:o,p:v[0]});if(!d[0])return t(s);if(d.length>1){let p=!1,x=0;for(let b=0,_=d.length;b<_;b++)h[b]=[];for(let b=0,_=d.length;b<_;b++){const C=f[b];for(let M=0;M<C.length;M++){const T=C[M];let D=!0;for(let z=0;z<d.length;z++)n(T.p,d[z].p)&&(b!==z&&x++,D?(D=!1,h[z].push(T)):p=!0);D&&h[b].push(T)}}x>0&&p===!1&&(f=h)}let g;for(let p=0,x=d.length;p<x;p++){c=d[p].s,u.push(c),g=f[p];for(let b=0,_=g.length;b<_;b++)c.holes.push(g[b].h)}return u}}class nS extends Ci{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class iS extends Jt{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);const sS=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:xp,AddEquation:as,AddOperation:mp,AdditiveAnimationBlendMode:sh,AdditiveBlending:bn,AgXToneMapping:yp,AlphaFormat:Qu,AlwaysCompare:Fp,AlwaysDepth:ac,AlwaysStencilFunc:Pu,AmbientLight:Cm,AnimationAction:km,AnimationClip:Vr,AnimationLoader:rM,AnimationMixer:LM,AnimationObjectGroup:PM,AnimationUtils:tM,ArcCurve:im,ArrayCamera:Qp,ArrowHelper:$M,AttachedBindMode:Cu,Audio:Om,AudioAnalyser:_M,AudioContext:Dh,AudioListener:vM,AudioLoader:pM,AxesHelper:eS,BackSide:un,BasicDepthPacking:Rp,BasicShadowMap:ig,BatchedMesh:nm,Bone:ll,BooleanKeyframeTrack:nr,Box2:BM,Box3:dn,Box3Helper:ZM,BoxGeometry:fs,BoxHelper:JM,BufferAttribute:it,BufferGeometry:et,BufferGeometryLoader:Nm,ByteType:Ku,Cache:Bi,Camera:sl,CameraHelper:KM,CanvasTexture:xh,CapsuleGeometry:fl,CatmullRomCurve3:sm,CineonToneMapping:bp,CircleGeometry:$a,ClampToEdgeWrapping:Xn,Clock:Wa,Color:oe,ColorKeyframeTrack:Rh,ColorManagement:St,CompressedArrayTexture:wy,CompressedCubeTexture:Ay,CompressedTexture:hl,CompressedTextureLoader:aM,ConeGeometry:pl,ConstantAlphaFactor:dp,ConstantColorFactor:up,Controls:nS,CubeCamera:Wp,CubeReflectionMapping:Hi,CubeRefractionMapping:ls,CubeTexture:Ya,CubeTextureLoader:oM,CubeUVReflectionMapping:Xr,CubicBezierCurve:yh,CubicBezierCurve3:rm,CubicInterpolant:Sm,CullFaceBack:Tu,CullFaceFront:Kf,CullFaceFrontBack:ng,CullFaceNone:Yf,Curve:pi,CurvePath:om,CustomBlending:Jf,CustomToneMapping:_p,CylinderGeometry:ps,Cylindrical:kM,Data3DTexture:ch,DataArrayTexture:nl,DataTexture:di,DataTextureLoader:cM,DataUtils:f0,DecrementStencilOp:pg,DecrementWrapStencilOp:gg,DefaultLoadingManager:Tm,DepthFormat:Vs,DepthStencilFormat:Ks,DepthTexture:dh,DetachedBindMode:Sp,DirectionalLight:Va,DirectionalLightHelper:YM,DiscreteInterpolant:wm,DisplayP3ColorSpace:tl,DodecahedronGeometry:ml,DoubleSide:Fn,DstAlphaFactor:rp,DstColorFactor:op,DynamicCopyUsage:Pg,DynamicDrawUsage:Iu,DynamicReadUsage:Eg,EdgesGeometry:cm,EllipseCurve:dl,EqualCompare:Dp,EqualDepth:cc,EqualStencilFunc:_g,EquirectangularReflectionMapping:js,EquirectangularRefractionMapping:Ra,Euler:Yn,EventDispatcher:Ci,ExtrudeGeometry:vl,FileLoader:fi,Float16BufferAttribute:x0,Float32BufferAttribute:Be,FloatType:kn,Fog:ol,FogExp2:al,FramebufferTexture:Sy,FrontSide:Ai,Frustum:Ka,GLBufferAttribute:OM,GLSL1:Lg,GLSL3:Lu,GreaterCompare:Np,GreaterDepth:uc,GreaterEqualCompare:Op,GreaterEqualDepth:lc,GreaterEqualStencilFunc:wg,GreaterStencilFunc:Mg,GridHelper:qM,Group:Cn,HalfFloatType:Bn,HemisphereLight:Rm,HemisphereLightHelper:XM,IcosahedronGeometry:bl,ImageBitmapLoader:Um,ImageLoader:Ga,ImageUtils:zp,IncrementStencilOp:fg,IncrementWrapStencilOp:mg,InstancedBufferAttribute:Js,InstancedBufferGeometry:Dm,InstancedInterleavedBuffer:UM,InstancedMesh:vh,Int16BufferAttribute:v0,Int32BufferAttribute:b0,Int8BufferAttribute:p0,IntType:Yc,InterleavedBuffer:Ja,InterleavedBufferAttribute:us,Interpolant:Kr,InterpolateDiscrete:Br,InterpolateLinear:zr,InterpolateSmooth:Qo,InvertStencilOp:vg,KeepStencilOp:Ls,KeyframeTrack:mi,LOD:tm,LatheGeometry:Qa,Layers:il,LessCompare:Lp,LessDepth:oc,LessEqualCompare:ah,LessEqualDepth:qs,LessEqualStencilFunc:yg,LessStencilFunc:xg,Light:gs,LightProbe:Lm,Line:Wi,Line3:zM,LineBasicMaterial:_n,LineCurve:Mh,LineCurve3:am,LineDashedMaterial:_m,LineLoop:bh,LineSegments:ti,LinearDisplayP3ColorSpace:ja,LinearFilter:Rt,LinearInterpolant:Eh,LinearMipMapLinearFilter:og,LinearMipMapNearestFilter:ag,LinearMipmapLinearFilter:qn,LinearMipmapNearestFilter:Lr,LinearSRGBColorSpace:qt,LinearToneMapping:gp,LinearTransfer:Pa,Loader:Pn,LoaderUtils:cs,LoadingManager:Ch,LoopOnce:wp,LoopPingPong:Tp,LoopRepeat:Ap,LuminanceAlphaFormat:th,LuminanceFormat:eh,MOUSE:eg,Material:Zt,MaterialLoader:wl,MathUtils:ln,Matrix2:Fh,Matrix3:ht,Matrix4:Xe,MaxEquation:ep,Mesh:wt,MeshBasicMaterial:sn,MeshDepthMaterial:fh,MeshDistanceMaterial:ph,MeshLambertMaterial:bm,MeshMatcapMaterial:xm,MeshNormalMaterial:vm,MeshPhongMaterial:mm,MeshPhysicalMaterial:ni,MeshStandardMaterial:Yr,MeshToonMaterial:gm,MinEquation:$f,MirroredRepeatWrapping:Fr,MixOperation:pp,MultiplyBlending:Ru,MultiplyOperation:Xa,NearestFilter:Kt,NearestMipMapLinearFilter:rg,NearestMipMapNearestFilter:sg,NearestMipmapLinearFilter:ks,NearestMipmapNearestFilter:jc,NeutralToneMapping:Mp,NeverCompare:Ip,NeverDepth:rc,NeverStencilFunc:bg,NoBlending:Si,NoColorSpace:yi,NoToneMapping:zi,NormalAnimationBlendMode:el,NormalBlending:os,NotEqualCompare:Up,NotEqualDepth:hc,NotEqualStencilFunc:Sg,NumberKeyframeTrack:Qs,Object3D:_t,ObjectLoader:dM,ObjectSpaceNormalMap:Pp,OctahedronGeometry:eo,OneFactor:np,OneMinusConstantAlphaFactor:fp,OneMinusConstantColorFactor:hp,OneMinusDstAlphaFactor:ap,OneMinusDstColorFactor:cp,OneMinusSrcAlphaFactor:sc,OneMinusSrcColorFactor:sp,OrthographicCamera:tr,P3Primaries:La,PCFShadowMap:ju,PCFSoftShadowMap:Yu,PMREMGenerator:Bc,Path:ka,PerspectiveCamera:Xt,Plane:_i,PlaneGeometry:Vi,PlaneHelper:QM,PointLight:Lh,PointLightHelper:VM,Points:Ri,PointsMaterial:ul,PolarGridHelper:jM,PolyhedronGeometry:ms,PositionalAudio:xM,PropertyBinding:Mt,PropertyMixer:Fm,QuadraticBezierCurve:Sh,QuadraticBezierCurve3:wh,Quaternion:hn,QuaternionKeyframeTrack:$s,QuaternionLinearInterpolant:Am,RED_GREEN_RGTC2_Format:Oc,RED_RGTC1_Format:ih,REVISION:Xc,RGBADepthPacking:Cp,RGBAFormat:xn,RGBAIntegerFormat:$c,RGBA_ASTC_10x10_Format:Pc,RGBA_ASTC_10x5_Format:Ec,RGBA_ASTC_10x6_Format:Rc,RGBA_ASTC_10x8_Format:Cc,RGBA_ASTC_12x10_Format:Ic,RGBA_ASTC_12x12_Format:Lc,RGBA_ASTC_4x4_Format:xc,RGBA_ASTC_5x4_Format:_c,RGBA_ASTC_5x5_Format:yc,RGBA_ASTC_6x5_Format:Mc,RGBA_ASTC_6x6_Format:Sc,RGBA_ASTC_8x5_Format:wc,RGBA_ASTC_8x6_Format:Ac,RGBA_ASTC_8x8_Format:Tc,RGBA_BPTC_Format:Sa,RGBA_ETC2_EAC_Format:bc,RGBA_PVRTC_2BPPV1_Format:mc,RGBA_PVRTC_4BPPV1_Format:pc,RGBA_S3TC_DXT1_Format:_a,RGBA_S3TC_DXT3_Format:ya,RGBA_S3TC_DXT5_Format:Ma,RGBDepthPacking:lg,RGBFormat:$u,RGBIntegerFormat:cg,RGB_BPTC_SIGNED_Format:Dc,RGB_BPTC_UNSIGNED_Format:Nc,RGB_ETC1_Format:gc,RGB_ETC2_Format:vc,RGB_PVRTC_2BPPV1_Format:fc,RGB_PVRTC_4BPPV1_Format:dc,RGB_S3TC_DXT1_Format:xa,RGDepthPacking:ug,RGFormat:nh,RGIntegerFormat:Qc,RawShaderMaterial:pm,Ray:qr,Raycaster:Bm,Rec709Primaries:Ia,RectAreaLight:Pm,RedFormat:Zc,RedIntegerFormat:qa,ReinhardToneMapping:vp,RenderTarget:Hp,RepeatWrapping:Ti,ReplaceStencilOp:dg,ReverseSubtractEquation:Qf,RingGeometry:to,SIGNED_RED_GREEN_RGTC2_Format:Fc,SIGNED_RED_RGTC1_Format:Uc,SRGBColorSpace:Yt,SRGBTransfer:Pt,Scene:Fa,ShaderChunk:ft,ShaderLib:hi,ShaderMaterial:At,ShadowMaterial:fm,Shape:Xs,ShapeGeometry:xl,ShapePath:tS,ShapeUtils:wi,ShortType:Ju,Skeleton:Za,SkeletonHelper:GM,SkinnedMesh:gh,Source:Hs,Sphere:fn,SphereGeometry:hs,Spherical:FM,SphericalHarmonics3:Im,SplineCurve:Ah,SpotLight:Ih,SpotLightHelper:HM,Sprite:mh,SpriteMaterial:cl,SrcAlphaFactor:ic,SrcAlphaSaturateFactor:lp,SrcColorFactor:ip,StaticCopyUsage:Cg,StaticDrawUsage:Da,StaticReadUsage:Tg,StereoCamera:mM,StreamCopyUsage:Ig,StreamDrawUsage:Ag,StreamReadUsage:Rg,StringKeyframeTrack:ir,SubtractEquation:Zf,SubtractiveBlending:Eu,TOUCH:tg,TangentSpaceNormalMap:ds,TetrahedronGeometry:_l,Texture:Nt,TextureLoader:Em,TextureUtils:ny,TorusGeometry:yl,TorusKnotGeometry:Ml,Triangle:Rn,TriangleFanDrawMode:kc,TriangleStripDrawMode:rh,TrianglesDrawMode:Ep,TubeGeometry:Sl,UVMapping:qc,Uint16BufferAttribute:lh,Uint32BufferAttribute:uh,Uint8BufferAttribute:m0,Uint8ClampedBufferAttribute:g0,Uniform:Oh,UniformsGroup:NM,UniformsLib:Ie,UniformsUtils:Oa,UnsignedByteType:Ei,UnsignedInt248Type:Ys,UnsignedInt5999Type:Zu,UnsignedIntType:Gi,UnsignedShort4444Type:Kc,UnsignedShort5551Type:Jc,UnsignedShortType:kr,VSMShadowMap:bi,Vector2:$,Vector3:E,Vector4:bt,VectorKeyframeTrack:er,VideoTexture:My,WebGL3DRenderTarget:i0,WebGLArrayRenderTarget:n0,WebGLCoordinateSystem:Mi,WebGLCubeRenderTarget:Xp,WebGLMultipleRenderTargets:iS,WebGLRenderTarget:Jt,WebGLRenderer:$p,WebGLUtils:Zp,WebGPUCoordinateSystem:Na,WireframeGeometry:dm,WrapAroundEnding:Ca,ZeroCurvatureEnding:Bs,ZeroFactor:tp,ZeroSlopeEnding:zs,ZeroStencilOp:hg,createCanvasElement:Bp},Symbol.toStringTag,{value:"Module"})),kh=[{dx:.8,dz:.6,k:.2,s:1,a:.2},{dx:-.42,dz:.91,k:.36,s:1.5,a:.12},{dx:.95,dz:-.31,k:.75,s:2.3,a:.06},{dx:.2,dz:-.98,k:1.3,s:3.1,a:.025}];function Uf(r,e,t,n){let i=0;for(const s of kh)i+=s.a*Math.sin((s.dx*r+s.dz*e)*s.k+t*s.s);return i*n}function rS(r,e,t,n){let i=0,s=0;for(const a of kh){const o=a.a*a.k*Math.cos((a.dx*r+a.dz*e)*a.k+t*a.s);i+=o*a.dx,s+=o*a.dz}return[i*n,s*n]}const aS=`
vec3 waveH(vec2 p, float t, float amp) {
    float h = 0.0; float sx = 0.0; float sz = 0.0; float ph; float c;
    ${kh.map(r=>`
    ph = (${r.dx.toFixed(3)} * p.x + ${r.dz.toFixed(3)} * p.y) * ${r.k.toFixed(3)} + t * ${r.s.toFixed(3)};
    h += ${r.a.toFixed(3)} * sin(ph);
    c = ${(r.a*r.k).toFixed(4)} * cos(ph);
    sx += c * ${r.dx.toFixed(3)}; sz += c * ${r.dz.toFixed(3)};`).join("")}
    return vec3(h, sx, sz) * amp;
}
`,oS=512,cS=256,Fs=6371e3,Vc=6471e3,Nr=[58e-7,135e-7,331e-7],Ur=2e-6,tc=[65e-8,1881e-9,85e-9],zu=8e3,Hu=1200,_u=.758,Er=22,Gu=new E(.35,.34,.87).normalize(),lS=`
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
`,Ea=`
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
`;function uS(r){const e=ln.degToRad(r),t=[Math.cos(e),Math.sin(e)],n=[0,Fs+20],i=2*(t[0]*n[0]+t[1]*n[1]),s=n[0]*n[0]+n[1]*n[1]-Vc*Vc,a=(-i+Math.sqrt(i*i-4*s))/2,o=48,c=a/o;let u=0,l=0,h=0;for(let d=0;d<o;d++){const f=(d+.5)*c,m=n[0]+t[0]*f,v=n[1]+t[1]*f,g=Math.hypot(m,v)-Fs;if(g<0)return null;u+=Math.exp(-g/zu)*c,l+=Math.exp(-g/Hu)*c,h+=Math.max(0,1-Math.abs(g-25e3)/15e3)*c}return[u,l,h]}function hS(r,e=new oe){let t=0,n=0,i=0;const s=5;for(let a=0;a<s;a++){const o=uS(r+((a+.5)/s-.5)*.53);o&&(t+=Math.exp(-(Ur*1.1*o[1]+Nr[0]*o[0]+tc[0]*o[2]))/s,n+=Math.exp(-(Ur*1.1*o[1]+Nr[1]*o[0]+tc[1]*o[2]))/s,i+=Math.exp(-(Ur*1.1*o[1]+Nr[2]*o[0]+tc[2]*o[2]))/s)}return e.setRGB(t,n,i)}function yu(r,e,t,n=[0,0,0]){const i=[0,Fs+20,0],s=(M,T,D)=>{const z=T[0]*T[0]+T[1]*T[1]+T[2]*T[2],y=2*(T[0]*M[0]+T[1]*M[1]+T[2]*M[2]),S=M[0]*M[0]+M[1]*M[1]+M[2]*M[2]-D*D,F=y*y-4*z*S;return F<0?[1e5,-1e5]:[(-y-Math.sqrt(F))/(2*z),(-y+Math.sqrt(F))/(2*z)]},a=Math.hypot(r[0],r[1],r[2]);r=[r[0]/a,r[1]/a,r[2]/a];const o=s(i,r,Vc),c=s(i,r,Fs);c[0]>0&&(o[1]=Math.min(o[1],c[0]));const u=16,l=6,h=Math.max(o[0],0),d=(o[1]-h)/u;let f=0,m=0,v=0;const g=M=>Math.max(0,1-Math.abs(M-25e3)/15e3),p=[0,0,0,0,0,0],x=r[0]*e[0]+r[1]*e[1]+r[2]*e[2],b=_u*_u,_=3/(16*Math.PI)*(1+x*x),C=3/(8*Math.PI)*((1-b)*(x*x+1))/(Math.pow(1+b-2*x*_u,1.5)*(2+b));for(let M=0;M<u;M++){const T=h+d*(M+.5),D=[i[0]+r[0]*T,i[1]+r[1]*T,i[2]+r[2]*T],z=Math.hypot(D[0],D[1],D[2])-Fs,y=Math.exp(-z/zu)*d,S=Math.exp(-z/Hu)*d;f+=y,m+=S,v+=g(z)*d;const F=s(D,e,Fs);if(F[0]>0&&F[0]<1e5)continue;const O=s(D,e,Vc)[1]/l;let B=0,q=0,H=0;for(let j=0;j<l;j++){const X=O*(j+.5),he=Math.hypot(D[0]+e[0]*X,D[1]+e[1]*X,D[2]+e[2]*X)-Fs;B+=Math.exp(-he/zu)*O,q+=Math.exp(-he/Hu)*O,H+=g(he)*O}for(let j=0;j<3;j++){const X=Math.exp(-(Ur*1.1*(m+q)+Nr[j]*(f+B)+tc[j]*(v+H)));p[j]+=y*X,p[j+3]+=S*X}}return[0,1,2].map(M=>t*(_*Nr[M]*p[M]+C*Ur*p[M+3])+n[M]*(1-Math.exp(-(Nr[M]*f+Ur*m))))}function dS(r,{lowPower:e=!1}={}){const t={elev:10,azim:180,dir:new E,sunColor:new oe,night:0,dusk:0},n=new Jt(oS,cS,{type:Bn,depthBuffer:!1,generateMipmaps:!1,minFilter:Rt,magFilter:Rt,wrapS:Ti,colorSpace:qt});n.texture.mapping=js;const i={uSun:{value:t.dir},uNight:{value:0},uMs:{value:new E},uOver:{value:0}},s=new At({uniforms:i,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
            ${lS}
            ${Ea}
            uniform vec3 uSun; uniform float uNight; uniform float uOver;
            varying vec2 vUv;
            void main() {
                vec3 d = panoDir(vUv);
                vec3 dd = normalize(vec3(d.x, max(d.y, 0.0015), d.z));
                vec3 col = atmosphere(dd, uSun, ${Er.toFixed(1)});
                // overcast: the cloud deck spreads the light evenly, three times brighter overhead than at the horizon
                if (uOver > 0.0) {
                    vec3 zen = atmosphere(vec3(0.0, 1.0, 0.0), uSun, ${Er.toFixed(1)});
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
        `}),a=new Fa;a.add(new wt(new Vi(2,2),s));const o=new tr(-1,1,1,-1,0,1),c=new Bc(r);let u=null;const l=new Jt(512,256,{type:Bn,depthBuffer:!1,generateMipmaps:!1,minFilter:Rt,magFilter:Rt,colorSpace:qt});l.texture.mapping=js;const h=new At({uniforms:{uPano:{value:n.texture}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
            ${Ea}
            uniform sampler2D uPano; varying vec2 vUv;
            void main() {
                // three.js equirect: u from atan(dir.z, dir.x), v from asin(dir.y)
                float phi = (vUv.x - 0.5) * 6.283185307;
                float th = (vUv.y - 0.5) * 3.14159265;
                vec3 d = vec3(cos(th) * cos(phi), sin(th), cos(th) * sin(phi));
                gl_FragColor = vec4(texture2D(uPano, panoUV(d)).rgb, 1.0);
            }
        `}),d=new Fa;d.add(new wt(new Vi(2,2),h));const f={uPano:{value:n.texture},uSun:{value:t.dir},uSunCol:{value:new oe},uTime:{value:0},uNight:{value:0},uCloud:{value:.56},uAmbient:{value:new oe},uDim:{value:1},uMoon:{value:Gu.clone()},uSunVis:{value:1}},m=new At({uniforms:f,side:un,depthWrite:!1,fog:!1,vertexShader:`
            varying vec3 vDir;
            void main() {
                vDir = normalize(position);
                vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                gl_Position = p.xyww; // on the far plane
            }
        `,fragmentShader:`
            ${Ea}
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
                    vec3 lit = uSunCol * ${Er.toFixed(1)} * (0.018 + 0.06 * fwd) * (1.0 - thick * 0.55);
                    vec3 cloud = uAmbient * (0.9 - thick * 0.35) + lit;
                    col = mix(col, cloud, cover * fade * 0.92);
                }
                gl_FragColor = vec4(col * uDim, 1.0);
            }
        `}),v=new wt(new hs(1,64,32),m);v.scale.setScalar(4e4),v.frustumCulled=!1,v.renderOrder=-10;const g=(()=>{const O=e?900:2400,B=new Float32Array(O*3),q=new Float32Array(O);for(let he=0;he<O;he++){const ye=Math.random()*Math.PI*2,fe=Math.pow(Math.random(),.7)*.98+.02,Ze=Math.sqrt(1-fe*fe);B.set([Math.cos(ye)*Ze*38e3,fe*38e3,Math.sin(ye)*Ze*38e3],he*3),q[he]=Math.pow(Math.random(),3)}const H=new et;H.setAttribute("position",new it(B,3)),H.setAttribute("aSize",new it(q,1));const j=new At({transparent:!0,depthWrite:!1,blending:bn,uniforms:{uTime:{value:0},uOpacity:{value:0},uPx:{value:1}},vertexShader:`
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
            `}),X=new Ri(H,j);return X.frustumCulled=!1,X.renderOrder=-9,X})(),p=(()=>{const O=new Cn,B=[[3e4,-1.45,2.3,700,8e3,0],[25e3,-.35,1.7,900,6500,3.7],[34e3,.55,1.3,800,7500,8.1]];for(const[q,H,j,X,he,ye]of B){const fe=new ps(q,q,he,e?96:192,1,!0,H,j);fe.translate(0,X+he/2,0);const Ze=new At({transparent:!0,depthWrite:!1,side:Fn,blending:bn,uniforms:{uTime:{value:0},uOpacity:{value:0},uSeed:{value:ye}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
                `}),ct=new wt(fe,Ze);ct.frustumCulled=!1,ct.renderOrder=-8,O.add(ct)}return O})(),x=new Cn;x.add(v,g,p);const b=new oe;let _=null,C=null,M=[0,0,0];function T(O,B=t.azim){t.elev=O,t.azim=B;const q=ln.degToRad(O),H=ln.degToRad(B);t.dir.set(Math.cos(q)*Math.cos(H),Math.sin(q),Math.cos(q)*Math.sin(H)),hS(O,t.sunColor),t.night=ln.smoothstep(-O,1,10),t.dusk=1-ln.smoothstep(O,2,22);const j=yu([0,1,0],[t.dir.x,t.dir.y,t.dir.z],Er);M=[j[0]*4,j[1]*4,j[2]*4],i.uMs.value.set(M[0],M[1],M[2]),f.uSunCol.value.copy(t.sunColor),f.uNight.value=t.night,i.uNight.value=t.night,g.material.uniforms.uOpacity.value=ln.smoothstep(-O,3,11)}let D=0,z=0;function y(O){D=O,i.uOver.value=O}function S(O=!1){const B=`${t.elev.toFixed(2)}|${t.azim.toFixed(1)}|${D.toFixed(2)}`;if(B===_&&!O)return!1;_=B;const q=r.getRenderTarget();if(r.setRenderTarget(n),r.render(a,o),r.setRenderTarget(q),F(0,1,0,b),f.uAmbient.value.copy(b).multiplyScalar(1.4),O||C===null||Math.abs(t.elev-C)>.6||Math.abs(D-z)>.04){C=t.elev,z=D;const H=u;return r.setRenderTarget(l),r.render(d,o),r.setRenderTarget(q),u=c.fromEquirectangular(l.texture),H&&H.dispose(),!0}return!1}function F(O,B,q,H=new oe){const j=yu([O,Math.max(B,.0015),q],[t.dir.x,t.dir.y,t.dir.z],Er,M),X=t.night*(.4+.6*ln.smoothstep(B,-.1,.6));if(H.setRGB(j[0]+.0045*X,j[1]+.007*X,j[2]+.015*X),D>0){const he=yu([0,1,0],[t.dir.x,t.dir.y,t.dir.z],Er,M),fe=((he[0]*.2126+he[1]*.7152+he[2]*.0722)*1.15+4e-4)*(1+2*Math.max(B,0))/3;H.lerp(new oe(.93*fe,.96*fe,fe),D)}return H}return{group:x,sky:v,stars:g,state:t,uniforms:f,pano:n,get env(){return u?u.texture:null},ambient:b,skyAt:F,setSun:T,setOvercast:y,bake:S,update(O){f.uTime.value=O,g.material.uniforms.uTime.value=O;const B=1-ln.smoothstep(D,.2,.7);g.material.uniforms.uOpacity.value=ln.smoothstep(-t.elev,3,11)*B,g.visible=g.material.uniforms.uOpacity.value>.005;const q=ln.smoothstep(t.night,.55,.95)*B;p.visible=q>.01;for(const H of p.children)H.material.uniforms.uTime.value=O,H.material.uniforms.uOpacity.value=q}}}const ki={abyss:new oe("#05080c"),deep:new oe("#080d15"),horizon:new oe("#141a2d"),violet:new oe("#7c469c"),lavender:new oe("#d6baec"),cardinal:new oe("#f2c230"),moon:new oe("#eef3ff"),steel:new oe("#3f5678"),ice:new oe("#c9d7ee")};new E(-.55,.32,-.77).normalize();const Vu=40,Wc=12;function fS(r){return()=>{r|=0,r=r+1831565813|0;let e=Math.imul(r^r>>>15,1|r);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function pS(r=256){const e=fS(11),t=[];for(let h=0;h<72;h++){const d=.5+(e()-.5)*2.4,f=2+Math.pow(e(),1.7)*44,m=Math.round(Math.cos(d)*f),v=Math.round(Math.sin(d)*f);if(!m&&!v)continue;const g=Math.hypot(m,v);t.push({kx:m,ky:v,a:1/Math.pow(g,1.35),ph:e()*Math.PI*2})}const n=new Float32Array(r*r),i=new Float32Array(r*r),s=new Float32Array(r*r);let a=0,o=0;const c=Math.PI*2;for(let h=0;h<r;h++)for(let d=0;d<r;d++){let f=0,m=0,v=0;for(const p of t){const x=c*(p.kx*d+p.ky*h)/r+p.ph,b=Math.cos(x);f+=p.a*p.kx*b,m+=p.a*p.ky*b,v+=p.a*Math.sin(x)}const g=h*r+d;n[g]=f,i[g]=m,s[g]=v,a=Math.max(a,Math.abs(f),Math.abs(m)),o=Math.max(o,Math.abs(v))}const u=new Uint8Array(r*r*4);for(let h=0;h<r*r;h++)u[h*4]=Math.round(n[h]/a*127.5+127.5),u[h*4+1]=Math.round(i[h]/a*127.5+127.5),u[h*4+2]=Math.round(s[h]/o*127.5+127.5),u[h*4+3]=255;const l=new di(u,r,r,xn);return l.wrapS=l.wrapT=Ti,l.magFilter=Rt,l.minFilter=qn,l.generateMipmaps=!0,l.anisotropy=8,l.colorSpace=yi,l.needsUpdate=!0,l}function mS(r,e,t){const i=Math.pow(t/.35,1/r),s=[0,0,0],a=[];for(let c=1;c<=r;c++){const u=.35*Math.pow(i,c-1);for(let l=0;l<e;l++){const h=l/e*Math.PI*2;s.push(Math.cos(h)*u,0,Math.sin(h)*u)}}for(let c=0;c<e;c++)a.push(0,1+(c+1)%e,1+c);for(let c=1;c<r;c++){const u=1+(c-1)*e,l=1+c*e;for(let h=0;h<e;h++){const d=(h+1)%e;a.push(u+h,u+d,l+h,u+d,l+d,l+h)}}const o=new et;return o.setAttribute("position",new Be(s,3)),o.setIndex(a),o}function gS({lowPower:r=!1}={}){const e=mS(r?150:210,r?160:256,36e3),t=[];for(let o=0;o<Vu;o++)t.push(new bt(0,0,-999,0));const n=[];for(let o=0;o<Wc;o++)n.push(new bt(0,0,-999,0));const i={uTime:{value:0},uAmp:{value:1},uCenter:{value:new $},uCam:{value:new E},uWaves:{value:pS(r?256:512)},uPano:{value:null},uReflect:{value:null},uReflectMatrix:{value:new Xe},uReflectOn:{value:1},uSun:{value:new E(0,1,0)},uSunCol:{value:new oe(1,1,1)},uSunPower:{value:22},uBody:{value:new oe(.004,.018,.026)},uNight:{value:0},uFog:{value:12e4},uDim:{value:1},uBoat:{value:new $},uBoatDir:{value:new $(1,0)},uBoatSpeed:{value:0},uBoatOn:{value:1},uWake:{value:t},uRipple:{value:n},uSweep:{value:1},uSweepAngle:{value:0},uLidar:{value:new oe("#9fd4ff")},uGlit:{value:1},uRain:{value:0},uChop:{value:1}},s=new At({uniforms:i,vertexShader:`
            uniform float uTime; uniform float uAmp; uniform vec2 uCenter; uniform vec3 uCam;
            varying vec3 vPos; varying vec2 vSlope; varying float vH;
            ${aS}
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
            ${Ea}
            #define WAKE_N ${Vu}
            #define RIPPLE_N ${Wc}
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
                    // far off the waves blur the mirror sideways more than up, and never up past the shore
                    ruv.y = min(ruv.y, rc.y / rc.w + 0.5 / float(textureSize(uReflect, 0).y));
                    ruv = clamp(ruv, 0.001, 0.999);
                    // a few taps: the mirror is never perfectly sharp, and its edges don't show the pixels
                    // (weighted by coverage: where nothing was drawn the colour means nothing)
                    // (only sideways and downwards: just above the mirrored shoreline the mirror holds
                    // nothing but sky, and taps reaching up there drew a bright line where land meets water)
                    vec2 px = 1.3 / vec2(textureSize(uReflect, 0));
                    vec4 m0 = texture2D(uReflect, ruv);
                    vec4 m1 = texture2D(uReflect, ruv + vec2(px.x, 0.0));
                    vec4 m2 = texture2D(uReflect, ruv + vec2(-px.x, 0.0));
                    vec4 m3 = texture2D(uReflect, ruv + vec2(px.x * 0.5, -px.y));
                    vec4 m4 = texture2D(uReflect, ruv + vec2(-px.x * 0.5, -px.y * 1.6));
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
                col = mix(col, air, fog * mix(1.0, 0.92, clamp(uFog / 120000.0, 0.0, 1.0)));

                gl_FragColor = vec4(col * uDim, 1.0);
            }
        `}),a=new wt(e,s);return a.frustumCulled=!1,a.renderOrder=-5,a}function vS(){const r=new $a(48,24,-.16,.32);r.rotateX(-Math.PI/2);const e=new At({transparent:!0,depthWrite:!1,side:Fn,blending:bn,uniforms:{uOpacity:{value:1},uColor:{value:new oe("#9fd4ff")}},vertexShader:"varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
            uniform float uOpacity; uniform vec3 uColor; varying vec2 vP;
            void main(){ float r = length(vP); float a = (1.0 - r / 48.0); gl_FragColor = vec4(uColor, a * a * 0.07 * uOpacity); }
        `});return new wt(r,e)}const nc={uPano:{value:null},uFog:{value:12e4},uNight:{value:0}};function ww(r,{windows:e=!1,terrain:t=!1}={}){const n=e==="facade";return r.onBeforeCompile=i=>{Object.assign(i.uniforms,nc),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
                ${Ea}
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
                        // and far off, darker stands of spruce and lighter birch and bog in big patches
                        float kf = smoothstep(30000.0, 4000.0, camD) * (1.0 - k) * smoothstep(2.0, 12.0, vAirPos.y);
                        diffuseColor.rgb *= mix(1.0, 0.6 + 0.8 * (airNoise(q / 700.0) * 0.6 + airNoise(q / 2300.0) * 0.4), kf);
                        // grey rock where it is steep: cliffs and screes break through the forest
                        float steep = smoothstep(0.86, 0.62, vAirN.y) * smoothstep(4.0, 20.0, vAirPos.y);
                        float rocky = steep * smoothstep(0.38, 0.62, airNoise(q / 46.0) * 0.6 + airNoise(q / 12.0) * 0.4);
                        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.13, 0.125, 0.115) * (0.75 + 0.5 * airNoise(q / 6.0)), rocky * 0.85);
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
                        // (far off a window is under a pixel: then it only darkens the wall a little, no speckle)
                        float winNear = smoothstep(6000.0, 2400.0, length(vAirPos - cameraPosition));
                        float frame = step(0.24, f.x) * step(f.x, 0.78) * step(0.29, f.y) * step(f.y, 0.84) * (1.0 - win);
                        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.78, 0.78, 0.75), frame * wall * 0.6 * winNear);
                        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.035, 0.045, 0.055), win * wall * 0.85 * winNear);
                        diffuseColor.rgb *= 1.0 - wall * 0.12 * (1.0 - winNear);
                        // dark roofs close by; far off they fade towards the wall colour (no black outline on every house)
                        diffuseColor.rgb = mix(diffuseColor.rgb, mix(diffuseColor.rgb * 0.55, vec3(0.045, 0.045, 0.05), winNear), vRoof);
                    }`:"#include <emissivemap_fragment>").replace("#include <lights_fragment_end>",t?`#include <lights_fragment_end>
                    // a forest is no mirror: seen almost edge-on (far lowland) it must not shine with the bright horizon
                    reflectedLight.indirectSpecular *= 0.08;
                    reflectedLight.directSpecular *= 0.3;`:"#include <lights_fragment_end>").replace("#include <normal_fragment_maps>",t?`#include <normal_fragment_maps>
                    {
                        // the forest is bumpy: crowns and clumps catch the low sun, so the hills read as wooded, not smooth
                        vec2 q = vAirPos.xz;
                        float camD = length(vAirPos - cameraPosition);
                        float near = smoothstep(2600.0, 500.0, camD);
                        float mid = smoothstep(9000.0, 1200.0, camD);
                        // far away only the big shapes: gullies, spurs and knolls on the hillsides
                        float far = smoothstep(28000.0, 3000.0, camD);
                        float fade = smoothstep(3.0, 14.0, vAirPos.y);
                        if ((mid + far) * fade > 0.0) {
                            float e = 4.0;
                            // each size of bump about as steep as the others (weight grows with size)
                            #define AIR_CANOPY(p) (airNoise((p) / 9.0) * near + airNoise((p) / 34.0) * 3.4 * mid + airNoise((p) / 130.0) * 9.0 * mid + airNoise((p) / 480.0) * 30.0 * far + airNoise((p) / 1500.0) * 85.0 * far)
                            float h0 = AIR_CANOPY(q);
                            float hx = AIR_CANOPY(q + vec2(e, 0.0));
                            float hz = AIR_CANOPY(q + vec2(0.0, e));
                            vec3 g = vec3(h0 - hx, 0.0, h0 - hz) * (1.5 / e) * fade;
                            normal = normalize(normal + (viewMatrix * vec4(g, 0.0)).xyz);
                        }
                    }`:"#include <normal_fragment_maps>").replace("#include <fog_fragment>",`#include <fog_fragment>
                {
                    vec3 airD = vAirPos - cameraPosition;
                    float airL = length(airD);
                    vec3 airV = airD / airL;
                    vec3 air = texture2D(uPano, panoUV(normalize(vec3(airV.x, max(airV.y, 0.0) * 0.35 + 0.004, airV.z)))).rgb;
                    gl_FragColor.rgb = mix(gl_FragColor.rgb, air, 1.0 - exp(-airL / uFog));
                }`)},r.customProgramCacheKey=()=>n?"air-facade":e?"air-windows":t?"air-terrain":"air",r}function Aw(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new et;let u=0;for(let l=0;l<r.length;++l){const h=r[l];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,f,l),u+=f}}if(t){let l=0;const h=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+l);l+=r[d].attributes.position.count}c.setIndex(h)}for(const l in s){const h=Of(s[l]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,h)}for(const l in a){const h=a[l][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let d=0;d<h;++d){const f=[];for(let v=0;v<a[l].length;++v)f.push(a[l][v][d]);const m=Of(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(m)}}return c}function Of(r){let e,t,n,i=-1,s=0;for(let u=0;u<r.length;++u){const l=r[u];if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=l.gpuType),i!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=l.count*t}const a=new e(s),o=new it(a,t,n);let c=0;for(let u=0;u<r.length;++u){const l=r[u];if(l.isInterleavedBufferAttribute){const h=c/t;for(let d=0,f=l.count;d<f;d++)for(let m=0;m<t;m++){const v=l.getComponent(d,m);o.setComponent(d+h,m,v)}}else a.set(l.array,c);c+=l.count*t}return i!==void 0&&(o.gpuType=i),o}function Ff(r,e){if(e===Ep)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===kc||e===rh){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===kc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class bS extends Pn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new SS(t)}),this.register(function(t){return new wS(t)}),this.register(function(t){return new DS(t)}),this.register(function(t){return new NS(t)}),this.register(function(t){return new US(t)}),this.register(function(t){return new TS(t)}),this.register(function(t){return new ES(t)}),this.register(function(t){return new RS(t)}),this.register(function(t){return new CS(t)}),this.register(function(t){return new MS(t)}),this.register(function(t){return new PS(t)}),this.register(function(t){return new AS(t)}),this.register(function(t){return new LS(t)}),this.register(function(t){return new IS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new OS(t)}),this.register(function(t){return new FS(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const u=cs.extractUrlBase(e);a=cs.resolveURL(u,this.path)}else a=cs.extractUrlBase(e);this.manager.itemStart(e);const o=function(u){i?i(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},c=new fi(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{s.parse(u,a,function(l){t(l),s.manager.itemEnd(e)},o)}catch(l){o(l)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Hm){try{a[vt.KHR_BINARY_GLTF]=new kS(e)}catch(h){i&&i(h);return}s=JSON.parse(a[vt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new ZS(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){const h=this.pluginCallbacks[l](u);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){const h=s.extensionsUsed[l],d=s.extensionsRequired||[];switch(h){case vt.KHR_MATERIALS_UNLIT:a[h]=new yS;break;case vt.KHR_DRACO_MESH_COMPRESSION:a[h]=new BS(s,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:a[h]=new zS;break;case vt.KHR_MESH_QUANTIZATION:a[h]=new HS;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function xS(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _S{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const l=new oe(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],qt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new Va(l),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Lh(l),u.distance=h;break;case"spot":u=new Ih(l),u.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,Oi(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class yS{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return sn}extendParams(e,t,n){const i=[];e.color=new oe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],qt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Yt))}return Promise.all(i)}}class MS{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class SS{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $(o,o)}return Promise.all(s)}}class wS{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class AS{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class TS{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],qt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Yt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class ES{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class RS{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new oe().setRGB(o[0],o[1],o[2],qt),Promise.all(s)}}class CS{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class PS{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new oe().setRGB(o[0],o[1],o[2],qt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Yt)),Promise.all(s)}}class IS{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class LS{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class DS{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class NS{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class US{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class OS{constructor(e){this.name=vt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,u=i.byteLength||0,l=i.count,h=i.byteStride,d=new Uint8Array(o,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(l,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(l*h);return a.decodeGltfBuffer(new Uint8Array(f),l,h,d,i.mode,i.filter),f})})}else return null}}class FS{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==ei.TRIANGLES&&u.mode!==ei.TRIANGLE_STRIP&&u.mode!==ei.TRIANGLE_FAN&&u.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const u in a)o.push(this.parser.getDependency("accessor",a[u]).then(l=>(c[u]=l,c[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{const l=u.pop(),h=l.isGroup?l.children:[l],d=u[0].count,f=[];for(const m of h){const v=new Xe,g=new E,p=new hn,x=new E(1,1,1),b=new vh(m.geometry,m.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&x.fromBufferAttribute(c.SCALE,_),b.setMatrixAt(_,v.compose(g,p,x));for(const _ in c)if(_==="_COLOR_0"){const C=c[_];b.instanceColor=new Js(C.array,C.itemSize,C.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,c[_]);_t.prototype.copy.call(b,m),this.parser.assignFinalMaterial(b),f.push(b)}return l.isGroup?(l.clear(),l.add(...f),l):f[0]}))}}const Hm="glTF",ha=12,kf={JSON:1313821514,BIN:5130562};class kS{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ha),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ha,s=new DataView(e,ha);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===kf.JSON){const u=new Uint8Array(e,ha+a,o);this.content=n.decode(u)}else if(c===kf.BIN){const u=ha+a;this.body=e.slice(u,u+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class BS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},u={};for(const l in a){const h=Wu[l]||l.toLowerCase();o[h]=a[l]}for(const l in e.attributes){const h=Wu[l]||l.toLowerCase();if(a[l]!==void 0){const d=n.accessors[e.attributes[l]],f=Or[d.componentType];u[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(l){return new Promise(function(h,d){i.decodeDracoFile(l,function(f){for(const m in f.attributes){const v=f.attributes[m],g=c[m];g!==void 0&&(v.normalized=g)}h(f)},o,u,qt,d)})})}}class zS{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class HS{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}}class Gm extends Kr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,u=o*3,l=i-t,h=(n-t)/l,d=h*h,f=d*h,m=e*u,v=m-u,g=-2*f+3*d,p=f-d,x=1-g,b=p-d+h;for(let _=0;_!==o;_++){const C=a[v+_+o],M=a[v+_+c]*l,T=a[m+_+o],D=a[m+_]*l;s[_]=x*C+b*M+g*T+p*D}return s}}const GS=new hn;class VS extends Gm{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return GS.fromArray(s).normalize().toArray(s),s}}const ei={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bf={9728:Kt,9729:Rt,9984:jc,9985:Lr,9986:ks,9987:qn},zf={33071:Xn,33648:Fr,10497:Ti},Mu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},WS={CUBICSPLINE:void 0,LINEAR:zr,STEP:Br},Su={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function XS(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Yr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ai})),r.DefaultMaterial}function Is(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Oi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qS(r,e,t){let n=!1,i=!1,s=!1;for(let u=0,l=e.length;u<l;u++){const h=e[u];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let u=0,l=e.length;u<l;u++){const h=e[u];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(u){const l=u[0],h=u[1],d=u[2];return n&&(r.morphAttributes.position=l),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function jS(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function YS(r){let e;const t=r.extensions&&r.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wu(t.attributes):e=r.indices+":"+wu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+wu(r.targets[n]);return e}function wu(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Xu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function KS(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const JS=new Xe;class ZS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator!="undefined"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||s&&a<98?this.textureLoader=new Em(this.options.manager):this.textureLoader=new Um(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Is(s,o,i),Oi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[u,l]of a.children.entries())s(l,o.children[u])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(cs.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Mu[i.type],o=Or[i.componentType],c=i.normalized===!0,u=new o(i.count*a);return Promise.resolve(new it(u,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=Mu[i.type],u=Or[i.componentType],l=u.BYTES_PER_ELEMENT,h=l*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let v,g;if(f&&f!==h){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(x);b||(v=new u(o,p*f,i.count*f/l),b=new Ja(v,f/l),t.cache.add(x,b)),g=new us(b,c,d%f/l,m)}else o===null?v=new u(i.count*c):v=new u(o,d,i.count*c),g=new it(v,c,m);if(i.sparse!==void 0){const p=Mu.SCALAR,x=Or[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,C=new x(a[1],b,i.sparse.count*p),M=new u(a[2],_,i.sparse.count*c);o!==null&&(g=new it(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,D=C.length;T<D;T++){const z=C[T];if(g.setX(z,M[T*c]),c>=2&&g.setY(z,M[T*c+1]),c>=3&&g.setZ(z,M[T*c+2]),c>=4&&g.setW(z,M[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,n).then(function(l){l.flipY=!1,l.name=a.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return l.magFilter=Bf[d.magFilter]||Rt,l.minFilter=Bf[d.minFilter]||qn,l.wrapS=zf[d.wrapS]||Ti,l.wrapT=zf[d.wrapT]||Ti,i.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){u=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const l=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){const g=new Nt(v);g.needsUpdate=!0,d(g)}),t.load(cs.resolveURL(h,s.path),m,void 0,f)})}).then(function(h){return u===!0&&o.revokeObjectURL(c),Oi(h,a),h.userData.mimeType=a.mimeType||KS(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=l,l}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[vt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ul,Zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new _n,Zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Yr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},u=[];if(c[vt.KHR_MATERIALS_UNLIT]){const h=i[vt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),u.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new oe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],qt),o.opacity=d[3]}h.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",h.baseColorTexture,Yt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Fn);const l=s.alphaMode||Su.OPAQUE;if(l===Su.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Su.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==sn&&(u.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new $(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==sn&&(u.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==sn){const h=s.emissiveFactor;o.emissive=new oe().setRGB(h[0],h[1],h[2],qt)}return s.emissiveTexture!==void 0&&a!==sn&&u.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Yt)),Promise.all(u).then(function(){const h=new a(o);return s.name&&(h.name=s.name),Oi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Is(i,h,s),h})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Hf(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o],l=YS(u),h=i[l];if(h)a.push(h.promise);else{let d;u.extensions&&u.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?d=s(u):d=Hf(new et,u,t),i[l]={primitive:u,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,u=a.length;c<u;c++){const l=a[c].material===void 0?XS(this.cache):this.getDependency("material",a[c].material);o.push(l)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const u=c.slice(0,c.length-1),l=c[c.length-1],h=[];for(let f=0,m=l.length;f<m;f++){const v=l[f],g=a[f];let p;const x=u[f];if(g.mode===ei.TRIANGLES||g.mode===ei.TRIANGLE_STRIP||g.mode===ei.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new gh(v,x):new wt(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===ei.TRIANGLE_STRIP?p.geometry=Ff(p.geometry,rh):g.mode===ei.TRIANGLE_FAN&&(p.geometry=Ff(p.geometry,kc));else if(g.mode===ei.LINES)p=new ti(v,x);else if(g.mode===ei.LINE_STRIP)p=new Wi(v,x);else if(g.mode===ei.LINE_LOOP)p=new bh(v,x);else if(g.mode===ei.POINTS)p=new Ri(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&jS(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Oi(p,s),g.extensions&&Is(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&Is(i,h[0],s),h[0];const d=new Cn;s.extensions&&Is(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(ln.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new tr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Oi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let u=0,l=a.length;u<l;u++){const h=a[u];if(h){o.push(h);const d=new Xe;s!==null&&d.fromArray(s.array,u*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Za(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],u=[],l=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],m=i.samplers[f.sampler],v=f.target,g=v.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),u.push(m),l.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(u),Promise.all(l)]).then(function(h){const d=h[0],f=h[1],m=h[2],v=h[3],g=h[4],p=[];for(let x=0,b=d.length;x<b;x++){const _=d[x],C=f[x],M=m[x],T=v[x],D=g[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const z=n._createAnimationTracks(_,C,M,T,D);if(z)for(let y=0;y<z.length;y++)p.push(z[y])}return new Vr(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,u=i.weights.length;c<u;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let u=0,l=o.length;u<l;u++)a.push(n.getDependency("node",o[u]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(u){const l=u[0],h=u[1],d=u[2];d!==null&&l.traverse(function(f){f.isSkinnedMesh&&f.bind(d,JS)});for(let f=0,m=h.length;f<m;f++)l.add(h[f]);return l})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(u){return i._getNodeRef(i.cameraCache,s.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),this.nodeCache[e]=Promise.all(o).then(function(u){let l;if(s.isBone===!0?l=new ll:u.length>1?l=new Cn:u.length===1?l=u[0]:l=new _t,l!==u[0])for(let h=0,d=u.length;h<d;h++)l.add(u[h]);if(s.name&&(l.userData.name=s.name,l.name=a),Oi(l,s),s.extensions&&Is(n,l,s),s.matrix!==void 0){const h=new Xe;h.fromArray(s.matrix),l.applyMatrix4(h)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Cn;n.name&&(s.name=i.createUniqueName(n.name)),Oi(s,n),n.extensions&&Is(t,s,n);const a=n.nodes||[],o=[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let l=0,h=c.length;l<h;l++)s.add(c[l]);const u=l=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof Zt||d instanceof Nt)&&h.set(d,f);return l.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=u(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];rs[s.path]===rs.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let u;switch(rs[s.path]){case rs.weights:u=Qs;break;case rs.rotation:u=$s;break;case rs.position:case rs.scale:u=er;break;default:switch(n.itemSize){case 1:u=Qs;break;case 2:case 3:default:u=er;break}break}const l=i.interpolation!==void 0?WS[i.interpolation]:zr,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const m=new u(c[d]+"."+rs[s.path],t.array,h,l);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Xu(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof $s?VS:Gm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function QS(r,e,t){const n=e.attributes,i=new dn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,u=o.max;if(c!==void 0&&u!==void 0){if(i.set(new E(c[0],c[1],c[2]),new E(u[0],u[1],u[2])),o.normalized){const l=Xu(Or[o.componentType]);i.min.multiplyScalar(l),i.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new E,c=new E;for(let u=0,l=s.length;u<l;u++){const h=s[u];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const v=Xu(Or[d.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new fn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Hf(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=Wu[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return St.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${St.workingColorSpace}" not supported.`),Oi(r,e),QS(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?qS(r,e.targets,t):r})}var $S=function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),b=0;b<p.length;++b){var _=p.charCodeAt(b);x[b]=_>96?_-97:_>64?_-39:_+4}for(var C=0,b=0;b<p.length;++b)x[C++]=x[b]<60?n[x[b]]:(x[b]-60)*64+x[++b];return x.buffer.slice(0,C)}function c(p,x,b,_,C,M){var T=s.exports.sbrk,D=b+3&-4,z=T(D*_),y=T(C.length),S=new Uint8Array(s.exports.memory.buffer);S.set(C,y);var F=p(z,b,_,y,C.length);if(F==0&&M&&M(z,D,_),x.set(S.subarray(z,z+b*_)),T(z-T(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var u={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},l={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(b){var _=b.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function m(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),b=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(b),C=0;C<p;++C)h[C]=f(_);URL.revokeObjectURL(_)}function v(p,x,b,_,C){for(var M=h[0],T=1;T<h.length;++T)h[T].pending<M.pending&&(M=h[T]);return new Promise(function(D,z){var y=new Uint8Array(b),S=d++;M.pending+=p,M.requests[S]={resolve:D,reject:z},M.object.postMessage({id:S,count:p,size:x,source:y,mode:_,filter:C},[y.buffer])})}function g(p){a.then(function(){var x=p.data;try{var b=new Uint8Array(x.count*x.size);c(s.exports[x.mode],b,x.count,x.size,x.source,s.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:b},[b.buffer])}catch(_){self.postMessage({id:x.id,count:x.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,b,_,C){c(s.exports.meshopt_decodeVertexBuffer,p,x,b,_,s.exports[u[C]])},decodeIndexBuffer:function(p,x,b,_){c(s.exports.meshopt_decodeIndexBuffer,p,x,b,_)},decodeIndexSequence:function(p,x,b,_){c(s.exports.meshopt_decodeIndexSequence,p,x,b,_)},decodeGltfBuffer:function(p,x,b,_,C,M){c(s.exports[l[C]],p,x,b,_,s.exports[u[M]])},decodeGltfBufferAsync:function(p,x,b,_,C){return h.length>0?v(p,x,b,l[_],u[C]):a.then(function(){var M=new Uint8Array(p*x);return c(s.exports[l[_]],M,p,x,b,s.exports[u[C]]),M})}}}();const Ft=new Rn,Jo=new E,Gf=new $,Vf=new $,Wf=new $;class ew{constructor(e){this.geometry=e.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.indexAttribute,t=this.positionAttribute,n=this.weightAttribute,i=e?e.count/3:t.count/3,s=new Float32Array(i);for(let c=0;c<i;c++){let u=1,l=3*c,h=3*c+1,d=3*c+2;e&&(l=e.getX(l),h=e.getX(h),d=e.getX(d)),n&&(u=n.getX(l)+n.getX(h)+n.getX(d)),Ft.a.fromBufferAttribute(t,l),Ft.b.fromBufferAttribute(t,h),Ft.c.fromBufferAttribute(t,d),u*=Ft.getArea(),s[c]=u}const a=new Float32Array(i);let o=0;for(let c=0;c<i;c++)o+=s[c],a[c]=o;return this.distribution=a,this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,n,i){const s=this.sampleFaceIndex();return this.sampleFace(s,e,t,n,i)}sampleFaceIndex(){const e=this.distribution[this.distribution.length-1];return this.binarySearch(this.randomFunction()*e)}binarySearch(e){const t=this.distribution;let n=0,i=t.length-1,s=-1;for(;n<=i;){const a=Math.ceil((n+i)/2);if(a===0||t[a-1]<=e&&t[a]>e){s=a;break}else e<t[a]?i=a-1:n=a+1}return s}sampleFace(e,t,n,i,s){let a=this.randomFunction(),o=this.randomFunction();a+o>1&&(a=1-a,o=1-o);const c=this.indexAttribute;let u=e*3,l=e*3+1,h=e*3+2;return c&&(u=c.getX(u),l=c.getX(l),h=c.getX(h)),Ft.a.fromBufferAttribute(this.positionAttribute,u),Ft.b.fromBufferAttribute(this.positionAttribute,l),Ft.c.fromBufferAttribute(this.positionAttribute,h),t.set(0,0,0).addScaledVector(Ft.a,a).addScaledVector(Ft.b,o).addScaledVector(Ft.c,1-(a+o)),n!==void 0&&(this.normalAttribute!==void 0?(Ft.a.fromBufferAttribute(this.normalAttribute,u),Ft.b.fromBufferAttribute(this.normalAttribute,l),Ft.c.fromBufferAttribute(this.normalAttribute,h),n.set(0,0,0).addScaledVector(Ft.a,a).addScaledVector(Ft.b,o).addScaledVector(Ft.c,1-(a+o)).normalize()):Ft.getNormal(n)),i!==void 0&&this.colorAttribute!==void 0&&(Ft.a.fromBufferAttribute(this.colorAttribute,u),Ft.b.fromBufferAttribute(this.colorAttribute,l),Ft.c.fromBufferAttribute(this.colorAttribute,h),Jo.set(0,0,0).addScaledVector(Ft.a,a).addScaledVector(Ft.b,o).addScaledVector(Ft.c,1-(a+o)),i.r=Jo.x,i.g=Jo.y,i.b=Jo.z),s!==void 0&&this.uvAttribute!==void 0&&(Gf.fromBufferAttribute(this.uvAttribute,u),Vf.fromBufferAttribute(this.uvAttribute,l),Wf.fromBufferAttribute(this.uvAttribute,h),s.set(0,0).addScaledVector(Gf,a).addScaledVector(Vf,o).addScaledVector(Wf,1-(a+o))),this}}const Ns=.62,ga=-.62;function tw({renderer:r,lowPower:e,onProgress:t,url:n}){const i=new Cn,s={uCut:{value:ga},uGhost:{value:0},uTime:{value:0},uEdgeCol:{value:ki.ice.clone()},uEdgeGain:{value:1},uWater:{value:0},uWet:{value:1},uWetAll:{value:0}},a={uCut:s.uCut,uTime:s.uTime,uAssemble:{value:0},uOpacity:{value:1},uGain:{value:1},uPx:{value:1},uProj:{value:800},uHi:{value:new E(99,99,99)},uHiOn:{value:0},uHiR:{value:.2},uLav:{value:ki.lavender},uYel:{value:ki.cardinal},uVio:{value:ki.violet}};function o(x,b){const _=x.clone();return _.onBeforeCompile=C=>{Object.assign(C.uniforms,s,{uMeshToModel:{value:b}}),C.vertexShader=C.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uMeshToModel;
varying vec3 vModelPos;
varying float vWorldY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vModelPos = (uMeshToModel * vec4(transformed, 1.0)).xyz;
vWorldY = (modelMatrix * vec4(transformed, 1.0)).y;`),C.fragmentShader=C.fragmentShader.replace("#include <common>",`#include <common>
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
                    #include <opaque_fragment>`)},_.customProgramCacheKey=()=>"argus-cut",_}function c(x,b){const _=new Float32Array(b*3),C=new Float32Array(b*3),M=new Float32Array(b),T=new Float32Array(b),D=x.map(j=>(j.geometry.index?j.geometry.index.count:j.geometry.attributes.position.count)/3),z=D.reduce((j,X)=>j+X,0),y=new E,S=new E,F=new $;let O=0;x.forEach((j,X)=>{const he=X===x.length-1?b-O:Math.round(b*D[X]/z),ye=new ew(j).build(),fe=j.userData.toModel,Ze=new ht().getNormalMatrix(fe),ct=u(j.material.map);for(let K=0;K<he&&O<b;K++,O++){ye.sample(y,S,void 0,F),y.applyMatrix4(fe),S.applyMatrix3(Ze).normalize(),y.addScaledVector(S,.004),_.set([y.x,y.y,y.z],O*3);const ce=Math.random()*Math.PI*2,ge=.4+Math.random()*1.1;C.set([Math.cos(ce)*ge,.2+Math.random()*.9,Math.sin(ce)*ge],O*3),M[O]=ct?ct(F.x,F.y):.7,T[O]=Math.random()}});const B=new et;B.setAttribute("position",new it(_,3)),B.setAttribute("aDir",new it(C,3)),B.setAttribute("aLum",new it(M,1)),B.setAttribute("aSeed",new it(T,1));const q=new At({transparent:!0,depthWrite:!1,blending:bn,uniforms:a,vertexShader:`
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
            `}),H=new Ri(B,q);return H.frustumCulled=!1,H.renderOrder=6,H}function u(x){if(!x||!x.image)return null;try{const _=document.createElement("canvas");_.width=_.height=256;const C=_.getContext("2d",{willReadFrequently:!0});C.drawImage(x.image,0,0,256,256);const M=C.getImageData(0,0,256,256).data,T=x.flipY;return(D,z)=>{const y=Math.min(255,Math.max(0,Math.floor(D*256))),S=T?1-z:z,O=(Math.min(255,Math.max(0,Math.floor(S*256)))*256+y)*4;return(M[O]*.3+M[O+1]*.55+M[O+2]*.15)/255}}catch{return null}}let l=null,h=null;const d={},f=new bS().setMeshoptDecoder($S),m=n||(e?"media/models/argus-lite.glb":"media/models/argus.glb"),v=typeof window.__modelSource=="function"?window.__modelSource(e):null,p=(v?v.then(x=>new Promise((b,_)=>{const C=window.createImageBitmap;try{window.createImageBitmap=void 0}catch{}f.parse(x,"",b,_),window.createImageBitmap=C})):f.loadAsync(m,x=>x.total&&t&&t(x.loaded/x.total))).then(x=>{const b=x.scene,_=new dn().setFromObject(b);b.position.sub(_.getCenter(new E)),i.add(b),i.updateMatrixWorld(!0);const C=new Xe().copy(i.matrixWorld).invert(),M=[];h=b.getObjectByName("lid")||null,b.traverse(T=>{T.name&&T.name.startsWith("mark-")&&(d[T.name.slice(5)]=T),T.isMesh&&(T.userData.toModel=new Xe().multiplyMatrices(C,T.matrixWorld),T.material.alphaTest>0&&(T.material.alphaToCoverage=!0),T.material.map&&(T.material.map.anisotropy=r.capabilities.getMaxAnisotropy()),T.material.envMapIntensity=1,M.push(T))}),l=c(M,e?16e3:42e3),M.forEach(T=>T.material=o(T.material,T.userData.toModel)),i.add(l)}).catch(x=>{console.warn("Argus model failed to load",x);const b=new wt(new fs(1,.2,.8),new Yr({color:13619168}));i.add(b),s.uCut.value=Ns});return{model:i,uniforms:s,points:a,ready:p,get cloud(){return l},get lid(){return h},marks:d}}async function nw(r,{color:e="#f1f4f8",glow:t="#b9c9e6"}={}){const n="Big Shoulders Display";try{await document.fonts.load(`800 200px "${n}"`,r)}catch{}const i=r.toUpperCase(),s=420,a=document.createElement("canvas"),o=a.getContext("2d");o.font=`800 ${s*.86}px "${n}", Impact, sans-serif`;const c=Math.ceil(o.measureText(i).width)+160;a.width=Math.min(4096,c),a.height=s+160,o.font=`800 ${s*.86}px "${n}", Impact, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.shadowColor=t,o.shadowBlur=28,o.fillStyle=e,o.fillText(i,a.width/2,a.height/2+s*.04),o.shadowBlur=0,o.fillText(i,a.width/2,a.height/2+s*.04);const u=new xh(a);u.colorSpace=Yt,u.anisotropy=4;const l=a.width/a.height,h=new sn({map:u,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,color:new oe(.92,.94,.98),opacity:0}),d=new wt(new Vi(l,1),h);return d.renderOrder=8,d.userData.aspect=l,d}const Us=new E(0,72,-170),xi=36,ui={trondheim:{lat:63.43,lon:10.4},sarasota:{lat:27.34,lon:-82.53}},Ir=Math.PI/180;function da(r,e,t=1,n=new E){const i=r*Ir,s=e*Ir;return n.set(Math.cos(i)*Math.sin(s)*t,Math.sin(i)*t,Math.cos(i)*Math.cos(s)*t)}async function iw(){const[{feature:r},e]=await Promise.all([On(()=>import("./index-BnENo9bV.js"),[],import.meta.url),On(()=>import("./land-110m-R6gr8IEs.js"),[],import.meta.url)]),t=e.default||e,n=r(t,t.objects.land),i=1024,s=512,a=document.createElement("canvas");a.width=i,a.height=s;const o=a.getContext("2d",{willReadFrequently:!0});o.fillStyle="#fff";const c=[];for(const l of n.features){const h=l.geometry;h.type==="Polygon"?c.push(h.coordinates):h.type==="MultiPolygon"&&c.push(...h.coordinates)}for(const l of c)for(const h of[-360,0,360]){o.beginPath();for(const d of l){let f=null,m=0;d.forEach(([v,g],p)=>{if(f!==null){const C=v+m-f;C>180?m-=360:C<-180&&(m+=360)}const x=v+m;f=x;const b=(x+h+180)/360*i,_=(90-g)/180*s;p===0?o.moveTo(b,_):o.lineTo(b,_)}),o.closePath()}o.fill("evenodd")}const u=o.getImageData(0,0,i,s).data;return(l,h)=>{const d=Math.min(i-1,Math.max(0,Math.floor((h+180)/360*i))),f=Math.min(s-1,Math.max(0,Math.floor((90-l)/180*s)));return u[(f*i+d)*4]>127}}async function sw({lowPower:r}){const e=await iw(),t=new Cn,n=new Cn;t.position.copy(Us),t.add(n);const i=r?26e3:6e4,s=[],a=[],o=[],c=new E,u=Math.PI*(3-Math.sqrt(5));for(let F=0;F<i;F++){const O=1-2*(F+.5)/i,B=Math.asin(O)/Ir;let q=F*u/Ir%360;q>180&&(q-=360);const H=e(B,q);!H&&F%9!==0||(da(B,q,xi*(H?1.004:1),c),s.push(c.x,c.y,c.z),a.push(H?1:0),o.push(Math.random()))}const l=new et;l.setAttribute("position",new Be(s,3)),l.setAttribute("aLand",new Be(a,1)),l.setAttribute("aRnd",new Be(o,1));const h={uOpacity:{value:0},uTime:{value:0},uPx:{value:1},uProj:{value:800},uHome:{value:da(ui.trondheim.lat,ui.trondheim.lon,xi)},uIce:{value:ki.ice},uSteel:{value:ki.steel},uLav:{value:ki.lavender}},d=new Ri(l,new At({transparent:!0,depthWrite:!1,blending:bn,uniforms:h,vertexShader:`
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
            `}));d.frustumCulled=!1,n.add(d);const f=new wt(new hs(xi*.985,64,32),new sn({color:new oe("#04070b"),transparent:!0,opacity:0,fog:!1}));n.add(f);const m=new wt(new hs(xi*1.16,64,32),new At({transparent:!0,depthWrite:!1,side:un,blending:bn,uniforms:{uOpacity:h.uOpacity,uCol:{value:new oe("#7fa3d9")}},vertexShader:`
                varying vec3 vN; varying vec3 vV;
                void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }
            `,fragmentShader:`
                uniform float uOpacity; uniform vec3 uCol; varying vec3 vN; varying vec3 vV;
                void main() { float k = pow(clamp(0.78 + dot(vN, vV), 0.0, 1.0), 4.0); gl_FragColor = vec4(uCol * k * 1.6 * uOpacity, 1.0); }
            `}));t.add(m);const v=da(ui.trondheim.lat,ui.trondheim.lon,1),g=da(ui.sarasota.lat,ui.sarasota.lon,1),p=700,x=[],b=[],_=new hn,C=v.angleTo(g),M=new E().crossVectors(v,g).normalize();for(let F=0;F<p;F++){const O=F/(p-1);_.setFromAxisAngle(M,C*O),c.copy(v).applyQuaternion(_).multiplyScalar(xi*(1.01+.2*Math.sin(Math.PI*O))),x.push(c.x,c.y,c.z),b.push(O)}const T=new et;T.setAttribute("position",new Be(x,3)),T.setAttribute("aT",new Be(b,1));const D={uTo:{value:0},uTime:h.uTime,uOpacity:h.uOpacity,uPx:h.uPx,uProj:h.uProj,uYel:{value:ki.cardinal}},z=new Ri(T,new At({transparent:!0,depthWrite:!1,blending:bn,uniforms:D,vertexShader:`
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
            `}));z.frustumCulled=!1,n.add(z);const y=[];for(const[F,O]of Object.entries(ui)){const B=da(O.lat,O.lon,xi),q=B.clone().normalize(),H=new to(.9,1.25,40),j=new wt(H,new sn({color:ki.cardinal,transparent:!0,opacity:0,side:Fn,depthWrite:!1,blending:bn,fog:!1}));j.position.copy(B).addScaledVector(q,.15),j.lookAt(B.clone().multiplyScalar(2));const X=new ps(.08,.08,6,8,1,!0);X.translate(0,3,0);const he=new wt(X,new sn({color:new oe(1.6,1.3,.5),transparent:!0,opacity:0,depthWrite:!1,blending:bn,fog:!1}));he.position.copy(B),he.quaternion.setFromUnitVectors(new E(0,1,0),q),n.add(j,he),y.push({key:F,ring:j,beam:he,top:B.clone().addScaledVector(q,6.5)})}f.renderOrder=6,d.renderOrder=7,z.renderOrder=7,y.forEach(F=>F.ring.renderOrder=F.beam.renderOrder=7),m.renderOrder=8;const S=new E;return{group:t,spin:n,pins:y,arcMid:(_.setFromAxisAngle(M,C*.5),v.clone().applyQuaternion(_).multiplyScalar(xi*1.24)),setOpacity(F){t.visible=F>.01,h.uOpacity.value=F,f.material.opacity=F*.92},face(F,O){n.rotation.set(0,0,0),t.rotation.set(F*Ir*.85,-O*Ir,0,"XYZ")},update(F,O,B){h.uTime.value=F,D.uTo.value=O,y.forEach((q,H)=>{const j=H===0?1:Math.min(1,O*1.05>.98?1:0),X=1+(F*.8+H*.5)%1*1.6;q.ring.scale.setScalar(X),q.ring.material.opacity=h.uOpacity.value*j*(1-(F*.8+H*.5)%1)*(.8+B*.4),q.beam.material.opacity=h.uOpacity.value*j*.7})},worldOf(F,O=S){return O.copy(F).applyMatrix4(n.matrixWorld)},setPx(F,O){h.uPx.value=F,h.uProj.value=O}}}const Vm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class no{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rw=new tr(-1,1,1,-1,0,1);class aw extends et{constructor(){super(),this.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Be([0,2,0,0,2,0],2))}}const ow=new aw;class Wm{constructor(e){this._mesh=new wt(ow,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class qu extends no{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Oa.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xf extends no{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class cw extends no{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class lw{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new $);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qu(Vm),this.copyPass.material.blending=Si,this.clock=new Wa}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xf!==void 0&&(a instanceof Xf?n=!0:a instanceof cw&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class uw extends no{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new oe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const hw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Wr extends no{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new $(e.x,e.y):new $(256,256),this.clearColor=new oe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(s,a,{type:Bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Jt(s,a,{type:Bn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Jt(s,a,{type:Bn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=hw;this.highPassUniforms=Oa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new $(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const l=Vm;this.copyUniforms=Oa.clone(l.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:bn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new oe,this.oldClearAlpha=1,this.basic=new sn,this.fsQuad=new Wm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new $(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Wr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Wr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new At({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Wr.BlurDirectionX=new $(1,0);Wr.BlurDirectionY=new $(0,1);const dw={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new $(1/1024,1/512)}},vertexShader:`

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
	`},fw={uniforms:{tDiffuse:{value:null},uTime:{value:0},uExposure:{value:1},uRes:{value:new $(1,1)},uCA:{value:8e-5},uGrain:{value:.03},uVig:{value:.4},uFlash:{value:0},uDim:{value:1},uSunPos:{value:new $(-9,-9)},uSunCol:{value:new oe},uSunOn:{value:0},uRays:{value:0},uFlare:{value:1}},vertexShader:`
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
        // a pixel that came out as NaN or infinity (a too bright highlight in half float) is made harmless
        // (NaN fails every comparison, so it becomes 0; infinity is capped)
        float safe(float v) { return v > 0.0 ? min(v, 60000.0) : 0.0; }
        vec3 safe3(vec3 c) { return vec3(safe(c.r), safe(c.g), safe(c.b)); }
        float lum(vec3 c) { return dot(safe3(c), vec3(0.2126, 0.7152, 0.0722)); }

        void main() {
            vec2 d = vUv - 0.5;
            float r2 = dot(d, d);
            vec2 off = d * r2 * uCA * 40.0;
            vec3 c;
            c.r = texture2D(tDiffuse, vUv + off).r;
            c.g = texture2D(tDiffuse, vUv).g;
            c.b = texture2D(tDiffuse, vUv - off).b;
            c = safe3(c);

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
                        // only what is on screen (the edge pixels repeated would wash a veil over everything)
                        float inside = step(0.0, p.x) * step(p.x, 1.0) * step(0.0, p.y) * step(p.y, 1.0);
                        vec3 s = texture2D(tDiffuse, clamp(p, 0.0, 1.0)).rgb;
                        acc += smoothstep(25.0, 140.0, lum(s)) * w * inside;
                        w *= 0.955;
                    }
                    vec2 dd = toSun * vec2(aspect, 1.0);
                    c += uSunCol * (acc / 28.0) * uRays * exp(-length(dd) * 3.2) * 0.22;
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

            c = aces(safe3(c));
            c = toSRGB(c);
            c += uFlash * vec3(0.9, 0.93, 1.0);
            c *= uDim;
            float v = smoothstep(0.95, 0.2, sqrt(r2) * 1.25);
            c *= mix(1.0, v, uVig);
            float g = hash(vUv * uRes + fract(uTime * 7.13) * 91.7) - 0.5;
            c += g * uGrain;
            gl_FragColor = vec4(c, 1.0);
        }
    `};function pw(r,e,t,{lowPower:n}){const i=r.getDrawingBufferSize(new $),s=new Jt(i.x,i.y,{type:Bn,samples:n?0:4}),a=new lw(r,s),o=new uw(e,t),c=new Wr(new $(i.x,i.y),.55,.6,2);c.materialHighPassFilter.fragmentShader=`
        uniform sampler2D tDiffuse; uniform vec3 defaultColor; uniform float defaultOpacity;
        uniform float luminosityThreshold; uniform float smoothWidth;
        varying vec2 vUv;
        // NaN or infinity (a highlight too bright for half float) must never get into the blur:
        // it would spread over the whole frame and turn the screen black
        float safe(float v) { return v > 0.0 ? min(v, 60000.0) : 0.0; }
        void main() {
            vec4 texel = texture2D(tDiffuse, vUv);
            texel.rgb = vec3(safe(texel.r), safe(texel.g), safe(texel.b));
            texel.a = 1.0;
            float v = dot(texel.rgb, vec3(0.299, 0.587, 0.114));
            texel.rgb *= min(1.0, luminosityThreshold * 3.0 / max(v, 1e-4));
            float alpha = smoothstep(luminosityThreshold, luminosityThreshold + smoothWidth, v);
            gl_FragColor = mix(vec4(defaultColor.rgb, defaultOpacity), texel, alpha);
        }
    `,c.materialHighPassFilter.needsUpdate=!0;const u=new qu(fw);a.addPass(o),a.addPass(c),a.addPass(u);const l=n?new qu(dw):null;return l&&a.addPass(l),{composer:a,bloom:c,grade:u,setSize(h,d,f){a.setPixelRatio(f),a.setSize(h,d);const m=n?.35:.5;c.setSize(Math.round(h*f*m),Math.round(d*f*m)),u.uniforms.uRes.value.set(h*f,d*f),l&&l.uniforms.resolution.value.set(1/(h*f),1/(d*f))},render(h){u.uniforms.uTime.value=h,a.render()}}}function mw(r,e=60){const t=new Float32Array(r*3),n=new Float32Array(r);for(let o=0;o<r;o++)t[o*3]=(Math.random()-.5)*e,t[o*3+1]=(Math.random()-.5)*e,t[o*3+2]=(Math.random()-.5)*e,n[o]=Math.random();const i=new et;i.setAttribute("position",new it(t,3)),i.setAttribute("aSeed",new it(n,1));const s={uCam:{value:new E},uTime:{value:0},uBox:{value:e},uProj:{value:800},uOpacity:{value:1}},a=new Ri(i,new At({transparent:!0,depthWrite:!1,blending:bn,uniforms:s,vertexShader:`
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
            `}));return a.frustumCulled=!1,a.renderOrder=9,{points:a,update(o,c,u,l=1){s.uTime.value=o,s.uCam.value.copy(c),s.uProj.value=u,s.uOpacity.value=l}}}const va=new E(0,46,-240);async function gw(r,{lowPower:e}){const t=new Image;t.decoding="async",t.src=r,await t.decode();const n=t.naturalWidth/t.naturalHeight,i=e?150:240,s=Math.round(i/n),a=document.createElement("canvas");a.width=i,a.height=s;const o=a.getContext("2d",{willReadFrequently:!0});o.drawImage(t,0,0,i,s);const c=o.getImageData(0,0,i,s).data,u=30,l=u/n,h=i*s,d=new Float32Array(h*3),f=new Float32Array(h*3),m=new Float32Array(h*3),v=new Float32Array(h),g=C=>Math.pow(C/255,2.2);let p=0;for(let C=0;C<s;C++)for(let M=0;M<i;M++){const T=(C*i+M)*4,D=c[T],z=c[T+1],y=c[T+2],S=(D*.3+z*.55+y*.15)/255,F=(Math.random()-.5)*.6,O=(Math.random()-.5)*.6;d[p*3]=((M+.5+F)/i-.5)*u,d[p*3+1]=(.5-(C+.5+O)/s)*l,d[p*3+2]=(S-.5)*2.4,f[p*3]=g(D),f[p*3+1]=g(z),f[p*3+2]=g(y);const B=Math.random()*Math.PI*2,q=6+Math.random()*18;m[p*3]=Math.cos(B)*q,m[p*3+1]=(Math.random()-.5)*16,m[p*3+2]=Math.sin(B)*q*.5-14-Math.random()*20,v[p]=Math.random(),p++}const x=new et;x.setAttribute("position",new it(d,3)),x.setAttribute("color",new it(f,3)),x.setAttribute("aDir",new it(m,3)),x.setAttribute("aSeed",new it(v,1));const b={uAssemble:{value:0},uOpacity:{value:0},uTime:{value:0},uProj:{value:800},uSpacing:{value:u/i*1.35},uScan:{value:-1},uW:{value:u}},_=new Ri(x,new At({transparent:!0,depthWrite:!1,blending:os,uniforms:b,vertexColors:!0,vertexShader:`
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
            `}));return _.frustumCulled=!1,_.renderOrder=7,_.position.copy(va),{points:_,U:b,width:u,height:l}}function vw(r=700){const e=new Float32Array(r*3),t=new Float32Array(r*3),n=new Float32Array(r),i=new Float32Array(r),s=new Float32Array(r),a=new et;a.setAttribute("position",new it(e,3).setUsage(Iu)),a.setAttribute("aLife",new it(n,1).setUsage(Iu)),a.setAttribute("aSize",new it(i,1));const o={uCol:{value:new oe(1,1,1)},uProj:{value:800}},c=new At({transparent:!0,depthWrite:!1,uniforms:o,vertexShader:`
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
        `}),u=new Ri(a,c);u.frustumCulled=!1,u.renderOrder=7;let l=0,h=0;return{points:u,uniforms:o,emit(d,f,m,v,g,p,x,b=1.5,_=.12){for(let C=0;C<x;C++){const M=l;l=(l+1)%r,e[M*3]=d+(Math.random()-.5)*.6,e[M*3+1]=f,e[M*3+2]=m+(Math.random()-.5)*.6,t[M*3]=v+(Math.random()-.5)*b,t[M*3+1]=g*(.6+Math.random()*.7),t[M*3+2]=p+(Math.random()-.5)*b,n[M]=.6+Math.random()*.9,i[M]=_*(.5+Math.random()),s[M]=0}h=r,a.attributes.aSize.needsUpdate=!0},splash(d,f,m=1){this.emit(d,.1,f,0,5.5*m,0,Math.round(60*m),3.2*m,.14)},update(d){if(!h)return;let f=0;const m=Math.exp(-d*.9);for(let v=0;v<r;v++)n[v]<=0||(f++,t[v*3+1]-=9.8*3.3*d,t[v*3]*=m,t[v*3+2]*=m,e[v*3]+=t[v*3]*d,e[v*3+1]+=t[v*3+1]*d,e[v*3+2]+=t[v*3+2]*d,n[v]-=d,e[v*3+1]<-.2&&(n[v]=0));h=f,a.attributes.position.needsUpdate=!0,a.attributes.aLife.needsUpdate=!0}}}function bw(r=3e3){const e=new Float32Array(r*2*3),t=new Float32Array(r*2*3),n=new Float32Array(r*2);for(let c=0;c<r;c++){const u=Math.random(),l=Math.random(),h=Math.random();for(let d=0;d<2;d++)t.set([u,l,h],(c*2+d)*3),n[c*2+d]=d}const i=new et;i.setAttribute("position",new it(e,3)),i.setAttribute("aSeed",new it(t,3)),i.setAttribute("aEnd",new it(n,1));const s={uTime:{value:0},uCam:{value:new E},uAmount:{value:0},uCol:{value:new oe(.7,.75,.8)},uWind:{value:new $(3,1.5)}},a=new At({uniforms:s,transparent:!0,depthWrite:!1,blending:bn,vertexShader:`
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
        `}),o=new ti(i,a);return o.frustumCulled=!1,o.renderOrder=8,{lines:o,uniforms:s}}const $n=(r,e,t)=>Math.min(t,Math.max(e,r)),qf=13,Au=21,fa=170,nn=3.1,Dn=2.7;function xw({camera:r,getBoat:e,getElev:t,landHeight:n,obstacles:i,colliders:s,buoys:a,spray:o,onPing:c,reduced:u}){const l={active:!1,pos:new E,heading:0,course:0,vel:new E,speed:0,yawRate:0,spinRate:0,pitch:0,roll:0,camPos:new E,camLook:new E,sunElev:12,locked:!1,lidOpen:!1,inspect:0,target:null,pois:null,shake:0,auto:null,orbit:!1,menu:!1,menuK:0,outBlend:0},h=new Set,d=new $;let f=0,m=.21,v=17,g=!1,p=0,x=0;const b=new E,_=new E;let C=0,M=-10;const T=[16,5,.5,-3.5,-10];let D=0;const z=[{name:"Clear",over:0,fog:0,rain:0},{name:"Cloudy",over:.75,fog:.15,rain:0},{name:"Fog",over:.9,fog:1,rain:0},{name:"Rain",over:1,fog:.45,rain:1}];let y=0;const S=document.createElement("div");S.className="drive-hud",S.setAttribute("role","dialog"),S.setAttribute("aria-label","Drive Argus"),S.innerHTML=`
        <div class="hud-look" aria-hidden="true"></div>
        <div class="hud-top">
            <span class="hud-tag"><i></i>Drive Argus</span>
            <div class="hud-actions">
                <button type="button" class="hud-btn" data-hud="time"><span class="hb-long">Time of day</span><span class="hb-short">Time</span></button>
                <button type="button" class="hud-btn" data-hud="weather"><span class="hb-long">Weather: </span><span class="hud-weather">Clear</span></button>
                <button type="button" class="hud-btn" data-hud="sound" aria-pressed="false">Sound</button>
                <button type="button" class="hud-btn" data-hud="keys" aria-expanded="false"><span class="hb-long">Controls</span><span class="hb-short">Help</span> <kbd>H</kbd></button>
                <button type="button" class="hud-btn hud-exit" data-hud="exit">Exit <kbd>Esc</kbd></button>
            </div>
        </div>
        <p class="hud-help"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> or arrows to drive · <kbd>H</kbd> all the controls</p>
        <div class="hud-bottom">
            <div class="hud-left">
            <button type="button" class="hud-btn hud-lid" data-hud="lid" aria-pressed="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11h16v8H4z"/><path d="M4 11 7 4h13l-3 7"/></svg><span>Open lid</span> <kbd>L</kbd></button>
            <div class="hud-gauges">
                <div class="hud-gauge"><span>Throttle</span><i><b class="hud-thr"></b></i></div>
                <canvas class="hud-compass" width="440" height="60" aria-hidden="true"></canvas>
            </div>
            </div>
            <div class="hud-radar-wrap"><canvas class="hud-radar" width="360" height="360" aria-hidden="true"></canvas><span>LiDAR</span></div>
        </div>
        <div class="hud-stick" aria-hidden="true"><i></i></div>
        <div class="hud-tbtns">
            <button type="button" class="hud-tbtn hud-spin" data-spin="1" aria-label="Turn the boat left on the spot (hold)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12a8 8 0 1 0 2.3-5.6"/><path d="M4 4v4h4"/></svg><span>Turn</span></button>
            <button type="button" class="hud-tbtn hud-spin" data-spin="-1" aria-label="Turn the boat right on the spot (hold)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 4v4h-4"/></svg><span>Turn</span></button>
            <button type="button" class="hud-tbtn" data-hud="ping" aria-label="LiDAR ping"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="2"/><path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14"/></svg><span>Ping</span></button>
            <button type="button" class="hud-tbtn hud-boost" aria-label="More power (hold)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 3 5 13.5h6L10 21l8-10.5h-6z"/></svg><span>Boost</span></button>
        </div>
        <div class="hud-keys" role="dialog" aria-label="Controls">
            <div class="hk-head"><div><span class="hk-kicker">How to play</span><h2>Controls</h2></div><button type="button" class="hud-btn" data-hud="keys-close">Close <kbd>H</kbd></button></div>
            <div class="hk-body">
                <div class="hk-pad" aria-hidden="true">
                    <div class="hk-pad-row"><kbd>Q</kbd><kbd class="is-main">W</kbd><kbd>E</kbd></div>
                    <div class="hk-pad-row"><kbd class="is-main">A</kbd><kbd class="is-main">S</kbd><kbd class="is-main">D</kbd></div>
                    <div class="hk-pad-row"><kbd class="is-wide">Shift</kbd><kbd class="is-space">Space</kbd></div>
                    <span class="hk-pad-or">or</span>
                    <div class="hk-pad-row"><kbd class="is-main">↑</kbd></div>
                    <div class="hk-pad-row"><kbd class="is-main">←</kbd><kbd class="is-main">↓</kbd><kbd class="is-main">→</kbd></div>
                </div>
                <div class="hk-groups">
                    <section class="hk-group">
                        <h3>Drive</h3>
                        <dl class="hk-list">
                            <div><dt><kbd>W</kbd><kbd>↑</kbd></dt><dd>Forward</dd></div>
                            <div><dt><kbd>S</kbd><kbd>↓</kbd></dt><dd>Slow down, then back</dd></div>
                            <div><dt><kbd>A</kbd><kbd>D</kbd></dt><dd>Steer (or <kbd>←</kbd> <kbd>→</kbd>)</dd></div>
                            <div><dt><kbd>Q</kbd><kbd>E</kbd></dt><dd>Turn the boat while it keeps going straight</dd></div>
                            <div><dt><kbd>Shift</kbd></dt><dd>More power</dd></div>
                        </dl>
                    </section>
                    <section class="hk-group">
                        <h3>Argus</h3>
                        <dl class="hk-list">
                            <div><dt><kbd>Space</kbd></dt><dd>LiDAR ping</dd></div>
                            <div><dt><kbd>L</kbd></dt><dd>Open the lid and look inside</dd></div>
                            <div><dt>Drag</dt><dd>Look around</dd></div>
                            <div><dt>Scroll</dt><dd>Camera closer or further away</dd></div>
                        </dl>
                    </section>
                    <section class="hk-group">
                        <h3>Game</h3>
                        <dl class="hk-list">
                            <div><dt><kbd>M</kbd></dt><dd>Njord tasks</dd></div>
                            <div><dt><kbd>P</kbd></dt><dd>Places to visit</dd></div>
                            <div><dt><kbd>T</kbd></dt><dd>Time of day</dd></div>
                            <div><dt><kbd>V</kbd></dt><dd>Weather</dd></div>
                            <div><dt><kbd>H</kbd></dt><dd>This list</dd></div>
                            <div class="hk-esc"><dt><kbd>Esc</kbd></dt><dd>Leave the helm</dd></div>
                        </dl>
                    </section>
                    <section class="hk-group">
                        <h3>Menus</h3>
                        <dl class="hk-list">
                            <div><dt><kbd>↑</kbd><kbd>↓</kbd></dt><dd>Choose, or scroll</dd></div>
                            <div><dt><kbd>Enter</kbd></dt><dd>Open what you chose</dd></div>
                            <div><dt><kbd>Esc</kbd></dt><dd>Close the menu</dd></div>
                        </dl>
                    </section>
                </div>
            </div>
            <div class="hk-touchset">
                <section class="hk-group">
                    <h3>Drive</h3>
                    <dl class="hk-list">
                        <div><dt>Stick</dt><dd>The round stick at the bottom left: push up to go, down to slow down and back, to the sides to steer</dd></div>
                        <div><dt>Boost</dt><dd>Hold for more power</dd></div>
                        <div><dt>Turn</dt><dd>Hold to turn the boat on the spot while it keeps its course (it has four thrusters)</dd></div>
                    </dl>
                </section>
                <section class="hk-group">
                    <h3>Look and Argus</h3>
                    <dl class="hk-list">
                        <div><dt>Drag</dt><dd>Drag anywhere on the water to look around</dd></div>
                        <div><dt>Pinch</dt><dd>Two fingers: camera closer or further away</dd></div>
                        <div><dt>Ping</dt><dd>A LiDAR ping: rings on the water and the radar</dd></div>
                        <div><dt>Open lid</dt><dd>Look inside the electronics case</dd></div>
                    </dl>
                </section>
                <section class="hk-group">
                    <h3>Game</h3>
                    <dl class="hk-list">
                        <div><dt>Njord tasks</dt><dd>Four tasks from the real competition</dd></div>
                        <div><dt>Places</dt><dd>Posts round the harbour with our story</dd></div>
                        <div><dt>Autonomous</dt><dd>Let Argus sail on its own</dd></div>
                        <div><dt>Menu</dt><dd>Pause, settings and your score</dd></div>
                    </dl>
                </section>
            </div>
            <p class="hk-touch">On a computer: the keys above. On a phone or tablet: the stick, the buttons and your fingers.</p>
        </div>
    `,document.body.appendChild(S);const F=document.createElement("button");F.type="button",F.className="drive-fab",F.setAttribute("data-drive",""),F.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.2"/><path d="M12 4v5.8M12 14.2V20M4 12h5.8M14.2 12H20"/></svg><span>Drive Argus</span>',document.body.appendChild(F);const O=!!document.querySelector(".btn-drive"),B=()=>F.classList.toggle("is-shown",!O||scrollY>innerHeight*.7);addEventListener("scroll",B,{passive:!0}),B();const q=S.querySelector(".hud-thr"),H=S.querySelector(".hud-compass").getContext("2d"),j=S.querySelector(".hud-radar").getContext("2d"),X=S.querySelector('[data-hud="sound"]'),he=S.querySelector(".hud-weather"),ye=S.querySelector(".hud-lid"),fe=S.querySelector(".hud-keys"),Ze=S.querySelector('[data-hud="keys"]'),ct=S.querySelector(".hud-top"),K=()=>S.style.setProperty("--hud-top",Math.round(ct.getBoundingClientRect().bottom-S.getBoundingClientRect().top)+"px");window.ResizeObserver&&new ResizeObserver(K).observe(ct),addEventListener("resize",K);const ce=S.querySelector(".hud-stick"),ge=ce.querySelector("i");S.addEventListener("click",A=>{const P=A.target.closest("[data-hud]");if(!P)return;const N=P.dataset.hud;N==="exit"&&Ae(),N==="time"&&re(),N==="weather"&&de(),N==="lid"&&ve(!l.lidOpen),(N==="keys"||N==="keys-close")&&me(!fe.classList.contains("is-on")),N==="sound"&&ae(!k),N==="ping"&&xe()});function xe(){M=performance.now()/1e3,c&&c(l.pos)}let Ye=!1;const te=S.querySelector(".hud-boost"),qe=A=>P=>{if(A&&l.auto)for(const N of Ke)N();Ye=A,te.classList.toggle("is-held",A),A&&ze(te,P)};te.addEventListener("pointerdown",qe(!0)),te.addEventListener("pointerup",qe(!1)),te.addEventListener("pointercancel",qe(!1)),te.addEventListener("lostpointercapture",qe(!1)),te.addEventListener("contextmenu",A=>A.preventDefault());let ot=0;for(const A of S.querySelectorAll(".hud-spin")){const P=Number(A.dataset.spin),N=Y=>{if(l.auto)for(const W of Ke)W();ot=P,A.classList.add("is-held"),ze(A,Y)},U=()=>{ot===P&&(ot=0),A.classList.remove("is-held")};A.addEventListener("pointerdown",N),A.addEventListener("pointerup",U),A.addEventListener("pointercancel",U),A.addEventListener("lostpointercapture",U),A.addEventListener("contextmenu",Y=>Y.preventDefault())}function re(){L(D+1)}function L(A){D=(A+T.length)%T.length,l.sunElev=T[D]}function ve(A){l.lidOpen=A,ye.setAttribute("aria-pressed",A?"true":"false"),ye.querySelector("span").textContent=A?"Close lid":"Open lid",S.classList.toggle("is-inspecting",A)}function me(A){fe.classList.toggle("is-on",A),Ze.setAttribute("aria-expanded",A?"true":"false")}function de(){_e(y+1)}function _e(A){y=(A+z.length)%z.length,he.textContent=z[y].name}const ze=(A,P)=>{try{P.pointerId!=null&&A.setPointerCapture(P.pointerId)}catch{}},Re=S.querySelector(".hud-look");let I=0,w=0;const V=new Map;let Z=0;const se=()=>{const[A,P]=[...V.values()];return Math.hypot(A.x-P.x,A.y-P.y)};Re.addEventListener("pointerdown",A=>{if(V.set(A.pointerId,{x:A.clientX,y:A.clientY}),ze(Re,A),V.size===2){Z=se(),g=!1;return}V.size>2||(g=!0,I=A.clientX,w=A.clientY)}),Re.addEventListener("pointermove",A=>{if(V.has(A.pointerId)){if(V.set(A.pointerId,{x:A.clientX,y:A.clientY}),V.size===2){const P=se();Z>0&&P>0&&(v=$n(v*(Z/P),10,60)),Z=P,p=performance.now();return}g&&(f-=(A.clientX-I)*.006,m=$n(m+(A.clientY-w)*.003,.08,1.1),I=A.clientX,w=A.clientY,p=performance.now())}});const ne=A=>{if(V.delete(A.pointerId),Z=0,V.size===1){const[P]=[...V.values()];I=P.x,w=P.y,g=!0}else g=!1;p=performance.now()};Re.addEventListener("pointerup",ne),Re.addEventListener("pointercancel",ne),Re.addEventListener("wheel",A=>{v=$n(v*Math.exp(A.deltaY*.001),10,60),A.preventDefault()},{passive:!1});let De=null;const Me=new $;ce.addEventListener("pointerdown",A=>{De=A.pointerId;const P=ce.getBoundingClientRect();Me.set(P.left+P.width/2,P.top+P.height/2),ze(ce,A),tt(A)}),ce.addEventListener("pointermove",A=>A.pointerId===De&&tt(A));const Ce=()=>{De=null,d.set(0,0),ge.style.transform=""};ce.addEventListener("pointerup",Ce),ce.addEventListener("pointercancel",Ce);function tt(A){if(l.auto)for(const N of Ke)N();const P=46;d.set(A.clientX-Me.x,A.clientY-Me.y),d.length()>P&&d.setLength(P),ge.style.transform=`translate(${d.x}px, ${d.y}px)`,d.divideScalar(P)}const le=[],Ne=[],Ke=[],Qe=[{el:fe,modal:!0}];function Pe(){for(let A=Qe.length-1;A>=0;A--){const P=Qe[A];if(P.el.classList.contains("is-on")&&(P.modal||P.el.contains(document.activeElement)))return P.el}return null}function rt(A,P){const N=[...A.querySelectorAll("button:not([disabled]), a[href]")].filter(pe=>pe.getClientRects().length),U=N.includes(document.activeElement)?document.activeElement:null,Y=pe=>{pe.focus({preventScroll:!0}),pe.scrollIntoView({block:"nearest",behavior:u?"auto":"smooth"}),ee("click")};if(!U){N.length&&Y(P==="arrowup"||P==="arrowleft"?N[N.length-1]:N[0]);return}const W=U.getBoundingClientRect(),ue=W.left+W.width/2,J=W.top+W.height/2;let Le=null,we=1/0;for(const pe of N){if(pe===U)continue;const Fe=pe.getBoundingClientRect(),je=Fe.left+Fe.width/2-ue,ke=Fe.top+Fe.height/2-J,We=P==="arrowdown"?ke:P==="arrowup"?-ke:P==="arrowright"?je:-je,Ge=P==="arrowdown"||P==="arrowup"?je:ke;if(We<=6)continue;const be=We+Math.abs(Ge)*2;be<we&&(we=be,Le=pe)}Le?Y(Le):(P==="arrowdown"||P==="arrowup")&&A.scrollBy({top:P==="arrowdown"?90:-90,behavior:u?"auto":"smooth"})}function Je(A){if(!l.active)return;const P=A.key.toLowerCase();if(A.type==="keydown"){if(P==="escape"){if(fe.classList.contains("is-on"))return me(!1);for(const N of le)if(N())return;if(l.lidOpen)return ve(!1);if(document.body.hasAttribute("data-game")){for(const N of Ne)N();return}return Ae()}if(P.startsWith("arrow")){const N=Pe();if(N){A.preventDefault(),rt(N,P);return}}if(l.auto&&["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(P))for(const N of Ke)N();P==="t"&&re(),P==="v"&&de(),P==="l"&&ve(!l.lidOpen),(P==="h"||P==="?")&&me(!fe.classList.contains("is-on")),P===" "&&!A.repeat&&xe(),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(P)&&A.preventDefault(),h.add(P)}else h.delete(P)}addEventListener("keydown",Je),addEventListener("keyup",Je),addEventListener("blur",()=>h.clear());let st=null,k=!1;try{k=localStorage.getItem("marinor-sound")==="on"}catch{}function Oe(){if(st)return st;const A=window.AudioContext||window.webkitAudioContext;if(!A)return null;const P=new A,N=P.createGain();N.gain.value=0,N.connect(P.destination);const U=P.createOscillator();U.type="sawtooth",U.frequency.value=60;const Y=P.createBiquadFilter();Y.type="lowpass",Y.frequency.value=300;const W=P.createGain();W.gain.value=0,U.connect(Y).connect(W).connect(N),U.start();const ue=P.sampleRate*2,J=P.createBuffer(1,ue,P.sampleRate),Le=J.getChannelData(0);let we=0;for(let ke=0;ke<ue;ke++)we=(we+.02*(Math.random()*2-1))/1.02,Le[ke]=we*3.5;const pe=P.createBufferSource();pe.buffer=J,pe.loop=!0;const Fe=P.createBiquadFilter();Fe.type="bandpass",Fe.frequency.value=500,Fe.Q.value=.6;const je=P.createGain();return je.gain.value=.25,pe.connect(Fe).connect(je).connect(N),pe.start(),st={ctx:P,master:N,motor:U,motorF:Y,motorG:W,waterF:Fe,waterG:je},st}function ee(A){if(!k||!l.active)return;const P=Oe();if(!P)return;const N=P.ctx;N.state==="suspended"&&N.resume(),P.sfx||(P.sfx=N.createGain(),P.sfx.gain.value=.2,P.sfxF=N.createBiquadFilter(),P.sfxF.type="lowpass",P.sfxF.frequency.value=5200,P.sfx.connect(P.sfxF).connect(N.destination));const U=N.currentTime,Y=(W,ue,J,{type:Le="sine",vol:we=.6,slide:pe=0}={})=>{const Fe=N.createOscillator(),je=N.createGain();Fe.type=Le,Fe.frequency.setValueAtTime(W,U+ue),pe&&Fe.frequency.exponentialRampToValueAtTime(W*pe,U+ue+J),je.gain.setValueAtTime(1e-4,U+ue),je.gain.exponentialRampToValueAtTime(we,U+ue+.012),je.gain.exponentialRampToValueAtTime(1e-4,U+ue+J),Fe.connect(je).connect(P.sfx),Fe.start(U+ue),Fe.stop(U+ue+J+.05)};A==="count"?Y(660,0,.16,{type:"triangle",vol:.7}):A==="go"?(Y(990,0,.55,{type:"triangle",vol:.8}),Y(1485,0,.45,{vol:.25})):A==="gate"?(Y(880,0,.16,{vol:.55}),Y(1320,.07,.3,{vol:.45})):A==="bad"?Y(170,0,.38,{type:"sawtooth",vol:.32,slide:.65}):A==="medal"?[523,659,784,1047].forEach((W,ue)=>Y(W,ue*.11,ue===3?.9:.4,{type:"triangle",vol:.5})):A==="discover"?(Y(1175,0,.55,{vol:.35}),Y(1568,.1,.7,{vol:.3})):A==="horn"?(Y(98,0,1.2,{type:"sawtooth",vol:.22}),Y(123.5,0,1.2,{type:"sawtooth",vol:.18})):A==="click"&&Y(1500,0,.04,{type:"square",vol:.08})}function ae(A){k=A,X.setAttribute("aria-pressed",A?"true":"false"),X.textContent=A?"Sound on":"Sound off";try{localStorage.setItem("marinor-sound",A?"on":"off")}catch{}const P=A?Oe():st;P&&(A&&P.ctx.state==="suspended"&&P.ctx.resume(),P.master.gain.setTargetAtTime(A&&l.active?.14:0,P.ctx.currentTime,.2))}X.textContent=k?"Sound on":"Sound off";function Ue(){if(l.active)return;const A=e();l.pos.copy(A.pos).setY(0),l.heading=A.heading,l.course=A.heading,l.vel.set(0,0,0),l.speed=0,l.spinRate=0,l.sunElev=t(),D=T.reduce((P,N,U)=>Math.abs(N-l.sunElev)<Math.abs(T[P]-l.sunElev)?U:P,0),b.copy(r.position),_.copy(A.pos),x=0,f=0,C=scrollY,l.active=!0,l.outBlend=0,requestAnimationFrame(K),setTimeout(K,900),document.documentElement.classList.add("is-driving"),S.classList.add("is-on"),S.querySelector(".hud-exit").focus({preventScroll:!0}),k&&ae(!0),dispatchEvent(new CustomEvent("drive:change",{detail:!0}))}function Ae(){if(l.active){if(document.body.hasAttribute("data-game")&&Ne.length){for(const A of Ne)A();return}l.active=!1,l.outBlend=1,h.clear(),Ye=!1,ot=0,ve(!1),me(!1),document.documentElement.classList.remove("is-driving"),S.classList.remove("is-on"),st&&st.master.gain.setTargetAtTime(0,st.ctx.currentTime,.15),scrollTo(0,C),dispatchEvent(new CustomEvent("drive:change",{detail:!1}))}}const nt=new E,lt=new E,Ut=new E,Ve=new E,xt=[[nn,Dn-.2],[nn,-Dn+.2],[-nn,Dn-.2],[-nn,-Dn+.2],[0,Dn],[0,-Dn],[nn+.1,1.8],[nn+.1,-1.8],[-nn-.1,1.8],[-nn-.1,-1.8],[nn*.5,Dn],[nn*.5,-Dn],[-nn*.5,Dn],[-nn*.5,-Dn]],en=-1;let Xi=0;function jt(A,P){const N=Math.cos(A.rot),U=Math.sin(A.rot),Y=[[nt.x,nt.z],[lt.x,lt.z],[N,-U],[U,N]],W=l.pos.x-A.x,ue=l.pos.z-A.z;let J=1/0,Le=0,we=0;for(const[pe,Fe]of Y){const je=nn*Math.abs(nt.x*pe+nt.z*Fe)+Dn*Math.abs(lt.x*pe+lt.z*Fe),ke=A.hx*Math.abs(N*pe-U*Fe)+A.hz*Math.abs(U*pe+N*Fe),We=W*pe+ue*Fe,Ge=je+ke-Math.abs(We);if(Ge<=0)return!1;if(Ge<J){J=Ge;const be=We<0?-1:1;Le=pe*be,we=Fe*be}}return P.set(Le*J,0,we*J),!0}function In(A,P){const N=A.x-l.pos.x,U=A.z-l.pos.z,Y=N*nt.x+U*nt.z,W=N*lt.x+U*lt.z,ue=$n(Y,-nn,nn),J=$n(W,-Dn,Dn),Le=Y-ue,we=W-J,pe=Math.hypot(Le,we);if(pe>=A.r)return!1;if(pe>1e-4){const Fe=(A.r-pe)/pe;P.set(-(nt.x*Le+lt.x*we)*Fe,0,-(nt.z*Le+lt.z*we)*Fe)}else{const Fe=nn-Math.abs(Y)+A.r,je=Dn-Math.abs(W)+A.r;Fe<je?P.copy(nt).multiplyScalar(-Math.sign(Y||1)*Fe):P.copy(lt).multiplyScalar(-Math.sign(W||1)*je)}return!0}function ii(A,P){const N=l.vel.dot(A);N<0&&(l.vel.addScaledVector(A,-N*1.15),-N>2.5&&(l.shake=Math.min(1,l.shake+-N/14)),-N>3&&o&&P-Xi>.25&&(Xi=P,o.splash(l.pos.x-A.x*nn,l.pos.z-A.z*nn,Math.min(1.2,-N/10))))}function yn(A){for(let P=0;P<3;P++){let N=!1;if(nt.set(Math.cos(l.heading),0,-Math.sin(l.heading)),lt.set(Math.sin(l.heading),0,Math.cos(l.heading)),n)for(const[Y,W]of xt){const ue=l.pos.x+nt.x*Y+lt.x*W,J=l.pos.z+nt.z*Y+lt.z*W;if(n(ue,J)<=en)continue;const Le=2.5;Ve.set(n(ue-Le,J)-n(ue+Le,J),0,n(ue,J-Le)-n(ue,J+Le)),Ve.lengthSq()<1e-6&&Ve.set(-l.pos.x,0,-l.pos.z),Ve.normalize();let we=0;for(;we<12&&n(ue+Ve.x*we*.4,J+Ve.z*we*.4)>en;)we++;l.pos.addScaledVector(Ve,we*.4+.05),ii(Ve,A),N=!0}const U=s?s():[];for(const Y of U)for(const W of Y)Math.abs(W.x-l.pos.x)>W.hx+W.hz+8||Math.abs(W.z-l.pos.z)>W.hx+W.hz+8||jt(W,Ut)&&(l.pos.add(Ut),ii(Ve.copy(Ut).normalize(),A),N=!0);for(const Y of i())Math.abs(Y.x-l.pos.x)>Y.r+6||Math.abs(Y.z-l.pos.z)>Y.r+6||In(Y,Ut)&&(l.pos.add(Ut),ii(Ve.copy(Ut).normalize(),A),N=!0);if(!N)break}}const si=()=>1+$n(innerHeight/Math.max(1,innerWidth)-1,0,1.2)*.5,Mn=new E,gi=new E,ri=new E,Sn=new E;let zn=0,vs=0;function vi(A,P){let N=0,U=0,Y=0;const W=!Pe();(h.has("w")||W&&h.has("arrowup"))&&(N+=1),(h.has("s")||W&&h.has("arrowdown"))&&(N-=1),(h.has("a")||W&&h.has("arrowleft"))&&(U+=1),(h.has("d")||W&&h.has("arrowright"))&&(U-=1),h.has("q")&&(Y+=1),h.has("e")&&(Y-=1),Y+=ot,N+=-d.y,U+=-d.x,l.auto&&(N=l.auto.th,U=l.auto.st,Y=l.auto.spin||0),N=$n(N,-1,1),U=$n(U,-1,1),(l.locked||l.lidOpen)&&(N=0,U=0,Y=0);const ue=h.has("shift")||Ye||!!(l.auto&&l.auto.boost);zn+=(N-zn)*(1-Math.exp(-A*4)),Mn.set(Math.cos(l.course),0,-Math.sin(l.course)),gi.set(Math.sin(l.course),0,Math.cos(l.course));let J=l.vel.dot(Mn),Le=l.vel.dot(gi);const we=ue?Au:qf,pe=N>0?N*we*.9:N*we*.5,Fe=J*(.9/we)*Math.abs(J)*.9+J*.25,je=J;J+=(pe-Fe)*A,Le*=Math.exp(-A*1.6);const ke=U*(.55+Math.min(1,Math.abs(J)/qf)*.6)*(J<-.5?-1:1);l.yawRate+=(ke-l.yawRate)*(1-Math.exp(-A*3.5)),l.course+=l.yawRate*A,l.spinRate+=(Y*1.7-l.spinRate)*(1-Math.exp(-A*4)),l.heading+=(l.yawRate+l.spinRate)*A,Mn.set(Math.cos(l.course),0,-Math.sin(l.course)),gi.set(Math.sin(l.course),0,Math.cos(l.course)),l.vel.copy(Mn).multiplyScalar(J).addScaledVector(gi,Le),l.pos.addScaledVector(l.vel,A),yn(P);const We=Math.hypot(l.pos.x,l.pos.z);We>2400&&l.pos.multiplyScalar(2400/We),l.speed=l.vel.dot(Mn);const Ge=(l.speed-je)/Math.max(A,.001),be=$n(l.speed/Au,-.3,1)*.07+$n(Ge*.006,-.03,.05),mt=$n(-l.yawRate*l.speed*.012-l.spinRate*.02,-.14,.14);if(l.pitch+=(be-l.pitch)*(1-Math.exp(-A*3)),l.roll+=(mt-l.roll)*(1-Math.exp(-A*3)),o&&!u&&Math.abs(l.speed)>6&&P-vs>.03){vs=P,nt.set(Math.cos(l.heading),0,-Math.sin(l.heading)),lt.set(Math.sin(l.heading),0,Math.cos(l.heading));const It=(Math.abs(l.speed)-6)/10;for(const Yi of[-1,1]){const Ki=l.pos.x+nt.x*3+lt.x*1.85*Yi,Al=l.pos.z+nt.z*3+lt.z*1.85*Yi;o.emit(Ki,.2,Al,lt.x*Yi*2.4+l.vel.x*.5,3.2+It*3,lt.z*Yi*2.4+l.vel.z*.5,Math.ceil(2+It*5),1.2,.1)}}!g&&performance.now()-p>2200&&(l.orbit?f+=(Math.sin(P*.13)*.95-f)*(1-Math.exp(-A*.6)):f*=Math.exp(-A*1.2)),l.inspect+=((l.lidOpen?1:0)-l.inspect)*(1-Math.exp(-A*2.2));const $e=l.inspect*l.inspect*(3-2*l.inspect),Gt=l.course+Math.PI+f-l.yawRate*.25+$e*(-Math.PI/2-.45+Math.PI),Hn=m+(.72-m)*$e;l.menuK+=((l.menu?1:0)-l.menuK)*(1-Math.exp(-A*(l.menu?1.6:3)));const Lt=l.menuK*l.menuK*(3-2*l.menuK),ai=v*si(),Tt=ai+(6.4-ai)*$e+15*Lt,Ln=Math.cos(Hn+.06*Lt)*Tt,ji=1.6+(2.05-1.6)*$e;ri.set(l.pos.x+Math.cos(Gt)*Ln,1.2+(ji-1.6)+Math.sin(Hn+.06*Lt)*Tt,l.pos.z-Math.sin(Gt)*Ln),Sn.copy(l.pos).addScaledVector(Mn,5*(1-$e)*(1-Lt)).setY(ji),Sn.x+=Math.sin(Gt)*Tt*.24*Lt,Sn.z+=Math.cos(Gt)*Tt*.24*Lt,x=Math.min(1,x+A*.8);const rn=x*x*(3-2*x);if(x<1?(l.camPos.lerpVectors(b,ri,rn),l.camLook.lerpVectors(_,Sn,rn)):(l.camPos.lerp(ri,1-Math.exp(-A*6)),l.camLook.lerp(Sn,1-Math.exp(-A*8))),l.shake>.002){const It=u?0:l.shake*.5;l.camPos.x+=(Math.random()-.5)*It,l.camPos.y+=(Math.random()-.5)*It*.6,l.camPos.z+=(Math.random()-.5)*It,l.shake*=Math.exp(-A*6)}if(st&&k){const It=Math.abs(l.speed)/Au;st.motor.frequency.setTargetAtTime(50+Math.abs(zn)*70+It*60,st.ctx.currentTime,.1),st.motorF.frequency.setTargetAtTime(260+Math.abs(zn)*900,st.ctx.currentTime,.1),st.motorG.gain.setTargetAtTime(.05+Math.abs(zn)*.22,st.ctx.currentTime,.1),st.waterF.frequency.setTargetAtTime(380+It*900,st.ctx.currentTime,.2),st.waterG.gain.setTargetAtTime(.15+It*.7,st.ctx.currentTime,.2)}qi(P)}function qi(A){q.style.transform=`scaleX(${Math.abs(zn).toFixed(3)})`,q.classList.toggle("is-back",zn<0);const P=(Math.atan2(-Math.cos(l.heading),-Math.sin(l.heading))*180/Math.PI+360)%360,N=H,U=N.canvas.width,Y=N.canvas.height;N.clearRect(0,0,U,Y),N.font="600 18px 'JetBrains Mono', monospace",N.textAlign="center";for(let ke=-60;ke<=60;ke+=5){const We=Math.round(P/5)*5+ke,Ge=U/2+(We-P)*3.4,be=(We%360+360)%360,mt=be%45===0;if(N.fillStyle="rgba(232,238,248,0.55)",N.fillRect(Ge-1,0,2,mt?16:8),mt){const $e={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"}[be];N.fillStyle="rgba(232,238,248,0.9)",N.fillText($e,Ge,40)}}if(N.fillStyle="#f2c230",N.fillRect(U/2-1.5,0,3,24),l.pois&&!l.target){N.fillStyle="#c39cf0";for(const ke of l.pois){if(ke.done||!ke.item)continue;const Ge=((Math.atan2(l.pos.x-ke.item.x,ke.item.z-l.pos.z)*180/Math.PI+360)%360-P+540)%360-180;Math.abs(Ge)>(U/2-8)/3.4||(N.beginPath(),N.arc(U/2+Ge*3.4,12,4,0,Math.PI*2),N.fill())}}if(l.target){let We=((Math.atan2(l.pos.x-l.target.x,l.target.z-l.pos.z)*180/Math.PI+360)%360-P+540)%360-180;const Ge=(U/2-14)/3.4,be=U/2+$n(We,-Ge,Ge)*3.4;if(N.fillStyle="#7cc4ff",N.beginPath(),Math.abs(We)<Ge)N.moveTo(be,22),N.lineTo(be-8,6),N.lineTo(be+8,6);else{const mt=Math.sign(We);N.moveTo(be+mt*10,14),N.lineTo(be-mt*4,4),N.lineTo(be-mt*4,24)}N.closePath(),N.fill()}N.fillStyle="rgba(232,238,248,0.95)",N.fillText(String(Math.round(P)%360).padStart(3,"0")+"°",U/2,58);const W=j,ue=W.canvas.width,J=ue/2-6;W.clearRect(0,0,ue,ue),W.save(),W.translate(ue/2,ue/2),W.fillStyle="rgba(6,10,16,0.55)",W.beginPath(),W.arc(0,0,J,0,Math.PI*2),W.fill(),W.strokeStyle="rgba(200,212,232,0.18)",W.lineWidth=1.5;for(const ke of[.33,.66,1])W.beginPath(),W.arc(0,0,J*ke,0,Math.PI*2),W.stroke();const Le=A*2.4,we=W.createConicGradient?W.createConicGradient(Le,0,0):null;we&&(we.addColorStop(0,"rgba(159,212,255,0.35)"),we.addColorStop(.12,"rgba(159,212,255,0)"),we.addColorStop(1,"rgba(159,212,255,0)"),W.fillStyle=we,W.beginPath(),W.arc(0,0,J,0,Math.PI*2),W.fill());const pe=performance.now()/1e3-M;pe<1.6&&(W.strokeStyle=`rgba(159,212,255,${1-pe/1.6})`,W.lineWidth=3,W.beginPath(),W.arc(0,0,J*(pe/1.6),0,Math.PI*2),W.stroke());const Fe=(ke,We)=>{const Ge=ke-l.pos.x,be=We-l.pos.z,mt=Math.cos(l.heading),$e=Math.sin(l.heading),Gt=Ge*mt-be*$e;return[(Ge*$e+be*mt)/fa*J,-Gt/fa*J]},je=(ke,We,Ge,be)=>{const[mt,$e]=Fe(ke,We);mt*mt+$e*$e>J*J||(W.fillStyle=Ge,W.beginPath(),W.arc(mt,$e,be,0,Math.PI*2),W.fill())};for(const ke of i())je(ke.x,ke.z,"rgba(232,238,248,0.7)",Math.max(4,ke.r/fa*J));W.fillStyle="rgba(232,238,248,0.55)";for(const ke of s?s():[])for(const We of ke){const[Ge,be]=Fe(We.x,We.z);if(Ge*Ge+be*be>J*J*1.2)continue;W.save(),W.translate(Ge,be),W.rotate(-(We.rot-l.heading)-Math.PI/2);const mt=Math.max(2,We.hx/fa*J),$e=Math.max(2,We.hz/fa*J);W.fillRect(-mt,-$e,mt*2,$e*2),W.restore()}for(const ke of a())je(ke.x,ke.z,ke.kind==="port"?"#ff5a4a":ke.kind==="stbd"?"#45d07f":ke.kind==="info"?"#c39cf0":"#f2c230",ke.kind==="info"?6:5);if(l.target){const[ke,We]=Fe(l.target.x,l.target.z),Ge=Math.hypot(ke,We),be=Ge>J-10?(J-10)/Ge:1;W.strokeStyle="#7cc4ff",W.lineWidth=3,W.beginPath(),W.arc(ke*be,We*be,9,0,Math.PI*2),W.stroke()}W.fillStyle="#e8eef8",W.beginPath(),W.moveTo(0,-9),W.lineTo(6,7),W.lineTo(-6,7),W.closePath(),W.fill(),W.restore()}function R(A){for(const P of A){const N=P.x-l.pos.x,U=P.z-l.pos.z,Y=Math.hypot(N,U),W=P.r+3.2,ue=Y<W;if(ue&&!P.touching&&(P.hits=(P.hits||0)+1),P.touching=ue,Y<W&&Y>.001){const J=(W-Y)*6;P.vx+=N/Y*J+l.vel.x*.3,P.vz+=U/Y*J+l.vel.z*.3,l.vel.length()>2.5&&o&&o.splash(P.x,P.z,.5),l.vel.multiplyScalar(.96)}}}return{get active(){return l.active},state:l,get pos(){return l.pos},get heading(){return l.heading},get course(){return l.course},get speed(){return l.speed},get vel(){return l.vel},get pitch(){return l.pitch},get roll(){return l.roll},get camPos(){return l.camPos},get camLook(){return l.camLook},get sunElev(){return l.sunElev},get weather(){return z[y]},get lidOpen(){return l.lidOpen},setLid:ve,get outBlend(){return l.outBlend},hud:S,actions:S.querySelector(".hud-actions"),onEscape(A){le.push(A)},onPause(A){Ne.push(A)},TIME_NAMES:["Day","Low sun","Sunset","Dusk","Night"],WEATHERS:z,get timeIndex(){return D},get weatherIndex(){return y},setTime:L,setWeather:_e,get soundOn(){return k},setSound:ae,showKeys:me,onManual(A){Ke.push(A)},addMenu(A,{modal:P=!0}={}){Qe.push({el:A,modal:P})},get menuOpen(){return!!Pe()},get panelOpen(){return Qe.some(A=>A.modal&&A.el.classList.contains("is-on"))},sfx:ee,shake(A){l.shake=Math.min(1,l.shake+A)},place(A,P,N){l.pos.set(A,0,P),l.heading=N,l.course=N,l.vel.set(0,0,0),l.speed=0,l.yawRate=0,l.spinRate=0,zn=0,f=0;const U=N+Math.PI,Y=v*si(),W=Math.cos(m)*Y;l.camPos.set(A+Math.cos(U)*W,1.2+Math.sin(m)*Y,P-Math.sin(U)*W),l.camLook.set(A+Math.cos(N)*5,1.6,P-Math.sin(N)*5),x=1},fade(A){l.outBlend=Math.max(0,l.outBlend-A*.9)},start:Ue,stop:Ae,update:vi,collide:R}}const pt=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),Nn=r=>r*r*(3-2*r),Ct=(r,e,t)=>r+(e-r)*t,_w=r=>1-Math.pow(1-pt(r),3),ba={lidar:{label:"LiDAR",p:[-.052,.342,.02],a:.7,e:4.6},gnss:{label:"Seapath 130 · GNSS",p:[-.416,.152,.296],a:2,e:3.2},camera:{label:"Stereo depth camera",p:[.204,.186,0],a:.25,e:2.2},case:{label:"Electronics case",p:[.008,.242,.152],a:1.2,e:3},hull:{label:"Two hulls",p:[.224,.048,-.424],a:-.6,e:1.6},props:{label:"Four propellers",p:[-.368,-.386,.296],a:2.7,e:.9},pixhawk:{label:"Pixhawk",p:[.08,.254,-.02],a:-.3,e:5.5},link:{label:"5G link",p:[.032,.246,-.004],a:-1.8,e:5}},Zo=(r,e)=>window.dispatchEvent(new CustomEvent(r,{detail:e}));function jf(){const r=Math.min(innerWidth,innerHeight)<700,e=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches;return r||e||(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4}async function yw({reduced:r=!1}={}){const e=document.createElement("canvas");e.id="scene",e.setAttribute("aria-hidden","true"),document.body.prepend(e);const t=Math.min(innerWidth,innerHeight)<700,n=jf(),i=document.body.hasAttribute("data-game");let s;try{s=new $p({canvas:e,antialias:!1,alpha:!1,powerPreference:jf()?"default":"high-performance"})}catch{return e.remove(),Zo("scene:failed"),null}let a=!1;e.addEventListener("webglcontextlost",G=>{G.preventDefault(),a=!0}),e.addEventListener("webglcontextrestored",()=>{a=!1;try{h.bake(!0),u.environment=h.env,en(),s.shadowMap.needsUpdate=!0}catch(G){console.warn("could not restore the scene",G)}});const o=Math.min(devicePixelRatio||1,n?1.5:2);let c=o;s.setPixelRatio(o),s.setSize(innerWidth,innerHeight,!1),s.outputColorSpace=Yt,s.setClearColor(0),s.shadowMap.enabled=!0,s.shadowMap.type=Yu,s.shadowMap.autoUpdate=!1;const u=new Fa,l=new Xt(38,innerWidth/innerHeight,.5,6e4),h=dS(s,{lowPower:n});h.stars.material.uniforms.uPx.value=o,u.add(h.group);const d=204;let f=parseFloat(document.body.dataset.sun||"16"),m=f;h.setSun(m,d),h.bake(!0),u.environment=h.env,u.environmentIntensity=1,nc.uPano.value=h.pano.texture;const v=new Va(16777215,3),g=new Va(new oe(.62,.7,1),0);g.position.copy(Gu).multiplyScalar(1e3),u.add(v,v.target,g),v.castShadow=!0;const p=t?1024:n?2048:4096;v.shadow.mapSize.set(p,p),Object.assign(v.shadow.camera,{left:-5.5,right:5.5,top:5.5,bottom:-5.5,near:1,far:120}),v.shadow.camera.updateProjectionMatrix(),v.shadow.bias=-4e-4,v.shadow.normalBias=.025,v.shadow.radius=2;let x=.1;const b=G=>G.r*.2126+G.g*.7152+G.b*.0722,_=new oe,C=gS({lowPower:n});C.material.uniforms.uPano.value=h.pano.texture;const M=C.material.uniforms,T=vS();u.add(C,T);const D=r?null:mw(n?160:320);D&&u.add(D.points);const z=vw(n?350:700);u.add(z.points);const y=bw(n?1500:3500);u.add(y.lines);const S={over:0,fog:0,rain:0};let F=null,O=null,B=null,q=null,H=null,j=null,X=null,he=null,ye=null,fe=null,Ze=null;const ct=async()=>{F=await On(()=>import("./terrain-0OKTOW1R.js"),__vite__mapDeps([0,1,2]),import.meta.url);const{createTerrain:G,createShoreLights:Q}=F;u.add(await G({lowPower:n})),Ze=Q({lowPower:n}),Ze.material.uniforms.uPx.value=o,u.add(Ze);const{createProps:Te}=await On(async()=>{const{createProps:Se}=await import("./props-Vq6MTVeB.js");return{createProps:Se}},__vite__mapDeps([3,0,1,2]),import.meta.url);if(O=Te({lowPower:n}),u.add(O.group),te){const{createMissions:Se}=await On(async()=>{const{createMissions:yt}=await import("./missions-B8AfCl3w.js");return{createMissions:yt}},__vite__mapDeps([4,5,6,7,1,2]),import.meta.url);B=Se({scene:u,props:O,drive:te,isGame:document.body.hasAttribute("data-game")&&!he});const{createPlaces:Ee}=await On(async()=>{const{createPlaces:yt}=await import("./places-Dqdkkz7J.js");return{createPlaces:yt}},__vite__mapDeps([8,7,1,2]),import.meta.url);q=Ee({scene:u,props:O,drive:te,missions:B});const{createBoats:He}=await On(async()=>{const{createBoats:yt}=await import("./boats-BbT6cIeO.js");return{createBoats:yt}},__vite__mapDeps([9,0,1,2,5]),import.meta.url);H=He({props:O,lowPower:n}),u.add(H.group);const{createScore:at}=await On(async()=>{const{createScore:yt}=await import("./score-hT9aZCLI.js");return{createScore:yt}},__vite__mapDeps([10,7]),import.meta.url),Dt=109*Math.PI/180;j=at({drive:te,island:{x:Math.cos(Dt)*980,z:Math.sin(Dt)*980,r:80}});const an={gold:50,silver:30,bronze:15};B.onFinish=({name:yt,pts:on,medal:gt,total:pn,auto:Jn})=>{if(Jn){j.achieve("autotask"),j.add(25,`Argus sailed ${yt} on its own`);return}j.count("tasks"),j.add(on,`${yt}: ${on} points`),gt&&j.add(an[gt.id],`${gt.name} medal`,{big:!0}),pn!=null&&j.add(100,"Full Njord run",{big:!0})},q.onVisit=({place:yt,row:on,all:gt})=>{j.add(100,`New place: ${yt.title}`),on&&j.add(250,`${on}: all seen`,{big:!0}),gt&&j.add(1e3,"Every place visited",{big:!0})},j.setStats(()=>({places:[q.visited.length,q.list.length],medals:B.medals}));const{createPostFx:Bt}=await On(async()=>{const{createPostFx:yt}=await import("./postfx-rfwifhop.js");return{createPostFx:yt}},__vite__mapDeps([11,4,5,6,7,1,2,9,0]),import.meta.url);ye=Bt({places:q,lowPower:n,getArgusModel:()=>xe.children.length?xe:null}),u.add(ye.group);const{createAutopilot:Kn}=await On(async()=>{const{createAutopilot:yt}=await import("./autopilot-BeBv6DYc.js");return{createAutopilot:yt}},__vite__mapDeps([12,6,1,2]),import.meta.url);X=Kn({scene:u,drive:te,missions:B,places:q,score:j,lowPower:n,getColliders:()=>[F?F.COLLIDERS:[],O.colliders,B.colliders],getObstacles:()=>O.obstacles,getBuoys:()=>O.buoys,landHeight:(yt,on)=>F.landHeight(yt,on),getMovers:()=>{const yt=[];for(const gt of H.list)!(gt.wait>0)&&gt.item.obj.visible&&yt.push({x:gt.item.x,z:gt.item.z,vx:Math.cos(gt.yaw)*gt.speed,vz:-Math.sin(gt.yaw)*gt.speed,r:Math.max(gt.L,gt.B)/2});for(const gt of O.traffic)gt.vx!=null&&yt.push({x:gt.it.x,z:gt.it.z,vx:gt.vx,vz:gt.vz,r:Math.max(gt.it.hx,gt.it.hz)});const on=B.run;if(on&&on.otters)for(const gt of on.otters)gt.on&&!gt.gone&&yt.push({x:gt.x,z:gt.z,vx:Math.cos(gt.h)*gt.v,vz:-Math.sin(gt.h)*gt.v,r:3.6});return yt}}),he&&he.refresh()}if(!r){const{createBirds:Se}=await On(async()=>{const{createBirds:Ee}=await import("./birds-B_IUDn9q.js");return{createBirds:Ee}},__vite__mapDeps([13,1,2]),import.meta.url);fe=Se(n?12:26),u.add(fe.mesh)}},K=new Cn;u.add(K);const ce=6.2,ge=tw({renderer:s,lowPower:n,onProgress:G=>Zo("scene:progress",G)}),xe=ge.model;xe.scale.setScalar(ce),xe.position.y=.0884*ce,K.add(xe);const Ye=(()=>{const G=document.createElement("canvas");G.width=G.height=64;const Q=G.getContext("2d"),Te=Q.createRadialGradient(32,32,0,32,32,32);return Te.addColorStop(0,"rgba(255,255,255,1)"),Te.addColorStop(.25,"rgba(214,186,236,0.6)"),Te.addColorStop(1,"rgba(214,186,236,0)"),Q.fillStyle=Te,Q.fillRect(0,0,64,64),new xh(G)})();let te=null,qe=0;const ot=[[.49,.13,-.296,16726570],[.49,.13,.296,3866474]].map(([G,Q,Te,Se])=>{const Ee=new mh(new cl({map:Ye,color:new oe(Se).multiplyScalar(2.5),transparent:!0,depthWrite:!1,blending:bn}));return Ee.scale.setScalar(.05),Ee.position.set(G,Q,Te),xe.add(Ee),Ee}),re=new Jt(4,4,{type:Bn,samples:n?0:4});M.uReflect.value=re.texture;const L=new Xt,ve=new _i,me=new bt,de=new bt,_e=new E,ze=new E;function Re(){l.updateMatrixWorld(),_e.set(0,0,-1).applyQuaternion(l.quaternion),ze.set(0,1,0).applyQuaternion(l.quaternion),L.position.set(l.position.x,-l.position.y,l.position.z),_e.y=-_e.y,ze.y=-ze.y,L.up.copy(ze),L.lookAt(L.position.x+_e.x,L.position.y+_e.y,L.position.z+_e.z),L.far=l.far,L.updateMatrixWorld(),L.projectionMatrix.copy(l.projectionMatrix);const G=M.uReflectMatrix.value;G.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),G.multiply(L.projectionMatrix).multiply(L.matrixWorldInverse),ve.set(new E(0,1,0),.6).applyMatrix4(L.matrixWorldInverse),me.set(ve.normal.x,ve.normal.y,ve.normal.z,ve.constant);const Q=L.projectionMatrix;de.x=(Math.sign(me.x)+Q.elements[8])/Q.elements[0],de.y=(Math.sign(me.y)+Q.elements[9])/Q.elements[5],de.z=-1,de.w=(1+Q.elements[10])/Q.elements[14],me.multiplyScalar(2/me.dot(de)),Q.elements[2]=me.x,Q.elements[6]=me.y,Q.elements[10]=me.z+1,Q.elements[14]=me.w,L.projectionMatrixInverse.copy(Q).invert();const Te=[C,T,D&&D.points].filter(Boolean),Se=Te.map(Ee=>Ee.visible);Te.forEach(Ee=>Ee.visible=!1),s.setRenderTarget(re),s.clear(),s.render(u,L),s.setRenderTarget(null),Te.forEach((Ee,He)=>Ee.visible=Se[He])}const I=pw(s,u,l,{lowPower:n}),w=[...document.querySelectorAll("[data-stage]")],V=new Set(w.map(G=>G.dataset.stage));let Z=null,se=null;if(V.has("course")){const{createCourse:G}=await On(async()=>{const{createCourse:Q}=await import("./course-IpGOpRQe.js");return{createCourse:Q}},__vite__mapDeps([14,1,2]),import.meta.url);Z=G(),Z.setOpacity(0),Z.route.material.uniforms.uPx.value=o,u.add(Z.group)}let ne=null;V.has("globe")&&(ne=await sw({lowPower:n}),ne.setOpacity(0),u.add(ne.group));let De=null;const Me=document.querySelector('[data-stage="photo"]');if(Me&&Me.dataset.src)try{De=await gw(Me.dataset.src,{lowPower:n}),u.add(De.points)}catch{Me.classList.add("is-formed")}if(V.has("coast")){const{createCoast:G}=await On(async()=>{const{createCoast:Q}=await import("./coast-BGanyN1v.js");return{createCoast:Q}},__vite__mapDeps([15,1,2]),import.meta.url);se=G(n?.6:1),se.setOpacity(0),se.setPx(o),u.add(se.group)}const Ce=w.map(G=>{const Q=G.querySelector("[data-labels]"),Se=(G.dataset.parts||"").split(",").filter(Boolean).map(Ee=>{const He=document.createElement("div");return He.className="hotspot",He.innerHTML=`<i></i><span>${ba[Ee].label}</span>`,Q&&Q.appendChild(He),{key:Ee,el:He,v:new E}});return{el:G,kind:G.dataset.stage,view:G.dataset.view||"",offset:parseFloat(G.dataset.offset||"0"),steps:[...G.querySelectorAll("[data-part]")],listMode:G.dataset.mode==="list",labels:Q?Se:[],cities:G.querySelector("[data-cities]"),tasks:[...G.querySelectorAll("[data-task]")],through:G.hasAttribute("data-through"),arcStart:parseFloat(G.dataset.arcStart||"0.45"),zoom:parseFloat(G.dataset.zoom||"1"),anchor:G.dataset.anchor?G.querySelector(G.dataset.anchor):null,globePins:[...G.querySelectorAll("[data-globe-pin]")],p:0,w:0,active:null}}),tt=Ce.find(G=>G.kind==="hero");let le=null;tt&&tt.el.dataset.title&&nw(tt.el.dataset.title).then(G=>{le=G,u.add(G),document.documentElement.classList.add("has-3d-title")});function Ne(){const G=innerHeight;for(const Q of Ce){const Te=Q.el.getBoundingClientRect();if(Q.kind==="hero"){Q.p=pt(-Te.top/Math.max(1,Te.height)),Q.w=1-Nn(pt((-Te.top-Te.height*.05)/(Te.height*.75)));continue}if(Q.kind==="photo"){Q.w=Nn(pt((G-Te.top)/(G*.4)))*Nn(pt(Te.bottom/(G*.4)));continue}const Se=Math.max(1,Q.el.offsetHeight-G);Q.p=Q.through?pt((G-Te.top)/(G+Te.height)):pt(-Te.top/Se);const Ee=pt(1-Te.top/(G*.85)),He=pt((Te.bottom-G*.15)/(G*.85));Q.w=Nn(Math.min(Ee,He));let at=null;if(Q.listMode){let Dt=1/0;for(const an of Q.steps){const Bt=an.getBoundingClientRect(),Kn=Math.abs(Bt.top+Bt.height/2-G*.5);Kn<Dt&&Bt.bottom>0&&Bt.top<G&&(Dt=Kn,at=an)}}else if(Q.steps.length){const Dt=pt((Q.p-.22)/.62);at=Q.p>.2&&Q.p<.88?Q.steps[Math.min(Q.steps.length-1,Math.floor(Dt*Q.steps.length*.999))]:null}if(at!==Q.active&&(Q.steps.forEach(Dt=>Dt.classList.toggle("is-on",Dt===at)),Q.active=at),Q.tasks.length){const Dt=Math.min(Q.tasks.length-1,Math.floor(Q.p*Q.tasks.length*.999));Q.tasks.forEach((an,Bt)=>an.classList.toggle("is-on",Bt===Dt))}}}const Ke=document.querySelector(".hero-home"),Qe=parseFloat(document.body.dataset.offset||(Ke?"0.14":"0.3")),Pe=new E,rt=new E,Je=new E,st=new $,k=new $;addEventListener("pointermove",G=>{st.set(G.clientX/innerWidth*2-1,G.clientY/innerHeight*2-1)},{passive:!0});function Oe(G,Q,Te,Se){const Ee=-.9-Q*4.33+G*.012,He=t?30:40;Te.set(Math.cos(Ee)*He,7+Q*5,Math.sin(Ee)*He),Se.set(-Math.cos(Ee)*70,3,-Math.sin(Ee)*70)}const ee={home:{a:-.95,r:15.5,rs:34,y:2.3,look:1,off:.25,offY:.02,offYs:.2},argus:{a:-.5,r:13.5,rs:31,y:1.7,look:1.4,off:0,offY:-.1,offYs:.04}};function ae(G,Q,Te){const Se=ee[G.view]||ee.home,Ee=r?0:Math.sin(J*.09)*.14,He=Se.a+Ee+k.x*.22+G.p*.5,at=(t?Se.rs:Se.r)+G.p*6;return Q.set(Math.cos(He)*at,Se.y+G.p*5-k.y*.35,Math.sin(He)*at),Te.set(0,Se.look,0),Se}function Ue(G,Q,Te){let Se=-.55+G.p*Math.PI*1.7,Ee=2.6+Math.sin(G.p*Math.PI)*2.2;if(G.listMode){const at=G.active&&ba[G.active.dataset.part],Dt=at?at.a:-.5,an=at?at.e:3;G.a===void 0&&(G.a=Dt,G.e=an);let Bt=Dt-G.a;Bt=Math.atan2(Math.sin(Bt),Math.cos(Bt)),G.a+=Bt*.045,G.e+=(an-G.e)*.045,Se=G.a+G.p*.6,Ee=G.e}const He=G.listMode?t?15:13.5:t?11:9.2;Q.set(Math.cos(Se)*He,Ee*(G.listMode?1.35:1),Math.sin(Se)*He),Te.set(0,.9,0)}let Ae=0;function nt(G,Q,Te){Ae=Ct(Z.phases[0],1,G);const Se=Z.curve.getPointAt(pt(Ae)),Ee=Z.curve.getPointAt(pt(Ae+.035)),He=Pe.copy(Ee).sub(Se).normalize(),at=t?1.9:1;return Q.set(Se.x-(He.x*16+He.z*8)*at,t?17:9.5,Se.z-(He.z*16-He.x*8)*at),Te.set(Ee.x,.5,Ee.z),Se}const lt=new E;function Ut(G,Q,Te){if(t){const Se=se.pins,Ee=pt(G*1.1)*(Se.length-1),He=Math.min(Se.length-2,Math.floor(Ee));lt.copy(Se[He].top).lerp(Se[He+1].top,Ee-He).setY(0),Q.set(lt.x+10,150,lt.z+95),Te.copy(lt).setZ(lt.z-25);return}Q.set(60+G*40,190-G*30,150-G*90),Te.set(95+G*30,0,-10-G*40)}let Ve=innerWidth,xt=innerHeight;function en(){if(Ve=innerWidth,xt=innerHeight,s.setPixelRatio(c),s.setSize(Ve,xt,!1),l.aspect=Ve/xt,i){const Q=2*Math.atan(Math.tan(ln.degToRad(44)/2)/l.aspect)*180/Math.PI;l.fov=pt(Q,38,66)}l.updateProjectionMatrix(),I.setSize(Ve,xt,c);const G=n?.5:.75;re.setSize(Math.round(Ve*c*G),Math.round(xt*c*G)),ge.points.uProj.value=xt*c/(2*Math.tan(ln.degToRad(l.fov/2))),ne&&ne.setPx(1,ge.points.uProj.value)}let Xi=0;addEventListener("resize",()=>{clearTimeout(Xi),Xi=setTimeout(en,120)});const jt={start:-1,done:r},In=1.5,ii=1.7;let yn=ga,si=0,Mn=0;const gi=new E(99,99,99);r&&(ge.points.uAssemble.value=1,yn=Ns);let ri=0,Sn=0;const zn=[["pixhawk","Pixhawk flight controller","is-below"],["link","5G link"],["computer","Computer"],["power","Power"]],vs=[],vi=new E,qi=[[],[],[]];if(te=xw({camera:l,reduced:r,spray:z,getBoat:()=>({pos:K.position,heading:ri}),getElev:()=>m,landHeight:(G,Q)=>F?F.landHeight(G,Q):-10,obstacles:()=>O?O.obstacles:[],colliders:()=>(qi[0]=F?F.COLLIDERS:[],qi[1]=O?O.colliders:[],qi[2]=B?B.colliders:[],qi),buoys:()=>O?O.buoys:[],onPing:G=>{j&&j.achieve("ping"),M.uRipple.value[qe].set(G.x,G.z,J,2.4),qe=(qe+1)%Wc}}),document.body.hasAttribute("data-game")){const{createGameMenu:G}=await On(async()=>{const{createGameMenu:Q}=await import("./gamemenu-C0ZIK8YJ.js");return{createGameMenu:Q}},[],import.meta.url);he=G({drive:te,get:()=>({missions:B,places:q,autopilot:X,score:j})})}for(const[G,Q,Te]of zn){const Se=document.createElement("span");Se.className="lid-label"+(Te?" "+Te:""),Se.textContent=Q,te.hud.appendChild(Se),vs.push({mark:G,el:Se})}const R=()=>{jt.done=!0,yn=Ns,te.start()};addEventListener("drive:start",R),document.addEventListener("click",G=>{G.target.closest&&G.target.closest("[data-drive]")&&(G.preventDefault(),R())}),document.documentElement.classList.add("can-drive");const A=[...document.querySelectorAll(".win-box, [data-win]")],P=new Map,N=()=>A.forEach(G=>P.set(G,parseFloat(getComputedStyle(G).borderTopLeftRadius)||0));N(),addEventListener("resize",N);let U="";const Y=(G,Q,Te,Se,Ee)=>{Ee=Math.min(Ee,Te/2,Se/2);const He=at=>Math.round(at*10)/10;return`M${He(G+Ee)} ${He(Q)}H${He(G+Te-Ee)}A${He(Ee)} ${He(Ee)} 0 0 1 ${He(G+Te)} ${He(Q+Ee)}V${He(Q+Se-Ee)}A${He(Ee)} ${He(Ee)} 0 0 1 ${He(G+Te-Ee)} ${He(Q+Se)}H${He(G+Ee)}A${He(Ee)} ${He(Ee)} 0 0 1 ${He(G)} ${He(Q+Se-Ee)}V${He(Q+Ee)}A${He(Ee)} ${He(Ee)} 0 0 1 ${He(G+Ee)} ${He(Q)}Z`};function W(G){let Q="";if(G)Q="full";else for(const Se of A){const Ee=Se.getBoundingClientRect();Ee.bottom<=0||Ee.top>=innerHeight||Ee.width<2||Ee.height<2||Se.closest(".is-formed")||(Q+=Y(Ee.left,Ee.top,Ee.width,Ee.height,P.get(Se)||0))}const Te=Q==="full"?"none":Q?`path('${Q}')`:"inset(50%)";return Te!==U&&(e.style.clipPath=Te,U=Te),!!Q}const ue=new Wa;let J=0,Le=!0;document.addEventListener("visibilitychange",()=>Le=!document.hidden);let we=0,pe=0,Fe=0,je=0;const ke=new E;let We=1,Ge=0;const be=new $(1e9,1e9),mt=new Wa(!1);let $e=null;const Gt=()=>$e!==null?$e:mt.getElapsedTime();function Hn(){if(requestAnimationFrame(Hn),!Le||a)return;const G=ue.getDelta(),Q=Math.min(G,window.__dtMax||.05);if(r||(J+=Q),ji(G),Ne(),!W(i||te&&(te.active||te.outBlend>0))&&!(jt.start>=0&&!jt.done))return;const Te=Math.max(1,document.documentElement.scrollHeight-innerHeight),Se=pt(scrollY/Te);Oe(J,Se,rt,Je);const Ee=new E;let He=1,at=t&&!tt?0:1,Dt=0,an=0,Bt=0,Kn=0,yt=null,on=0,gt=0,pn=t?0:Qe,Jn=0,sr=0,io=null;k.lerp(st,1-Math.exp(-Q*2.8));for(const ie of Ce){if(ie.w<=.001)continue;const ut=new E,Et=new E;if(ie.kind==="hero"){const Ot=ae(ie,ut,Et);at=Math.max(at,ie.w),pn=Ct(pn,t?0:Ot.off,ie.w),Jn=Ct(Jn,t?Ot.offYs:Ot.offY,ie.w)}else if(ie.kind==="argus"){at=Math.max(at,ie.w),Ue(ie,ut,Et),pn=Ct(pn,t?0:ie.offset,ie.w),t&&ie.listMode&&(Jn=Ct(Jn,.25,ie.w));const Ot=ie.listMode?1:Nn(pt((ie.p-.06)/.16))*(1-Nn(pt((ie.p-.86)/.12)));sr=Math.max(sr,Ot*pt(ie.w*1.6-.3)),ie.active&&ie.w>.5&&(io=ie.active.dataset.part)}else if(ie.kind==="course"&&Z){at=Math.max(at,ie.w);const Ot=nt(ie.p,ut,Et);Ee.lerp(Ot,ie.w),Dt=Math.max(Dt,ie.w),pn=Ct(pn,0,ie.w)}else if(ie.kind==="globe"&&ne){const Ot=Nn(pt((ie.p-ie.arcStart)/.38));Kn=Math.max(Kn,Ot),Bt=Math.max(Bt,ie.w),yt=ie;const Zn=Ct(ui.trondheim.lat,ui.sarasota.lat,Ot*.85),Jr=Ct(ui.trondheim.lon,ui.sarasota.lon,Ot*.85);ne.face(Zn*.8,Jr+(r?0:Math.sin(J*.12)*4));let or=(xi*(t?5.8:4.3)-ie.p*xi*.4)*ie.zoom,Zr=t?0:ie.offset,nd=t?.12:0;if(ie.anchor){const cr=ie.anchor.getBoundingClientRect();Zr=(cr.left+cr.width/2-Ve/2)/Ve,nd=-(cr.top+cr.height/2-xt/2)/xt;const $m=Math.min(cr.width,cr.height)*.46;or=xi*(xt/2)/($m*Math.tan(ln.degToRad(l.fov/2))),on=Math.max(on,ie.w)}ut.set(Us.x+k.x*3,Us.y,Us.z+or),Et.copy(Us),at=Math.min(at,1-ie.w),He=Ct(He,.4,ie.w),pn=Ct(pn,Zr,ie.w),Jn=Ct(Jn,nd,ie.w)}else if(ie.kind==="photo"&&De){ie.w>.5&&ie.t0===void 0&&(ie.t0=J);const Ot=ie.t0===void 0?0:J-ie.t0;De.U.uAssemble.value=r?1:pt(Ot/1.9),De.U.uScan.value=r?2:Ct(-.1,1.1,pt((Ot-.5)/1.7)),(Ot>2.2||r)&&ie.el.classList.add("is-formed"),gt=Math.max(gt,ie.w*(Ot<2.6?1:Math.max(0,1-(Ot-2.6)/.9)));const Zn=ie.el.getBoundingClientRect(),Jr=Math.tan(ln.degToRad(l.fov/2)),or=De.width*Ve/(2*Jr*l.aspect*Math.max(80,Zn.width)),Zr=pt(1-(Ot-1.9)/.5);ut.set(va.x+k.x*or*.1*Zr,va.y-k.y*or*.06*Zr,va.z+or),Et.copy(va),pn=Ct(pn,(Zn.left+Zn.width/2-Ve/2)/Ve,ie.w),Jn=Ct(Jn,-(Zn.top+Zn.height/2-xt/2)/xt,ie.w),on=Math.max(on,ie.w),at=Math.min(at,1-ie.w),He=Ct(He,.5,ie.w)}else ie.kind==="coast"&&se&&(Ut(ie.p,ut,Et),an=Math.max(an,ie.w),at=Math.min(at,1-ie.w),He=Ct(He,.45,ie.w),pn=Ct(pn,t?0:ie.offset,ie.w));rt.lerp(ut,ie.w),Je.lerp(Et,ie.w)}if(rt.x+=k.x*.6,rt.y+=-k.y*.3,Pe.copy(rt).sub(Ee).setY(Math.max(rt.y-1,0)),Pe.length()<8.5&&rt.copy(Ee).add(Pe.setLength(8.5)).setY(Math.max(rt.y,1.2)),!jt.done&&jt.start>=0){const ie=Gt();ge.points.uAssemble.value=pt(ie/In);const ut=_w((ie-In*.75)/ii);yn=Ct(ga,Ns,ut),si=0,ie>In*.75+ii&&(jt.done=!0,Zo("scene:intro-done"))}else if(jt.done){const ie=Ct(Ns,ga,sr),ut=Q*1.4;yn+=pt(ie-yn,-ut,ut),window.__snap&&(yn=ie),yn<Ns-.005?si=1:si=0}ge.uniforms.uCut.value=yn,ge.uniforms.uGhost.value=si,Mn=Ct(Mn,io&&sr>.5?1:0,window.__snap?1:1-Math.exp(-Q*5)),io&&gi.fromArray(ba[io].p),ge.points.uHi.value.lerp(gi,1-Math.exp(-Q*8)),ge.points.uHiOn.value=Mn,ge.uniforms.uTime.value=J;const Xh=te&&(te.active||te.outBlend>0)?te.weather:null,jm=window.__snap?1:1-Math.exp(-Q*.8);for(const ie of["over","fog","rain"]){const ut=Xh?Xh[ie]:0;S[ie]+=(ut-S[ie])*jm,Math.abs(ut-S[ie])<.002&&(S[ie]=ut)}const Ji=S.over;h.setOvercast(Ji),h.uniforms.uCloud.value=Ct(.56,1.1,Ji),nc.uFog.value=12e4*Math.pow(420/12e4,S.fog);const Ym=te&&te.active?te.sunElev:Ct(f,-5,Nn(pt((Se-.04)/.92)));m+=(Ym-m)*(1-Math.exp(-Q*2.5)),Math.abs(m-h.state.elev)>.03&&h.setSun(m,d),h.bake()&&(u.environment=h.env);const wn=h.state,cn=wn.night;h.skyAt(0,1,0,_),x+=(b(_)-x)*.2,v.color.copy(wn.sunColor),v.intensity=3.2*(1-.9*Ji),v.position.copy(wn.dir).multiplyScalar(1e3).add(Je),v.target.position.copy(Je);const Rl=!!(te&&te.active),Km=pt(Math.pow(.1/Math.max(x,1e-4),.5),.85,Rl?10:4.2),qh=Rl?Math.max(cn,Nn(pt((1-wn.elev)/8))):0;g.intensity=Rl?Math.max(cn,qh*.7)*1.1:cn*.35,u.environmentIntensity=1+qh*3.2,We+=(Km-We)*(1-Math.exp(-Q*3)),nc.uNight.value=cn,Ze&&(Ze.material.uniforms.uNight.value=cn/We,Ze.visible=cn>.02);let Cl=0;for(const ie of Ce)Cl=Math.max(Cl,ie.w);te&&te.active&&(Cl=1);const jh=1,Yh=te&&te.active?1:tt?tt.w:0;He*=jh;let Gn=0,Pl=0;if(te&&te.active)te.update(Q,J),Ee.set(te.pos.x,0,te.pos.z),Gn=te.heading,Pl=te.speed,at=1,rt.copy(te.camPos),Je.copy(te.camLook),pn=0,Jn=0,sr=0;else if(Dt>.001&&Z){const ie=Z.curve.getPointAt(pt(Ae)),ut=Z.curve.getPointAt(pt(Ae+.01));Gn=-Math.atan2(ut.z-ie.z,ut.x-ie.x),Gn*=Dt}if(te&&!te.active&&te.outBlend>0){const ie=Nn(te.outBlend);te.fade(Q),Ee.lerp(te.pos,ie);let ut=te.heading-Gn;ut=Math.atan2(Math.sin(ut),Math.cos(ut)),Gn+=ut*ie,rt.lerp(te.camPos,ie),Je.lerp(te.camLook,ie),at=Math.max(at,ie)}ri=Gn;const rr=Ee.x,ar=Ee.z,Kh=Uf(rr,ar,J,1),[Jh,Zh]=rS(rr,ar,J,1);K.position.set(rr,Kh*.8,ar),ge.uniforms.uWater.value=Kh;const Jm=te&&te.active?te.pitch:0,Zm=te&&te.active?te.roll:0;if(K.rotation.set(0,0,0),K.rotateY(Gn),K.rotateZ((Jh*Math.cos(Gn)-Zh*Math.sin(Gn))*1.1+Jm),K.rotateX(-(Jh*Math.sin(Gn)+Zh*Math.cos(Gn))*1.1+Zm),K.visible=at>.02,ge.points.uOpacity.value=at,ge.points.uGain.value=1/We,ge.uniforms.uEdgeGain.value=1/We,xe.traverse(ie=>{ie.isMesh&&(ie.material.transparent=at<.999,ie.material.opacity=at)}),Math.hypot(rr-be.x,ar-be.y)>1.3&&K.visible){const ie=te&&te.active?pt(Pl/14):Dt>.1?.6:0;ie>.02&&(M.uWake.value[Ge].set(rr,ar,J,ie),Ge=(Ge+1)%Vu),be.set(rr,ar)}l.position.copy(rt),l.lookAt(Je);const Qh=on>.5?1:1-Math.exp(-Q*5);if(pe=Ct(pe,pn,Qh),Fe=Ct(Fe,Jn,Qh),Math.abs(pe)>.002||Math.abs(Fe)>.002?l.setViewOffset(Ve,xt,-pe*Ve,Fe*xt,Ve,xt):l.clearViewOffset(),le&&tt){const ie=ee[tt.view]||ee.home,ut=t?ie.rs:ie.r;ke.set(-Math.cos(ie.a)*7,2.3+(t?.5:0),-Math.sin(ie.a)*7),le.position.copy(ke),le.lookAt(Math.cos(ie.a)*ut,2.3,Math.sin(ie.a)*ut);const Zn=2*(ut+7)*Math.tan(ln.degToRad(l.fov/2))*l.aspect*(t?.94:.86);le.scale.setScalar(Zn/le.userData.aspect);const Jr=jt.done||r?tt.w:pt((Gt()-In*.75-ii*.5)/.8)*tt.w;je=Math.min(je+(Jr-je)*(1-Math.exp(-Q*3)),tt.w)*(te&&te.active?0:1),le.material.opacity=je,le.material.color.setScalar(.95/We),le.visible=je>.01}we+=Q*2.4,M.uTime.value=J,M.uCenter.value.set(Math.round(l.position.x),Math.round(l.position.z)),M.uBoat.value.set(K.position.x,K.position.z),M.uBoatDir.value.set(Math.cos(-Gn),Math.sin(-Gn)),M.uBoatSpeed.value=pt(Pl/14),M.uBoatOn.value=K.visible?1:0,M.uSweepAngle.value=-we,M.uCam.value.copy(l.position),M.uDim.value=He,M.uSweep.value=at*(jt.done?1:pt(yn-ga))*(1-sr*.5)*.6/We,Sn+=((te&&te.active&&te.lidOpen?1:0)-Sn)*(1-Math.exp(-Q*2.6)),ge.lid&&(ge.lid.rotation.x=-1.85*(Sn*Sn*(3-2*Sn)));const Qm=Sn>.85&&K.visible;for(const ie of vs){const ut=ge.marks[ie.mark];let Et=Qm&&!!ut;if(Et&&(ut.getWorldPosition(vi).project(l),Et=vi.z<1&&Math.abs(vi.x)<1.1&&Math.abs(vi.y)<1.1,Et)){let Ot=(vi.x*.5+.5)*innerWidth;const Zn=Ot+12+ie.el.offsetWidth>innerWidth-8;Zn&&(Ot-=ie.el.offsetWidth+24),ie.el.classList.toggle("is-left",Zn),ie.el.style.transform=`translate(${Ot.toFixed(1)}px, ${((-vi.y*.5+.5)*innerHeight).toFixed(1)}px)`}ie.el.classList.toggle("is-on",Et)}for(const ie of ot)ie.material.opacity=cn*at,ie.visible=cn>.05&&K.visible;if(wn.elev>-2?(M.uSun.value.copy(wn.dir),M.uSunCol.value.copy(wn.sunColor)):(M.uSun.value.copy(Gu),M.uSunCol.value.setRGB(.0022,.0025,.003).multiplyScalar(cn)),M.uNight.value=cn,M.uBody.value.setRGB(.02,.075,.09).multiplyScalar(Math.max(x,.0015)*1.3),h.uniforms.uDim.value=Ct(1,He,.6),h.uniforms.uSunVis.value=(.15+.85*Yh)*(1-Nn(pt(Ji/.8))),M.uGlit.value=(.3+.7*Yh)*(te&&te.active?.6:1)*(1-Ji),M.uFog.value=12e4*Math.pow(340/12e4,S.fog),M.uRain.value=S.rain,M.uChop.value=1+.35*Ji+.5*S.rain,ge.uniforms.uWetAll.value=S.rain,y.lines.visible=S.rain>.01,y.lines.visible&&(y.uniforms.uTime.value=J,y.uniforms.uCam.value.copy(l.position),y.uniforms.uAmount.value=S.rain,y.uniforms.uCol.value.copy(_).multiplyScalar(1.5).addScalar(.004*cn)),h.update(J),T.position.set(K.position.x,.25,K.position.z),T.rotation.y=we,T.material.uniforms.uOpacity.value=at*(1-an)*(jt.done?1:0)*(.15+cn*.35)/We,Z){Z.setOpacity(Dt),Z.route.material.uniforms.uU.value=Ae,Z.route.material.uniforms.uTime.value=J;for(const Et of Z.floaters)Et.obj.position.y=Uf(Et.x,Et.z,J,1)*.8+Et.lift;const ie=Z.otter,ut=pt((Ae-Z.phases[2])/(Z.phases[3]-Z.phases[2]));ie.obj.position.set(ie.x,ie.obj.position.y,ie.z-ut*56)}if(De&&(De.U.uOpacity.value=gt,De.U.uProj.value=ge.points.uProj.value,De.points.visible=gt>.01),ne&&(ne.setOpacity(Bt/Math.sqrt(We)),ne.update(J,Kn,0),T.material.uniforms.uOpacity.value*=1-Bt,yt&&Yi(yt,Kn)),se){se.setOpacity(an/Math.sqrt(We));const ie=Ce.find(ut=>ut.kind==="coast");se.routeMat.uniforms.uTo.value=ie?pt(ie.p*1.15):0,se.routeMat.uniforms.uTime.value=J,ie&&ie.cities&&Al(ie)}if(H&&H.update(J,Q,cn,!!(te&&te.active)),H&&fe&&te&&te.active){const ie=H.list.find(ut=>ut.L===34);if(ie)for(let ut=0;ut<5&&ut<fe.list.length;ut++){const Et=fe.list[ut];Et.home||(Et.home={cx:Et.cx,cz:Et.cz,r:Et.r,h:Et.h}),Et.cx=ie.item.x-Math.cos(ie.yaw)*14,Et.cz=ie.item.z+Math.sin(ie.yaw)*14,Et.r=10+ut*4,Et.h=9+ut*2}}else if(fe)for(const ie of fe.list)ie.home&&Object.assign(ie,ie.home,{home:null});O&&O.update(J,Q,cn),B&&B.update(J,Q,We),q&&q.update(J,Q,We),X&&X.update(J,Q),ye&&ye.update(J,Q,{gain:1/Math.max(We,.5),show:!!(te&&te.active),from:te?te.pos:K.position}),j&&j.update(J,Q,{inTask:!!(B&&B.busy)}),z.update(Q),z.uniforms.uCol.value.copy(wn.sunColor).multiplyScalar(Math.max(wn.dir.y,0)*2.2).add(_).multiplyScalar(1.4),z.uniforms.uProj.value=ge.points.uProj.value,fe&&fe.update(J,Q,Nn(pt((cn-.25)/.5))),te&&te.active&&O&&te.collide(O.buoys),rn(),D&&(D.points.visible=!(te&&te.active),D.update(J,l.position,ge.points.uProj.value,(.25+.5*cn)*(1-Bt*.6)/We));const bs=I.grade.uniforms;bs.uExposure.value=We,bs.uDim.value=1,I.bloom.threshold=2.4/We,I.bloom.strength=(.45+cn*.25)*Ct(.5,1,jh),Pe.copy(wn.dir).multiplyScalar(1e3).add(l.position).project(l),bs.uSunPos.value.set(Pe.x*.5+.5,Pe.y*.5+.5),bs.uSunOn.value=wn.elev>-1.5&&Pe.z<1?1:0,bs.uSunCol.value.copy(wn.sunColor);const $h=te&&te.active?1:tt?tt.w:0,ed=te&&te.active?.55:1,td=1-Nn(pt(Ji/.6));bs.uRays.value=r?0:.9*(1-Nn(pt((wn.elev-6)/18)))*$h*ed*td,bs.uFlare.value=$h*ed*td,v.position.copy(wn.dir).multiplyScalar(50).add(K.position),v.target.position.copy(K.position),v.castShadow=!Ln&&wn.elev>.3&&Ji<.6&&K.visible&&yn>Ns-.02,s.shadowMap.needsUpdate=v.castShadow,M.uReflectOn.value>0&&Re(),I.render(J)}let Lt=0,ai=0,Tt=2,Ln=!1;function ji(G){if(G>.25||(Lt+=G,ai++,ai<90))return;const Q=Lt/ai;if(Lt=ai=0,!(Tt-- >0)){if(Q>1/30&&c<=.76){M.uReflectOn.value>0?M.uReflectOn.value=0:Ln=!0,Tt=1;return}Q>1/38&&c>.76?(c=Math.max(.75,c*.82),I.bloom.enabled=c>.9||!n,en()):Q<1/57&&c<o-.01&&(c=Math.min(o,c*1.1),en())}}function rn(){for(const G of Ce){if(!G.labels.length)continue;const Q=G.w>.55&&si>.5,Te=G.active?G.active.dataset.part:null;for(const Se of G.labels){Se.v.fromArray(ba[Se.key].p),xe.localToWorld(Se.v),Se.v.project(l);const Ee=(Se.v.x*.5+.5)*Ve,He=(-Se.v.y*.5+.5)*xt,at=Se.v.z>1;Se.el.style.setProperty("--x",`${Ee}px`),Se.el.style.setProperty("--y",`${He}px`),Se.el.classList.toggle("is-shown",Q&&!at&&(!Te||Te===Se.key||!G.listMode)),Se.el.classList.toggle("is-on",Te===Se.key)}}}const It=new E;function Yi(G,Q){ne.group.updateMatrixWorld(!0);for(const Te of G.globePins){const Se=Te.dataset.globePin;Se==="mid"?It.copy(ne.arcMid):It.copy(ne.pins.find(yt=>yt.key===Se).top),ne.worldOf(It,It);const Ee=l.position.clone().sub(Us).normalize(),He=It.clone().sub(Us).normalize().dot(Ee);It.project(l);const at=Te.offsetWidth||160;Te.style.setProperty("--x",`${Math.min((It.x*.5+.5)*Ve,Ve-at-24)}px`),Te.style.setProperty("--y",`${(-It.y*.5+.5)*xt}px`);const Dt=Se==="trondheim"?0:Se==="mid"?.55:.97,an=(It.x*.5+.5)*Ve,Bt=(-It.y*.5+.5)*xt;let Kn=!0;if(G.anchor){const yt=G.anchor.getBoundingClientRect();Kn=an>yt.left&&an<yt.right&&Bt>yt.top&&Bt<yt.bottom}Te.classList.toggle("is-shown",G.w>.82&&He>.05&&Q>=Dt&&Kn)}}let Ki=null;function Al(G){Ki||(Ki=se.pins.map(Te=>{const Se=document.createElement("div");return Se.className="hotspot city"+(Te.city.home?" is-home":""),Se.innerHTML=`<i></i><span>${Te.city.home?"Trondheim · home port":Te.city.name}</span>`,G.cities.appendChild(Se),{pin:Te,el:Se,v:new E}}));const Q=pt(G.p*1.15);for(const Te of Ki){Te.v.copy(Te.pin.top).project(l),Te.el.style.setProperty("--x",`${(Te.v.x*.5+.5)*Ve}px`),Te.el.style.setProperty("--y",`${(-Te.v.y*.5+.5)*xt}px`);const Se=se.pins.indexOf(Te.pin);Te.el.classList.toggle("is-shown",G.w>.5&&se.cityU[Se]<=Q+.02)}}const Bh=new Bm,Xm=new _i(new E(0,1,0),0),Tl=new E,zh=new $;let Hh=0;function Gh(G,Q){return zh.set(G/innerWidth*2-1,-(Q/innerHeight)*2+1),Bh.setFromCamera(zh,l),Bh.ray.intersectPlane(Xm,Tl)&&Tl.distanceTo(l.position)<420?Tl:null}function Vh(G,Q){M.uRipple.value[qe].set(G.x,G.z,J,Q),qe=(qe+1)%Wc}const qm="a,button,input,textarea,select,label,summary,[role=button],[tabindex],.drive-hud",Wh=(G,Q)=>A.some(Te=>{const Se=Te.getBoundingClientRect();return G>=Se.left&&G<=Se.right&&Q>=Se.top&&Q<=Se.bottom});addEventListener("pointerdown",G=>{if(r||G.target.closest&&G.target.closest(qm)||!Wh(G.clientX,G.clientY))return;const Q=Gh(G.clientX,G.clientY);Q&&(Vh(Q,1.2),z.splash(Q.x,Q.z,.7))},{passive:!0}),addEventListener("pointermove",G=>{if(r||G.pointerType!=="mouse"||J-Hh<.22||!Wh(G.clientX,G.clientY))return;const Q=Gh(G.clientX,G.clientY);Q&&(Hh=J,Vh(Q,.35))},{passive:!0}),/[?&]debug\b/.test(location.search)&&(window.__dbg={THREE:sS,scene:u,camera:l,renderer:s,coast:se,course:Z,globe:ne,argus:ge,post:I,sky:h,water:C,get drive(){return te},get props(){return O},get missions(){return B},get places(){return q},get boats(){return H},get score(){return j},get autopilot(){return X},get birds(){return fe},landHeight:(G,Q)=>F?F.landHeight(G,Q):null,get colliders(){return F?F.COLLIDERS:[]},setIntro:G=>{$e=G,jt.done=!1,jt.start=0},setSunTop:G=>f=G}),await ge.ready,xe.traverse(G=>{G.isMesh&&(G.castShadow=G.receiveShadow=!0)}),en(),Zo("scene:ready");const El=()=>{jt.start>=0||(jt.start=0,mt.start())};return document.documentElement.classList.contains("is-loading")?window.addEventListener("loader:done",El,{once:!0}):El(),setTimeout(El,4e3),requestAnimationFrame(Hn),requestAnimationFrame(()=>e.classList.add("is-ready")),setTimeout(()=>ct().catch(G=>console.warn("world failed",G)),80),{renderer:s,scene:u,camera:l}}const Tw=Object.freeze(Object.defineProperty({__proto__:null,PARTS:ba,startScene:yw},Symbol.toStringTag,{value:"Module"}));export{Yn as $,bn as A,dn as B,pl as C,Fn as D,cm as E,fl as F,Cn as G,Ti as H,bl as I,Xe as J,Aw as K,ti as L,$S as M,Kt as N,ni as O,Vi as P,Sl as Q,to as R,At as S,Em as T,Be as U,E as V,dm as W,Xs as X,vl as Y,vh as Z,hn as _,bS as a,ht as a0,Rt as a1,Js as a2,ki as a3,yh as a4,Tw as a5,wt as b,Uf as c,rS as d,Yr as e,oe as f,mh as g,cl as h,xh as i,sn as j,sm as k,et as l,it as m,fs as n,hs as o,ps as p,Yt as q,ln as r,Ri as s,yl as t,$a as u,Wi as v,ww as w,bh as x,_n as y,$ as z};
