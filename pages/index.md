<div class='ad'>
    <i class="ad-iconfont">&#xe633;</i>
    <p class='ad-content'>
        <span class='ad-text'><span>本着“兼听则明，偏信则暗”的原则，现增设</span><a href="/index.html?page=pages/conside.md">《反方意见》</a><span>栏目，并接受符合</span><a href="/index.html?page=README.md">投稿要求</a><span>的投稿。</span></span>
    </p>
</div>
<style>
    @font-face {
        font-family: "iconfont";
        src: url("//at.alicdn.com/t/font_2516453_g6qjhhqblt9.woff2?t=1620545333370")
        format("woff2"),
        url("//at.alicdn.com/t/font_2516453_g6qjhhqblt9.woff?t=1620545333370")
        format("woff"),
        url("//at.alicdn.com/t/font_2516453_g6qjhhqblt9.ttf?t=1620545333370")
        format("truetype");
    }
    .ad-iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .ad {
        height: 60px;
        background-color: #fff;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 16px;
        color: #353535;
        box-shadow: 2px 1px 8px 1px rgb(228, 232, 235);
        margin: 40px auto;
        .ad-iconfont {
            color: #ff6146;
            font-size: 20px;
            margin-right: 10px;
        }
        .ad-content {
            flex: 1;
            overflow: hidden;
            .ad-text {
                display: block;
                width: auto;
                white-space: nowrap;
            }
        }
    }
    @keyframes marquee {
        0% {
        transform: translateX(0);
        }
        100% {
        transform: translateX(-100%);
        }
    }
    .ad-content {
        .ad-text {
            animation: marquee 30s linear infinite;
        }
    }
    .ad-text {
      display: block;
      width: auto;
      white-space: nowrap;
      animation: marquee 30s linear infinite;
      padding-left: 105%;
      padding-right: 120%;
      &:hover {
        animation-play-state: paused;
      }
    }
</style>

# VocaValley

<div align=center><img src="/assets/pics/Avatar.jpg" style="border-radius: 0%; overflow: hidden; width: 500px; height: auto;" /></div>

<div align=center><p><strong>Fake歌手创作者社群</strong></p></div>

<div style="width: 100%; height: auto; text-align:center; margin: 100px auto;">
    <style>
        .btn {
            width: 150px;
            -webkit-border-radius: 10;
            -moz-border-radius: 10;
            border-radius: 10px;
            border: none;
            color: var(--title-color);
            font-family: Georgia;
            font-weight: bold;
            font-size: 17px;
            padding: 12px;
            margin: 10px 20px;
            background: var(--inline-code-bg);
            text-decoration: none;
            cursor: pointer;
        }
        .btn:hover {
            color: white;
            background: var(--title-color);
            text-decoration: none;
        }
    </style>
    <button class="btn" onclick='location.href = ("/index.html?page=pages/stories.md");'>瓜条</button>
    <button class="btn" onclick='location.href = ("/index.html?page=pages/blame.md");'>檄文</button>
    <button class="btn" onclick='location.href = ("/index.html?page=pages/sb.md");'>沙堡论</button>
    <button class="btn" onclick='location.href = ("/index.html?page=pages/gallery.md");'>展厅</button>
    <button class="btn" onclick='location.href = ("/index.html?page=pages/conside.md");'>反方意见</button>
</div>
