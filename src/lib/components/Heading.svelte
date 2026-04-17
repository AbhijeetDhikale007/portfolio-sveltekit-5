<script lang="ts">
	let { HeadingTitle } = $props();
</script>

<h1 class="heading text-center mt-18 mb-3 text-20 font-extrabold font-Arsenal">
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
</style>
