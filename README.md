# JAVAアプリケーション開発の依頼（梱包資材選別アプリ）


## 【 依頼内容 】

・開発内容

商品の３辺サイズと重さ・すき間の寸法を入力し、<br />
その商品が入る最適な段ボールをマスタからピックアップ(表示)したい。<br />

簡易的な形ではありますが、<br />
添付ファイルにて使っているツールを<br />
シンプルにweb化してほしい。<br />

＝その他要望＝<br />

・デザインは相談して決めたい。<br />
・運送会社の状況・ルールが常に変わるため、<br />
　マスタはこちら側でも修正できるようにしたい。<br />
・イレギュラーケースもアプリに盛り込みたいので、<br />
　社内精査後、継続して改良依頼する可能性があります。


## 使用方法
- コマンドウィンドウで次のコマンドを実行してプログラムを起動します。<br />
`gradlew bootRun`<br />
- 次のブラウザで `localhost:8080` に移動します。<br />
- 基本ページ(`localhost:8080`)では、必要な値を入力して最適化された梱包材を選別できます。<br/><br />
![ホーム](https://github.com/masayukipy/optimal-cardboard/blob/master/images/home.png)<br/><br />
- 管理者ページ(`localhost：8080/admin`)では、段ボールを変更、削除、または追加できます。<br/><br />
![管理者](https://github.com/masayukipy/optimal-cardboard/blob/master/images/admin.png)<br/>
