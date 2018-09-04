<template>
    <f7-page>
       <f7-block-title>Profile Overview</f7-block-title>
       <f7-block strong inset>
           <div class="img"><img src="../../images/dani.jpg" width="230" height="230"/></div>
         <p>Adebimpe Daniel</p>
         <p>Music Artist and Producer</p> <span>From Lagos, Nigeria</span>

         <p>201 <span> <f7-icon class="icon-fill" ios="f7:persons_fill" md="material:home"></f7-icon></span></p>
         <f7-button big fill raised>Edit Profile</f7-button>
       </f7-block>
       <f7-block inset strong>
         <f7-row no-gap>
        <f7-col>
          20 Profile Views
        </f7-col>
        <f7-col>
          201 Connections
        </f7-col>
      </f7-row>
       </f7-block>
       <f7-block-title>Experience and Education</f7-block-title>
       <f7-block strong>
         experience (in form of a list)
       </f7-block>
       <f7-block-title>Skills</f7-block-title>
       <f7-block strong>
         Skills (expandible)
       </f7-block>
       <f7-block-title>Works and Accomplishments</f7-block-title>
       <f7-block strong>
         Works and accomplishments (expandible list)
       </f7-block>
       <f7-block-title>Contact</f7-block-title>
       <f7-block strong>
         Contact (expandible list)
       </f7-block>
    </f7-page>
</template>
<style scoped>
.img img {
  display: block;
  margin-left: auto;
  margin-right:auto;
  border-radius : 50%;
};
</style>

