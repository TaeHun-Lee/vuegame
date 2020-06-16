const gameLink = {
  path: "/",
  redirect: "/",
  name: "gameRoot",
  children: [
    {
      path: "",
      name: "mainBackground",
      component: () => {
        import("@/views/game/MainBackground");
      }
    }
  ]
};

export default gameLink;
