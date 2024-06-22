## 対象ファイルの一覧を取得させる方法

```sh
# 対象ファイルを起点に依存ファイルを算出する
# →こっちは逆に使っているファイルリストなだけで、影響範囲には入らない
$ npx depcruise src/components/LocalCounter/LocalCounter.tsx -x 'node_modules' -T text

# 対象ファイルにたどり着くファイルを算出する
$ npx depcruise src --reaches "LocalCounter.tsx" -T text
```

```sh
# 全てのファイルに--reachesをつけて引数に渡す方法
# sedで先頭に文字列を足して一行で展開される
$ echo $(ls | sed 's/^/--reaches /')
# --reaches file1 --reaches file2 --reaches file3
```
