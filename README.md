### Decisions

Data and State Managment
- Redux was discarded because it's an overkill in a small project like this.
- Using a react feature like Context API, benefits with less boilerplate code and decreases bundle size.

Source and filepaths
- Avoid folder organization in favor of componentization:
```
    |-- page
        |-- catalog
        |-- movie
    |-- services
        |-- catalog
        |-- movie
```

- A decoupled architecture component-oriented treat `catalog` and `movie` as separate as possible.
- 
