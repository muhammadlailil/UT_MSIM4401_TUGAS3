<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>Lailil Mahfud</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div id="container">
                <div class="text-center">
                    <img
                        src="https://awsimages.detik.net.id/community/media/visual/2021/11/08/kampus-ut-di-kota-semarang.jpeg?w=1200"
                        alt="Universitas Terbuka"
                        style="height: 100%; border-radius: 5px"
                    />
                    <p style="margin-top: 10px">Universitas Terbuka Semarang</p>
                </div>
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
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/vue";

export default defineComponent({
    name: "HomePage",
    components: {
        IonButtons,
        IonContent,
        IonHeader,
        IonMenuButton,
        IonPage,
        IonTitle,
        IonToolbar,
    },
});
</script>
<style scoped>
#container {
    padding: 15px;
}
.text-center{
  text-align: center;
}
</style>