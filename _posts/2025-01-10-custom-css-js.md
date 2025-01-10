---
layout: posts
title:  "minimal-mistakes 커스텀 css, js 적용 방법"
---
### 1. <span class="platinum">assets/css/main.scss</span> 파일에 적용할 custom css 문구 추가
```css
.test {
    background-color: yellow;
}
```
### 2. <span class="platinum">assets/js/</span> 경로에 custom js 파일 추가
[test.js]
```js
function test() {
    console.log("test"); 
}

test();
```
### 3. <span class="platinum">includes/head.html</span> 확인
![headCapture](/assets/image/headCapture.png)
### 4. <span class="platinum">_config.yml</span>에 custom js 경로 추가
```
head_scripts:
  - /assets/js/test.js
```

### 참조
[https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/)   
[https://mmistakes.github.io/minimal-mistakes/docs/javascript/](https://mmistakes.github.io/minimal-mistakes/docs/javascript/)

<style>
    .platinum {
        background-color: #E5E4E2;
    }
</style>