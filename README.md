# taggedjs-animate-css
HTML and CSS animations for TaggedJs brought to us by [animate-css](https://animate.style/)


## Speed

### Speed by class name

```html
  <div class="animate__slow" init=${fadeIn} ondestroy=${fadeOut}>
```

| Class name | Default speed time |
| ---------- | ------------------ |
| animate__slow |	2s |
| animate__slower |	3s |
| animate__fast |	800ms |
| animate__faster |	500ms |

### Speed by number

```html
  <div style="--animate-duration: .1s;" init=${fadeIn} ondestroy=${fadeOut}></div>
```

