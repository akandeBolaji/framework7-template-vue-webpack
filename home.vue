<template>
  <f7-page :page-content="false">
    <f7-navbar class="elevation-5">
      <f7-nav-left></f7-nav-left>
      <f7-nav-title>Rubik</f7-nav-title>
       <f7-nav-right>
        <f7-link icon-only>
          <f7-icon ios="f7:bell" md="material:bell">
            <f7-badge color="red">5</f7-badge>
          </f7-icon>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-toolbar tabber labels :bottom-md="true" class="elevation-24">
      <f7-link tab-link="#tab-1" tab-link-active>
        <f7-icon class="icon-fill" ios="f7:home" md="material:home">
          <f7-badge color="red">5</f7-badge>
        </f7-icon>
        <span class="tabbar-label">Home</span>
      </f7-link>
      <f7-link tab-link="#tab-2">
         <f7-icon class="icon-fill" ios="f7:email_fill" md="material:email">
          <f7-badge color="red">12</f7-badge>
        </f7-icon>
        <span class="tabbar-label">Messages</span>
      </f7-link>
      <f7-link tab-link="#tab-3">
        <f7-icon class="icon-fill" ios="f7:persons" md="material:people">
          <f7-badge color="red">4</f7-badge>
        </f7-icon>
        <span class="tabbar-label">Network</span>
      </f7-link>
       <f7-link tab-link="#tab-4">
         <f7-icon class="icon-fill" ios="f7:person" md="material:person">
          <f7-badge color="red">5</f7-badge>
        </f7-icon>
        <span class="tabbar-label">Profile</span>
       </f7-link>
    </f7-toolbar>
   <f7-tabs static>
    <f7-tab id="tab-1" class="page-content" tab-active>
      <f7-searchbar cancel-link="Cancel" placeholder="Search for people" :clear="true"></f7-searchbar>
      <f7-block-title>People you may know</f7-block-title>
    <f7-list>
      <f7-list-item title="Ivan Petrov" footer="music artist">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
        <f7-button slot="after">Send Request</f7-button>
      </f7-list-item>
      <f7-list-item header="" title="John Doe" footer="music producer">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
        <f7-button slot="after">Send Request</f7-button>
      </f7-list-item>
      <f7-list-item title="Jenna Smith" footer="music director">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
        <f7-button slot="after">Send Request</f7-button>
      </f7-list-item>
      <f7-list-item link="#" title="See more suggestions..."></f7-list-item>
    </f7-list>

      <f7-block strong class="elevation-5">
        <p strong> News Feeds</p>
      </f7-block>
     <f7-card class="demo-facebook-card elevation-10">
      <f7-card-header class="no-border">
        <div class="demo-facebook-avatar"><img src="http://lorempixel.com/68/68/people/1/" width="34" height="34"/></div>
        <div class="demo-facebook-name">John Doe</div>
        <div class="demo-facebook-date">Monday at 2:15 PM</div>
      </f7-card-header>
      <f7-card-content>
        <p>What a nice music i dropped yesterday!</p><img src="http://lorempixel.com/1000/700/nature/8/" width="100%"/>
        <p class="likes">Likes: 112 &nbsp;&nbsp; Comments: 43</p>
      </f7-card-content>
      <f7-card-footer class="no-border">
        <f7-link>Like</f7-link>
        <f7-link>Comment</f7-link>
        <f7-link>Share</f7-link>
      </f7-card-footer>
    </f7-card>
    </f7-tab>
    <f7-tab id="tab-2" class="page-content">
     <f7-block-title>Messages</f7-block-title>
    <f7-list media-list>
      <f7-list-item
        link="#"
        title="Adebimpe Dan"
        after="17:14"
        subtitle="1 New message"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      ></f7-list-item>
      <f7-list-item
        link="#"
        title="John Doe"
        after="17:11"
        subtitle="1 New message"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      ></f7-list-item>
      <f7-list-item
        link="#"
        title="Adebimpe Dan"
        after="17:14"
        subtitle="1 New message"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      ></f7-list-item>
      <f7-list-item
        link="#"
        title="John Doe"
        after="17:11"
        subtitle="1 New message"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      ></f7-list-item>
    </f7-list>
    </f7-tab>
    <f7-tab id="tab-3" class="page-content">
        <f7-list>
        <f7-list-item link="#" title="200 Connections">
          <f7-icon slot="media" icon="icon-f7"></f7-icon>
        </f7-list-item>
        <f7-list-item title="0 Pending Invitations">
          <f7-icon slot="media" icon="icon-f7"></f7-icon>
        </f7-list-item>
        </f7-list>
        <f7-block-title>People you may know</f7-block-title>
    <f7-list>
      <f7-list-item title="Ivan Petrov" header="20 mutual connections" footer="music artist">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
        <f7-button slot="after">Send Request</f7-button>
      </f7-list-item>
      <f7-list-item  header="20 mutual connections" title="John Doe" footer="music producer">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
        <f7-button slot="after">Send Request</f7-button>
      </f7-list-item>
      <f7-list-item title="Jenna Smith"  header="20 mutual connections" footer="music director">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
        <f7-button slot="after">Send Request</f7-button>
      </f7-list-item>
      <f7-list-item title="Jenna Smith"  header="20 mutual connections" footer="music director">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
        <f7-button slot="after">Send Request</f7-button>
      </f7-list-item>
      <f7-list-item title="Jenna Smith"  header="20 mutual connections" footer="music director">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
        <f7-button slot="after">Send Request</f7-button>
      </f7-list-item>
      <f7-list-item title="Jenna Smith"  header="20 mutual connections" footer="music director">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
        <f7-button slot="after">Send Request</f7-button>
      </f7-list-item>
      <f7-list-item title="Jenna Smith"  header="20 mutual connections" footer="music director">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
        <f7-button slot="after">Send Request</f7-button>
      </f7-list-item>
      <f7-list-item title="Jenna Smith"  header="20 mutual connections" footer="music director">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
        <f7-button slot="after">Send Request</f7-button>
      </f7-list-item>
      <f7-list-item title="Jenna Smith" footer="music director">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
        <f7-button slot="after">Send Request</f7-button>
      </f7-list-item>
      <f7-list-item title="Jenna Smith" footer="music director">
        <f7-icon slot="media" icon="icon-f7"></f7-icon>
        <f7-button slot="after">Send Request</f7-button>
      </f7-list-item>
    </f7-list>


    </f7-tab>
     <f7-tab id="tab-4" class="page-content">
       <f7-block strong>
       <p>Profile content</p>
       ....
    </f7-block>
     </f7-tab>
  </f7-tabs>

  </f7-page>
</template>
<script>
export default {
  name:'HomePage'
}
</script>
