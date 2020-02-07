<script>
  export let displayName;
  export let photoURL;
  export let uid;
</script>

<style>
  .card{
    margin: 0.2rem;
    padding: 1rem;
    display: flex;
    align-content: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 5px;
  }
  img{
    margin: 0.2rem;
    align-self: center;
    border: 1px solid;
  }
  .user-info{
    margin-left: 0.4rem;
    flex-direction: column;
  }
  h2{
    font-weight: 900;
  }
</style>

<div class="card">
  <img src={photoURL} width="100" alt="user-avatar" />
  <div class="user-info">
  <h2>Profile:</h2>
  <h3>Hi {displayName}</h3>
  <p>Your user ID is {uid}</p>
  </div>
</div>