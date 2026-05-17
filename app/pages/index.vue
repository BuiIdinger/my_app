<template>
  <div v-if="false" class="p-[20px]">
    <h1 class="font-bold text-[30px]">buildinger debug junk stuff</h1>
    <p>(Internal)</p>

    <p class="italic font-bold my-[20px]">BUILDINGER_CONFIG</p>
    <pre>PREFORM_LOW_LEVEL_TRACKING: False</pre>
    <pre>TRACK_USER: TRUE</pre>

    <p class="italic font-bold my-[20px]">BUILDINGER_VERSIONS</p>

    <pre>Buildinger_WebServer_V → 2.3.1 PROD</pre>
    <pre>Buildinger_WebSocket_Mod_V → 2.3.1 PROD</pre>
    <pre>Buildinger_Spine_V → 1.6.4 PROD</pre>
    <pre>Buildinger_Marrow_V → 2.3.1 PROD</pre>
    <pre>Buildinger_BigBelle_V → 1.2.0 PROD</pre>
    <pre>Buildinger_Hippocampus_V → 1.2.0 PROD</pre>
    <pre>Buildinger_Vagus_V → 1.0.0 PROD</pre>

    <p class="italic font-bold my-[20px]">BUILDINGER_REQUEST_FLOW (DENOTED)</p>
    <pre>ed8a4651-3cee-455a-8e9d-552e7d6c9e63 (71988005)                  END  </pre>
    <pre>                                                               UNAVAIL_K     ACCEPT → RECV → RECV_1 → WRITE_1 → RECV_2 → OMIT    </pre>
    <pre>   OK     akl-1-1-in-f-001  COPY RX        XDP_PASS                ↑             ↑                        → CON_END → FD_CLOSE</pre>
    <pre>NLB → Instance Pool → NIC | Buildinger_XDP_D_V_PROD → LNX_IO_URING ⮂ B_SPINE_P ⮂ B_MARROW_P → B_BWS_P</pre>
    <pre>   ↓                           ↓         ↑                                                                → HASH_BROWNS</pre>
    <pre> UNAVAIL                     B_XDP_FW → FWD                                      → B_BIGBALLS_MONITORING ↓   </pre>
    <pre>                                                                                                       OK (OK)  </pre>

    <p class="italic font-bold my-[20px]">BUILDINGER_USER_DATA_COLLECTION_STDOUT</p>

    <pre>A data collection profile could not be found (ERROR: 49)</pre>
    <pre class="font-bold">FLOW:</pre>
    <pre>REQ ↘</pre>
    <pre>     NULL</pre>
    <pre class="mt-[10px]">Confidence: ~0%</pre>
=
    <p class="italic font-bold my-[20px]">BUILDINGER_STFUF</p>
    <pre class="text-pink-500 text-[30px]">0.3V | 1A</pre>
    <pre class="text-pink-500 text-[30px]">okay i think</pre>
    <pre class="text-pink-500 text-[30px]">request was from sub-system, system handed via memory buffer ring</pre>
    <pre class="text-pink-500 text-[30px]">dedicated polling not used (no mem ring buffer setup), interrupt request to cpu was used for request, 0.3 nanoseconds</pre>
  </div>


  <Hero />

<!--    <img-->
<!--      src="/home-splash-one.svg"-->
<!--      alt="Wave Background"-->
<!--      class="w-full h-auto block relative"-->
<!--    />-->
  <Collections />
</template>

<script setup lang="ts">
import Collections from "~/components/home/collection/Collections.vue";
import Hero from "~/components/home/hero/Hero.vue";
</script>