<script lang="ts">
  import type { Team } from "../interfaces/index";
  export let teams: Team[];
</script>

<div class="main">
  {#each teams as team}
    <div class="team">
      <div class="name">
        {team.id}
      </div>
      <div class="score">
        {team.score}
      </div>
    </div>
  {/each}
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
  }
</style>
