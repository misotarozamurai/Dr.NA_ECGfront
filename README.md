# Dr.NA_ECGfront

name : Masakatsu Shibata

## ■ インストール

- 初期  

    ``` shell
    $ npm init -y
    ```

- webpack

    ``` shell
    $ npm i -D webpack webpack-cli
    ```

- babel

    ``` shell
    $ npm i -D babel-loader @babel/core @babel/preset-env
    ```

    ``` shell
    $ npm i -S core-js@3
    ```

- babelで`aync/await`の対応

    ``` shell
    npm i -S regenerator-runtime
    ```

- webpackでsassをbundle

    ``` shell
    $ npm i -D sass-loader node-sass style-loader css-loader
    ```

- imageのbundle

    ``` shell
    $ npm i -D url-loader file-loader
    ```

## ■ 設定

### ● babel

- <a href="./.babelrc">`.babelrc`</a> に記載

### ● webpack

- <a href="./webpack.config.js">`webpack.config.js`</a> に記載

## ■ 運用

- ビルド

    ``` shell
    $ npm run build
    ```

- 保存時自動ビルド

    ``` shell
    $ npm run watch
    ```

- 保存時自動ビルド &amp; ブラウザ更新

    ``` shell
    $ npm run serve
    ```

<p>&copy;2020 Dr.NA_ECGfront</p>
