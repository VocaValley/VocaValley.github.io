# VocaValley Fake歌手创作者社群
**在找bug？如果您对vocavalley网站的开发维护感兴趣，欢迎联系开发组（（（（（（**

## 投稿须知
- 文件命名字符仅限`a-z`、`A-Z`、`0-9`及符号`-_.`，不可带有空格。
- Markdown页面文件应妥善命名后放入根目录下**pages**文件夹。
- 素材文件应妥善命名后放入根目录下**assets**文件夹中对应分类中，杂项请放入**misc**分类。
- 投稿请开pull request，也接受通过issue的投稿。

## Markdown页面渲染
将Markdown文件路径作为`page`参数传递给**index.html**以实现Markdown页面渲染。  
示例如下：  
```html
<a href="/index.html?page=pages/index.md">查看主页</a>
```
```markdown
[查看README](/index.html?page=README.md)
```

## Markdown技术支持
- [MarkdownIt](https://github.com/markdown-it/markdown-it)
- [typora-purple-theme](https://github.com/hliu202/typora-purple-theme)