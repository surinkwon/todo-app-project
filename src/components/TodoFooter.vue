<template>
  <div>
    <button @click="toggleCheckAll" class="custom-btn btn-5">Check All</button>
    <button @click="clearAll" class="custom-btn btn-4">Remove All</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['toggleCheckAll']),
    clearAll() {
      this.$store.commit('CLEAR_ALL')
    },
  },
}
</script>

<style>
.custom-btn {
  width: 100px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  margin-left: 5px;
  margin-right: 5px;
}
.btn-4 {
  background-color: #e44040;
background-image: linear-gradient(315deg, #e04848 0%, #f5a3a3 74%);
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-4:hover{
  background-color: #ee9595;
  background-image: linear-gradient(315deg, #e79592 0%, #eb1e03 74%);
}
.btn-4 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-4:before,
.btn-4:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
   box-shadow:  4px 4px 6px 0 rgba(255,255,255,.9),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.9),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
  transition: all 0.3s ease;
}
.btn-4:before {
  height: 0%;
  width: .1px;
}
.btn-4:after {
  width: 0%;
  height: .1px;
}
.btn-4:hover:before {
  height: 100%;
}
.btn-4:hover:after {
  width: 100%;
}
.btn-4 span:before,
.btn-4 span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.9),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.9),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
  transition: all 0.3s ease;
}
.btn-4 span:before {
  width: .1px;
  height: 0%;
}
.btn-4 span:after {
  width: 0%;
  height: .1px;
}
.btn-4 span:hover:before {
  height: 100%;
}
.btn-4 span:hover:after {
  width: 100%;
}

.btn-5 {
  background-color: #b12ec2;
background-image: linear-gradient(315deg, #c947d4 0%, #df9de7 74%);
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-5:hover{
  background-color: #c289d8;
  background-image: linear-gradient(315deg, #bf89d8 0%, #b30bd4 74%);
}
.btn-5 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-5:before,
.btn-5:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
   box-shadow:  4px 4px 6px 0 rgba(255,255,255,.9),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.9),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
  transition: all 0.3s ease;
}
.btn-5:before {
  height: 0%;
  width: .1px;
}
.btn-5:after {
  width: 0%;
  height: .1px;
}
.btn-5:hover:before {
  height: 100%;
}
.btn-5:hover:after {
  width: 100%;
}
.btn-5 span:before,
.btn-5 span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.9),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.9),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
  transition: all 0.3s ease;
}
.btn-5 span:before {
  width: .1px;
  height: 0%;
}
.btn-5 span:after {
  width: 0%;
  height: .1px;
}
.btn-5 span:hover:before {
  height: 100%;
}
.btn-5 span:hover:after {
  width: 100%;
}
</style>