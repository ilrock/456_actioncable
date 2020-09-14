import consumer from "./consumer";

const initChatroomCable = () => {
  const messagesContainer = document.getElementById('messages');
  if (messagesContainer) {
    const id = messagesContainer.dataset.chatroomId;
    // const bookings = JSON.parse(document.body.dataset.bookings)
    // foreach booking -> subscriptions.create
    consumer.subscriptions.create({ channel: "ChatroomChannel", id: id }, {
      received(data) {
        messagesContainer.insertAdjacentHTML('beforeend', data);
      }
    });
  }
}

// named export
// if i want to import -> import {initChatroomCable} from 'path-to-file'
export { initChatroomCable };

// default
// export defailt initChatroomCable
// if i want to import -> import Andre from 'path'