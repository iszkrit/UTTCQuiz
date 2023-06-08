const Quiz = {
    html: {
        0:{
            point: 10,
            text: "開始タグは<div>のように要素の名前を山括弧で括ったものです。対して終了タグは開始タグにスラッシュを加えたものになるのですが、正しい終了タグはどちらか答えよ  ①<div/>, ②</div>",
            answer: "②</div>",
            isAlreadySelected: false
        },
        1:{
            point: 20,
            text: "HTML要素には種類がたくさんあり、代表的なものとして、範囲を指定するdivや、タイトル文字を表示するh1~h6のヘッダータグなどがあります。それでは、ここで挙げた以外のHTML要素を1人1つずつ答えよ(答えの共有はなしで、答える順番だけ相談してください)",
            answer: "p, a, ul, ol, li, span, br, img, form, input, textarea, button, table, tbody, tr, select, label, scriptなど",
            isAlreadySelected: false
        },
        2:{
            point: 30,
            text: "HTMLという略称は何の略か答えよ",
            answer: "HyperText Markup Language",
            isAlreadySelected: false
        },
        3:{
            point: 40,
            text: "htmlタグの直下で1度だけ使用するheadタグとbodyタグの役割をそれぞれ答えよ",
            answer: "「headタグ」は検索エンジンやWebブラウザに向けた情報(メタデータ)を定義するコード(具体的にはページのタイトル, 言語, ページを書いた人の情報など)を記述し、画面上に表示されない部分全体を囲うタグで、「bodyタグ」は、コンテンツ自身を構成するコードを記述し、画面上に表示される部分全体を囲うタグ",
            isAlreadySelected: false
        },
        4:{
            point: 50,
            text: "<script>タグの属性に async, defer があります。それらを付与したときと付与していないときの挙動の違いについて答えよ",
            answer: "async, deferを付与すると、JavaScriptのファイルの読み込みをHTMLのパースと並行して行うため、読み込みによるパースや画面表示の遅延を回避し、サイトのメインコンテンツの読込がある程度高速化できる",
            isAlreadySelected: false
        }
    },
    css: {
        0:{
            point: 10,
            text: "font-familyは何を指定するためのプロパティか答えよ",
            answer: "文字に適用するフォント（書体)",
            isAlreadySelected: false
        },
        1:{
            point: 20,
            text: "marginとpaddingはいずれもコンテンツエリアの周りを囲むスペースを調整するプロパティですが、両者の違いを説明せよ",
            answer: "marginとpaddingを理解するためには、borderを含めた「ボックスモデル」の概念で要素を捉えることが大切です。marginは、囲み枠の線(border)よりも外に存在するので、隣り合う他の要素との距離を開ける一方で、paddingは、囲み枠の線よりも内側に存在するので、囲み枠の線と、コンテンツの距離を開けます",
            isAlreadySelected: false
        },
        2:{
            point: 30,
            text: "background-color: rgba(255, 255, 255, 0.5);は、どのような背景色を設定しているか答えよ",
            answer: "透明度が50%の白色です",
            isAlreadySelected: false
        },
        "3":{
            point: 40,
            text: "CSSという略称は何の略か答えよ",
            answer: "CSSはCascading Style Sheetsの略称です",
            isAlreadySelected: false
        },
        "4":{
            point: 50,
            text: "Block__element--modifierの形で命名し、それぞれアンダースコア2つとハイフン2つで区切るCSSの記法（命名規則）を俗になんというか答えよ",
            answer: "BEM記法　(CSSのバッティングを防いだり、HTMLをみたときにどこのCSSに記述したかの予想を容易にしてくれたりとメリットがたくさんある）",
            isAlreadySelected: false
        }
    },
    "js": {
        "0":{
            point: 10,
            text: "Javascriptにおけるコメントアウトの書き方として正しいものは次のうちどれか答えよ ①// ②# ③<!--　--> ④*",
            answer: "①//",
            isAlreadySelected: false
        },
        "1":{
            point: 20,
            text: "JavaScriptにおける「==」と「===」の違いを答えよ",
            answer: "「==」は型変換を行い比較するのに対して、「===」は型も含めて厳密に比較する。",
            isAlreadySelected: false
        },
        "2":{
            point: 30,
            text: "JavaScriptにおいて変数宣言をするときに使われる「let」と「const」の違いを答えよ",
            answer: "letのみ再代入が可能なため、for文やwhile文の繰り返し構文に利用できる。",
            isAlreadySelected: false
        },
        "3":{
            point: 40,
            text: "JavaScriptにおける非同期処理の存在理由と方法を軽く説明せよ",
            answer: "非同期処理を行うことで、時間のかかる処理が完了するまでの間、他の処理を進めていくことができます。非同期処理には「コールバック関数」「Promise」「Async/Await」などのさまざまな方法があります。",
            isAlreadySelected: false
        },
        "4":{
            point: 50,
            text: "JavaScriptの標準化された規格であるEcmaScriptについて、クラスやモジュール、アロー関数、Promiseなどが追加されることになった大改訂は何年に起きたでしょうか？",
            answer: "2015年",
            isAlreadySelected: false
        }
    },
    "uttc": {
        "0":{
            point: 10,
            text: "UTTCという略称は何の略か答えよ",
            answer: "UTokyo Tech Club",
            isAlreadySelected: false
        },
        "1":{
            point: 20,
            text: "UTTCにおける「精神と時の部屋」はどこにあるか答えよ",
            answer: "discordのボイスチャンネル",
            isAlreadySelected: false
        },
        "2":{
            point: 30,
            text: "UTTC代表：奥田の下の名前である「いぶき」の正しい漢字は次のうちどれか答えよ　　　　　　　　　　　　　　　　　　①伊吹 ②息吹 ③威吹 ④伊武来 ⑤勇吹輝 ⑥威舞樹",
            answer: "④伊武来",
            isAlreadySelected: false
        },
        "3":{
            point: 40,
            text: "ラウンジ内に飾ってある絵画の作品名、もしくは作者の名前を答えよ",
            answer: "NickWalkerのVANDALISM　(ニックウォーカーは、世界で最も有名なストリートアーティストの一人。イギリスのグラフィティ現象の先駆者で、バンクシーにも影響を与えた)",
            isAlreadySelected: false
        },
        "4":{
            point: 50,
            text: "UTTCのメンターに新しく入られたのは次のうちどれ？ ①脇阪（わきざか）②脇阪（わきさか）③脇坂（わきざか）④脇坂（わきさか）",
            answer: "①脇阪（わきざか） (これからよろしくお願いします！）",
            isAlreadySelected: false
        }
    }
}

export default Quiz;