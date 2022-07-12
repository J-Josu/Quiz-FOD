<script lang="ts">
  import { emojiCount } from "$stores/stores";
  import { onMount } from "svelte";

  type Emoji = {
    character: string;
    x: number;
    y: number;
    r: number;
  };

  const characters = {
    correct: "😎",
    bad: "😰",
    unknown: "🤔",
  };

  let emojis: Emoji[] = [];
  let frame: number = -1;
  const loop = () => {
    frame = requestAnimationFrame(loop);

    emojis = emojis
      .map((emoji) => {
        emoji.y += 0.7 * emoji.r;
        return emoji.y > 120 ? null : emoji;
      })
      .filter((emoji) => emoji !== null) as Emoji[];

    if (emojis.length === 0) {
      cancelAnimationFrame(frame);
      frame = -1;
    }
  };

  const startLoop = () => {
    const state = emojiCount.state();
    emojis = [
      ...emojis,
      ...new Array(
        Math.pow(
          2,
          Math.floor(
            (state === "RESETED" ? emojiCount.lastCount() : $emojiCount) / 5
          )
        )
      )
        .fill(null)
        .map((_, i) => {
          return {
            character:
              state === "INCREMENTED"
                ? characters.correct
                : state === "EQUAL"
                ? characters.unknown
                : characters.bad,
            x: Math.random() * 100,
            y: -Math.random() * 10,
            r: 0.1 + Math.random() * 1,
          };
        })
        .sort((a, b) => a.r - b.r),
    ];
    console.log("entre");
    frame !== -1 && cancelAnimationFrame(frame);
    loop();
  };

  onMount(() => {
    emojiCount.subscribe(() => startLoop(), true);
  });
</script>

<div>
  {#each emojis as c}
    <span
      style="left: {c.x}%; top: {c.y}%; transform: scale({c.r});opacity:{c.r +
        0.25}">{c.character}</span
    >
  {/each}
</div>

<style>
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    z-index: -1;
  }
  span {
    position: absolute;
    font-size: 5vw;
    user-select: none;
  }
</style>
