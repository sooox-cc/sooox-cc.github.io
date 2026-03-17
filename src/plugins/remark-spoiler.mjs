import { findAndReplace } from 'mdast-util-find-and-replace'

export function remarkSpoiler() {
  return (tree) => {
    findAndReplace(tree, [
      [
        /\|\|(.+?)\|\|/g,
        (_match, text) => ({
          type: 'spoiler',
          data: {
            hName: 'span',
            hProperties: { className: ['spoiler'] },
          },
          children: [{ type: 'text', value: text }],
        }),
      ],
    ])
  }
}
