<template>
  <div class="chat-box">
    <div v-if="error">{{ error }}</div>
    <!-- show chat -->
    <div v-show="showChat">
      <div v-if="documents" class="messages" ref="messages">
        <div
          v-for="doc in formattedDocuments"
          :key="doc.id"
          :class="
            doc.user == user.displayName ? `message current-user` : `message`
          "
        >
          <div class="message-inner">
            <span class="created-at">{{ doc.createdAt }} ago</span>
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
        ></textarea>
      </form>
    </div>
  </div>
  <button class="btn mb-5" @click="toggleChat">
    {{ showChat ? "Close support chat" : "Open support chat" }}
  </button>
</template>

<script>
import getCollection from "@/composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "vue";
import getUser from "@/composables/getUser";
import useCollection from "@/composables/useCollection";
import { timestamp } from "@/firebase/config";

export default {
  setup() {
    const { user } = getUser();
    const { error, documents } = getCollection("support-chat");
    const { addDoc } = useCollection("support-chat");
    const showChat = ref(false);
    const message = ref("");

    // computed documents to a more appealing structure
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

    // add a message
    const handleSubmit = async () => {
      const chat = {
        message: message.value,
        user: user.value.displayName,
        createdAt: timestamp(),
        userId: user.value.uid,
      };
      await addDoc(chat);
      if (!error.value) {
        message.value = "";
      } else {
        error.value = "You do not own this enquiry.";
      }
    };

    // auto-scroll to the bottom
    const messages = ref(null);

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    // bring up the support chat
    const toggleChat = () => {
      showChat.value = !showChat.value;
    };

    return {
      handleSubmit,
      showChat,
      user,
      error,
      documents,
      formattedDocuments,
      message,
      messages,
      toggleChat,
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
  border-radius: 24px;
  background-color: #fff;
  box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
  flex: 1 1 100%;
  padding: 30px;
  margin: 2rem 0rem 2rem 0rem;
}

.chat-box .messages .message-inner .created-at {
  font-weight: bolder;
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
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
  color: #ea526f;
}
.chat-box .messages .current-user .message-inner .created-at {
  margin-right: 3rem;
}

.chat-box .messages .current-user .message-inner .content {
  color: #fff;
  font-weight: 600;
  background-color: #ea526f;
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
