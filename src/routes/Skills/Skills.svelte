<script lang="ts">
    import { fly } from 'svelte/transition'
    import { Heading } from '$lib/index.js'
    import { CardDiv } from "$lib/index.js"
    import { Card1, Card2, Card3, Card4, Card5, Card6, Card7 } from '$lib/index.js'
    import './Card.scss'
</script>

<div class="Skills" in:fly={{x: -100, duration: 1000}}>
    <Heading HeadingTitle='Skills' />
    <CardDiv HRName='Programming Languages'>
        <div slot="Wrapper">
          <Card1/>
        </div>
    </CardDiv>
    <CardDiv HRName='Markup and Styling'>
        <div slot="Wrapper">
          <Card2/>
        </div>
    </CardDiv>
    <CardDiv HRName='Web Development Tools'>
      <div slot="Wrapper">
        <Card3/>
      </div>
    </CardDiv>
    <CardDiv HRName='Frameworks & Libraries'>
        <div slot="Wrapper">
          <Card4/>
        </div>
    </CardDiv>
    <CardDiv HRName='Databases'>
        <div slot="Wrapper">
          <Card5/>
        </div>
    </CardDiv>
    <CardDiv HRName='Tools'>
        <div slot="Wrapper">
          <Card6/>
        </div>
    </CardDiv>
    <CardDiv HRName='Other'>
        <div slot="Wrapper">
          <Card7/>
        </div>
    </CardDiv>
</div>

<style lang='scss'>
    .Skills {
        @apply xl:max-w-[85vw] 2xl:max-w-[82vw];
    }
</style>