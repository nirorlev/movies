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


Not found & Fallback
- The non-existing pages and features are treated

Styling
- Styles in CSS are divided by scope: global (DOM elements and common classes), pages and components
- It seems counterintuitive to scater styles, going back in forth, but its sustainable to scale

Test
- Testing wasn't so much needded because most work was done with CSS only
