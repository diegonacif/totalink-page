export const YoutubeEmbed = ({ embedId }) => {
  return (
    <div className="youtube-embed-container">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        loading="lazy"
      />
      <span>Assista como realizar o procedimento de limpeza do cabeçote.</span>
    </div>
  )
}