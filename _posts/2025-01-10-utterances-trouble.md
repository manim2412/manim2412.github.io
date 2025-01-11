---
layout: posts
title:  "minimal-mistakes utterances 댓글 문제 해결"
categories: mmistakes
--- 
<details>
    <summary>Prerequisite</summary>
    1) <span class="platinum">_config.yml</span> 세팅     
    <div><img src="/assets/image/configSetting.png" alt="configSetting"></div>
    2) utterances 설치
    <div><img src="/assets/image/utterancesSetting.png" alt="utterancesSetting"></div>
</details>

### 1\. utterances 댓글 창이 보이지 않을 때
<span class="platinum">_posts</span> 폴더 내의 각 게시물(.md)에 script 일일이 추가 (반복 작업의 번거로움 때문에 임시 해결)
<div><img src="/assets/image/utterancesSetting.png" alt="utterancesSetting"></div>

### 2\. utterances 댓글 창에 댓글이 작성되지 않을 때
minimal mistakes 깃허브 레포지토리의의 issues 활성화   
<span><img src="/assets/image/githubSetting.png" alt="githubSetting"></span>
\>
<span><img src="/assets/image/githubFeature.png" alt="githubFeature"></span>
\>
<span><img src="/assets/image/githubIssues.png" alt="githubIssues"></span>

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