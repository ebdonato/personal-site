<template>
    <q-layout view="hHh lpR fFf">
        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer class="bg-accent text-primary flex row justify-center">
            <div class="q-mx-xl q-my-xs q-gutter-lg">
                <q-btn
                    flat
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
            </div>
        </q-footer>
    </q-layout>
</template>

<script setup>
const links = [
    {
        title: "LinkedIn",
        caption: "linkedin.com/in/ebdonato",
        icon: "fa-brands fa-linkedin",
        url: "https://www.urledin.com/in/ebdonato/",
    },
    {
        title: "Github",
        caption: "github.com/ebdonato",
        icon: "fa-brands fa-github",
        url: "https://www.github.com/ebdonato/",
    },
    {
        title: "Site Pessoal",
        caption: "Contatos",
        icon: "fa-solid fa-globe",
        url: "https://mono.direct/ebdonato",
    },
    {
        title: "Forum",
        caption: "forum.quasar.dev",
        icon: "record_voice_over",
        url: "https://forum.quasar.dev",
    },
    {
        title: "Twitter",
        caption: "@quasarframework",
        icon: "rss_feed",
        url: "https://twitter.quasar.dev",
    },
    {
        title: "Facebook",
        caption: "@QuasarFramework",
        icon: "public",
        url: "https://facebook.quasar.dev",
    },
    {
        title: "Quasar Awesome",
        caption: "Community Quasar projects",
        icon: "favorite",
        url: "https://awesome.quasar.dev",
    },
]
</script>
