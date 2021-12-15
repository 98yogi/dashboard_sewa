<template>
  <div id="app">
    <div class="section">
      <div class="columns">
        <div class="column is-12-mobile is-4-desktop is-4-tablet">
          <h1 class="title is-5 header">Status Objek</h1>
          <div class="columns">
            <div class="column is-12">
                  <statues-component></statues-component>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="columns">
            <div class="column is-mobile is-12-desktop is-11-tablet">
              <h1 class="title is-5">Data Pembayaran</h1>
              <div class="columns">
                <div class="column is-12-tablet">
                <payment-component></payment-component>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <!-- <div class="columns">
        <div class="column ">
          <h1 class="title is-5">Objek Pemakaian</h1>
          <div class="columns">
            <div class="column">
              asdviasvdi
            </div>
          </div>
        </div>
        </div> -->
        <!-- <div class="column">
          <div class="columns">
            <div class="column">
              <h1 class="title is-5">Kontrak Peruntukan</h1>
              <div class="columns">
                <div class="column">
                  asbdausdo
                </div>
                <div class="column">
                </div>
              </div>
            </div>
          </div>
        </div> -->
      <!-- </div> -->
        <villages-component></villages-component>
         <div class="columns">
          <div class="column is-6">
            <h1 class="title is-5">Pemakaian Objek</h1>
            <div class="columns">
              <div class="column">
                <contract-component></contract-component>
              </div>
            </div>
          </div>
          <div class="column">
          <div class="columns">
            <div class="column is-mobile is-12-desktop is-11-tablet">
              <h1 class="title is-5">Objek Kelurahan</h1>
              <div class="columns">
                <div class="column is-12-tablet">
                <subdistricts-component></subdistricts-component>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
      <!-- <h1 class="title is-5">Objek Peruntukan Kontrak</h1> -->
  </div>
</template>
./components/StatuesComponent.vue
