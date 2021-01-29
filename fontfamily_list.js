var fontfamily_list = [];
(function(){
  fontfamily_list = [];
  var check_font_list = [
    'arial',
    'arial black',
    'arial narrow',
    'arial unicode ms',
    'Century Gothic',
    'Franklin Gothic Medium',
    'Gulim',
    'Dotum',
    'Haettenschweiler',
    'Impact',
    'Ludica Sans Unicode',
    'Microsoft Sans Serif',
    'MS Sans Serif',
    'MV Boil',
    'New Gulim',
    'Tahoma',
    'Trebuchet',
    'Verdana',

    'serif',
    'Batang',
    'Book Antiqua',
    'Bookman Old Style',
    'Century',
    'Estrangelo Edessa',
    'Garamond',
    'Georgia',
    'Gungsuh',
    'Latha',
    'Mangal',
    'MS Serif',
    'PMingLiU',
    'Palatino Linotype',
    'Raavi',
    'Roman',
    'Shruti',
    'Sylfaen',
    'Times New Roman',
    'Tunga',

    'monospace',
    'BatangChe',
    'Courier',
    'Courier New',
    'DotumChe',
    'GlimChe',
    'GungsuhChe',
    'HG行書体',
    'Lucida Console',
    'MingLiU',
    'ＭＳ ゴシック',
    'ＭＳ 明朝',
    'OCRB',
    'SimHei',
    'SimSun',
    'Small Fonts',
    'Terminal',
    
    'fantasy',
    'alba',
    'alba matter',
    'alba super',
    'baby kruffy',
    'Chick',
    'Croobie',
    'Fat',
    'Freshbot',
    'Frosty',
    'GlooGun',
    'Jokewood',
    'Modern',
    'Monotype Corsiva',
    'Poornut',
    'Pussycat Snickers',
    'Weltron Urban',

    'cursive',
    'Comic Sans MS',
    'HGP行書体',
    'HG正楷書体-PRO',
    'Jenkins v2.0',
    'Script',

    'MS UI Gothic',
    'ＭＳ Ｐゴシック',
    'ＭＳ ゴシック',
    'ＭＳ Ｐ明朝',
    'ＭＳ 明朝',
    'メイリオ',
    'Meiryo UI',
    '游ゴシック',
    '游明朝',
    'ヒラギノ角ゴ Pro W3',
    'ヒラギノ角ゴ ProN W3',
    'ヒラギノ角ゴ Pro W6',
    'ヒラギノ角ゴ ProN W6',
    'ヒラギノ角ゴ Std W8',
    'ヒラギノ角ゴ StdN W8',
    'ヒラギノ丸ゴ Pro W4',
    'ヒラギノ丸ゴ ProN W4',
    'ヒラギノ明朝 Pro W3',
    'ヒラギノ明朝 ProN W3',
    'ヒラギノ明朝 Pro W6',
    'ヒラギノ明朝 ProN W6',
    '游ゴシック体',
    '游明朝体',
    'Osaka',
    'Osaka－等幅',
    'Droid Sans',
    'Roboto',
  ];
  if (typeof variable !== 'undefined' && Array.isArray(fontFamily_extra_list)){
    for (var i=0;i<fontFamily_extra_list.length;i++){
        check_font_list.push(fontFamily_extra_list[i]);
    }
  }
  var check_code = "a";
  var check_codepoint = {
    ja: 'あ'
  };

  var check = function(fontname,str){
    return document.fonts.check("12px '" + fontname + "'",str);
  };
  for (var i=0;i<check_font_list.length;i++){
    var name = check_font_list[i];
    if (check(name,check_code)){
      var obj = {name: name, lang:{}};
      for (var key in check_codepoint){
        if (check(name,check_codepoint[key])){
          obj.lang[key] = true;
        }else{
          obj.lang[key] = false;
        }
      }
      fontfamily_list.push(obj);
    }
  }
})();
