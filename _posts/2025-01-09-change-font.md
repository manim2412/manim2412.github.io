---
layout: posts
title:  "minimal-mistakes 폰트 변경하는 방법 (with Google Fonts)"
categories: mmistakes
---

### 1. <span class="platinum">_includes/head.html</span>에 Google Script 추가
```html
<link href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700|PT+Serif:400,700,400italic" rel="stylesheet" type="text/css">
```
### 2. <span class="platinum">_sass/minimal-mistakes/_variables.scss</span>에 Google Font 적용
```css
$serif: "PT Serif", Georgia, Times, serif !default;
... 중략 ...
$global-font-family : $serif;
```
글로벌 폰트가 <span class="platinum">$serif</span>로 적용되어 있으므로, 적용할 Google Font<span class="platinum">("PT Serif")</span>를 <span class="platinum">$serif</span> 변수 가장 앞에 추가해 준다.

### 참조
[minimal mistakes docs](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/#typography-from-older-versions)

<style>
    .platinum {
        background-color: #E5E4E2;
    }
</style>

<script 
    src="https://utteranc.es/client.js"
    repo="manim2412/manim2412.github.io"
    issue-term="pathname"
    label="comment"
    theme="github-light"
    crossorigin="anonymous"
    async>
</script>