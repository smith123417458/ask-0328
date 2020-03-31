<template>
<body>
     <div>
   </div> 
   <div class="target" >
    <div class="cir1" @click="shot" data-label="5"></div>
     <div class="cir5" @click="shot" data-label="1"></div>
    </div>
    <div class="infos">
 
   <h1 class="mouseText"></h1>
    <h1 class="countbox">經過了{{sec}}秒</h1>
    <h1 class="score">打靶分數:{{score}}</h1>
   </div>
  </body>
</template>
<script>
export default{   

data(){
return{
  score:12,
  sec:1,
  timer:null
};
},

methods:{
  shot(){
    this.score += 30;
    if(this.score>30 ){
     clearInterval(this.timer)
  }
 }
}
,
created() {
  this.timer = setInterval(()=>{
  this.sec += 1;
  },1000);
  
 $(document).ready(function(){$(".cir1").click(function (evt) {
    var spot = $("<div class=spot></div>");
    spot.css({"left":evt.pageX +40- $(this).offset().left+"px"},
      {"top": evt.pageY +40- $(this).offset().top+"px"});
    $(this).append(spot);
    console.log("aaa")
  })
      })
}


}

</script>


<style scoped>
 

  body {
   
    background-image: url(https://i.imgur.com/nTYSTCp.jpg); 
    margin: 0;
    width: 100%;
    height: 100vh;
    background-image: cover;
    background-position: center center;
  }

   .target {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  [class^="cir"] {
    width: 500px;
    height: 500px;
    border-radius: 25%;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
    cursor: pointer;
   cursor:url(https://i.imgur.com/mnhjhE2.png),pointer; 
  }

  [class^="cir"].cir1 {
    width: 100px;
    height: 100px;
    z-index: 5;
  }


  

  [class^="cir"].cir5 {
    width: 500px;
    height: 500px;
    z-index: 1;
    border: 10px solid orange;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
  }

  [class^="cir"]:nth-child(2n+1) {
    background-color:olivedrab;
  }

  [class^="cir"]:active {
    transition: 0s;
    filter: brightness(20%);
  }

  [class^="cir"]:before {
    content: attr(data-label);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    top: 20px;
  }


  .infos {
    position: fixed;
    left: 50px;
    top: 75px;
    /* z-index: 10; */
   }

  .infos h1,
  .infos h3 {
    margin: 0;
  } 

   .infos h1 {
    font-size: 50px;
    color:black
  }
  @media(max-width: 900px){
    .infos h1 {
    font-size: 24px;
  }
  }

  .infos h3 {
     opacity: 0.4; 
    color: white;
    font-size: 34px;
  }

  @media(max-width: 900px){
    .infos h3 {
    font-size: 18px;
  }
  }
  .spot {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
     z-index: 50; 
  }
   a, a.link {
  display: block;
  padding: 33px 0 0 0;
  color: #313131;
  text-decoration: none;
  cursor: pointer;
}

</style>




