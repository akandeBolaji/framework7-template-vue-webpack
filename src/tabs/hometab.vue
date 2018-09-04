<template>
    <f7-page>
      <f7-searchbar cancel-link="Cancel" placeholder="Search for people" :clear="true"></f7-searchbar>
      <f7-block-title>People you may know</f7-block-title>
    <f7-list>
      <f7-list-item title="Ivan Petrov" footer="music artist">
        <f7-icon slot="media"> <div class="demo-facebook-avatar img"><img src="../../images/dani.jpg" width="45" height="45"/></div></f7-icon>
        <f7-button slot="after">Send Request</f7-button>
      </f7-list-item>
      <f7-list-item header="" title="John Doe" footer="music producer">
        <f7-icon slot="media"><div class="demo-facebook-avatar img"><img src="../../images/dani.jpg" width="45" height="45"/></div></f7-icon>
        <f7-button slot="after">Send Request</f7-button>
      </f7-list-item>
      <f7-list-item title="Jenna Smith" footer="music director">
        <f7-icon slot="media"><div class="demo-facebook-avatar img"><img src="../../images/dani.jpg" width="45" height="45"/></div></f7-icon>
        <f7-button slot="after">Send Request</f7-button>
      </f7-list-item>
      <f7-list-item link="#" title="See more suggestions..."></f7-list-item>
    </f7-list>

      <f7-block strong class="elevation-5">
        <p strong> News Feeds</p>
      </f7-block>
     <f7-card class="demo-facebook-card elevation-10">
      <f7-card-header class="no-border">
        <div class="demo-facebook-avatar img"><img src="../../images/dani.jpg" width="45" height="45"/></div>
        <div class="demo-facebook-name">John Doe</div>
        <div class="demo-facebook-date">Monday at 2:15 PM</div>
      </f7-card-header>
      <f7-card-content>
        <p>What a nice music i dropped yesterday!</p><img src="../../images/dani.jpg" width="100%" height="100%"/>
        <p class="likes">Likes: 112 &nbsp;&nbsp; Comments: 43</p>
      </f7-card-content>
      <f7-card-footer class="no-border">
        <f7-link>Like</f7-link>
        <f7-link>Comment</f7-link>
        <f7-link>Share</f7-link>
      </f7-card-footer>
    </f7-card>
    </f7-page>
</template>

<style scoped>
.img img {
  border-radius : 50%;
};
</style>
