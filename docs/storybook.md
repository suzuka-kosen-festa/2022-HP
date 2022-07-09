<h1 align="center">
  Storybookの使い方
</h1>

<p align="center">
  楽しい技術なので使えるようになりましょう
</p>

&nbsp;

## Storybook ってなに

UI コンポーネントとページを分離して構築するためのオープンソースツール。UI 開発、テスト、ドキュメント作成を効率化する。

&nbsp;

## \*.stories.ts の書き方

[Storybook 公式チュートリアル](https://storybook.js.org/tutorials/ui-testing-handbook/react/en/composition-testing/)にある TaskItem を TS 化&CSF3.0 に書き換えたものを例に書きます。

```ts
import type { ComponentStoryObj } from "@storybook/react";
import { TaskItem } from ".";
import type { task } from ".";

type Story = ComponentStoryObj<typeof TaskItem>;

export default { component: TaskItem };

const defaultTask: task = {
  id: "1",
  title: "OK Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2021, 0, 10, 10, 0),
};

export const Default: Story = {
  args: { task: defaultTask },
};

export const Pinned: Story = {
  args: { task: { ...defaultTask, state: "TASK_PINNED" } },
};

export const Archived: Story = {
  args: { task: { ...defaultTask, state: "TASK_ARCHIVED" } },
};
```

&nbsp;

## \*.test.ts の書き方

```ts
import initStoryshots from "@storybook/addon-storyshots";
initStoryshots();
```

これだけ

この状態で

```
yarn test
```

を走らせる

意図的に UI を修正したい場合は、

全部の snapshot を更新するなら(非推奨)

```
yarn test -- -u
```

特定の snapshot を更新したい場合は(推奨)

```
yarn test -- -u -t 'Test名(エラーが出てるテストで意図的に修正するものの名前)'
```

で更新
