<template>
  <div class="chat-box">
    <!-- show chat -->
    <div v-show="showChat">
      <!-- <div v-if="documents" class="messages" ref="messages">
        <div
          v-for="doc in formattedDocuments"
          :key="doc.id"
          :class="doc.user == userName ? `message ` : `message current-user`"
        >
          <div class="message-inner">
            <span class="created-at">{{ doc.createdAt }} ago</span>
            <span class="user">{{ doc.user }}:</span>
            <span class="content">{{ doc.message }}</span>
          </div>
        </div>
      </div> -->
      <div v-if="chatEnquiry" class="messages" ref="messages">
        <div
          v-for="doc in chatEnquiry.supportChat"
          :key="doc.id"
          :class="
            doc.user == chatEnquiry.userName
              ? `message `
              : `message current-user`
          "
        >
          <div class="message-inner">
            <span class="time">{{ doc.time }}</span>
            <span class="user">{{ doc.user }}:</span>
            <span class="content">{{ doc.message }}</span>
          </div>
        </div>
      </div>
      <form>
        <textarea
          placeholder="Type a message and hit enter to send"
          v-model="message"
          @keypress.enter.prevent="handleSubmit"
          ref="textarea"
        />
      </form>
    </div>
  </div>
  <div class="text-center">
    <button class="btn mb-5" @click="toggleChat">
      {{ showChat ? "Close support chat" : "Open support chat" }}
    </button>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "vue";
import getUser from "@/composables/getUser";
import useDocument from "@/composables/useDocument";
import { timestamp } from "@/firebase/config";
import moment from "moment";

export default {
  props: ["chatEnquiry"],
  setup(props) {
    const { user } = getUser();
    const { updateDoc } = useDocument("enquiries", props.chatEnquiry.id);
    const showChat = ref(false);
    const message = ref("");
    const textarea = ref(null);

    // add a message
    const handleSubmit = async () => {
      const time = moment()
        .locale("en-au")
        .calendar();
      const chat = {
        message: message.value,
        user: user.value.displayName,
        userId: user.value.uid,
        time: time,
      };
      if (message.value) {
        await updateDoc({
          supportChat: [...props.chatEnquiry.supportChat, chat],
        });
        message.value = "";
      } else {
        textarea.value.placeholder =
          "You must type if you want your message sent.";
        console.log(textarea.value);
      }
    };

    // auto-scroll to the bottom
    const messages = ref(null);

    onUpdated(() => {
      if (messages.value) {
        messages.value.scrollTop = messages.value.scrollHeight;
        textarea.value.focus();
      } else {
        textarea.value.focus();
      }
    });

    // bring up the support chat
    const toggleChat = () => {
      showChat.value = !showChat.value;
    };

    return {
      handleSubmit,
      showChat,
      user,
      message,
      messages,
      toggleChat,
      textarea,
    };
  },
};
</script>

<style scoped>
.messages {
  max-height: 400px;
  overflow: auto;
}

.messages::-webkit-scrollbar {
  width: 8px;
}
.messages::-webkit-scrollbar-track {
  background: #ddd;
}
.messages::-webkit-scrollbar-thumb {
  background: #aaa;
}

.chat-box {
  background-color: #fff;
  box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
  flex: 1 1 100%;
  margin: 2rem 0rem 2rem 0rem;
}
.chat-box .message {
  border-top: 2px solid rgb(53 205 151/ 25%);
  margin-bottom: 2rem;
}

.chat-box .message .message-inner {
  margin-top: 2rem;
}

.chat-box .messages .message-inner .time {
  font-weight: bolder;
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 6px;
  margin-left: 2rem;
}

.chat-box .messages .message-inner .user {
  color: #888;
  font-size: 16px;
  margin-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
}
.chat-box .messages .message-inner .content {
  display: inline-block;
  padding: 10px 20px;
  background-color: #f3f3f3;
  border-radius: 999px;
  color: #333;
  font-size: 18px;
  line-height: 1.2em;
  text-align: left;
}
.chat-box .messages .current-user {
  margin-top: 30px;
  justify-content: flex-end;
  text-align: right;
}

.chat-box .messages .current-user .message-inner .user {
  max-width: 75%;
  color: rgb(53 205 151 / 61%);
}
.chat-box .messages .current-user .message-inner .time {
  margin-right: 3rem;
}

.chat-box .messages .current-user .message-inner .content {
  color: #fff;
  font-weight: 600;
  background-color: rgb(53 205 151 / 61%);
  margin-right: 2rem;
}

form {
  margin: 10px;
}
textarea {
  margin-top: 2rem;
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
  background-color: rgba(177, 174, 174, 0.397);
}
</style>
