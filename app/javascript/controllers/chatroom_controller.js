
import consumer from "../channels/consumer";
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "messages" ]

  connect() {
    this.initChatroomCable()
  }

  initChatroomCable() {
    const container = this.messagesTarget
    const id = container.dataset.chatroomId;

    consumer.subscriptions.create({ channel: "ChatroomChannel", id: id }, {
      received(data) {
        container.insertAdjacentHTML('beforeend', data);
      }
    });
  }
}