<script lang="ts">
	let { HeadingTitle } = $props();
</script>

<h1 class="heading text-center mt-[5.25rem] mb-3 text-[15rem] font-extrabold arsenal-sc">
	{HeadingTitle}
</h1>

<style lang="scss">
	.heading {
		color: transparent;
		background-image: linear-gradient(0deg, #adada9 0%, #ffffff 100%);

		background-clip: text;
		-webkit-background-clip: text;

		-webkit-text-fill-color: transparent;
	}

	.arsenal-sc {
		font-family: 'Arsenal SC', sans-serif;
	}
</style>
