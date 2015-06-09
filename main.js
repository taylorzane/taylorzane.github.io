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
          content: "2015: Still crushin' it.<br/><br/>1993 - 2014: Crushed it."
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
