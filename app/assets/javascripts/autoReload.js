$(function(){
  function buildHTML(message){
    if (message.image) {
      let html =
        ` <div class="chat-box" data-message-id=${message.id}>
          <div class="chat-box__top">
            <div class="chat-name">
            ${message.user_name}
            </div>
          <div class="chat-date">
          ${message.created_at}
          </div>
          </div>
          <div class="chat-box__message">
          <p class="_message__content">
          ${message.content}
          </p>
          <img class="Message__image" src="${message.image}">
          </div>
          </div>`
     return html;
    } else {
      let html = 
      ` <div class="chat-box" data-message-id=${message.id}>
      <div class="chat-box__top">
        <div class="chat-name">
        ${message.user_name}
        </div>
      <div class="chat-date">
      ${message.created_at}
      </div>
      </div>
      <div class="chat-box__message">
      <p class="_message__content">
      ${message.content}
      </p>
      
      </div>
      </div>`
      return html
    };
    
  }
  let reloadMessages = function() {
    let last_message_id = $('.chat-box:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(message) {
      if (messages.length !== 0) {
        let inserHTML = '';
        $.each(messages, function(i, message) {
          inserHTML += buildHTML(message)
        });
        $('.chat-main__massage-list').append(inserHTML);
        $('.chat-main__massage-list').animate({ scrollTop: $('.chat-main__massage-list')[0].scrollHeight});
      }
    })
   
    
  

    .fail(function() {
      alert("error");
  });

  };
  setInterval(reloadMessages, 7000);
});