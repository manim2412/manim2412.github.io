---
layout: posts
title:  "로컬에서 보이던 Minimal Mistakes 게시글이 GitHub Pages 배포 서버에서는 보이지 않는 문제"
--- 
<details>
    <summary>Prerequisite</summary>
    local에서 remote에 Git push 하였는지 우선 확인
</details>
### 원인
Minimal Mistakes에서 게시글 작성 파일명을 <span class="platinum">YYYY-MM-DD-TITLE.md</span> 형식으로 지정하는데,  
미래 날짜의 게시글을 현재 날짜 이후에 표시하도록 설정되어 있다.    
즉, 미래 날짜로 제목이 지정되어 있으면 게시글을 현재 볼 수가 없다.   
결국 local 시간과 깃허브 호스팅된 서버에서 인식하는 시간이 달라서 생길 수 있는 문제이다.

html 태그 내에 다음과 같은 코드를 삽입하여 쉽게 인식하는 시간을 비교할 수 있다.
<div><img src="/assets/image/time.png" alt="time"></div>

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