<script>

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    
    function remove() {
		dispatch('remove', { id });
	}

	function toggleStatus() {
        let newStatus = !complete;
		dispatch('toggle', {
            id,
            newStatus
        });
    }
    

    export let id; // document ID
    export let text;
    export let complete;
</script>

<style>
    .is-complete {
        text-decoration: line-through;
        color: green;
    }
    li{
      border: solid;
      border-radius: 2rem;
      padding: 1rem;
      margin: 0.2rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    button{
      border: none;
      background-color: white;
    }
    .end{
      align-self: flex-end;
    }
    .items {
      padding-right: 3rem;
    }
</style>


<li>

{#if complete}
    <span class="items is-complete">{ text }</span>
    <button class="end" on:click={toggleStatus}> ✔️ </button>
{:else}
    <span class="items">{ text }</span>
    <button class="end" on:click={toggleStatus}> ❌ </button>
{/if}

<button on:click={remove}> 🗑 </button>

</li>