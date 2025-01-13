---
title: 깃허브 블로그 만들기 (2)
date: 2025-01-12
categories: [jekyll-theme-chirpy]
tags: [깃허브 블로그, Github Blog, Jekyll, minimal mistakes, jekyll-theme-chirpy]    
---

# jekyll-theme-chirpy를 이용해서 깃허브 블로그 만들기

<ol>
    <li><a href="https://github.com/cotes2020/jekyll-theme-chirpy">jekyll-theme-chirpy 깃허브</a>에서 repository를 folk하고 주소는 [username]/[username].github.io으로 생성</li>
    (만약 본인 계정명이 "test1"이라면 test1/test1.github.io)
    <li>생성한 repository에서 <strong>Settings</strong> -> <strong>Pages</strong> -> <strong>Build and depleyment</strong>을 다음과 같이 설정</li>
    <img src="https://raw.githubusercontent.com/manim2412/image/main/settings-pages.png" alt="page settings"/>
    <li>local에서 repository git clone</li>
    <li>init 스크립트 실행
        <pre><code>bash tools/init.sh</code></pre>
    </li>
    <li>dependency 설치
        <pre><code>bundle</code></pre>
    </li>
    <li>root 경로에서 서버 실행 후 localhost:4000 접속
        <pre><code>bundle exec jekyll serve</code></pre>
    </li>
</ol>

# 참조
[chirpy getting started](https://chirpy.cotes.page/posts/getting-started/)