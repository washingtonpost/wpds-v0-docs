import React from "react";
import { css } from "@washingtonpost/wpds-ui-kit";

const styles = css({
  aspectRatio: "16 / 9",
  width: "100%",
  borderRadius: "$025",
  border: "$100 solid $subtle",
  background: "transparent",
  opacity: 0,
  transition: "opacity 0.5s ease-in-out",
  "&.loaded": {
    opacity: 1,
  },
});

const YoutubeEmbed = ({ videoid }) => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer?.observe(document.querySelector(`.loaded`));
  }, []);

  return (
    <iframe
      className={`${styles()} loaded`}
      src={loaded && `https://www.youtube-nocookie.com/embed/${videoid}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  );
};

export default YoutubeEmbed;
