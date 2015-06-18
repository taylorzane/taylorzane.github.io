document.addEventListener("DOMContentLoaded", function() {
  'use strict';
  var vm = new Vue({ // jshint ignore:line
    el: '#main',
    data: {
      name: 'Taylor Zane',
      currentContent: {
        link: undefined,
        text: undefined
      },
      expandedContact: false,
      links: [
        {
          label: 'about',
          content: "This is some text about me. I really enjoy coding Ruby and JavaScript! I'm also very good at Python."
        },
        {
          label: 'contact',
          content: "<div class='right-align'>\
          email: <a href='mailto:howdy@taylorzane.com'>howdy@taylorzane.com</a><br/>\
          twitter: <a href='http://twitter.com/thetaylorzane'>@thetaylorzane</a><br/>\
          github: <a href='https://github.com/taylorzane'>taylorzane</a><br/>\
          </div>"
        },
        {
          label: 'projects',
          content: 'Some awesome stuff here.'
        },
        {
          label: 'resume',
          content: "Software Architect &ndash; Adelyte Company: Oct 2014 &ndash; Present<p>\
          Development Consultant &ndash; Self: 2011 &ndash; Present<p>\
          SaaS DevOps Administrator &ndash; Zenoss Inc.: Feb 2014 &ndash; Aug 2014<p>\
          iOS Customer Support &ndash; Apple Inc.: Jan 2013 &ndash; Feb 2014<p>\
          Department Supervisor &ndash; Fry's Electronics: Jul 2011 &ndash; Jan 2013<p>\
          Department Sales &ndash; Fry's Electronics: Aug 2010 &ndash; Jul 2011<p>"
        }
      ]
    },
    methods: {
      setContent: function(key) {
        if (key === '') {
          vm.$set('currentContent.link', undefined);
          vm.$set('currentContent.text', undefined);
        } else {
          vm.$set('currentContent.link', key);
          vm.$set('currentContent.text', vm.$get('links').filter(function(x){return x.label === key;})[0].content);
        }
      },
      // showMoreContact: function() {
      //   expandedContact = !expandedContact;
      // }
    }
  });
});


// EXTRA CONTACT INFO
// <a v-show='!expandedContact' v-on='click: showMoreContact()'>{{ expandedContact ? more... : less... }}</a><br>\
// <div v-show='expandedContact'>\
// codepen: <a href='https://codepen.io/taylorzane'>taylorzane</a>\
// </div>\
