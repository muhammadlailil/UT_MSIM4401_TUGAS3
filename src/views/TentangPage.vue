<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button text="" default-href="/pages/home" :icon="arrowBack"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div id="container">
                <h3><strong>Lailil Mahfud</strong></h3>
                <ul>
                    <li>
                      NIM : 042096383
                    </li>
                    <li>
                      Nama : Muhammad Lailil Mahfud
                    </li>
                    <li>
                      UPBJJ : Semarang
                    </li>
                </ul>
                <p>@tugas3</p>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonBackButton
} from "@ionic/vue";

import { close,arrowBack } from "ionicons/icons";
export default defineComponent({
    name: "HomePage",
    components: {
        IonButtons,
        IonContent,
        IonHeader,
        IonPage,
        IonToolbar,
        IonBackButton
    },
    setup() {
        return {
            close,arrowBack
        };
    },
    data() {
        return {
            getBackButtonText() {
                return "lorem";
            },
        };
    },
});
</script>
<style scoped>
#container{
  padding: 15px;
}
h3{
  margin: 0px;
}
ul{
  list-style: none;
  padding-left: 0px;
}
</style>