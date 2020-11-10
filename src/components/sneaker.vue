<template>
    <div class="container">
        <div class="card">
            <div class="sneaker">
                <div class="circle"></div>
                <img src="../assets/adidas.png" alt="adidas">
            </div>
            <div class="info">
                <h1 class="title">Adidas ZX</h1>
                <h3>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
                <div class="sizes">
                    <button>39</button>
                    <button>40</button>
                    <button class="active">42</button>
                    <button>44</button>
                </div>
                <div class="purchase">
                    <button>Purchase</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  
body {
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
}

.container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card{
    /* 子要素が立体的になる */
    width: 50%;
    transform-style: preserve-3d; 
    min-height: 85vh;
    width: 27rem;
    border-radius: 30px;
    padding: 0rem 4rem;
    box-shadow: 0 20px 20px rgba(0,0,0,0.2) ,0px 0px 50px rgba(0,0,0,0.2);
}

.sneaker{
    min-height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;

}

.sneaker img{
    width: 13rem;
    z-index: 5;
    transition: all 0.75s ease-out;
}

.circle{
    align-items: center;
    width: 10rem;
    height: 10rem;
    background: linear-gradient(
        to right,
        rgba(250,70,66,0.75),
        rgba(8,83,156,0.75)
    );
    position: absolute;
    border-radius: 50%;
    z-index: 1;
    transition: all 0.75s ease-out;
}

.info h1 {
    font-size: 2rem;
    /* マウスを話したときの動き */
    transition: all 0.75s ease-out;
}
.info h3{
    font-size: 1rem;
    padding: 1rem 0rem;
    color: #585858;
    font-weight: lighter;
    /* マウスを話したときの動き */
    transition: all 0.75s ease-out;
}

.sizes{
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    /* マウスを話したときの動き */
    transition: all 0.75s ease-out;
}

.sizes button{
    padding: 0.3rem 2em;
    background: none;
    border: none;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #585858;
}

button.active{
    background: #585858;
    color: white;
}
.purchase{
    margin-top: 4rem;
    /* マウスを話したときの動き */
    transition: all 0.75s ease-out;
}
.purchase button{
    width: 100%;
    padding: 0.7rem 0rem;
    background: #f54642;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 30px;
    font-weight: bolder;
    transition: all 0.75s ease-out;
}
</style>

