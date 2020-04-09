<template>
<div id="wrapper">
  <header>
    <p id="record">最好記錄 : <span>0</span></p>
    <p id="timer">時間: <span>{{sec}}</span></p>
	
		<!-- <div :class="change">jkljkjlj</div> -->
  </header>
  <div id="game">
     <div id="numbers" @click="hit($event)"></div>  

    <!-- <div id="numbers">
		 <div v-for="(n,idx) in 10" :key="idx" :class="change"> {{n}}</div>
	 </div> 
    -->
	

    <div id="startScene">
      <p></p>
      <button @click="play">開始</button>
    </div>
  </div>
</div>
</template>
<script>
 export default{   
 data(){
 return{
    countNum:1,
 	cardArray:[],
 	time:0,
   timer:null,
	 cardNum:null,
	 num:0,
   timer:null,
   sec:0,
	 ok:true
 };
 },

methods:{
  play(){  
		$("#startScene").hide();
	}
	,
	hit(e){
		 this.num = e.target.textContent;
		 console.log(this.num)
		 console.log(this.countNum)
 if(this.num == this.countNum){
     e.target.setAttribute('class','hit')
			this.countNum++;	
					};
	  if(this.timer ==null){
		this.timer = setInterval(
		()=>{this.sec += 1;},100);}
		
		if(this.countNum>9){
		 clearInterval(this.timer)
		 this.timer=null
		 console.log("停止")
		 alert("你的優惠碼是17458")
		}
	 },
	},

//  watch:{

//  stop(){

//  }
	
 	

//  }

//  ,


mounted() {
  for(var i = 0; i <= 8; i++){
			this.cardArray.push(i);
		}
		for(var i = 0; i < this.cardArray.length; i++){
			var tmpNum = this.cardArray[i];
		var r = Math.floor(Math.random()*this.cardArray.length);			
 			this.cardArray[i] =this. cardArray[r];
 			this.cardArray[r] = tmpNum;
		}
   $("#numbers").html("");
 		for(var i = 0; i <= 8; i++){
 		this.cardNum = this.cardArray[i]+1;
     $("#numbers").prepend("<div>"+ this.cardNum +"</div>");
 		}
 }
 }
</script>
<style lang ="scss" scoped>
 /* @import  '@/assets/_timeGame.scss'; */
 #wrapper{	width:542px;	margin:0 auto;
}
header{
	position:relative;
	margin-bottom:10px;
	color:#7D5740;
	font-weight:bold;
}
h1{
	padding:40px 0 60px;
	text-align:center;
	font-size:3em;
}
/* #timer{
	font-size:1.3em;
	position:absolute;
	text-align:center;
	right:0;
	bottom:0;
} */
#record{
	font-size:1.3em;
	position:absolute;
	bottom:0;
}
#game{
	position:relative;
}
 #numbers /deep/ div{
	width:179px;
	height:107px;
	padding-top:35px;
	font-size:1.8em;
	font-weight:bold;
	background:#7D5740;
	color:#FEC617;
	margin-right:1px;
	margin-bottom:1px;
	text-align:center;
	float:left;
	cursor:pointer;
}


 /* .hit{
	background:red !important;
	color:blue !important;
}  */

/* .change{
	background: red;
	color: chartreuse;
	width: 50px;
} */


#startScene{
	position:absolute;
	top:0;
	left:0;
	width:542px;
	height:500px;
	background:#7D5740;
}
#startScene p{
	margin:205px 0 10px;
	text-align:center;
	color:#FEC617;
}
button{
	display:block;
	margin:0 auto;
	border:none;
	color:#FEC617;
	background:#E2681C;
	border-radius:35px;
	font-size:2em;
	font-weight:bold;
	padding:10px 40px;
	cursor:pointer;
	color:#FEC617;
	background:#E27C1C;
}
button:hover{
	color:#E27C1C;
	background:#FEC617;
}
button:focus{
	outline:none;
}
</style>