<form action="#" method="post" class="input" on:submit|preventDefault={handleSubmit}>
    <strong>Hand in the flag:</strong> 
    <input bind:value={flag} type="text" id="inputFlag" placeholder="string from the txt file"/>
    <input type="submit" value="Send"/>
</form>

<script lang="ts">
    import axios from "axios";
    import config from "../config.json"

    let flag = "";

    async function handleSubmit() {
        const response = await axios.post(config.host + ":" + config.port + config.route + "@flag/submit", {
            flag,
            })
    }
</script>

<style>
    .input {
		margin-bottom: 2rem;
		border: 1px solid rgba(var(--accent-light), 25%);
		background: linear-gradient(rgba(var(--accent-dark), 66%), rgba(var(--accent-dark), 33%));
		padding: 1.5rem;
		border-radius: 8px;
        width: 100%;
	}
	.input code {
		font-size: 0.8em;
		font-weight: bold;
		background: rgba(var(--accent-light), 12%);
		color: rgb(var(--accent-light));
		border-radius: 4px;
		padding: 0.3em 0.4em;
	}
	.input strong {
		color: rgb(var(--accent-light));
	}

    input[type=text] {
        width: 78%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border-radius: 8px;
    }

    input[type=submit] {
        width: 100%;
        height: 3rem;
        margin-top: 1rem;
        background-color: #ff8c00;
        border-radius: 8px;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
    }
</style>