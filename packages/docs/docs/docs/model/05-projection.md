# Projections

## Project

## Merge Projection

## Sub Projection

## Reference
In the [objects](#objects) chapter, we showed how to compose different schemas into complex objects, such as `User` and `Address`.

There are situations where, when defining a domain model, it is useful to specify that the included type does not represent an attribute but a reference to another type. The semantic difference lies in the fact that a reference is not meant to be a primary characteristic of the entity, but rather a link to another entity.

From a practical point of view, the decorator that identifies a reference has no effect on the generated type and its validation. It is only considered in the definition of type projection, specifically references are not included in the default projection to avoid loading a too large or infinite graph in case of recursions.

A reference is defined using a specific `reference` decorator.
```ts showLineNumbers
const Post = m.object({
  id: m.integer(),
  title: m.string(),
})

const User = m.object({
  id: m.integer(),
  name: m.string(),
  surname: m.string(),
  // highlight-start
  posts: m.reference(Post.array().optional()),
  // highlight-end
})
```