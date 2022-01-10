export default function () {
  const scrollToBottom = () => {
    const body = document.body;
    const html = document.documentElement;

    const heightView = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );

    console.log(heightView);
    window.scroll(0, heightView);
  };

  return { scrollToBottom };
}
