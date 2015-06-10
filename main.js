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
      links: [
        {
          label: 'about',
          content: "This is some text about me. I really enjoy coding Ruby and JavaScript! I'm also very good at Python."
        },
        {
          label: 'contact',
          content: "<div class='right-align'>email: <a href='mailto:howdy@taylorzane.com'>howdy@taylorzane.com</a><br/>\
          twitter: <a href='http://twitter.com/thetaylorzane'>@thetaylorzane</a><br/>\
          github: <a href='https://github.com/taylorzane'>taylorzane</a></div>"
        },
        {
          label: 'projects',
          content: 'Some awesome stuff here.'
        },
        {
          label: 'resume',
          content: "Oct 2014 &ndash; Present: Software Architect &ndash; Adelyte Company<p>\
          2011 &ndash; Present: Development Consultant &ndash; Self<p>\
          Feb 2014 &ndash; Aug 2014: SaaS DevOps Administrator &ndash; Zenoss Inc.<p>\
          Jan 2013 &ndash; Feb 2014: iOS Customer Support &ndash; Apple Inc. <p>"
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
      }
    },
    ready: function() {
      document.getElementById('wrapper').classList.toggle('below')
      setTimeout(function() {document.getElementById('wrapper').classList.toggle('below')}, 500);
    }
  });
});
