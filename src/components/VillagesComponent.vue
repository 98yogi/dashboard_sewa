<template>
    <div class="columns">
        <div class="column is-mobile is-3-desktop is-5">
          <!-- <h1 class="title is-5">Data Objek Kecamatan</h1> -->
          <div class="box">
            <nav class="level is-mobile">
              <div class="level-item has-text-centered">
                <div>
              <p class="is-uppercase is-6">
                {{ selected.subdistrict }}
              </p>
                  <p class="subtitle has-text-info is-uppercase is-4 has-text-weight-bold">
                    {{ selected.calTotal }}
                  </p>
                </div>
              </div>
              <div class="level-item">
                <!-- <span class="icon"> -->
                  <!-- <i class="fa fa-map" aria-hidden="true"></i> -->
                <!-- </span> -->
              <div>
                </div>
              </div>
            </nav>

              <nav class="level m-1">
                <p class="is-uppercase has-text-weight-semibold is-size-6 has-text-success">
                  berijin
                </p>

            <p class="is-size-6 has-text-weight-semibold is-condensed has-text-right">
              {{ selected.berijin }}/{{ selected.berijinPer + "%" }}
            </p>
            </nav>
            <b-progress 
            :rounded="false" 
            :value="selected.berijinPer" 
            type="is-success is-small is-progress">
            </b-progress>
            <nav class="level m-1">
                <p class="is-uppercase has-text-weight-semibold is-size-6 is-text-warning">
                  dicabut
                </p>
            <p class="is-size-6 has-text-weight-semibold is-condensed has-text-right">
              {{ selected.dicabut }}/{{ selected.dicabutPer + "%" }}
            </p>
            </nav>
            <b-progress 
              :rounded="false" 
              :value="selected.dicabutPer" 
              type="is-warning is-small is-progress">
            </b-progress>
            <nav class="level m-1">
                <p class="is-uppercase has-text-weight-semibold is-size-6 has-text-link">
                  ditangguhkan
                </p>
            <p class="is-size-6 has-text-weight-semibold is-condensed has-text-right">
              {{ selected.ditangguhkan }}/{{ selected.ditangguhkanPer + "%" }}
            </p>
            </nav> 
            <b-progress 
              :rounded="false" 
              :value="selected.ditangguhkanPer" 
              type="is-link is-small is-progress">
            </b-progress>
            <nav class="level m-1">
                <p class="is-uppercase has-text-weight-semibold is-size-6 has-text-danger">
                  sengketa
                </p>
            <p class="is-size-6 has-text-weight-semibold is-condensed has-text-right">
              {{ selected.sengketa }}/{{ selected.sengketaPer + "%" }}
            </p>
            </nav>
            <b-progress 
            :rounded="false" 
            :value="selected.sengketaPer" 
            type="is-danger is-small is-progress">
            </b-progress>
          </div>
        </div>

      <div class="column">
        <div class="column">
          <h1 class="title is-5 has-text-right">Objek Kecamatan</h1>
          <div class="box">
            <nav class="level">
              <div class="level">
                <p class="is-uppercase is-6 has-text-weight-semibold">
                9 Kecamatan
              </p>
              </div>
              <div class="level">
                <span class="icon is-large">
                  <i class="fas fa-3x fa-map" aria-hidden="true"></i>
                </span>
              </div>
            </nav>

            <button  v-for="(item, key) in objects" :key="key" @click="changeSelected(item) ">
                {{ item.subdistrict }}  </button> 
        </div>
        </div>
      </div>
    </div>
</template>

<script>
// import ProgressBar from 'vue-bulma-progress-bar'

const dataObjek = [
  {
        subdistrict: 'Arcamanik',
        berijin: 8732,
        berijinPer: '',
        bar: 87,
        dicabut: 73,
        dicabutPer: '',
        bar2: 11,
        ditangguhkan: 234,
        ditangguhkanPer: '',
        bar3: 12,
        sengketa: 217,
        sengketaPer: '',
        bar4: 23, 
        calTotal: ""
    },{
      subdistrict: 'Bojonegara',
        berijin: 2139,
        berijinPer: '',
        bar: 48,
        dicabut: 123,
        dicabutPer: '',
        bar2: 18,
        ditangguhkan: 1237,
        ditangguhkanPer: '',
        bar3: 6,
        sengketa: 23,
        sengketaPer: '',
        bar4: 12,
        calTotal: ""
    },
    {
      subdistrict: 'Karees',
        berijin: 2134,
        berijinPer: '',
        bar: 22,
        dicabut: 328,
        dicabutPer: '',
        bar2: 32,
        ditangguhkan: 892,
        ditangguhkanPer: '',
        bar3: 34,
        sengketa: 10,
        sengketaPer: '',
        bar4: 10,
        calTotal: ""
    },
    {
      subdistrict: 'Cibeunying',
        berijin: 1293,
        berijinPer: '',
        bar: 90,
        dicabut: 234,
        dicabutPer: '',
        bar2: 24,
        ditangguhkan: 1378,
        ditangguhkanPer: '',
        bar3: 34,
        sengketa: 110,
        sengketaPer: '',
        bar4: 12,
        calTotal: ""
    },
    {
      subdistrict: 'Kab. Bandung',
        berijin: 8327,
        berijinPer: '',
        bar: 90,
        dicabut: 572,
        dicabutPer: '',
        bar2: 36,
        ditangguhkan: 232,
        ditangguhkanPer: '',
        bar3: 23,
        sengketa: 23,
        sengketaPer: '',
        bar4: 15,
        calTotal: ""
    },
    {
      subdistrict: 'Ujung Berung',
        berijin: 723,
        berijinPer: '',
        bar: 67,
        dicabut: 372,
        dicabutPer: '',
        bar2: 28,
        ditangguhkan: 123,
        ditangguhkanPer: '',
        bar3: 12,
        sengketa: 9,
        sengketaPer: '',
        bar4: 2,
        calTotal: ""
    },
];

export default {
  // components: { ProgressBar },
  data() {
    return {
      objects: dataObjek,
        selected: {
          subdistrict: 'Kecamatan',
            berijin: 0,
            berijinPer: 0,
            bar: 0,
            dicabut: 0,
            dicabutPer: 0,
            bar2: 0,
            ditangguhkan: 0,
            ditangguhkanPer: 0,
            bar3: 0,
            sengketa: 0,
            sengketaPer: 0,
            bar4: 0,
            calTotal: 0
        }
    }
  },
  methods: {
    changeSelected (data) {
        if (data) {
          data.calTotal = parseInt(data.berijin)
            + parseInt(data.dicabut)
            + parseInt(data.ditangguhkan)
            + parseInt(data.sengketa)
              data.berijinPer = parseInt(data.berijin)
              / 100
              data.dicabutPer = parseInt(data.dicabut)
              / 100
              data.ditangguhkanPer = parseInt(data.ditangguhkan)
              / 100
              data.sengketaPer = parseInt(data.sengketa)
              / 100
          this.selected = data
        }

      },
  },
}
</script>
