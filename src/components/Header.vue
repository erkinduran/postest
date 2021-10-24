<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container-fluid">
            <a class="navbar-brand" href="javascript:">
                <i class="fas fa-home"></i>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="javascript:">Food</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:">Burger</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        return {}
    },
})
</script>

<style lang="sass">
    .navbar
        a
            &::after
                font-family: "Font Awesome 5 Free"
                font-weight: 900
                content: "\f054"
                margin-left: 10px
</style>