<script>
  import Profile from "./Profile.svelte";
  import Todos from "./Todos.svelte";

  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";

  let user;

  const unsubscribe = authState(auth).subscribe(u => {
	console.log(u);
	  user = u;
  });

  function login() {
    auth.signInWithPopup(googleProvider);
  }
</script>

<style>
	section{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 100%;
	}
	div{
		margin-bottom: 1rem;
		text-align: center;
	}
	h1{
		font-size: 2rem;
	}
</style>

<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.0/css/bulma.min.css">
</svelte:head>

<section>
  {#if user}
    <Profile {...user} />
    <button class="button is-primary" on:click={() => auth.signOut()}>Logout</button>
    <hr />
    <Todos uid={user.uid} />
  {:else}
	<div>
	<h1>Welcome to ToDoSvelter</h1>
	<p>Log in to use the app</p>
	</div>
    <button class="button is-primary" on:click={login}>Sign-in with Google</button>
  {/if}
</section>