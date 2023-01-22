import showdown from 'showdown'

const converter = new showdown.Converter({
  noHeaderId: true
});

export const markdownToHtml = (makrkdown: string) => {
  return converter.makeHtml(makrkdown);
};