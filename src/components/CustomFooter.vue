<template>
    <footer class="footer">
        <img src="/general/menu/logo.png" alt="SiopiFácil" />
    </footer>
</template>

<script>
export default {
    name: 'CustomFooter'
}
</script>

<style lang="scss">

.footer {
    @apply py-8 flex justify-center items-center;
    img {
        @apply h-12;
    }
}

</style>