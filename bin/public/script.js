/*
 * script for scroll
 */
(function(){
  var st = {
    txtMarkdown : document.getElementById('txtMarkdown'),
    txtHtml     : document.getElementById('txtHtml')
  };

  var suscribeEvents = function(){
    st.txtMarkdown.addEventListener('scroll',events.eScroll);
    st.txtHtml.addEventListener('scroll',events.eScroll);
  };

  var events = {
    eScroll : function(){
      console.log('scrolleando');
    }
  };

  var initialize = function(){
    suscribeEvents();
  };
  return{
    init:initialize
  }
})().init(); 

/*
 * script for markdown realtime
 */

(function(){
  var st = {
    converter   : new showdown.Converter(),
    txtMarkdown : document.getElementById('txtMarkdown'),
    txtHtml     : document.getElementById('txtHtml')
  };
    
  var suscribeEvents = function(){
    st.txtMarkdown.addEventListener('input',functions.convertMarkdown);
  };

  var functions = {
    convertMarkdown : function(){
      var markdown = st.txtMarkdown.value;
      var html = st.converter.makeHtml(markdown);
      st.txtHtml.innerHTML = html;  
    }
  };

  var initialize = function(){
    suscribeEvents();
  };

  return{
    init:initialize
  }
})().init();
