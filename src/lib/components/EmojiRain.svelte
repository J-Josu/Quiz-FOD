<script lang="ts">
  import { onMount } from "svelte";
  import { emojiCount } from "$stores/stores";

  const EMOJI_DUPLICATION_STEP = 4;

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
        emoji.y += 0.5 * emoji.r;
        return emoji.y > 110 ? null : emoji;
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
            (state === "RESETED" ? emojiCount.lastCount() : $emojiCount) /
              EMOJI_DUPLICATION_STEP
          )
        )
      )
        .fill(null)
        .map((_) => {
          return {
            character:
              state === "INCREMENTED"
                ? characters.correct
                : state === "EQUAL"
                ? characters.unknown
                : characters.bad,
            x: Math.random() * 100,
            y: Math.random() * -10,
            r: 0.1 + Math.random() * 1,
          };
        })
        .sort((a, b) => a.r - b.r),
    ];
    frame !== -1 && cancelAnimationFrame(frame);
    loop();
  };

  onMount(() => {
    emojiCount.subscribe(() => startLoop(), true);
  });
</script>

<div>
  {#each emojis as emoji}
    <span
      style="left: {emoji.x}%; top: {emoji.y}%; transform: scale({emoji.r});opacity:{emoji.r +
        0.25}">{emoji.character}</span
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
    font-size: clamp(4px, 5vw, 2rem);
    user-select: none;
  }
</style>
