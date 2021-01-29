# fontfamily_list

* フォントファミリーで使用出来るものの一覧を`fontfamily_list`配列に入れて返します。
* `fontfamily_list`の1要素は、次のプロパティで構成されています。
    * `"name"` : フォントファミリー名
    * `"lang"` : 使用出来る言語一覧
        * `"ja"` : 日本語使用可能フォントならtrue

* `window`の`'fontfamily-loaded'`イベント発生以降で有効な値が入っています。

## sample

* 基本的には、sample.htmlが全てです。


### 読み込み

```html
<head>
 <script src="fontfamily_list.js" type="text/javascript" charset="UTF-8" ></script>
</head>
```

### 使用

```html
<script>
  window.addEventListener('fontfamily-loaded',function(){
    for(var i=0;i<fontfamily_list.length;i++){
        var fontfamily = fontfamily_list[i]
        document.write(fontfamily.name)
        document.write(" : ")
        for (var key in fontfamily.lang){
            document.write(key)
            document.write("=")
            document.write(fontfamily.lang[key])
            document.write("<br>")
        }
    }
  });
</script>
```

