import { css } from "@washingtonpost/wpds-ui-kit";

const styles = css({
  aspectRatio: "16 / 9",
  width: "100%",
  borderRadius: "$025",
  border: "$100 solid $subtle",
  background: "transparent",
});

const YoutubeEmbed = ({ videoid }) => {
  return (
    <iframe
      className={styles()}
      src={`https://www.youtube-nocookie.com/embed/${videoid}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  );
};

export default YoutubeEmbed;
