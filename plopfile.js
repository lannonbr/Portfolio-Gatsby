module.exports = function (plop) {
  const { format } = require('date-fns')

  let date = format(new Date(), 'yyyy-MM-dd')

  plop.setGenerator('post', {
    description: 'New Post',
    prompts: [
      {
        name: 'title',
        type: 'input',
        message: 'Post Name:',
      },
      {
        name: 'slug',
        type: 'input',
        message: 'Post Slug:',
      },
      {
        name: 'desc',
        type: 'input',
        message: 'Post Description:',
      },
      {
        name: 'date',
        type: 'input',
        default: `${date}`,
      },
    ],
    actions: (data) => [
      {
        type: 'add',
        path: 'content/blog/{{ slug }}/index.md',
        templateFile: 'plop-templates/post.md',
      },
    ],
  })
}
