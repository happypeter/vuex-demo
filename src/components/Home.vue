<template>
  <div class="home">
    <img src="/static/logo.png" />
    <router-link to="/post/888">Post</router-link>
  </div>
</template>

<style>
  .home img{
    display: block;
    width: 200px;
    margin: 20px auto;
  }
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .home a {
    display: block;
    position: absolute;
    top: 300px;
    left: 50%;
    margin-left: -50px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    width: 100px;
    text-align: center;
    line-height: 100px;
    height: 100px;
    border-radius: 50%;
    text-decoration: none;
    color: white;
    background-color: #00bcd4;
    font-size: 25px;
    transition: all .5s ease;
  }
  .home a:hover {
    top: 290px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  }
</style>
