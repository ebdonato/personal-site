<template>
    <q-layout view="hHh lpR fFf">
        <q-header class="bg-accent text-primary">
            <q-toolbar class="row justify-center">
                <q-btn
                    flat
                    size="md"
                    v-for="(link, index) in links"
                    :key="index"
                    color="primary"
                    :icon="link.icon"
                    :aria-label="link.caption"
                    type="a"
                    :href="link.url"
                    target="_blank"
                >
                    <q-tooltip :delay="1000"> {{ link.caption }} </q-tooltip>
                </q-btn>
            </q-toolbar>
        </q-header>

        <q-footer class="bg-accent text-primary">
            <q-toolbar>
                <q-toolbar-title>
                    <div class="text-center text-bold">Eduardo DONATO - Portfólio</div>
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup>
import links from "assets/links.js"
</script>
