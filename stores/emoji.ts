import { type EmojiInterface } from "~/interfaces/emoji.interface";

export const useEmojiStore = defineStore("emojiStore", {
  state: () => ({
    emojis: [] as EmojiInterface[],
  }),
  actions: {
    async fetch() {
      const config = useRuntimeConfig();
      const data = await $fetch<EmojiInterface[]>(config.public.emojisApiUrl);
      this.emojis = data;
    },
  },
});
