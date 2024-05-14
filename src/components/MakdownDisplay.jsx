import showdown from "showdown";

export default function MakdownDisplay({ content }) {
  if (content) {
    const converter = new showdown.Converter();
    const createMarkup = () => {
      return { __html: converter.makeHtml(content) };
    };
    return (
      <div className="content" dangerouslySetInnerHTML={createMarkup()}></div>
    );
  }
}
