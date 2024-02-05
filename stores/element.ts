export const useElementStore = defineStore("elementStore", {
  state: () => ({
    links : [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Contact",
        link: "/contact",
      },
      {
        title: "About Me",
        link: "/about-me",
      },
      {
        title: "Resume",
        link: "/resume",
      },
    ] as any[],
    skills: [
      {
        title: "Coding",
        details: [
          { name: "Javascript" },
          { name: "PHP" },
          { name: "Python" },
          { name: "JAVA" },
        ],
      },
      {
        title: "UX Research",
        details: [{ name: "Prototyping" }, { name: "Planning" }],
      },
      {
        title: "Design & Product",
        details: [
          { name: "UI & UX" },
          { name: "Figma" },
          { name: "Photoshop" },
          { name: "Illustrator" },
        ],
      },
      {
        title: "Soft Skills",
        details: [
          { name: "Adaptability" },
          { name: "Curiosity" },
          { name: "Teamwork" },
        ],
      },
    ] as any[],
    photos: [
      {
        source:
          "https://images.unsplash.com/photo-1705719418761-3808881d06b4?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        source:
          "https://images.unsplash.com/photo-1705783679154-c47fab616434?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        source:
          "https://images.unsplash.com/photo-1705615427885-800da48ba0b7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        source:
          "https://images.unsplash.com/photo-1705522409239-87c3c13496e8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        source:
          "https://images.unsplash.com/photo-1705351953374-76117bc519e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        source:
          "https://images.unsplash.com/photo-1705773895630-0b15890ded6e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        source:
          "https://images.unsplash.com/photo-1682687981907-170c006e3744?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ] as any[],
    icons: [
      {
        name: "mdi-github",
      },
      {
        name: "mdi-whatsapp",
      },
      {
        name: "mdi-linkedin",
      },
      {
        name: "mdi-instagram",
      },
      {
        name: "mdi-facebook-messenger",
      },
      {
        name: "mdi-twitch",
      },
    ] as any[],
  }),
  actions: {
    getRandomElements(array: any[], n: number): any[] {
      const shuffled = array.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, n);
    },
    getRandomElement(array: any): any {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    },
  },
});
